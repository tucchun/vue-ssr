import Vue from 'vue'
import App from './App.vue'

export function createApp (context) {
  const app = new Vue({
    render: h => h(App)
  })
  return { app }
}

// const Vue = require('vue')
// module.exports = function createApp (context) {
//   const app = new Vue({
//     render: h => h(App)
//   })
//   return { app }
// }
