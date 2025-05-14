# 📟 Arduino + GPS Separados

Este documento descreve como montar um sistema com Arduino e GPS utilizando módulos separados, ideal para protótipos e testes iniciais. A montagem é flexível e permite fácil substituição de componentes, sendo ideal para validações em campo.

---

## 🔧 Componentes Utilizados

- Arduino UNO ou Nano  
- Módulo GPS (Neo-6M ou similar)  
- Módulo LoRa (Ra-02 ou similar)  
- Jumpers e Protoboard (para testes)  
- Fonte de alimentação (bateria 9V ou bateria Li-ion com regulador)  
- Opcional: Placa solar para alimentação contínua em campo

---

## 🧠 Esquema de Conexão

### GPS (Neo-6M) → Arduino

| GPS         | Arduino         |
|-------------|------------------|
| VCC         | 3.3V ou 5V       |
| GND         | GND              |
| TX          | RX (pino 4)      |
| RX          | TX (pino 3)      |

### LoRa (Ra-02) → Arduino

| LoRa        | Arduino         |
|-------------|------------------|
| VCC         | 3.3V             |
| GND         | GND              |
| MISO        | 12               |
| MOSI        | 11               |
| SCK         | 13               |
| NSS (CS)    | 10               |
| RST         | 9                |
| DIO0        | 2                |

---

## 💾 Exemplo de Código

```cpp
#include <SoftwareSerial.h>
#include <TinyGPS++.h>
#include <SPI.h>
#include <LoRa.h>

SoftwareSerial gpsSerial(4, 3); // RX, TX
TinyGPSPlus gps;

void setup() {
  Serial.begin(9600);
  gpsSerial.begin(9600);

  if (!LoRa.begin(915E6)) {
    Serial.println("Falha ao iniciar LoRa!");
    while (1);
  }
  Serial.println("LoRa iniciado.");
}

void loop() {
  while (gpsSerial.available() > 0) {
    gps.encode(gpsSerial.read());
    if (gps.location.isUpdated()) {
      String data = "Lat: " + String(gps.location.lat(), 6) + ", Lon: " + String(gps.location.lng(), 6);
      Serial.println(data);
      LoRa.beginPacket();
      LoRa.print(data);
      LoRa.endPacket();
    }
  }
}
```
# 🔋 Alimentação
- Para testes: Bateria 9V com regulador de tensão (5V e 3.3V)
- Para campo: Bateria Li-ion + módulo de carregamento + placa solar

<br><br>

# ✅ Vantagens
- Flexibilidade na montagem
- Fácil troca de módulos
- Custo reduzido para testes

<br><br>

# ❌ Desvantagens
- Ocupa mais espaço
- Maior consumo energético
- Mais suscetível a falhas de conexão
- Necessita de proteção extra em campo (caixa estanque, por exemplo)

<br><br>

# 🔗 Próximo Passo
Para um sistema mais compacto e otimizado para produção, veja a versão com placa integrada:

👉 [Veja o exemplo com TTGO T-Beam](Placa_Com_Radio.md)