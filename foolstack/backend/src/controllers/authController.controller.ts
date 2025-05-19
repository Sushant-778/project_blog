import {Request, Response} from "express";
import {userI} from "../interfaces";

const getUserController = async (req: Request, res: Response) => {
	res.json({
		message: "user1",
	});
};

// req types in order: Params, ResBody, ReqBody, Query
const createUserController = async (
	req: Request<{}, {}, userI>,
	res: Response
) => {
	const {email, userRating, username, links} = req.body;

	res.json({
		message: "user1",
	});
};

const updateLinksController = async (
	req: Request<{}, {}, Pick<userI, "links">>,
	res: Response
) => {
	const {links} = req.body;

	res.json({
		message: "Doing Updation with links",
	});
};

export {getUserController, createUserController, updateLinksController};
