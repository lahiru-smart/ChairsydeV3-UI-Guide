export default {
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Chairsyde",
    htmlAttrs: {
      lang: "en",
      class: "dark-mode",
    },
    meta: [
      {
        charset: "utf-8",
      },
      {
        hid: "robots",
        name: "robots",
        content: process.env.VUE_APP_ENV === "production" ? "index" : "noindex",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        hid: "description",
        name: "description",
        content: "Chairsyde",
      },
      {
        name: "format-detection",
        content: "telephone=no",
      },

      {
        hid: "og:titl",
        name: "og:titl",
        content: "Chairsyde",
      }, // Open Graph
      {
        hid: "og-type",
        property: "og:type",
        content: "website",
      },
      {
        hid: "og-title",
        property: "og:title",
        content: "Chairsyde",
      },
      {
        hid: "og-description",
        property: "og:description",
        content: "Chairsyde",
      },
      {
        hid: "og-image",
        property: "og:image",
        href: "/chairsyde.png",
      },
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico",
      },
    ],
    script: [
      {
        src: "https://js.chargebee.com/v2/chargebee.js",
      },
      {
        // src: 'plyer-inject.js'
      },
      {
        src: "https://play.vidyard.com/embed/v4.js",
      },
      {
        src: "https://www.youtube.com/iframe_api",
      },
    ],
  },

  loading: {
    color: "#fa5f6b",
    height: "2px",
  },

  loadingIndicator: {
    name: "circle",
    color: "#fa5f6b",
    background: "white",
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
      '@/assets/scss/main.scss'
    ],

  components: true,

  modules: [
    [
      "nuxt-buefy",
      {
        css: false,
        defaultProgrammaticPromise: true,
        defaultUseHtml5Validation: false,
        defaultImageLazy: false,
      },
    ],
  ],
  build: {
    extractCSS: true,
  },

};
