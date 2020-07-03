import React from 'react';
import { IUser } from '../../interfaces/models/user.interface';

export const UserContext = React.createContext<IUser>(null);