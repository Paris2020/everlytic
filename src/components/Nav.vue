<script setup>
    import { reactive, onMounted } from "vue"
    import Icon from "../components/global/Icon.vue"

    const state = reactive({
        isExpanded: false,
        scrollPos: null
    })

    const toggle = () => {
		state.isExpanded = !state.isExpanded;
	}

    const updateScroll = () => {
        state.scrollPos = window.scrollY;
    }

    onMounted(() => {
        window.addEventListener('scroll', updateScroll)
    });
</script>

<template>
    <nav class="nav" :class="[{'isExpanded': state.isExpanded}, {'sticky': state.scrollPos > 70}]">
        <div class="wrapper">
            <a href="/" class="logo"><img class="logo" src="/images/logo.png" width="150" alt="Netflix logo"></a>
            <ul class="menu">
                <li><a href="#" v-scroll-to="'.home'">Home</a></li>
                <li><a href="#" v-scroll-to="'.movies'">Movies</a></li>
                <li><a href="#" v-scroll-to="'.shows'">TV Shows</a></li>
                <li><a href="#" v-scroll-to="'.list'">My List</a></li>
            </ul>
            <div class="profile">
                <icon name="search" />
                <a href="#" class="profile-item">
                    <img src="/images/avatar-female-dark.png" width="50" alt="Profile Picture">
                    <icon name="dropdown" />
                </a>
            </div>
            <!-- <div class="burger" @click="toggle()"><span></span></div> -->
        </div>
    </nav>
</template>
