import { ApolloServer } from "apollo-server-express";
import express, { Request, Response } from "express";
import http from "http";
import path from "node:path";
import { buildSchema } from "type-graphql";
import Container from "typedi";
import { affiliatedRouter } from "../../modules/affiliated-link/affiliated-link.routes";

export type ServerContext = { req: Request; res: Response }

export class GraphQLServer {
  static async start() {
    const resolvers = path.join(__dirname + "/../../**/*.resolver.{js,ts}");
    const schema = await buildSchema({ 
      resolvers: [resolvers],
      validate: false,
      container: Container,
   });

    const app = express();
    const httpServer = http.createServer(app);

    const server = new ApolloServer({ 
      schema,
      context: ({ req, res }) => ({ req, res }) as ServerContext
     });

     await server.start();
     server.applyMiddleware({ app })
     app.use('/',affiliatedRouter)

     await new Promise((resolve) => resolve(httpServer.listen({ port: 4000 })));

     console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  }
}
