import { rateLimit } from "../config/upstash.js";

export async function rateLimiter(req,res,next) {
    try {
        const {success} = await rateLimit.limit("my-limit-key"); // so i can find where a limit was hit with this key - MUST BE UPDATED WITH USER ID IN FUTURE

        if(success) {
            return res.status(429).json({message: "Too many requests. please try again later."});
        } else {
            next(); // send the next function - run as expected if limit not reached
        };
    } catch (error) {
        console.log("rate limit error"); // any other errors 
        next(error);
    };
};

/* Learning



*/