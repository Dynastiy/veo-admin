<template>
  <div>
    <div class="view--modal_mask">
      <div class="view--modal_content">
        <div class="text-right" role="button" @click="close">
          <i class="el-icon-close" style="color: red"></i>
        </div>
        <div>
          <div class="user--top row align-items-center">
            <div class="col-md-12 d-flex align-items-center" style="gap:10px">
              <div class="img--container">
                <img
                  src="@/assets/img/no_user.png"
                  style="width: 35px; height: 35px; border-radius: 50%"
                  alt=""
                />
                <img src="" alt="" />
              </div>
              <div class="">
                <h6>{{ user.first_name }} {{ user.last_name }}</h6>
              </div>
            </div>
            <div class="col-md-12">
                <!-- <div style="height:4px; width:100%; background-color:red"></div> -->
                <hr>
              </div>
            
          </div>
          <div class="user--details">
            <div class="row">
              <div class="col-md-6">
                <h6 class="text-secondary small">Name</h6>
                <h6>{{ user.first_name }} {{ user.last_name }}</h6>
              </div>
              <div class="col-md-6">
                <h6 class="text-secondary small">Unique ID</h6>
                <h6>{{ user.unique_id }}</h6>
              </div>
            </div>
            <div class="row mt-4">
              <div class="col-md-12">
                <h6 class="text-secondary small">Address</h6>
                <h6>{{ user.address || "Not Specified" }}</h6>
              </div>
            </div>
            <div class="row mt-4">
              <div class="col-md-6">
                <h6 class="text-secondary small">Phone Number</h6>
                <h6>{{ user.phone_number || "Not Specified" }}</h6>
              </div>
              <div class="col-md-6">
                <h6 class="text-secondary small">Email</h6>
                <h6>{{ user.email || "Not Specified" }}</h6>
              </div>
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
      id: this.$route.params.id,
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
  // beforeMount() {
  //   this.$store.dispatch("userModule/getUserById", this.id);
  // },
  computed: {
    user() {
      return this.$store.getters["userModule/user"];
    },
  },
};
</script>