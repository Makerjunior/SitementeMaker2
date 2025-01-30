import Layout from '../../components/Layout';
import { motion } from 'framer-motion';
import { FaJs, FaStickyNote, FaReact, FaFire, FaCode, FaExclamationTriangle, FaCheckCircle, FaUsers, FaLock, FaHistory, FaCss3, FaRoute, FaCloud } from 'react-icons/fa';
import  Reader  from '../../components/Reader';
export default function NotasTempoReal() {
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
            <FaStickyNote className="text-5xl text-yellow-500" />
            <h1 className="text-5xl font-extrabold leading-tight text-gray-800">
              Construa um App de Notas Colaborativo e Dinâmico com React e Firebase!
            </h1>
          </div>
          <Reader />
          {/* Card Principal com Descrição Detalhada */}
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
            <div className="p-12">

              {/* Seção Sobre o Projeto */}
              <div className="mb-10">
                <h2 className="text-3xl font-semibold text-gray-700 mb-5 flex items-center space-x-3">
                  <div className="text-xl text-blue-500" />
                  <span>Descobrindo o Projeto: App de Notas em Tempo Real</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Prepare-se para uma experiência de desenvolvimento enriquecedora! Este projeto detalhado guiará você na criação de um aplicativo de notas colaborativo e responsivo, aproveitando o poder das tecnologias web modernas: React para a interface, Firebase para o backend em tempo real e Tailwind CSS para estilização eficiente. Imagine um ambiente onde múltiplos usuários podem editar notas simultaneamente, com as alterações refletidas instantaneamente para todos os participantes. Este é o poder da colaboração em tempo real, e você está prestes a dominá-lo!
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mt-4">
                  Este projeto é uma excelente oportunidade para:
                </p>
                <ul className="list-disc list-inside text-lg text-gray-600 leading-relaxed mt-4">
                  <li><b>Aprimorar suas habilidades em React:</b> Domine os conceitos de componentes, JSX, hooks e gerenciamento de estado.</li>
                  <li><b>Explorar o Firebase:</b> Aprenda a usar o Realtime Database e o Authentication para construir um backend sem servidor.</li>
                  <li><b>Dominar o Tailwind CSS:</b> Estilize seu aplicativo de forma rápida e eficiente com um framework CSS utilitário.</li>
                  <li><b>Entender a colaboração em tempo real:</b> Descubra como criar aplicativos que respondem instantaneamente às interações dos usuários.</li>
                  <li><b>Construir um portfólio impressionante:</b> Adicione um projeto completo e funcional ao seu portfólio de desenvolvedor.</li>
                </ul>
                <p className="text-lg text-gray-600 leading-relaxed mt-4">
                  Ao completar este guia, você terá não apenas um aplicativo funcional, mas também um profundo entendimento das tecnologias e conceitos envolvidos.
                </p>
              </div>

              {/* Seção de Tecnologias e Recursos */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {/* Tecnologias Utilizadas */}
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-700 mb-4 flex items-center space-x-2">
                    <FaCode className="text-lg text-green-500" />
                    <span>O Arsenal do Desenvolvedor Web Moderno</span>
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 text-lg leading-relaxed">
                    <li><FaReact className="inline-block mr-1 text-blue-500" /> <b>React:</b>  React é uma biblioteca JavaScript de código aberto mantida pelo Facebook e uma grande comunidade. É usada para construir interfaces de usuário (UI) de forma declarativa e baseada em componentes. Ao invés de manipular o DOM diretamente, React usa um DOM virtual para otimizar as atualizações e melhorar o desempenho.  React é ideal para construir SPAs (Single Page Applications) e interfaces complexas.</li>
                    <li><FaFire className="inline-block mr-1 text-red-500" /> <b>Firebase Realtime Database:</b> Firebase Realtime Database é um banco de dados NoSQL hospedado na nuvem que permite armazenar e sincronizar dados em tempo real entre diferentes clientes. Ele usa uma estrutura de dados em formato JSON e oferece APIs para leitura e escrita de dados em tempo real.  É perfeito para aplicativos colaborativos, jogos multiplayer e qualquer aplicação que precise de atualizações instantâneas.</li>
                    <li><FaFire className="inline-block mr-1 text-red-500" /> <b>Firebase Auth:</b> Firebase Authentication oferece um conjunto completo de ferramentas para autenticar usuários em seu aplicativo. Ele suporta diversos métodos de autenticação, incluindo e-mail/senha, redes sociais (Google, Facebook, Twitter, etc.) e autenticação por telefone.  É fácil de integrar e oferece recursos de segurança robustos.</li>
                    <li><FaJs className="inline-block mr-1 text-yellow-500" /> <b>JavaScript:</b>  JavaScript é a linguagem de programação da web. É usada para adicionar interatividade, dinamismo e lógica ao lado do cliente (front-end).  React é construído sobre JavaScript, então um bom conhecimento de JavaScript é essencial para o desenvolvimento React.</li>
                    <li><FaCss3 className="inline-block mr-1 text-blue-400" /> <b>Tailwind CSS:</b> Tailwind CSS é um framework CSS utilitário que permite estilizar seu aplicativo de forma rápida e eficiente. Ao invés de escrever CSS personalizado, você usa classes utilitárias predefinidas para definir estilos como margem, padding, cores, fontes, etc.  Tailwind CSS promove a consistência e a reutilização de estilos, acelerando o processo de desenvolvimento.</li>
                    <li><FaRoute className="inline-block mr-1 text-gray-700" /> <b>React Router:</b> React Router é uma biblioteca para adicionar navegação ao seu aplicativo React. Ele permite definir rotas para diferentes páginas ou visualizações e navegar entre elas usando links ou botões.  É essencial para construir SPAs com múltiplas visualizações.</li>
                  </ul>
                  <p className="text-sm text-gray-500 mt-2">
                    Cada uma dessas tecnologias desempenha um papel crucial na construção deste aplicativo, contribuindo para a sua funcionalidade, desempenho e experiência do usuário.
                  </p>
                </div>

                {/* Recursos */}
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-700 mb-4 flex items-center space-x-2">
                    <FaCheckCircle className="text-lg text-teal-500" />
                    <span>Funcionalidades Essenciais para a Colaboração</span>
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 text-lg leading-relaxed">
                    <li><FaUsers className="inline-block mr-1 text-purple-500" /> <b>Edição Colaborativa em Tempo Real:</b> O principal diferencial deste aplicativo é a capacidade de vários usuários editarem a mesma nota simultaneamente. As alterações são sincronizadas instantaneamente para todos os usuários conectados, criando uma experiência de colaboração fluida e intuitiva. Isso é alcançado através da utilização do Firebase Realtime Database, que permite a comunicação em tempo real entre o servidor e os clientes.</li>
                    <li><FaLock className="inline-block mr-1 text-orange-500" /> <b>Autenticação Segura de Usuários:</b> Para garantir a segurança e a privacidade dos dados, o aplicativo requer que os usuários se autentiquem antes de acessar e editar as notas. O Firebase Authentication oferece um sistema de autenticação robusto e fácil de integrar, suportando diversos métodos de login (e-mail/senha, redes sociais, etc.).  A autenticação garante que apenas usuários autorizados tenham acesso às notas.</li>
                    <li><FaStickyNote className="inline-block mr-1 text-yellow-500" /> <b>Compartilhamento Seletivo de Notas:</b> Além da edição colaborativa, o aplicativo permite que os usuários compartilhem notas específicas com outros usuários. Isso facilita a colaboração em projetos específicos e garante que apenas as pessoas autorizadas tenham acesso a determinadas informações. (Este é um recurso que você pode adicionar como um desafio extra!).</li>
                    <li><FaCode className="inline-block mr-1 text-gray-500" /> <b>Formatação Rica de Texto:</b> Para tornar as notas mais expressivas e organizadas, o aplicativo suporta formatação rica de texto. Os usuários podem adicionar negrito, itálico, listas, títulos e outros estilos para formatar o texto de suas notas. Você pode implementar isso com um editor WYSIWYG (What You See Is What You Get) ou usando Markdown. (Este é um recurso que você pode adicionar como um desafio extra!).</li>
                    <li><FaHistory className="inline-block mr-1 text-blue-500" /> <b>Histórico Detalhado de Alterações:</b> Para rastrear as edições e facilitar a reversão de alterações indesejadas, o aplicativo mantém um histórico detalhado de todas as modificações feitas nas notas. Os usuários podem visualizar o histórico de cada nota e reverter para versões anteriores, se necessário. (Este é um recurso que você pode adicionar como um desafio extra!).</li>
                  </ul>
                  <p className="text-sm text-gray-500 mt-2">
                    Esses recursos combinados criam uma experiência de usuário rica e eficiente para a criação, organização e colaboração em notas.
                  </p>
                </div>
              </div>

              {/* Seção de Implementação */}
              <div className="border-t pt-10">
                <h2 className="text-3xl font-semibold text-gray-700 mb-5 flex items-center space-x-3">
                  <FaCode className="text-xl text-purple-500" />
                  <span>Construindo o Aplicativo: Um Guia Prático e Detalhado</span>
                </h2>
                <div className="prose max-w-none">

                  <h3 className="text-2xl font-bold text-gray-700 mt-8 mb-3">1. Preparando o Ambiente: Configuração Inicial do Projeto React</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    O primeiro passo é criar um novo projeto React usando o Create React App. Esta ferramenta facilita a configuração inicial de um projeto React, fornecendo uma estrutura básica e as dependências necessárias:
                  </p>
                  <pre className="bg-gray-800 text-white p-6 rounded-xl overflow-x-auto text-sm md:text-base">
                    <code>
                      npx create-react-app notas-app
                    </code>
                  </pre>
                  <p className="text-lg text-gray-600 leading-relaxed mt-2">
                    Em seguida, navegue até o diretório do projeto recém-criado:
                  </p>
                  <pre className="bg-gray-800 text-white p-6 rounded-xl overflow-x-auto text-sm md:text-base">
                    <code>
                      cd notas-app
                    </code>
                  </pre>
                  <p className="text-lg text-gray-600 leading-relaxed mt-2">
                    Agora, instale as dependências necessárias para o projeto: Firebase (para o backend), React Router (para a navegação) e Tailwind CSS (para a estilização):
                  </p>
                  <pre className="bg-gray-800 text-white p-6 rounded-xl overflow-x-auto text-sm md:text-base">
                    <code>
                      npm install firebase react-router-dom @tailwindcss/typography
                      npm install -D tailwindcss postcss autoprefixer  // Instalando o tailwindCSS
                      npx tailwindcss init -p  // Inicializando o tailwindCSS
                    </code>
                  </pre>

                  <h3 className="text-2xl font-bold text-gray-700 mt-8 mb-3">2. Integrando o TailwindCSS:</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    No arquivo `tailwind.config.js` adicione:
                  </p>
                   <pre className="bg-gray-800 text-white p-6 rounded-xl overflow-x-auto text-sm md:text-base">
                    <code>{`
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
                    `}</code>
                  </pre>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    No arquivo `index.css` adicione:
                  </p>
                   <pre className="bg-gray-800 text-white p-6 rounded-xl overflow-x-auto text-sm md:text-base">
                    <code>{`
@tailwind base;
@tailwind components;
@tailwind utilities;
                    `}</code>
                  </pre>

                  <h3 className="text-2xl font-bold text-gray-700 mt-8 mb-3">3. Criando a Interface: Componente Principal `NotesApp`</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    O componente principal do aplicativo, `NotesApp`, será responsável por exibir a lista de notas, permitir a criação de novas notas e gerenciar a interação do usuário com o Firebase Realtime Database. Crie ou edite o arquivo `src/App.js` (ou `src/components/NotesApp.js`, se você preferir organizar seus componentes em uma pasta separada) com o seguinte código:
                  </p>
                  <pre className="bg-gray-800 text-white p-6 rounded-xl overflow-x-auto text-sm md:text-base">
                    <code>{`
import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { 
  getDatabase, 
  ref, 
  onValue, 
  set 
} from 'firebase/database';

const firebaseConfig = {
  apiKey: "SUA_API_KEY",  // Substitua
  authDomain: "SEU_PROJETO.firebaseapp.com", // Substitua
  databaseURL: "https://SEU_PROJETO.firebaseio.com", // Substitua
  projectId: "SEU_PROJETO", // Substitua
  storageBucket: "SEU_PROJETO.appspot.com", // Substitua
  messagingSenderId: "SEU_SENDER_ID", // Substitua
  appId: "SEU_APP_ID" // Substitua
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function NotesApp() {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState('');
  
  useEffect(() => {
    const notesRef = ref(db, 'notes');
    onValue(notesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const notesList = Object.entries(data).map(([id, note]) => ({
          id,
          ...note
        }));
        setNotes(notesList);
      }
    });
  }, []);
  
  const saveNote = () => {
    const newNoteRef = ref(db, 'notes/' + Date.now());
    set(newNoteRef, {
      content: currentNote,
      timestamp: Date.now(),
      author: 'Usuário Atual' //TODO: Pegar o usuário logado
    });
    setCurrentNote('');
  };
  
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="mb-4">
        <textarea
          value={currentNote}
          onChange={(e) => setCurrentNote(e.target.value)}
          className="w-full p-2 border rounded"
          rows={4}
          placeholder="Digite sua nota..."
        />
        <button
          onClick={saveNote}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Salvar Nota
        </button>
      </div>
      
      <div className="space-y-4">
        {notes.map((note) => (
          <div 
            key={note.id}
            className="p-4 bg-white shadow rounded"
          >
            <p>{note.content}</p>
            <div className="text-sm text-gray-500 mt-2">
              {new Date(note.timestamp).toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotesApp;
                    `}</code>
                  </pre>
                  <p className="text-lg text-gray-600 leading-relaxed mt-2">
                    Lembre-se: Substitua os placeholders `SUA_API_KEY`, `SEU_PROJETO.firebaseapp.com`, etc., pelas suas credenciais do Firebase. Você obterá essas credenciais ao criar um projeto no Firebase Console (veja o próximo passo).
                  </p>

                  <h3 className="text-2xl font-bold text-gray-700 mt-8 mb-3">4. Conectando ao Firebase: Inicializando e Exportando Conexões</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Para interagir com o Firebase, você precisa inicializar o SDK do Firebase e obter referências para o Realtime Database e o Authentication. Crie um arquivo `firebase.js` (ou similar) para centralizar essa configuração:
                  </p>
                  <pre className="bg-gray-800 text-white p-6 rounded-xl overflow-x-auto text-sm md:text-base">
                    <code>{`
// firebase.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "SUA_API_KEY",  // Substitua
  authDomain: "SEU_PROJETO.firebaseapp.com", // Substitua
  databaseURL: "https://SEU_PROJETO.firebaseio.com", // Substitua
  projectId: "SEU_PROJETO", // Substitua
  storageBucket: "SEU_PROJETO.appspot.com", // Substitua
  messagingSenderId: "SEU_SENDER_ID", // Substitua
  appId: "SEU_APP_ID" // Substitua
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
                    `}</code>
                  </pre>
                  <p className="text-lg text-gray-600 leading-relaxed mt-2">
                    Certifique-se de substituir os placeholders pelas suas credenciais do Firebase. Este arquivo será responsável por inicializar o Firebase e exportar as instâncias do banco de dados e do serviço de autenticação para outros componentes do seu aplicativo.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-700 mt-8 mb-3">5. Expandindo as Funcionalidades: Próximos Passos e Desafios</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Com o aplicativo básico funcionando, você pode explorar as seguintes funcionalidades avançadas:
                  </p>
                  <ul className="list-disc list-inside text-lg text-gray-600 leading-relaxed">
                    <li><b>Implementar Autenticação de Usuários:</b>  Adicione um sistema de login e registro para permitir que os usuários criem suas próprias contas e acessem suas notas de forma segura.</li>
                    <li><b>Adicionar Compartilhamento de Notas:</b>  Permita que os usuários compartilhem notas específicas com outros usuários, facilitando a colaboração em projetos específicos.</li>
                    <li><b>Integrar um Editor de Texto Rico:</b>  Melhore a experiência de edição de notas integrando um editor de texto rico, como Draft.js ou Quill.js, que permite aos usuários formatar o texto com negrito, itálico, listas e outros estilos.</li>
                    <li><b>Implementar um Histórico de Alterações:</b>  Rastreie todas as modificações feitas nas notas e permita que os usuários revertam para versões anteriores, se necessário.</li>
                    <li><b>Adicionar Categorização de Notas:</b>  Permita que os usuários organizem suas notas em categorias ou pastas, facilitando a organização e a recuperação de informações.</li>
                  </ul>
                  <p className="text-lg text-gray-600 leading-relaxed mt-2">
                    Cada uma dessas funcionalidades adicionais representa um desafio de desenvolvimento interessante e contribuirá para tornar seu aplicativo ainda mais completo e útil.
                  </p>
                  <h3 className="text-2xl font-bold text-gray-700 mt-8 mb-3">6. Hospedando o Projeto:</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Para que outras pessoas consigam acessar seu projeto, você precisa fazer o deploy dele para algum serviço de hospedagem, como:
                    </p>
                     <ul className="list-disc list-inside text-lg text-gray-600 leading-relaxed">
                        <li><FaCloud className="inline-block mr-1 text-blue-500" /> <b>Netlify:</b>  Serviço de hospedagem de sites estáticos e SPAs.</li>
                        <li><FaCloud className="inline-block mr-1 text-blue-500" /> <b>Vercel:</b>  Serviço de hospedagem de sites estáticos e SPAs.</li>
                        <li><FaCloud className="inline-block mr-1 text-blue-500" /> <b>Firebase Hosting:</b>  Serviço de hospedagem do Firebase.</li>
                    </ul>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Cada um desses serviços possui sua própria documentação sobre como fazer o deploy de um projeto React.
                    </p>
                </div>
              </div>

              {/* Seção de Ações Finais 
              <div className="flex justify-center space-x-6 mt-12">
                {/* Link para um repositório GitHub (opcional) 
                <motion.a
                  href="https://github.com/seu-usuario/notas-tempo-real"
                  className="flex items-center space-x-3 bg-gray-800 text-white px-8 py-4 rounded-xl hover:bg-gray-700 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="text-xl" />
                  <span className="text-lg font-medium">Ver no GitHub</span>
                </motion.a>

                {/* Link para Download do Projeto (opcional) 
                <motion.a
                  href="/downloads/notas-tempo-real.zip"
                  className="flex items-center space-x-3 bg-yellow-500 text-white px-8 py-4 rounded-xl hover:bg-yellow-600 transition-colors duration-300"
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