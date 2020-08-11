import { useEffect } from 'react';
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';

import SEO from '../components/SEO';
import Layout from '../components/layout/Layout';
import HistoryDescription from '../components/articleList/HistoryDescription';

import styles from '../styles/components/_header.module.scss';
import { IHistory } from '../interfaces/Histories.interface';
import { getHistories } from '../services/fetchHistories.services';
import { STRAPI_CMS } from '../../config';

const Home: NextPage<IHomeProps> = ({ isMobile, histories, url }) => {

  useEffect(() => { }, [])

  return (
    <Layout isMobile={isMobile}>
      <SEO title="Home" />
      {
        histories.map((history, index) =>
          <HistoryDescription key={index} url={url} history={history} />)
      }
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  let histories: IHistory[];

  try {
    histories = await getHistories();
  } catch (err) { }

  return { props: { histories, url: STRAPI_CMS } }
}

interface IHomeProps {
  isMobile: boolean;
  histories: IHistory[];
  url: string;
}

export default Home;