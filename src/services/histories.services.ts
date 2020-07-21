import { setRedis } from "../../server/services/promisifyRedis";
import { getHistories } from "./fetchHistories.services";
import { IHistory } from "../interfaces/Histories.interface";

export const fetchHistoriesAndGetBySlug = async (historySlug: string): Promise<IHistory> => {
  const histories = await getHistories();

  const history = histories.find(({title}) => {
    const slugTitle = title.toLowerCase().replace(/(\,|\.|\:|\;)/g, '').replace(/\s/g, '-');
    return slugTitle === historySlug;
  });

  if (history) {
    console.log('saving id on redis');
    setRedis(historySlug, history.id);
  }

  return history;
}