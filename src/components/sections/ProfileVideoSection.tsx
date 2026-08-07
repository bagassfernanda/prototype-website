import React from 'react';
import { Film, PlayCircle, Youtube } from 'lucide-react';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { Badge } from '../ui/Badge';
import { ScrollReveal } from '../ui/ScrollReveal';
import { useLanguage } from '../i18n/LanguageProvider';

interface ProfileVideoConfig {
  title: string;
  description: string;
  youtubeId?: string;
  mp4Url?: string;
  posterUrl: string;
}

const PROFILE_VIDEO: ProfileVideoConfig = {
  title: 'Video Profil PT Artavel',
  description:
    'Ruang ini disiapkan untuk menampilkan profil perusahaan, dokumentasi layanan, demo produk, atau video animasi resmi Artavel.',
  youtubeId: '',
  mp4Url: '/media/artavel-profile-video.mp4',
  posterUrl: '/media/artavel-profile-thumbnail.png'
};

export const ProfileVideoSection: React.FC = () => {
  const { text } = useLanguage();
  const hasYoutubeVideo = Boolean(PROFILE_VIDEO.youtubeId);
  const hasDirectVideo = Boolean(PROFILE_VIDEO.mp4Url);

  return (
    <Section
      bg="dark-blue"
      padding="normal"
      id="video-profil-artavel"
      className="bg-[linear-gradient(135deg,#071927_0%,#173955_45%,#1F5D4B_100%)]"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-5">
            <ScrollReveal direction="left">
            <Badge variant="green" size="md" className="mb-5 bg-white/10 text-white border-white/18">
	              {text('Profil Perusahaan')}
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading leading-tight">
	              {text('Ceritakan kapabilitas Artavel melalui video yang formal dan meyakinkan.')}
            </h2>
            <p className="mt-5 text-base sm:text-lg text-white/74 leading-relaxed">
	              {text(PROFILE_VIDEO.description)}
            </p>
            </ScrollReveal>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <ScrollReveal className="h-full" direction="scale" delay={90}>
                <div className="artavel-profile-info-card h-full rounded-xl border border-white/16 bg-white/10 p-4">
                  <Youtube className="artavel-profile-info-card-icon h-5 w-5 text-[#8FD871]" aria-hidden="true" />
	                  <div className="mt-3 text-sm font-bold">{text('Kanal Resmi')}</div>
	                  <p className="mt-1 text-xs text-white/65">{text('Profil perusahaan dan demo solusi.')}</p>
                </div>
              </ScrollReveal>
              <ScrollReveal className="h-full" direction="scale" delay={160}>
                <div className="artavel-profile-info-card h-full rounded-xl border border-white/16 bg-white/10 p-4">
                  <Film className="artavel-profile-info-card-icon h-5 w-5 text-[#8BC4FF]" aria-hidden="true" />
	                  <div className="mt-3 text-sm font-bold">{text('Dokumentasi Layanan')}</div>
	                  <p className="mt-1 text-xs text-white/65">{text('Implementasi, pelatihan, dan pendampingan.')}</p>
                </div>
              </ScrollReveal>
            </div>
          </div>

          <ScrollReveal className="lg:col-span-7" direction="right" delay={130}>
            <div className="relative overflow-hidden rounded-2xl border border-white/18 bg-black shadow-[0_28px_80px_rgba(0,0,0,0.35)] aspect-video">
              {hasYoutubeVideo ? (
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube-nocookie.com/embed/${PROFILE_VIDEO.youtubeId}`}
                  title={PROFILE_VIDEO.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : hasDirectVideo ? (
                <video
                  className="artavel-profile-video-media h-full w-full object-cover"
                  controls
                  poster={PROFILE_VIDEO.posterUrl}
                  preload="metadata"
                  src={PROFILE_VIDEO.mp4Url}
                >
	                  {text('Browser Anda tidak mendukung pemutar video HTML5.')}
                </video>
              ) : (
                <>
                  <img
                    src={PROFILE_VIDEO.posterUrl}
                    alt="Ruang rapat modern untuk presentasi profil perusahaan teknologi"
                    className="h-full w-full object-cover opacity-72"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#071927]/88 via-[#173955]/54 to-[#568F3E]/30" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-white/28 bg-white/12 text-white backdrop-blur">
                      <PlayCircle className="h-8 w-8" aria-hidden="true" />
                    </div>
	                    <h3 className="text-2xl font-extrabold font-heading">{text(PROFILE_VIDEO.title)}</h3>
                    <p className="mt-3 max-w-xl text-sm text-white/72 leading-relaxed">
	                      {text('Draf - tautan video profil resmi belum diisi.')}
                    </p>
                  </div>
                </>
              )}
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </Section>
  );
};
