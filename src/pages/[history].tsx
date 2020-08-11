import { useEffect, useState } from 'react';
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import { Container } from 'react-bootstrap';
import Shodown from 'showdown';

import styles from '../styles/components/_history.module.scss';
import Layout from '../components/layout/Layout';
import { getRedis } from '../../server/services/promisifyRedis';
import { fetchHistoriesAndGetBySlug } from '../services/histories.services';
import { getHistoryById } from '../services/fetchHistories.services';
import { IHistoryProps } from '../interfaces/Histories.interface';
import { STRAPI_CMS } from '../../config';
import RelatedHistories from '../components/related-articles/RelatedHistories';

const converter = new Shodown.Converter();

const History: NextPage<IHistoryProps> = ({ history, url, isMobile }) => {
  const [historyHtml, setHtml] = useState('');

  useEffect(() => {
    const html = converter.makeHtml(history.history);
    setHtml(html);
  }, []);

  return (
    <Layout isMobile={isMobile}>
      <Container>
        <img className={styles.historyImage} src={`${url}${history.imageArticle[0].url}`} />
        <h3 className={styles.title}>{ history.title }</h3>
        <p
          className={styles.history}
          dangerouslySetInnerHTML={{ __html: historyHtml }}/>

          <RelatedHistories articles={[]} />
      </Container>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    const historySlug: string = Array.isArray(ctx.params.history) ? ctx.params.history[0] : ctx.params.history;

    /**
     *  In case historyId is already setup on redis database 
     *  it will search the history by id
     */
    const historyId = await getRedis(historySlug);

    if (historyId) {
      const history = await getHistoryById(historyId);
      return { props: { history, url: STRAPI_CMS } };
    }

    const history = await fetchHistoriesAndGetBySlug(historySlug);
    return { props: { history: history || Boolean(history), url: STRAPI_CMS } };
  } catch (err) {
    console.error('Error History', err.message);
  }

  return { props: { history: false, url: STRAPI_CMS } }
}

export default History;