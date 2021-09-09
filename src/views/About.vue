<script setup>
import ButtonRepo from '@/components/ButtonRepo.vue'
</script>

<template>
    <div class="w-full h-auto">
        <section>
            <div
                class="
                    rounded-lg
                    bg-gray-200 bg-opacity-50
                    h-64
                    overflow-hidden
                "
            >
                <img
                    alt="content"
                    class="object-contain object-center h-full w-full"
                    src="/img/about/head-img-about.svg"
                />
            </div>
        </section>

        <section class="bg-white py-4 font-sans">
            <div class="grid grid-cols-4 gap-2 px-6 md:px-8 py-4 w-full">
                <div class="col-span-4 md:col-span-2">
                    <div class="flex justify-start px-12">
                        <div class="flex flex-col">
                            <span class="text-left text-3xl font-bold">
                                Company
                            </span>
                            <span class="text-left text-3-xl font-light">
                                Information
                            </span>
                            <p class="w-full px-4 md:px-16 mt-4">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Modi pariatur quam nam dolore
                                repudiandae dignissimos, magnam quia quibusdam!
                                Similique illum eligendi odit quos perspiciatis
                                et doloribus officia deserunt necessitatibus
                                eum?
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-span-4 md:col-span-2">
                    <div class="flex justify-center md:justify-end">
                        <div class="flex w-full py-8 px-2 md:px-4">
                            <div class="grid grid-cols-2 gap-2 md:gap-4 w-full">
                                <div
                                    class="
                                        col-span-2
                                        md:col-span-1
                                        bg-white
                                        rounded-xl
                                        shadow-xl
                                        hover:shadow-2xl
                                        relative
                                    "
                                >
                                    <div
                                        class="
                                            flex flex-col
                                            justify-center
                                            w-full
                                        "
                                    >
                                        <img
                                            class="
                                                w-full
                                                object-cover
                                                rounded-t-md
                                            "
                                            src="https://media-exp1.licdn.com/dms/image/C5103AQExcmBV1JrYpw/profile-displayphoto-shrink_200_200/0/1549719260727?e=1635984000&v=beta&t=cRz-tL18c1Y5WjwZCjaPFKDOhIIPPb2IO_jp55nflV4"
                                            alt=""
                                        />
                                        <div class="mt-4 p-4">
                                            <h1
                                                class="
                                                    text-xl
                                                    font-bold
                                                    text-gray-700
                                                "
                                            >
                                                Faisal Ramdan Mulyadi
                                            </h1>
                                            <p
                                                class="
                                                    text-sm
                                                    mt-0
                                                    text-gray-700
                                                "
                                            >
                                                Flutter Engineer <br />
                                                Mobile Developer (Android & iOS)
                                            </p>
                                        </div>
                                        <div
                                            class="
                                                mt-8
                                                py-2
                                                px-4
                                                mb-2
                                                flex
                                                justify-center
                                                text-center
                                            "
                                        >
                                            <a
                                                href="https://www.linkedin.com/in/faisalramdan17/"
                                                class="
                                                    text-sm
                                                    block
                                                    font-semibold
                                                    py-2
                                                    px-6
                                                    text-blue-100
                                                    hover:text-white
                                                    bg-blue-400
                                                    rounded-lg
                                                    shadow
                                                    hover:shadow-md
                                                    transition
                                                    duration-300
                                                    w-full
                                                "
                                            >
                                                Touch Me
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="
                                        col-span-2
                                        md:col-span-1
                                        bg-white
                                        rounded-xl
                                        shadow-xl
                                        hover:shadow-2xl
                                        relative
                                    "
                                >
                                    <div
                                        class="
                                            flex flex-col
                                            justify-center
                                            w-full
                                        "
                                    >
                                        <img
                                            class="
                                                w-full
                                                object-cover
                                                rounded-t-md
                                            "
                                            src="https://media-exp1.licdn.com/dms/image/C5603AQEaSbAJMPhK-g/profile-displayphoto-shrink_200_200/0/1593303833206?e=1635984000&v=beta&t=2muV6i9BEaqxwF-y5NXrxLROXfVahJ_Z1omlN4_a1bM"
                                            alt=""
                                        />
                                        <div class="flex flex-col mt-4 p-4">
                                            <h1
                                                class="
                                                    text-xl
                                                    font-bold
                                                    text-gray-700
                                                "
                                            >
                                                Rizky Ivan Darmawan
                                            </h1>
                                            <p
                                                class="
                                                    text-sm
                                                    mt-0
                                                    text-gray-700
                                                "
                                            >
                                                Fullstack Developer <br />
                                                Web & Mobile Designer
                                            </p>
                                        </div>
                                        <div
                                            class="
                                                mt-8
                                                py-2
                                                px-4
                                                mb-2
                                                flex
                                                justify-center
                                                text-center
                                            "
                                        >
                                            <a
                                                href="https://www.linkedin.com/in/ikziriv/"
                                                class="
                                                    text-sm
                                                    block
                                                    font-semibold
                                                    py-2
                                                    px-6
                                                    text-blue-100
                                                    hover:text-white
                                                    bg-blue-400
                                                    rounded-lg
                                                    shadow
                                                    hover:shadow-md
                                                    transition
                                                    duration-300
                                                    w-full
                                                "
                                            >
                                                Touch Me
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
