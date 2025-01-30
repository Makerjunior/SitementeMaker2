import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaRocket, FaBook, FaBlog, FaArrowRight } from 'react-icons/fa';

export default function Home() {
  const features = [
    {
      icon: FaRocket,
      title: "Projetos Práticos",
      description: "Aprenda construindo projetos reais do início ao fim.",
      link: "/projetos",
      color: "from-blue-600 to-purple-600",
      delay: 0.2
    },
    {
      icon: FaBook,
      title: "Tutoriais Detalhados",
      description: "Guias passo a passo para dominar novas tecnologias.",
      link: "/tutoriais",
      color: "from-green-600 to-blue-600",
      delay: 0.4
    },
    {
      icon: FaBlog,
      title: "Blog Atualizado",
      description: "Fique por dentro das últimas novidades do mundo maker.",
      link: "/blog",
      color: "from-purple-600 to-pink-600",
      delay: 0.6
    }
  ];

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <section className="bg-gray-900 text-white py-20">
          <div className="container-responsive">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Bem-vindo ao Mente Maker
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Explore o mundo da tecnologia
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/projetos"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Começar Agora
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Section Atualizada */}
        <section className="py-20 bg-gray-50">
          <div className="container-responsive">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: feature.delay }}
                >
                  <Link href={feature.link}>
                    <motion.div
                      className="bg-white rounded-xl shadow-lg p-8 h-full transform transition-all duration-300 hover:shadow-2xl"
                      whileHover={{ 
                        y: -10,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <motion.div
                        className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 mx-auto`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <feature.icon className="text-2xl text-white" />
                      </motion.div>
                      
                      <h2 className="text-2xl font-bold text-center mb-4">
                        {feature.title}
                      </h2>
                      
                      <p className="text-gray-600 text-center mb-6">
                        {feature.description}
                      </p>
                      
                      <motion.div
                        className="flex items-center justify-center text-blue-600 group"
                        whileHover={{ x: 5 }}
                      >
                        <span className="mr-2">Explorar</span>
                        <FaArrowRight className="transform group-hover:translate-x-2 transition-transform" />
                      </motion.div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 text-white py-20">
          <div className="container-responsive text-center">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Pronto para começar sua jornada maker?
              </h2>
              <p className="text-xl mb-8">
                Junte-se à nossa comunidade e comece a criar projetos incríveis.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contato"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Entre em Contato
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </Layout>
  );
}
