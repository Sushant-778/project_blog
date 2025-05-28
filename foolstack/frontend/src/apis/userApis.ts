import type {UserDataRes} from "../interface";
import {api} from "./axiosSetup";

const googleAuth = async (
	code: string
): Promise<{data: {status: number; message: string; data: UserDataRes}}> =>
	await api.get(`/auth/google?code=${code}`);

export {googleAuth};
