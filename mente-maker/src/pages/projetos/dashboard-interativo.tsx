import Layout from '../../components/Layout';
import { motion } from 'framer-motion';
import { FaChartBar, FaCode, FaExclamationTriangle, FaFile, FaCheckCircle, FaQuestionCircle, FaRobot, FaSortAlphaDown, FaCalendarCheck } from 'react-icons/fa';
import Reader from '../../components/Reader';
export default function DashboardInterativo() {
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
                        <FaChartBar className="text-5xl text-indigo-500" />
                        <h1 className="text-5xl font-extrabold leading-tight text-gray-800">
                            Crie um Dashboard Interativo com React e D3.js: Domine a Visualização de Dados na Web
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
                                    <span>Desvende o Poder dos Dashboards Interativos</span>
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Mergulhe no mundo da visualização de dados com este projeto detalhado que combina a versatilidade do React com a precisão do D3.js. Aprenda a construir um dashboard interativo que não apenas exibe dados, mas também permite que os usuários explorem, filtrem e analisem informações de forma dinâmica e intuitiva. Este guia completo irá levá-lo através de cada etapa do desenvolvimento, desde a configuração do ambiente até a implementação de funcionalidades avançadas, permitindo que você crie dashboards impactantes e personalizados.
                                </p>
                                <p className="text-lg text-gray-600 leading-relaxed mt-4">
                                    Com este guia, você aprenderá a:
                                </p>
                                <ul className="list-disc list-inside text-lg text-gray-600 leading-relaxed mt-4">
                                    <li>Configurar um ambiente de desenvolvimento React com TypeScript para visualização de dados.</li>
                                    <li>Integrar a biblioteca D3.js em um projeto React para criar gráficos interativos.</li>
                                    <li>Utilizar o TailwindCSS para estilizar seu dashboard de forma rápida e responsiva.</li>
                                    <li>Implementar filtros dinâmicos para permitir a análise de dados por diferentes critérios.</li>
                                    <li>Gerenciar requisições de dados e cache com a biblioteca React Query.</li>
                                    <li>Adicionar funcionalidades avançadas, como tooltips informativos e animações suaves.</li>
                                    <li>Exportar os dados visualizados para diferentes formatos, como PDF e Excel.</li>
                                </ul>
                                <p className="text-lg text-gray-600 leading-relaxed mt-4">
                                    Prepare-se para transformar dados brutos em insights valiosos com um dashboard interativo que capacita seus usuários a explorar e compreender informações de forma eficaz!
                                </p>
                                 <p className="text-lg text-gray-600 leading-relaxed mt-4">
                                     Além disso, este projeto pode ser expandido para incluir funcionalidades adicionais, como:
                                </p>
                                 <ul className="list-disc list-inside text-lg text-gray-600 leading-relaxed mt-4">
                                     <li>Implementar gráficos mais complexos, como mapas de calor e diagramas de dispersão.</li>
                                     <li>Adicionar funcionalidades de drill-down para explorar dados em diferentes níveis de detalhe.</li>
                                     <li>Integrar com diferentes fontes de dados, como bancos de dados e APIs externas.</li>
                                     <li>Implementar um sistema de autenticação para controlar o acesso ao dashboard.</li>
                                     <li>Criar um layout personalizável para permitir que os usuários organizem os componentes do dashboard de acordo com suas preferências.</li>
                                </ul>
                            </div>

                            {/* Seção de Tecnologias e Pré-requisitos */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                {/* Tecnologias Utilizadas */}
                                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                                    <h3 className="text-xl font-bold text-gray-700 mb-4 flex items-center space-x-2">
                                        <FaCode className="text-lg text-green-500" />
                                        <span>As Ferramentas da Visualização de Dados</span>
                                    </h3>
                                    <ul className="list-disc list-inside text-gray-600 text-lg leading-relaxed">
                                        <li><b>React:</b> A biblioteca JavaScript para construir interfaces de usuário reativas e reutilizáveis,  tornando a criação de dashboards complexos mais organizada e eficiente. A arquitetura baseada em componentes do React permite criar interfaces modulares e fáceis de manter.</li>
                                        <li><b>D3.js:</b> A poderosa biblioteca JavaScript para manipulação de documentos baseada em dados,  essencial para criar gráficos e visualizações interativas e personalizadas. O D3.js oferece controle total sobre a criação de gráficos, permitindo que você crie visualizações que atendam às suas necessidades específicas.</li>
                                        <li><b>TailwindCSS:</b> O framework CSS utility-first para estilização rápida e responsiva da interface,  permitindo que você crie designs modernos e adaptáveis com facilidade. O TailwindCSS oferece um conjunto abrangente de classes utilitárias que podem ser combinadas para criar estilos personalizados sem escrever CSS.</li>
                                        <li><b>React Query (@tanstack/react-query):</b> A biblioteca para gerenciamento de requisições e cache de dados em React,  otimizando o desempenho do seu dashboard ao evitar requisições desnecessárias. O React Query simplifica o processo de busca, cache e atualização de dados em aplicações React.</li>
                                        <li><b>TypeScript:</b> O superset do JavaScript que adiciona tipagem estática opcional,  melhorando a qualidade e a manutenabilidade do código, especialmente em projetos de grande escala. O TypeScript ajuda a detectar erros em tempo de desenvolvimento, tornando o código mais robusto e confiável.</li>
                                        <li><b>npm ou Yarn:</b> Gerenciadores de pacotes para instalar e gerenciar as dependências do seu projeto,  facilitando o processo de configuração e garantindo que todas as bibliotecas necessárias estejam disponíveis. Os gerenciadores de pacotes permitem que você instale, atualize e remova dependências com facilidade.</li>
                                    </ul>
                                </div>

                                {/* Pré-requisitos */}
                                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                                    <h3 className="text-xl font-bold text-gray-700 mb-4 flex items-center space-x-2">
                                        <FaExclamationTriangle className="text-lg text-orange-500" />
                                        <span>Preparando o Terreno para a Visualização</span>
                                    </h3>
                                    <ul className="list-disc list-inside text-gray-600 text-lg leading-relaxed">
                                        <li><b>Conhecimento Intermediário de JavaScript:</b> Familiaridade com a sintaxe, os conceitos e os padrões de projeto do JavaScript é essencial para construir um dashboard interativo.</li>
                                        <li><b>Conhecimento Básico de React:</b> Entendimento dos componentes, do estado e dos hooks do React é fundamental para criar a estrutura do seu dashboard.</li>
                                        <li><b>Familiaridade com HTML e CSS:</b> Conhecimento de HTML para estruturar o conteúdo e CSS para estilizar a aparência do seu dashboard é necessário para criar uma interface visualmente atraente.</li>
                                        <li><b>Node.js e npm (ou Yarn) Instalados:</b> Node.js é o ambiente de tempo de execução JavaScript e npm (ou Yarn) é o gerenciador de pacotes que você usará para instalar as dependências do seu projeto.</li>
                                        <li><b>Editor de Código:</b> VS Code, Sublime Text, Atom ou seu editor de código preferido. Um bom editor de código facilita a escrita, depuração e organização do código.</li>
                                        <li><b>Navegador Web Moderno:</b> Chrome, Firefox, Safari ou outro navegador moderno para visualizar e testar seu dashboard.</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Seção de Instruções Detalhadas */}
                            <div className="border-t pt-10">
                                <h2 className="text-3xl font-semibold text-gray-700 mb-5 flex items-center space-x-3">
                                    <FaRobot className="text-xl text-purple-500" />
                                    <span>Construindo seu Dashboard Interativo: Um Guia Passo a Passo</span>
                                </h2>
                                <div className="prose max-w-none">
                                    <h3 className="text-2xl font-bold text-gray-700 mt-8 mb-3">1. Configuração do Projeto</h3>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        Comece criando um novo projeto React com TypeScript usando o Create React App e instalando as dependências necessárias:
                                    </p>
                                    <pre className="bg-gray-800 text-white p-6 rounded-xl overflow-x-auto text-sm md:text-base">
                                        <code>{`
# Crie um novo projeto React com TypeScript
npx create-react-app dashboard --template typescript

# Entre no diretório do projeto
cd dashboard

# Instale as dependências
npm install d3 @tanstack/react-query tailwindcss
                                        `}</code>
                                    </pre>
                                    <p className="text-lg text-gray-600 leading-relaxed mt-4">
                                        Esses comandos irão criar um novo projeto React com TypeScript, navegar até o diretório do projeto e instalar as bibliotecas D3.js, React Query e TailwindCSS.
                                    </p>

                                    <h3 className="text-2xl font-bold text-gray-700 mt-8 mb-3">2. Criando o Componente do Gráfico</h3>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        Crie um componente React para renderizar o gráfico usando D3.js. Este componente irá receber os dados e as dimensões do gráfico como props:
                                    </p>
                                    <pre className="bg-gray-800 text-white p-6 rounded-xl overflow-x-auto text-sm md:text-base">
                                        <code>{`
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface DataPoint {
  date: Date;
  value: number;
}

interface LineChartProps {
  data: DataPoint[];
  width: number;
  height: number;
}

const LineChart: React.FC<LineChartProps> = ({ data, width, height }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    // Limpar SVG
    d3.select(svgRef.current).selectAll('*').remove();

    // Configurar margens
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // Criar escalas
    const xScale = d3.scaleTime()
      .domain(d3.extent(data, d => d.date) as [Date, Date])
      .range([0, innerWidth]);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.value) as number])
      .range([innerHeight, 0]);

    // Criar linha
    const line = d3.line<DataPoint>()
      .x(d => xScale(d.date))
      .y(d => yScale(d.value));

    // Criar SVG
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height);

    // Adicionar grupo principal
    const g = svg.append('g')
      .attr('transform', \`translate(\${margin.left},\${margin.top})\`);

    // Adicionar eixos
    g.append('g')
      .attr('transform', \`translate(0,\${innerHeight})\`)
      .call(d3.axisBottom(xScale));

    g.append('g')
      .call(d3.axisLeft(yScale));

    // Adicionar linha
    g.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 1.5)
      .attr('d', line);

    // Adicionar pontos
    g.selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', d => xScale(d.date))
      .attr('cy', d => yScale(d.value))
      .attr('r', 4)
      .attr('fill', 'steelblue');

  }, [data, width, height]);

  return <svg ref={svgRef}></svg>;
};

export default LineChart;
                                        `}</code>
                                    </pre>
                                    <p className="text-lg text-gray-600 leading-relaxed mt-4">
                                        Este componente utiliza o hook `useRef` para criar uma referência ao elemento SVG e o hook `useEffect` para criar o gráfico usando D3.js. As configurações são ajustadas dinamicamente através das props `width`, `height` e `data`.
                                    </p>

                                    <h3 className="text-2xl font-bold text-gray-700 mt-8 mb-3">3. Integrando o React Query para Gerenciar Dados</h3>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        Utilize o React Query para buscar e gerenciar os dados que serão exibidos no seu dashboard. Este exemplo mostra como buscar dados de uma API e exibi-los em um componente:
                                    </p>
                                    <pre className="bg-gray-800 text-white p-6 rounded-xl overflow-x-auto text-sm md:text-base">
                                        <code>{`
import { useQuery } from '@tanstack/react-query';

interface DataPoint {
  date: Date;
  value: number;
}

interface DashboardData {
  chartData: DataPoint[];
  tableData: any[];
}

const fetchData = async (filters: any): Promise<DashboardData> => {
  // Simule uma chamada de API com filtros
  await new Promise(resolve => setTimeout(resolve, 1000));
  const chartData = Array.from({ length: 20 }, (_, i) => ({
    date: new Date(2023, 0, i + 1),
    value: Math.random() * 100
  }));
  const tableData = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: \`Item \${i + 1}\`,
    value: Math.random() * 100
  }));
  return { chartData, tableData };
};

function Dashboard() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['dashboardData'],
    queryFn: () => fetchData({})
  });

  if (isLoading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error.message}</div>;

  return (
    <div>
      {/* Exiba seus componentes aqui */}
    </div>
  );
}

export default Dashboard;
                                        `}</code>
                                    </pre>
                                    <p className="text-lg text-gray-600 leading-relaxed mt-4">
                                        Neste exemplo, a função `fetchData` simula uma chamada de API que retorna dados para o gráfico e para a tabela. O hook `useQuery` do React Query gerencia o estado da requisição e o cache dos dados.
                                    </p>

                                    <h3 className="text-2xl font-bold text-gray-700 mt-8 mb-3">4. Estilizando com TailwindCSS</h3>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        Utilize o TailwindCSS para estilizar seu dashboard de forma rápida e responsiva. Adicione classes utilitárias aos seus componentes para criar um design moderno e atraente:
                                    </p>
                                    <pre className="bg-gray-800 text-white p-6 rounded-xl overflow-x-auto text-sm md:text-base">
                                        <code>{`
<div className="bg-white rounded-lg shadow-md p-6">
  <h2 className="text-xl font-bold mb-4">Título do Componente</h2>
  <p className="text-gray-700">Conteúdo do componente...</p>
</div>
                                        `}</code>
                                    </pre>
                                    <p className="text-lg text-gray-600 leading-relaxed mt-4">
                                        Neste exemplo, a classe `bg-white` define o fundo como branco, `rounded-lg` adiciona bordas arredondadas, `shadow-md` adiciona uma sombra suave e `p-6` adiciona um preenchimento de 6 unidades.
                                    </p>
                                </div>
                            </div>

                            {/* Seção de Funcionalidades */}
                            <div className="border-t pt-10">
                                <h2 className="text-3xl font-semibold text-gray-700 mb-5 flex items-center space-x-3">
                                    <FaCheckCircle className="text-xl text-green-500" />
                                    <span>As Funcionalidades do seu Dashboard Interativo</span>
                                </h2>
                                <ul className="list-disc list-inside text-lg text-gray-600 leading-relaxed">
                                    <li><b>Gráficos Interativos:</b> Exiba seus dados em gráficos de linha, barra, pizza e outros tipos de gráficos interativos que permitem aos usuários explorar os dados em detalhes.</li>
                                    <li><b>Filtros Dinâmicos:</b> Adicione filtros por data, categoria, região e outros critérios para permitir que os usuários segmentem os dados e analisem tendências específicas.</li>
                                    <li><b>Tabelas de Dados:</b> Exiba os dados em formato de tabela para facilitar a leitura e a comparação de valores. Adicione funcionalidades de ordenação e paginação para melhorar a usabilidade.</li>
                                    <li><b>Tooltips Informativos:</b> Crie tooltips que exibem informações detalhadas sobre cada ponto nos gráficos e nas tabelas, fornecendo contexto e insights adicionais.</li>
                                    <li><b>Exportação de Dados:</b> Permita que os usuários exportem os dados visualizados para diferentes formatos, como CSV, Excel e PDF, para que possam usar os dados em outras ferramentas.</li>
                                    <li><b>Responsividade:</b> Crie um design responsivo que se adapte a diferentes tamanhos de tela, garantindo que o seu dashboard seja acessível em desktops, tablets e smartphones.</li>
                                    <li><b>Temas Personalizáveis:</b> Adicione opções para que os usuários personalizem a aparência do dashboard, escolhendo entre diferentes temas e paletas de cores.</li>
                                </ul>
                            </div>

                            {/* Seção de Boas Práticas e Considerações */}
                            <div className="border-t pt-10">
                                <h2 className="text-3xl font-semibold text-gray-700 mb-5 flex items-center space-x-3">
                                    <FaSortAlphaDown className="text-xl text-blue-500" />
                                    <span>Dicas para um Dashboard Interativo Eficaz</span>
                                </h2>
                                <ul className="list-disc list-inside text-lg text-gray-600 leading-relaxed">
                                    <li><b>Defina o Público-Alvo:</b> Antes de começar a construir o seu dashboard, defina o público-alvo e os objetivos que você deseja alcançar. Isso ajudará a guiar suas decisões de design e a escolher as visualizações de dados mais adequadas.</li>
                                    <li><b>Simplifique a Interface:</b> Evite sobrecarregar a interface com muitos elementos e informações. Priorize a clareza e a usabilidade para que os usuários possam encontrar facilmente o que estão procurando.</li>
                                    <li><b>Use Cores com Moderação:</b> Utilize cores para destacar informações importantes e criar um design visualmente atraente, mas evite usar cores em excesso, pois isso pode distrair e confundir os usuários.</li>
                                    <li><b>Otimize o Desempenho:</b> Otimize o desempenho do seu dashboard para garantir que ele carregue rapidamente e responda de forma suave às interações do usuário. Utilize técnicas de cache, lazy loading e otimização de código para melhorar o desempenho.</li>
                                    <li><b>Teste e Valide:</b> Teste o seu dashboard com usuários reais para identificar problemas de usabilidade e áreas de melhoria. Colete feedback e faça ajustes iterativos para garantir que o seu dashboard atenda às necessidades do seu público-alvo.</li>
                                    <li><b>Documentação:</b> Crie uma documentação clara e concisa sobre como instalar, configurar e usar o bot. Isso tornará o seu projeto mais acessível a outros desenvolvedores.</li>
                                    <li><b>Código Limpo e Organizado:</b> Mantenha seu código limpo e organizado, para que seja fácil para outros desenvolvedores entenderem e colaborarem em seu projeto. Utilize comentários para explicar o funcionamento das funções e seções do código.</li>
                                     <li><b>Tratamento de Erros:</b> Implemente um tratamento de erros mais robusto para lidar com arquivos corrompidos ou problemas de permissão.  Use blocos `try...except` para capturar exceções e registrar mensagens de erro informativas.</li>
                                    <li><b>Logs:</b> Adicione logs ao seu script para registrar as ações realizadas e facilitar a identificação de problemas.  Use o módulo `logging` para configurar o logging de forma adequada.</li>
                                </ul>
                            </div>

                            {/* Seção de Ações Finais 
                            <div className="flex justify-center space-x-6 mt-12">
                                {/* Link para um repositório GitHub (opcional) 
                                <motion.a
                                    href="https://github.com/seu-usuario/dashboard-interativo"
                                    className="flex items-center space-x-3 bg-gray-800 text-white px-8 py-4 rounded-xl hover:bg-gray-700 transition-colors duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FaGithub className="text-xl" />
                                    <span className="text-lg font-medium">Ver no GitHub</span>
                                </motion.a>

                                {/* Link para Download do Projeto (opcional) 
                                <motion.a
                                    href="/downloads/dashboard-interativo.zip"
                                    className="flex items-center space-x-3 bg-indigo-600 text-white px-8 py-4 rounded-xl hover:bg-indigo-700 transition-colors duration-300"
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