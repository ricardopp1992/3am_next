import { IncomingMessage } from "http";

import { IUser } from './models/user.interface';

export interface IAppIncommingMessage extends IncomingMessage {
  user?: IUser;
}