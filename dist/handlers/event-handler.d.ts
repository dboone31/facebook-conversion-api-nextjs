import { NextRequest } from 'next/server';
/**
 * Facebook Conversion API Event Handler for Next.js.
 *
 * @param req
 * @param res
 * @constructor
 */
declare const eventHandler: (req: NextRequest) => Promise<Response>;
export default eventHandler;
