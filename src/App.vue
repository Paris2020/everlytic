<script setup>
    import NavSection from "./components/Nav.vue"
    import HeaderSection from "./components/Header.vue";
    import FooterSection from "./components/Footer.vue";
    import IconSymbols from "./components/global/IconSymbols.vue";
</script>

<template>
    <div class="container">
          <nav-section />
          <header-section />
          <footer-section />
          <icon-symbols />
    </div>
</template>

<style lang="scss">
    @import "./assets/scss/style.scss"
</style>
