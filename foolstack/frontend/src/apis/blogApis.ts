import type {AxiosResponse} from "axios";
import {api} from "./axiosSetup";
import type {BlogResI, ServerResponse, VoteType} from "../interface";

const createBlog = async (
	blogData: FormData
): Promise<
	AxiosResponse<{status: number; message: string; data: {blogId: string}}>
> => {
	return await api.post("/blogs", blogData, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	});
};

const getIndividualBlog = async (
	blogId: string
): Promise<AxiosResponse<ServerResponse<BlogResI>>> => {
	return await api.get(`/blogs/${blogId}`);
};

const postComment = async (
	userId: string,
	blogId: string,
	comment: string
): Promise<AxiosResponse<ServerResponse<{commentId: string}>>> => {
	return await api.post(`/blogs/${blogId}/comment`, {
		commenterId: userId,
		comment,
	});
};

const updateVote = async (
	blogId: string,
	userId: string,
	vote: VoteType,
	prevVote: VoteType
) => {
	return await api.patch(`/blogs/${blogId}/vote`, {
		userId,
		vote,
		prevVote,
	});
};

export {createBlog, getIndividualBlog, postComment, updateVote};
