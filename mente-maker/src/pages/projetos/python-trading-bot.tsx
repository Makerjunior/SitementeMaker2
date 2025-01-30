import Layout from '../../components/Layout';
import { motion } from 'framer-motion';
import {  FaChartLine, FaCode, FaExclamationTriangle, FaFile, FaCheckCircle, FaQuestionCircle, FaRobot, FaSortAlphaDown, FaCalendarCheck } from 'react-icons/fa';
import Reader from '../../components/Reader';
export default function PythonTradingBot() {
    return (
        <Layout>
            <motion.div
                className="container-responsive py-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="max-w-5xl mx-auto">

                    {/* Título e Ícone Principal */}
                    <div className="flex items-center space-x-6 mb-10">
                        <FaChartLine className="text-5xl text-green-500" />
                        <h1 className="text-5xl font-extrabold leading-tight text-gray-800">
                            Construindo um Bot de Trading com Python: Automatize suas Estratégias no Mercado Financeiro
                        </h1>
                    </div>
                    <Reader />
                    {/* Card Principal com Descrição Detalhada */}
                    <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                        <div className="p-12">

                            {/* Seção Sobre o Projeto */}
                            <div className="mb-10">
                                <h2 className="text-3xl font-semibold text-gray-700 mb-5 flex items-center space-x-3">
                                    <FaQuestionCircle className="text-xl text-blue-500" />
                                    <span>Desvende o Trading Automatizado com Python</span>
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Explore o mundo do trading automatizado com este projeto que combina a flexibilidade do Python com a dinâmica dos mercados financeiros. Este guia prático irá conduzi-lo através do processo de desenvolvimento de um bot de trading capaz de analisar dados do mercado em tempo real, identificar padrões e executar ordens de compra e venda automaticamente, tudo baseado em estratégias predefinidas. Prepare-se para aprender como a automação pode transformar sua abordagem ao mercado financeiro.
                                </p>
                                <p className="text-lg text-gray-600 leading-relaxed mt-4">
                                    Com este guia, você aprenderá a:
                                </p>
                                <ul className="list-disc list-inside text-lg text-gray-600 leading-relaxed mt-4">
                                    <li>Configurar seu ambiente de desenvolvimento para trading automatizado com Python.</li>
                                    <li>Conectar-se a exchanges de criptomoedas através da API `ccxt`.</li>
                                    <li>Coletar dados de mercado em tempo real, como preços e volumes.</li>
                                    <li>Implementar indicadores técnicos usando a biblioteca `pandas-ta`.</li>
                                    <li>Desenvolver uma estratégia de trading básica baseada em indicadores.</li>
                                    <li>Automatizar a execução de ordens de compra e venda.</li>
                                    <li>Utilizar variáveis de ambiente para proteger suas chaves de API.</li>
                                    <li>Visualizar seus dados de mercado usando o Matplotlib (opcional).</li>
                                </ul>
                                <p className="text-lg text-gray-600 leading-relaxed mt-4">
                                     Comece sua jornada para criar um bot de trading eficiente e personalizado, aproveitando o poder da programação em Python para aprimorar suas estratégias no mercado financeiro.
                                </p>
                                <p className="text-lg text-gray-600 leading-relaxed mt-4">
                                     Além disso, este projeto pode ser expandido para incluir funcionalidades adicionais, como:
                                </p>
                                 <ul className="list-disc list-inside text-lg text-gray-600 leading-relaxed mt-4">
                                     <li>Implementar estratégias de trading mais complexas e sofisticadas.</li>
                                     <li>Adicionar funcionalidades de gerenciamento de risco para proteger seu capital.</li>
                                     <li>Integrar com um sistema de alertas para receber notificações quando oportunidades de trading forem encontradas.</li>
                                     <li>Utilizar inteligência artificial para criar estratégias de trading baseadas em aprendizado de máquina.</li>
                                     <li>Criar uma interface gráfica para monitorar e controlar o bot.</li>
                                </ul>
                            </div>

                            {/* Seção de Tecnologias e Pré-requisitos */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                {/* Tecnologias Utilizadas */}
                                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                                    <h3 className="text-xl font-bold text-gray-700 mb-4 flex items-center space-x-2">
                                        <FaCode className="text-lg text-green-500" />
                                        <span>As Ferramentas do Trading Automatizado</span>
                                    </h3>
                                    <ul className="list-disc list-inside text-gray-600 text-lg leading-relaxed">
                                        <li><b>Python 3.x:</b> A linguagem de programação que dá vida ao seu bot de trading,  com sua vasta gama de bibliotecas para análise de dados e automação, Python é a escolha perfeita para projetos de trading automatizado.</li>
                                        <li><b>ccxt:</b> A biblioteca que conecta seu bot às principais exchanges de criptomoedas,  permitindo que você acesse dados de mercado e execute ordens em várias plataformas.</li>
                                        <li><b>pandas-ta:</b> A biblioteca que simplifica a aplicação de indicadores técnicos,  facilitando a análise de dados de mercado e a identificação de oportunidades de trading.</li>
                                        <li><b>numpy:</b> A biblioteca para computação científica, utilizada para processamento eficiente de dados numéricos,  numpy é essencial para operações matemáticas e estatísticas em seu bot de trading.</li>
                                        <li><b>matplotlib:</b> A biblioteca para visualização de dados, que permite criar gráficos para analisar o desempenho do seu bot e as tendências do mercado,  embora não seja necessária para a operação básica, matplotlib é útil para análises mais aprofundadas.</li>
                                        <li><b>python-dotenv:</b> A biblioteca para gerenciar variáveis de ambiente,  permitindo que você armazene suas chaves de API de forma segura e organizada.</li>
                                    </ul>
                                </div>

                                {/* Pré-requisitos */}
                                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                                    <h3 className="text-xl font-bold text-gray-700 mb-4 flex items-center space-x-2">
                                        <FaExclamationTriangle className="text-lg text-orange-500" />
                                        <span>Preparando o Terreno para o Trading</span>
                                    </h3>
                                    <ul className="list-disc list-inside text-gray-600 text-lg leading-relaxed">
                                        <li><b>Conhecimento Intermediário de Python:</b> É necessário estar familiarizado com variáveis, loops, funções, classes e manipulação de dados usando o Pandas. Um curso intermediário de Python é recomendado.</li>
                                         <li><b>Noções de Mercado Financeiro:</b> É essencial entender os conceitos básicos de trading, como candlesticks, indicadores técnicos e estratégias de compra e venda. Familiarize-se com os termos e conceitos do mercado financeiro.</li>
                                        <li><b>Conta em Exchange de Criptomoedas:</b> Uma conta em uma exchange que suporte a API `ccxt` é necessária para interagir com o mercado.  Certifique-se de ter as chaves de API corretas e de que sua conta esteja habilitada para trading.</li>
                                        <li><b>Editor de Código:</b> VS Code, PyCharm, Sublime Text ou seu editor preferido.  Um bom editor de código facilita a escrita, depuração e organização do código.</li>
                                        <li><b>Terminal/Prompt de Comando:</b> Acesso ao terminal para executar o script Python e instalar as dependências. Familiarize-se com os comandos básicos do terminal.</li>
                                     </ul>
                                </div>
                            </div>

                            {/* Seção de Instruções Detalhadas */}
                            <div className="border-t pt-10">
                                <h2 className="text-3xl font-semibold text-gray-700 mb-5 flex items-center space-x-3">
                                    <FaRobot className="text-xl text-purple-500" />
                                    <span>Construindo seu Bot de Trading: Um Guia Passo a Passo</span>
                                </h2>
                                <div className="prose max-w-none">
                                    <h3 className="text-2xl font-bold text-gray-700 mt-8 mb-3">1. Instalação das Dependências</h3>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        Para iniciar, instale as bibliotecas necessárias usando o gerenciador de pacotes `pip`:
                                    </p>
                                    <pre className="bg-gray-800 text-white p-6 rounded-xl overflow-x-auto text-sm md:text-base">
                                        <code>
                                            pip install ccxt pandas-ta numpy matplotlib python-dotenv
                                        </code>
                                    </pre>

                                    <h3 className="text-2xl font-bold text-gray-700 mt-8 mb-3">2. O Código Python do Bot de Trading</h3>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        Crie um arquivo Python (ex: `trading_bot.py`) e cole o seguinte código:
                                    </p>
                                    <pre className="bg-gray-800 text-white p-6 rounded-xl overflow-x-auto text-sm md:text-base">
                                        <code>{`
import ccxt
import pandas as pd
import pandas_ta as ta
import numpy as np
from dotenv import load_dotenv
import os
import time
import logging

# Configuração de logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

# Carregar variáveis de ambiente
load_dotenv()

class TradingBot:
    def __init__(self):
        self.exchange = ccxt.binance({
            'apiKey': os.getenv('API_KEY'),
            'secret': os.getenv('API_SECRET')
        })
        self.balance = {}
        self.last_order_time = 0
        self.order_frequency = 15 * 60  # 15 minutos em segundos

    def get_market_data(self, symbol, timeframe='1h'):
        try:
            logging.info(f"Fetching market data for {symbol} with timeframe {timeframe}")
            ohlcv = self.exchange.fetch_ohlcv(symbol, timeframe)
            df = pd.DataFrame(ohlcv, columns=['timestamp', 'open', 'high', 'low', 'close', 'volume'])
            return df
        except ccxt.NetworkError as e:
            logging.error(f"Network error while fetching data: {e}")
            return None
        except Exception as e:
            logging.error(f"Error while fetching market data: {e}")
            return None
            
    def analyze_market(self, df):
        logging.info("Analyzing market data...")
        df['SMA_20'] = ta.sma(df['close'], length=20)
        df['RSI'] = ta.rsi(df['close'], length=14)
        return df
        
    def execute_strategy(self, df, symbol):
        logging.info("Executing trading strategy...")
        if df is None or df.empty:
            logging.warning("No market data available to execute strategy.")
            return 'HOLD'
        
        current_time = time.time()
        time_since_last_order = current_time - self.last_order_time

        if time_since_last_order < self.order_frequency:
            logging.info(f"Waiting before next order. Time remaining: {self.order_frequency - time_since_last_order:.2f} seconds")
            return 'HOLD'

        if df['RSI'].iloc[-1] < 30:
            self.place_order(symbol, 'BUY')
            self.last_order_time = current_time
            return 'BUY'
        elif df['RSI'].iloc[-1] > 70:
            self.place_order(symbol, 'SELL')
            self.last_order_time = current_time
            return 'SELL'
        return 'HOLD'
    
    def place_order(self, symbol, order_type):
        try:
           logging.info(f"Placing a {order_type} order for {symbol}")

           #Get the current balance
           self.update_balance()

           # Get the current price
           ticker = self.exchange.fetch_ticker(symbol)
           current_price = ticker['last']
           logging.info(f"Current price of {symbol}: {current_price}")

            # Calculate the quantity to buy/sell (Use 5% of the total balance as an example)
           base_asset = symbol.split('/')[0]
           quote_asset = symbol.split('/')[1]

           if order_type == 'BUY':
                if quote_asset in self.balance and self.balance[quote_asset] > 0:
                    quantity = (self.balance[quote_asset] * 0.05) / current_price
                else:
                    logging.warning(f"Insufficient {quote_asset} balance to place a BUY order")
                    return
           else:
               if base_asset in self.balance and self.balance[base_asset] > 0:
                    quantity = self.balance[base_asset] * 0.05
               else:
                    logging.warning(f"Insufficient {base_asset} balance to place a SELL order")
                    return

           if quantity > 0:
              order = self.exchange.create_market_order(symbol, order_type, quantity)
              logging.info(f"Order placed: {order}")
           else:
              logging.warning("Quantity to place the order is less or equal than zero.")
        except ccxt.InsufficientFunds as e:
            logging.error(f"Insufficient funds to place order: {e}")
        except ccxt.ExchangeError as e:
            logging.error(f"Exchange error while placing order: {e}")
        except Exception as e:
            logging.error(f"Error while placing order: {e}")

    def update_balance(self):
       try:
           self.balance = self.exchange.fetch_balance()['free']
           logging.info(f"Balance updated {self.balance}")
       except Exception as e:
           logging.error(f"Error while updating balance: {e}")

# Uso do bot
bot = TradingBot()
symbol = 'BTC/USDT'
while True:
    data = bot.get_market_data(symbol)
    if data is not None:
        analysis = bot.analyze_market(data)
        decision = bot.execute_strategy(analysis, symbol)
        logging.info(f"Trading decision: {decision}")
    time.sleep(60)  # Executa a cada minuto
        `}</code>
                                    </pre>

                                    <h3 className="text-2xl font-bold text-gray-700 mt-8 mb-3">3. Configuração</h3>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        Para configurar seu bot, crie um arquivo `.env` na mesma pasta do seu script e adicione suas credenciais da exchange (API Key e API Secret):
                                    </p>
                                    <pre className="bg-gray-800 text-white p-6 rounded-xl overflow-x-auto text-sm md:text-base">
                                        <code>{`
API_KEY=sua_api_key
API_SECRET=seu_api_secret
                                        `}</code>
                                    </pre>
                                    <ul className="list-disc list-inside text-lg text-gray-600 leading-relaxed mt-4">
                                        <li><b>Chaves de API:</b>  Obtenha suas chaves de API na sua exchange de criptomoedas e insira-as no arquivo `.env`. As chaves de API fornecem acesso à sua conta na exchange, permitindo que seu bot execute ordens de compra e venda.</li>
                                        <li><b>Segurança:</b>  Não compartilhe suas chaves de API com ninguém e não as inclua diretamente no seu código. Utilize as variáveis de ambiente para garantir a segurança de suas credenciais.</li>
                                        <li><b>Testes:</b>  Utilize uma conta de teste (se disponível na sua exchange) para testar seu bot antes de usá-lo com dinheiro real.</li>
                                    </ul>

                                     <h3 className="text-2xl font-bold text-gray-700 mt-8 mb-3">4. Executando o Script</h3>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        Abra seu terminal, navegue até o diretório do script e execute o comando:
                                    </p>
                                     <pre className="bg-gray-800 text-white p-6 rounded-xl overflow-x-auto text-sm md:text-base">
                                         <code>
                                             python trading_bot.py
                                         </code>
                                     </pre>
                                     <p className="text-lg text-gray-600 leading-relaxed">
                                        O bot iniciará a coleta de dados do mercado e executará as ordens de compra e venda de acordo com a estratégia definida. As informações de execução serão registradas no terminal e no log do sistema.
                                     </p>

                                    <h3 className="text-2xl font-bold text-gray-700 mt-8 mb-3">5.  Avisos Importantes</h3>
                                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
                                        <p className="text-yellow-700">
                                           ⚠️ Este é um projeto educacional. Não use com dinheiro real sem entender completamente os riscos envolvidos. O trading com criptomoedas é altamente volátil e pode resultar em perdas financeiras.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Seção de Funcionalidades */}
                           <div className="border-t pt-10">
                                 <h2 className="text-3xl font-semibold text-gray-700 mb-5 flex items-center space-x-3">
                                    <FaCheckCircle className="text-xl text-green-500" />
                                     <span>As Funcionalidades do seu Bot de Trading</span>
                                 </h2>
                                 <ul className="list-disc list-inside text-lg text-gray-600 leading-relaxed">
                                     <li><b>Conexão com Exchanges:</b> O bot se conecta às principais exchanges de criptomoedas usando a biblioteca `ccxt`, permitindo que você acesse dados de mercado e execute ordens.</li>
                                     <li><b>Coleta de Dados de Mercado:</b> O bot coleta dados de mercado em tempo real, como preços, volumes e timestamps. Esses dados são usados para análise técnica e tomada de decisões.</li>
                                     <li><b>Análise Técnica:</b> O bot utiliza a biblioteca `pandas-ta` para calcular indicadores técnicos, como SMA e RSI. Esses indicadores são usados para identificar tendências e oportunidades de trading.</li>
                                    <li><b>Estratégia de Trading:</b> O bot executa ordens de compra e venda com base em uma estratégia predefinida, neste caso, utilizando o RSI para identificar condições de sobrecompra e sobrevenda.</li>
                                    <li><b>Gerenciamento de Ordens:</b> O bot executa as ordens no mercado com base em sua estratégia,  gerencia a quantidade de cada ordem, usando como base a porcentagem definida do balanço total.</li>
                                    <li><b>Segurança de Chaves de API:</b> O bot utiliza variáveis de ambiente para armazenar as chaves de API, garantindo a segurança de suas credenciais.</li>
                                    <li><b>Logs:</b> O bot utiliza o módulo `logging` para registrar todas as suas ações e erros, facilitando a análise e a depuração.</li>
                                </ul>
                            </div>

                            {/* Seção de Boas Práticas e Considerações */}
                            <div className="border-t pt-10">
                                <h2 className="text-3xl font-semibold text-gray-700 mb-5 flex items-center space-x-3">
                                    <FaSortAlphaDown className="text-xl text-blue-500" />
                                    <span>Dicas para um Trading Automatizado Eficaz</span>
                                </h2>
                                <ul className="list-disc list-inside text-lg text-gray-600 leading-relaxed">
                                     <li><b>Comece Pequeno:</b> Comece com uma pequena quantia de capital para testar seu bot. Não arrisque todo o seu dinheiro até que você esteja confiante de que seu bot está funcionando corretamente.</li>
                                     <li><b>Testes Exaustivos:</b> Teste o bot em uma conta de simulação antes de usá-lo com dinheiro real. Isso ajuda a identificar possíveis erros e a ajustar a estratégia.</li>
                                    <li><b>Monitoramento Contínuo:</b> Monitore o bot regularmente para garantir que ele esteja funcionando como esperado. Verifique os logs e a performance do bot para identificar possíveis problemas.</li>
                                    <li><b>Gerenciamento de Risco:</b> Implemente um bom gerenciamento de risco para proteger seu capital. Defina limites de stop-loss e take-profit para limitar suas perdas e maximizar seus ganhos.</li>
                                    <li><b>Diversificação:</b> Não coloque todos os seus ovos na mesma cesta. Considere diversificar suas estratégias de trading e seus ativos.</li>
                                    <li><b>Atualização Constante:</b> O mercado financeiro está em constante mudança. Mantenha seu bot atualizado com as últimas tendências e tecnologias.</li>
                                     <li><b>Documentação:</b> Crie uma documentação clara e concisa sobre como instalar, configurar e usar o bot. Isso tornará o seu projeto mais acessível a outros desenvolvedores.</li>
                                      <li><b>Código Limpo e Organizado:</b> Mantenha seu código limpo e organizado, para que seja fácil para outros desenvolvedores entenderem e colaborarem em seu projeto. Utilize comentários para explicar o funcionamento das funções e seções do código.</li>
                                      <li><b>Análise de Desempenho:</b> Analise o desempenho do seu bot regularmente para identificar pontos fortes e fracos. Use essa análise para aprimorar sua estratégia e melhorar seus resultados.</li>
                                </ul>
                            </div>

                           {/* Seção de Ações Finais 
                            <div className="flex justify-center space-x-6 mt-12">
                                {/* Link para um repositório GitHub (opcional) 
                                <motion.a
                                    href="https://github.com/seu-usuario/python-trading-bot"
                                    className="flex items-center space-x-3 bg-gray-800 text-white px-8 py-4 rounded-xl hover:bg-gray-700 transition-colors duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FaGithub className="text-xl" />
                                    <span className="text-lg font-medium">Ver no GitHub</span>
                                </motion.a>

                                {/* Link para Download do Projeto (opcional) 
                                    href="/downloads/python-trading-bot.zip"
                                    className="flex items-center space-x-3 bg-green-600 text-white px-8 py-4 rounded-xl hover:bg-green-700 transition-colors duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FaDownload className="text-xl" />
                                    <span className="text-lg font-medium">Download Projeto</span>
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