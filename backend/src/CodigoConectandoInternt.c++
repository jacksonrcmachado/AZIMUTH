// #ifdef ESP8266
// #include <ESP8266WiFi.h>
// #include <ESP8266HTTPClient.h>
// #else
// #include <WiFi.h>
// #include <HTTPClient.h>
// #endif

// #include <ArduinoJson.h>

// const char* ssid = "ROSA-5G";
// const char* password = "c03m21c17";
// //casa da Carol = c03m21c17

// const char* serverUrl = "http://10.68.55.175:3001/graphql";
// const char* boiaId = "683f8cb4eb62b78ff7c91fad";

// unsigned long lastCheck = 0;
// const unsigned long checkInterval = 30000;  // 30 segundos

// unsigned long frequencyAtTime = 30000;  // frequência inicial (em ms)

// void setup() {
//   Serial.begin(115200);
  
//   WiFi.begin(ssid, password);
//   Serial.print("Conectando à rede WiFi");

//   while (WiFi.status() != WL_CONNECTED) {
//     delay(500);
//     Serial.print(".");
//   }

//   Serial.println("\nConectado à rede WiFi!");
// }

// void loop() {
//   unsigned long currentMillis = millis();

//   if (currentMillis - lastCheck >= checkInterval) {
//     lastCheck = currentMillis;
//     verificarFrequencia();
//   }

//   static unsigned long lastSend = 0;
//   if (currentMillis - lastSend >= frequencyAtTime) {
//     lastSend = currentMillis;
//     enviarDadosGPS();
//   }
// }

// void verificarFrequencia() {
//   if (WiFi.status() == WL_CONNECTED) {
//     HTTPClient http;

//     http.begin(serverUrl);
//     http.addHeader("Content-Type", "application/json");

//     // Nova query GraphQL simplificada
//     String query = "{ \"query\": \"{ getFrequencyByBoia(boiaId: \\\"" + String(boiaId) + "\\\") }\" }";

//     int httpResponseCode = http.POST(query);

//     if (httpResponseCode > 0) {
//       String response = http.getString();
//       Serial.println("Resposta do servidor: " + response);

//       StaticJsonDocument<512> doc;
//       DeserializationError error = deserializeJson(doc, response);

//       if (!error) {
//         float newFreq = doc["data"]["getFrequencyByBoia"];

//         if (newFreq > 0) {
//           frequencyAtTime = newFreq * 1000;  // converter para ms
//           Serial.print("Nova frequência: ");
//           Serial.println(frequencyAtTime);
//         } else {
//           Serial.println("Frequência inválida ou não alterada.");
//         }
//       } else {
//         Serial.print("Erro ao parsear JSON: ");
//         Serial.println(error.c_str());
//       }
//     } else {
//       Serial.print("Erro na requisição: ");
//       Serial.println(httpResponseCode);
//     }

//     http.end();
//   } else {
//     Serial.println("WiFi desconectado!");
//   }
// }

// void enviarDadosGPS() {
//   Serial.println("Enviando dados GPS...");
//   // Aqui você coloca o código real para pegar e enviar dados de GPS
// }


#ifdef ESP8266
#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#else
#include <WiFi.h>
#include <HTTPClient.h>
#endif

#include <ArduinoJson.h>

//?Password home Carol = c03m21c17
// const char* ssid = "ROSA-2G";
// const char* password = "c03m21c17";
// const char* serverUrl = "http://192.168.0.106:3001/graphql";

//? Fatec adress and password
const char* ssid = "LAB 108";
const char* password = "fatec258";
// "http://26.115.98.87:3001/graphql"
const char* serverUrl = "http://10.68.55.175:3001/graphql";

const char* boiaId = "683f8cb4eb62b78ff7c91fad";

unsigned long lastCheck = 0;
const unsigned long checkInterval = 30000;  // 30 segundos

unsigned long frequencyAtTime = 30000;  // frequência inicial (em ms)

void setup() {
  Serial.begin(115200);
  
  WiFi.begin(ssid, password);
  Serial.print("Conectando à rede WiFi");

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("\nConectado à rede WiFi!");
}

void loop() {
  unsigned long currentMillis = millis();

  if (currentMillis - lastCheck >= checkInterval) {
    lastCheck = currentMillis;
    verificarFrequencia();
  }

  static unsigned long lastSend = 0;
  if (currentMillis - lastSend >= frequencyAtTime) {
    lastSend = currentMillis;
    enviarDadosGPS();
  }
}

void verificarFrequencia() {
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;

    http.begin(serverUrl);
    http.addHeader("Content-Type", "application/json");

    // Nova query GraphQL simplificada
    String query = "{ \"query\": \"{ getFrequencyByBoia(boiaId: \\\"" + String(boiaId) + "\\\") }\" }";

    int httpResponseCode = http.POST(query);

    if (httpResponseCode > 0) {
      String response = http.getString();
      Serial.println("Resposta do servidor: " + response);

      StaticJsonDocument<512> doc;
      DeserializationError error = deserializeJson(doc, response);

      if (!error) {
        float newFreq = doc["data"]["getFrequencyByBoia"];

        if (newFreq > 0) {
          frequencyAtTime = newFreq * 1000;  // converter para ms
          Serial.print("Nova frequência: ");
          Serial.println(frequencyAtTime);
        } else {
          Serial.println("Frequência inválida ou não alterada.");
        }
      } else {
        Serial.print("Erro ao parsear JSON: ");
        Serial.println(error.c_str());
      }
    } else {
      Serial.print("Erro na requisição: ");
      Serial.println(httpResponseCode);
    }

    http.end();
  } else {
    Serial.println("WiFi desconectado!");
  }
}

void enviarDadosGPS() {
  Serial.println("Enviando dados GPS...");
  // Aqui você coloca o código real para pegar e enviar dados de GPS
}
