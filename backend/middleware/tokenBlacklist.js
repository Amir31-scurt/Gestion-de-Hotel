// tokenBlacklist.js
let tokenBlacklist = new Set();

const addTokenToBlacklist = (token) => {
  tokenBlacklist.add(token);
};

const isTokenBlacklisted = (token) => {
  return tokenBlacklist.has(token);
};

const clearBlacklist = () => {
  tokenBlacklist = new Set(); // Reset or clear the blacklist periodically as needed
};

module.exports = { addTokenToBlacklist, isTokenBlacklisted, clearBlacklist };
