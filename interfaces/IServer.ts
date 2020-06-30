import { Request, Response } from 'express';
import { UrlWithParsedQuery } from 'url';

export type IHandlerServer = (req: Request, res: Response, parsedUrl?: UrlWithParsedQuery) => Promise<void>