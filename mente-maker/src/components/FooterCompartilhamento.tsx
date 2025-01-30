// src/components/FooterCompartilhamento.tsx
import { FC } from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaTiktok } from 'react-icons/fa';

// Tipagem do componente
interface FooterCompartilhamentoProps {
  currentUrl: string;
}

const FooterCompartilhamento: FC<FooterCompartilhamentoProps> = ({ currentUrl }) => {
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
      </div>
    </div>
  );
};

export default FooterCompartilhamento;
