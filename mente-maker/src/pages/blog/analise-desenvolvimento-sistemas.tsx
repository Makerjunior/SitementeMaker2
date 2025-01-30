import { FaFacebook, FaInstagram, FaWhatsapp, FaTiktok, FaLaptop } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const ShareButtons = () => {
  const [isClient, setIsClient] = useState<boolean>(false); // Tipando o estado como booleano

  // Verifica se estamos no lado do cliente
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Verifica se estamos no lado do cliente para obter a URL da página
  const currentUrl = isClient ? window.location.href : '';

  return (
    <div className="mt-8 pt-8 border-t">
      <div className="flex items-center justify-between">
        <div>
          <div>Compartilhar</div>
          <div className="flex gap-4">
            {/* Botões de compartilhamento */}
            <div className="flex items-center gap-3">
              <a
                href={`https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href={`https://www.instagram.com/mente___maker/`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href={`https://www.tiktok.com/@mente___maker`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
              >
                <FaTiktok size={20} />
              </a>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(currentUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>
        </div>
        <Link href="/blog">
          <button className="flex items-center gap-2 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg">
            <FaLaptop /> Ver mais artigos
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ShareButtons;
