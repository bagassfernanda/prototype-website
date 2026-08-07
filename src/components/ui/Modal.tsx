import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  id?: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  id = 'artavel-modal'
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id={id}
      role="dialog"
      aria-modal="true"
      aria-labelledby={`${id}-title`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        ref={modalRef}
        className="bg-white rounded-2xl border border-[#DBE4EB] shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative"
      >
        <div className="flex items-center justify-between border-b border-[#DBE4EB] pb-4 mb-6">
          <h2 id={`${id}-title`} className="text-xl font-bold font-heading text-[#172536]">
            {title}
          </h2>
          <button
            onClick={onClose}
            aria-label="Tutup dialog"
            className="p-2 rounded-lg text-[#5C6B79] hover:text-[#172536] hover:bg-[#F7F9FB] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#36699C]"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};
