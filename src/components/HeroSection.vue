<template>
  <section class="relative overflow-hidden bg-stone-100">
    <div class="absolute inset-0 bg-gradient-to-r from-stone-100 via-white to-stone-200"></div>
    <div class="absolute -left-20 top-10 h-72 w-72 rounded-full bg-rose-200/40 blur-3xl"></div>
    <div class="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl"></div>

    <div class="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
      <div>
        <span
          class="inline-flex rounded-full border border-rose-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-rose-600"
        >
          Trend • Elegant • Everyday
        </span>

        <h1 class="mt-6 text-4xl font-black leading-tight text-neutral-900 md:text-6xl">
          Discover Your
          <span class="text-rose-600">Signature Style</span>
        </h1>

        <p class="mt-6 max-w-xl text-base leading-7 text-stone-600 md:text-lg">
          Shop trending fashion pieces, elegant dresses, stylish tops, premium shirts,
          shoes, bags, and accessories in one modern shopping experience.
        </p>

        <div class="mt-8 flex flex-col gap-4 sm:flex-row">
          <router-link
            to="/"
            class="rounded-xl bg-neutral-900 px-6 py-3 text-center font-semibold text-white transition hover:bg-rose-600"
          >
            Shop Collection
          </router-link>

          <router-link
            to="/about"
            class="rounded-xl border border-stone-300 bg-white px-6 py-3 text-center font-semibold text-neutral-900 transition hover:border-neutral-900"
          >
            Learn More
          </router-link>
        </div>

        <div class="mt-10 grid grid-cols-3 gap-4">
          <div class="rounded-2xl bg-white p-4 shadow-sm">
            <p class="text-2xl font-bold text-neutral-900">30+</p>
            <p class="mt-1 text-sm text-stone-500">Fashion Picks</p>
          </div>

          <div class="rounded-2xl bg-white p-4 shadow-sm">
            <p class="text-2xl font-bold text-neutral-900">Daily</p>
            <p class="mt-1 text-sm text-stone-500">Fresh Styles</p>
          </div>

          <div class="rounded-2xl bg-white p-4 shadow-sm">
            <p class="text-2xl font-bold text-neutral-900">Modern</p>
            <p class="mt-1 text-sm text-stone-500">Store Design</p>
          </div>
        </div>
      </div>

      <div class="grid gap-5 sm:grid-cols-2">
        <div class="rounded-3xl bg-white p-5 shadow-xl">
          <div class="mb-4 rounded-2xl bg-stone-100 p-4">
            <p class="text-xs uppercase tracking-[0.2em] text-stone-500">Women's Style</p>
            <p class="mt-2 text-2xl font-bold text-neutral-900">Dresses & Tops</p>
          </div>
          <p class="text-sm leading-6 text-stone-600">
            Minimal, stylish, and easy-to-wear fashion pieces for everyday looks.
          </p>
        </div>

        <div class="rounded-3xl bg-neutral-900 p-5 text-white shadow-xl sm:mt-10">
          <div class="mb-4 rounded-2xl bg-white/10 p-4">
            <p class="text-xs uppercase tracking-[0.2em] text-stone-300">Accessories</p>
            <p class="mt-2 text-2xl font-bold">Shoes, Bags & More</p>
          </div>
          <p class="text-sm leading-6 text-stone-300">
            Complete your outfit with premium accessories and fashion essentials.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>