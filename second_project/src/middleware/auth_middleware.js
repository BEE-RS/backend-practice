import jwt from 'jsonwebtoken'

function auth_middleware (req, res, next) {
    const token = req.headers('authorization')

    if(!token) { return res.status(401).json({message: "no token provided"})}

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) { return res.status(401).json({message: "Invalid token"}) }

        req.user_id = decoded.id
        next()
    })
}

export default auth_middleware