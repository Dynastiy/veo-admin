<template>
  <div>
    <div>
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
                <span>Add Hospital</span>
              </button>
            </div>
            <!-- <el-button type="text" @click="dialogTableVisible = true">open a Table nested Dialog</el-button> -->

            <!-- Form -->

            <el-dialog
              title="Add a New Hospital"
              :visible.sync="dialogFormVisible"
            >
              <form class="p-3">
                  <div class="form-group">
                  <label for="exampleInputEmail1">Hospital Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Address</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Phone Number</label>
                  <input
                    type="tel"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="form-group">
                      <label for="exampleInputEmail1">Class of Hospital</label>
                    <select class="form-control">
                        <option>Class 1</option>
                        <option>Class 2</option>
                        <option>Class 3</option>
                </select>
                </div>
                <span slot="footer" class="dialog-footer">
                <el-button type="danger" @click="dialogFormVisible = false">Cancel</el-button>
                <el-button type="success" @click="dialogFormVisible = false"
                  >Register</el-button
                >
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
                  <th scope="col">NO OF ENROLEES</th>
                  <th scope="col">LAST INVOICE</th>
                  <th scope="col">CHARGE</th>
                  <th scope="col">STATUS</th>
                  <th scope="col">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                <tr @click="viewHospital" role="button">
                  <td><input type="checkbox" name="" id="" /></td>
                  <td>
                    <h6>New Age Hospital</h6>
                    <p class="text-secondary">08093915841</p>
                  </td>
                  <td>Lorem ipsum dolor sit quibusdam nam ut. Libero?</td>
                  <td class="text-center">300</td>
                  <td>&#8358; 245,390</td>
                  <td>&#8358; 23,500</td>
                  <td><span class="inactive">inactive</span></td>
                  <td>
                    <IconComponent
                      icon="ci:edit"
                      class="mr-2"
                      style="font-size: 20px"
                    />
                    <IconComponent icon="el:trash" class="mr-2" />
                  </td>
                </tr>
                <tr @click="viewHospital" role="button">
                  <td><input type="checkbox" name="" id="" /></td>
                  <td>
                    <h6>St Francis Hospital</h6>
                    <p class="text-secondary">08093915841</p>
                  </td>
                  <td>Lorem ipsum dolor sit quibusdam nam ut. Libero?</td>
                  <td class="text-center">300</td>
                  <td>&#8358; 245,390</td>
                  <td>&#8358; 23,500</td>
                  <td><span class="active">active</span></td>
                  <td>
                    <IconComponent
                      icon="ci:edit"
                      class="mr-2"
                      style="font-size: 20px"
                    />
                    <IconComponent icon="el:trash" class="mr-2" />
                  </td>
                </tr>
                <tr @click="viewHospital" role="button">
                  <td><input type="checkbox" name="" id="" /></td>
                  <td>
                    <h6>St John Hospital</h6>
                    <p class="text-secondary">08093915841</p>
                  </td>
                  <td>Lorem ipsum dolor sit quibusdam nam ut. Libero?</td>
                  <td class="text-center">300</td>
                  <td>&#8358; 245,390</td>
                  <td>&#8358; 23,500</td>
                  <td><span class="active">active</span></td>
                  <td>
                    <IconComponent
                      icon="ci:edit"
                      class="mr-2"
                      style="font-size: 20px"
                    />
                    <IconComponent icon="el:trash" class="mr-2" />
                  </td>
                </tr>
                <tr @click="viewHospital" role="button">
                  <td><input type="checkbox" name="" id="" /></td>
                  <td>
                    <h6>Afrairn Hospital</h6>
                    <p class="text-secondary">08093915841</p>
                  </td>
                  <td>Lorem ipsum dolor sit quibusdam nam ut. Libero?</td>
                  <td class="text-center">300</td>
                  <td>&#8358; 245,390</td>
                  <td>&#8358; 23,500</td>
                  <td><span class="active">active</span></td>
                  <td>
                    <IconComponent
                      icon="ci:edit"
                      class="mr-2"
                      style="font-size: 20px"
                    />
                    <IconComponent icon="el:trash" class="mr-2" />
                  </td>
                </tr>

                <tr>
                  <div class="my-3">
                    <span
                      >Active Hospitals: <span>234</span>/ <span>706</span>
                    </span>
                  </div>
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
    };
  },
  methods:{
      viewHospital(){
          this.$router.push('/hospitals/_id')
      }
  }
};
</script>