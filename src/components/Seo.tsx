import React from 'react';
import { Helmet } from 'react-helmet';
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
  const { title, titleTemplate, description, image, siteUrl } =
    site.siteMetadata;

  const seo = {
    title,
    description,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <html lang="en" />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <link rel="icon" href="../images/gatsby-icon.ico" />
      <meta
        name="google-site-verification"
        content="E1-JaP5hm5_cK1ozAzEdl-352TaKNqMu6rijM5Wa-Xo"
      />
      {seo.url && <meta property="og:url" content={seo.url} />}

      {seo.title && <meta property="og:title" content={seo.title} />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      {seo.image && <meta property="og:image" content={seo.image} />}

      <meta property="og:type" content="website" />
    </Helmet>
  );
};

export default Seo;
