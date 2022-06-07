import * as Chance from 'chance';
const chance = new Chance();

export const createUserName = 'CreateUser';
export const createUserMutation = `mutation 
  CreateUser($phone: String!, $email: String) {
    CreateUser(payload: { phone: $phone, email: $email }) {
      _id
      phone
      email
    }
  }
`;

export const createUserInput = {
  phone: chance.phone(),
  email: chance.email(),
};

export const createUserInputJustMail = {
  email: chance.email(),
};
