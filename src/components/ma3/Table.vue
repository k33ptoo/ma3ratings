<template>
  <table-loader :loading="loading" />
  <div v-if="!loading" class="overflow-x-sauto w-full max-w-[1200px]">
    <div class="inline-block py-2 w-full">
      <div class="overflow-hidden">
        <table class="min-w-full table-auto md:table-fixed">
          <thead class="">
            <tr>
              <th
                class="hidden md:table-cell py-3 md:px-6 px-2 text-sm font-bold tracking-wider text-left uppercase text-gray-400"
                scope="col">
                #
              </th>
              <th class="table-cell py-3 md:px-6 px-2 text-sm font-bold tracking-wider text-left uppercase text-gray-400" scope="col">
                Sacco
              </th>
              <th class="table-cell py-3 md:px-6 px-2 text-sm font-bold tracking-wider text-left uppercase text-gray-400"
                scope="col">
                Plate Number
              </th>
              <th
                class="table-cell py-3 md:px-6 px-2 text-sm font-bold tracking-wider text-left uppercase text-gray-400"
                scope="col">
                Rating
              </th>
              <th
                class="hidden md:table-cell py-3 md:px-6 px-2 text-sm font-bold tracking-wider text-left uppercase text-gray-400"
                scope="col">
                Driver
              </th>
              <th
                class="hidden md:table-cell py-3 md:px-6 px-2 text-sm font-bold tracking-wider text-left uppercase text-gray-400"
                scope="col">
                Date
              </th>
              <th class="hidden md:table-cell py-3 md:px-6 px-2 text-sm font-bold tracking-wider text-left uppercase text-gray-400" scope="col">
                User
              </th>
            </tr>
          </thead>
          <tbody>
            <table-item class="rounded-xl border-1" v-for="(vehicle, i) in vehicles.slice(0, visiblerows)" :key="i" :vehicle="vehicle"
               />
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import TableItem from "./TableItem.vue";
import TableLoader from "./TableLoader.vue";
import { vehicleStore } from '../../store/vehicleStore';

export default {
  name: "Table",
  components: { TableItem, TableLoader },

  setup() {
    const vStore = vehicleStore();
    return {
      vStore
    }
  },
  data() {
    return {
      loading: true,
      vehicles: [],
      visiblerows: 10
    }
  },
  mounted() {
    this.getVehicles();
    if(this.vehicles.length === 0) {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
    }, 3000);
    }
  },
  methods: {
    async getVehicles() {
      await this.vStore.getVehicles()
      this.vehicles = this.vStore.vehicles;
    }

  },
}
</script>

