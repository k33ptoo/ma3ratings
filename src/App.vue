
<template>
  <feedback v-if="view === 'new'" />
  <div class="bg-slate-200 w-screen h-screen">
    <div class="w-full justify-center flex">
      <home />
    </div>
  </div>
</template>
<script >
import Home from './components/home/Home.vue'
import Feedback from './components/ma3/Feedback.vue';

export default {
  components: {
    Home,
    Feedback
  },
  setup() {
  },
  data() {
    return {
      view: 'old'
    }
  }
  ,
  watch: {
    '$route.query.view': {
      handler: function (newState) {
        this.view = newState
      },
      deep: true,
      immediate: true
    }
  }
}
</script>
