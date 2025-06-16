# 🛰️ Sistema de Rastreamento para Boias: Soluções de Hardware e Energia

Este documento compara abordagens técnicas para sistemas de rastreamento com GPS e transmissão de dados, com foco especial em soluções de energia para operação prolongada em boias.

---

## 🔋 Seção 1: Soluções de Energia para Operação Contínua

### ⚡ Requisitos Energéticos Típicos
- **Consumo médio**: 50-150mA (dependendo da frequência de transmissão)
- **Tensão de operação**: 3.3V a 5V
- **Autonomia mínima desejada**: 6-12 meses

### ⏱️ Exemplos de Frequência de Transmissão e Impacto na Autonomia

A frequência de transmissão de dados é um fator determinante para o consumo de energia e, consequentemente, para a autonomia do sistema. Abaixo alguns exemplos típicos, que podem ajudar na definição do melhor compromisso entre frequência de atualização e duração da bateria:

- **A cada 5 segundos**:  
  Ideal para rastreamento em tempo real, mas com impacto significativo na autonomia. Indicada apenas para operações de curta duração.

- **A cada 10 segundos**:  
  Ainda considerada alta frequência, útil para monitoramento ativo, mas reduz a autonomia para semanas ou poucos meses.

- **A cada 1 minuto**:  
  Frequência intermediária, adequada para aplicações que exigem acompanhamento constante, mas com maior equilíbrio entre atualização e duração da bateria.

- **A cada 1 hora**:  
  Frequência de baixa atualização, ideal para monitoramento de longo prazo, garantindo maior autonomia — podendo alcançar ou até ultrapassar 12 meses dependendo da capacidade da bateria e das demais condições de operação.

---

### 📊 Frequência típica de envio de dados em boias GPS (ESTIMATIVA)

| Frequência               | Uso comum / Aplicações típicas                         | Comentário sobre autonomia               |
|--------------------------|-------------------------------------------------------|-----------------------------------------|
| **A cada 5 a 10 segundos** | Monitoramento em tempo real para operações críticas (ex: navegação, pesquisa científica em tempo real) | Muito alta frequência, autonomia reduzida para dias ou poucas semanas. |
| **A cada 1 a 5 minutos**   | Monitoramento ambiental detalhado, estudo de correntes, qualidade da água | Equilíbrio razoável entre detalhamento e autonomia, com semanas a poucos meses. |
| **A cada 15 a 60 minutos** | Monitoramento de longo prazo, coleta de dados para tendências ambientais, boias meteorológicas | Baixo consumo, autonomia pode atingir meses a mais de um ano. |
| **Menos frequente (diário ou mais espaçado)** | Aplicações que exigem apenas dados periódicos para análises históricas ou manutenção preventiva | Máxima autonomia, pode ultrapassar 1 ano dependendo da bateria e hardware. |

---

### 🏆 Top 3 Soluções de Energia

### 1. Baterias de Lítio de Longa Duração

| Tipo               | Capacidade | Preço    | Autonomia* (transmissão horária) | Autonomia estimada para outras frequências | Vantagens                          | Desvantagens                   |
|--------------------|------------|----------|----------------------------------|--------------------------------------------|------------------------------------|---------------------------------|
| LiFePO4 18650      | 3000mAh    | R\$ 40-80 | 2-4 meses                       | - 5 seg: 3-5 dias<br>- 10 seg: 1-2 semanas<br>- 1 min: 1-2 meses<br>- 1 hora: 2-4 meses | Alta ciclagem (2000+), segura      | Peso elevado                    |
| Li-ion 26650       | 5000mAh    | R\$ 60-120| 4-6 meses                      | - 5 seg: 5-7 dias<br>- 10 seg: 2-3 semanas<br>- 1 min: 2-4 meses<br>- 1 hora: 4-6 meses | Alta densidade energética          | Requer circuito de proteção     |
| Bateria Selada 12V  | 7Ah        | R\$ 90-180| 6-9 meses                      | - 5 seg: 1-2 semanas<br>- 10 seg: 3-4 semanas<br>- 1 min: 4-6 meses<br>- 1 hora: 6-9 meses | Robustez, fácil substituição       | Volume maior, eficiência média  |

*Autonomia estimada para transmissões a cada 1 hora. Valores aproximados, pois dependem do consumo exato do hardware e das condições ambientais.

---

### 2. Sistemas Híbridos com Painel Solar

