const createUserTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username VARCHAR(100) NOT NULL,
    user_img_src TEXT,
    email VARCHAR(100) NOT NULL UNIQUE,
    user_rating INTEGER DEFAULT 0
);`;

const createUserLinksTableQuery = `
    CREATE TABLE IF NOT EXISTS user_links (
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    platform VARCHAR(20) CHECK (platform IN ('Facebook', 'Github', 'Dev.to')),
    url TEXT NOT NULL,
    PRIMARY KEY (user_id, platform)
    );`;

const createFollowersTableQuery = `
    CREATE TABLE IF NOT EXISTS followers (
        user_id UUID REFERENCES users(id) ON DELETE CASCADE,
        follower_id UUID REFERENCES users(id) ON DELETE CASCADE,
        PRIMARY KEY (user_id, follower_id)  
    );
    `;

// gonna use cloudinary for storage and url in db
const createBlogTableQuery = `
CREATE TABLE IF NOT EXISTS blogs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    author_id UUID REFERENCES users(id) ON DELETE CASCADE,
    author_name VARCHAR(100),
    title TEXT NOT NULL,
    blog_image_url TEXT,
    description TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    upvotes INTEGER DEFAULT 0,
    downvotes INTEGER DEFAULT 0
);`;

const createBlogVoteTableQuery = `
CREATE TABLE IF NOT EXISTS blog_votes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    blog_id UUID REFERENCES blogs(id) ON DELETE CASCADE,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    vote_type VARCHAR(10) NOT NULL CHECK (vote_type IN ('upvote', 'downvote')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(blog_id, user_id)  -- one vote per user per blog
);`;

const createCommentsTableQuery = `
    CREATE TABLE IF NOT EXISTS comments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    blog_id UUID REFERENCES blogs(id) ON DELETE CASCADE,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    comment TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`;

const createRepliesTableQuery = `
    CREATE TABLE IF NOT EXISTS replies (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    comment_id UUID REFERENCES comments(id) ON DELETE CASCADE,
    replier_id UUID REFERENCES users(id) ON DELETE CASCADE,
    reply_message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`;

export {
	createUserTableQuery,
	createUserLinksTableQuery,
	createBlogTableQuery,
    createBlogVoteTableQuery,
	createCommentsTableQuery,
	createFollowersTableQuery,
	createRepliesTableQuery,
};
