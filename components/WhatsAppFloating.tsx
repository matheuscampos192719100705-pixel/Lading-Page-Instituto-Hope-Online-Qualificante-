
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants.tsx';

export const WhatsAppFloating: React.FC = () => {
  return (
    <a 
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 whatsapp-pulse bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle size={32} fill="currentColor" />
    </a>
  );
};
