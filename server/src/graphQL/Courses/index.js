import { coursesResolvers, resolversTypes } from './resolvers';
import { mutationTypes, coursesMutation } from './mutation';
import types from './type.gql';

const coursesTypes = [types, resolversTypes, mutationTypes];

export { coursesResolvers, coursesTypes, coursesMutation };
