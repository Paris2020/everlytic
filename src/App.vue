<script setup>
    import IconSymbols from "./components/global/IconSymbols.vue";
</script>

<template>
    <div class="container">
          <router-view/>
          <icon-symbols />
    </div>
</template>

<style lang="scss">
    @import "./assets/scss/style.scss"
</style>
