import Layout from '../../components/Layout';
import { motion } from 'framer-motion';
import { FaCalendar, FaClock } from 'react-icons/fa';
import FooterCompartilhamento from '../../components/FooterCompartilhamento';
import Reader from '../../components/Reader';
export default function PortfolioComputacaoNuvem() {
  const isClient = typeof window !== 'undefined';
  const currentUrl = isClient ? window.location.href : '';

  return (
    <Layout>
      <motion.div
        className="container-responsive py-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <article className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            {/* Tags de categorização */}
            <div className="flex flex-wrap justify-center gap-2 mb-4 ignore-reader">
              {["Computação em Nuvem", "Java", "NetBeans", "CloudSim"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Título principal */}
            <h1 className="text-4xl font-bold text-center mb-6 leading-tight">
              Portfólio - Computação em Nuvem com Java, NetBeans e CloudSim
            </h1>

            {/* Informações adicionais */}
            <div className="flex items-center justify-center gap-6 text-gray-600 mb-8 text-sm">
              <div className="flex items-center gap-2 ignore-reader">
                <FaCalendar />
                <span>30 Jul 2024</span>
              </div>
              <div className="flex items-center gap-2 ignore-reader">
                <FaClock />
                <span>5 min de leitura</span>
              </div>
            </div>
            <Reader />
            {/* Corpo do artigo */}
            <div className="prose max-w-none text-justify space-y-6">
              <h2>Introdução</h2>
              <p>
                Olá, Makers! Hoje vamos guiá-los na criação de um portfólio de computação em nuvem utilizando Java JDK 19.0.1, NetBeans 18 e CloudSim 2.1. Este projeto permitirá explorar o potencial das simulações de computação em nuvem, essenciais para quem deseja se especializar nessa área. Vamos começar!
              </p>

              <h2>Passo 1: Preparando o Ambiente</h2>
              <h3>1. Criar uma Pasta para o Java</h3>
              <p>
                Primeiramente, crie uma pasta na unidade C: do seu computador e nomeie-a como "Java" para organizar todos os arquivos necessários para o projeto.
              </p>

              <h3>2. Baixar e Descompactar os Arquivos</h3>
              <p>
                Baixe os seguintes arquivos e descompacte-os na pasta que você criou:
              </p>
              <ul className="list-inside list-disc">
                <li><a href="https://www.oracle.com/java/technologies/javase-jdk19-downloads.html" target="_blank" rel="noopener noreferrer">Java JDK 19.0.1</a></li>
                <li><a href="https://netbeans.apache.org/download/index.html" target="_blank" rel="noopener noreferrer">NetBeans 18</a></li>
                <li><a href="https://github.com/CloudSim-Framework/CloudSim" target="_blank" rel="noopener noreferrer">CloudSim 2.1</a></li>
              </ul>

              <h2>Passo 2: Configurando o NetBeans</h2>
              <h3>3. Configurar o NetBeans para Utilizar o JDK</h3>
              <p>
                No NetBeans, acesse a pasta onde o JDK foi descompactado e copie o caminho completo. Em seguida, localize o arquivo <code>netbeans.conf</code> na pasta etc do NetBeans e adicione o caminho do JDK na linha 77, conforme mostrado abaixo:
              </p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg ignore-reader">
                <code>netbeans_jdkhome="C:\Java\openjdk-19.0.1_windows-x64_bin\jdk-19.0.1"</code>
              </pre>

              <h3>4. Executar o NetBeans</h3>
              <p>
                Abra o NetBeans através do arquivo <code>netbeans.exe</code> na pasta bin do NetBeans e verifique se o Java SE está instalado corretamente.
              </p>

              <h2>Passo 3: Criando o Projeto no NetBeans</h2>
              <h3>5. Criar um Novo Projeto</h3>
              <p>
                No NetBeans, crie um novo projeto clicando em <code>File {'->'} New Project</code>, selecione <code>Java with Ant {'->'} Java Application</code>, e nomeie o projeto como <strong>redes</strong>.
              </p>

              <h3>6. Adicionar Exemplo do CloudSim</h3>
              <p>
                Copie o exemplo do CloudSim para a pasta do seu projeto e renomeie o package para <strong>redes</strong>.
              </p>

              <h3>7. Adicionar a Biblioteca do CloudSim</h3>
              <p>
                No NetBeans, clique com o botão direito em <strong>Libraries</strong> dentro do seu projeto e selecione <code>Add JAR/Folder</code>. Selecione o arquivo <code>cloudsim-2.1.jar</code> da pasta <code>CloudSim/Jars</code> para integrá-lo ao seu projeto.
              </p>

              <h2>Conclusão</h2>
              <p>
                Parabéns! Agora você tem o ambiente configurado para explorar o potencial da computação em nuvem com Java, NetBeans e CloudSim. Seu portfólio está pronto para receber simulações e experimentações.
              </p>

              <h2 className="font-semibold text-xl text-blue-600 mt-12">Vídeo Tutorial</h2>
              <p className="text-lg mb-4 text-gray-700">
                Confira este vídeo no YouTube para uma explicação em vídeo sobre como configurar o ambiente de desenvolvimento para computação em nuvem com Java, NetBeans e CloudSim:
              </p>

              <div className="relative w-full pb-[56.25%] mb-8 rounded-lg shadow-lg overflow-hidden">
  <iframe
    className="absolute top-0 left-0 w-full h-full"
    src="https://www.youtube.com/embed/EkKpgL5DjwI"
    title="Tutorial de Computação em Nuvem"
    frameBorder="0"
    allowFullScreen
  ></iframe>
</div>


            </div>

            {/* Rodapé com informações de compartilhamento */}
            <FooterCompartilhamento currentUrl={currentUrl} />
          </div>
        </article>
      </motion.div>
    </Layout>
  );
}
