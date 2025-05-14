# 🔌 1. Usar módulo de rádio com Arduino e GPS separados
### Vantagens:

- Flexível: você pode escolher módulos GPS e rádio que melhor se adequem ao seu cenário (ex: GPS NEO-6M + LoRa SX1278).

- Custo geralmente menor.

- Facilidade para prototipar.

### Desvantagens:

- Demanda mais espaço físico.

- Exige integração de componentes e maior atenção à alimentação/consumo.

<br><br>

# 📟 2. Usar uma placa que já tenha rádio embutido (sem necessidade de internet)

### Exemplos:

- Heltec WiFi LoRa 32: já vem com LoRa e pode ser usado com GPS externo.

- TTGO T-Beam: já vem com LoRa, GPS e suporte para bateria — excelente para esse caso.

- RAK WisBlock (mais robusto/modular, mas também mais caro).

### Vantagens:

- Solução mais compacta.

- Já vem com recursos embarcados (LoRa + GPS + suporte para bateria).

- Menor trabalho de integração, ideal para aplicações em campo.

### Desvantagens:

- Pode ter custo inicial um pouco maior.

- Se um componente falhar (ex: GPS), pode ser mais difícil de substituir.

<br><br>

# ✅ Recomendação final
Use LoRa (Rádio de Longo Alcance). É ideal para comunicação em áreas remotas, baixo consumo, e não depende de internet. Você pode ter:

- 📡 Na boia: um Arduino ou TTGO T-Beam com GPS + módulo LoRa.

- 🏠 Na base: outro dispositivo com LoRa que receba os dados e os envie para seu backend (caso tenha conexão à internet, Wi-Fi ou até uma central de coleta posterior).

<br><br>

# 💡 Exemplos reais de uso:
- Monitoramento ambiental e de agricultura em áreas remotas.

- Boias meteorológicas e de localização oceânica.

- Redes de sensores em áreas rurais.