const jwt = require("jsonwebtoken");

const checkAuth = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // replace with your actual secret

    req.user = decoded; // attach user info to request if needed
    next();
  } catch (error) {
    console.error("Auth error:", error.message);
    return res.status(403).json({ message: "Invalid or expired token" });
  }
};

module.exports = checkAuth;
