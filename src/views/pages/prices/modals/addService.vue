<template>
  <div>
    <div>
      <div class="add--service_modal">
        <div class="add--service_content">
          <div class="text-right" role="button" @click="close">
            <i class="el-icon-close" style="color: red"></i>
          </div>
          <h5 class="mb-2 font-weight-bold text-center">Add Service</h5>
          <form action="" @submit.prevent="createService">
            <div class="mb-3">
              <label for="">Select Hospital</label>
              <select name="" id="" v-model="payload.hospital_id">
                <option v-for="(hospital, index) in hospitals.data" :key="index" :value="hospital.id"> {{ hospital.name }} </option>
              </select>
            </div>
            <div class="mb-3">
              <label for="">Select Service</label>
              <select name="" id="" v-model="payload.service_id">
                <option v-for="item in services.data" :key="item.id" :value="item.id"> {{ item.name }} </option>
              </select>
            </div>
            <div class="mb-3">
              <label for="">Enter Price</label>
              <input type="number" v-model="payload.price" />
            </div>
            <div>
              <span class="d-block text-center" v-if="loading">
                <i class="el-icon-loading" style="font-size: 20px"></i>
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
  data() {
    return {
      payload: {
        service_id: "",
        hospital_id: "",
        price: "",
      },
      loading: false,
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    createService() {
        let formData = new FormData()
        formData.append('service_id', this.payload.service_id)
        formData.append('hospital_id', this.payload.hospital_id)
        formData.append('price', this.payload.price)
      this.loading = true;
      this.$store.dispatch("servicesModule/createServicePrices", formData);
      this.$emit("close");
      this.loading = false;
      this.payload = {};
    },
  },
  computed: {
    hospitals() {
      return this.$store.getters["hospitalModule/hospitals"];
    },
    services() {
      return this.$store.getters["servicesModule/getServices"];
    },
  },
};
</script>