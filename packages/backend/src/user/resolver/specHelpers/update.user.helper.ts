import * as Chance from 'chance';
import { ObjectId } from 'mongoose';

const chance = new Chance();

export const UpdateUserOperationName = 'UpdateUser';
export const UpdateUserMutation = `mutation
UpdateUser( $id:String!, $email:String ) {
  UpdateUser(payload: { _id: $id, email: $email }) {
    _id
    phone
    email
  }
}
`;

export const UpdateUserInputGenerator = (userId: ObjectId) => {
  return {
    email: chance.email(),
    id: userId,
  };
};
