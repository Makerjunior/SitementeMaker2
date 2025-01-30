import Layout from '../../components/Layout';
import { motion } from 'framer-motion';
import { FaPython, FaGithub, FaDownload, FaCamera, FaCode, FaExclamationTriangle, FaFile, FaCheckCircle, FaQuestionCircle, FaRobot, FaSortAlphaDown, FaCalendarCheck } from 'react-icons/fa';
import Reader from '../../components/Reader';
export default function ReconhecimentoFacial() {
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
                        <FaCamera className="text-5xl text-purple-500" />
                        <h1 className="text-5xl font-extrabold leading-tight text-gray-800">
                            Sistema de Reconhecimento Facial com Python: Uma Jornada na Visão Computacional
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
                                    <span>Desvende o Mundo do Reconhecimento Facial</span>
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Explore o fascinante campo do reconhecimento facial com este projeto prático e educativo. Utilizando Python, uma das linguagens de programação mais populares para inteligência artificial, e a poderosa biblioteca OpenCV para visão computacional, você irá desenvolver um sistema capaz de detectar e reconhecer faces em tempo real através de uma webcam. Este projeto não apenas demonstra como o reconhecimento facial funciona, mas também como ele pode ser implementado usando ferramentas acessíveis e de código aberto.
                                </p>
                                <p className="text-lg text-gray-600 leading-relaxed mt-4">
                                    Com este guia, você aprenderá a:
                                </p>
                                <ul className="list-disc list-inside text-lg text-gray-600 leading-relaxed mt-4">
                                    <li>Configurar seu ambiente de desenvolvimento para visão computacional com Python.</li>
                                    <li>Capturar vídeo em tempo real usando sua webcam.</li>
                                    <li>Implementar algoritmos de detecção e reconhecimento facial.</li>
                                    <li>Cadastrar novas faces no sistema para reconhecimento posterior.</li>
                                    <li>Registrar os reconhecimentos faciais com data e hora.</li>
                                    <li>Visualizar o processo de reconhecimento com a biblioteca OpenCV.</li>
                                </ul>
                                <p className="text-lg text-gray-600 leading-relaxed mt-4">
                                    Prepare-se para mergulhar no universo da visão computacional e descobrir como a tecnologia pode interpretar o mundo ao nosso redor!
                                </p>
                                <p className="text-lg text-gray-600 leading-relaxed mt-4">
                                    Além disso, este projeto pode ser expandido para incluir funcionalidades adicionais, como:
                                </p>
                                <ul className="list-disc list-inside text-lg text-gray-600 leading-relaxed mt-4">
                                     <li>Implementar um sistema de autenticação baseado em reconhecimento facial.</li>
                                     <li>Integrar com um banco de dados para armazenar informações sobre as pessoas reconhecidas.</li>
                                     <li>Detectar expressões faciais e emoções.</li>
                                     <li>Implementar um sistema de rastreamento facial.</li>
                                     <li>Criar uma interface gráfica para interagir com o sistema de forma mais intuitiva.</li>
                                </ul>
                            </div>

                            {/* Seção de Tecnologias e Pré-requisitos */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                {/* Tecnologias Utilizadas */}
                                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                                    <h3 className="text-xl font-bold text-gray-700 mb-4 flex items-center space-x-2">
                                        <FaCode className="text-lg text-green-500" />
                                        <span>As Ferramentas da Visão Computacional</span>
                                    </h3>
                                    <ul className="list-disc list-inside text-gray-600 text-lg leading-relaxed">
                                        <li><b>Python 3.x:</b> A linguagem de programação que torna o reconhecimento facial possível,  com sua sintaxe clara e vasta biblioteca de recursos, Python é uma escolha ideal para projetos de inteligência artificial.</li>
                                        <li><b>OpenCV:</b> A biblioteca de visão computacional que nos permite processar imagens e vídeos. É essencial para realizar tarefas como captura de vídeo, detecção de faces e desenho na tela.</li>
                                        <li><b>dlib:</b> Uma biblioteca de ferramentas de aprendizado de máquina que oferece algoritmos avançados de detecção de características faciais, dlib é fundamental para identificar pontos de referência em rostos, permitindo o reconhecimento.</li>
                                        <li><b>face_recognition:</b> Uma biblioteca de alto nível que simplifica o reconhecimento facial. Ela utiliza os recursos do dlib para tornar o processo mais fácil e eficiente.</li>
                                        <li><b>numpy:</b> Uma biblioteca para computação científica com suporte a arrays multidimensionais, numpy é vital para processar dados de imagem e realizar cálculos matemáticos necessários para o reconhecimento facial.</li>
                                        <li><b>datetime:</b> Um módulo Python para trabalhar com datas e horários. Essencial para registrar os momentos em que as faces são reconhecidas.</li>
                                    </ul>
                                </div>

                                {/* Pré-requisitos */}
                                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                                    <h3 className="text-xl font-bold text-gray-700 mb-4 flex items-center space-x-2">
                                        <FaExclamationTriangle className="text-lg text-orange-500" />
                                        <span>Preparando o Terreno para a Visão</span>
                                    </h3>
                                    <ul className="list-disc list-inside text-gray-600 text-lg leading-relaxed">
                                        <li><b>Webcam:</b> Uma câmera para capturar o vídeo em tempo real.  Certifique-se de que sua webcam esteja funcionando corretamente e de que você tenha as permissões necessárias para acessá-la.</li>
                                        <li><b>Python Instalado:</b> Python 3.x deve estar instalado em seu sistema.  Verifique a instalação executando `python --version` no terminal.</li>
                                        <li><b>Visual Studio Build Tools:</b> Necessário para compilar as bibliotecas do dlib (apenas no Windows).  Certifique-se de instalar as ferramentas de construção adequadas para sua versão do Visual Studio.</li>
                                        <li><b>CMake:</b> Uma ferramenta para gerenciar a construção das bibliotecas do dlib (apenas no Windows).  Faça o download e instale o CMake para garantir que o processo de construção ocorra sem problemas.</li>
                                        <li><b>Editor de Código:</b> VS Code, PyCharm, Sublime Text ou seu editor preferido.  Um bom editor de código facilita a escrita, depuração e organização do código.</li>
                                        <li><b>Conhecimento Básico de Python:</b> Familiaridade com variáveis, loops, condicionais, classes e módulos.  Um curso introdutório de Python é altamente recomendado.</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Seção de Instruções Detalhadas */}
                            <div className="border-t pt-10">
                                <h2 className="text-3xl font-semibold text-gray-700 mb-5 flex items-center space-x-3">
                                    <FaRobot className="text-xl text-purple-500" />
                                    <span>Construindo seu Sistema de Reconhecimento Facial: Um Guia Passo a Passo</span>
                                </h2>
                                <div className="prose max-w-none">
                                    <h3 className="text-2xl font-bold text-gray-700 mt-8 mb-3">1. Instalação das Dependências</h3>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        Para começar, você precisa instalar as bibliotecas Python necessárias para o funcionamento do sistema. Utilize o gerenciador de pacotes `pip` para instalar o OpenCV, dlib, face_recognition e numpy:
                                    </p>
                                     <pre className="bg-gray-800 text-white p-6 rounded-xl overflow-x-auto text-sm md:text-base">
                                         <code>
                                             pip install opencv-python dlib face-recognition numpy
                                         </code>
                                     </pre>
                                    <p className="text-lg text-gray-600 leading-relaxed mt-4">
                                        **Observação Importante (Windows):** Se você estiver no Windows, a instalação do `dlib` pode exigir o `Visual Studio Build Tools` e o `CMake` instalados. Para saber mais sobre como instalar esses componentes, consulte a documentação oficial do `dlib`.
                                    </p>

                                    <h3 className="text-2xl font-bold text-gray-700 mt-8 mb-3">2. O Código Python para o Reconhecimento Facial</h3>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        Crie um arquivo Python (ex: `main.py`) e cole o seguinte código:
                                    </p>
                                    <pre className="bg-gray-800 text-white p-6 rounded-xl overflow-x-auto text-sm md:text-base">
                                        <code>{`
import cv2
import face_recognition
import numpy as np
from datetime import datetime

class FaceRecognitionSystem:
    def __init__(self):
        self.known_face_encodings = []
        self.known_face_names = []
        self.camera = cv2.VideoCapture(0)
        
    def add_person(self, image_path, name):
        # Carregar imagem e codificar face
        image = face_recognition.load_image_file(image_path)
        encodings = face_recognition.face_encodings(image)
        
        if len(encodings) > 0:
            encoding = encodings[0]
            self.known_face_encodings.append(encoding)
            self.known_face_names.append(name)
        else:
            print(f"Nenhuma face encontrada na imagem: {image_path}")


    def run_recognition(self):
        while True:
            ret, frame = self.camera.read()
            
             # Check if the frame was successfully captured
            if not ret:
                print("Erro ao capturar o frame da webcam.")
                break
            
            # Encontrar faces no frame atual
            face_locations = face_recognition.face_locations(frame)
            face_encodings = face_recognition.face_encodings(frame, face_locations)
            
            for (top, right, bottom, left), face_encoding in zip(
                face_locations, face_encodings):
                
                # Verificar matches com faces conhecidas
                matches = face_recognition.compare_faces(
                    self.known_face_encodings, face_encoding)
                name = "Desconhecido"
                
                if True in matches:
                    first_match_index = matches.index(True)
                    name = self.known_face_names[first_match_index]
                
                # Desenhar retângulo e nome
                cv2.rectangle(frame, (left, top), (right, bottom), (0, 255, 0), 2)
                cv2.putText(frame, name, (left, top - 10),
                           cv2.FONT_HERSHEY_SIMPLEX, 0.75, (0, 255, 0), 2)
                
                # Registrar reconhecimento
                if name != "Desconhecido":
                    self.log_recognition(name)
            
            cv2.imshow('Reconhecimento Facial', frame)
            if cv2.waitKey(1) & 0xFF == ord('q'):
                break
                
        self.camera.release()
        cv2.destroyAllWindows()
        
    def log_recognition(self, name):
        with open('reconhecimentos.txt', 'a') as f:
            f.write(f"{name}, {datetime.now()}\\n")

# Uso do sistema
system = FaceRecognitionSystem()
system.add_person('fotos/pessoa1.jpg', 'João')
system.add_person('fotos/pessoa2.jpg', 'Maria')
system.run_recognition()
        `}</code>
                                    </pre>

                                    <h3 className="text-2xl font-bold text-gray-700 mt-8 mb-3">3. Configurando o Script</h3>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        Antes de executar o script, crie uma pasta chamada `fotos` no mesmo diretório do arquivo `main.py`. Dentro desta pasta, coloque algumas fotos de pessoas que você deseja que o sistema reconheça, nomeando-as como `pessoa1.jpg`, `pessoa2.jpg`, etc.
                                    </p>
                                    <ul className="list-disc list-inside text-lg text-gray-600 leading-relaxed">
                                        <li><b>Pasta `fotos`:</b> Certifique-se de que as fotos estejam em formato JPG e que os caminhos das imagens no código (`system.add_person(...)`) correspondam corretamente aos nomes dos seus arquivos.</li>
                                        <li><b>Nomes das Pessoas:</b> Os nomes que você associa a cada foto no código (`'João'`, `'Maria'`) serão usados para identificar as pessoas durante o reconhecimento facial.</li>
                                        <li><b>Webcam:</b> Certifique-se de que sua webcam esteja conectada e funcionando corretamente,  caso tenha mais de uma webcam conectada, você pode mudar o valor `0` em `cv2.VideoCapture(0)` para `1`, `2`, e assim por diante, para usar a webcam correta.</li>
                                    </ul>

                                    <h3 className="text-2xl font-bold text-gray-700 mt-8 mb-3">4. Executando o Script</h3>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        Abra seu terminal, navegue até o diretório do script e execute o comando:
                                    </p>
                                    <pre className="bg-gray-800 text-white p-6 rounded-xl overflow-x-auto text-sm md:text-base">
                                        <code>
                                            python main.py
                                        </code>
                                    </pre>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        O script iniciará a captura de vídeo da sua webcam e exibirá uma janela com o vídeo em tempo real. As faces detectadas serão marcadas com um retângulo verde, e as pessoas reconhecidas terão seus nomes exibidos acima dos retângulos. Os reconhecimentos serão registrados no arquivo `reconhecimentos.txt`. Para encerrar o script, pressione a tecla `q`.
                                    </p>

                                    <h3 className="text-2xl font-bold text-gray-700 mt-8 mb-3">5. Estrutura do Projeto</h3>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        Para organizar melhor seu projeto, utilize a seguinte estrutura de diretórios:
                                    </p>
                                    <pre className="bg-gray-800 text-white p-6 rounded-xl overflow-x-auto text-sm md:text-base">
                                         <code>{`
projeto/
  ├── main.py
  ├── requirements.txt
  ├── reconhecimentos.txt
  └── fotos/
      ├── pessoa1.jpg
      └── pessoa2.jpg
                                         `}</code>
                                    </pre>
                                    <ul className="list-disc list-inside text-lg text-gray-600 leading-relaxed mt-4">
                                        <li><b>`main.py`:</b> O arquivo principal que contém o código do seu sistema de reconhecimento facial.</li>
                                        <li><b>`requirements.txt`:</b> Um arquivo com as dependências do projeto, que pode ser gerado com o comando `pip freeze {'->'} requirements.txt`.</li>
                                        <li><b>`reconhecimentos.txt`:</b> Um arquivo de texto onde os reconhecimentos faciais serão registrados com data e hora.</li>
                                        <li><b>`fotos/`:</b> Uma pasta onde as fotos das pessoas que o sistema deverá reconhecer estão armazenadas.</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Seção de Funcionalidades */}
                            <div className="border-t pt-10">
                                 <h2 className="text-3xl font-semibold text-gray-700 mb-5 flex items-center space-x-3">
                                    <FaCheckCircle className="text-xl text-green-500" />
                                     <span>O Poder do Reconhecimento Facial: As Funcionalidades do seu Sistema</span>
                                 </h2>
                                <ul className="list-disc list-inside text-lg text-gray-600 leading-relaxed">
                                    <li><b>Detecção de faces em tempo real:</b> O sistema é capaz de identificar e marcar rostos em tempo real,  mesmo em vídeos com múltiplos rostos.</li>
                                    <li><b>Reconhecimento de pessoas cadastradas:</b> O sistema consegue comparar os rostos detectados com os rostos das pessoas cadastradas,  identificando as pessoas que já foram registradas previamente.</li>
                                    <li><b>Registro de reconhecimentos com data e hora:</b> Todas as vezes que uma pessoa é reconhecida, o sistema registra essa informação em um arquivo,  incluindo a data e a hora do reconhecimento.</li>
                                    <li><b>Interface visual com OpenCV:</b> A interface gráfica do sistema exibe a imagem capturada pela webcam em uma janela,  juntamente com os retângulos de detecção e os nomes das pessoas reconhecidas,  proporcionando uma experiência interativa para o usuário.</li>
                                    <li><b>Suporte para múltiplas faces:</b> O sistema pode detectar e reconhecer várias faces simultaneamente no mesmo vídeo,  tornando-o útil para aplicações com mais de uma pessoa presente na cena.</li>
                                </ul>
                            </div>

                           {/* Seção de Boas Práticas e Considerações */}
                            <div className="border-t pt-10">
                                <h2 className="text-3xl font-semibold text-gray-700 mb-5 flex items-center space-x-3">
                                    <FaSortAlphaDown className="text-xl text-blue-500" />
                                    <span>Dicas para um Reconhecimento Facial Eficaz</span>
                                </h2>
                                 <ul className="list-disc list-inside text-lg text-gray-600 leading-relaxed">
                                      <li><b>Qualidade das Fotos:</b> Utilize fotos de alta qualidade e com boa iluminação para cadastrar as pessoas no sistema. Fotos com baixa qualidade ou pouca luz podem dificultar o reconhecimento.</li>
                                     <li><b>Ângulo das Fotos:</b> Utilize fotos com diferentes ângulos de rosto, para que o sistema tenha mais sucesso no reconhecimento.</li>
                                     <li><b>Teste em Diferentes Ambientes:</b> Teste o sistema em diferentes ambientes de iluminação e com diferentes distâncias da câmera, para garantir que ele funcione corretamente em diferentes cenários.</li>
                                    <li><b>Treinamento Contínuo:</b> Considere expandir o sistema para incluir mais fotos das mesmas pessoas,  ou de diferentes pessoas, para treinar o sistema para melhor reconhecimento.</li>
                                     <li><b>Cuidado com a Privacidade:</b> Ao usar um sistema de reconhecimento facial, tenha em mente as questões de privacidade e utilize essa tecnologia de forma responsável. Evite usar o sistema em situações onde a privacidade das pessoas possa ser violada.</li>
                                     <li><b>Documentação:</b> Crie uma documentação clara e concisa sobre como instalar, configurar e usar o sistema. Isso tornará o seu projeto mais acessível a outros desenvolvedores.</li>
                                      <li><b>Código Limpo e Organizado:</b> Mantenha seu código limpo e organizado, para que seja fácil para outros desenvolvedores entenderem e colaborarem em seu projeto. Utilize comentários para explicar o funcionamento das funções e seções do código.</li>
                                      <li><b>Tratamento de Erros:</b> Implemente um tratamento de erros mais robusto para lidar com arquivos corrompidos ou problemas de permissão.  Use blocos `try...except` para capturar exceções e registrar mensagens de erro informativas.</li>
                                      <li><b>Logs:</b> Adicione logs ao seu script para registrar as ações realizadas e facilitar a identificação de problemas.  Use o módulo `logging` para configurar o logging de forma adequada.</li>
                                </ul>
                            </div>

                            {/* Seção de Ações Finais 
                            <div className="flex justify-center space-x-6 mt-12">
                                {/* Link para um repositório GitHub (opcional) 
                                <motion.a
                                    href="https://github.com/seu-usuario/reconhecimento-facial"
                                    className="flex items-center space-x-3 bg-gray-800 text-white px-8 py-4 rounded-xl hover:bg-gray-700 transition-colors duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FaGithub className="text-xl" />
                                    <span className="text-lg font-medium">Ver no GitHub</span>
                                </motion.a>

                                {/* Link para Download do Projeto (opcional) 
                                <motion.a
                                    href="/downloads/reconhecimento-facial.zip"
                                    className="flex items-center space-x-3 bg-purple-600 text-white px-8 py-4 rounded-xl hover:bg-purple-700 transition-colors duration-300"
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