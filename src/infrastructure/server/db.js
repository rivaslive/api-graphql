/* eslint no-console: "off" */
import mongoose from 'mongoose';
import getConfig from '../config';

const { mongo } = getConfig;

export const initializeDB = async (callback) => {
  try {
    await mongoose.connect(mongo.uri, mongo.options, callback);
    console.log('MongoDB connect successfully');
    return mongoose;
  } catch (error) {
    console.log('***** Mongoose failed connection *****');
    console.error(error);
  }
};
