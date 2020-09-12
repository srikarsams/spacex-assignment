import express from "express";
import fs from "fs";
import url from "url";
import path from "path";
import es6Promise from "es6-promise";
import fetch from "isomorphic-fetch";
import compression from "compression";

import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router";

import App from "../src/App";
import { urlGenerator } from "../src/helpers";
import { IS_SUCCESSFUL_LAUNCH, IS_SUCCESSFUL_LANDING, YEAR } from "../src/constants";

const PORT = 5000;

const app = express();
app.use(express.json());
app.use(compression({ level: 9 }));

es6Promise.polyfill();

const jsonMap = new Map();

app.use("^/$", (req, res, next) => {
  const urlObj = new URL(decodeURIComponent(url.format({
    protocol: req.protocol,
    host: req.get('host'),
    pathname: req.originalUrl
  })))
  const reqObj = {
    isSuccessfulLaunch: urlObj.searchParams.get(IS_SUCCESSFUL_LAUNCH),
    isSuccessfulLanding: urlObj.searchParams.get(IS_SUCCESSFUL_LANDING),
    year: urlObj.searchParams.get(YEAR),
    isServer: true
  }

  const context = {}

  const endpoint = urlGenerator(reqObj);

  const sendDocResponse = jsonResponse => {
    fs.readFile(path.resolve("./build/index.html"), "utf-8", (err, data) => {
      if (err) {
        console.log(err);
        return res.status(500).send("Some error happened");
      }
      jsonMap.set(endpoint, { data: jsonResponse, time: new Date() })
      return res.send(
        data.replace(
          '<div id="root"></div>',
          `<div id="root">${ReactDOMServer.renderToString(
            <StaticRouter location={req.url} context={context}>
              <App data={jsonResponse} reqObj={reqObj} />
            </StaticRouter>
          )}</div><script>window.__PRELOADED_STATE__ = ${JSON.stringify({ ...reqObj, isServer: false, data: jsonResponse })}</script>`
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

app.listen(process.env.PORT || 5000, () => {
  console.log(`App launched on ${PORT}`);
});