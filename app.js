require("babel-register")({
  presets: ["es2015", "react"],
  extensions: [".es6", ".es", ".jsx", ".js"]
});

// const express = require("express");
// const fs = require('fs');
// const path = require('path');
// const fetch = require('isomorphic-fetch');
// const handlebars = require('handlebars');
// import React from 'react';
// import ReactDOMServer from 'react-dom/server';
// import App from './src/components/App'
//
//
// const app = express();
//
// function handleRender(req, res){
//   fetch(`//api.nytimes.com/svc/topstories/v2/home.json?api-key=9ceb8c3021fc44f1b839f525b9f2b193`)
//    .then(response => response.json())
//    .then(data => {
//      const html = ReactDOMServer.renderToString(<App posts={data}/>);
//
//      fs.readFile('./build/index.html', 'uft-8', function(err, data){
//        if (err) throw err;
//        const document = data.replace(/<div id="root"><\/div>/, `<div id="root">${<App />}</div>`)
//        res.send(document)
//      })
//    })
// }
//
//
// app.use(express.static("/build", express.static(path.join(__dirname, 'build'))));
// //
// app.get('*', handleRender);
//
//
// app.listen(3000, function() {
//   console.log("App listening on port 3000");
// });
import express from "express";
import React from "react";
import {renderToString} from "react-dom/server";
import App from "./src/components/App";
import fetch from "isomorphic-fetch";
import path from 'path';


const app = express();
app.use(express.static("/build", express.static(path.join(__dirname, 'build'))));

app.get("*", (req, res) => {
  fetch(`//api.nytimes.com/svc/topstories/v2/home.json?api-key=9ceb8c3021fc44f1b839f525b9f2b193`)
  .then(response => response.json())
  .then(data => {

    const markup = renderToString(<App posts={data} />)

    res.send(`
      <!DOCTYPE html>
      <head>
        <title>NYT code test</title>
        <link rel="stylesheet" href="/css/main.css">
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
        <script src="/bundle.js" defer></script>
      </head>

      <body>
        <div id="root">${markup}</div>
      </body>
      </html>
    `)

   })
})

app.listen(3000, function() {
  console.log("App listening on port 3000");
});
