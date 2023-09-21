import React, { useMemo } from 'react';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

const metaDataQuery = graphql`
  query SEO {
    site {
      siteMetadata {
        siteUrl
        title
        titleTemplate
        description
        image
      }
    }
  }
`;

const Seo = () => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(metaDataQuery);

  const seo = useMemo(() => {
    const { title, description, image, siteUrl } = site.siteMetadata;
    return {
      title,
      description,
      image: `${siteUrl}${image}`,
      url: `${siteUrl}${pathname}`,
    };
  }, [site.siteMetadata]);

  return (
    <>
      <html lang="en" />
      <title>{`${seo.title} | Portfolio`}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <link rel="icon" href="../images/gatsby-icon.ico" />
      {/* site verification tag for old domain */}
      <meta
        name="google-site-verification"
        content="E1-JaP5hm5_cK1ozAzEdl-352TaKNqMu6rijM5Wa-Xo"
      />
      {/* site verification tag for new domain */}
      <meta
        name="google-site-verification"
        content="NZ7VTmfvQDXjyW4OtwkRzIiOmD-j08nS4J7DnVrFQVQ"
      />
      {seo.url && <meta property="og:url" content={seo.url} />}

      {seo.title && <meta property="og:title" content={seo.title} />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      {seo.image && <meta property="og:image" content={seo.image} />}

      <meta property="og:type" content="website" />
    </>
  );
};

export default Seo;
