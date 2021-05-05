import { createServer, Model } from "miragejs";
import { books } from "../data/db.json";

export default function setUpServer() {
  createServer({
    // models: {
    //   book: Model
    // },

    routes() {
      this.namespace = "api";
      this.timing = 1000;

      // this.get("/books", (schema, request) => {
      //   // return books;
      //   console.log(schema.books.all);
      //   return schema.books.all();
      // });
      this.get("/books", () => books);
    }
  });
}
