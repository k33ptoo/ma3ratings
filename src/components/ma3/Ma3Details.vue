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
                            <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900 flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    class="w-5 h-5">
                                    <path fill-rule="evenodd"
                                        d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clip-rule="evenodd" />
                                </svg>
                                <span>{{ vehicle.plate_number }}</span>
                            </DialogTitle>
                            <div class="mt-2 ">

                                <p class="text-sm text-gray-500">
                                    This will help passengers and drivers to make informed decisions and saccos improve
                                    their service.
                                </p>
                            </div>
                            <div class="mt-2 space-y-4">
                               

                            </div>

                            <div class="mt-4 space-x-4 flex">
                             

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
            date_created: new Date().toLocaleDateString('en-us', { year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "numeric" })
        }
    },

    methods: {
       
    }
}


</script>
  