export interface IHistoryProps {
  history: IHistory;
  url: string;
}

export interface IHistory {
  id: number;
  title: string;
  history: string;
  description: string;
  author: string;
  private: boolean;
  created_at: string;
  imageArticle: { name: string, alternativeText: string, url: string };
}