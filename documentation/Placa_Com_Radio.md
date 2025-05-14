
# 📟 TTGO T-Beam (ESP32 + GPS + LoRa Integrado)

Este documento descreve como montar e programar uma placa TTGO T-Beam, ideal para aplicações em monitoramento remoto com GPS e transmissão LoRa.

---

## 🔧 Componentes Integrados

- ESP32
- Módulo GPS (UBlox)
- Módulo LoRa (SX1276/78)
- Porta microUSB para alimentação e programação
- Slot para bateria 18650

---

## 🧠 Esquema de Conexão Interna

A TTGO T-Beam já possui os módulos soldados na placa. Algumas versões têm diferentes mapeamentos de pinos, mas o padrão comum é:

| Componente | Pino ESP32       |
|------------|------------------|
| GPS RX     | GPIO 34          |
| GPS TX     | GPIO 12          |
| LoRa NSS   | GPIO 18          |
| LoRa RST   | GPIO 14          |
| LoRa DIO0  | GPIO 26          |

---

## 💾 Exemplo de Código

```cpp
#include <TinyGPS++.h>
#include <HardwareSerial.h>
#include <SPI.h>
#include <LoRa.h>

TinyGPSPlus gps;
HardwareSerial gpsSerial(1);

void setup() {
  Serial.begin(115200);
  gpsSerial.begin(9600, SERIAL_8N1, 34, 12); // RX, TX

  if (!LoRa.begin(915E6)) {
    Serial.println("LoRa falhou!");
    while (1);
  }
  Serial.println("LoRa OK");
}

void loop() {
  while (gpsSerial.available()) {
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

---

## 🔋 Alimentação

- Conecte via USB para testes
- Para campo: insira uma bateria 18650
- Opcional: use placa solar com circuito de carregamento

---

## ✅ Vantagens

- Tudo integrado
- Menor consumo
- Compacto
- Ideal para produção

---

## ❌ Desvantagens

- Maior custo unitário (~ R$ 160,00)
- Menos flexível em alterações de hardware

---

## 🔗 Próximo Passo

👉 [Veja o exemplo com Arduino + GPS separados](GPS_e_Arduinos_separados.md)
