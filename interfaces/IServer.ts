import { Request, Response } from 'express';
import { UrlWithParsedQuery } from 'url';
import { IncomingMessage } from 'http';

export type IHandlerServer = (req: Request, res: Response, parsedUrl?: UrlWithParsedQuery) => Promise<void>

export interface IServerSideRequest extends IncomingMessage {
  user?: string;
  flash?: Function;
}