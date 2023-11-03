import { NextFunction, Request, Response } from "express";

export function roleAuthenticate(
	request: Request,
	response: Response,
	next: NextFunction
) {
	const { id } = request.user;
}
