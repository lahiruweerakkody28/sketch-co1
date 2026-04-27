<template>
  <section class="relative overflow-hidden bg-stone-100 transition-colors duration-300 dark:bg-transparent">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(244,63,94,0.14),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(251,191,36,0.12),_transparent_30%)] dark:bg-[radial-gradient(circle_at_top_left,_rgba(244,63,94,0.28),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(147,51,234,0.24),_transparent_34%)]"></div>

    <div class="absolute left-10 top-20 hidden h-32 w-32 rounded-full bg-rose-400/20 blur-3xl dark:block"></div>
    <div class="absolute bottom-10 right-10 hidden h-40 w-40 rounded-full bg-purple-500/20 blur-3xl dark:block"></div>

    <div class="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
      <div class="flex flex-col justify-center">
        <div
          class="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-rose-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-rose-600 shadow-sm dark:border-rose-400/30 dark:bg-white/10 dark:text-rose-200 dark:backdrop-blur-md"
        >
          <Globe2 class="h-4 w-4" />
          International Premium Store
        </div>

        <h1 class="max-w-2xl text-5xl font-black leading-tight text-stone-900 dark:text-white md:text-6xl">
          Elevate Your
          <span
            class="text-rose-600 dark:bg-gradient-to-r dark:from-rose-300 dark:via-pink-300 dark:to-purple-300 dark:bg-clip-text dark:text-transparent"
          >
            Global Style
          </span>
        </h1>

        <p class="mt-6 max-w-xl text-base leading-7 text-stone-600 dark:text-slate-300 md:text-lg">
          Discover premium shirts, dresses, shoes, bags, accessories, and fashion essentials
          with a polished shopping experience inspired by international brands.
        </p>

        <div class="mt-8 flex flex-col gap-4 sm:flex-row">
          <router-link
            to="/"
            class="rounded-2xl bg-stone-950 px-6 py-3 text-center text-sm font-bold text-white shadow-md transition hover:bg-rose-600 dark:bg-gradient-to-r dark:from-rose-500 dark:to-purple-600 dark:shadow-lg dark:shadow-rose-500/25"
          >
            Shop Now
          </router-link>

          <router-link
            to="/about"
            class="rounded-2xl border border-stone-300 bg-white px-6 py-3 text-center text-sm font-bold text-stone-900 shadow-sm transition hover:border-stone-900 dark:border-white/10 dark:bg-white/10 dark:text-white dark:backdrop-blur-md dark:hover:bg-white/15"
          >
            Explore Brand
          </router-link>
        </div>

        <div class="mt-10 grid grid-cols-3 gap-4">
          <div
            class="rounded-3xl border border-stone-200 bg-white p-4 shadow-sm transition dark:border-white/10 dark:bg-white/10 dark:backdrop-blur-md"
          >
            <p class="text-2xl font-black text-stone-900 dark:text-white">40+</p>
            <p class="mt-1 text-sm text-stone-500 dark:text-slate-300">Curated Items</p>
          </div>

          <div
            class="rounded-3xl border border-stone-200 bg-white p-4 shadow-sm transition dark:border-white/10 dark:bg-white/10 dark:backdrop-blur-md"
          >
            <p class="text-2xl font-black text-stone-900 dark:text-white">24/7</p>
            <p class="mt-1 text-sm text-stone-500 dark:text-slate-300">Online Access</p>
          </div>

          <div
            class="rounded-3xl border border-stone-200 bg-white p-4 shadow-sm transition dark:border-white/10 dark:bg-white/10 dark:backdrop-blur-md"
          >
            <p class="text-2xl font-black text-stone-900 dark:text-white">Global</p>
            <p class="mt-1 text-sm text-stone-500 dark:text-slate-300">Fashion Feel</p>
          </div>
        </div>
      </div>

      <div class="grid gap-5 sm:grid-cols-2">
        <div
          class="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-xl transition dark:border-white/10 dark:bg-white/10 dark:text-white dark:backdrop-blur-md dark:shadow-rose-500/10"
        >
          <div
            class="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-100 text-rose-600 dark:bg-rose-400/20 dark:text-rose-200"
          >
            <Shirt class="h-6 w-6" />
          </div>
          <p class="text-xs font-bold uppercase tracking-[0.25em] text-stone-500 dark:text-rose-200">
            Premium Apparel
          </p>
          <h3 class="mt-3 text-2xl font-black text-stone-900 dark:text-white">
            Elegant Shirts & Tops
          </h3>
          <p class="mt-3 text-sm leading-6 text-stone-600 dark:text-slate-300">
            Refined styles designed for everyday wear and modern international trends.
          </p>
        </div>

        <div
          class="rounded-[2rem] bg-stone-950 p-6 text-white shadow-xl transition sm:mt-10 dark:bg-gradient-to-br dark:from-slate-900 dark:to-purple-950 dark:shadow-purple-500/10"
        >
          <div class="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
            <Gem class="h-6 w-6" />
          </div>
          <p class="text-xs font-bold uppercase tracking-[0.25em] text-rose-200">
            Luxury Accessories
          </p>
          <h3 class="mt-3 text-2xl font-black">
            Shoes, Bags & Jewellery
          </h3>
          <p class="mt-3 text-sm leading-6 text-slate-300">
            Upgrade your wardrobe with polished accessories that complete a premium global look.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Gem, Globe2, Shirt } from 'lucide-vue-next'
</script>