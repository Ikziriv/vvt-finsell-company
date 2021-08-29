<script setup>
import ButtonRepo from "@/components/ButtonRepo.vue";
</script>

<template>
  <div class="w-full h-auto">
    <section>
      <div class="rounded-lg bg-gray-200 bg-opacity-50 h-64 overflow-hidden">
        <img
          alt="content"
          class="object-contain object-center h-full w-full"
          src="/img/about/head-img-about.svg"
        />
      </div>
    </section>

    <section class="bg-white py-4 px-8 md:px-16 font-sans">
      <div class="flex justify-between px-8 py-4 w-full">
        <div class="flex justify-start">
          <div class="flex flex-col">
            <span class="text-left text-3xl font-bold"> Company </span>
            <span class="text-left text-3-xl font-light"> Information </span>
            <p class="w-full px-16 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              pariatur quam nam dolore repudiandae dignissimos, magnam quia
              quibusdam! Similique illum eligendi odit quos perspiciatis et
              doloribus officia deserunt necessitatibus eum?
            </p>
          </div>
        </div>
        <div class="flex justify-end">
          <div class="flex flex-col">
            <span class="text-left"> Company </span>
            <span class="text-left"> Information </span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              pariatur quam nam dolore repudiandae dignissimos, magnam quia
              quibusdam! Similique illum eligendi odit quos perspiciatis et
              doloribus officia deserunt necessitatibus eum?
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
