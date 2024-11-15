import type { ErrorHandler, HTTPResponseError } from 'hono/types';
import { createFactory, Factory } from 'hono/factory'
import { HTTPException } from 'hono/http-exception';

enum ErrorCode {
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    CONFLICT = 409,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    METHOD_NOT_ALLOWED = 405,
    UNPROCESSABLE_ENTITY = 422,
    TOO_MANY_REQUESTS = 429,
    INTERNAL_SERVER_ERROR = 500,
    GATEWAY_TIMEOUT = 504,

}
export const errorHandler: ErrorHandler = (err, ctx) => {
    const status = 200;
    let errorCode = 500;
    if (err instanceof HTTPException) {
        errorCode = err.status
    }
    const response = {
        code: errorCode,
        message: err.message,
        error: ErrorCode[errorCode],
        data: null,
    }
    return ctx.json(response, status)
}