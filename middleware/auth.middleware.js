export const authMiddleware = (req, res, next) => {
    const user = req.headers.authorization;

    user ? next() : res.status(404).send("quien es??");
};
