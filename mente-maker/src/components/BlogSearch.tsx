import { ChangeEvent } from 'react';
import { FaSearch } from 'react-icons/fa';

interface BlogSearchProps {
  onSearch: (query: string) => void;
}

export default function BlogSearch({ onSearch }: BlogSearchProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div className="relative max-w-xl mx-auto mb-12">
      <div className="relative">
        <input
          type="text"
          placeholder="Buscar artigos..."
          className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          onChange={handleChange}
        />
        <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>
    </div>
  );
} 