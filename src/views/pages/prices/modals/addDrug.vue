<template>
  <div>
    <div>
      <div class="add--service_modal">
        <div class="add--service_content">
          <div class="text-right" role="button" @click="close">
            <i class="el-icon-close" style="color: red"></i>
          </div>
          <h5 class="mb-2 font-weight-bold text-center">Add Drug Price</h5>
          <form action="" @submit.prevent="createService">
            <div class="mb-3">
              <label for="">Select Hospital</label>
              <select name="" id="" v-model="payload.hospital_id">
                <option v-for="(hospital, index) in hospitals.data" :key="index" :value="hospital.id"> {{ hospital.name }} </option>
              </select>
            </div>
            <div class="mb-3">
              <label for="">Select Drug</label>
              <select name="" id="" v-model="payload.drug_id">
                <option v-for="item in drugs.data" :key="item.id" :value="item.id"> {{ item.name }} </option>
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
                <span> Add Drug Price </span>
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
        drug_id: "",
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
        formData.append('drug_id', this.payload.drug_id)
        formData.append('hospital_id', this.payload.hospital_id)
        formData.append('price', this.payload.price)
      this.loading = true;
      this.$store.dispatch("drugsModule/createDrugPrices", formData);
      this.$emit("close");
      this.loading = false;
      this.payload = {};
    },
  },
  computed: {
    hospitals() {
      return this.$store.getters["hospitalModule/hospitals"];
    },
    drugs() {
      return this.$store.getters["drugsModule/getDrugs"];
    },
  },
};
</script>