/**
 * Logger abstraction - prevents leaking sensitive data or production console pollution
 */
const isDev = Boolean((import.meta as unknown as { env?: { DEV?: boolean } }).env?.DEV);

export const logger = {
  info: (message: string, ...args: unknown[]) => {
    if (isDev) {
      console.log(`[INFO] [${new Date().toISOString()}] ${message}`, ...args);
    }
  },
  warn: (message: string, ...args: unknown[]) => {
    if (isDev) {
      console.warn(`[WARN] [${new Date().toISOString()}] ${message}`, ...args);
    }
  },
  error: (message: string, ...args: unknown[]) => {
    console.error(`[ERROR] [${new Date().toISOString()}] ${message}`, ...args);
  }
};
