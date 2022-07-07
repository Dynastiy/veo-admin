<template>
    <div>
        <div>
            <div class="add--service_modal">
                <div class="add--service_content">
                    <div class="text-right" role="button" @click="close">
                        <i class="el-icon-close" style="color:red"></i>
                    </div>
                    <h5 class="mb-2 font-weight-bold">  {{ service.name }} </h5>
                    <p class="small text-secondary"> {{ service.description }} </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {    
            loading: false
        }
    },
    methods:{
        close(){
            this.$emit('close')
        },
    },
    computed: {
        service(){
            return this.$store.getters['servicesModule/getService']
        }
    }
}
</script>