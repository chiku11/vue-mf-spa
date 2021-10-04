import { createApp } from "vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import "./index.css";

import App from "./App.vue";

// Make BootstrapVue available throughout your project
// Optionally install the BootstrapVue icon components plugin
createApp(App).mount("#app");
