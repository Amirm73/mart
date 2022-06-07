import { registerEnumType } from '@nestjs/graphql';

export enum UserRole {
  CUSTOMER,
  SELLER,
  PRODUCER,
}

registerEnumType(UserRole, { name: 'UserRole' });
