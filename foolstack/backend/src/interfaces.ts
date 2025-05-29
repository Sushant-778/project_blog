type LinkKey = "Facebook" | "Github" | "Dev.to";

export interface userI {
    userId: string;
	username: string;
	email: string;
    userImgSrc: string;
	links: {
		[key in LinkKey]?: string;
	};
	userRating: number;
}

export interface blogI {
	authorName: string;
    authorId: string,
	title: string;
	description: string;
	created_at: Date;
	rating: number; // or we can do upvote or downvote
    comments: Array<string>,
    
    // if follower including then,
    follower: Array<String>,
    following: Array<String>

    // optional:
    reply: Array<{
        replierId: string,
        replierName: string,
        replyMessage: string
    }>
}

export type GoogleDataType = {
  id: string,
  email: string,
  verified_email: boolean,
  name: string,
  picture: string
}

export type ServerResponse<T> = {
    status: number;
    message: string;
    data?: T;
}

export interface CreateBlogI {
    title: string,
    description: string,
    author_name: string,
    author_id: string
}