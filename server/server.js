import express from "express";
import fs from "fs";
import path from "path";
import es6Promise from "es6-promise";
import fetch from "isomorphic-fetch";
import cookieParser from "cookie-parser";
import compression from "compression";

import React from "react";
import ReactDOMServer from "react-dom/server";

import App from "../src/App";
import { urlGenerator } from "../src/helpers";
import { IS_SUCCESSFUL_LAUNCH, IS_SUCCESSFUL_LANDING, YEAR } from "../src/constants";

const PORT = 8000;

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(compression({ level: 9 }));

es6Promise.polyfill();

const jsonMap = new Map();

app.use("^/$", (req, res, next) => {
  const reqObj = {
    isSuccessfulLaunch: req.cookies[IS_SUCCESSFUL_LAUNCH],
    isSuccessfulLanding: req.cookies[IS_SUCCESSFUL_LANDING],
    year: req.cookies[YEAR],
    isServer: true
  }
  
  const endpoint = urlGenerator(reqObj);

  const sendDocResponse = jsonResponse => {
    fs.readFile(path.resolve("./build/index.html"), "utf-8", (err, data) => {
      if (err) {
        console.log(err);
        return res.status(500).send("Some error happened");
      }
      jsonMap.set(endpoint, {data: jsonResponse, time: new Date()})
      return res.send(
        data.replace(
          '<div id="root"></div>',
          `<div id="root">${ReactDOMServer.renderToStaticNodeStream(<App data={jsonResponse} reqObj={reqObj} />)}</div><script>window.__PRELOADED_STATE__ = ${JSON.stringify({ ...reqObj, isServer: false, data: jsonResponse })}</script>`
        )
      );
    });
  }

  if (
    jsonMap.has(endpoint) &&
    (
      new Date().getHours() - new Date(jsonMap.get(endpoint).time).getHours() < 2
    )
  ) {
    sendDocResponse(jsonMap.get(endpoint).data)
  } else {
    fetch(endpoint)
      .then(data => data.json())
      .then(sendDocResponse)
  }
});

app.use(express.static(path.resolve(__dirname, '..', 'build')))

app.listen(PORT, () => {
  console.log(`App launched on ${PORT}`);
});