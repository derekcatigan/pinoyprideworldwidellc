<template>
    <section class="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
        <!-- Headline -->
        <div class="mb-6">
            <h1 v-fade-slide-up="100" class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
                Track your <span class="bg-yellow-300 px-2 rounded">Balikbayan Boxes</span> Now
            </h1>
            <div v-fade-slide-up="200" class="w-24 h-1 bg-primary mx-auto rounded"></div>
        </div>

        <p v-fade-slide-up="300" class="text-gray-600 mb-6 max-w-xl mx-auto">
            Enter your <span class="font-semibold">Tracking Number</span> or
            <span class="font-semibold">Invoice #</span> below to check the status of your shipment.
        </p>


        <!-- Tracking Input -->
        <form class="w-full flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl">
            <input v-fade-slide-up="400" type="text" placeholder="Enter Tracking Number / Invoice #"
                class="input input-bordered w-full sm:flex-1" />
            <button v-fade-slide-up="500" type="submit" class="btn btn-primary w-full sm:w-auto">
                Track
            </button>
        </form>
    </section>
</template>
