<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// Dummy tracking data
const trackingData = {
    "PPW-1001": {
        history: [
            {
                status: "Shipment Created",
                message: "Order booked and tracking number generated",
                location: "Online System",
                time: "Sep 15, 2025 - 02:15 PM"
            },
            {
                status: "Picked Up",
                message: "Courier picked up package from sender",
                location: "Quezon City",
                time: "Sep 15, 2025 - 05:30 PM"
            },
            {
                status: "Arrived at Warehouse",
                message: "Package received at Manila warehouse",
                location: "Manila",
                time: "Sep 16, 2025 - 08:00 AM"
            },
            {
                status: "Departed Warehouse",
                message: "Package left Manila warehouse",
                location: "Manila",
                time: "Sep 16, 2025 - 09:30 AM"
            },
            {
                status: "Arrived at Sorting Facility",
                message: "Package arrived at LA sorting hub",
                location: "Los Angeles, CA",
                time: "Sep 17, 2025 - 03:00 PM"
            },
            {
                status: "In Transit to Destination",
                message: "Package is currently at sea",
                location: "Pacific Ocean",
                time: "Sep 18, 2025 - 11:45 PM"
            },
            {
                status: "Arrived at Destination Port",
                message: "Package unloaded at destination seaport",
                location: "Long Beach, CA",
                time: "Sep 21, 2025 - 09:20 AM"
            },
            {
                status: "Cleared Customs",
                message: "Shipment released by customs",
                location: "Los Angeles, CA",
                time: "Sep 22, 2025 - 04:00 PM"
            },
            {
                status: "Out for Delivery",
                message: "Courier is delivering your package",
                location: "Los Angeles, CA",
                time: "Sep 23, 2025 - 08:45 AM"
            }
        ]
    }
}


const inputNumber = ref("")
const result = ref(null)

const trackShipment = () => {
    const query = inputNumber.value.trim().toUpperCase()
    result.value = trackingData[query] || null
}

onMounted(() => {
    if (route.query.number) {
        inputNumber.value = route.query.number
        trackShipment()
    }
})
</script>

<template>
    <section class="min-h-[70vh] flex flex-col items-center justify-center px-4 py-16 text-center">
        <!-- Headline -->
        <div class="mb-6">
            <h1 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
                Track your <span class="bg-yellow-300 px-2 rounded">Balikbayan Boxes</span> Now
            </h1>
            <div class="w-24 h-1 bg-primary mx-auto rounded"></div>
        </div>

        <p class="text-gray-600 mb-6 max-w-xl mx-auto">
            Enter your <span class="font-semibold">Tracking Number</span> or
            <span class="font-semibold">Invoice #</span> below to check the status of your shipment.
        </p>

        <!-- Tracking Input -->
        <form @submit.prevent="trackShipment"
            class="w-full flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl">
            <input v-model="inputNumber" type="text" placeholder="Enter Tracking Number / Invoice #"
                class="input input-bordered w-full sm:flex-1" />
            <button type="submit" class="btn btn-primary w-full sm:w-auto">
                Track
            </button>
        </form>

        <!-- Tracking Result -->
        <div v-if="result" class="mt-10 w-full max-w-3xl">
            <div class="card bg-base-100 shadow-lg border">
                <div class="card-body">
                    <h2 class="card-title text-lg sm:text-xl mb-6">
                        📦 Current Status:
                        <span class="text-primary font-bold">
                            {{ result.history[result.history.length - 1].status }}
                        </span>
                    </h2>

                    <!-- Timeline -->
                    <div class="h-80 overflow-y-auto pr-2 custom-scroll">
                        <div v-for="(event, idx) in [...result.history].reverse()" :key="idx" class="grid gap-3 items-start relative mb-8
           grid-cols-[100px_30px_1fr] sm:grid-cols-[160px_40px_1fr]">
                            <!-- Time -->
                            <div class="text-right">
                                <time class="block text-xs sm:text-sm font-medium text-gray-500">
                                    {{ event.time }}
                                </time>
                            </div>

                            <!-- Timeline column -->
                            <div class="relative flex flex-col items-center">
                                <!-- Line (except last) -->
                                <div v-if="idx !== result.history.length - 1"
                                    class="absolute top-4 bottom-0 w-px bg-gray-300"></div>

                                <!-- Dot -->
                                <div :class="[
                                    'relative z-10 flex items-center justify-center rounded-full text-white text-[10px]',
                                    idx === 0 ? 'w-6 h-6 bg-primary' : 'w-4 h-4 bg-green-500'
                                ]">
                                    <span v-if="idx === 0">✔</span>
                                </div>
                            </div>

                            <!-- Status & Message -->
                            <div>
                                <h3 class="text-sm sm:text-base font-semibold text-gray-900">
                                    {{ event.status }}
                                </h3>
                                <p class="text-gray-600 text-xs sm:text-sm">
                                    {{ event.message }}
                                    <span v-if="event.location">({{ event.location }})</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
