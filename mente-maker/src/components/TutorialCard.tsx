import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaPython, FaJs, FaMicrochip } from 'react-icons/fa';

interface TutorialCardProps {
  title: string;
  description: string;
  image: string;
  tech: 'python' | 'typescript' | 'arduino';
  slug: string;
  difficulty: 'iniciante' | 'intermediario' | 'avancado';
  duration: string;
}

export default function TutorialCard({ 
  title, 
  description, 
  image, 
  tech, 
  slug, 
  difficulty,
  duration 
}: TutorialCardProps) {
  const getTechIcon = () => {
    switch (tech) {
      case 'python':
        return <FaPython className="text-blue-500 text-xl" />;
      case 'typescript':
        return <FaJs className="text-blue-600 text-xl" />;
      case 'arduino':
        return <FaMicrochip className="text-teal-500 text-xl" />;
    }
  };

  const getDifficultyColor = () => {
    switch (difficulty) {
      case 'iniciante':
        return 'bg-green-100 text-green-800';
      case 'intermediario':
        return 'bg-yellow-100 text-yellow-800';
      case 'avancado':
        return 'bg-red-100 text-red-800';
    }
  };

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden h-[450px] flex flex-col"
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
          {getTechIcon()}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <div className="flex gap-2 mb-3">
            <span className={`px-2 py-1 rounded-full text-sm font-medium ${getDifficultyColor()}`}>
              {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
            </span>
            <span className="px-2 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
              {duration}
            </span>
          </div>
          <h3 className="text-xl font-bold mb-2 line-clamp-2">{title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        </div>
        <div className="mt-auto">
          <Link
            href={`/tutoriais/${slug}`}
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors w-full text-center"
          >
            Ver Tutorial
          </Link>
        </div>
      </div>
    </motion.div>
  );
} 