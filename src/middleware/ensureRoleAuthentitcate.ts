import { NextFunction, Request, Response } from "express";

export function ensureRoleAuthenticate(
	request: Request,
	response: Response,
	next: NextFunction
) {
	next();
}
