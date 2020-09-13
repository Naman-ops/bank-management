<template>
    <div>
        <div class="h-100 ">
        <keep-alive>
            <component :is=selectedComponent>
                <app-bankerAuth></app-bankerAuth>
                <app-customerAuth></app-customerAuth>

            </component>
        </keep-alive>
        </div>
        </div>
</template>

<script>
    import bankerAuth from './bankerAuth.vue'
    import customerAuth from './customerAuth.vue'
    import {bus} from '../../main.js'

    export default {
        components:{
            'app-bankerAuth':bankerAuth,
            'app-customerAuth':customerAuth,
        },
        data(){
            return {
                selectedComponent:'app-bankerAuth'
            }
        },

        mounted(){
            bus.$on('showForm',(val=>{
                this.selectedComponent=val
            }))
        }
    }

</script>

<style scoped></style>