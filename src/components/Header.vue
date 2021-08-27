<template>
  <header class="bg-white w-full h-auto border-b">
    <nav
      class="
        font-sans
        text-left
        flex
        justify-between
        items-center
        py-4
        mx-auto
        container
        overflow-hidden
        px-4
      "
    >
      <div class="flex flex-row justify-start">
        <router-link to="/" class="py-1 mr-4">
          <img src="/img/logo-default.svg" class="h-8 sm:h-8" alt="logo" />
        </router-link>
        <div class="font-base text-gray-400 py-0 flex flex-col">
          <span class="font-bold text-md">FINSELL</span>
          <div class="text-xs">
            For <span class="font-semibold">Better</span> Business Management
          </div>
        </div>
      </div>
      <ul class="text-sm text-gray-700 list-none p-0 flex items-center">
        <li>
          <a
            href="#"
            class="
              inline-block
              py-2
              px-3
              text-gray-900
              hover:text-gray-700
              no-underline
            "
            >Features</a
          >
        </li>
        <li>
          <a
            href="#"
            class="
              inline-block
              py-2
              px-3
              text-gray-900
              hover:text-gray-700
              no-underline
            "
            >Clients</a
          >
        </li>
        <li>
          <a
            href="#"
            class="
              inline-block
              py-2
              px-3
              text-gray-900
              hover:text-gray-700
              no-underline
            "
            >Blog</a
          >
        </li>
        <li>
          <a
            href="#"
            class="
              inline-block
              py-2
              px-3
              text-gray-900
              hover:text-gray-700
              no-underline
            "
            >Contact</a
          >
        </li>
      </ul>
    </nav>
  </header>
</template>
