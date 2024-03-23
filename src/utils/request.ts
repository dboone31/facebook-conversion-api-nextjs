import { NextRequest } from 'next/server';

/**
 * Get client IP address from request.
 *
 * @param req
 */
const getClientIpAddress = (req: NextRequest): string => {
  const ipAddress = req.ip;

  if (ipAddress) {
    return String(ipAddress);
  }

  const xForwardedFor = (req.headers.get('x-forwarded-for') as string) ?? '';

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
  const fpb = req.cookies.get('_fbp');

  if (!fpb) {
    return '';
  }

  return fpb.value;
};

/**
 * Get client city from request
 *
 * @param req
 * @returns string
 */
const getClientCity = (req: NextRequest): string => {
  const city = (req.geo?.city as string) ?? '';

  return city;
};

/**
 * Get client country from request
 *
 * @param req
 * @returns string
 */
const getClientCountry = (req: NextRequest): string => {
  const city = (req.geo?.country as string) ?? '';

  return city;
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

  const fbc = req.cookies.get('_fbc');

  if (!fbc) {
    return '';
  }

  return fbc.value;
};

export {
  getClientIpAddress,
  getClientUserAgent,
  getClientFbp,
  getClientFbc,
  getClientCity,
  getClientCountry,
};
