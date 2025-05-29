import {v2 as cloudinary} from "cloudinary";

// import path from "path";

// // for testing
// // import dotenv from "dotenv"
// // dotenv.config()

// const filePath = path.resolve(__dirname, "../../frontend/public/Images/icons8-bold-100.png");

// (async function () {
// 	// Configuration
// 	cloudinary.config({
// 		cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
// 		api_key: process.env.CLOUDINARY_API_KEY,
// 		api_secret: process.env.CLOUDINARY_API_SECRET,
// 	});

// 	// Upload an image
// 	const uploadResult = await cloudinary.uploader
// 		.upload(
// 			filePath, {
// 				public_id: "shoes",
// 			}
// 		)
// 		.catch((error) => {
// 			console.log(error);
// 		});

// 	console.log(uploadResult);

// 	// Optimize delivery by resizing and applying auto-format and auto-quality
// 	const optimizeUrl = cloudinary.url("shoes", {
// 		fetch_format: "auto",
// 		quality: "auto",
// 	});

// 	console.log(optimizeUrl);

// 	// Transform the image: auto-crop to square aspect_ratio
// 	// const autoCropUrl = cloudinary.url("shoes", {
// 	// 	crop: "auto",
// 	// 	gravity: "auto",
// 	// 	width: 500,
// 	// 	height: 500,
// 	// });

// 	// console.log(autoCropUrl);
// })();

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

// email to uniquely identify the user photo
const uploadProfileFromGoogleImgSrc = async (
	pictureUrl: string,
	email: string
) => {
	try {
		const uploadResponse = await cloudinary.uploader.upload(pictureUrl, {
			folder: "profile_pictures", // optional folder
			public_id: `user_${email}`, // optional unique name
			overwrite: true,
		});

		return uploadResponse.secure_url; // this is the Cloudinary URL
	} catch (error) {
		console.error("Cloudinary Upload Error:", error);
		throw new Error("Failed to upload profile picture");
	}
};

const uploadBlogCoverImgFile = async (
	blogCoverImg: Express.Multer.File
): Promise<string> => {
	try {
		const cloudinaryUrl = await new Promise<string>((resolve, reject) => {
			const stream = cloudinary.uploader.upload_stream(
				{
					folder: "blog_cover_img",
					overwrite: true,
					// not giving public_id as cloudinary will auto gen
				},
				(err, result) => {
					if (err || !result) {
						reject("Couldn't Save Blog Cover Img");
					} else {
						resolve(result.secure_url); // the Cloudinary image URL
					}
				}
			);

			stream.end(blogCoverImg.buffer); // send the image buffer to cloudinary
		});

		return cloudinaryUrl;
	} catch (error) {
		console.error("Cloudinary Upload Error:", error);
		throw new Error("Failed to upload Blog Cover Image");
	}
};

// Optional: for future purposes
// const uploadProfileFromBlob = async (picture: Blob, email: string) => {

// }

export {uploadProfileFromGoogleImgSrc, uploadBlogCoverImgFile};
