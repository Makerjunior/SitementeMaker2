import Layout from '../../components/Layout';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaCalendar, FaClock, FaGithub } from 'react-icons/fa';
import FooterCompartilhamento from '../../components/FooterCompartilhamento';
import Reader from '../../components/Reader';
export default function GitGithubImportancia() {
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

          <div className="p-8 ">
            {/* Tags de categorização (Badges) */}
            <div className="flex flex-wrap justify-center gap-2 mb-6 ignore-reader">
              {["Git", "GitHub", "Desenvolvimento", "Versionamento"].map((tag) => (
                <span
                  key={tag}
                  className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Título Principal */}
            <h1 className=" text-4xl font-extrabold text-center mb-6 leading-tight text-gray-900">
              Por que aprender Git e GitHub?
            </h1>

             {/* Imagem principal */}
            <div className="relative h-[300px] md:h-[400px] mb-8">
              <Image
                src="/images/blog/versionamento.webp?q=80&w=100"
                alt="GitHub e Git"
                fill
                className="object-cover rounded-lg"
              />
            </div>

            {/* Metadados do Artigo */}
            <div className="flex items-center justify-center gap-6 text-gray-600 mb-10 text-sm">
              <div className="flex items-center gap-1 ignore-reader">
                <FaCalendar className="text-gray-500 " />
                <time dateTime="2025-01-21">21 de Janeiro de 2025</time>
              </div>
              <div className="flex items-center gap-1 ignore-reader">
                <FaClock className="text-gray-500" />
                <span>5 minutos de leitura</span>
              </div>
            </div>
            <Reader />
            {/* Corpo do artigo */}
           <div className="prose max-w-none text-gray-800 text-justify">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">O que são Git e GitHub?</h2>
                 <p className="mb-6">
                     No dinâmico mundo do desenvolvimento de software, o Git e o GitHub emergem como ferramentas cruciais para qualquer profissional, seja ele iniciante ou experiente. O Git é um sistema de controle de versão distribuído, que age como um verdadeiro &quot historiador &quot do seu código, registrando cada alteração realizada nos arquivos ao longo do tempo. Imagine o Git como um caderno de anotações detalhado, que permite que você volte a qualquer momento para versões anteriores do seu trabalho, facilitando a correção de erros e a experimentação de novas ideias.
                </p>
                <p className="mb-6">
                   Por outro lado, o GitHub é uma plataforma de hospedagem de código que utiliza o Git. Pense no GitHub como uma "biblioteca" online para o seu código, onde você pode armazenar seus projetos, colaborar com outros desenvolvedores, e construir um portfólio profissional. Juntas, essas ferramentas formam um ecossistema que permite aos desenvolvedores trabalharem de forma colaborativa, gerenciar projetos complexos e construir aplicações de forma eficiente.
               </p>

                <h2 className="text-2xl font-semibold mb-4 text-gray-900">Por que aprender Git?</h2>

                <h3 className="text-xl font-semibold mb-2 text-gray-900">1. Controle de Versão Detalhado</h3>
                <p className="mb-4">
                     O Git permite que você não apenas rastreie as mudanças no seu código, mas também organize essas mudanças de maneira lógica. Cada mudança que você faz é armazenada como um &quotcommit", que inclui uma mensagem descritiva. Isso permite que você tenha um histórico completo do seu projeto, tornando mais fácil entender como o código evoluiu ao longo do tempo. O controle de versão do Git também permite que você crie "branches" (ramificações) do seu projeto, que funcionam como linhas de trabalho paralelas, permitindo que você trabalhe em novas funcionalidades ou correções de bugs sem afetar a versão principal.
                  </p>
                  <ul className="list-inside list-disc mb-6">
                    <li>Rastreamento de Alterações: Cada alteração é registrada, permitindo que você veja quem fez o quê e quando.</li>
                     <li>Reversão Fácil: Reverter mudanças se torna simples e seguro, evitando que erros se espalhem pelo projeto.</li>
                     <li>Trabalho em Paralelo: Branches permitem que várias funcionalidades sejam desenvolvidas simultaneamente.</li>
                     <li>Sincronização: Mesmo trabalhando offline, é possível sincronizar as mudanças assim que a conexão for restabelecida.</li>
                   </ul>

                <h3 className="text-xl font-semibold mb-2 text-gray-900">2. Colaboração Eficiente e Segura</h3>
                <p className="mb-4">
                    O Git não só organiza o seu trabalho individual, mas também facilita a colaboração em equipe. Ao usar o Git, os desenvolvedores podem trabalhar em diferentes partes do projeto ao mesmo tempo, sem se preocupar com a sobreposição de código. Usando o Git você pode criar branches para cada funcionalidade, e depois mesclá-los quando estiverem prontos. Além disso, o Git permite que outros desenvolvedores revisem e validem as alterações no seu código antes que elas sejam adicionadas à versão principal.
                  </p>
                 <ul className="list-inside list-disc mb-6">
                    <li>Branches: Permitem que diferentes desenvolvedores trabalhem em diferentes funcionalidades simultaneamente.</li>
                     <li>Merging: Facilita a combinação de diferentes contribuições no código principal.</li>
                     <li>Pull Requests: Permitem que outros desenvolvedores revisem seu código antes de ser integrado, evitando erros e garantindo a qualidade.</li>
                     <li>Prevenção de Conflitos: Evita a sobreposição de código e mantém o projeto organizado.</li>
                  </ul>

                 <h2 className="text-2xl font-semibold mb-4 text-gray-900">O Papel do GitHub no Desenvolvimento</h2>

                 <h3 className="text-xl font-semibold mb-2 text-gray-900">1. Portfólio Profissional e Visibilidade</h3>
                 <p className="mb-4">
                    O GitHub vai além de ser apenas um local para hospedar seu código; ele é, na verdade, uma plataforma de portfólio profissional. Ao exibir seus projetos no GitHub, você demonstra suas habilidades e práticas de programação para recrutadores e empregadores, que podem analisar o código, ver a organização dos seus projetos e avaliar sua experiência. Isso te permite construir uma identidade como desenvolvedor e criar uma reputação dentro da comunidade de desenvolvimento.
                   </p>
                  <ul className="list-inside list-disc mb-6">
                      <li>Portfólio Acessível: Mostre seus projetos para o mundo, destacando suas habilidades.</li>
                      <li>Compartilhamento Open Source: Contribua para projetos de código aberto e ganhe experiência.</li>
                      <li>Comunidade: Interaja com outros desenvolvedores, peça feedback e melhore seu código.</li>
                       <li>Reputação: Desenvolva uma marca pessoal na área de desenvolvimento.</li>
                   </ul>


                   <h3 className="text-xl font-semibold mb-2 text-gray-900">2. Colaboração Global e Aprendizado Contínuo</h3>
                 <p className="mb-4">
                    O GitHub não é apenas para mostrar o seu trabalho; ele é também uma plataforma de colaboração em escala global. Por meio de pull requests, você pode sugerir melhorias em projetos de código aberto, participar de iniciativas e aprender com outros desenvolvedores. Essa interação permite que você cresça não apenas como desenvolvedor, mas também como parte de uma comunidade que cria soluções para problemas globais, trocando conhecimento e experiências.
                   </p>
                    <ul className="list-inside list-disc mb-6">
                        <li>Colaboração: Trabalhe com outros desenvolvedores em projetos reais.</li>
                         <li>Pull Requests: Faça sugestões de melhoria em projetos existentes.</li>
                         <li>Aprendizado: Aprenda com a experiência de desenvolvedores de todo o mundo.</li>
                         <li>Networking: Construa uma rede de contatos dentro da comunidade de desenvolvimento.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mb-4 text-gray-900">Comandos Essenciais do Git</h2>
                    <p className="mb-4">
                        Para usar o Git de forma eficiente, é fundamental conhecer alguns comandos básicos. Aqui estão os principais que você deve dominar:
                     </p>
                      <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                        <code className="whitespace-pre ignore-reader">
                          {`
  # Inicializando um repositório Git em um diretório existente
  git init

  # Adicionando os arquivos do projeto para o stage
  git add .

  # Criando um commit com uma mensagem descritiva
  git commit -m "Mensagem do commit que descreve a alteração"

  # Enviando as alterações para o repositório remoto no GitHub
  git push origin main

  # Atualizando seu repositório local com as mudanças do GitHub
  git pull origin main

  # Criando uma nova branch para trabalhar em uma nova funcionalidade
  git branch nome-da-branch

  # Mudando para outro branch que foi criado
  git checkout nome-da-branch

  # Mesclando as alterações do branch para o branch principal (main)
  git merge nome-da-branch
                         `}
                    </code>
                     </pre>

                      <h2 className="text-2xl font-semibold mb-4 text-gray-900">Boas Práticas ao Usar Git e GitHub</h2>
                      <p className="mb-4">
                            Para garantir um fluxo de trabalho eficiente e colaborativo, é importante seguir algumas boas práticas ao utilizar Git e GitHub:
                      </p>
                         <ul className="list-inside list-disc mb-6">
                           <li>Commits Pequenos e Frequentes: Faça commits pequenos que representem uma única alteração lógica, com mensagens claras e descritivas sobre a mudança.</li>
                           <li>Branches para Funcionalidades: Crie um branch para cada nova funcionalidade ou correção de bug, e só mescle o branch quando a alteração estiver completa.</li>
                           <li>Evite Commits Diretos na Main: Não faça commits diretamente na branch principal (main). Use branches para gerenciar as alterações, sempre.</li>
                           <li>Documente seu Código: Adicione comentários no seu código e documente seus projetos no GitHub com um arquivo README para ajudar outros desenvolvedores a entenderem.</li>
                           <li>Use Tags para Versões: Use tags para marcar versões importantes do seu código, facilitando o controle de versões.</li>
                       </ul>

                        <h2 className='bg-blue-300 font-semibold p-4 rounded-md mb-4 text-gray-900'>Curso de Git e Github</h2>
                         <div className="relative w-full mb-6" style={{ paddingTop: "56.25%" }}>
                            <iframe
                                 className="absolute top-0 left-0 w-full h-full rounded-lg"
                                 src="https://www.youtube.com/embed/cWdD1hrh_to"
                                 title="Curso Completo de Git e GitHub"
                                 frameBorder="0"
                                 allowFullScreen
                             ></iframe>
                        </div>

                      <h2 className="text-2xl font-semibold mb-4 text-gray-900">Conclusão</h2>
                      <p className="mb-4">
                        Git e GitHub são ferramentas essenciais para qualquer profissional de desenvolvimento de software. Elas não apenas melhoram a eficiência do controle de versões, mas também promovem a colaboração e a contribuição em projetos de código aberto. Ao dominar o Git e o GitHub, você estará melhor preparado para enfrentar os desafios do desenvolvimento em equipe e para construir sua carreira na área da tecnologia.
                      </p>
                    <p>
                      Portanto, se você ainda não utiliza essas ferramentas, dedique um tempo para aprender e praticar, pois este conhecimento é uma das habilidades mais valiosas para se destacar no mercado de trabalho. Invista em seu aprendizado e comece a utilizar o Git e o GitHub em todos os seus projetos!
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