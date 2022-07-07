<template>
  <div>
    <div>
      <div>
        <h4 class="font-weight-bold mb-3">Hospitals</h4>
      </div>
      <!-- User Data Table  -->

      <!-- Top that contains a Search Filter -->
      <div class="table--top">
        <div class="d-flex align-items-center justify-content-between mt-4">
          <div class="d-flex align-items-center" style="gap: 15px">
            <IconComponent
              icon="bx:filter"
              class="icon"
              style="color: var(--main-color)"
            />
            <div class="table--search">
              <IconComponent icon="bytesize:search" style="font-size: 18px" />
              <input type="text" placeholder="Search" />
            </div>
          </div>

          <div>
            <div>
              <button
                class="main--button d-flex align-items-center"
                @click="dialogFormVisible = true"
                style="gap: 10px"
              >
                <IconComponent icon="bi:plus-circle" />
                <span class="small">Add Hospital</span>
              </button>
            </div>
            <!-- <el-button type="text" @click="dialogTableVisible = true">open a Table nested Dialog</el-button> -->

            <!-- Form -->

            <el-dialog
              title="Add a New Hospital"
              :visible.sync="dialogFormVisible"
            >
              <form class="p-3" @submit.prevent="createHospital">
                <div class="form-group">
                  <label for="exampleInputEmail1">Hospital Name</label>
                  <input
                    v-model="payload.name"
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Address</label>
                  <input
                    v-model="payload.address"
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="d-flex" style="gap:20px">
                  <div class="w-100">
                    <div class="form-group">
                      <label for="exampleInputEmail1">Country</label>
                      <input
                        v-model="payload.country"
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                  </div>
                  <div class="w-100">
                    <div class="form-group">
                      <label for="exampleInputEmail1">State</label>
                      <input
                        v-model="payload.state"
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                  </div>
                  <div class="w-100">
                    <div class="form-group">
                      <label for="exampleInputEmail1">LGA</label>
                      <input
                        v-model="payload.lga"
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Description</label>
                  <input
                    v-model="payload.description"
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Phone Number</label>
                  <input
                    v-model="payload.phone_number"
                    type="tel"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    v-model="payload.email"
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Password</label>
                  <input
                    v-model="payload.password"
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Class of Hospital</label>
                  <select class="form-control" v-model="payload.class">
                    <option value="A">1</option>
                    <option class="B">2</option>
                    <option class="C">3</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Select Profile Photo</label>
                  <input
                  @change="onFileChange"
                    type="file"
                    class="form-control"
                    id="exampleInputEmail8"
                    aria-describedby="emailHelp"
                  />
                </div>
                <span slot="footer" class="dialog-footer">
                  <button type="danger" @click="dialogFormVisible = false">
                    Cancel
                  </button>
                  <button type="submit">Register</button>
                </span>
              </form>
            </el-dialog>
          </div>
        </div>
      </div>
      <!-- Deposits Table  -->
      <section class="mt-4">
        <!-- <h3 class="text-bold">Recent Deposits</h3> -->
        <div class="mt-4 other--tables bg-white rounded-lg p-3">
          <div class="table-responsive">
            <table class="table table-centered table-nowrap mb-0">
              <thead>
                <tr>
                  <th scope="col"><input type="checkbox" name="" id="" /></th>
                  <th scope="col">NAME</th>
                  <th scope="col">ADDRESS</th>
                  <th scope="col">UNIQUE ID</th>
                  <th scope="col">CLASS</th>
                  <!-- <th scope="col">STATUS</th> -->
                  <th scope="col">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                <tr @click="viewHospital(hospital)" role="button" v-for="(hospital, index) in hospitals.data" :key="index">
                  <td><input type="checkbox" name="" id="" /></td>
                  <td>
                    <h6>{{ hospital.name }}</h6>
                    <p class="text-secondary">{{ hospital.phone_number }}</p>
                  </td>
                  <td>{{ hospital.address }}</td>
                  <td class="text-uppercase">{{ hospital.unique_id }}</td>
                  <td>{{ hospital.class }}</td>
                  <!-- <td>&#8358; 23,500</td> -->
                  <!-- <td><span class="inactive">inactive</span></td> -->
                  <td>
                    <IconComponent
                      icon="ci:edit"
                      class="mr-2"
                      style="font-size: 20px"
                    />
                    <IconComponent icon="el:trash" class="mr-2" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogFormVisible: false,
      form: {
        name: "",
      },
      payload: {
        name: "",
        description: "",
        email: "",
        phone_number: "",
        country: "",
        state: "",
        lga: "",
        address: "",
        profile_picture: "",
        class: "",
        password:''
      },
    };
  },
  methods: {
    viewHospital(hospital) {
      this.$router.push("/hospitals/"+hospital.id);
    },
    createHospital() {
      let formData = new FormData()
      formData.append("name", this.payload.name)
      formData.append("description", this.payload.description)
      formData.append("email", this.payload.email)
      formData.append("phone_number", this.payload.phone_number)
      formData.append("country", this.payload.country)
      formData.append("state", this.payload.state)
      formData.append("lga", this.payload.lga)
      formData.append("address", this.payload.address)
      formData.append("profile_picture", this.payload.profile_picture)
      formData.append("class", this.payload.class)
      formData.append("password", this.payload.password)
      this.$store.dispatch("hospitalModule/createHospital", formData);
      this.payload = {}
      this.dialogFormVisible = false

    },
    onFileChange(e) {
     var val = e.target.files[0]
     this.payload.profile_picture = val
    }
  },
  beforeMount() {
    this.$store.dispatch("hospitalModule/getHospitals");
  },
  computed: {
    hospitals() {
      return this.$store.getters["hospitalModule/hospitals"];
    },
  },
};
</script>