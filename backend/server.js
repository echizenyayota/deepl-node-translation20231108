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