| Kit               | Preço       | Componentes Incluídos             | Autonomia estimada com painéis solares            | Vantagens                          | Desvantagens                   |
|-------------------|-------------|---------------------------------|---------------------------------------------------|------------------------------------|---------------------------------|
| Mini Solar 5W     | R\$ 150-300 | Painel 5W + controlador + bateria | Autonomia virtualmente ilimitada durante o dia; pode operar 24/7 com armazenamento adequado | Autonomia ilimitada em sol         | Sensível a sombreamento         |
| Sistema 10W IP68  | R\$ 400-800 | Painel resistente + LiFePO4       | Autonomia virtualmente ilimitada, mesmo com transmissão frequente, desde que haja luz solar | Manutenção anual, alta durabilidade| Custo inicial elevado           |

---

### 3. Soluções Inovadoras

| Tecnologia        | Descrição                          | Custo        | Autonomia estimada                      | Vantagens                          | Desvantagens                   |
|-------------------|-----------------------------------|--------------|---------------------------------------|------------------------------------|---------------------------------|
| Energy Harvesting | Captação de energia das ondas     | R\$ 800-1500 | Autonomia contínua, depende do ambiente | Autonomia contínua                 | Complexidade de instalação      |
| Bateria Termoel.  | Geração por gradiente térmico     | R\$ 1200+    | Operação 24/7, porém baixa eficiência (5-10%) | Funciona 24/7                      | Baixa eficiência (5-10%)        |

---

## 📈 Estratégias para Maximizar Autonomia

1. **Sleep Mode Profundo** (reduz consumo para ~50μA)  
2. **Transmissão Adaptativa** (aumenta intervalo de envio quando a bateria está baixa)  
3. **Desligamento Seletivo** (GPS ativado somente em movimentação detectada)  

---

## 🔌 2. Comparativo: Módulos Separados vs. Placas Integradas

### 🌐 Comunicação: Rádio vs. Internet Móvel

Para sistemas de rastreamento em boias, a transmissão dos dados pode ser feita principalmente por dois meios:

- **Comunicação via Rádio (LoRa, Sigfox, etc.)**  
  Utiliza ondas de rádio de baixa potência para enviar dados a estações próximas (gateways). Ideal para áreas remotas com cobertura limitada de internet.  
  **Vantagens:** baixo consumo energético, custo operacional reduzido, boa penetração em ambientes abertos.  
  **Limitações:** alcance limitado (alguns km), requer infraestrutura de gateways.

- **Comunicação via Internet Móvel (GSM/3G/4G)**  
  Utiliza redes celulares para transmissão direta dos dados para servidores na nuvem. Ideal para locais com cobertura celular disponível.  
  **Vantagens:** alcance global, comunicação direta com servidores, fácil integração.  
  **Limitações:** consumo energético maior, custo com planos de dados.

---

### ✅ Vantagens dos Módulos Separados

* **Flexibilidade** para combinar componentes específicos de acordo com a necessidade do projeto (ex: GPS + módulo LoRa ou GPS + módulo GSM).  
* **Possibilidade de atualização modular**, facilitando troca de partes sem substituir todo o sistema.  
* **Custo inicial** geralmente entre R\$ 300 e R\$ 600, podendo ser mais acessível para projetos customizados.  
* **Permite personalização da comunicação**, escolhendo entre rádio ou internet móvel.

### ❌ Desvantagens dos Módulos Separados

* Consumo energético pode ser até 30% maior devido à maior complexidade e menos otimização entre componentes.  
* Requer maior integração e conhecimento técnico para garantir compatibilidade e funcionamento eficiente.  
* Maior volume físico e maior número de conexões pode impactar robustez.

### 📦 Exemplo de Componentes para Módulos Separados  
| Componente           | Função                           | Preço Médio     | Comentário                          |
|----------------------|---------------------------------|-----------------|-----------------------------------|
| Arduino (Microcontrolador) | Processamento dos dados          | R\$ 150         | Base do sistema                   |
| Módulo GPS           | Localização via satélite        | R\$ 150         | Posicionamento preciso            |
| Módulo LoRa (rádio)  | Comunicação via rádio de baixa potência | R\$ 150         | Baixo consumo, para áreas remotas |
| Módulo GSM/3G/4G     | Comunicação via internet móvel  | R\$ 250-400     | Para áreas com cobertura celular  |

---

## 📟 3. Placas Integradas (GPS + Rádio)

Placas integradas combinam microcontrolador, GPS e módulo de comunicação em uma única placa compacta, facilitando o desenvolvimento e reduzindo o consumo e o espaço ocupado.

### 🧩 Modelos Recomendados

| Placa             | Comunicação       | Preço        | Consumo em operação contínua | Compatível com energia solar |
|-------------------|-------------------|--------------|------------------------------|-----------------------------|
| TTGO T-Beam       | GPS + LoRa (rádio) | R\$ 400-600  | ~80mA                        | Sim                         |
| RAK WisBlock      | GPS + LoRa (rádio) | R\$ 700-1200 | ~65mA                        | Sim                         |

