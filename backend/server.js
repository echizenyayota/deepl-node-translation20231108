import { createRequire } from "module";

import * as deepl from "deepl-node";
const require = createRequire(import.meta.url);

const PORT = 8000;
const axios = require("axios").default;
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());

app.listen(PORT, () => console.log("Server running on PORT " + PORT));

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Testing whether the API works"
  })
});

app.get("/languages", async(req, res) => {
  const authKey = process.env.DEEPL_API_KEY;
  const translator = new deepl.Translator(authKey);
  const sourceLanguage = await translator.getSourceLanguages();

  try {
    res.status(200).json(sourceLanguage.map(lang => `${lang.name}(${lang.code})`));
  } catch (err) {
    console.log(err);
    res.status(500).json({message: err});
  }

});