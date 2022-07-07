<template>
  <div>
    <div>
      <div class="add--service_modal">
        <div class="add--service_content">
          <div class="text-right" role="button" @click="close">
            <i class="el-icon-close" style="color: red"></i>
          </div>
          <h5 class="mb-2 font-weight-bold text-center">Add Plan benefit</h5>
          <form action="" @submit.prevent="createPlanBenefit">
            <!-- <div class="mb-3">
              <label for="">Select Hospital</label>
              <select name="" id="" v-model="payload.hospital_id">
                <option v-for="(hospital, index) in hospitals.data" :key="index" :value="hospital.id"> {{ hospital.name }} </option>
              </select>
            </div> -->
            <div class="mb-3">
              <label for="">Select Service</label>
              <select name="" id="" v-model="payload.service_id">
                <option v-for="item in services.data" :key="item.id" :value="item.id"> {{ item.name }} </option>
              </select>
            </div>
            <div>
              <button type="submit">
                <span> Add Benefit </span>
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
  data() {
    return {
      payload: {
        service_id: "",
      },
      loading: false,
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    createPlanBenefit() {
        let formData = new FormData()
        formData.append('service_id', this.payload.service_id)
        formData.append('plan_id', this.plan.id)
       
      this.$store.dispatch("plansModule/createPlanBenefit", formData);
      this.$emit("close");
      this.payload = {};
    },
  },
  computed: {
    plan() {
      return this.$store.getters["plansModule/getPlan"];
    },
    services() {
      return this.$store.getters["servicesModule/getServices"];
    },
  },
};
</script>