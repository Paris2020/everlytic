<script setup>
    import LiteYouTubeEmbed from 'vue-lite-youtube-embed';
    const props = defineProps({
        teasers: Array
    })
</script>

<template>
    <div class="mini-teaser" v-for="(teaser, index) in props.teasers">
        <!-- <video width="100" height="200">
            <source :src="teaser.src" type="video/mp4">
            <p>Your browser does not support the video tag.</p>
        </video> -->
        <LiteYouTubeEmbed :id="teaser.id" :title="teaser.title" />
        <h4>{{  teaser.title }}</h4>
    </div>
</template>