<template>
  <section class="relative overflow-hidden bg-stone-100 dark:bg-stone-900">
    <div class="absolute inset-0 bg-gradient-to-r from-stone-100 via-white to-stone-200 dark:from-stone-950 dark:via-stone-900 dark:to-stone-800"></div>
    <div class="absolute -left-20 top-10 h-72 w-72 rounded-full bg-rose-200/40 blur-3xl dark:bg-rose-500/20"></div>
    <div class="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl dark:bg-amber-500/10"></div>

    <div class="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
      <div>
        <span
          class="inline-flex rounded-full border border-rose-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-rose-600 dark:border-rose-500/30 dark:bg-stone-900 dark:text-rose-400"
        >
          Trend • Elegant • Everyday
        </span>

        <h1 class="mt-6 text-4xl font-black leading-tight text-neutral-900 dark:text-white md:text-6xl">
          Discover Your
          <span class="text-rose-600 dark:text-rose-400">Signature Style</span>
        </h1>

        <p class="mt-6 max-w-xl text-base leading-7 text-stone-600 dark:text-stone-300 md:text-lg">
          Shop trending fashion pieces, elegant dresses, stylish tops, premium shirts,
          shoes, bags, and accessories in one modern shopping experience.
        </p>

        <div class="mt-8 flex flex-col gap-4 sm:flex-row">
          <router-link
            to="/"
            class="rounded-xl bg-neutral-900 px-6 py-3 text-center font-semibold text-white transition hover:bg-rose-600 dark:bg-rose-600 dark:hover:bg-rose-500"
          >
            Shop Collection
          </router-link>

          <router-link
            to="/about"
            class="rounded-xl border border-stone-300 bg-white px-6 py-3 text-center font-semibold text-neutral-900 transition hover:border-neutral-900 dark:border-stone-600 dark:bg-stone-900 dark:text-white dark:hover:bg-stone-800"
          >
            Learn More
          </router-link>
        </div>

        <div class="mt-10 grid grid-cols-3 gap-4">
          <div class="rounded-2xl bg-white p-4 shadow-sm dark:bg-stone-900">
            <p class="text-2xl font-bold text-neutral-900 dark:text-white">30+</p>
            <p class="mt-1 text-sm text-stone-500 dark:text-stone-400">Fashion Picks</p>
          </div>

          <div class="rounded-2xl bg-white p-4 shadow-sm dark:bg-stone-900">
            <p class="text-2xl font-bold text-neutral-900 dark:text-white">Daily</p>
            <p class="mt-1 text-sm text-stone-500 dark:text-stone-400">Fresh Styles</p>
          </div>

          <div class="rounded-2xl bg-white p-4 shadow-sm dark:bg-stone-900">
            <p class="text-2xl font-bold text-neutral-900 dark:text-white">Modern</p>
            <p class="mt-1 text-sm text-stone-500 dark:text-stone-400">Store Design</p>
          </div>
        </div>
      </div>

      <div class="grid gap-5 sm:grid-cols-2">
        <div class="rounded-3xl bg-white p-5 shadow-xl dark:bg-stone-900">
          <div class="mb-4 rounded-2xl bg-stone-100 p-4 dark:bg-stone-800">
            <p class="text-xs uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400">Women's Style</p>
            <p class="mt-2 text-2xl font-bold text-neutral-900 dark:text-white">Dresses & Tops</p>
          </div>
          <p class="text-sm leading-6 text-stone-600 dark:text-stone-300">
            Minimal, stylish, and easy-to-wear fashion pieces for everyday looks.
          </p>
        </div>

        <div class="rounded-3xl bg-neutral-900 p-5 text-white shadow-xl sm:mt-10 dark:bg-rose-600">
          <div class="mb-4 rounded-2xl bg-white/10 p-4">
            <p class="text-xs uppercase tracking-[0.2em] text-stone-300">Accessories</p>
            <p class="mt-2 text-2xl font-bold">Shoes, Bags & More</p>
          </div>
          <p class="text-sm leading-6 text-stone-300 dark:text-white/90">
            Complete your outfit with premium accessories and fashion essentials.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>