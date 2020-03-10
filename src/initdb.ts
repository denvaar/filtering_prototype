require('dotenv').config();

import { createConnection, getConnection, Connection } from 'typeorm';

const createConnectionPool = async (): Promise<Connection> => {
  process.stdout.write(
    `Connecting to Postgres on ${process.env.DATABASE_HOST} port ${process.env.DATABASE_PORT} ...\t`,
  );

  /* ignore ormconfig.json for setting up this connection */
  const connection: Connection = await createConnection({ type: 'postgres' });

  process.stdout.write('✅ DONE!\n');

  return connection;
};

const dropDatabaseIfExists = async (connection: Connection): Promise<void> => {
  process.stdout.write(
    `Dropping database "${process.env.DATABASE_NAME}" if exists ...\t\t`,
  );

  const dbName = process.env.DATABASE_NAME;

  if (!dbName) {
    process.stderr.write(
      '🛑 Could not load DATABASE_NAME from environment.\n\n',
    );
    process.exit(1);
  }

  await connection.query(`DROP DATABASE IF EXISTS ${dbName}`);

  process.stdout.write('✅ DONE!\n');
};

const createDatabase = async (connection: Connection): Promise<void> => {
  process.stdout.write(
    `Creating database "${process.env.DATABASE_NAME}" ...\t\t\t\t`,
  );

  const dbName = process.env.DATABASE_NAME;

  await connection.query(`CREATE DATABASE ${dbName}`);

  process.stdout.write('✅ DONE!\n');
};

(async (): Promise<void> => {
  const connection = await createConnectionPool();

  await dropDatabaseIfExists(connection);
  await createDatabase(connection);

  connection.close();
})();
