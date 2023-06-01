import winston from 'winston'

interface ILogger {
    info(message: string, context: string): void
    success(message: string, context: string): void
    error(message: string, context: string): void
}

class Logger implements ILogger {
    private logger: winston.Logger

    private constructor() {
        this.logger = winston.createLogger({
            level: 'info',
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.printf(({ level, message, timestamp, context }) => {
                    return `${timestamp} [${context}] [${level}]: ${message}`
                })
            ),
            transports: [
                new winston.transports.Console(),
                new winston.transports.File({ filename: 'error.log', level: 'error' }),
                new winston.transports.File({ filename: 'combined.log' }),
            ],
        })
    }

    public static getInstance(): Logger {
        return new Logger()
    }

    public info(message: string, context: string): void {
        this.logger.info(message, { context })
    }

    public success(message: string, context: string): void {
        this.logger.info(message, { context })
    }

    public error(message: string, context: string): void {
        this.logger.error(message, { context })
    }
}

export const logger: ILogger = Logger.getInstance()
