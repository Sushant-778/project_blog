import multer from "multer";

// MEMORY storage: good for uploading to cloud
const storage = multer.memoryStorage();

const upload = multer({ storage });

export default upload;
