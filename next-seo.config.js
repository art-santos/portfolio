/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "Arthur Santos",
  titleTemplate: "%s | Codes",
  defaultTitle: "Arthur Santos",
  description: "Arthur Santos Portifolio Website",
  canonical: "https://arthursantos.codes",
  openGraph: {
    url: "https://arthursantos.codes",
    title: "Arthur Santos",
    description: "Arthur Santos Portifolio Website",
    images: [
      {
        url: "https://og-image.vercel.app/**Arthur%20Santos**.png?theme=dark&md=1&fontSize=150px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-bw-logo.svg&widths=250&heights=250",
        alt: "arthursantos.codes og-image",
      },
    ],
    site_name: "arthursantos",
  },
  twitter: {
    handle: "@art-santos",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
