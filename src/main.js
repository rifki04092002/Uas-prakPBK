import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "quasar/dist/quasar.css";
import "@quasar/extras/material-icons/material-icons.css";
import { Quasar } from "quasar";

const app = createApp(App);
app.use(router);
app.use(Quasar);

app.mount("#app");
