import { config } from 'dotenv';

config();

export const NODE_ENV: string = process.env.NODE_ENV || 'development';
export const PORT: number = Number(process.env.PORT) || 3000;

export const STRAPI_CMS: string = process.env.STRAPI_CMS;
export const STRAPI_USER: string = process.env.STRAPI_USER;
export const STRAPI_PASSWORD: string = process.env.STRAPI_PASSWORD;

export const FACEBOOK_CLIENT_ID = process.env.FACEBOOK_CLIENT_ID;
export const FACEBOOK_SECRET = process.env.FACEBOOK_SECRET;

export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
export const GOOGLE_SECRET = process.env.GOOGLE_SECRET;

export const TWITTER_CLIENT_ID = process.env.TWITTER_CLIENT_ID;
export const TWITTER_SECRET = process.env.TWITTER_SECRET;