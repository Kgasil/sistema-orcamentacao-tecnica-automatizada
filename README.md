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

<a id="english-version"></a>

# Automated Technical Quoting & Pricing System[cite: 10]

Demonstrative project focused on **Cost Engineering**, **Technical Quoting**, and **Decision Support**, automating input cost compilation, selling price calculation via divisor *markup*, and commercial viability analysis[cite: 10].

## 🎯 Context & Problem[cite: 10]

Manual preparation of technical quotes involves multiple variables (materials, technical labor hours, logistics, tax burden, and target margin)[cite: 10]. Unstandardized spreadsheets increase commercial response time and the risk of underpricing[cite: 10].

## 🚀 Implemented Solution[cite: 10]

The `Calculadora_Orcamento.gs` script automates budget consolidation inside **Google Sheets**[cite: 10]:

* **Direct Cost Classification:** Automatically separates and totals costs for **Materials**, **Technical Labor**, and **Travel/Logistics**[cite: 10].
* **Divisor Markup Pricing:** Calculates the final selling price ensuring taxes and desired margin apply accurately to gross revenue:

$$\text{Selling Price} = \frac{\text{Total Direct Cost}}{1 - (\text{Taxes} + \text{Desired Margin})}$$

* **Viability Guardrail:** Automatically checks whether the effective net margin reaches the minimum threshold (18%), flagging proposals that require review before sending[cite: 10].

## 🛠️ Technologies Used[cite: 10]

* **Google Apps Script (JavaScript)**[cite: 10]
* **Engineering Economics & Pricing (Divisor Markup, Contribution Margin, Direct Costs)**[cite: 10]
* **Google Sheets**[cite: 10]
