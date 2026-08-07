import React, { useState } from 'react';
import { Send, CheckCircle2, AlertTriangle, ShieldCheck, MessageCircle } from 'lucide-react';
import { ContactFormValues, ContactSubmissionResult } from '../../types';
import { sanitizeString, validateEmail } from '../../utils/sanitizer';
import { logger } from '../../utils/logger';
import { COMPANY_PROFILE } from '../../content/company';
import { Button } from '../ui/Button';
import { useLanguage } from '../i18n/LanguageProvider';

interface ContactFormProps {
  onSuccess?: (referenceId: string) => void;
  id?: string;
}

const CONSULTATION_WHATSAPP_NUMBER = '6281331921019';

export const ContactForm: React.FC<ContactFormProps> = ({
  onSuccess,
  id = 'artavel-contact-form'
}) => {
  const { text } = useLanguage();
  const [formData, setFormData] = useState<ContactFormValues>({
    fullName: '',
    organizationName: '',
    role: '',
    email: '',
    phoneNumber: '',
    needCategory: 'pelayanan-publik',
    summary: '',
    estimatedTimeline: 'secepatnya',
    privacyAgreed: false,
    honeypot: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<ContactSubmissionResult | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
	      newErrors.fullName = text('Nama lengkap wajib diisi.');
    }

    if (!formData.organizationName.trim()) {
	      newErrors.organizationName = text('Nama instansi atau perusahaan wajib diisi.');
    }

    if (!formData.email.trim()) {
	      newErrors.email = text('Email resmi wajib diisi.');
    } else if (!validateEmail(formData.email)) {
	      newErrors.email = text('Format email tidak valid.');
    }

    if (!formData.summary.trim()) {
	      newErrors.summary = text('Mohon sampaikan ringkasan kebutuhan organisasi Anda.');
    } else if (formData.summary.trim().length < 15) {
	      newErrors.summary = text('Ringkasan kebutuhan minimal 15 karakter.');
    }

    if (!formData.privacyAgreed) {
	      newErrors.privacyAgreed = text('Anda harus menyetujui Kebijakan Privasi.');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const getNeedCategoryLabel = (value: string) => {
    const labels: Record<string, string> = {
      'pelayanan-publik': 'Pelayanan Publik & Perizinan (SIPPADU)',
      kearsipan: 'Manajemen Dokumen & Arsip (Archive)',
      'tata-naskah': 'Tata Naskah Dinas Elektronik (TNDE)',
      antrean: 'Sistem Antrean & Tracking (SIANTER)',
      digitalisasi: 'Digitalisasi & Alih Media Dokumen',
      'keamanan-integrasi': 'Keamanan Data & Integrasi API',
      lainnya: 'Lainnya / Konsultasi Umum'
    };

    return text(labels[value] || 'Lainnya / Konsultasi Umum');
  };

  const createReferenceId = () => `ART-${Math.floor(100000 + Math.random() * 900000)}`;

  const getSanitizedPayload = () => ({
    fullName: sanitizeString(formData.fullName),
    organizationName: sanitizeString(formData.organizationName),
    role: sanitizeString(formData.role),
    email: sanitizeString(formData.email),
    phoneNumber: sanitizeString(formData.phoneNumber || ''),
    needCategory: sanitizeString(formData.needCategory),
    needCategoryLabel: getNeedCategoryLabel(formData.needCategory),
    summary: sanitizeString(formData.summary),
    estimatedTimeline: sanitizeString(formData.estimatedTimeline || ''),
    submittedAt: new Date().toLocaleString('id-ID', {
      dateStyle: 'long',
      timeStyle: 'short'
    })
  });

  const buildConsultationMessage = (
    referenceId: string,
    payload: ReturnType<typeof getSanitizedPayload>
  ) => {
    return [
      'Permohonan Konsultasi Website PT Artavel',
      `Nomor Referensi: ${referenceId}`,
      '',
      `Nama Lengkap: ${payload.fullName}`,
      `Instansi / Perusahaan: ${payload.organizationName}`,
      payload.role ? `Jabatan / Unit Kerja: ${payload.role}` : '',
      `Email: ${payload.email}`,
      payload.phoneNumber ? `Telepon / WhatsApp: ${payload.phoneNumber}` : '',
      `Kategori Kebutuhan: ${payload.needCategoryLabel}`,
      payload.estimatedTimeline ? `Estimasi Timeline: ${payload.estimatedTimeline}` : '',
      '',
      'Ringkasan Kebutuhan:',
      payload.summary,
      '',
      `Waktu Pengisian: ${payload.submittedAt}`
    ]
      .filter(Boolean)
      .join('\n');
  };

  const openEmailClient = (referenceId: string, payload: ReturnType<typeof getSanitizedPayload>) => {
    const subject = encodeURIComponent(
      `Permohonan Konsultasi Artavel - ${payload.organizationName} (${referenceId})`
    );
    const body = encodeURIComponent(buildConsultationMessage(referenceId, payload));
    window.location.href = `mailto:${COMPANY_PROFILE.contact.email}?subject=${subject}&body=${body}`;
  };

  const openWhatsAppConsultation = (
    referenceId: string,
    payload: ReturnType<typeof getSanitizedPayload>
  ) => {
    const message = encodeURIComponent(buildConsultationMessage(referenceId, payload));
    window.open(`https://wa.me/${CONSULTATION_WHATSAPP_NUMBER}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check for bots
    if (formData.honeypot) {
      logger.warn('Spam submission intercepted via honeypot');
      return;
    }

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 450));

      const sanitizedPayload = getSanitizedPayload();
      logger.info('Form payload processed securely:', sanitizedPayload);

      const generatedRefId = createReferenceId();
      openEmailClient(generatedRefId, sanitizedPayload);

      const result: ContactSubmissionResult = {
        success: true,
        referenceId: generatedRefId,
        message: text('Draft email konsultasi sudah disiapkan di aplikasi email Anda. Mohon periksa kembali, lalu tekan kirim.')
      };

      setSubmissionResult(result);
      if (onSuccess) onSuccess(generatedRefId);
    } catch (err) {
      logger.error('Error submitting contact form:', err);
      setSubmissionResult({
        success: false,
	        message: text('Gagal mengirimkan formulir. Mohon coba beberapa saat lagi atau hubungi via WhatsApp/Email.')
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppConsultation = () => {
    if (formData.honeypot) {
      logger.warn('Spam submission intercepted via honeypot');
      return;
    }

    if (!validate()) {
      return;
    }

    const sanitizedPayload = getSanitizedPayload();
    const generatedRefId = createReferenceId();

    logger.info('WhatsApp consultation payload processed securely:', sanitizedPayload);
    openWhatsAppConsultation(generatedRefId, sanitizedPayload);

    setSubmissionResult({
      success: true,
      referenceId: generatedRefId,
      message: text('Pesan WhatsApp konsultasi sudah dibuka. Mohon periksa kembali, lalu tekan kirim.')
    });
    if (onSuccess) onSuccess(generatedRefId);
  };

  if (submissionResult?.success) {
    return (
      <div className="bg-[#EFF8EA] border border-[#7DBC5E]/40 rounded-2xl p-8 text-center animate-in fade-in duration-300">
        <div className="w-16 h-16 rounded-full bg-[#7DBC5E]/20 text-[#568F3E] flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-10 h-10" aria-hidden="true" />
        </div>
        <h3 className="text-2xl font-bold text-[#172536] font-heading mb-2">
	          {text('Terima Kasih, Permohonan Anda Terkirim')}
        </h3>
        <p className="text-[#5C6B79] text-base max-w-lg mx-auto mb-6">
          {submissionResult.message}
        </p>

        <div className="bg-white rounded-xl p-4 inline-block border border-[#DBE4EB] mb-6">
	          <span className="text-xs text-[#5C6B79] block">{text('Nomor Referensi Konsultasi:')}</span>
          <span className="text-lg font-mono font-bold text-[#36699C]">
            {submissionResult.referenceId}
          </span>
        </div>

        <div>
          <Button
            variant="outline"
            onClick={() => {
              setSubmissionResult(null);
              setFormData({
                fullName: '',
                organizationName: '',
                role: '',
                email: '',
                phoneNumber: '',
                needCategory: 'pelayanan-publik',
                summary: '',
                estimatedTimeline: 'secepatnya',
                privacyAgreed: false,
                honeypot: ''
              });
            }}
          >
	            {text('Kirimkan Permohonan Lain')}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form id={id} onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Honeypot field (hidden from real users) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website-field">Website</label>
        <input
          type="text"
          id="website-field"
          name="honeypot"
          tabIndex={-1}
          value={formData.honeypot}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Nama Lengkap */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-semibold text-[#172536] mb-2">
	            {text('Nama Lengkap')} <span className="text-[#D26353]">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? 'fullName-error' : undefined}
	            placeholder={text('Contoh: Bpk. Hendra Wijaya, S.STP')}
            value={formData.fullName}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl border text-[#172536] placeholder-[#5C6B79]/60 focus:outline-none focus:ring-2 focus:ring-[#36699C] transition-all ${
              errors.fullName ? 'border-[#D26353] bg-[#FBEEEA]/30' : 'border-[#DBE4EB] bg-white'
            }`}
          />
          {errors.fullName && (
            <p id="fullName-error" className="mt-1.5 text-xs text-[#A9473B] font-medium">
              {errors.fullName}
            </p>
          )}
        </div>

        {/* Instansi / Perusahaan */}
        <div>
          <label htmlFor="organizationName" className="block text-sm font-semibold text-[#172536] mb-2">
	            {text('Instansi / Perusahaan')} <span className="text-[#D26353]">*</span>
          </label>
          <input
            type="text"
            id="organizationName"
            name="organizationName"
            required
            aria-invalid={!!errors.organizationName}
            aria-describedby={errors.organizationName ? 'organizationName-error' : undefined}
	            placeholder={text('Contoh: Dinas PMPTSP Kab. Malang')}
            value={formData.organizationName}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl border text-[#172536] placeholder-[#5C6B79]/60 focus:outline-none focus:ring-2 focus:ring-[#36699C] transition-all ${
              errors.organizationName ? 'border-[#D26353] bg-[#FBEEEA]/30' : 'border-[#DBE4EB] bg-white'
            }`}
          />
          {errors.organizationName && (
            <p id="organizationName-error" className="mt-1.5 text-xs text-[#A9473B] font-medium">
              {errors.organizationName}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Jabatan */}
        <div>
          <label htmlFor="role" className="block text-sm font-semibold text-[#172536] mb-2">
	            {text('Jabatan / Unit Kerja')}
          </label>
          <input
            type="text"
            id="role"
            name="role"
	            placeholder={text('Contoh: Kepala Bidang Pelayanan / IT Manager')}
            value={formData.role}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-[#DBE4EB] text-[#172536] placeholder-[#5C6B79]/60 focus:outline-none focus:ring-2 focus:ring-[#36699C] transition-all bg-white"
          />
        </div>

        {/* Email Resmi */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-[#172536] mb-2">
	            {text('Email Resmi')} <span className="text-[#D26353]">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            placeholder="nama@instansi.go.id / nama@perusahaan.com"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl border text-[#172536] placeholder-[#5C6B79]/60 focus:outline-none focus:ring-2 focus:ring-[#36699C] transition-all ${
              errors.email ? 'border-[#D26353] bg-[#FBEEEA]/30' : 'border-[#DBE4EB] bg-white'
            }`}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-[#A9473B] font-medium">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Nomor Telepon / WhatsApp */}
        <div>
          <label htmlFor="phoneNumber" className="block text-sm font-semibold text-[#172536] mb-2">
	            {text('Nomor Telepon / WhatsApp (Opsional)')}
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="0811xxxxxxx"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-[#DBE4EB] text-[#172536] placeholder-[#5C6B79]/60 focus:outline-none focus:ring-2 focus:ring-[#36699C] transition-all bg-white"
          />
        </div>

        {/* Kategori Kebutuhan */}
        <div>
          <label htmlFor="needCategory" className="block text-sm font-semibold text-[#172536] mb-2">
	            {text('Kategori Kebutuhan Utama')}
          </label>
          <select
            id="needCategory"
            name="needCategory"
            value={formData.needCategory}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-[#DBE4EB] text-[#172536] bg-white focus:outline-none focus:ring-2 focus:ring-[#36699C] transition-all"
          >
	            <option value="pelayanan-publik">{text('Pelayanan Publik & Perizinan (SIPPADU)')}</option>
	            <option value="kearsipan">{text('Manajemen Dokumen & Arsip (Archive)')}</option>
	            <option value="tata-naskah">{text('Tata Naskah Dinas Elektronik (TNDE)')}</option>
	            <option value="antrean">{text('Sistem Antrean & Tracking (SIANTER)')}</option>
	            <option value="digitalisasi">{text('Digitalisasi & Alih Media Dokumen')}</option>
	            <option value="keamanan-integrasi">{text('Keamanan Data & Integrasi API')}</option>
	            <option value="lainnya">{text('Lainnya / Konsultasi Umum')}</option>
          </select>
        </div>
      </div>

      {/* Ringkasan Kebutuhan */}
      <div>
        <label htmlFor="summary" className="block text-sm font-semibold text-[#172536] mb-2">
	          {text('Ringkasan Kebutuhan Organisasi')} <span className="text-[#D26353]">*</span>
        </label>
        <textarea
          id="summary"
          name="summary"
          rows={4}
          required
          aria-invalid={!!errors.summary}
          aria-describedby={errors.summary ? 'summary-error' : undefined}
	          placeholder={text('Jelaskan tantangan yang dihadapi instansi Anda, estimasi pengguna, atau modul yang paling diprioritaskan...')}
          value={formData.summary}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-xl border text-[#172536] placeholder-[#5C6B79]/60 focus:outline-none focus:ring-2 focus:ring-[#36699C] transition-all ${
            errors.summary ? 'border-[#D26353] bg-[#FBEEEA]/30' : 'border-[#DBE4EB] bg-white'
          }`}
        />
        {errors.summary && (
          <p id="summary-error" className="mt-1.5 text-xs text-[#A9473B] font-medium">
            {errors.summary}
          </p>
        )}
      </div>

      {/* Privacy Agreement Checkbox */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="privacyAgreed"
            checked={formData.privacyAgreed}
            onChange={handleChange}
            className="mt-1 w-4 h-4 text-[#36699C] rounded border-[#DBE4EB] focus:ring-[#36699C]"
          />
          <span className="text-xs text-[#5C6B79] leading-normal">
	            {text('Saya menyetujui bahwa data yang diisi digunakan oleh PT Artavel untuk keperluan konsultasi dan penawaran layanan sesuai ')}
            <a href="/kebijakan-privasi" className="text-[#36699C] underline hover:text-[#244F78]">
	              {text('Kebijakan Privasi')}
            </a>.
          </span>
        </label>
        {errors.privacyAgreed && (
          <p className="mt-1.5 text-xs text-[#A9473B] font-medium">
            {errors.privacyAgreed}
          </p>
        )}
      </div>

      {submissionResult && !submissionResult.success && (
        <div className="p-4 rounded-xl bg-[#FBEEEA] border border-[#D26353]/30 text-[#A9473B] text-sm flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
          <span>{submissionResult.message}</span>
        </div>
      )}

      {/* Submit Buttons */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:max-w-4xl">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          isLoading={isSubmitting}
          className="artavel-contact-submit-button w-full"
          rightIcon={<Send className="w-5 h-5" aria-hidden="true" />}
        >
	          {text('Kirim Permohonan Konsultasi')}
        </Button>
        <Button
          type="button"
          variant="success"
          size="lg"
          className="artavel-contact-whatsapp-button w-full"
          rightIcon={<MessageCircle className="w-5 h-5" aria-hidden="true" />}
          onClick={handleWhatsAppConsultation}
        >
          {text('Kirim via WhatsApp')}
        </Button>
      </div>

      <div className="flex items-center gap-2 text-xs text-[#5C6B79] pt-2">
        <ShieldCheck className="w-4 h-4 text-[#568F3E]" aria-hidden="true" />
	        <span>{text('Kerahasiaan data instansi Anda dilindungi dan tidak diperjualbelikan.')}</span>
      </div>
    </form>
  );
};
