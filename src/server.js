import { GraphQLServer } from "graphql-yoga";
//const { GraphQLServer } =require ('graphql-yoga')
import resolvers from "./graphql/resolvers/index.js";

//administrar rutas

import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath( import.meta.url);
const __dirname = dirname( __filename);

//config server en Dev
export const server = new GraphQLServer({
  typeDefs:  path.join(process.env.ROOT_URL, "graphql/schema.graphql"),
  resolvers,
}
);



