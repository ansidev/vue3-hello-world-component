import { App } from 'vue';
import Vue3HelloWorld from './components/Vue3HelloWorld.vue'

const install: (app: App) => void = (app: App) => app.component(Vue3HelloWorld.name, Vue3HelloWorld)

export default { install }

export { default as Vue3HelloWorld } from './components'