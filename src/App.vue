
<template>
  <feedback v-if="view === 'new'" />
  <home />
  <ma3 />
</template>
<script >
import Home from './components/home/Home.vue'
import Feedback from './components/ma3/Feedback.vue';
import Ma3 from './components/ma3/Ma3.vue';

export default {
  components: {
    Home,
    Feedback
    ,
    Ma3
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
