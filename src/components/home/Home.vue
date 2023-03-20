
<template>
  <div class="w-full h-screen items-center flex flex-col  bg-white">
    <div class="bg-blue-500 w-full h-96 items-center justify-center flex flex-col">
      <div class="w-full flex max-w-[1200px] h-full md:items-center p-4 md:p-0">
        <div class="flex-col flex ">
          <span class="text-5xl text-white py-2">Welcome to Ma3Ratings</span>
          <span class="text-lg text-gray-200 py-2">Help others make a better travel decisions by giving feedback on your
            experience</span>
        </div>
        <Vue3Lottie :animation-data="travel" :height="150" :width="150" />
      </div>
    </div>
    <div class=" top-56 absolute w-full flex flex-col items-center">
      <ma3 />
    </div>
  </div>
</template>

<script>
import Ma3 from '../ma3/Ma3.vue'

import { gsap } from 'gsap'
import { SteppedEase } from 'gsap/all'
import { TextPlugin } from 'gsap/TextPlugin'
import { Vue3Lottie } from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'
import travel from '../../assets/travel.json'

export default {
  name: 'Home',
  components: { Ma3, Vue3Lottie },
  setup() {
    return {
      travel
    }
  },

  mounted() {
    gsap.registerPlugin(TextPlugin)
    gsap.registerPlugin(SteppedEase)
    //this.animateText()
  },
  methods:
  {
    animateText() {
      let text = document.querySelector(".text1")
      let cursor1 = document.querySelector(".cursor1")
      let tl = gsap.fromTo(cursor1, { autoAlpha: 0, x: 2 }, { autoAlpha: 1, duration: 0.5, repeat: -1, ease: SteppedEase.config(1) });
      tl.play()
      gsap.to(text, {
        text: {
          value: "Lets others know how you felt about the service provided by the Sacco",
          delimiter: ""
        },
        duration: 5,
        delay: 1,
        ease: "none",
        onUpdate: () => text.appendChild(cursor1),
        onComplete: () => {
          tl.pause()
        }
      })
    }
  }

}
</script>