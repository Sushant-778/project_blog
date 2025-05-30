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


export type ServerResponse<T> = {
	status: number;
	message: string;
	data?: T;
};

// --> For Blog Response

type UserInfo = {
	id: string;
	name: string;
	image: string;
};

type Reply = {
	id: string;
	reply_message: string;
	created_at: string; // or Date if parsed
	replier: UserInfo;
};

export interface CommentI  {
	id: string | null;
	comment: string | null;
	created_at: Date; // or Date
	user: UserInfo | null;
	replies: Reply[] | null;
};

interface BlogResI {
	id: string;
	author_id: string;
	author_name: string;
	title: string;
	blog_image_url: string;
	description: string;
	created_at: string; // or Date
	updated_at: string; // or Date
	upvotes: number;
	downvotes: number;
	comments: CommentI[];
}
// --> Blog Response Type Complete

type VoteType = "upvote" | "downvote" | null;

export type {GoogleLoginSuccess, GoogleLoginError, UserDataRes, BlogResI, VoteType};
