# Sistema de Orçamentação Técnica & Precificação Automatizada

Projeto demonstrativo voltado à **Engenharia de Custos, Orçamentação Técnica e Apoio à Decisão**, automatizando o levantamento de insumos, a formação de preço de venda por *markup* divisor e a análise de viabilidade comercial.

---

## 🎯 Contexto e Problema

A elaboração manual de orçamentos técnicos envolve múltiplas variáveis (materiais, horas técnicas, logística, carga tributária e margem-alvo). Planilhas despadronizadas aumentam o tempo de resposta comercial e o risco de subprecificação.

## 🚀 Solução Implementada

O script `Calculadora_Orcamento.gs` automatiza a consolidação orçamentária no Google Sheets:

* **Classificação de Custos Diretos:** Separa e totaliza automaticamente custos de **Materiais**, **Mão de Obra Técnica** e **Deslocamento**.
* **Precificação por Markup Divisor:** Calcula o preço final de venda garantindo que impostos e margem desejada incidam corretamente sobre o faturamento bruto:
  $$\text{Preço de Venda} = \frac{\text{Custo Direto Total}}{1 - (\text{Impostos} + \text{Margem Desejada})}$$
* **Trava de Viabilidade:** Valida automaticamente se a margem líquida efetiva atinge o patamar mínimo estabelecido (18%), sinalizando necessidade de revisão antes do envio da proposta.

## 🛠️ Tecnologias Utilizadas

* **Google Apps Script (JavaScript)**
* **Engenharia Econômica & Formação de Preços** (Markup Divisor, Margem de Contribuição, Custos Diretos)
* **Google Sheets**
