/**
 * Sistema de Orçamentação Técnica & Precificação Automatizada
 * Autor: Kaio Gabriel da Silva
 * Objetivo: Padronizar o levantamento de custos, validar margem de contribuição
 *           e gerar resumo de proposta técnica/comercial no Google Sheets.
 */

const PARAMETROS = {
  ABA_INSUMOS: 'Insumos_e_Servicos',
  ABA_PROPOSTA: 'Resumo_Proposta',
  ALIQUOTA_IMPOSTOS: 0.145,     // 14,5% (PIS/COFINS/ISS/IRPJ estimado)
  MARGEM_MINIMA_ALERTA: 0.18,   // 18% de margem líquida mínima recomendada
  CUSTO_HORA_TECNICA: 85.00,    // R$/hora homem técnico
  CUSTO_KM_DESLOCAMENTO: 1.85   // R$/km deslocamento técnico
};

function calcularOrcamentoTecnico() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const abaInsumos = ss.getSheetByName(PARAMETROS.ABA_INSUMOS);
  const abaProposta = ss.getSheetByName(PARAMETROS.ABA_PROPOSTA);

  if (!abaInsumos || !abaProposta) {
    throw new Error('Verifique se as abas "Insumos_e_Servicos" e "Resumo_Proposta" existem.');
  }

  const ultimaLinha = abaInsumos.getLastRow();
  if (ultimaLinha < 2) {
    throw new Error('Nenhum item encontrado na aba de insumos.');
  }

  // Colunas esperadas em Insumos_e_Servicos:
  // A: Código | B: Descrição | C: Categoria (Material/MaoDeObra/Deslocamento) | D: Qtd | E: Custo Unitário
  const itens = abaInsumos.getRange(2, 1, ultimaLinha - 1, 5).getValues();

  let custoMateriais = 0;
  let custoMaoDeObra = 0;
  let custoDeslocamento = 0;

  itens.forEach((linha, index) => {
    const categoria = String(linha[2] || '').trim();
    const qtd = Number(linha[3]) || 0;
    const unitario = Number(linha[4]) || 0;
    const subtotal = qtd * unitario;

    // Grava o subtotal na Coluna F da aba de insumos
    abaInsumos.getRange(index + 2, 6).setValue(subtotal);

    if (categoria === 'Material') {
      custoMateriais += subtotal;
    } else if (categoria === 'MaoDeObra') {
      custoMaoDeObra += subtotal;
    } else if (categoria === 'Deslocamento') {
      custoDeslocamento += subtotal;
    }
  });

  const custoDiretoTotal = custoMateriais + custoMaoDeObra + custoDeslocamento;
  const margemDesejada = Number(abaProposta.getRange('B2').getValue()) || 0.25; // Ex: 25%

  // Formação de preço por Markup Divisor (garantindo impostos e margem sobre o preço final)
  const divisor = 1 - (PARAMETROS.ALIQUOTA_IMPOSTOS + margemDesejada);
  if (divisor <= 0) {
    throw new Error('A soma de impostos e margem desejada não pode atingir ou ultrapassar 100%.');
  }

  const precoVendaFinal = custoDiretoTotal / divisor;
  const valorImpostos = precoVendaFinal * PARAMETROS.ALIQUOTA_IMPOSTOS;
  const lucroLiquido = precoVendaFinal - custoDiretoTotal - valorImpostos;
  const margemEfetiva = lucroLiquido / precoVendaFinal;

  // Validação de viabilidade técnica/comercial
  const statusViabilidade = margemEfetiva >= PARAMETROS.MARGEM_MINIMA_ALERTA
    ? 'APROVADO - Margem dentro da meta'
    : 'ATENÇÃO - Margem abaixo do mínimo recomendado (18%)';

  // Escreve o resumo consolidado na aba Resumo_Proposta
  const resumo = [
    ['Custo Total de Materiais (R$)', custoMateriais],
    ['Custo Total de Mão de Obra (R$)', custoMaoDeObra],
    ['Custo de Deslocamento/Logística (R$)', custoDeslocamento],
    ['Custo Direto Total (R$)', custoDiretoTotal],
    ['Impostos Estimados (R$)', valorImpostos],
    ['Preço Final Sugerido da Proposta (R$)', precoVendaFinal],
    ['Lucro Líquido Estimado (R$)', lucroLiquido],
    ['Margem Líquida Efetiva (%)', margemEfetiva],
    ['Status de Viabilidade', statusViabilidade]
  ];

  abaProposta.getRange(4, 1, resumo.length, 2).setValues(resumo);
}
