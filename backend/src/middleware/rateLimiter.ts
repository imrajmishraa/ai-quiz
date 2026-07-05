import rateLimit from "express-rate-limit";

const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  limit: 200,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  skipSuccessfulRequests: false,
  skipFailedRequests: false,
  handler: (req, res, _next, options) => {
    console.log(req.rateLimit);

    res.status(options.statusCode).json({
      success: false,
      message: options.message,
      retryAfter: req.rateLimit?.resetTime?.toISOString(),
    });
  },
});

export { rateLimiter };
