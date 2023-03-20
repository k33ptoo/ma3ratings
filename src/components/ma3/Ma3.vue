<template lang="">
    <div class="w-full max-w-[1200px] h-full px-2 py-16 sm:px-0">
    <TabGroup>
      <TabList class="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
        <Tab
          as="template"
          v-slot="{ selected }"
        >
          <button
            :class="[
              'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
              selected
                ? 'bg-white shadow'
                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
            ]"
          >
            Ma3Rating
          </button>
        </Tab>
        <Tab
          as="template"
          v-slot="{ selected }"
        >
          <button
            :class="[
              'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
              selected
                ? 'bg-white shadow'
                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
            ]"
          >
            Cool Joints
          </button>
        </Tab>
      </TabList>

      <TabPanels class="mt-2">
        <TabPanel
          :class="[
            'rounded-xl bg-white p-3 ',
            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
          ]"
        >
        <div class="w-full gap-2 flex flex-col">
        <router-link to="/?view=new" class="bg-[#21D19F] flex hover:bg-opacity-80 gap-2 justify-center text-white font-bold py-2 px-4 text-center md:w-1/6 rounded-full">
            Rate a Ma3
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
  <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
    </svg>

        </router-link>
        <v-table/>
    </div>
        </TabPanel>
        <TabPanel
          :class="[
            'rounded-xl bg-white p-3',
            'ring-white w-full ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
          ]"
        >
        <div class="w-full min-w-ful gap-2 flex flex-col bg-red-50">
        </div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>
<script>
import VTable from '../ma3/Table.vue'
import { Tab, TabList, TabPanel, TabPanels, TabGroup } from '@headlessui/vue'

export default {
  components: {
    VTable,
    Tab, TabList, TabPanel, TabPanels, TabGroup,
  },

}
</script>