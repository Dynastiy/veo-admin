<template>
  <div>
    <div class="bg-white p-4">
      <div class="price--tabs">
        <h4 class="font-weight-bold mb-3">Prices</h4>
        <el-tabs type="card">
          <el-tab-pane label="Service Prices"> 
            <h5>Service Prices</h5>
            <ServicePrices/> </el-tab-pane>
          <el-tab-pane label="Drug Prices">
            <h5>Drug Prices</h5>
            <DrugPrices/>
          </el-tab-pane>
        </el-tabs>
      </div>
      
    </div>
  </div>
</template>

<script>
import ServicePrices from './servicePrices.vue';
import DrugPrices from './drugPrices.vue';

export default {
    data() {
        return {
            activeName: "first"
        };
    },
    methods: {},
    components: { ServicePrices, DrugPrices }
};
</script>