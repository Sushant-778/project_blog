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
const uploadProfileFromGoogleImgSrc = async (pictureUrl: string, email:string) => {
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

// Optional: for future purposes
// const uploadProfileFromBlob = async (picture: Blob, email: string) => {

// }


export {
	uploadProfileFromGoogleImgSrc
}