<template>
  <div>
    <div>
        <div>
            <h4 class="font-weight-bold mb-3">
                Services
            </h4>
        </div>
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
              <span class="small">Add Drug</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Services Table  -->
      <section class="mt-4">
        <!-- <h3 class="text-bold">Recent Deposits</h3> -->
        <div class="mt-4 other--tables bg-white rounded-lg p-3">
          <div class="table-responsive">
            <table class="table table-centered table-nowrap mb-0">
              <thead>
                <tr>
                  <th scope="col"><input type="checkbox" name="" id="" /></th>
                  <th scope="col">DRUG NAME</th>
                  <th scope="col">DESCRIPTION</th>
                  <th scope="col">DATE CREATED</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="drug in drugs.data" :key="drug.id">
                  <td><input type="checkbox" name="" id="" /></td>
                  <td role="button" @click="viewDrug(drug)">{{ drug.name }}</td>
                  <td>{{ sliceHash2(drug.description) }}</td>
                  <td>{{ timeStamp(drug.created_at) }}</td>
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
        <ViewService v-show="viewServiceModal" @close="closeViewServiceModal"/>
      </div>
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
      viewServiceModal: false
    };
  },

  methods: {
    closeModal() {
      this.addServiceModal = false;
    },
    closeViewServiceModal(){
        this.viewServiceModal = false
    },
    viewDrug(drug){
        this.$store.dispatch("drugsModule/getDrugById", drug.id);
        this.viewServiceModal = true
    }
  },
  components: { AddService, ViewService },
  beforeMount() {
    this.$store.dispatch("drugsModule/getDrugs");
  },
  computed: {
    drugs() {
      return this.$store.getters["drugsModule/getDrugs"];
    },
  },
};
</script>