import Layout from '../components/Layout';
import BlogCard from '../components/BlogCard';
import BlogSearch from '../components/BlogSearch';
import { motion } from 'framer-motion';
import { useState } from 'react';

const blogPosts = [
  {
    title: "Como será a área de programação em 2025",
    excerpt: "Uma análise das tendências e previsões para o mercado de desenvolvimento de software nos próximos anos.",
    image: "/images/blog/future-code.jpg",
    date: "15 Mar 2024",
    readTime: "8",
    slug: "programacao-2025",
    tags: ["Carreira", "Tecnologia", "Futuro"],
    author: "Mente Maker"
  },
  {
    title: "Por que aprender Git e GitHub",
    excerpt: "Descubra a importância do controle de versão e como ele pode impulsionar sua carreira como desenvolvedor.",
    image: "/images/blog/git.png",
    date: "12 Mar 2024",
    readTime: "6",
    slug: "git-github-importancia",
    tags: ["Git", "GitHub", "Desenvolvimento"],
    author: "Mente Maker"
  },
  {
    title: "Onde encontrar trabalhos freelancer para iniciantes",
    excerpt: "Guia completo com as melhores plataformas e dicas para conseguir seus primeiros projetos como freelancer.",
    image: "/images/blog/freelancer.jpg",
    date: "10 Mar 2024",
    readTime: "10",
    slug: "freelancer-iniciantes",
    tags: ["Freelancer", "Carreira", "Iniciantes"],
    author: "Mente Maker"
  },
  {
    title: "As melhores práticas para estudar programação",
    excerpt: "Metodologias e técnicas eficientes para aprender programação e se manter atualizado.",
    image: "/images/blog/study.jpg",
    date: "8 Mar 2024",
    readTime: "7",
    slug: "melhores-praticas-estudo",
    tags: ["Estudos", "Dicas", "Aprendizado"],
    author: "Mente Maker"
  },
  {
    title: "Portfólio - Computação em Nuvem com Java, NetBeans e CloudSim",
    excerpt: "Aprenda a criar um portfólio de computação em nuvem utilizando Java, NetBeans e CloudSim. Passo a passo para configurar o ambiente e criar simulações.",
    image: "/images/blog/computacaoemnuvem.jpg",
    date: "30 Jul 2024",
    readTime: "5",
    slug: "PortfoliodeComputacaoemNuvem",
    tags: ["Computação em Nuvem", "Java", "NetBeans", "CloudSim"],
    author: "Mente Maker"
  },
  {
    title: "Portfólio – Linguagem Orientada a Objetos",
    excerpt: "Aprenda a configurar um projeto Java utilizando orientação a objetos no NetBeans. Passo a passo para instalar e configurar o NetBeans, criar e executar um projeto Java orientado a objetos.",
    image: "/images/blog/programacaoorientadaaobjetos.png",
    date: "23 Mai 2024",
    readTime: "8",
    slug: "Portfolio-Linguagem-Orientada-a-Objetos",
    tags: ["Java", "Linguagem Orientada a Objetos", "NetBeans", "Programação"],
    author: "Mente Maker"
  },
  {
    title: "Portfólio - Programação em Banco de Dados",
    excerpt: "Processo de construção de um portfólio de programação em banco de dados",
    image: "/images/blog/programacaoembancodedados.png",
    date: "23 Mai 2024",
    readTime: "8",
    slug: "Portfolio-banco-de-dados",
    tags: ["Mysql","Banco de dados", "Portifólio", "Programação"],
    author: "Mente Maker"
  },
  {
    title: "O que se espera de um profissional em Análise e Desenvolvimento de Sistemas",
    excerpt: "No coração da revolução tecnológica, encontra-se o profissional de Análise e Desenvolvimento de Sistemas (ADS).",
    image: "/images/blog/man.png",
    date: "23 Mai 2024",
    readTime: "8",
    slug: "analise-desenvolvimento-sistemas",
    tags: ["analise-desenvolvimento-sistemas", "ADS", "Faculdade", "Programação"],
    author: "Mente Maker"
  },
  {
    title: "O que é Docker ?",
    excerpt: "O Docker surge como uma solução indispensável, revolucionando a forma como as aplicações",
    image: "/images/blog/docker3.png",
    date: "23 Mai 2024",
    readTime: "8",
    slug: "oque-e-docker",
    tags: ["Docker", "Programação", "Faculdade", "Container"],
    author: "Mente Maker"
  },
  {title:"A importancia de Python para o mercado de trabalho",
  excerpt:"Python é uma das linguagens de programação mais populares no mundo, e sua importância no mercado de trabalho é inegável.",
  image:"/images/blog/code-python.png",
  date:"23 Mai 2024",
  readTime:"8",
  slug:"importancia-de-python",
  tags:["Python","Programação","Mercado de Trabalho"],
  author: "Mente Maker"
  }
  
  
];

const Blog = () => {
  const [searchResults, setSearchResults] = useState(blogPosts);

  const handleSearch = (query: string) => {
    const filtered = blogPosts.filter(post => {
      const searchContent = `${post.title} ${post.excerpt} ${post.tags.join(' ')}`.toLowerCase();
      return searchContent.includes(query.toLowerCase());
    });
    setSearchResults(filtered);
  };

  return (
    <Layout>
      <motion.div
        className="container-responsive py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Blog</h1>
            <p className="text-gray-600">
              Artigos, tutoriais e insights sobre programação e tecnologia
            </p>
          </div>

          <BlogSearch onSearch={handleSearch} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {searchResults.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <BlogCard {...post} />
              </motion.div>
            ))}
          </div>

          {searchResults.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">Nenhum post encontrado.</p>
            </div>
          )}
        </div>
      </motion.div>
    </Layout>
  );
};

export default Blog; 