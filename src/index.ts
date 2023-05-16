import Hello from "./Hello.vue"
import { App } from "vue";


// 导出Vue插件
export default {
  install(app: App) {
    app.component(Hello.name, Hello);
  },
   
};
