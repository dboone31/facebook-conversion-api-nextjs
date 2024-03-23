"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClientCity = exports.getClientFbc = exports.getClientFbp = exports.getClientUserAgent = exports.getClientIpAddress = void 0;
/**
 * Get client IP address from request.
 *
 * @param req
 */
const getClientIpAddress = (req) => {
    var _a;
    const ipAddress = req.ip;
    if (ipAddress) {
        return String(ipAddress);
    }
    const xForwardedFor = (_a = req.headers.get('x-forwarded-for')) !== null && _a !== void 0 ? _a : '';
    return xForwardedFor.split(',')[0];
};
exports.getClientIpAddress = getClientIpAddress;
/**
 * Get client user agent from request.
 *
 * @param req
 */
const getClientUserAgent = (req) => { var _a; return String((_a = req.headers.get('user-agent')) !== null && _a !== void 0 ? _a : ''); };
exports.getClientUserAgent = getClientUserAgent;
/**
 * Get client fbp from request cookie.
 *
 * @param req
 */
const getClientFbp = (req) => {
    const fpb = req.cookies.get('_fbp');
    if (!fpb) {
        return '';
    }
    return fpb.value;
};
exports.getClientFbp = getClientFbp;
/**
 * Get client city from request
 *
 * @param req
 * @returns string
 */
const getClientCity = (req) => {
    var _a, _b;
    const city = (_b = (_a = req.geo) === null || _a === void 0 ? void 0 : _a.city) !== null && _b !== void 0 ? _b : '';
    return city;
};
exports.getClientCity = getClientCity;
/**
 * Get client country from request
 *
 * @param req
 * @returns string
 */
const getClientCountry = (req) => {
    var _a, _b;
    const city = (_b = (_a = req.geo) === null || _a === void 0 ? void 0 : _a.country) !== null && _b !== void 0 ? _b : '';
    return city;
};
/**
 * Get client fbc from request query params or cookie.
 *
 * @param req
 */
const getClientFbc = (req) => {
    var _a;
    if (req.referrer) {
        const url = new URL(req.referrer);
        if (url.searchParams.has('fbclid')) {
            return (_a = url.searchParams.get('fbclid')) !== null && _a !== void 0 ? _a : '';
        }
    }
    const fbc = req.cookies.get('_fbc');
    if (!fbc) {
        return '';
    }
    return fbc.value;
};
exports.getClientFbc = getClientFbc;
