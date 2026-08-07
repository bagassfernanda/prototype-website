import React from 'react';
import { PlaceholderNotice } from '../ui/PlaceholderNotice';
import { useLanguage } from '../i18n/LanguageProvider';

export const TrustSection: React.FC = () => {
  const { text } = useLanguage();

  return (
    <section className="py-12 bg-[#F7F9FB] border-y border-[#DBE4EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-6">
          <div className="flex items-center gap-2">
            <h2 className="text-sm font-bold tracking-wider uppercase text-[#5C6B79] font-heading">
	              {text('Pengalaman & Kredibilitas')}
            </h2>
	            <PlaceholderNotice label={text('Status Kemitraan & Sertifikasi dalam Verifikasi')} size="sm" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl pt-2">
            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#36699C] font-heading">
                SPBE
              </span>
              <span className="text-xs sm:text-sm font-medium text-[#5C6B79] mt-1">
	                {text('Orientasi Tata Kelola')}
              </span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#568F3E] font-heading">
                ANRI
              </span>
              <span className="text-xs sm:text-sm font-medium text-[#5C6B79] mt-1">
	                {text('Kearsipan & Retensi')}
              </span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#244F78] font-heading">
                BSrE
              </span>
              <span className="text-xs sm:text-sm font-medium text-[#5C6B79] mt-1">
	                {text('Kesiapan TTE')}
              </span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#1F5D4B] font-heading">
                Hybrid
              </span>
              <span className="text-xs sm:text-sm font-medium text-[#5C6B79] mt-1">
	                {text('Cloud & On-Premise')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
