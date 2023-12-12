<script setup>
    import { reactive } from "vue"
    import ShowMainTeaser from "../components/global/ShowMainTeaser.vue"
    import ShowMiniTeaser from "../components/global/ShowMiniTeaser.vue"

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
            <div class="header-top">
                <show-main-teaser />
            </div><!-- END.header-top -->
            
            <div class="header-bottom">
                <h3>Popular shows this week</h3>
                <div class="show-mini-teasers">
                    <show-mini-teaser :teasers="state.showTeasers" />
                </div>
                <div class="restriction">
                    <span></span>
                    <span>18+</span>
                </div>
            </div><!-- END.header-bottom -->
        </div>
    </header>
</template>
