import { rateLimit } from "../config/upstash.js";

export async function rateLimiter(req,res,next) {
    try {
        rateLimit();
    } catch (error) {

    }
}

/* Learning
    # when you write middleware functions, you then call them before you receive API requests, or place them


*/