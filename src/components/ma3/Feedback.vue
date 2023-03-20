<template>
    <TransitionRoot appear :show="isOpen" as="template">
        <Dialog as="div" @close="closeModal" class="relative z-10">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-black bg-opacity-25" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
                <div class="flex min-h-full items-center justify-center p-4 text-center">
                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95">
                        <DialogPanel
                            class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
                                Please enter your feedback
                            </DialogTitle>
                            <div class="mt-2">
                                <p class="text-sm text-gray-500">
                                    This will help passengers and drivers to make informed decisions and saccos improve
                                    their service.
                                </p>
                            </div>
                            <div class="mt-2 space-y-4">
                                <div class="flex gap-2">
                                    <div>
                                        <label class="label">Sacco:</label>
                                        <Combobox  v-model="sacco">
                                            <ComboboxInput aria-placeholder="Sacco" class="w-full border uppercase placeholder:normal-case border-gray-300 rounded-md p-2" @change="query = $event.target.value" />
                                            <ComboboxOptions class="absolute bg-gray-50 p-2 rounded-b-lg">
                                                <ComboboxOption v-for="vehicle in filteredVehicles" :key="vehicle.id"
                                                    :value="vehicle.sacco">
                                                    {{ vehicle.sacco }}
                                                </ComboboxOption>
                                            </ComboboxOptions>
                                        </Combobox>
                                    </div>
                                    <div>
                                        <label class="label">Plate Number:</label>
                                        <Combobox  v-model="plate_number">
                                            <ComboboxInput class="w-full border uppercase placeholder:normal-case border-gray-300 rounded-md p-2" @change="query = $event.target.value" />
                                            <ComboboxOptions class="absolute bg-gray-50 p-2 rounded-b-lg">
                                                <ComboboxOption v-for="vehicle in filteredVehicles" :key="vehicle.id"
                                                    :value="vehicle.plate_number">
                                                    {{ vehicle.plate_number }}
                                                </ComboboxOption>
                                            </ComboboxOptions>
                                        </Combobox>
                                    </div>
                                </div>

                                <div class="flex gap-2">
                                    <div> <label class="label">Driver's Name:</label>
                                        <input v-model="driver_name" type="text" placeholder="Driver's Name(If Known)"
                                            class="w-full border border-gray-300 rounded-md p-2" />
                                    </div>
                                    <div>
                                        <label class="label">Your Name:</label>
                                        <input v-model="user_name" type="text" placeholder="Your Name"
                                            class="w-full border border-gray-300 rounded-md p-2" />
                                    </div>
                                </div>
                                <label class="label">Comments:</label>
                                <textarea v-model="comment" placeholder="Comments"
                                    class="w-full border border-gray-300 rounded-md p-2" />
                                <div class="space-y-2">
                                    <label class="label ">How do you rate their services?</label>
                                    <star-rating :star-size="30" v-model:rating="rating" :rounded-corners="true" />

                                </div>
                            </div>

                            <div class="mt-4 space-x-4 flex">
                                <button type="button"
                                    class="w-1/2 inline-flex justify-center rounded-md border border-transparent bg-green-200 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                    @click="sendFeedBack">
                                    Send Feedback
                                </button>

                                <button type="button"
                                    class="w-1/2 inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                    @click="closeModal">
                                    Cancel
                                </button>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>
  
<script >
import { ref } from 'vue'
import { vehicleStore } from '../../store/vehicleStore';
import StarRating from 'vue-star-rating'
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
    Combobox,
    ComboboxInput,
    ComboboxOptions,
    ComboboxOption,
} from '@headlessui/vue'
import router from '../../router';

export default {
    components: {
        TransitionRoot,
        TransitionChild,
        Dialog,
        DialogPanel,
        DialogTitle,
        Combobox,
        ComboboxInput,
        ComboboxOptions,
        ComboboxOption,
        StarRating
    },

    setup() {
        const vehicleS = vehicleStore()
        const isOpen = ref(true)
        const closeModal = () => {
            isOpen.value = false
            router.go(-1)
        }
        const openModal = () => {
            isOpen.value = true
        }
        const vehicles = vehicleS.vehicles

        const selectedPlate = ref(vehicles[0])
        const query = ref('')

        return {
            isOpen,
            closeModal,
            openModal,
            vehicleS,
            vehicles,
            selectedPlate,
            query
        }
    },

    computed: {
        filteredVehicles() {
            return this.vehicles.filter((vehicle) => {
                return vehicle.plate_number.toLowerCase().includes(this.query.toLowerCase())
            })
        }
    },

    data() {
        return {
            plate_number: '',
            sacco: '',
            driver_name: '',
            user_name: '',
            comment: '',
            rating: 3,
            date_created: new Date().toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "numeric" })
        }
    },

    methods: {
        sendFeedBack() {
            let vehicle = {
                plate_number: this.plate_number.toUpperCase(),
                sacco: this.sacco.toUpperCase(),
                driver_name: this.driver_name,
                user_name: this.user_name,
                comment: this.comment,
                rating: this.rating,
                date_created: this.date_created
            }
            if (this.plate_number == '' || this.sacco == '' || this.user_name == '' || this.comment == '' || this.rating == 0) {
                alert('Please fill all fields')
            } else {
                this.vehicleS.sendFeedback(vehicle)
                this.closeModal()
            }
        }
    }
}


</script>
  