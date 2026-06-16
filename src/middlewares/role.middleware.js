import { comprobarToken } from "../../utils/generateToken.js";

export const validarRole = (validRole) => (req, res, next) => {
    try {
        const role = req.role;
        if (!role) {
            return res.status(400).json({
                ok: false,
                msg: "Unknown role"
            });
        }
        if (!validRole.includes(role))
            return res.status(403).json({
                ok: true,
                msg: "Access denied"
            });

        next();
    } catch (error) {
        res.status(400).json({
            ok: true,
            msg: "Role error"
        });
    }
};


