<template lang="">
    <div class="w-full gap-2 flex flex-col">
        <div class="text-2xl text-gray-400 py-2">
            <span class="text1"></span>
            <span class="cursor1">|</span>
        </div>
        <router-link to="/?view=new" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded md:w-1/4">
            Rate a Vehicle
        </router-link>
        <v-table/>
    </div>
</template>
<script>
import VTable from '../ma3/Table.vue'
import { gsap } from 'gsap'
import { SteppedEase } from 'gsap/all'
import { TextPlugin } from 'gsap/TextPlugin'

export default {
    components: {
        VTable,
    },
    mounted() {
        gsap.registerPlugin(TextPlugin)
        gsap.registerPlugin(SteppedEase)
        this.animateText()
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