import { registerEnumType } from '@nestjs/graphql';

export enum UserRole {
  CUSTOMER,
  SELLER,
  PRODUCER,
  Admin,
}

registerEnumType(UserRole, { name: 'UserRole' });
