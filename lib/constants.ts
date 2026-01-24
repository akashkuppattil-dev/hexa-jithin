// WhatsApp and Contact Information
export const CONTACT = {
  WHATSAPP_NUMBER: "919037872505",
  WHATSAPP_URL: "https://wa.me/919037872505",
  OFFICIAL_EMAIL: "hexamechlinichtools@gmail.com",
  OFFICIAL_PHONE: "+91 75106 38693",
  EMAIL: "hexamechlinichtools@gmail.com",
  PHONE: "+91 75106 38693",
  SERVICE_EMAIL: "service.hexamech@gmail.com",
  SERVICE_PHONE: "9847447677",
  SUPPORT_PHONES: ["9037872505", "9037872506"],
  BUSINESS_ADDRESS: "Ground Floor, Door No 17/346, Chulliparamba, Near Farook College, Calicut, Kerala – India",
  ADDRESS_URL: "https://maps.app.goo.gl/9R6vXv2m3Z1G6Z6K8",
  INSTAGRAM: "https://instagram.com/hexamech_linich_tools",
  FACEBOOK: "https://facebook.com/hexamechtools",
  YOUTUBE: "https://youtube.com/@hexamech",
}

export const SOCIAL_LINKS = {
  FACEBOOK: CONTACT.FACEBOOK,
  INSTAGRAM: CONTACT.INSTAGRAM,
  YOUTUBE: CONTACT.YOUTUBE,
  TWITTER: "#",
}

export const WHATSAPP_MESSAGES = {
  BULK_QUOTE: `Hi Hexamech, I need a bulk quote for automotive tools`,
  PRODUCT_INQUIRY: (productName: string, sku: string) =>
    `I'm interested in ${productName} (SKU: ${sku}). Please send details and pricing.`,
  GENERAL_INQUIRY: `Hi Hexamech, I'm interested in your products. Can you help me?`,
  SUPPORT: `Hi Hexamech, I need support with my order.`,
}
