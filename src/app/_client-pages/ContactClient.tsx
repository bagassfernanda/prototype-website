'use client';

import { useNextNavigate } from '../../components/layout/useNextNavigate';
import { ContactPage } from '../../views/ContactPage';

export const ContactClient = () => {
  const onNavigate = useNextNavigate();
  return <ContactPage onNavigate={onNavigate} />;
};
