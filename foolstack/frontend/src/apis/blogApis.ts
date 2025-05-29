import type {AxiosResponse} from "axios";
import {api} from "./axiosSetup";

const createBlog = async (
	blogData: FormData
): Promise<AxiosResponse<{status: number; message: string}>> => {
	return await api.post("/blogs", blogData, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	});
};

export {createBlog};
