import { GraphQLModule } from '@nestjs/graphql';

export const rootGraphqlTest = () => {
  return GraphQLModule.forRoot({
    autoSchemaFile: './schema.gql',
    debug: true,
  });
};

export const GRAPHQL_ENDPOINT = '/graphql';
