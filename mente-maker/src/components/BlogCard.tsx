import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  slug: string;
  tags: string[];
  author: string;
}

export default function BlogCard({ 
  title, 
  excerpt, 
  image, 
  date, 
  readTime, 
  slug,
  tags,
  author 
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <motion.div
        whileHover={{ y: -10 }}
        className="bg-white rounded-lg shadow-lg overflow-hidden h-full"
      >
        <div className="relative h-48">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag) => (
              <span 
                key={tag}
                className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-bold mb-2 line-clamp-2">{title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span>Por {author}</span>
            <div className="flex gap-4">
              <span>{date}</span>
              <span>{readTime} min de leitura</span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
} 