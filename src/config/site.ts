export const SITE_CONFIG = {
  businessName: "Granja Mamay",
  legalName: "Inversiones Mamay E.I.R.L.",
  ruc: "20509650228",
  whatsappNumber: "51994265625", // Formato internacional sin '+' ni espacios requerido por wa.me
  phoneDisplay: "+51 994 265 625",
  phoneShort: "994 265 625",
  facebookUrl: "https://www.facebook.com/Granjamamay",
  isDemo: true, // Bloquea indexación en Google mientras sea un link temporal de venta
} as const;

export function getWhatsAppUrl(message?: string): string {
  const baseUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}`;
  if (!message) return baseUrl;
  return `${baseUrl}?text=${encodeURIComponent(message)}`;
}
