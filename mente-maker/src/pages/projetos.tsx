import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';

export default function Projetos() {
  const projects = [
    {
      title: "Automação de Tarefas",
      description: "Script Python para automatizar tarefas repetitivas do dia a dia.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000",
      tech: "python",
      slug: "python-automacao"
    },
    {
      title: "Bot de Trading",
      description: "Bot automatizado para análise e execução de operações no mercado financeiro.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000",
      tech: "python",
      slug: "python-trading-bot"
    },
    {
      title: "Reconhecimento Facial",
      description: "Sistema de reconhecimento facial em tempo real usando OpenCV.",
      image: "https://images.unsplash.com/photo-1526374870839-e155464bb9b2?q=80&w=1000",
      tech: "python",
      slug: "reconhecimento-facial"
    },
    {
      title: "Notas em Tempo Real",
      description: "Aplicativo de notas colaborativo com sincronização em tempo real.",
      image: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1000",
      tech: "javascript",
      slug: "notas-tempo-real"
    },
    {
      title: "Dashboard Interativo",
      description: "Dashboard com visualizações de dados dinâmicas usando D3.js.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000",
      tech: "javascript",
      slug: "dashboard-interativo"
    }
  ] as const;

  return (
    <Layout>
      <motion.div
        className="container-responsive py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8">Projetos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                tech={project.tech as 'python' | 'javascript'}
                slug={project.slug}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Layout>
  );
} 