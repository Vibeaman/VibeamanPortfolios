import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { photographerInfo } from '@/data/photographer';

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  type?: 'website' | 'article';
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const SOCIAL_PREVIEW_PATH = '/social-preview.png';

/**
 * SEO component for managing page meta tags using react-helmet-async.
 * Handles title, description, canonical, Open Graph, and Twitter Card tags.
 */
export function SEOHead({
  title,
  description,
  image,
  type = 'website',
  jsonLd
}: SEOHeadProps) {
  const location = useLocation();

  const fullTitle = title
    ? `${title} | ${photographerInfo.name}`
    : `${photographerInfo.name} - ${photographerInfo.tagline}`;

  const fullDescription = description || photographerInfo.heroIntroduction;

  const baseUrl = window.location.origin;
  const fullUrl = `${baseUrl}${location.pathname}`;

  const imagePath = image || SOCIAL_PREVIEW_PATH;
  const absoluteImage = imagePath.startsWith('http')
    ? imagePath
    : `${baseUrl}${imagePath}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <link rel="canonical" href={fullUrl} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={absoluteImage} />
      <meta property="og:image:alt" content={`${photographerInfo.name} - ${photographerInfo.tagline}`} />
      <meta property="og:site_name" content={photographerInfo.name} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={absoluteImage} />
      <meta name="twitter:image:alt" content={`${photographerInfo.name} - ${photographerInfo.tagline}`} />

      <meta name="author" content={photographerInfo.name} />

      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}
