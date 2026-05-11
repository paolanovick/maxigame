// Número de la agencia (formato internacional sin + ni espacios).
// Para Argentina móvil: 549 + código de área + número.
// Si querés cambiarlo, modificá esta constante.
export const WHATSAPP_NUMBER = '5491136174989';

export function buildWhatsappUrl(message) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}
