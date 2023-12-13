<script setup>
    import { reactive, onMounted } from "vue"
    import Icon from "../components/global/Icon.vue"

    const state = reactive({
        isExpanded: false,
    })

    const toggle = () => {
		state.isExpanded = !state.isExpanded;
	}
</script>

<template>
    <nav class="nav" :class="{'isExpanded': state.isExpanded}">
        <div class="wrapper">
            <a href="/" class="logo"><img class="logo" src="/images/logo.png" width="150" alt="Netflix logo" /></a>
            <ul class="menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">Movies</a></li>
                <li><a href="#">TV Shows</a></li>
                <li><a href="#">My List</a></li>
            </ul>
            <div class="profile">
                <icon name="search" />
                <a href="#" class="profile-item">
                    <img src="/images/avatar-female-dark.png" width="40" alt="Profile Picture" />
                    <icon name="dropdown" />
                </a>
            </div>
            <!-- <div class="burger" @click="toggle()"><span></span></div> -->
        </div>
    </nav>
</template>
