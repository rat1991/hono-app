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

enum InternalErrorCode {
    UNKNOWN_ERROR = 1000,
    VALIDATION_ERROR = 1001,
    AUTHENTICATION_ERROR = 1002,
    PERMISSION_ERROR = 1003,
    NOT_IMPLEMENTED_ERROR = 1004,
    DATABASE_ERROR = 1005,
    DATA_NOT_FOUND_ERROR = 1006,
    DATA_CONFLICT_ERROR = 1007,
    DATA_DUPLICATE_ERROR = 1008,
    DATA_VALIDATION_ERROR = 1009,
    DATA_FORMAT_ERROR = 1010,
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