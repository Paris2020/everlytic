<script setup>
    const props = defineProps({
        teasers: Array
    })
</script>

<template>
    <div class="show-teaser" v-for="(teaser, index) in props.teasers">
        <video width="100" height="200">
            <source :src="teaser.src" type="video/mp4">
            <p>Your browser does not support the video tag.</p>
        </video>
        <h4>{{ teaser.title }}</h4>
    </div>
</template>