<template>
  <tr class="odd:bg-slate-200 odd:opacity-90 rounded-lg">
    <td class="hiddenmd:table-cell rounded-lg py-4 md:px-6 px-2 text-sm font-medium  text-gray-400">
      {{ vehicle.id }}
    </td>
    <td class="py-4 md:px-6 px-2 text-sm font-medium text-gray-400">
      {{ vehicle.sacco }}
    </td>
    <td class="py-4 md:px-6 px-2 text-sm font-medium text-gray-400">
      {{ vehicle.plate_number }}
    </td>
    <td class="py-4 md:px-6 px-2 text-sm font-medium text-gray-400">
      <star-rating :star-size="20" v-model:rating="vehicle.rating" :read-only="true" :rounded-corners="true" />
    </td>
    <td class="hiddenmd:table-cell py-4 md:px-6 px-2 text-sm font-medium text-gray-400">
      {{ vehicle.driver_name }}
    </td>
    <td class="hiddenmd:table-cell py-4 md:px-6 px-2 text-sm font-medium text-gray-400">
      {{ vehicle.date_created }}
    </td>
    <td class="hidden md:table-cell py-4 md:px-6 px-2 text-sm font-medium text-gray-400">
      {{ vehicle.user_name }}
    </td>
    
  </tr>
</template>

<script>
import gsap from "gsap";
import StarRating from 'vue-star-rating'

export default {
  name: "TableItem",
  components: {
    StarRating
  },
  props: {
    vehicle: {},
  },
 
  // watch: {
  //   vehicle: {
  //     handler: function (newval, oldVal) {
  //       let tl = gsap.timeline({defaults: {duration: .7}});
  //       if (this.vehicleId === newval.id) {
  //         tl.fromTo(this.$el, { backgroundColor: "#557086" }, {  backgroundColor: "#213743", ease: "power1.inOut", delay: 0.1 });
  //       }
  //     },
  //     deep: true,
  //   },
  // },

  // mounted() {
  //   let tl = gsap.timeline();
  //   tl.fromTo(this.$el, { opacity: 0 }, {  opacity: 1, ease: "power1.inOut", stagger: 0.2 });
  // },

  
}
</script>

<style scoped></style>
