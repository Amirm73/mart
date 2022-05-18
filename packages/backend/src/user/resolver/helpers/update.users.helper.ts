import * as Chance from 'chance';
const chance = new Chance();

export const UpdateUserOperationName = 'UpdateUser';
export const UpdateUserMutation = `
mutation UpdateUser( $id:String!, $email:String ) {
  UpdateUser(payload: { _id: $id, email: $email }) {
    _id
    phone
    email
  }
}
`;

export const UpdateUserInputJustMail = {
  email: chance.email(),
};
