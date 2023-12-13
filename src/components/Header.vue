<script setup>
    import { reactive } from "vue"
    import ShowMiniTeaser from "../components/global/ShowMiniTeaser.vue"
    import ShowMainTeaser from "../components/global/ShowMainTeaser.vue"
    

    const state = reactive({
        showTeasers: [
            {
                id: "nhC8AG8cwcc",
                src: "https://www.youtube.com/watch?v=",
                title: "Fool Me Once"
            },
            {
                id: "oU8f8QrUCOM",
                src: "https://www.youtube.com/watch?v=",
                title: "The Brothers Sun"
            },
            {
                id: "Di310WS8zLk",
                src: "https://www.youtube.com/watch?v=",
                title: "Wednesday Addams"
            },
            {
                id: "gpv7ayf_tyE",
                src: "https://www.youtube.com/watch?v=",
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
