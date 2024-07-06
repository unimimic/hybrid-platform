import { DataSource } from "typeorm"

export const dataSource = new DataSource({
    type: "sqlite",
    database: "./database/tasks.db",
    entities: ["src/entities/*.ts"],
    logging: true,
    synchronize: true,
})