import { registerEnumType } from '@nestjs/graphql';

export enum UserRole {
  CUSTOMER = 'CUSTOMER',
  SELLER = 'SELLER',
  PRODUCER = 'PRODUCER',
}

registerEnumType(UserRole, { name: 'UserRole' });
