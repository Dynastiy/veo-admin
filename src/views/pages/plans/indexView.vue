<template>
  <div>
    <div>
      <div class="d-flex align-items-center justify-content-between mb-3">
        <h4>All Plans</h4>
        <div
          class="d-flex align-items-center justify-content-end main--button"
          @click="add_plan = !add_plan"
          role="button"
          style="gap: 5px"
        >
          <span class="material-icons"> add_circle </span>
          <span class="small">Add Plan</span>
        </div>
      </div>
      <div class="items">
        <div
          class="category shadow-lg p-3 bg-white rounded-lg"
          v-for="plan in plans.data"
          :key="plan.id"
        >
          <div class="d-flex justify-content-between">
            <div>
              <h6 class="text-uppercase mb-1">{{ plan.name }}</h6>
              <p class="text-secondary small text-capitalize mb-2">
                {{ plan.description }}
              </p>
              <h6>NGN{{ plan.price }}</h6>
            </div>
            <div class="mb-3">
              <div class="btn-group dropleft">
                <span
                  type="button"
                  class="material-icons"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  more_vert
                </span>
                <div class="dropdown-menu">
                  <!-- <a
                    class="dropdown-item"
                    href="javascript:void(0)"
                    @click="edit_item = !edit_item"
                    >Edit Plan</a
                  >
                  <a
                    class="dropdown-item text-danger"
                    href="javascript:void(0)"
                    @click="deleteProductModal(item)"
                    >Delete Plan</a
                  > -->
                  <a
                    class="dropdown-item"
                    href="javascript:void(0)"
                    @click="addPlanBenefit(plan)"
                    >Add Plan Benefit</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Add item Modal  -->
    <AddPlan v-show="add_plan" @close="closeAddModal"/>

    <!-- Add Plan Benefits  -->
    <AddPlanBenefit v-show="add_benefit" @close="closeBenefitModal"/>
   
   <!-- Edit item Modal  -->
    

    <!-- Confirm Delete Modal  -->
    
  </div>
</template>

<script>
import {
  dollarFilter,
  percentFilter,
  percentageFilter,
  timeStamp,
  timeRange,
  dollarFilter2,
  sliceHash,
  sliceHash2,
  sliceContent,
  colorSplit,
} from "@/plugins/filter.js";
import AddPlan from "./modals/addPlan.vue";
import AddPlanBenefit from "./modals/addPlanBenefit.vue";
export default {
  components: { AddPlan, AddPlanBenefit },
  data() {
    return {
      dollarFilter,
      percentFilter,
      percentageFilter,
      timeStamp,
      timeRange,
      dollarFilter2,
      sliceHash,
      sliceHash2,
      sliceContent,
      colorSplit,
      add_plan: false,
      add_benefit: false
    };
  },
  methods: {
    closeAddModal(){
        this.add_plan = false
    },
    closeBenefitModal(){
        this.add_benefit = false
    },
    addPlanBenefit(plan){
        this.add_benefit = true
        this.$store.dispatch("plansModule/getPlan", plan.id);
    }
  },
  beforeMount() {
    this.$store.dispatch("plansModule/getPlans");
  },
  computed: {
    plans() {
      return this.$store.getters["plansModule/getPlans"];
    },
  },
};
</script>