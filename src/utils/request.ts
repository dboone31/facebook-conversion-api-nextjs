import { NextRequest } from 'next/server';
import Cookies from 'universal-cookie';

/**
 * Get client IP address from request.
 *
 * @param req
 */
const getClientIpAddress = (req: NextRequest): string => {
  const ipAddress = (req.headers.get('x-real-ip') || req.ip);

  if (ipAddress) {
    return String(ipAddress);
  }

  const xForwardedFor = req.headers.get('x-forwarded-for') as string ?? '';

  return xForwardedFor.split(',')[0];
};

/**
 * Get client user agent from request.
 *
 * @param req
 */
const getClientUserAgent = (req: NextRequest): string => String(req.headers.get('user-agent') ?? '');

/**
 * Get client fbp from request cookie.
 *
 * @param req
 */
const getClientFbp = (req: NextRequest): string => {
  const cookies = new Cookies(req.cookies);

  if (!cookies.get('_fbp')) {
    return '';
  }

  return cookies.get('_fbp');
};

/**
 * Get client fbc from request query params or cookie.
 *
 * @param req
 */
const getClientFbc = (req: NextRequest): string => {
  if (req.referrer) {
    const url = new URL(req.referrer);

    if (url.searchParams.has('fbclid')) {
      return url.searchParams.get('fbclid') ?? '';
    }
  }

  const cookies = new Cookies(req.cookies);

  if (cookies.get('_fbc')) {
    return cookies.get('_fbc');
  }

  return '';
};

export {
  getClientIpAddress,
  getClientUserAgent,
  getClientFbp,
  getClientFbc,
};