### Observação:
- Essas placas são ideais para transmissão via rádio em áreas onde exista infraestrutura LoRa (gateways próximos).
- Para comunicação via internet móvel, existem outras placas integradas que incluem módulos GSM, mas com consumo energético maior e custo superior.

---

## 🌊 Casos de Uso em Ambientes Aquáticos

### ✅ 1. Monitoramento Costeiro

- **Configuração típica:** TTGO T-Beam + Bateria 12V 7Ah
- **Comunicação:** Rádio LoRa para envio de dados a gateways localizados na costa.
- **Custo estimado:** **R$ 600 a R$ 900**
- **Autonomia estimada conforme frequência de transmissão:**
  - A cada **5 segundos:** 3 a 5 dias
  - A cada **10 segundos:** 1 a 2 semanas
  - A cada **1 minuto:** 1 a 2 meses
  - A cada **1 hora:** 2 a 4 meses
- **Indicação:** Ideal para monitoramento contínuo em áreas com infraestrutura de recepção LoRa, com foco em baixo custo e manutenção espaçada.

---

### ✅ 2. Pesquisa Oceânica

- **Configuração típica:** RAK WisBlock + Kit Solar 10W + Bateria LiFePO4
- **Comunicação:** Rádio LoRa para longas distâncias, com energia solar garantindo autonomia praticamente ilimitada.
- **Custo estimado:** **R$ 1500 a R$ 2000**
- **Autonomia estimada conforme frequência de transmissão (sem solar):**
  - A cada **5 segundos:** 3 a 5 dias
  - A cada **10 segundos:** 1 a 2 semanas
  - A cada **1 minuto:** 1 a 2 meses
  - A cada **1 hora:** 2 a 4 meses
- **Com energia solar:** Operação contínua com autonomia de **3 a 5 anos** ou mais, dependendo das condições climáticas.
- **Indicação:** Projetos científicos ou ambientais de longo prazo, especialmente onde a manutenção frequente não é viável.

---

## 💡 Recomendações por Cenário

| Cenário            | Hardware          | Solução Energética         | Custo Total | Autonomia Estimada                                |
| ------------------ | ----------------- | -------------------------- | ----------- | ------------------------------------------------ |
| Protótipos         | Módulos separados | Bateria Li-ion 26650       | R$ 500-800  | 5 seg: 3-5 dias<br>10 seg: 1-2 semanas<br>1 min: 1-2 meses<br>1 h: 2-4 meses |
| Operação Costeira  | TTGO T-Beam       | Bateria 12V + Solar 5W     | R$ 900-1400 | 5 seg: 3-5 dias<br>10 seg: 1-2 semanas<br>1 min: 1-2 meses<br>1 h: 2-4 meses |
| Oceano Aberto      | RAK WisBlock      | Sistema Solar 10W (IP68)   | R$ 2000-3000| Solar: contínua<br>Sem solar: idem acima         |

---

## 🔄 Tabela Comparativa de Soluções Energéticas

| Solução            | Custo Inicial | Manutenção | Vida Útil  | Eficiência | Autonomia Estimada (sem recarga)               |
| ------------------ | ------------- | ---------- | ---------- | ---------- | --------------------------------------------- |
| Bateria Li-ion     | R$ 50-120     | A cada 6 meses | 2-3 anos | ~85%      | 5 seg: 3-5 dias<br>10 seg: 1-2 semanas<br>1 min: 1-2 meses<br>1 h: 2-4 meses |
| Solar 5W           | R$ 150-300    | Anual      | 5+ anos    | 70-90%     | Operação contínua (dependente do clima)        |
| Energy Harvesting  | R$ 800+       | A cada 2 anos | 10+ anos | 40-60%     | Operação contínua em ambientes adequados       |

---

## 📌 Considerações Finais

1. **Locais com boa incidência solar:** Sistemas híbridos (bateria + painel solar) são a melhor relação custo-benefício.
2. **Operações críticas:** Recomendamos baterias LiFePO4 com sistemas de backup, pela confiabilidade e segurança.
3. **Projetos de longa duração:** Tecnologias de *Energy Harvesting* (colheita de energia ambiental) podem ser viáveis para autonomia superior a 5 anos.

> ⚠️ **Dica crucial:** Sempre realize testes de consumo com o firmware final. Pequenas otimizações no código podem dobrar ou até triplicar a autonomia!

---

## ✅ Resumo das Escolhas

| Comunicação  | Ideal para...                    | Energia recomendada       |
|--------------|----------------------------------|---------------------------|
| GSM/4G       | Áreas com cobertura celular       | Bateria de alta capacidade |
| Rádio LoRa   | Áreas remotas, oceano e costa     | Bateria + Solar           |

---