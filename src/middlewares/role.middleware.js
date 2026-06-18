
const validRole = (validRol) => (req, res, next) => {
    try {
        const role = req.rol;
        if (!role) {
            return res.status(400).json({
                ok: false,
                msg: "Unknown role"
            });
        }
        if (!validRol.includes(rol))
            return res.status(403).json({
                ok: true,
                msg: "Access prohibited"
            });
        next();
    } catch (error) {
        res.status(400).json({
            ok: true,
            msg: "Error in the role"
        });
    }
};
module.exports={validRole}