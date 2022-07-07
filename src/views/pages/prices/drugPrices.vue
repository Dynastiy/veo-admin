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
              @click="addDrugModal = !addDrugModal"
            >
              <span> <i class="el-icon-circle-plus-outline"></i> </span>
              <span class="small">Add Drug Price</span>
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
                  <th scope="col">DRUG NAME</th>
                  <th scope="col">HOSPITAL NAME</th>
                  <th scope="col">PRICE</th>
                  <th scope="col">DATE CREATED</th>
                  <!-- <th scope="col">ACTIONS</th> -->
                </tr>
              </thead>
              <tbody>
                <tr v-show="drugs.data.length === 0">
                  <span class="small text-danger"
                    >No Service prices Created yet</span
                  >
                </tr>
                <tr v-for="drug in drugs.data" :key="drug.id">
                  <td><input type="checkbox" name="" id="" /></td>
                  <td v-if="drug.drug" role="button" @click="viewDrug(drug)">
                    {{ drug.drug.name }}
                  </td>
                  <td> <span v-if="drug.hospital"> {{ drug.hospital.name }}</span> <span v-else class="text-danger">No Hospital Selected</span> </td>
                  <td>₦{{ drug.price }}</td>
                  <td>{{ timeStamp(drug.created_at) }}</td>
                  <!-- <td>
                    <span class="d-flex align-items-center" style="gap:20px">
                        <span role="button" @click="deleteDrug(drug)">
                        <i class="el-icon-delete-solid" style="font-size:15px; color:red"></i>
                    </span>
                    <span role="button">
                        <i class="el-icon-edit" style="font-size:15px"></i>
                    </span>
                    </span>
                  </td> -->
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- Modal for Adding Service -->
      <div>
        <AddDrug v-show="addDrugModal" @close="closeModal" />
      </div>

      <!-- Modal to View Services -->
      <div>
        <ViewDrug v-show="viewDrugModal" @close="closeViewDrugModal" />
      </div>

      <!-- Modal to delete Service Price -->
        <div>
            <DeleteConfirmation v-show="deleteDrugModal" @close="closeDeleteDrugModal"/>
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
import AddDrug from "./modals/addDrug.vue";
import ViewDrug from "./modals/viewDrug.vue";
import DeleteConfirmation from "./modals/deleteDrugConfirmation.vue";
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
      addDrugModal: false,
      viewDrugModal: false,
      activeName: 'first',
      deleteDrugModal: false
    };
  },

  methods: {
    closeModal() {
      this.addDrugModal = false;
    },
    closeViewDrugModal() {
      this.viewDrugModal = false;
    },
    viewDrug(drug) {
      this.$store.dispatch("drugsModule/getDrugPriceById", drug.id);
      this.viewDrugModal = true;
    },
    deleteDrug(drug){
        this.deleteDrugModal = true
        this.$store.dispatch("drugsModule/getDrugPriceById", drug.id);
    },
    closeDeleteDrugModal(){
        this.deleteDrugModal = false
    }
  },
  components: { AddDrug, ViewDrug, DeleteConfirmation },
  beforeMount() {
    this.$store.dispatch("drugsModule/getDrugsPrices");
  },
  computed: {
    drugs() {
      return this.$store.getters["drugsModule/getDrugsPrices"];
    },
  },
};
</script>