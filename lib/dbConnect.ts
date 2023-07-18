import mongoose from 'mongoose';

const dbConnect = async () => {
  try {
    // console.log(process.env.MONGO_URI);
    
    await mongoose.connect(process.env.MONGO_URL);
  } catch (error) {
    throw new Error('Connection Failed!');
  }
};

export default dbConnect;
