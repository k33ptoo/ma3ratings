<template lang="">
 <div v-if="loading"  class="opacity-70 w-full p-4 py-8">
    <div  class="animate-pulse flex flex-col ">
      <div class="md:flex-1 items-center">
        <div>
          <div class="flex flex-row items-center  mt-2 my-8 gap-4">
            <div class="bg-slate-500 h-6 w-6"></div>
            <div  class="flex-grow grid grid-cols-4 gap-4">
              <div class="bg-slate-500 h-5 "></div>
              <div class="bg-slate-500 h-5 "></div>
              <div class="bg-slate-500 h-5"></div>
              <div class="bg-slate-500 h-5"></div>
            </div>
          </div>
        </div>
        <div>
          <div v-for="i of 5" :key="i" class="flex flex-row items-center  mt-2 my-8 gap-4">
            <div class="bg-slate-500 h-6 w-6 rounded-full"></div>
            <div  class="flex-grow grid grid-cols-4 gap-4">
              <div class="bg-slate-500 h-5 "></div>
              <div class="bg-slate-500 h-5 "></div>
              <div class="bg-slate-500 h-5"></div>
              <div class="bg-slate-500 h-5"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    props: {
        loading: false
    }
  
}
</script>