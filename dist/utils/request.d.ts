import { NextRequest } from 'next/server';
/**
 * Get client IP address from request.
 *
 * @param req
 */
declare const getClientIpAddress: (req: NextRequest) => string;
/**
 * Get client user agent from request.
 *
 * @param req
 */
declare const getClientUserAgent: (req: NextRequest) => string;
/**
 * Get client fbp from request cookie.
 *
 * @param req
 */
declare const getClientFbp: (req: NextRequest) => string;
/**
 * Get client city from request
 *
 * @param req
 * @returns string
 */
declare const getClientCity: (req: NextRequest) => string;
/**
 * Get client fbc from request query params or cookie.
 *
 * @param req
 */
declare const getClientFbc: (req: NextRequest) => string;
export { getClientIpAddress, getClientUserAgent, getClientFbp, getClientFbc, getClientCity, };
