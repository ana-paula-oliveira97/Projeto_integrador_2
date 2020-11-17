<template>
  <div>
    <Header />
    <Nuxt />

    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
export default {
  components: {
    Header,
    Footer,
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((l) => l.code !== this.$i18n.locale);
    },
  },
  methods: {
    setLocale(code) {
      this.$i18n.setLocale(code);
    },
  },
  data() {
    return {
      items: [
        {
          title: "Home",
          icon: "home",
          to: {
            name: "index",
          },
        },
        {
          title: "Inspire",
          icon: "lightbulb",
          to: {
            name: "inspire",
          },
        },
      ],
    };
  },
};
</script>
