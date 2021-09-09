<script setup>
import NotificationArticle from '@/components/article/NotificationArticle.vue'
</script>

<template>
    <div class="w-full h-auto">
        <NotificationArticle />
        <section class="font-sans grid grid-cols-2 gap-4 px-8 md:px-16">
            <div
                class="
                    col-span-2
                    flex
                    justify-start
                    md:justify-between
                    py-8
                    w-full
                "
            >
                <div class="flex justify-start">
                    <div class="text-left mr-4 py-1">
                        <span>Finsell - Article</span>
                    </div>
                </div>

                <div class="hidden mx-0 md:block">
                    <div class="relative">
                        <span
                            class="
                                absolute
                                inset-y-0
                                left-0
                                flex
                                items-center
                                pl-3
                            "
                        >
                            <svg
                                class="w-5 h-5 text-gray-400"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></path>
                            </svg>
                        </span>

                        <input
                            type="text"
                            class="
                                w-full
                                py-1
                                pl-10
                                pr-4
                                text-gray-700
                                bg-white
                                border border-gray-300
                                rounded-md
                                dark:bg-gray-800
                                dark:text-gray-300
                                dark:border-gray-600
                                focus:border-blue-500
                                dark:focus:border-blue-500
                                focus:outline-none
                            "
                            placeholder="Search"
                        />
                    </div>
                </div>
            </div>
        </section>
        <section class="font-sans grid grid-cols-2 gap-4 px-8 md:px-16">
            <div class="col-span-2 md:col-span-1">
                <img src="/img/article/head-img-article.svg" alt="" />
            </div>
            <div
                class="
                    w-full
                    col-span-2
                    md:col-span-1
                    flex flex-col
                    items-start
                    justify-center
                    text-left
                    ml-0
                    md:ml-20
                    p-4
                    md:p-8
                "
            >
                <spam class="mb-2"><small>Financial Planning</small></spam>
                <h1 class="font-bold text-2xl md:text-4xl mb-4">
                    Guide to Organizing <br />
                    Your Finance
                </h1>
                <span
                    class="
                        leading-normal
                        mb-4
                        w-2/3
                        text-gray-700
                        font-semibold
                    "
                >
                    Read More
                </span>
            </div>
        </section>

        <section class="bg-white py-4 px-8 md:px-16 font-sans">
            <div
                class="
                    container
                    mx-auto
                    w-full
                    grid grid-cols-4
                    gap-1
                    md:gap-4
                    items-baseline
                    justify-center
                    md:justify-start
                    border-b-2 border-gray-300
                    mb-2
                "
            >
                <div
                    class="
                        col-span-4
                        md:col-span-1
                        text-gray-700 text-sm
                        font-bold
                        tracking-wide
                        uppercase
                        py-2
                        md:py-4
                        px-3
                        md:px-6
                    "
                >
                    All
                </div>
                <div
                    class="
                        col-span-4
                        md:col-span-1
                        text-sm
                        font-bold
                        tracking-wide
                        uppercase
                        py-2
                        md:py-4
                        px-3
                        md:px-6
                        border-b-2 border-black
                        -mb-2
                    "
                >
                    Recent
                </div>
                <div
                    class="
                        col-span-4
                        md:col-span-1
                        text-gray-700 text-sm
                        font-bold
                        tracking-wide
                        uppercase
                        py-2
                        md:py-4
                        px-3
                        md:px-6
                    "
                >
                    Assigned to Me
                </div>
                <div
                    class="
                        col-span-4
                        md:col-span-1
                        text-gray-700 text-sm
                        font-bold
                        tracking-wide
                        uppercase
                        py-2
                        md:py-4
                        px-3
                        md:px-6
                    "
                >
                    Pending
                </div>
            </div>
        </section>

        <section class="bg-white py-4 px-8 md:px-16 font-sans">
            <div
                class="
                    container
                    w-full
                    m-auto
                    grid grid-cols-1
                    items-center
                    justify-start
                    mb-4
                "
            >
                <div
                    class="
                        w-full
                        px-8
                        py-2
                        md:py-4
                        mx-auto
                        bg-white
                        rounded-lg
                        shadow-md
                        dark:bg-gray-800
                    "
                >
                    <div class="flex items-center justify-between">
                        <span
                            class="
                                text-sm
                                font-light
                                text-gray-600
                                dark:text-gray-400
                            "
                            >Mar 10, 2019</span
                        >
                        <a
                            class="
                                px-3
                                py-1
                                text-sm
                                font-bold
                                text-gray-100
                                transition-colors
                                duration-200
                                transform
                                bg-gray-600
                                rounded
                                cursor-pointer
                                hover:bg-gray-500
                            "
                            >Design</a
                        >
                    </div>

                    <div class="mt-2">
                        <a
                            href="#"
                            class="
                                text-2xl
                                font-bold
                                text-gray-700
                                dark:text-white
                                hover:text-gray-600
                                dark:hover:text-gray-200
                                hover:underline
                            "
                            >Accessibility tools for designers and developers</a
                        >
                        <p class="mt-2 text-gray-600 dark:text-gray-300">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Tempora expedita dicta totam aspernatur
                            doloremque. Excepturi iste iusto eos enim
                            reprehenderit nisi, accusamus delectus nihil quis
                            facere in modi ratione libero!
                        </p>
                    </div>

                    <div class="flex items-center justify-between mt-4">
                        <a
                            href="#"
                            class="
                                text-blue-600
                                dark:text-blue-400
                                hover:underline
                            "
                            >Read more</a
                        >

                        <div class="flex items-center">
                            <img
                                class="
                                    hidden
                                    object-cover
                                    w-10
                                    h-10
                                    mx-4
                                    rounded-full
                                    sm:block
                                "
                                src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80"
                                alt="avatar"
                            />
                            <a
                                class="
                                    font-bold
                                    text-gray-700
                                    cursor-pointer
                                    dark:text-gray-200
                                "
                                >Khatab wedaa</a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
