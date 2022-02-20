import express, { Application, Request, Response } from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
const server: Application = express();

const schema = buildSchema(`
  type Query {
    hello: String,
    goodbye: String
  }
  
`);

const root = {
  hello: () => {
    return "Hello, World... From GraphQL 👍";
  },
  goodbye: () => {
    return "Goodbye, World!.... Also from GraphQL 👍";
  },
};

server.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

const PORT: number = Number(process.env.PORT) || 4000;

server.listen(PORT, () => {
  console.log(`<=== || Server is running on PORT: ${PORT} || ===>`);
});

// server.get("/", (req: Request, res: Response) => {
//   res.json("Hello, World... From Typescript 👍");
// });
