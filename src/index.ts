import "reflect-metadata";
import { GraphQLServer } from "./infra/graphql/graphql-server";
import { DbConnection } from "./infra/database/data-source";

(async() => {
  const dbConnection = new DbConnection();

  await dbConnection.connect();
  await GraphQLServer.start()
})();
console.log("Done");
