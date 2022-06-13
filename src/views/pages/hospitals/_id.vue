<template>
  <div>
    <div>
      <div class="hospital--top d-flex align-items-center" style="gap: 20px">
        <div class="logo">
          <img
            src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/06/medical-logo.jpg"
            width="100%"
            alt=""
          />
        </div>
        <div>
          <h2 class="text-white">Federal Medical Center, Owerri</h2>
          <p class="text-white">
            <span><IconComponent icon="bytesize:location" /></span>
            <span>24 Ikenegbu road Owerri</span>
          </p>
          <div class="d-flex align-items-center mt-2" style="gap: 10px">
            <button class="btn btn-danger">Delete</button>
            <button class="btn btn-info">Edit</button>
          </div>
        </div>
      </div>

      <div class="details mt-3">
        <div class="mt-4 row">
          <div class="col-6">
            <div class="">
              <div class="">
                <h5 class="text-secondary">Address</h5>
                <p>24 Ikenegbu road Owerri</p>
              </div>
            </div>

            <div class="d-flex mt-4" style="gap: 50px">
              <div class="">
                <div class="">
                  <h5 class="text-secondary">Phone Number</h5>
                  <p>08091923918</p>
                </div>
              </div>
              <div class="">
                <div class="">
                  <h5 class="text-secondary">Email</h5>
                  <p>fmc@gmail.com</p>
                </div>
              </div>
            </div>

            <div class="d-flex mt-4" style="gap: 50px">
              <div class="">
                <div class="">
                  <h5 class="text-secondary">Unique Number</h5>
                  <p>452452DC</p>
                </div>
              </div>
              <div class="">
                <div class="">
                  <h5 class="text-secondary">Class of Hospital</h5>
                  <p>Class C</p>
                </div>
              </div>
            </div>

            <div class=" mt-4">
              <div class="">
                <h5 class="text-secondary">Contact Person</h5>
                <p>John Doe</p>
                <p class="small">08012972999</p>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="mb-2 d-flex align-items-center justify-content-between">
                <h4 class="">Price List</h4>
                <button class="btn btn-info">Edit Prices</button>
            </div>
            <el-table :data="tableData" border style="width: 100%">
              <el-table-column prop="service" label="Service/Drug">
              </el-table-column>
              <el-table-column prop="price" label="Price">
              </el-table-column>
            </el-table>
            
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
        tableData: [{
          service: 'General Consultation',
          price: '350',
        }, {
          service: 'Eye Doctor',
          price: '850',
        }, {
          service: 'Optometrist',
          price: '450',
        }, {
          service: 'Dietician',
          price: '350',
        }]
      }
    }
  }
</script>