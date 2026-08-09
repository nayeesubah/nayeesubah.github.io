export interface TwitterLabel {
  label: string;
  value: string;
}

export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  canonical?: string;
  noIndex?: boolean;
  type?: "website" | "article" | "product";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  breadcrumbs?: { label: string; href: string }[];
  siteName?: string;
  url?: string;
  twitterLabels?: TwitterLabel[];
}

const defaults = {
  siteName: "Nayee Subah Foundation",
  title: "Nayee Subah Foundation — Empowering Communities, Building Futures",
  description:
    "Nayee Subah Foundation is a non-profit social organization dedicated to improving society through education, community development, humanitarian support, skill development, employment opportunities, health awareness, and social welfare.",
  url: "https://nayeesubah.github.io",
  image: "/images/og-default.jpg",
};

export function buildSEO(props: SEOProps) {
  const title = props.title
    ? `${props.title} | ${defaults.siteName}`
    : defaults.title;
  const description = props.description || defaults.description;
  const image = props.image || defaults.image;
  const url = props.canonical || props.url || defaults.url;
  const siteName = props.siteName || defaults.siteName;

  return {
    title,
    description,
    image,
    url,
    siteName,
    noIndex: props.noIndex,
    canonical: props.canonical,
    type: props.type || "website",
    publishedTime: props.publishedTime,
    modifiedTime: props.modifiedTime,
    author: props.author,
    breadcrumbs: props.breadcrumbs,
    twitterLabels: props.twitterLabels,
  };
}
