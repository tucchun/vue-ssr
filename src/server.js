// const Vue = require('vue')
// import { createApp } from './app'
// const server = require('express')()
// const { createApp } = require('./app')
const path = require('path')
var express = require('express')
var server = express()
const { createBundleRenderer } = require('vue-server-renderer')
const serverBundle = require('../dist/vue-ssr-server-bundle.json')
const clientManifest = require('../dist/vue-ssr-client-manifest')
const template = require('fs').readFileSync(__dirname + '/index.template.html', 'utf-8')

// 1.创建vue根实例
// 2.创建renderer
// 3.把vue实例变成html
// const app = new Vue({
//   template: `
//     <div>hello world</div>
//   `
// })

const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false,
  template,
  clientManifest
})
server.use(express.static(path.resolve(__dirname + '/../dist')));
server.get('*', (req, res) => {
  const context = {
    title: 'vue-ssr',
    url: req.url,
    meta: `
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
    `
  }
  // const app = createApp(context)
  renderer.renderToString(context, (err, html) => {
    if (err) {
      console.log(err)
      res.status(500).end('Internal Server Error')
      return
    }
    res.end(html)
  })
})

server.listen(8080, (msg) => {
  console.log(msg, 'started!')
})
