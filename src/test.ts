import { createApp } from "vue/dist/vue.esm-browser";
import SmartyUI from "./index";
createApp({
  template: `
           <div style="margin-bottom:20px;">
           <Hello></Hello>
   </div>
        `,
})
  .use(SmartyUI)
  .mount("#app");