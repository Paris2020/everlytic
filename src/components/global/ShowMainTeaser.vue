<script setup>
    import Icon from "../global/Icon.vue"
    import LiteYouTubeEmbed from 'vue-lite-youtube-embed';
</script>

<template>
    <div class="main-teaser">
        <div class="side left">
            <ul class="tags">
                <li><a href="#">Documentary</a>|</li>
                <li><a href="#">TV Show</a>|</li>
                <li><a href="#">Knowledge</a></li>
            </ul><!-- END.tags -->

            <h1>PEACE</h1>
            <h3>2022 | DIRECTOR: ABC CORP | SEASON 1 (1 Episodes)</h3>
            <p>This documentary uncovers the major conflicts around the world. Trying solve the Mysterious of Global powers and Military Caabilities.</p>
            
            <div class="actions">
                <a href="#" class="btn small unclear">Stream now <icon name="play" /></a>
                <a href="#" class="btn small clear">All Episodes</a>
            </div><!-- END. actions -->
        </div><!-- END.side.left -->

        <div class="side right">
            <LiteYouTubeEmbed id="DvHJtez2IlY" title="Teaser" />
            <div class="watch"><icon name="play" />Watch Trailer</div>
        </div><!-- END.side.right -->
    </div>
</template>