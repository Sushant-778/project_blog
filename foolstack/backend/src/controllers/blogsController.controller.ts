import { Request, Response } from "express"


export const getLatestBlogs = async (req: Request, res:Response) => {
    res.json({
        message: "latest"
    })
}
export const getTrendingBlogs = async (req: Request, res:Response) => {
    res.json({
        message: "trendings"
    })
}