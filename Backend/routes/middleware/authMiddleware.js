const jwt =require('jsonwebtoken');
const User=require('../../Models/User')

const authenticateUser = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Bearer <token>

  if (!token) return res.status(401).json({ message: "No token provided" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select('-password');

    if (!user) return res.status(401).json({ message: "Invalid token" });

    req.user = user; // attach user to request
    next();
  } catch (err) {
    return res.status(401).json({ message: "Token verification failed" });
  }
};

module.exports=authenticateUser;
