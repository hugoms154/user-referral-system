import Container from "typedi";
import { DbConfiguration } from "./database/database.configuration";
import { GraphQLServer } from "./graphql/graphql-server";

export class Application {
  static async init() {
    const dbConnection = Container.get(DbConfiguration);

    await dbConnection.connect();
    await GraphQLServer.start()
  }
}