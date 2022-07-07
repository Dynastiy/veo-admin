<template>
  <div>
      
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
            <button
              class="
                main--button
                d-flex
                align-items-center
                justify-content-between
              "
              style="gap: 10px"
              @click="addServiceModal = !addServiceModal"
            >
              <span> <i class="el-icon-circle-plus-outline"></i> </span>
              <span class="small">Add Service Price</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Services Table  -->
      <section class="mt-4">
        <!-- <h3 class="text-bold">Recent Deposits</h3> -->
        <div class="mt-4 other--tables bg-white rounded-lg">
          <div class="table-responsive p-2">
            <table class="table table-centered table-nowrap mb-0">
              <thead>
                <tr>
                  <th scope="col"><input type="checkbox" name="" id="" /></th>
                  <th scope="col">SERVICE NAME</th>
                  <th scope="col">HOSPITAL NAME</th>
                  <th scope="col">PRICE</th>
                  <th scope="col">DATE CREATED</th>
                  <th scope="col">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                <tr v-show="services.data.length === 0">
                  <span class="small text-danger"
                    >No Service prices Created yet</span
                  >
                </tr>
                <tr v-for="service in services.data" :key="service.id">
                  <td><input type="checkbox" name="" id="" /></td>
                  <td v-if="service.service" role="button" @click="viewService(service)">
                    {{ service.service.name }}
                  </td>
                  <td> <span v-if="service.hospital"> {{ service.hospital.name }}</span> <span v-else class="text-danger">No Hospital Selected</span> </td>
                  <td>₦{{ service.price }}</td>
                  <td>{{ timeStamp(service.created_at) }}</td>
                  <td>
                    <span class="d-flex align-items-center" style="gap:20px">
                        <span role="button" @click="deleteService(service)">
                        <i class="el-icon-delete-solid" style="font-size:15px; color:red"></i>
                    </span>
                    <span role="button">
                        <i class="el-icon-edit" style="font-size:15px"></i>
                    </span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- Modal for Adding Service -->
      <div>
        <AddService v-show="addServiceModal" @close="closeModal" />
      </div>

      <!-- Modal to View Services -->
      <div>
        <ViewService v-show="viewServiceModal" @close="closeViewServiceModal" />
      </div>

      <!-- Modal to delete Service Price -->
        <div>
            <DeleteConfirmation v-show="deleteServiceModal" @close="closeDeleteServiceModal"/>
        </div>
  </div>
</template>

<script>
import {
  dollarFilter,
  percentFilter,
  createRef,
  percentageFilter,
  timeStamp,
  timeRange,
  dollarFilter2,
  sliceHash,
  sliceHash2,
  sliceContent,
  colorSplit,
} from "@/plugins/filter";
import AddService from "./modals/addService.vue";
import ViewService from "./modals/viewService.vue";
import DeleteConfirmation from "./modals/deleteConfirmation.vue";
export default {
  data() {
    return {
      dollarFilter,
      percentFilter,
      createRef,
      percentageFilter,
      timeStamp,
      timeRange,
      dollarFilter2,
      sliceHash,
      sliceHash2,
      sliceContent,
      colorSplit,
      addServiceModal: false,
      viewServiceModal: false,
      activeName: 'first',
      deleteServiceModal: false
    };
  },

  methods: {
    closeModal() {
      this.addServiceModal = false;
    },
    closeViewServiceModal() {
      this.viewServiceModal = false;
    },
    viewService(service) {
      this.$store.dispatch("servicesModule/getServicePriceById", service.id);
      this.viewServiceModal = true;
    },
    deleteService(service){
        this.deleteServiceModal = true
        this.$store.dispatch("servicesModule/getServicePriceById", service.id);
    },
    closeDeleteServiceModal(){
        this.deleteServiceModal = false
    }
  },
  components: { AddService, ViewService, DeleteConfirmation },
  beforeMount() {
    this.$store.dispatch("servicesModule/getServicesPrices");
  },
  computed: {
    services() {
      return this.$store.getters["servicesModule/getServicesPrices"];
    },
  },
};
</script>