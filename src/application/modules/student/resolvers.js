import { response } from '../../../infrastructure/transformation';

const Query = {
  allStudents: async (_root, args, context) => {
    try {
      const query = context.db.models.Student.find()
        .skip(args.offset)
        .limit(args.limit);
      return await query.exec();
    } catch (error) {
      throw response.error(error);
    }
  },
  Student: async (_root, args, context) => {
    try {
      const query = context.db.models.Student.findById(args.id);
      return await query.exec();
    } catch (error) {
      throw response.error(error);
    }
  },
};

const Mutation = {
  createStudent: async (_root, { data }, context) => {
    try {
      return await context.db.models.Student.create(data);
    } catch (error) {
      throw response.error(error);
    }
  },
};

export default { Query, Mutation };
