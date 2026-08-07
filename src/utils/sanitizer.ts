/**
 * Input sanitization utility for forms and user inputs
 */
export function sanitizeString(input: string): string {
  if (!input) return '';
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
    .trim();
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

export function formatPhoneNumber(phone?: string): string {
  if (!phone) return '-';
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.startsWith('0')) {
    return '+62 ' + cleaned.substring(1).replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
  }
  return phone;
}
