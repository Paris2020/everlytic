<script setup>
    import Icon from "../global/Icon.vue"
</script>

<template>
    <div class="main-teaser">
        <div class="left-side">
            <div class="tags">
                <ul>
                    <li><a href="#">Documentary</a>|</li>
                    <li><a href="#">TV Show</a>|</li>
                    <li><a href="#">Knowledge</a></li>
                </ul>
            </div>
            <h1>PEACE</h1>
            <h3>2022 | DIRECTOR: ABC CORP | SEASON 1 (1 Episodes)</h3>
            <p>This documentary uncovers the major conflicts around the world. Trying solve the Mysterious of Global powers and Military Caabilities.</p>
            
            <div class="actions">
                <a href="#" class="btn small unclear">
                    <icon name="play" />
                </a>
                <a href="#" class="btn small clear">All Episodes</a>
            </div>
        </div><!-- END.left-side -->

        <div class="right-side">
            <video width="300" height="300">
                <source src="https://www.youtube.com/watch?v=2xb9Ty-1frw&pp=ygUgbmV0ZmxpeCBwZWFjZSBkb2N1bWVudGFyeSB0ZWFzZXI%3D" type="video/mp4">
                <p>Your browser does not support the video tag.</p>
            </video>
        </div><!-- END.right-side -->
    </div>
</template>