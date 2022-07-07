<template>
    <div>
        <div>
            <div>
                <div class="add-item-modal" v-show="edit_item">
      <div class="add-item-container">
        <div class="mb-2 text-right">
          <span
            class="material-icons text-danger"
            role="button"
            @click="edit_item = !edit_item"
          >
            close
          </span>
        </div>
        <h4 class="mb-3 text-dark">Edit Plan</h4>
        <div class="add-item-content">
          <form action="">
            <div class="mb-3">
              <label for="">Enter New Plan Name</label>
              <input type="text" v-model="dataObj.name" />
            </div>
            <div class="mb-3">
              <label for="">New Plan Description</label>
              <textarea v-model="dataObj.description"></textarea>
            </div>
            <div>
              <div class="d-flex justify-content-center" v-if="loading2">
                <div class="spinner-border" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
              <button class="add--item btn" v-else>Edit Plan</button>
            </div>
          </form>
        </div>
      </div>
    </div>
            </div>
        </div>
    </div>
</template>