<template>
  <div>
    <div>
      <div class="add-item-modal">
        <div class="add-item-container">
          <div class="mb-2 text-right">
            <span
              class="material-icons text-danger"
              role="button"
              @click="close"
            >
              close
            </span>
          </div>
          <h5 class="mb-3 text-dark text-center">Delete Service</h5>
          <div class="add-item-content">
            <h5 class="">Are you sure? 🤔</h5>
            <p class="text-secondary small" style="font-size: 12px">
              This action is irreversible
            </p>
            <!-- <div class="d-flex justify-content-center" >
                        <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                        </div>
                    </div> -->
            <div class="mt-3 d-flex align-items-center" style="gap: 20px">
              <button class="w-100 bg-danger add--button" @click="deleteItem()">
                Yes
              </button>
              <button class="bg-success w-100 add--button" @click="close">
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // service: {}
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    deleteItem() {
      this.$store.dispatch(
        "servicesModule/deleteServicePrices",
        this.service.id
      );
      this.close();
    },
  },
  mounted() {
    console.log(this.service);
  },
  computed: {
    service() {
      return this.$store.getters["servicesModule/getServicePrice"];
    },
  },
};
</script>