'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface ClientRedirectProps {
  href: string;
}

export const ClientRedirect: React.FC<ClientRedirectProps> = ({ href }) => {
  const router = useRouter();

  useEffect(() => {
    router.replace(href);
  }, [href, router]);

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 text-center">
      <p className="text-base text-[#5C6B79]">Mengarahkan Anda ke halaman yang sesuai…</p>
    </div>
  );
};
