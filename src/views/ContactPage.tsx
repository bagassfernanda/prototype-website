import React from 'react';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { ContactForm } from '../components/forms/ContactForm';
import { Card } from '../components/ui/Card';
import { PlaceholderNotice } from '../components/ui/PlaceholderNotice';
import { LocationMapSection } from '../components/sections/LocationMapSection';
import { SocialMediaLinks } from '../components/brand/SocialMediaLinks';
import { COMPANY_PROFILE } from '../content/company';
import { MetaInjector } from '../components/seo/MetaInjector';
import { Mail, Phone, MapPin, Clock, MessageSquare, Globe2 } from 'lucide-react';
import { useLanguage } from '../components/i18n/LanguageProvider';

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const { text, localize } = useLanguage();
  const profile = localize(COMPANY_PROFILE);
  const whatsappNumber = profile.contact.whatsapp.replace(/\D/g, '');
  const whatsappMessage = encodeURIComponent(
    'Halo Admin PT Artavel, saya ingin mendapatkan respons cepat untuk konsultasi solusi Artavel.'
  );
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <>
      <MetaInjector
	        title={`${text('Hubungi PT Artavel')} — ${text('Konsultasi Solusi & Proposal')}`}
	        description={text('Jadwalkan konsultasi, permohonan demo aplikasi, atau diskusi proposal dengan tim ahli PT Artavel.')}
        canonicalPath="/kontak"
      />

      <Section bg="surface" padding="compact">
        <Container>
	          <Breadcrumb items={[{ label: text('Kontak') }]} onNavigate={onNavigate} />

          <div className="py-8 max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172536] font-heading mb-4">
	              {text('Konsultasikan Kebutuhan Organisasi Anda')}
            </h1>
            <p className="text-lg text-[#5C6B79] leading-relaxed">
	              {text('Tim konsultan Artavel siap membantu memetakan tantangan alur kerja, mendemonstrasikan modul Smarchlink®, dan menyusun skenario implementasi yang efisien.')}
            </p>
          </div>
        </Container>
      </Section>

      <Section bg="white" padding="normal">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Contact Info & Alternative Channels */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-[#172536] font-heading mb-2">
	                  {text('Saluran Komunikasi Resmi')}
                </h2>
                <p className="text-sm text-[#5C6B79]">
	                  {text('Silakan hubungi kami melalui formulir atau kontak langsung di bawah ini.')}
                </p>
              </div>

              <Card className="bg-[#F7F9FB] p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#36699C] flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
	                    <h3 className="font-bold text-sm text-[#172536]">{text('Alamat Perusahaan')}</h3>
	                    <p className="text-xs text-[#5C6B79] mt-0.5">
                        {profile.address.street}, {profile.address.city}, {profile.address.province}, {profile.address.postalCode}
                      </p>
                    {!profile.address.verified && (
                      <div className="mt-2">
	                      <PlaceholderNotice label={profile.address.label} size="sm" />
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-[#DBE4EB]">
                  <Mail className="w-5 h-5 text-[#7DBC5E] flex-shrink-0" aria-hidden="true" />
                  <div>
	                    <h3 className="font-bold text-sm text-[#172536]">{text('Email Resmi')}</h3>
	                    <a href={`mailto:${profile.contact.email}`} className="text-xs text-[#36699C] underline">
	                      {profile.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-[#DBE4EB]">
                  <Phone className="w-5 h-5 text-[#36699C] flex-shrink-0" aria-hidden="true" />
                  <div>
	                    <h3 className="font-bold text-sm text-[#172536]">{text('Telepon Fixed Line')}</h3>
	                    <p className="text-xs text-[#5C6B79]">{profile.contact.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-[#DBE4EB]">
                  <Globe2 className="w-5 h-5 text-[#36699C] flex-shrink-0" aria-hidden="true" />
                  <div>
	                    <h3 className="font-bold text-sm text-[#172536]">Website</h3>
	                    <a
                        href={`https://${profile.contact.website}`}
                        className="text-xs text-[#36699C] underline"
                        target="_blank"
                        rel="noreferrer"
                      >
	                      {profile.contact.website}
                      </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-[#DBE4EB]">
                  <Clock className="w-5 h-5 text-[#568F3E] flex-shrink-0" aria-hidden="true" />
                  <div>
	                    <h3 className="font-bold text-sm text-[#172536]">{text('Jam Layanan')}</h3>
	                    <p className="text-xs text-[#5C6B79]">{profile.contact.workingHours}</p>
                  </div>
                </div>
              </Card>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                aria-label={`Hubungi tim PT Artavel melalui WhatsApp di ${profile.contact.whatsapp}`}
                className="artavel-whatsapp-response-card p-6 rounded-2xl bg-[#EFF8EA] border border-[#7DBC5E]/40 flex items-center gap-4"
              >
                <MessageSquare className="artavel-whatsapp-response-icon w-8 h-8 text-[#568F3E] flex-shrink-0" aria-hidden="true" />
                <div>
	                  <h3 className="font-bold text-sm text-[#172536]">{text('Respons Cepat WhatsApp')}</h3>
                  <p className="text-xs text-[#5C6B79] mt-0.5">
	                    {text('Membutuhkan tanggapan cepat? Hubungi tim kami di ')}{profile.contact.whatsapp}
                  </p>
                </div>
              </a>

              <SocialMediaLinks
                tone="surface"
                showHeading
                showLabels
                className="artavel-contact-social-card rounded-2xl border border-[#DBE4EB] bg-white p-5 shadow-sm"
              />
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-[#DBE4EB] p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#172536] font-heading mb-6">
	                {text('Formulir Inkuiri & Permohonan Demo')}
              </h2>
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>

      <LocationMapSection />
    </>
  );
};
