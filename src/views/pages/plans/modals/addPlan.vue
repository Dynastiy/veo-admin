<template>
    <div>
        <div>
            <div class="add-item-modal" >
            <div class="add-item-container">
                <div class="mb-2 text-right">
                    <span class="material-icons text-danger" role="button" @click="close">
                        close
                    </span>
                </div>
                <h4 class="mb-3 text-dark">Add New Plan</h4>
                <div class="add-item-content">
                    <form action="" @submit.prevent="createPlan">
                        <div class="mb-2">
                            <label for="">Plan Name</label>
                            <input type="text" v-model="payload.name">
                        </div>
                        <div class="mb-2">
                            <label for="">Plan Description</label>
                            <textarea v-model="payload.description"></textarea>
                        </div>
                         <div class="mb-2">
                            <label for="">Price</label>
                            <input type="text" v-model="payload.price">
                        </div>
                        
                        <div>
                            <button class="add--item main--button">Create</button>
                        </div>
                    </form>
                </div>
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
                description: '',
                price: ''
            },
        }
    },
    methods:{
        createPlan(){
            this.$store.dispatch("plansModule/createPlan", this.payload);
            this.payload = {}
            this.close()
        },
        close(){
            this.$emit('close')
        }
    }
}
</script>