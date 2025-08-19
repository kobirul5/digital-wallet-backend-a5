import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Request, Response } from "express";
import expressSession from "express-session";
import passport from "passport";


const app = express()

app.use(passport.initialize())
app.use(passport.session())
app.use(cookieParser())
app.use(express.json())
app.set("trust proxy", 1);
app.use(express.urlencoded({ extended: true }))
app.use(cors())


app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        message: "Welcome to Tour Management System Backend"
    })
})



export default app