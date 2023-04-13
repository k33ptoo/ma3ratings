<template>
  <div class="bg-gradient-to-r from-blue-500 to-blue-600 w-full md:h-[600px] p-8 md:p-0 items-center justify-center flex flex-col">
    <div class="w-full flex max-w-[1200px] h-full md:items-center ">
      <div class="flex-col flex  gap-2">
        <div id="header">
          <router-link to="/" >
            <span class="md:text-5xl text-3xl text-white py-2">
            Welcome to Ma3Ratings</span>
          </router-link>
        </div>
        <span class="md:text-lg text-gray-50 py-2 pb-3 md:w-96 font-light">
            At <b>Ma3Ratings</b>, we believe every ride matters. Help others make better travel decisions by giving feedback on your
            public travel experiences.
        </span>
        <router-link to="/?view=new"
          class="bg-[#21D19F] flex hover:bg-opacity-80 gap-2 justify-center text-white font-bold py-2 px-4 text-center md:w-60 rounded-full">
          Rate a Ma3
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
            <path fill-rule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clip-rule="evenodd" />
          </svg>

        </router-link>
      </div>
    </div>
    <div
        class="hidden md:block overflow-hidden bg-blue-50 rounded-l-full absolute h-96 w-2/4 top-24 right-0 lg:-bottom-28 lg:-right-30">
        <Vue3Lottie  :animation-data="travel" :height="350" :width="350" />
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