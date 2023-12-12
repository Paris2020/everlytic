<script setup>
    import { reactive } from "vue"
    import ShowTeaser from "./global/ShowTeaser.vue"

    const state = reactive({
        showTeasers: [
            {
                id: 0,
                src: "https://www.youtube.com/watch?v=nhC8AG8cwcc",
                title: "Fool Me Once"
            },
            {
                id: 1,
                src: "https://www.youtube.com/watch?v=oU8f8QrUCOM",
                title: "The Brothers Sun"
            },
            {
                id: 2,
                src: "https://www.youtube.com/watch?v=Di310WS8zLk",
                title: "Wednesday Addams"
            },
            {
                id: 3,
                src: "https://www.youtube.com/watch?v=gpv7ayf_tyE",
                title: "Bridgerton"
            },
        ]
    })
</script>

<template>
    <header class="header">
        <div class="wrapper">
            <div class="header-top"></div>
            <div class="header-bottom">
                <h3>Popular shows this week</h3>
                <div class="show-teasers">
                    <show-teaser :teasers="state.showTeasers" />
                </div>
                <div class="restriction">
                    <span></span>
                    <span>18+</span>
                </div>
            </div>
        </div>
    </header>
</template>
