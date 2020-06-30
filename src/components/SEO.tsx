import Head from 'next/head';
import { FunctionComponent } from "react";

const SEO: FunctionComponent<ISeoProps> = ({ title, description }) => {
  return (
    <Head>
      <title>{` ${title} | 3am`}</title>
      <meta name="description" content={description || '3am histories'} />
    </Head>
  );
}

interface ISeoProps {
  title?: string;
  description?: string;
}

export default SEO;