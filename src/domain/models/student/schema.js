import mongoose from 'mongoose';

const modelName = 'students';
const { Schema } = mongoose;

const schema = new Schema(
  {
    fullName: {
      type: String,
    },
    email: {
      type: String,
    },
    career: {
      type: String,
    },
    codeStudent: {
      type: String,
    },
    status: {
      type: String,
      enum: ['active', 'inactive', 'deleted'],
      default: 'active',
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false,
  }
);

// Ensure virtual fields are serialised.
schema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  // transform(_doc, ret) {
  //   // eslint-disable-next-line no-param-reassign,no-underscore-dangle
  //   delete ret._id;
  // },
});

export default mongoose.models.Student || mongoose.model(modelName, schema);
