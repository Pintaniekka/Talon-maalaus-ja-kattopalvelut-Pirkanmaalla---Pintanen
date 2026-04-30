// Strict but safe Finnish phone number validation.
// Sanitizes the input (strips spaces, hyphens, parentheses) and checks:
// - exactly 8, 9 or 10 digits
// - not all the same digit
// - not a simple ascending sequence
// - not a simple descending sequence

export const sanitizePhone = (raw: string): string =>
  (raw || '').replace(/[\s\-()]/g, '');

const ASCENDING = '0123456789';
const DESCENDING = '9876543210';

export const isValidFinnishMobile = (raw: string): boolean => {
  const digits = sanitizePhone(raw);

  if (!/^\d{8,10}$/.test(digits)) return false;

  // All identical digits
  if (/^(\d)\1+$/.test(digits)) return false;

  // Ascending sequence (e.g. 12345678, 012345678, 0123456789)
  if (ASCENDING.includes(digits)) return false;

  // Descending sequence (e.g. 87654321, 987654321, 9876543210)
  if (DESCENDING.includes(digits)) return false;

  return true;
};

// Combine into international format. Strips a single leading 0 if present
// (so users can type "40 123 4567" or "040 123 4567" — both work).
export const formatToInternational = (raw: string): string => {
  let digits = sanitizePhone(raw);
  if (digits.startsWith('0')) digits = digits.slice(1);
  return `+358${digits}`;
};

export const PHONE_ERROR_MESSAGE =
  'Tämä ei vaikuta oikealta puhelinnumerolta. Tarkistathan numerosi.';

export const PHONE_CHECKING_LABEL = 'Tarkistetaan puhelinnumeroa...';

export const PHONE_PLACEHOLDER = '40 123 4567';
