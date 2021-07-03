import Vue from "vue"
import Vuetify from "vuetify/lib/framework"
import dark from "@/plugins/vuetify/theme"

Vue.use(Vuetify)

export default new Vuetify({
  theme: { dark: true, themes: { dark } }
})
