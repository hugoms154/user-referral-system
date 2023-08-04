import { ApolloServer } from "apollo-server";
import path from "node:path";


import { buildSchema } from "type-graphql";

export class GraphQLServer {
  static async start() {
    const resolvers = path.join(__dirname + "/../../**/*.resolver.{js,ts}");
    const schema = await buildSchema({ resolvers: [resolvers] });

    const server = new ApolloServer({ schema });

    const { url } = await server.listen({
      port: 4000 
    });

    console.log(url);
  }
}
