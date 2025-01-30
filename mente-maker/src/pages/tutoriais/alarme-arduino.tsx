import Layout from '../../components/Layout';
import { motion } from 'framer-motion';
import { FaMicrochip } from 'react-icons/fa';
import Image from 'next/image';
import Reader from '../../components/Reader';
export default function AlarmeArduino() {
  return (
    <Layout>
      <motion.div
        className="container-responsive py-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-2 md:gap-4 mb-4 md:mb-6">
                <FaMicrochip className="text-3xl md:text-4xl text-teal-500" />
                <h1 className="text-2xl md:text-4xl font-bold">Criando um Sistema de Alarme Inteligente com Arduino</h1>
              </div>

              <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
                <span className="bg-teal-100 text-teal-800 px-2 py-1 rounded-full text-xs md:text-sm font-medium">
                  Arduino
                </span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs md:text-sm font-medium">
                  Intermediário
                </span>
                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs md:text-sm font-medium">
                  10-13 minutos
                </span>
              </div>
              <Reader />
              <div className="prose max-w-none">
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Introdução Detalhada ao Projeto</h2>
                <p className="mb-4">
                  Neste guia completo, vamos construir um sistema de alarme inteligente utilizando o versátil <strong className="font-semibold">Arduino UNO</strong>. Este projeto não é apenas uma introdução à eletrônica e programação, mas também uma oportunidade de aplicar conceitos práticos na criação de um dispositivo útil. Nosso sistema de alarme irá integrar um sensor de movimento <strong className="font-semibold">PIR (Passive Infrared)</strong>, um <strong className="font-semibold">buzzer</strong> para alerta sonoro, e um <strong className="font-semibold">LED</strong> para indicação visual. Além disso, adicionaremos um botão para ativar/desativar o sistema, oferecendo um controle básico sobre o alarme. Este tutorial é ideal para quem já possui um conhecimento básico de eletrônica e programação com Arduino, mas mesmo iniciantes podem acompanhar com dedicação.
                </p>

                <h2 className="text-xl md:text-2xl font-semibold mb-4">Material Necessário: Uma Lista Completa</h2>
                <p className="mb-4">
                   Para começar a montar nosso sistema de alarme, você precisará dos seguintes componentes eletrônicos:
                </p>
                <ul className="list-disc list-inside mb-4">
                  <li><strong className="font-semibold">1 Arduino UNO:</strong> A placa principal onde o código será executado.</li>
                  <li><strong className="font-semibold">1 Sensor de Movimento PIR:</strong> Para detectar movimento em seu raio de alcance.</li>
                  <li><strong className="font-semibold">1 Buzzer Ativo:</strong> Para emitir o som de alarme.</li>
                  <li><strong className="font-semibold">1 LED Vermelho:</strong> Para indicar visualmente o estado do alarme (ativado/desativado) e alertar sobre movimento detectado.</li>
                  <li><strong className="font-semibold">1 Resistor de 220Ω:</strong> Para limitar a corrente que passa pelo LED, protegendo-o.</li>
                    <li><strong className="font-semibold">1 Botão Push:</strong> Para ativar e desativar o sistema de alarme.</li>
                  <li><strong className="font-semibold">Jumpers (fios):</strong> Para conectar os componentes na protoboard.</li>
                  <li><strong className="font-semibold">Protoboard:</strong> Uma placa para montar o circuito sem solda.</li>
                 
                </ul>

                <h2 className="text-xl md:text-2xl font-semibold mb-4">Esquema de Ligação Detalhado e Ilustrado</h2>
                 <p className="mb-4">
                   A montagem do circuito é um passo crucial. Abaixo, detalhamos cada conexão para garantir que você não tenha problemas. É recomendado ter o esquema elétrico em mãos durante a montagem para não confundir os componentes e suas ligações:
                 </p>
                 <h3 className="text-lg md:text-xl font-semibold mb-2">Conexões</h3>
                <ul className="list-disc list-inside mb-4">
                   <li><strong className="font-semibold">Sensor PIR:</strong>
                    <ul className="list-disc list-inside ml-4">
                      <li><strong className="font-semibold">VCC:</strong> Conectar ao pino de 5V do Arduino.</li>
                      <li><strong className="font-semibold">GND:</strong> Conectar ao pino de GND do Arduino.</li>
                      <li><strong className="font-semibold">OUT:</strong> Conectar ao pino digital 2 do Arduino.</li>
                    </ul>
                  </li>
                  <li><strong className="font-semibold">Buzzer Ativo:</strong>
                    <ul className="list-disc list-inside ml-4">
                      <li><strong className="font-semibold">Pino Positivo (+):</strong> Conectar ao pino digital 8 do Arduino.</li>
                      <li><strong className="font-semibold">Pino Negativo (-):</strong> Conectar ao pino de GND do Arduino.</li>
                    </ul>
                  </li>
                    <li><strong className="font-semibold">LED Vermelho:</strong>
                    <ul className="list-disc list-inside ml-4">
                      <li><strong className="font-semibold">Ânodo (Perna mais Longa):</strong> Conectar ao pino digital 13 do Arduino através de um resistor de 220Ω.</li>
                      <li><strong className="font-semibold">Cátodo (Perna mais Curta):</strong> Conectar ao pino de GND do Arduino.</li>
                    </ul>
                  </li>
                    <li><strong className="font-semibold">Botão Push:</strong>
                    <ul className="list-disc list-inside ml-4">
                      <li><strong className="font-semibold">Terminal 1:</strong> Conectar ao pino digital 4 do Arduino.</li>
                      <li><strong className="font-semibold">Terminal 2:</strong> Conectar ao pino de GND do Arduino.</li>
                    </ul>
                  </li>
                </ul>

                 <p className="mb-4">
                    <strong className="font-semibold">Dica Importante:</strong> Ao montar o circuito, tenha muita atenção à polaridade dos componentes, como o LED e o buzzer, para evitar danos. Use jumpers de cores diferentes para facilitar a identificação das conexões.
                  </p>

                <h2 className="text-xl md:text-2xl font-semibold mb-4">Código do Projeto: O Coração do Alarme</h2>
                <p className="mb-4">
                    Abaixo, apresentamos o código Arduino completo que dará vida ao nosso sistema de alarme. Este código foi escrito com comentários para facilitar a compreensão de cada etapa.
                 </p>
                <pre className="bg-gray-800 text-white p-3 rounded-lg overflow-x-auto mb-4">
                  <code className="block whitespace-pre-wrap">
{`// Definição dos pinos
const int PIR_PIN = 2;    // Pino do sensor PIR
const int BUZZER_PIN = 8; // Pino do buzzer
const int LED_PIN = 13;   // Pino do LED
const int BUTTON_PIN = 4; // Pino do botão

// Variáveis de controle
bool alarmEnabled = true;  // Estado do alarme (ativado/desativado)
bool motionDetected = false; // Indica se movimento foi detectado

void setup() {
  // Configuração dos pinos
  pinMode(PIR_PIN, INPUT);     // Pino do sensor PIR como entrada
  pinMode(BUZZER_PIN, OUTPUT);   // Pino do buzzer como saída
  pinMode(LED_PIN, OUTPUT);      // Pino do LED como saída
  pinMode(BUTTON_PIN, INPUT_PULLUP); // Pino do botão como entrada com resistor pull-up interno
  
  // Iniciar comunicação serial
  Serial.begin(9600);   // Inicializar a comunicação serial para debug
  
  // Aguardar estabilização do sensor
  Serial.println("Calibrando sensor PIR...");
  delay(2000);       // Aguardar 2 segundos para o sensor se estabilizar
  Serial.println("Sensor calibrado!");
}

void loop() {
  // Verificar botão de ativar/desativar
  if (digitalRead(BUTTON_PIN) == LOW) {   // Se o botão for pressionado
    alarmEnabled = !alarmEnabled;        // Inverte o estado do alarme
    digitalWrite(LED_PIN, alarmEnabled);  // Atualiza o LED para o novo estado
    delay(500);                       // Delay para evitar "debounce"
  }

  if (alarmEnabled) { // Se o alarme estiver ativado
    // Ler sensor de movimento
    motionDetected = digitalRead(PIR_PIN); // Lê o estado do sensor PIR

    if (motionDetected) { // Se movimento for detectado
      // Ativar alarme
      triggerAlarm(); // Chama a função para ativar o alarme
    }
  }
}

void triggerAlarm() {
  Serial.println("MOVIMENTO DETECTADO!");  // Imprime no serial que houve movimento
  
  // Piscar LED e tocar alarme
  for (int i = 0; i < 5; i++) { // Repetir o ciclo 5 vezes
    digitalWrite(LED_PIN, HIGH); // Liga o LED
    tone(BUZZER_PIN, 1000);     // Toca o buzzer em 1kHz
    delay(500);               // Aguarda 0.5 segundos
    
    digitalWrite(LED_PIN, LOW);  // Desliga o LED
    noTone(BUZZER_PIN);          // Para o buzzer
    delay(500);                // Aguarda 0.5 segundos
  }
}
`}
                  </code>
                </pre>
                 <p className="mb-4">
                   <strong className="font-semibold">Observação:</strong> Não esqueça de selecionar a placa correta (Arduino UNO) no ambiente de desenvolvimento do Arduino IDE antes de carregar o código.
                  </p>

                <h2 className="text-xl md:text-2xl font-semibold mb-4">Funcionamento Detalhado do Sistema</h2>
                <p className="mb-4">
                   Vamos detalhar como o sistema de alarme funciona:
                </p>
                <ol className="list-decimal list-inside mb-4">
                  <li><strong className="font-semibold">Inicialização:</strong> Ao ligar o Arduino, o sistema inicia com o alarme ativado, e o LED acende para indicar esse estado.</li>
                  <li><strong className="font-semibold">Botão de Controle:</strong> O botão permite alternar entre os estados ativo e desativado do alarme. Ao pressionar o botão, o estado do alarme muda e o LED reflete essa mudança (aceso para ativo, apagado para desativado).</li>
                  <li><strong className="font-semibold">Detecção de Movimento:</strong> Quando o alarme está ativado e o sensor PIR detecta movimento, o sistema aciona o alarme.</li>
                  <li><strong className="font-semibold">Alarme:</strong> O alarme é acionado através do buzzer, que emite um som de 1kHz, e o LED pisca simultaneamente para alertar visualmente sobre o movimento detectado. Uma mensagem é enviada pela porta serial para debug.
                    </li>
                </ol>

                <h2 className="text-xl md:text-2xl font-semibold mb-4">Melhorias e Expansões do Projeto</h2>
                <p className="mb-4">
                     Este projeto serve como uma base para um sistema de alarme mais sofisticado. Aqui estão algumas melhorias que você pode implementar:
                </p>
                <ul className="list-disc list-inside mb-4">
                   <li><strong className="font-semibold">Adicionar um Display LCD:</strong> Utilize um display LCD para exibir o status do alarme, data, hora ou outras informações relevantes.</li>
                  <li><strong className="font-semibold">Integrar Módulo WiFi:</strong> Utilize um módulo WiFi para enviar notificações para um aplicativo ou email quando o alarme for acionado.</li>
                    <li><strong className="font-semibold">Implementar Senha de Desativação:</strong> Adicione um teclado numérico para inserir uma senha para desativar o alarme, aumentando a segurança.</li>
                     <li><strong className="font-semibold">Adicionar Mais Sensores:</strong> Inclua sensores de porta/janela, de presença ou outros tipos para monitorar diferentes áreas.</li>
                   <li><strong className="font-semibold">Criar Registro de Eventos:</strong> Salve os eventos de alarme em um cartão SD ou memória flash para futuras análises.</li>
                </ul>

                <h2 className="text-xl md:text-2xl font-semibold mb-4">Dicas Práticas de Montagem e Uso</h2>
               <p className="mb-4">
                   Aqui estão algumas dicas para melhorar a montagem e o uso do seu sistema de alarme:
                 </p>
                <ul className="list-disc list-inside mb-4">
                  <li><strong className="font-semibold">Posicionamento do Sensor PIR:</strong> Coloque o sensor em um local estratégico para cobrir a área que deseja monitorar, evitando janelas e outras fontes de calor que possam causar falsos alarmes.</li>
                  <li><strong className="font-semibold">Ajuste da Sensibilidade do PIR:</strong> Se seu sensor PIR tiver ajustes de sensibilidade, ajuste-o para minimizar falsos positivos.</li>
                    <li><strong className="font-semibold">Caixa de Proteção:</strong> Utilize uma caixa apropriada para proteger seu circuito e facilitar a instalação em diferentes locais.</li>
                  <li><strong className="font-semibold">Fonte de Alimentação Externa:</strong> Se necessário, utilize uma fonte de alimentação externa para garantir um funcionamento mais estável e contínuo.</li>
                </ul>

                <h2 className="text-xl md:text-2xl font-semibold mb-4">Resolução de Problemas Comuns</h2>
                <p className="mb-4">
                   E aqui estão algumas soluções para os problemas mais comuns que podem surgir ao montar seu sistema:
                 </p>
                <ul className="list-disc list-inside mb-6">
                  <li><strong className="font-semibold">Falsos Alarmes:</strong> Ajuste a sensibilidade do sensor PIR, verifique a presença de fontes de calor próximas e teste em diferentes locais.</li>
                  <li><strong className="font-semibold">LED Fraco ou Apagado:</strong> Verifique a polaridade do LED e do resistor, confira se o resistor está funcionando corretamente.</li>
                  <li><strong className="font-semibold">Buzzer sem Som:</strong> Verifique as conexões do buzzer, confirme a polaridade e certifique-se de que o volume não está muito baixo.</li>
                   <li><strong className="font-semibold">Botão Instável:</strong> Implemente um "debounce" no software para evitar acionamentos múltiplos quando pressionar o botão ou utilize um capacitor no circuito para corrigir essa instabilidade.</li>
                </ul>
              </div>
              {/*
              <div className="flex justify-center space-x-4 mt-6 md:mt-8">
                <motion.a
                  href="https://github.com/seu-usuario/arduino-alarm"
                  className="flex items-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 text-sm md:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub />
                  <span>Código no GitHub</span>
                </motion.a>
                <motion.a
                  href="/video-tutorial/arduino-alarm"
                  className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 text-sm md:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaPlay />
                  <span>Ver Vídeo Tutorial</span>
                </motion.a>
              </div>
              */}
            </div>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
}