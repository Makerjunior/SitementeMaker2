import Link from 'next/link';

interface BlogPostProps {
  title: string;
  excerpt: string;
  date: string;
  author: string;
}

export default function BlogPost({ title, excerpt, date, author }: BlogPostProps) {
  return (
    <article className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-500 text-sm">{date}</span>
          <span className="text-gray-600 text-sm">Por {author}</span>
        </div>
        <h2 className="text-2xl font-bold mb-2 hover:text-blue-600 transition-colors">
          <Link href={`/blog/${title.toLowerCase().replace(/ /g, '-')}`}>
            {title}
          </Link>
        </h2>
        <p className="text-gray-600">{excerpt}</p>
      </div>
      <div className="flex items-center justify-between">
        <Link 
          href={`/blog/${title.toLowerCase().replace(/ /g, '-')}`}
          className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
        >
          Ler mais →
        </Link>
      </div>
    </article>
  );
} 