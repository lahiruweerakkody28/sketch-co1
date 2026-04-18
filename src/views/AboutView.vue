<template>
  <div class="min-h-screen bg-slate-50">
    <NavBar />

    <main class="mx-auto max-w-4xl px-6 py-16">
      <div class="rounded-2xl bg-white p-8 shadow-md">
        <h1 class="mb-4 text-3xl font-bold text-slate-800">About This Project</h1>

        <p class="mb-4 text-slate-600">
          Sketch-co is a modern Single Page Application built with Vue 3,
          TypeScript, Vite, and Tailwind CSS.
        </p>

        <p class="mb-4 text-slate-600">
          In the next stages, this project will connect to the DummyJSON API,
          display products, support search and filtering, and include detail views.
        </p>

        <p class="text-slate-600">
          The goal is to build a clean, responsive, strongly typed frontend
          application that matches the mini project requirements.
        </p>
      </div>
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppFooter from '../components/AppFooter.vue'
import NavBar from '../components/NavBar.vue'
</script>