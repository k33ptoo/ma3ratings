<template lang="">
  <div class="w-full flex items-center flex-col">
    <div class="w-full max-w-[1200px] h-full px-2 p-8 sm:px-0">
    <TabGroup>
      <TabList class="flex space-x-1 hisdden rounded-xl bg-blue-900/20 p-1">
        <Tab
          as="template"
          v-slot="{ selected }"
        >
          <button
            :class="[
              'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-green-700',
              'focus:bg-green-50 focus:outline-none',
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
              'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-green-700',
              ' focus:bg-green-50 focus:outline-none',
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
            'rounded-xl bg-white p-3 '
          ]"
        >
        <div class="w-full gap-2 flex flex-col">
        
        <v-table/>
    </div>
        </TabPanel>
        <TabPanel
          :class="[
            'rounded-xl bg-white p-3',
          ]"
        >
        <div class="w-full min-w-ful gap-2 flex flex-col bg-red-50">
        </div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
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