<script setup>
    import { reactive } from 'vue';

    const state = reactive({
        date: new Date()
    })
</script>

<template>
    <footer class="footer">
        <div class="wrapper">
            <div class="footer-top">
                <h3>Questions? Call <a href="tel:0 801-000-723">0 801-000-723</a></h3>
                <div class="links">
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Accounts</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">Media Center</a></li>
                        <li><a href="#">Jobs</a></li>
                        <li><a href="#">Buy Gift Cards</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">Redeem Gift Vouchers</a></li>
                        <li><a href="#">Ways to Watch</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p class="copyright">
                    <strong>Netflix South Africa</strong> &copy; {{ state.date.getFullYear() }} Built by <strong><a href="http://nellymoseki.co.za/" target="_blank">Nelly Moseki</a></strong> | All Rights Reserved | <a href="https://help.netflix.com/legal/notices" target="_blank">Legal Notices</a> | <a href="https://help.netflix.com/legal/termsofuse" target="_blank">Terms of Use</a>
                </p>
            </div>
        </div>
    </footer>
</template>
