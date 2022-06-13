<template>
    <div>
        <div>
            <div class="d-flex align-items-center justify-content-between mb-3 ">
                <h4>All Plans</h4>
                <div class="d-flex align-items-center justify-content-end main--button" @click="add_item = !add_item" role="button" style="gap:5px">
                    <span class="material-icons">
                        add_circle
                    </span>
                    <span>Add Plan</span>
                </div>
            </div>
            <div class="items">
                <div class="category shadow-lg p-3 bg-white rounded-lg">
                    <div class="d-flex justify-content-end">
                        <!-- <img class="mb-3 rounded-circle" :src="baseurl + 'services/photos/' + item.app_icon + '?' + Date.now() " alt=""> -->
                        <div class="mb-3">
                            <div class="btn-group dropleft">
                                <span type="button"  class="material-icons" data-toggle="dropdown" aria-expanded="false">
                                    more_vert
                                </span>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="javascript:void(0)" @click="edit_item = !edit_item">Edit Plan</a>
                                    <!-- <a class="dropdown-item" href="javascript:void(0)" @click="addPlan(item)">Add Plan</a> -->
                                    <!-- <a class="dropdown-item" href="javascript:void(0)"  @click="addFeature(item)">Add Features</a> -->
                                    <a class="dropdown-item text-danger" href="javascript:void(0)" @click="deleteProductModal(item)">Delete Plan</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h5 class="text-uppercase mb-1"> Plan Name </h5>
                    <p class="text-secondary small text-capitalize mb-2"> Plan description </p>
                    <!-- <p class="text-secondary small"> <span v-if="item.delivery_time !== 'null' ">{{ item.delivery_time }} Days</span> <span v-else>Not Specified</span> </p> -->
                    <h6> NGN300,000 </h6>

                    <!-- <div class="text-right">
                        <button class="main--button mt-3">
                            View More
                        </button>
                    </div> -->
                </div>
            </div>
        </div>


        <!-- Add item Modal  -->
        <div class="add-item-modal" v-show="add_item">
            <div class="add-item-container">
                <div class="mb-2 text-right">
                    <span class="material-icons text-danger" role="button" @click="add_item = !add_item">
                        close
                    </span>
                </div>
                <h4 class="mb-3 text-dark">Add New Plan</h4>
                <div class="add-item-content">
                    <form action="">
                        <div class="mb-3">
                            <label for="">Plan Name</label>
                            <input type="text" v-model="payload.name">
                        </div>
                        <div class="mb-3">
                            <label for="">Plan Description</label>
                            <textarea v-model="payload.description"></textarea>
                        </div>
                        
                        <div>
                            <div class="d-flex justify-content-center" v-if="loading">
                                <div class="spinner-border" role="status">
                                <span class="sr-only">Loading...</span>
                                </div>
                            </div>
                            <button class="add--item main--button" v-else>Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

         <!-- Edit item Modal  -->
        <div class="add-item-modal" v-show="edit_item">
            <div class="add-item-container">
                <div class="mb-2 text-right">
                    <span class="material-icons text-danger" role="button" @click="edit_item = !edit_item">
                        close
                    </span>
                </div>
                <h4 class="mb-3 text-dark">Edit Plan</h4>
                <div class="add-item-content">
                    <form action="">
                       
                        <div class="mb-3">
                            <label for="">Enter New Plan Name</label>
                            <input type="text" v-model="dataObj.name">
                        </div>
                        <div class="mb-3">
                            <label for="">New Plan Description</label>
                            <textarea v-model="dataObj.description"></textarea>
                        </div>
                        <div>
                            <div class="d-flex justify-content-center" v-if="loading2">
                                <div class="spinner-border" role="status">
                                <span class="sr-only">Loading...</span>
                                </div>
                            </div>
                            <button class="add--item btn" v-else>Edit Plan</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <!-- Confirm Delete Modal  -->
        <div class="add-item-modal" v-show="delete_item">
            <div class="add-item-container">
                <div class="mb-2 text-right">
                    <span class="material-icons text-danger" role="button" @click="delete_item = !delete_item">
                        close
                    </span>
                </div>
                <h4 class="mb-3 text-dark">Delete</h4>
                <div class="add-item-content">
                    <h4 class="text-center">Are you sure? 🤔</h4>
                    <div class="d-flex justify-content-center" v-if="loading3">
                        <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                    <div class="mt-3 d-flex align-items-center" style="gap:20px" v-else>
                        <button class="btn-danger w-100 add--button p-2" @click="delete_item = !delete_item ">Yes</button>
                        <button  class="btn-success w-100 add--button p-2" @click="delete_item = !delete_item ">No</button>
                    </div>
                </div>
            </div>
        </div>

        <AddPlan @close="closePlanModal" v-show="add_plan" :item_id="product_id"/>
        <AddFeature @close="closeFeatureModal" v-show="add_feature" :product2_id="feature_product_id"/>
    </div>
</template>

<script>
import AddPlan from '@/components/modals/addPlan.vue'
import { dollarFilter, percentFilter, percentageFilter, timeStamp, timeRange, dollarFilter2, sliceHash, sliceHash2, sliceContent, colorSplit } from '@/plugins/filter.js'
import AddFeature from '@/components/modals/addFeature.vue';
export default {
    components:{
    AddPlan,
    AddFeature
},
    data(){
        return {
            dollarFilter, percentFilter, percentageFilter, timeStamp, timeRange, dollarFilter2, sliceHash, sliceHash2, sliceContent, colorSplit,
            products: [],
            payload: {
                name: '',
                category_id: ''
            },
            dataObj:{
                name: '',
                description: ''
            },
            new_icon_image: '',
            categories: '',
            add_item: false,
            edit_item: false,
            delete_item: false,
            add_plan: false,
            add_feature: false,
            loading: false,
            item_id: '',
            loading2: false,
            loading3: false,
            product_id: '',
            feature_product_id: ''
        }
    },
    methods:{
        addPlan(item){
            this.product_id = item.id;
            console.log(this.product_id);
            this.add_plan = !this.add_plan
        },
        closePlanModal(){
            this.add_plan = !this.add_plan
            this.getProducts()
        },
        closeFeatureModal(){
            // this.add_feature = !this.add_feature
            this.getProducts()
        },
        async editProductModal(item){
            console.log(item.id);
            this.item_id = item.id
            this.getProduct();
            this.edit_item = true
        },
       
        async deleteProductModal(item){
            this.delete_item = true
            console.log(item.id);
            this.item_id = item.id
        },
    },
    mounted(){
        
    }
    
}
</script>