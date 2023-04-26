<template>
  <feedback v-if="view === 'new'" />
  <home />
  <ma3-tabs/>
</template>
<script >
import Home from './components/home/Home.vue'
import Feedback from './components/ma3/Feedback.vue';
import Ma3Tabs from './components/ma3/Ma3Tabs.vue';

export default {
  components: {
    Home,
    Feedback
    ,
    Ma3Tabs
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