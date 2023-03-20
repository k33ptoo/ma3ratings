import axios from "axios";
import { defineStore } from 'pinia'


const apiKey = import.meta.env.VITE_API_KEY;

const client = axios.create({
    baseURL: "https://ma3rating-9952.restdb.io/rest",
    headers:
    {
        'cache-control': 'no-cache',
        'content-type': 'application/json',
        'x-apikey': apiKey,
    }
})

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
                const response = await client.get("/vehicles");
                this.vehicles = response.data;
                console.log(this.vehicles);
            } catch (error) {
                this.error = error;
            } finally {
                this.loading = false;
            }
        },
        async sendFeedback(vehicle) {
            this.loading = true;
            try {
                const response = await client.post("/vehicles", vehicle);
                this.vehicles.push(response.data);
            } catch (error) {
                this.error = error;
            } finally {
                this.loading = false;
            }
        }
    }
})
