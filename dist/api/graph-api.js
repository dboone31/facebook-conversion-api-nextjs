"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Facebook Graph API client.
 *
 * @param endpoint
 * @param body
 * @constructor
 */
const graphApi = (_a) => __awaiter(void 0, [_a], void 0, function* ({ endpoint = '', body = null }) {
    var _b;
    const pixelId = (_b = process.env.NEXT_PUBLIC_FB_PIXEL_ID) !== null && _b !== void 0 ? _b : '';
    const request = new Request(`https://graph.facebook.com/v18.0/${pixelId}/${endpoint}`, Object.assign({ method: 'POST' }, (body && { body })));
    return fetch(request)
        .then((response) => response.json())
        .catch((e) => {
        throw e;
    });
});
exports.default = graphApi;
