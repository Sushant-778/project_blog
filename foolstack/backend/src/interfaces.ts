type LinkKey = "Facebook" | "Github" | "Dev.to";

export interface userI {
	username: string;
	email: string;
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
