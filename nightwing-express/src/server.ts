import * as express from 'express'
import {HeroService} from 'nightwing-core'

const server = express();
const port = 3000;

server.get("/api/heros", (req, res) => {
  let heros = HeroService.getHeros();
  res.send(JSON.stringify(heros));
});

server.listen(port, () => {
  console.log("server is running")
})