import { createContext } from 'react';

import { IFlashError } from '../../interfaces/models/user.interface';

export const FlashErrorContext = createContext<IFlashError>({ error: [] });