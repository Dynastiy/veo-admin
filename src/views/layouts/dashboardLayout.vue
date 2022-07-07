<template>
    <div>
        <app-header/>
        
        <app-drawer/>
        <div id="main--dashboard">
            <router-view/>
        </div>
    </div>
</template>

<script>
import AppDrawer from '@/components/static/appDrawer.vue'
import AppHeader from '@/components/static/appHeader.vue'
export default {
    components: {
        AppDrawer, AppHeader
    },
     async created(){
        console.log(this.$store.getters['auth/getUser'])
        let loggedIn = this.$store.getters['auth/isLoggedIn']
        console.log(loggedIn);
   }
}
</script>