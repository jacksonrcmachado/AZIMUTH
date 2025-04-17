import { ApolloServer } from "apollo-server-express";
import { connectDB } from "../db/connect";

import express from "express"; // Use import em vez de require
import { resolvers, typeDefs } from "./graphql/schemas/schema";

const app = express();

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();
  server.applyMiddleware({ app });

  await connectDB();

  app.listen(3001, () => {
    console.log(`Server running on http://localhost:3001${server.graphqlPath}`);
  });
}

startServer().catch((err) => console.error("Error starting server:", err));

// app.get('/', (req, res) => {
//   res.send('Hello from backend!');
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Servidor rodando na porta ${PORT}`);
// });
