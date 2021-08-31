import { App } from 'vue'
import Vue3HelloWorld from './Vue3HelloWorld.vue'

Vue3HelloWorld.install = (app: App) => app.component(Vue3HelloWorld.name, Vue3HelloWorld)

export default Vue3HelloWorld
