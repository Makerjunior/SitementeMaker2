import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaDiscord, FaInstagram, FaTiktok, FaEnvelope } from 'react-icons/fa';

const socialLinks = [
  {
    name: 'WhatsApp',
    icon: FaWhatsapp,
    link: 'https://chat.whatsapp.com/FGkU80peYjMFubHPiNScSm',
    color: 'bg-green-500 hover:bg-green-600',
    description: 'Entre para nosso grupo e participe das discussões'
  },
  {
    name: 'Discord',
    icon: FaDiscord,
    link: 'https://discord.gg/ng9T89GzVD',
    color: 'bg-indigo-500 hover:bg-indigo-600',
    description: 'Faça parte da nossa comunidade no Discord'
  },
  {
    name: 'Instagram',
    icon: FaInstagram,
    link: 'https://www.instagram.com/mente___maker',
    color: 'bg-pink-500 hover:bg-pink-600',
    description: 'Siga-nos para ver novidades e bastidores'
  },
  {
    name: 'TikTok',
    icon: FaTiktok,
    link: 'https://www.tiktok.com/@mente.maker?lang=pt-BR',
    color: 'bg-black hover:bg-gray-800',
    description: 'Confira nossos vídeos curtos e tutoriais'
  }
];

export default function Contato() {
  return (
    <Layout>
      <motion.div
        className="container-responsive py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h1 
              className="text-4xl font-bold mb-4"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
            >
              Entre em Contato
            </motion.h1>
            <motion.p 
              className="text-gray-600"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Conecte-se conosco através de nossas redes sociais
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.color} text-white rounded-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-full bg-white/10">
                    <social.icon className="w-8 h-8" />
                  </div>
                  <h2 className="text-xl font-bold">{social.name}</h2>
                  <p className="text-sm opacity-90">{social.description}</p>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div 
            className="mt-16 text-center bg-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            { /* 
            
                        <h2 className="text-2xl font-bold mb-4">Horário de Atendimento</h2>
            <p className="text-gray-600">
              Segunda a Sexta: 9h às 18h<br />
              Sábado: 9h às 13h
            </p>
            <div className="mt-6">
              <p className="text-gray-600">
                Tempo médio de resposta: até 24 horas úteis
              </p>
            </div>
            */ }

          </motion.div>
        </div>
      </motion.div>
    </Layout>
  );
}