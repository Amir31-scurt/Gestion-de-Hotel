const jwt = require('jsonwebtoken');
require('dotenv').config();
const secretKey = process.env.JWT_SECRET;

const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers.authorization; // Obtenir l'en-tête d'autorisation

  // Vérifier si l'en-tête d'autorisation est présent
  if (!authHeader)
    return res
      .status(401)
      .send({ message: "Échec de l'authentification : Aucun jeton fourni" });

  // Extraire le jeton de l'en-tête d'autorisation
  const token = authHeader.split(' ')[1]; // Suppose que le format est "Bearer <token>"

  // Vérifier le jeton extrait
  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(403).send({
        message: "Le jeton n'est plus valide, veuillez vous reconnecter",
      });
    }
    req.user = user;
    next();
  });
};

module.exports = authenticateToken;
