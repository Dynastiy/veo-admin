<template>
    <div>
        <div>
            <div class="add--service_modal">
                <div class="add--service_content"  >
                    <div class="text-right" role="button" @click="close">
                        <i class="el-icon-close" style="color:red"></i>
                    </div>
                    <h5 class="font-weight-bold" v-if="drug.drug">  {{ drug.drug.name }} </h5>
                    <p class="small text-secondary" v-if="drug.drug"> {{ drug.drug.description }} </p>
                    <h6 class="my-2" v-if="drug.hospital"><span>Hospital:</span> {{ drug.hospital.name }} </h6>
                    <h4 class=""> ₦{{ drug.price }}</h4>
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
        drug(){
            return this.$store.getters['drugsModule/getDrugPrice']
        }
    }
}
</script>