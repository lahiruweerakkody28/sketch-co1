<template>
  <div class="min-h-screen bg-slate-50">
    <NavBar />
    <HeroSection />

    <main class="mx-auto max-w-7xl px-6 py-12">
      <section class="mb-10 text-center">
        <h2 class="mb-3 text-3xl font-bold text-slate-800">Featured Categories</h2>
        <p class="text-slate-600">
          This is the Day 1 foundation. Products, search, filters, and API integration
          will be added in the next days.
        </p>
      </section>

      <section class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div class="rounded-2xl bg-white p-6 shadow transition hover:shadow-lg">
          <h3 class="mb-2 text-xl font-semibold text-slate-800">Shoes</h3>
          <p class="text-slate-600">
            Athletic and casual footwear for different types of sports.
          </p>
        </div>

        <div class="rounded-2xl bg-white p-6 shadow transition hover:shadow-lg">
          <h3 class="mb-2 text-xl font-semibold text-slate-800">Bags</h3>
          <p class="text-slate-600">
            Sports bags for travel, training sessions, and daily use.
          </p>
        </div>

        <div class="rounded-2xl bg-white p-6 shadow transition hover:shadow-lg">
          <h3 class="mb-2 text-xl font-semibold text-slate-800">Accessories</h3>
          <p class="text-slate-600">
            Useful items like bottles, gloves, bands, and training accessories.
          </p>
        </div>
      </section>
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppFooter from '../components/AppFooter.vue'
import HeroSection from '../components/HeroSection.vue'
import NavBar from '../components/NavBar.vue'
</script>