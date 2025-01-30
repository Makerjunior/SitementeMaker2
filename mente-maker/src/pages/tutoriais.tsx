import Layout from '../components/Layout';
import TutorialCard from '../components/TutorialCard';
import { motion } from 'framer-motion';

export default function Tutoriais() {
  const tutorials = [
    {
      title: "Como criar API com Flask",
      description: "Aprenda a criar uma API RESTful completa usando Flask, incluindo rotas, autenticação e documentação.",
      image: "https://images.unsplash.com/photo-1555952494-efd681c7e3f9?q=80&w=1000",
      tech: "python",
      slug: "criar-api-flask",
      difficulty: "intermediario",
      duration: "15 min"
    },
    {
      title: "Como instalar TypeScript do zero",
      description: "Guia completo de instalação e configuração do TypeScript em seus projetos.",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=1000",
      tech: "typescript",
      slug: "instalar-typescript",
      difficulty: "iniciante",
      duration: "12 min"
    },
    {
      title: "Primeiros passos com Arduino",
      description: "Introdução ao mundo do Arduino: configuração inicial e primeiro projeto.",
      image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?q=80&w=1000",
      tech: "arduino",
      slug: "primeiros-passos-arduino",
      difficulty: "iniciante",
      duration: "10 min"
    },
    {
      title: "Criando um alarme simples com Arduino",
      description: "Aprenda a construir um sistema de alarme básico usando Arduino e sensores.",
      image: "https://cdn.pixabay.com/photo/2015/12/07/01/38/arduino-1080213_1280.jpg?q=80&w=1000",
      tech: "arduino",
      slug: "alarme-arduino",
      difficulty: "intermediario",
      duration: "19 min"
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
        <h1 className="text-4xl font-bold mb-8">Tutoriais</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.map((tutorial, index) => (
            <motion.div
              key={tutorial.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <TutorialCard
                {...tutorial}
                tech={tutorial.tech as 'python' | 'typescript' | 'arduino'}
                difficulty={tutorial.difficulty as 'iniciante' | 'intermediario' | 'avancado'}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Layout>
  );
} 