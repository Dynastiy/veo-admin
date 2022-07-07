<template>
  <div>
    <div>
      <div class="d-flex align-items-center justify-content-between mb-3">
        <h4>All Groups</h4>
        <div
          class="d-flex align-items-center justify-content-end main--button"
          @click="create_group = !create_group"
          role="button"
          style="gap: 5px"
        >
          <span class="material-icons"> add_circle </span>
          <span class="small">Create Group</span>
        </div>
      </div>
      <div class="items">
        <el-alert v-show="groups.data.length === 0 " title="No Group Created Yet" type="error"> </el-alert>
        <div
          class="category shadow-lg p-3 bg-white rounded-lg"
          v-for="group in groups.data"
          :key="group.id"
        >
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <h5 class="text-capitalize mb-1">{{ group.name }}</h5>
            </div>
            <div class="mb-3">
              <div class="btn-group dropleft">
                <span
                  type="button"
                  class="material-icons"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  more_vert
                </span>
                <div class="dropdown-menu">
                  <!-- <a
                    class="dropdown-item"
                    href="javascript:void(0)"
                    @click="edit_item = !edit_item"
                    >Edit group</a
                  >
                  <a
                    class="dropdown-item text-danger"
                    href="javascript:void(0)"
                    @click="deleteProductModal(item)"
                    >Delete group</a
                  > -->
                  <a
                    class="dropdown-item"
                    href="javascript:void(0)"
                    @click="addGroupMember(group)"
                    >Add Group Member</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Create Group Modal  -->
    <CreateGroup @close="closeCreateGroup" v-show="create_group" />

    <!-- Add Group Members  -->
    <AddGroupMember @close="closeAddMember" v-show="addMember"/>
  </div>
</template>

<script>
import {
  dollarFilter,
  percentFilter,
  percentageFilter,
  timeStamp,
  timeRange,
  dollarFilter2,
  sliceHash,
  sliceHash2,
  sliceContent,
  colorSplit,
} from "@/plugins/filter.js";
import CreateGroup from "./modals/createGroup.vue";
import AddGroupMember from "./modals/addGroupMember.vue";
export default {
  data() {
    return {
      dollarFilter,
      percentFilter,
      percentageFilter,
      timeStamp,
      timeRange,
      dollarFilter2,
      sliceHash,
      sliceHash2,
      sliceContent,
      colorSplit,
      create_group: false,
      addMember: false,
    };
  },
  methods: {
    closeCreateGroup() {
      this.create_group = false;
    },
    closeAddMember() {
      this.addMember = false;
    },
    addGroupMember(group) {
      this.addMember = true;
      this.$store.dispatch("groupsModule/getGroup", group.id);
    },
  },
  beforeMount() {
    this.$store.dispatch("groupsModule/getGroups");
  },
  computed: {
    groups() {
      return this.$store.getters["groupsModule/getGroups"];
    },
  },
  components: { CreateGroup, AddGroupMember },
};
</script>