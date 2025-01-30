import Layout from '../../components/Layout';
import { motion } from 'framer-motion';
import { FaFolderOpen, FaQuestionCircle, FaCode, FaExclamationTriangle, FaRobot, FaSortAlphaDown, FaCalendarCheck, FaGithub, FaDownload } from 'react-icons/fa';
import Reader from '../../components/Reader';
export default function FileOrganization() {
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
                        <FaFolderOpen className="text-5xl text-yellow-600" />
                        <h1 className="text-5xl font-extrabold leading-tight text-gray-800">
                            Organize seus Arquivos com Python: Diga Adeus à Bagunça Digital!
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
                                    <span>Desvende a Organização Automática de Arquivos</span>
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Se sua área de trabalho ou pasta de downloads é um caos, este projeto é para você! Aprenda a criar um script Python que organiza automaticamente seus arquivos, movendo-os para pastas com base em sua extensão (ex: imagens para a pasta "Imagens", documentos para a pasta "Documentos"). Imagine a paz de espírito de ter seus arquivos sempre organizados, sem esforço manual.
                                </p>
                                <p className="text-lg text-gray-600 leading-relaxed mt-4">
                                    Com este guia, você aprenderá a:
                                </p>
                                <ul className="list-disc list-inside text-lg text-gray-600 leading-relaxed mt-4">
                                    <li>Monitorar uma pasta específica em busca de novos arquivos.</li>
                                    <li>Identificar a extensão de cada arquivo.</li>
                                    <li>Criar pastas com base nas extensões dos arquivos.</li>
                                    <li>Mover os arquivos para as pastas correspondentes.</li>
                                    <li>Agendar a execução do script para que a organização seja feita automaticamente em intervalos regulares.</li>
                                </ul>
                                <p className="text-lg text-gray-600 leading-relaxed mt-4">
                                    Transforme a bagunça digital em ordem com a magia da automação!
                                </p>
                                <p className="text-lg text-gray-600 leading-relaxed mt-4">
                                    Além disso, este projeto pode ser expandido para incluir funcionalidades adicionais, como:
                                </p>
                                <ul className="list-disc list-inside text-lg text-gray-600 leading-relaxed mt-4">
                                    <li>Organizar arquivos por data de criação ou modificação.</li>
                                    <li>Renomear arquivos com base em padrões predefinidos.</li>
                                    <li>Integrar com serviços de armazenamento em nuvem, como Google Drive ou Dropbox.</li>
                                    <li>Criar uma interface gráfica para facilitar a configuração e o uso do script.</li>
                                </ul>
                            </div>

                            {/* Seção de Tecnologias e Pré-requisitos */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                {/* Tecnologias Utilizadas */}
                                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                                    <h3 className="text-xl font-bold text-gray-700 mb-4 flex items-center space-x-2">
                                        <FaCode className="text-lg text-green-500" />
                                        <span>As Ferramentas da Ordem Digital</span>
                                    </h3>
                                    <ul className="list-disc list-inside text-gray-600 text-lg leading-relaxed">
                                        <li><b>Python 3.x:</b> A linguagem de programação que dá vida à organização.  Sua sintaxe clara e bibliotecas robustas a tornam ideal para automatizar tarefas.</li>
                                        <li><b>`os`:</b> Um módulo padrão do Python para interagir com o sistema operacional, permitindo criar pastas, mover arquivos e listar diretórios. É o coração da manipulação de arquivos e pastas.</li>
                                        <li><b>`shutil`:</b> Outro módulo padrão do Python para operações de alto nível com arquivos, como mover e copiar. Simplifica tarefas complexas de gerenciamento de arquivos.</li>
                                        <li><b>`time`:</b> Módulo para adicionar pausas no script, controlando a frequência da organização.  Essencial para evitar sobrecarga do sistema e otimizar o desempenho.</li>
                                        <li><b>`schedule` (Opcional):</b> Uma biblioteca para agendar a execução do script em intervalos regulares.  Permite automatizar a organização em horários convenientes, sem intervenção manual.</li>
                                        <li><b>`logging` (Opcional):</b> Um módulo para registrar eventos e erros do script em um arquivo.  Fundamental para monitorar o desempenho, diagnosticar problemas e garantir a confiabilidade.</li>
                                    </ul>
                                </div>

                                {/* Pré-requisitos */}
                                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                                    <h3 className="text-xl font-bold text-gray-700 mb-4 flex items-center space-x-2">
                                        <FaExclamationTriangle className="text-lg text-orange-500" />
                                        <span>Preparando o Terreno para a Ordem</span>
                                    </h3>
                                    <ul className="list-disc list-inside text-gray-600 text-lg leading-relaxed">
                                        <li><b>Python Instalado:</b> Python 3.x deve estar instalado em seu sistema.  Verifique a instalação executando `python --version` no terminal.</li>
                                        <li><b>Conhecimento Básico de Python:</b> Familiaridade com variáveis, loops, condicionais e módulos.  Um curso introdutório de Python é altamente recomendado.</li>
                                        <li><b>Editor de Código:</b> VS Code, PyCharm, Sublime Text ou seu editor preferido.  Um bom editor de código facilita a escrita, depuração e organização do código.</li>
                                        <li><b>Pasta de Destino:</b> Uma pasta que você deseja organizar (ex: sua área de trabalho ou pasta de downloads).  Certifique-se de ter permissões de leitura e escrita na pasta de destino.</li>
                                        <li><b>Terminal/Prompt de Comando:</b> Acesso ao terminal para executar o script Python.  Familiarize-se com os comandos básicos do terminal.</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Seção de Instruções Detalhadas */}
                            <div className="border-t pt-10">
                                <h2 className="text-3xl font-semibold text-gray-700 mb-5 flex items-center space-x-3">
                                    <FaRobot className="text-xl text-purple-500" />
                                    <span>Automatizando a Organização: Um Guia Passo a Passo</span>
                                </h2>
                                <div className="prose max-w-none">
                                    <h3 className="text-2xl font-bold text-gray-700 mt-8 mb-3">1. Instalando a Biblioteca `schedule` (Opcional)</h3>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        Se você deseja agendar a execução do script, instale a biblioteca `schedule`:
                                    </p>
                                    <pre className="bg-gray-800 text-white p-6 rounded-xl overflow-x-auto text-sm md:text-base">
                                        <code>
                                            pip install schedule
                                        </code>
                                    </pre>

                                    <h3 className="text-2xl font-bold text-gray-700 mt-8 mb-3">2. O Código Python para a Organização Automática</h3>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        Crie um arquivo Python (ex: `organizar_arquivos.py`) e cole o seguinte código:
                                    </p>
                                    <pre className="bg-gray-800 text-white p-6 rounded-xl overflow-x-auto text-sm md:text-base">
                                        <code>{`
import os
import shutil
import time
import schedule
import logging

# Configuração de logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

# Pasta a ser organizada (substitua pelo seu caminho)
PASTA_A_ORGANIZAR = "/Users/seu_usuario/Downloads"  # Exemplo para macOS

# Dicionário de extensões e suas respectivas pastas
EXTENSOES_E_PASTAS = {
    "pdf": "Documentos",
    "docx": "Documentos",
    "jpg": "Imagens",
    "jpeg": "Imagens",
    "png": "Imagens",
    "mp3": "Musicas",
    "mp4": "Videos",
    "zip": "Compactados",
    "exe": "Executaveis" #Tenha cuidado com arquivos executáveis
}

def organizar_arquivos():
    logging.info("Iniciando a organização dos arquivos...")
    for arquivo in os.listdir(PASTA_A_ORGANIZAR):
        caminho_completo = os.path.join(PASTA_A_ORGANIZAR, arquivo)

        # Ignora diretórios
        if os.path.isdir(caminho_completo):
            continue

        try:
            # Obtém a extensão do arquivo
            nome, extensao = os.path.splitext(arquivo)
            extensao = extensao[1:].lower()  # Remove o ponto e converte para minúsculo

            # Verifica se a extensão está no dicionário
            if extensao in EXTENSOES_E_PASTAS:
                pasta_destino = os.path.join(PASTA_A_ORGANIZAR, EXTENSOES_E_PASTAS[extensao])

                # Cria a pasta se ela não existir
                if not os.path.exists(pasta_destino):
                    os.makedirs(pasta_destino)
                    logging.info(f"Pasta '{EXTENSOES_E_PASTAS[extensao]}' criada.")

                # Move o arquivo para a pasta
                shutil.move(caminho_completo, os.path.join(pasta_destino, arquivo))
                logging.info(f"Arquivo '{arquivo}' movido para '{EXTENSOES_E_PASTAS[extensao]}'")

            else:
                logging.warning(f"Extensão '{extensao}' não mapeada. Arquivo '{arquivo}' não foi movido.")

        except Exception as e:
            logging.error(f"Erro ao processar o arquivo '{arquivo}': {e}")

    logging.info("Organização dos arquivos concluída!")

# Agendamento (opcional)
# schedule.every().day.at("08:00").do(organizar_arquivos) # Organiza todos os dias às 8h

# Execução contínua (se não usar o agendador)
# while True:
#     organizar_arquivos()
#     time.sleep(60 * 60)  # Executa a cada hora

organizar_arquivos() #Executa uma vez

#Para agendar, descomente as linhas de schedule e comente a linha organizar_arquivos()
        `}</code>
                                    </pre>

                                    <h3 className="text-2xl font-bold text-gray-700 mt-8 mb-3">3. Configurando o Script</h3>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        Antes de executar o script, personalize as seguintes variáveis:
                                    </p>
                                    <ul className="list-disc list-inside text-lg text-gray-600 leading-relaxed">
                                        <li><b>`PASTA_A_ORGANIZAR`:</b> Substitua pelo caminho da pasta que você deseja organizar.  Certifique-se de usar o caminho absoluto da pasta.</li>
                                        <li><b>`EXTENSOES_E_PASTAS`:</b> Adicione ou modifique as extensões e suas respectivas pastas.  Considere adicionar extensões para diferentes tipos de arquivos que você usa.</li>
                                        <li><b>Configuração de Logging:</b> Ajuste o nível de logging (`logging.INFO`, `logging.WARNING`, `logging.ERROR`) para controlar o nível de detalhe das mensagens registradas.</li>
                                    </ul>

                                    <h3 className="text-2xl font-bold text-gray-700 mt-8 mb-3">4. Executando o Script</h3>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        Abra seu terminal, navegue até o diretório do script e execute o comando:
                                    </p>
                                    <pre className="bg-gray-800 text-white p-6 rounded-xl overflow-x-auto text-sm md:text-base">
                                        <code>
                                            python organizar_arquivos.py
                                        </code>
                                    </pre>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        O script organizará os arquivos na pasta especificada.  Verifique a saída do script no terminal para acompanhar o progresso e identificar erros.  Analise o arquivo de log (se configurado) para obter informações mais detalhadas sobre a execução do script.
                                    </p>

                                    <h3 className="text-2xl font-bold text-gray-700 mt-8 mb-3">5. Agendando a Execução (Opcional)</h3>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        Se você deseja agendar a execução do script, descomente as linhas de agendamento no código e modifique o horário conforme necessário.
                                    </p>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        Observação: Para que o agendamento funcione corretamente, você precisa manter o script em execução. Considere usar um serviço de agendamento de tarefas do seu sistema operacional (ex: Task Scheduler no Windows, cron no Linux/macOS).  Certifique-se de que o script tenha as permissões necessárias para ser executado pelo agendador de tarefas.  Teste o agendamento para garantir que o script seja executado no horário correto.
                                    </p>

                                    <h3 className="text-2xl font-bold text-gray-700 mt-8 mb-3">6. Lidando com Arquivos Duplicados</h3>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        O script atual simplesmente move os arquivos. Se houver arquivos duplicados na pasta de destino, eles serão sobrescritos. Para evitar isso, você pode adicionar lógica para renomear os arquivos duplicados antes de movê-los.
                                    </p>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        Uma abordagem simples é adicionar um número sequencial ao nome do arquivo duplicado. Por exemplo, se já existir um arquivo chamado "documento.pdf" na pasta de destino, o script pode renomear o novo arquivo para "documento_1.pdf".
                                    </p>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        Essa funcionalidade pode ser implementada adicionando uma verificação para a existência do arquivo de destino e, se ele já existir, gerar um novo nome de arquivo até encontrar um nome que não esteja em uso.
                                    </p>
                                </div>
                            </div>

                            {/* Seção de Boas Práticas e Considerações */}
                            <div className="border-t pt-10">
                                <h2 className="text-3xl font-semibold text-gray-700 mb-5 flex items-center space-x-3">
                                    <FaSortAlphaDown className="text-xl text-blue-500" />
                                    <span>Dicas para uma Organização Impecável</span>
                                </h2>
                                <ul className="list-disc list-inside text-lg text-gray-600 leading-relaxed">
                                    <li><b>Teste Inicial:</b> Execute o script em uma pasta de teste antes de aplicá-lo à sua pasta principal.  Isso ajuda a evitar a perda acidental de arquivos ou erros inesperados.</li>
                                    <li><b>Mapeamento Completo:</b> Certifique-se de mapear todas as extensões de arquivo que você deseja organizar.  Revise periodicamente o mapeamento para adicionar novas extensões conforme necessário.</li>
                                    <li><b>Cuidado com Executáveis:</b> Tenha cuidado ao organizar arquivos executáveis (``.exe``, ``.app``, etc.). É recomendável criar uma pasta separada para eles e revisá-los antes de movê-los.  Considere adicionar uma camada de segurança para evitar a execução acidental de arquivos maliciosos.</li>
                                    <li><b>Tratamento de Erros:</b> Implemente um tratamento de erros mais robusto para lidar com arquivos corrompidos ou problemas de permissão.  Use blocos `try...except` para capturar exceções e registrar mensagens de erro informativas.</li>
                                    <li><b>Logs:</b> Adicione logs ao seu script para registrar as ações realizadas e facilitar a identificação de problemas.  Use o módulo `logging` para configurar o logging de forma adequada.</li>
                                    <li><b>Backup:</b> Faça backup da sua pasta antes de executar o script pela primeira vez.  Isso garante que você possa restaurar seus arquivos em caso de problemas.</li>
                                    <li><b>Monitoramento:</b> Monitore a execução do script para garantir que ele esteja funcionando corretamente.  Verifique os logs e a pasta de destino para identificar problemas ou erros.</li>
                                    <li><b>Performance:</b> Otimize o script para melhorar o desempenho, especialmente se você tiver uma grande quantidade de arquivos.  Considere usar técnicas de otimização, como processamento paralelo ou caching.</li>
                                </ul>
                            </div>

                            {/* Seção de Ações Finais 
                            <div className="flex justify-center space-x-6 mt-12">
                                {/* Link para um repositório GitHub (opcional) *
                                <motion.a
                                    href="https://github.com/seu-usuario/python-organizar-arquivos"
                                    className="flex items-center space-x-3 bg-gray-800 text-white px-8 py-4 rounded-xl hover:bg-gray-700 transition-colors duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FaGithub className="text-xl" />
                                    <span className="text-lg font-medium">Ver no GitHub</span>
                                </motion.a>

                                {/* Link para Download do Projeto (opcional) 
                                <motion.a
                                    href="/downloads/python-organizar-arquivos.zip"
                                    className="flex items-center space-x-3 bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors duration-300"
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