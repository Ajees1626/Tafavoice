import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE_CONFIG } from '../utils/constants';

const SEO = ({ data }) => {
  const {
    title,
    description,
    keywords = [],
    image = '/api/placeholder/1200/630',
    url = '',
    type = 'website',
  } = data;

  const fullTitle = title ? `${title} | ${SITE_CONFIG.name}` : SITE_CONFIG.title;
  const fullUrl = url ? `${SITE_CONFIG.url}${url}` : SITE_CONFIG.url;
  const fullImage = image.startsWith('http') ? image : `${SITE_CONFIG.url}${image}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    author: {
      '@type': 'Person',
      name: SITE_CONFIG.author,
      email: SITE_CONFIG.email,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
    },
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || SITE_CONFIG.description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      <meta name="author" content={SITE_CONFIG.author} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || SITE_CONFIG.description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content={SITE_CONFIG.name} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || SITE_CONFIG.description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:site" content={SITE_CONFIG.social.twitter} />
      <meta name="twitter:creator" content={SITE_CONFIG.social.twitter} />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#0ea5e9" />
      <meta name="msapplication-TileColor" content="#0ea5e9" />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
};

export default SEO;

