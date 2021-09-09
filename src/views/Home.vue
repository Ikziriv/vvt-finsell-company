<script setup>
import NotificationMain from '@/components/main/NotificationMain.vue'
</script>

<template>
    <div class="w-full h-auto">
        <NotificationMain />
        <section
            class="
                font-sans
                w-full
                mx-auto
                flex flex-col
                lg:flex-row
                justify-center
                bg-gray-50
            "
        >
            <div class="w-full h-auto my-8">
                <div class="grid grid-cols-5 gap-4">
                    <div class="col-span-5 md:col-span-2">
                        <div class="w-full max-w-sm m-auto mb-6 lg:mb-0">
                            <img
                                src="/img/demo-phone-e.png"
                                alt="Finsell main screen"
                            />
                        </div>
                    </div>
                    <div class="col-span-5 md:col-span-3">
                        <div
                            class="
                                w-full
                                flex flex-col
                                items-start
                                justify-start
                                text-start
                                lg:text-left
                                mt-0
                                md:mt-8
                                ml-8
                                py-16
                                md:py-32
                                px-8
                            "
                        >
                            <div class="flex flex-col w-full">
                                <div class="text-gray-900 mb-8">
                                    <span
                                        class="
                                            block
                                            text-5xl
                                            md:text-6xl
                                            font-extrabold
                                        "
                                        >Experience a
                                    </span>
                                    <span
                                        class="
                                            block
                                            text-4xl
                                            md:text-5xl
                                            font-thin
                                        "
                                    >
                                        Fresh way to</span
                                    >
                                    <span
                                        class="
                                            block
                                            text-4xl
                                            md:text-5xl
                                            font-extrabold
                                        "
                                    >
                                        Manage money</span
                                    >
                                </div>
                                <div class="text-gray-600 max-w-xs md:max-w-sm">
                                    <p class="text-sm">
                                        Reach your goals with personalized
                                        insights, custom budgets, spend
                                        tracking, and subscription
                                        monitoring—all for free.
                                    </p>
                                </div>
                                <div
                                    class="
                                        mt-8
                                        flex flex-row
                                        justify-star
                                        max-w-xs
                                    "
                                >
                                    <div class="mr-4">
                                        <a href="">
                                            <div class="bg-gray-50">
                                                <img
                                                    src="/img/btn/google.webp"
                                                />
                                            </div>
                                        </a>
                                    </div>
                                    <div class="mr-4">
                                        <a href="">
                                            <div class="bg-gray-50">
                                                <img
                                                    src="/img/btn/apple.webp"
                                                />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-gray-200 bg-opacity-50 font-sans">
            <div
                class="
                    container
                    m-auto
                    flex flex-col
                    md:flex-row
                    w-full
                    px-8
                    md:px-16
                "
            >
                <div
                    class="
                        flex flex-col
                        w-full
                        lg:w-1/2
                        justify-center
                        items-start
                        py-8
                    "
                >
                    <label
                        for="tagline"
                        class="uppercase font-bold tracking-loose text-gray-900"
                        >Good Apps for Manage</label
                    >
                    <h1 class="my-0 font-normal text-gray-700 mb-2 text-sm">
                        Your finances, safe and secure
                    </h1>
                    <p
                        class="
                            leading-normal
                            mb-4
                            text-gray-500
                            font-normal
                            text-sm
                        "
                    >
                        Our top priority is keeping your data secure. With
                        multiple safety measures, like secure 256-bit encryption
                        and multi-factor authentication, we protect your info
                        like it's our own.
                    </p>
                    <button
                        class="
                            bg-transparent
                            hover:bg-blue-500
                            text-gray-700
                            font-semibold
                            hover:text-white
                            py-2
                            px-6
                            border border-blue-500
                            hover:border-transparent
                            rounded-xl
                        "
                    >
                        Our Security
                    </button>
                </div>
                <div class="w-full lg:w-1/2 lg:py-6">
                    <div class="flex justify-center md:justify-end">
                        <img
                            src="/img/demo-devices-e.png"
                            alt="Finsell responsive design"
                            class="w-64"
                        />
                    </div>
                </div>
            </div>
        </section>

        <section
            class="my-8 font-sans container m-auto w-full mx-auto px-8 md:px-16"
        >
            <div class="grid grid-cols-5 gap-4">
                <div class="col-span-5 md:col-span-2">
                    <div class="text-left">
                        <h1 class="my-4 font-medium uppercase">
                            <span class="font-bold">Finsell</span> <br />
                            <span class="font-thin">flow and goals</span>
                        </h1>
                        <p
                            class="
                                leading-tight
                                mt-8
                                mb-4
                                max-w-xs
                                mx-8
                                text-gray-600
                            "
                        >
                            It works like a finance manager, helping you to
                            create a budget plan that actually works. You can
                            keep track of your expenses and incomes from your
                            mobile phone. You'll never go over your budget or
                            miss a payment again with
                            <span class="font-semibold">finsell</span> you can
                            do that on the go.
                        </p>
                    </div>
                </div>
                <div class="col-span-5 md:col-span-3">
                    <div class="grid grid-cols-3 gap-3 my-8">
                        <div
                            class="
                                w-full
                                col-span-3
                                md:col-span-1
                                flex flex-col
                                items-start
                                justify-start
                                h-48
                                md:h-64
                                p-8
                                border-gray-300 border-r
                                shadow-md
                                hover:shadow-lg
                                bg-white
                                hover:transform-scale-subtle
                                transition-normal
                                hover:show-child
                            "
                        >
                            <div
                                class="
                                    w-12
                                    h-12
                                    rounded-full
                                    bg-blue-600
                                    hover:bg-blue-300
                                    border-2 border-blue-300
                                    hover:border-blue-600
                                "
                                alt=""
                            ></div>
                            <h3
                                class="
                                    mt-6
                                    mb-1
                                    font-bold
                                    text-gray-800
                                    leading-none
                                "
                            >
                                Spend smarter and save more
                            </h3>
                            <p
                                class="
                                    mt-4
                                    text-start text-gray-700
                                    leading-normal
                                    hidden
                                    hover:block
                                "
                            >
                                Personalized Mintsights™ make your money go
                                further. We’ll automatically find savings you
                                missed.
                            </p>
                        </div>
                        <div
                            class="
                                w-full
                                col-span-3
                                md:col-span-1
                                flex flex-col
                                items-start
                                justify-start
                                h-48
                                md:h-64
                                p-8
                                border-gray-300 border-r
                                shadow-md
                                hover:shadow-lg
                                bg-white
                                hover:transform-scale-subtle
                                transition-normal
                                hover:show-child
                            "
                        >
                            <div
                                class="
                                    w-12
                                    h-12
                                    rounded-full
                                    bg-blue-400
                                    hover:bg-blue-800
                                    border-2 border-blue-800
                                    hover:border-blue-400
                                "
                                alt=""
                            ></div>
                            <h3
                                class="
                                    mt-6
                                    mb-1
                                    font-bold
                                    text-gray-800
                                    leading-none
                                "
                            >
                                Stay focused on your financial goals
                            </h3>
                            <p
                                class="
                                    mt-4
                                    text-start text-gray-700
                                    leading-normal
                                    hidden
                                    hover:block
                                "
                            >
                                Improve your spending habits with custom goals
                                that keep you going. Save for a home, crush
                                debt, and prepare for the future.
                            </p>
                        </div>
                        <div
                            class="
                                w-full
                                col-span-3
                                md:col-span-1
                                flex flex-col
                                items-start
                                justify-start
                                h-48
                                md:h-64
                                p-8
                                border-gray-300 border-r
                                shadow-md
                                hover:shadow-lg
                                bg-white
                                hover:transform-scale-subtle
                                transition-normal
                                hover:show-child
                            "
                        >
                            <div
                                class="
                                    w-12
                                    h-12
                                    rounded-full
                                    bg-blue-200
                                    hover:bg-blue-400
                                    border-2 border-blue-400
                                    hover:border-blue-200
                                "
                                alt=""
                            ></div>
                            <h3
                                class="
                                    mt-6
                                    mb-1
                                    font-bold
                                    text-gray-800
                                    leading-none
                                "
                            >
                                All your money in one app
                            </h3>
                            <p
                                class="
                                    mt-4
                                    text-start text-gray-700
                                    leading-normal
                                    hidden
                                    hover:block
                                "
                            >
                                See where all your money goes by easily adding
                                your cash, credit cards, investments, and bills.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-gray-200 py-4 font-sans">
            <div
                class="
                    container
                    w-full
                    mx-auto
                    grid grid-cols-3
                    items-center
                    justify-center
                    px-8
                    md:px-12
                "
            >
                <div class="w-full col-span-3 md:col-span-1 p-3">
                    <div
                        class="
                            flex flex-col
                            lg:flex-row
                            rounded
                            overflow-hidden
                            h-auto
                            lg:h-32
                            border-b-2 border-blue-500
                            shadow shadow-lg
                        "
                    >
                        <div
                            class="
                                bg-white
                                rounded-b
                                lg:rounded-b-none lg:rounded-r
                                px-8
                                py-4
                                flex flex-col
                                justify-center
                                leading-normal
                            "
                        >
                            <div
                                class="
                                    text-gray-700 text-xs
                                    leading-relaxed
                                    mb-2
                                    leading-tight
                                "
                            >
                                I am extremely organized, especially when it
                                comes to finances. This app is perfect for all
                                of my financial recording/planning needs. Best
                                money manager!
                            </div>
                            <p class="text-black font-semibold text-xs">
                                <cite>@ikziriv.art</cite>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="w-full col-span-3 md:col-span-1 p-3">
                    <div
                        class="
                            flex flex-col
                            lg:flex-row
                            rounded
                            overflow-hidden
                            h-auto
                            lg:h-32
                            border-b-2 border-blue-500
                            shadow shadow-lg
                        "
                    >
                        <div
                            class="
                                bg-white
                                rounded-b
                                lg:rounded-b-none lg:rounded-r
                                px-8
                                py-4
                                flex flex-col
                                justify-center
                                leading-normal
                            "
                        >
                            <div
                                class="
                                    text-gray-700 text-xs
                                    leading-relaxed
                                    mb-2
                                    leading-tight
                                "
                            >
                                Very useful personal finance app for keeping a
                                record for your expenses and reminding you at
                                the end of the day to record your daily expenses
                                as well.
                            </div>
                            <p class="text-black font-semibold text-xs">
                                <cite>@faisalramdan17</cite>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="w-full col-span-3 md:col-span-1 p-3">
                    <div
                        class="
                            flex flex-col
                            lg:flex-row
                            rounded
                            overflow-hidden
                            h-auto
                            lg:h-32
                            border-b-2 border-blue-500
                            shadow shadow-lg
                        "
                    >
                        <div
                            class="
                                bg-white
                                rounded-b
                                lg:rounded-b-none lg:rounded-r
                                px-8
                                py-4
                                flex flex-col
                                justify-center
                                leading-normal
                            "
                        >
                            <div
                                class="
                                    text-gray-700 text-xs
                                    leading-relaxed
                                    mb-2
                                    leading-tight
                                "
                            >
                                If you like to have all your expenses recorded ,
                                this application is for you. I do not have to
                                mention, what kind of analysis you can do with
                                your data. Simply perfect!
                            </div>
                            <p class="text-black font-semibold text-xs">
                                <cite>@ikziriv.art</cite>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section
            class="font-sans text-center py-12 md:py-24 px-4 lg:px-0 bg-white"
        >
            <div
                class="
                    container
                    flex flex-col
                    sm:flex-row
                    bg-white
                    max-w-xl
                    m-auto
                    shadow-lg
                "
            >
                <div
                    class="
                        w-full
                        sm:w-3/4
                        px-6
                        pt-6
                        text-left
                        flex flex-col
                        justify-center
                    "
                >
                    <h2 class="capitalize font-medium">
                        Ready to get started?
                    </h2>
                    <p class="text-gray-700 texxt-sm leading-tight mt-2 mb-6">
                        But I must explain to you how all this mistaken idea of
                        denouncing
                    </p>
                </div>
                <div
                    class="
                        w-full
                        sm:w-1/4
                        flex
                        justify-start
                        sm:justify-center
                        items-center
                        pl-6
                        pb-6
                        sm:pl-0
                        sm:pb-0
                    "
                >
                    <button
                        class="
                            bg-blue-500
                            hover:bg-blue-600
                            text-white
                            hover:text-white
                            py-3
                            px-6
                            uppercase
                            text-xs
                            tracking-wide
                            rounded-xl
                        "
                    >
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    </div>
</template>
