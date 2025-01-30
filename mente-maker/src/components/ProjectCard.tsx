import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaPython, FaJs } from 'react-icons/fa';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tech: 'python' | 'javascript';
  slug: string;
}

export default function ProjectCard({ title, description, image, tech, slug }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden h-[400px] flex flex-col"
    >
      <div className="relative h-48 w-full flex-shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          unoptimized
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow">
          {tech === 'python' ? (
            <FaPython className="text-blue-500 text-xl" />
          ) : (
            <FaJs className="text-yellow-500 text-xl" />
          )}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-xl font-bold mb-2 line-clamp-2">{title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        </div>
        <div className="mt-auto">
          <Link
            href={`/projetos/${slug}`}
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors w-full text-center"
          >
            Ver Projeto
          </Link>
        </div>
      </div>
    </motion.div>
  );
} 