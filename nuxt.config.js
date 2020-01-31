export default {
  mode: "universal",
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "..." },
      { hid: "description", name: "description", content: "..." }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  loading: { color: "#fff" },
  css: [
    "@/node_modules/bootstrap/dist/css/bootstrap.css",
    "@/assets/styles/global.scss",
    "@/assets/styles/reset.scss"
  ],
  plugins: [],
  buildModules: [],
  modules: [
    "@nuxtjs/axios",
    "vue-yandex-maps/nuxt"
  ],
  axios: {},
  build: {
    extend(config, ctx) {}
  }
};
