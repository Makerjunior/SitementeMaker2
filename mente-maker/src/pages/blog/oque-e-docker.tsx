import Layout from '../../components/Layout';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaCalendar, FaClock } from 'react-icons/fa';
import FooterCompartilhamento from '../../components/FooterCompartilhamento';
import Link from 'next/link';
import Reader from '../../components/Reader';
export default function OQueEDocker() {
  const isClient = typeof window !== 'undefined';
  const currentUrl = isClient ? window.location.href : '';

  return (
    <Layout>
      <motion.main
        className="container-responsive py-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <article className="bg-white rounded-lg shadow-xl overflow-hidden max-w-4xl mx-auto">
          <div className="p-8">
            {/* Tags de categorização (Badges) */}
            <div className="flex flex-wrap justify-center gap-2 mb-6 ignore-reader">
              {["Docker", "DevOps", "Tecnologia", "Carreira"].map((tag) => (
                <span
                  key={tag}
                  className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            {/* Título principal */}
            <h1 className="text-4xl font-extrabold text-center mb-6 leading-tight text-gray-900">
              O que é Docker e por que ele é essencial para sua carreira?
            </h1>

            {/* Imagem principal */}
           <div className="relative h-[300px] md:h-[400px] mb-8 flex items-center justify-center">
           <Image
              src="/images/blog/docker.jpg"
              alt="Introdução ao Docker"
              layout="intrinsic"
              width={600}
              height={400}
              className="object-contain rounded-lg"
              />
            </div>
              <Reader />
            {/* Metadados do Artigo */}
            <div className="flex items-center justify-center gap-6 text-gray-600 mb-10 text-sm">
              <div className="flex items-center gap-1 ignore-reader">
                <FaCalendar className="text-gray-500"/>
                <time dateTime="2024-06-21">21 de Junho de 2024</time>
              </div>
              <div className="flex items-center gap-1 ignore-reader">
                <FaClock className="text-gray-500"/>
                <span>10 minutos de leitura</span>
              </div>
            </div>

            {/* Corpo do artigo */}
            <div className="prose max-w-none text-gray-800 text-justify">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Introdução</h2>
               <p className="mb-6">
                 No mundo da tecnologia, a eficiência e a portabilidade são cada vez mais valorizadas. É nesse cenário que o <strong>Docker</strong> surge como uma solução indispensável, revolucionando a forma como as aplicações são desenvolvidas, testadas e implantadas. O Docker é uma plataforma de código aberto que automatiza a implantação de aplicações dentro de contêineres de software, oferecendo uma maneira leve e portátil de empacotar, distribuir e gerenciar aplicações e seus ambientes de execução.
               </p>

              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Por que aprender Docker é importante?</h2>
              <p className="mb-4">
                   No mercado de trabalho atual, empresas de todos os tamanhos estão adotando o Docker para otimizar seus fluxos de trabalho e garantir a consistência entre os ambientes de desenvolvimento, teste e produção. Aprender Docker, portanto, pode:
                </p>
              <ul className="list-inside list-disc mb-6">
                  <li>
                       <span className="font-semibold">Aumentar sua empregabilidade:</span> Docker é amplamente utilizado em diversas indústrias, tornando-se uma habilidade essencial para profissionais de TI.
                  </li>
                  <li>
                        <span className="font-semibold">Facilitar o aprendizado de DevOps:</span> Ele é um dos pilares das práticas modernas de DevOps, ajudando a integrar desenvolvimento e operações.
                  </li>
                  <li>
                      <span className="font-semibold">Permitir inovação:</span> O Docker acelera a criação e o teste de novas soluções, permitindo prototipagem rápida.
                   </li>
               </ul>

              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Principais Conceitos do Docker</h2>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">1. Contêineres: A Essência do Docker</h3>
              <p className="mb-4">
                   Contêineres são unidades padronizadas de software que empacotam código e todas as suas dependências, como bibliotecas, frameworks e outras ferramentas necessárias para que a aplicação funcione corretamente. Essa padronização garante que a aplicação funcione de maneira consistente em qualquer ambiente, desde seu computador de desenvolvimento até o servidor de produção.
                 </p>

               <h3 className="text-xl font-semibold mb-2 text-gray-900">2. Imagens: O Modelo dos Contêineres</h3>
               <p className="mb-4">
                  Imagens são templates imutáveis usados para criar contêineres. Elas são como um "molde" que contém todas as instruções necessárias para criar um contêiner. As imagens são criadas a partir de um arquivo chamado Dockerfile, que contém instruções para configurar o ambiente, instalar as dependências e copiar o código da aplicação.
                 </p>

              <h3 className="text-xl font-semibold mb-2 text-gray-900">3. Dockerfile: A Receita do Contêiner</h3>
               <p className="mb-4">
                    Um Dockerfile é um script utilizado para construir uma imagem Docker, especificando o sistema operacional base, as dependências e as configurações necessárias para que a aplicação funcione corretamente. Este arquivo é essencial para garantir que todos os contêineres da mesma imagem sejam idênticos, promovendo a consistência em todos os ambientes.
                  </p>

                <h3 className="text-xl font-semibold mb-2 text-gray-900">4. Docker Hub: O Compartilhamento de Imagens</h3>
               <p className="mb-6">
                 O Docker Hub é um repositório online para compartilhar e armazenar imagens Docker, permitindo que desenvolvedores de todo o mundo colaborem, compartilhem e reutilizem imagens. Isso facilita muito o trabalho em equipe, além de promover um ecossistema de aplicações e ferramentas compartilhadas.
               </p>

              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Benefícios do Docker: Transformando o Desenvolvimento e Implantação</h2>
               <ul className="list-inside list-disc mb-6">
                  <li>
                        <span className="font-semibold">Portabilidade:</span> Aplicações containerizadas podem ser executadas em qualquer lugar, seja em seu computador pessoal, em servidores na nuvem ou em outros ambientes.
                    </li>
                  <li>
                        <span className="font-semibold">Eficiência:</span> Contêineres consomem menos recursos do que máquinas virtuais, o que otimiza o uso da capacidade de processamento.
                  </li>
                    <li>
                      <span className="font-semibold">Isolamento:</span> Contêineres garantem que as configurações de uma aplicação não interfiram em outra, aumentando a segurança e estabilidade.
                  </li>
                  <li>
                       <span className="font-semibold">Escalabilidade:</span> Facilita a replicação de contêineres para atender a maior demanda, adaptando seu projeto conforme a demanda.
                    </li>
                 <li>
                        <span className="font-semibold">Consistência:</span> Ambientes de execução consistentes em todas as etapas do desenvolvimento, garantindo que sua aplicação funcione de forma semelhante em qualquer ambiente.
                    </li>
               </ul>

               <h2 className="text-2xl font-semibold mb-4 text-gray-900">Como Começar com Docker: Seus Primeiros Passos</h2>
               <p className="mb-4">
                   Para começar a usar Docker, siga os passos abaixo:
                </p>

              <h3 className="text-xl font-semibold mb-2 text-gray-900">1. Instalação do Docker: Preparando o Ambiente</h3>
                 <p className="mb-4">
                    O primeiro passo é instalar o Docker em seu sistema operacional. O Docker está disponível para <Link href="https://www.docker.com/products/docker-desktop/" target="_blank" rel="noopener noreferrer"  className="text-blue-500 hover:underline">Windows</Link>, <Link href="https://docs.docker.com/desktop/install/mac/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">macOS</Link> e <Link href="https://docs.docker.com/engine/install/ubuntu/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Linux</Link>, com instruções detalhadas para cada sistema no site oficial.
                 </p>

                <h3 className="text-xl font-semibold mb-2 text-gray-900">2. Criar um Dockerfile: Definindo a Construção da Sua Imagem</h3>
                <p className="mb-4">
                    O próximo passo é criar um Dockerfile, que será utilizado para construir sua imagem Docker. Veja um exemplo de Dockerfile para uma aplicação Python:
                   </p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-6 ignore-reader">
                <code className="whitespace-pre">
                {`
  # Use uma imagem base do Python
  FROM python:3.8-slim

  # Defina o diretório de trabalho no contêiner
  WORKDIR /app

  # Copie os arquivos da aplicação para o diretório de trabalho
  COPY . /app

  # Instale as dependências da aplicação
  RUN pip install -r requirements.txt

  # Comando para rodar a aplicação
  CMD ["python", "app.py"]
                `}
                </code>
             </pre>
                   <p className="mb-4">
                       Neste exemplo, a primeira linha especifica a imagem base que será utilizada, uma versão "slim" do Python. O `WORKDIR` define o diretório dentro do contêiner onde os arquivos serão copiados. O `COPY` copia os arquivos da sua aplicação para o contêiner. O `RUN` instala as dependências necessárias usando o `pip`, e o `CMD` define o comando para iniciar a aplicação.
                    </p>

             <h3 className="text-xl font-semibold mb-2 text-gray-900">3. Construir e Executar um Contêiner: Colocando a Mão na Massa</h3>
             <p className="mb-4">
                  Com o Dockerfile criado, você pode usar os seguintes comandos para construir a imagem e executar um contêiner:
               </p>
               <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-6 ignore-reader">
                   <code className="whitespace-pre">
                      {`
   # Construir a imagem Docker
   docker build -t my-python-app .

   # Executar um contêiner
   docker run -d -p 5000:5000 my-python-app
                      `}
                    </code>
                </pre>
                <p className="mb-6">
                  O comando `docker build` cria uma imagem a partir do Dockerfile, com o nome "my-python-app". O comando `docker run` executa a imagem em um contêiner, mapeando a porta 5000 do contêiner para a porta 5000 do seu computador.
                </p>

              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Conclusão: Docker é o Futuro do Desenvolvimento de Software</h2>
              <p className="mb-4">
                  Docker é uma ferramenta indispensável para o desenvolvimento e a implantação de aplicações modernas. Ele oferece portabilidade, eficiência, consistência e escalabilidade, transformando a forma como os desenvolvedores trabalham.
              </p>
               <p>
                    Aprender Docker não apenas abrirá novas portas no mercado de trabalho, mas também te fornecerá uma base sólida para explorar outras tecnologias em DevOps e desenvolvimento ágil. Invista em seu conhecimento e você estará preparado para os desafios do mercado de trabalho!
              </p>
            </div>

            {/* Rodapé com informações do autor */}
            <FooterCompartilhamento currentUrl={currentUrl} />
          </div>
        </article>
      </motion.main>
    </Layout>
  );
}