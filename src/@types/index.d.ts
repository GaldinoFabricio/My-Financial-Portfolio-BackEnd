import "express";

declare global {
	namespace Express {
		interface Request {
			user: {
				id: string;
				role_id: string;
			};

			roles: {
				name: string;
			};
		}
	}
}
