import redis from 'redis';
import { promisify } from 'util';

const redisClient = redis.createClient('redis://localhost:6379');

export const setRedis = promisify(redisClient.set).bind(redisClient);
export const getRedis = promisify(redisClient.get).bind(redisClient);

export default redisClient;