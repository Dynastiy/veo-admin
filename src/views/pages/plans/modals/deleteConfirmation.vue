<template>
    <div>
        <div>
            <div class="add-item-modal" v-show="delete_item">
      <div class="add-item-container">
        <div class="mb-2 text-right">
          <span
            class="material-icons text-danger"
            role="button"
            @click="delete_item = !delete_item"
          >
            close
          </span>
        </div>
        <h4 class="mb-3 text-dark">Delete</h4>
        <div class="add-item-content">
          <h4 class="text-center">Are you sure? 🤔</h4>
          <div class="d-flex justify-content-center" v-if="loading3">
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
          <div class="mt-3 d-flex align-items-center" style="gap: 20px" v-else>
            <button
              class="btn-danger w-100 add--button p-2"
              @click="delete_item = !delete_item"
            >
              Yes
            </button>
            <button
              class="btn-success w-100 add--button p-2"
              @click="delete_item = !delete_item"
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
        </div>
    </div>
</template>