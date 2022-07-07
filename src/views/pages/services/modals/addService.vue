<template>
    <div>
        <div>
            <div class="add--service_modal">
                <div class="add--service_content">
                    <div class="text-right" role="button" @click="close">
                        <i class="el-icon-close" style="color:red"></i>
                    </div>
                    <h5 class="mb-2 font-weight-bold text-center"> Add Service</h5>
                    <form action="" @submit.prevent="createService"> 
                        <div class="mb-3">
                            <label for="">Name</label>
                            <input type="text" v-model="payload.name">
                        </div>
                         <div class="mb-3">
                            <label for="">Description</label>
                            <textarea type="text" v-model="payload.description" ></textarea>
                        </div>
                        <div>
                            <span class="d-block text-center" v-if="loading" >
                                <i class="el-icon-loading" style="font-size:20px"></i> 
                            </span>
                            <button type="submit" v-else>
                                <span> Add Service </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {    
            payload:{
                name: '',
                description: ''
            },
            loading: false
        }
    },
    methods:{
        close(){
            this.$emit('close')
        },
        createService(){
            this.loading = true
            this.$store.dispatch("servicesModule/createService", this.payload);
            this.$emit('close');
            this.loading = false;
            this.payload = {}
        }
    }
}
</script>