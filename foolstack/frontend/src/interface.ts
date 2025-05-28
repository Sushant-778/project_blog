import type {CodeResponse} from "@react-oauth/google";

type GoogleLoginSuccess = Omit<
	CodeResponse,
	"error" | "error_description" | "error_uri"
>;

type GoogleLoginError = Pick<
	CodeResponse,
	"error" | "error_description" | "error_uri"
>;

type UserDataRes = {
	userId: string;
	email: string;
	username: string;
	userPic: string;
	userLinks: {
		facebook: string;
		github: string;
		devTo: string;
	};
};

export type {GoogleLoginSuccess, GoogleLoginError, UserDataRes};
