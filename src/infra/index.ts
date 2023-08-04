import Container from "typedi";
import { DbConnection } from "./database/data-source";
import { GraphQLServer } from "./graphql/graphql-server";

export class Application {
  static async init() {
    const dbConnection = Container.get(DbConnection);

    await dbConnection.connect();
    await GraphQLServer.start()
  }
}