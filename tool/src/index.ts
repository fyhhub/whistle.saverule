import { createApp, h } from 'vue'
import App from './App.vue';


// @ts-ignore
if (!window.whistleSaveRuleMounted) {
  const div = document.createElement('div')
  const app = createApp({
    render: () => h(App)
  })
  app.mount(div)
  document.body.appendChild(div)

  // @ts-ignore
  window.whistleSaveRuleMounted = true;
}

