import { IncomingMessage } from "http";

export const getIsMobile = (req: IncomingMessage): boolean => {
  const userAgent = req.headers['user-agent'];
  const deviceRegex = /Mobile/;
  const isMobile: boolean = deviceRegex.test(userAgent);

  return isMobile;
}