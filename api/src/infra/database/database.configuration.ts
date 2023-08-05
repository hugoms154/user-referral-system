import path from "node:path";
import { Service } from "typedi";
import { DataSource } from "typeorm";

@Service()
export class DbConfiguration {
  private dataSource: DataSource;

  constructor() {
    const TWENTY_FOUR_HOURS_MS = 60 * 60 * 24 * 1000;
    this.dataSource = new DataSource({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "postgres",
      database: "user-referral-system",
      entities: [path.join(__dirname, "/../../**/*.entity.{ts,js}")],
      synchronize: true,
      cache: {
        type: 'database',
        duration: TWENTY_FOUR_HOURS_MS,
      },
    });
  }

  async connect(): Promise<void> {
    try {
      await this.dataSource.initialize();
      console.log("Database connection established");
    } catch (error) {
      console.log("Error during Database connection");
    }
  }

  getConnection(): DataSource {
    return this.dataSource;
  }
}
