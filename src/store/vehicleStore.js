import axios from "./axiosConfig";
import { defineStore } from 'pinia'

export const vehicleStore = defineStore("vehicleStore", {
    state: () => ({
        vehicles: [],
        vehicle: {},
        loading: false,
        error: null,
    }),
    actions: {
        async getVehicles() {
            this.loading = true;
            try {
                const response = await axios.get("/vehicles");
                this.vehicles = response.data;
            } catch (error) {
                this.error = error;
            } finally {
                this.loading = false;
            }
        },
        async sendFeedback(vehicle) {
            this.loading = true;
            try {
                const response = await axios.post("/vehicles", vehicle);
                this.vehicles.push(response.data);
            } catch (error) {
                this.error = error;
            } finally {
                this.loading = false;
            }
        }
    }
})
