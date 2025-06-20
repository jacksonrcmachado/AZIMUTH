import { ApolloServer } from "apollo-server-express";
import { connectDB } from "../db/connect";

import express from "express"; // Use import em vez de require
import { resolvers, typeDefs } from "./graphql/schema";
import { getUserFromToken } from "./middlewares/auth";
import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser());

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }) => {
      const token = req?.cookies?.token || null;
      const user = token ? getUserFromToken(token) : null;
      return { user, req, res }; // ✅ Inclua res
    },
  });

  await server.start();
  server.applyMiddleware({ app });

  await connectDB();

  app.listen(3001, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:3001${server.graphqlPath}`);
  });
  
}

startServer().catch((err) => console.error("Error starting server:", err));