import NodeCache from "node-cache";
import { NextFunction, Request, Response } from "express";

const cache = new NodeCache();

export const cacheMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const key = "__express__" + req.originalUrl || req.url;
  console.log(`Checking cache for ${key}`);
  const cacheValue = cache.get(key);
  if (cacheValue === undefined) {
    // need to override the send function to first cache the result
    const originalSend = res.send;
    res.send = (body?: unknown) => {
      if (body) {
        console.log(`Caching ${key}`);
        cache.set(key, body);
      }
      return originalSend(body);
    };
    next();
  } else {
    console.log(`Returning cached value for ${key}`);
    res.send(cacheValue);
  }
};
