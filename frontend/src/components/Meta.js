import React from 'react';
import { Helmet } from 'react-helmet';
const Meta = ({ title, descrition, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={descrition}></meta>
      <meta name='keyword' content={keywords}></meta>
    </Helmet>
  );
};
Meta.defaultProps = {
  title: 'Welcome to Anzamon',
  keywords: 'Best Products and Best Price',
  description: 'Best Products',
};
export default Meta;
