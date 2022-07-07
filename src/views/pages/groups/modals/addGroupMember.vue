<template>
  <div>
    <div>
      <div class="add--service_modal">
        <div class="add--service_content">
          <div class="text-right" role="button" @click="close">
            <i class="el-icon-close" style="color: red"></i>
          </div>
          <h5 class="mb-2 font-weight-bold text-center">Add User to Group</h5>
          <form action="" @submit.prevent="createPlanBenefit">
            <div class="mb-3">
              <label for="">Select User</label>
              <select name="" id="" v-model="payload.user_id">
                <option v-for="(user, index) in users" :key="index" :value="user.id"> {{ user.first_name }} {{ user.last_name }} </option>
              </select>
            </div>
            <div class="mb-3">
              <label for="">Select Plan</label>
              <select name="" id="" v-model="payload.plan_id">
                <option v-for="item in plans.data" :key="item.id" :value="item.id"> {{ item.name }} </option>
              </select>
            </div>
            <div>
              <button type="submit">
                <span> Add Group Member </span>
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
        user_id: "",
        plan_id: "",
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
        formData.append('user_id', this.payload.user_id)
        formData.append('plan_id', this.payload.plan_id)
        formData.append('group_id', this.group.id)
      this.$store.dispatch("groupsModule/addGroupMembers", formData);
      this.$emit("close");
      this.payload = {};
    },
  },
  computed: {
    plans() {
      return this.$store.getters["plansModule/getPlans"];
    },
    users() {
      return this.$store.getters["userModule/getUsers"];
    },
    group() {
      return this.$store.getters["groupsModule/getGroup"].data;
    },
  },
};
</script>