import { createServer, Model } from "miragejs";
import { books } from "../data/db.json";

export default function setUpServer() {
  createServer({

    routes() {
      this.namespace = "api";
      this.timing = 1000;
      this.get("/books", () => books);
    }
  });
}
