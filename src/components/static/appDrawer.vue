<template>
  <div>
    <div class="main--app--drawer shadow-lg">
      <div class="top--image text-center">
        <img src="@/assets/img/logo.svg" width="150" alt="" />
      </div>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo">
       <el-menu-item index="1">
        <router-link to="/"><span class="material-icons mr-2" style="font-size:15px">
          apps
        </span>
        <span>Dashboard</span></router-link>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <span class="material-icons mr-2" style="font-size:15px">
          people
          </span>
          <span>Users</span>
        </template>
        <el-menu-item-group title="">
          <router-link to="/hospitals"><el-menu-item index="2-1">Hospitals</el-menu-item></router-link>
          <router-link to="/enrollees"><el-menu-item index="2-2">Enrollees</el-menu-item></router-link>
          <el-menu-item index="2-3">Corporate Body</el-menu-item>
          <router-link to="/groups"><el-menu-item index="2-4">Groups</el-menu-item></router-link>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="3">
        <router-link to="/plans"><span class="material-icons mr-2" style="font-size:15px">
          stairs
        </span>
        <span>Plans</span></router-link>
      </el-menu-item>
      <el-menu-item index="4">
        <router-link to="/invoices"><span class="material-icons mr-2" style="font-size:15px">
          receipt
        </span>
        <span>Invoices</span></router-link>
      </el-menu-item>
      <el-menu-item index="5">
        <router-link to="/payments"><span class="material-icons mr-2" style="font-size:15px">
          credit_card
        </span>
        <span>Payments</span></router-link>
      </el-menu-item>
      <el-menu-item index="5">
        <router-link to="/services">
          <span class="material-icons mr-2" style="font-size:15px">
          miscellaneous_services
        </span>
        <span>Services</span>
        </router-link>
      </el-menu-item>
      <el-menu-item index="5">
        <router-link to="/drugs">
          <span class="material-icons mr-2" style="font-size:15px">
          medication_liquid
        </span>
        <span>Drugs</span>
        </router-link>
      </el-menu-item>
      <el-menu-item index="5">
        <router-link to="/service-prices">
          <span class="material-icons mr-2" style="font-size:15px">
          request_quote
        </span>
        <span>Prices</span>
        </router-link>
      </el-menu-item>
    </el-menu>
    </div>
  </div>
</template>


<script>
import menu_items from "@/api/menu.js";
export default {
  data: () => {
    return {
      menu: menu_items,
    };
  },
};
</script>