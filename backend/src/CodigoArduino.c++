#include <Wire.h>
#include <LiquidCrystal_I2C.h>
#include <TinyGPS.h>

// Configurações do display LCD
#define SDA_PIN 21  // Pino SDA do ESP32
#define SCL_PIN 22  // Pino SCL do ESP32
#define LCD_ADDRESS 0x27  // Endereço I2C do display (confirmado pelo scanner)
#define LCD_COLUMNS 16    // Número de colunas do display
#define LCD_ROWS 2        // Número de linhas do display

// Inicializa o objeto do display LCD
LiquidCrystal_I2C lcd(LCD_ADDRESS, LCD_COLUMNS, LCD_ROWS);

// Objeto para comunicação com o GPS
TinyGPS gps;
HardwareSerial gpsSerial(1);  // Usa a UART 1 do ESP32

// Pinos do GPS
#define RXPin 16  // Pino RX do GPS
#define TXPin 17  // Pino TX do GPS

void setup() {
  // Inicializa a comunicação serial para depuração
  Serial.begin(115200);
  Serial.println("Iniciando GPS e display LCD...");

  // Inicializa a comunicação I2C
  Wire.begin(SDA_PIN, SCL_PIN);

  // Inicializa o display LCD
  lcd.init();
  lcd.backlight();  // Liga a luz de fundo
  lcd.setCursor(0, 0);
  lcd.print("Iniciando GPS...");
  Serial.println("Display LCD inicializado.");

  // Inicializa a comunicação com o GPS
  gpsSerial.begin(9600, SERIAL_8N1, RXPin, TXPin);
  Serial.println("GPS inicializado.");
}

void loop() {
  // Verifica se há dados disponíveis do GPS
  while (gpsSerial.available()) {
    char c = gpsSerial.read();
    if (gps.encode(c)) {  // Decodifica os dados do GPS
      float latitude, longitude;
      gps.f_get_position(&latitude, &longitude);  // Obtém a latitude e longitude

      // Exibe as coordenadas no Serial Monitor
      Serial.print("Latitude: ");
      Serial.println(latitude, 6);
      Serial.print("Longitude: ");
      Serial.println(longitude, 6);

      // Exibe as coordenadas no display LCD
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print("Lat: ");
      lcd.print(latitude, 6);
      lcd.setCursor(0, 1);
      lcd.print("Lon: ");
      lcd.print(longitude, 6);
    }
  }

  // Pequeno delay para evitar sobrecarga
  delay(5000);
}