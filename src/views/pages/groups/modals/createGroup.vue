<template>
  <div>
    <div>
      <div class="add--service_modal">
        <div class="add--service_content">
          <div class="text-right" role="button" @click="close">
            <i class="el-icon-close" style="color: red"></i>
          </div>
          <h5 class="mb-2 font-weight-bold text-center">Create Group</h5>
          <form action="" @submit.prevent="createGroup">
            <div class="mb-3">
              <label for="">Enter Group Name</label>
              <input type="text" v-model="payload.name">
            </div>
            <div>
              <button type="submit">
                <span> Create Group </span>
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
        name: "",
      },
      loading: false,
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    createGroup() {
        // let formData = new FormData()
        // formData.append('service_id', this.payload.service_id)
        // formData.append('plan_id', this.plan.id)
       
      this.$store.dispatch("groupsModule/createGroup", this.payload);
      this.$emit("close");
      this.payload = {};
    },
  },
};
</script>