# Sistema de Orçamentação Técnica & Precificação Automatizada

Projeto demonstrativo voltado à **Engenharia de Custos, Orçamentação Técnica e Apoio à Decisão**, automatizando o levantamento de insumos, a formação de preço de venda por *markup* divisor e a análise de viabilidade comercial.
> 🌐 *English version available below:* [Jump to English Version](#english-version)
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
---

## Configuração e limites

No Google Sheets, crie `Insumos_e_Servicos` com A–F: código, descrição, categoria, quantidade, custo unitário e subtotal; use categorias `Material`, `MaoDeObra` ou `Deslocamento`. Crie `Resumo_Proposta` e defina a margem desejada em B2 como percentual (ex.: 25%). Cole `Calculadora_Orcamento.gs` no Apps Script e execute `calcularOrcamentoTecnico`. Os parâmetros são demonstrativos e não constituem orientação tributária. O resultado estima margem sobre os custos informados, não lucro líquido contábil completo.

---

<a id="english-version"></a>

# Automated Technical Quoting & Pricing System

Demonstrative project focused on **Cost Engineering**, **Technical Quoting**, and **Decision Support**, automating input cost compilation, selling price calculation via divisor *markup*, and commercial viability analysis.

## 🎯 Context & Problem

Manual preparation of technical quotes involves multiple variables (materials, technical labor hours, logistics, tax burden, and target margin). Unstandardized spreadsheets increase commercial response time and the risk of underpricing.

## 🚀 Implemented Solution

The `Calculadora_Orcamento.gs` script automates budget consolidation inside **Google Sheets**:

* **Direct Cost Classification:** Automatically separates and totals costs for **Materials**, **Technical Labor**, and **Travel/Logistics**.
* **Divisor Markup Pricing:** Calculates the final selling price ensuring taxes and desired margin apply accurately to gross revenue:

$$\text{Selling Price} = \frac{\text{Total Direct Cost}}{1 - (\text{Taxes} + \text{Desired Margin})}$$

* **Viability Guardrail:** Automatically checks whether the effective net margin reaches the minimum threshold (18%), flagging proposals that require review before sending.

## 🛠️ Technologies Used

* **Google Apps Script (JavaScript)**
* **Engineering Economics & Pricing (Divisor Markup, Contribution Margin, Direct Costs)**
* **Google Sheets**

## Setup and limitations

Create `Insumos_e_Servicos` with columns A–F: code, description, category, quantity, unit cost and subtotal. Use `Material`, `MaoDeObra` or `Deslocamento`. Create `Resumo_Proposta` and enter the target margin as a percentage in B2 (e.g., 25%). Paste `Calculadora_Orcamento.gs` into Apps Script and run `calcularOrcamentoTecnico`. Rates are illustrative, not tax advice; the margin is an estimate based on listed costs, not comprehensive net profit.
