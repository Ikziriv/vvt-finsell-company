<template>
  <footer
    class="
      font-sans
      bg-gray-100 bg-opacity-50
      text-white
      py-8
      px-8
      md:px-16
      border-t
    "
  >
    <div
      class="
        mx-auto
        w-full
        overflow-hidden
        block
        md:flex
        justify-center
        md:justify-between
        items-center
      "
    >
      <ul class="text-sm text-gray-700 list-none p-0 flex items-center">
        <li class="hidden md:block">
          <router-link to="/" class="block mr-4 w-32">
            <img src="/img/logo-finsell.png" class="" alt="logo" />
          </router-link>
        </li>
        <li>
          <a
            href="#"
            class="
              inline-block
              py-2
              px-3
              text-gray-500
              hover:text-gray-400
              no-underline
            "
            >Features</a
          >
        </li>
        <li>
          <router-link
            to="/article"
            class="
              inline-block
              py-2
              px-3
              text-gray-500
              hover:text-gray-400
              no-underline
            "
            >Article</router-link
          >
        </li>
        <li>
          <router-link
            to="/about"
            class="
              inline-block
              py-2
              px-3
              text-gray-500
              hover:text-gray-400
              no-underline
            "
            >About
          </router-link>
        </li>
      </ul>
      <p class="inline-block mt-4 md:mt-0 md:py-2 px-3 text-gray-700 text-xs">
        2021 Finsell. All rights reserved. Design by
        <a href="https://github.com/Ikziriv" class="text-blue-500 font-semibold"
          >@ikziriv.art</a
        >
      </p>
    </div>
  </footer>
</template>
