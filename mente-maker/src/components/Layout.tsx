import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaTools, FaBook, FaBlog, FaInfo, FaEnvelope } from 'react-icons/fa';
import { FaYoutube, FaInstagram, FaGithub } from 'react-icons/fa';
import Head from 'next/head';
export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => router.pathname === path;

  const menuItems = [
    { path: '/', label: 'Home', icon: FaHome },
    { path: '/projetos', label: 'Projetos', icon: FaTools },
    { path: '/tutoriais', label: 'Tutoriais', icon: FaBook },
    { path: '/blog', label: 'Blog', icon: FaBlog },
    { path: '/sobre', label: 'Sobre', icon: FaInfo },
    { path: '/contato', label: 'Contato', icon: FaEnvelope },
  ];

  return (
    
    <motion.div 
      className="min-h-screen bg-white flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/logo.png" />

        {/* Open Graph (Facebook, WhatsApp, etc.) */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mente Maker" />
        <meta property="og:description" content="Tecnologia e Programação" />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://www.mentemaker.com.br" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mente Maker" />
        <meta name="twitter:description" content="Tecnologia e Programação" />
        <meta name="twitter:image" content="/logo.png" />
      </Head>

      <nav className="bg-gray-900 text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <Link href="/" className="flex items-center">
               
                <span className="text-xl font-bold">Mente Maker</span>
              </Link>
            </motion.div>
            
            {/* Menu Desktop */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {menuItems.map((item) => (
                  <motion.div
                    key={item.path}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={item.path}
                      className={`nav-link flex items-center space-x-2 ${
                        isActive(item.path) ? 'bg-gray-700' : ''
                      }`}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Botão Menu Mobile */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>

          {/* Menu Mobile */}
          <motion.div
            className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}
            initial={false}
            animate={isMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item) => (
                <motion.div
                  key={item.path}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={item.path}
                    className={`mobile-nav-link flex items-center space-x-2 ${
                      isActive(item.path) ? 'bg-gray-700' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </nav>

      <motion.main
        className="flex-grow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.main>

      <footer className="bg-gray-900 text-white mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center sm:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold mb-4">Mente Maker</h3>
              <p className="text-gray-300">
                O Mente Maker é um site de tutoriais e projetos de eletrônica e programação. Em conjunto com o canal no Youtube.
              </p>
            </motion.div>
            <motion.div 
              className="text-center sm:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-lg font-bold mb-4">Links Úteis</h3>
              <ul className="space-y-2">
                <li><Link href="/projetos" className="text-gray-300 hover:text-white">Projetos</Link></li>
                <li><Link href="/tutoriais" className="text-gray-300 hover:text-white">Tutoriais</Link></li>
                <li><Link href="/blog" className="text-gray-300 hover:text-white">Blog</Link></li>
              </ul>
            </motion.div>
            <motion.div 
              className="text-center sm:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-lg font-bold mb-4">Redes Sociais</h3>
              <div className="flex justify-center sm:justify-start space-x-4">
                <motion.a
                  href="https://www.youtube.com/@mentemaker"
                  className="text-gray-300 hover:text-white text-2xl"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaYoutube />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/mente___maker/"
                  className="text-gray-300 hover:text-white text-2xl"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaInstagram />
                </motion.a>
                <motion.a
                  href="https://github.com/Makerjunior"
                  className="text-gray-300 hover:text-white text-2xl"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub />
                </motion.a>
              </div>
            </motion.div>
          </div>
          <motion.div 
            className="border-t border-gray-800 mt-8 pt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-gray-300">© {new Date().getFullYear()} Mente Maker. Todos os direitos reservados.</p>
          </motion.div>
        </div>
      </footer>
    </motion.div>
  );
} 