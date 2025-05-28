import axios from "axios";

// Singleton Implementation
export class GoogleAuth {
	private static instance: GoogleAuth;

	private clientId = process.env.GOOGLE_CLIENT_ID;
	private redirectUri = process.env.GOOGLE_REDIRECT_URI;
	private clientSecret = process.env.GOOGLE_CLIENT_SECRET;

	// private constructor makes instance of class from outside impossible
	private constructor() {}

	public static getInstance = (): GoogleAuth => {
		if (!GoogleAuth.instance) {
			GoogleAuth.instance = new GoogleAuth();
		}
		return GoogleAuth.instance;
	};

	public async getAcessToken(code: string) {
		// const clientId = process.env.GOOGLE_CLIENT_ID;
		// const redirectUri = process.env.GOOGLE_REDIRECT_URI;
		// const clientSecret = process.env.GOOGLE_CLIENT_SECRET;


		try {
			// Exchange authorization code for access token
			const response = await axios.post(
				"https://oauth2.googleapis.com/token",
				null,
				{
					params: {
						code,
						client_id: this.clientId,
						client_secret: this.clientSecret,
						redirect_uri: this.redirectUri,
						grant_type: "authorization_code",
					},
				}
			);

			// googleToken
			const {access_token, token_type} = response.data;
			return {
				access_token,
				token_type,
			};
		} catch (err) {
			throw "Couldn't Get Excess Token";
		}
	}
}
