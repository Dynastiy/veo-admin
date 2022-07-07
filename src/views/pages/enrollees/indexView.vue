<template>
  <div>
    <div>
      <h4 class="font-weight-bold mb-3">Enrollees</h4>
    </div>
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
          <!-- <div>
                            <button class="main--button d-flex align-items-center" style="gap:10px"><IconComponent icon="bi:plus-circle"/> <span>Add Visit</span></button>
                        </div> -->
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
                  <th scope="col">UNIQUE NO</th>
                  <!-- <th scope="col">AMOUNT</th>
                <th scope="col">TREATMENT</th>
                <th scope="col">DATE</th> -->
                  <th scope="col">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in users" :key="user.id">
                  <td><input type="checkbox" name="" id="" /></td>
                  <td @click="goToUser(user)" role="button">
                    <h6>{{ user.first_name }} {{ user.last_name }}</h6>
                    <p class="text-secondary">
                      {{ user.phone_number || "Null" }}
                    </p>
                  </td>
                  <td>{{ user.address || "Null" }}</td>
                  <td class="text-uppercase">{{ user.unique_id }}</td>
                  <!-- <td>&#8358; 23,450</td>
                 <td>Malaria</td>
                 <td>12/12/2022</td> -->
                  <td>
                    <IconComponent
                      icon="ci:edit"
                      class="mr-2"
                      style="font-size: 20px"
                    />
                    <IconComponent icon="el:trash" class="mr-2" />
                    <IconComponent icon="gridicons:ellipsis" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>

    <!-- View Enrollee -->
    <ViewEnrollee v-show="viewEnrollee" @close="closeModal"/>

  </div>
</template>


<script>
import ViewEnrollee from './modals/viewEnrollee.vue';
export default {
    data(){
        return{
            viewEnrollee: false
        }
    },
    methods: {
        goToUser(user) {
            this.viewEnrollee = true
            this.$store.dispatch("userModule/getUserById", user.id);
            // this.$router.push({ name: "Enrolee", params: { id: user.id } });
        },
        closeModal(){
            this.viewEnrollee = false
        }
    },
    beforeMount() {
        this.$store.dispatch("userModule/getUsers");
    },
    computed: {
        users() {
            return this.$store.getters["userModule/getUsers"];
        },
    },
    components: { ViewEnrollee }
};
</script>