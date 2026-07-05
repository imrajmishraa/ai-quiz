import rateLimit from "express-rate-limit";

const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  limit: 200,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many requests. Please try again later",
  },
  handler: (req, res, _next, options) => {
    req.statusCode(options.statusCode).json({
      success: false,
      message: "Too many requests. Please try again later",
      retryAfter: "15 minutes",
    });
  },
});

export { rateLimiter };
