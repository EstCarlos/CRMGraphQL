const { ApolloServer, gql } = require("apollo-server");
const typeDefs = require("./db/schema");
const resolvers = require("./db/resolvers");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "variables.env" });
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageDisabled,
} = require("apollo-server-core");
const conectarDb = require("./config/db");

//conectar database
conectarDb();

//servidor
const server = new ApolloServer({
  typeDefs,
  resolvers,
  // plugins: [
  //   ApolloServerPluginLandingPageDisabled,
  //   ApolloServerPluginLandingPageGraphQLPlayground,
  // ],
  introspection: true,
  context: ({ req }) => {
    //console.log(req.headers["authorization"]);
    console.log(req.headers);

    const token = req.headers["authorization"] || "";
    if (token) {
      try {
        const usuario = jwt.verify(
          token.replace("Bearer ", ""),
          process.env.SECRETA
        );

        console.log(usuario);

        return {
          usuario,
        };
      } catch (error) {
        console.log(error);
        console.log("Hubo error");
      }
    }
  },
});

//arrancar el servidor
server.listen().then(({ url }) => {
  console.log(`Servidor listo en ${url}`);
});
