<script setup>
import { useI18n } from 'vue-i18n'
import heroImage from '../assets/hero-image.png'

const { t } = useI18n()
</script>

<template>
    <div class="pt-16">
        <!-- Hero -->
        <section class="relative px-6 py-12 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
            <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <!-- Content -->
                <div class="text-center md:text-left relative z-10">
                    <p class="text-4xl mb-6 font-semibold text-gray-800">
                        {{ t('hero.title') }}
                    </p>
                    <p class="text-lg mb-8 text-gray-600">
                        {{ t('hero.subtitle') }}
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4">
                        <a href="http://app.orina.beauty"
                            class="bg-red-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-600 transition-colors duration-300">
                            {{ t('nav.getStarted') }}
                        </a>
                    </div>
                    <p class="mt-4 text-sm text-gray-500">{{ t('hero.joinOthers') }}</p>
                </div>

                <!-- Image -->
                <div class="relative">
                    <div
                        class="aspect-square rounded-3xl bg-gradient-to-br from-red-100 to-red-50 shadow-2xl overflow-hidden">
                        <!-- Placeholder styling -->
                        <div class="absolute inset-0 flex items-center justify-center">
                            <div class="relative w-4/5 h-4/5">
                                <img :src="heroImage" alt="Orina Hero"
                                    class="w-full h-full object-cover absolute -bottom-16">
                                <!-- Abstract shape decorations -->
                                <div
                                    class="absolute top-0 right-0 w-24 h-24 bg-red-200 rounded-full opacity-50 transform translate-x-1/2 -translate-y-1/2">
                                </div>
                                <div
                                    class="absolute bottom-0 left-0 w-32 h-32 bg-red-300 rounded-full opacity-30 transform -translate-x-1/2 translate-y-1/2">
                                </div>

                                <!-- Image placeholder with icon -->
                                <div class="absolute inset-0 flex items-center justify-center">
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Floating elements -->
                    <div class="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg transform rotate-3">
                        <p class="text-sm font-semibold">{{ t('hero.rating') }}</p>
                    </div>
                    <div class="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg transform -rotate-3">
                        <p class="text-sm font-semibold">{{ t('hero.bookInSeconds') }}</p>
                    </div>
                </div>
            </div>

            <!-- Background decoration -->
            <div
                class="absolute top-0 right-0 w-1/3 h-1/3 bg-red-50 rounded-full opacity-30 transform translate-x-1/2 -translate-y-1/2">
            </div>
            <div
                class="absolute bottom-0 left-0 w-1/2 h-1/2 bg-red-50 rounded-full opacity-20 transform -translate-x-1/2 translate-y-1/2">
            </div>
        </section>

        <!-- For Customers -->
        <section id="features" class="px-6 py-24 bg-gradient-to-b from-white to-gray-50">
            <div class="max-w-6xl mx-auto">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-bold mb-4">{{ t('features.title') }}</h2>
                    <p class="text-gray-600 text-lg max-w-2xl mx-auto">{{ t('features.subtitle') }}</p>
                </div>

                <div class="grid md:grid-cols-2 gap-16">
                    <!-- Customer Features -->
                    <div
                        class="bg-white rounded-2xl p-8 shadow-lg transform hover:scale-110 transition-transform duration-300">
                        <div class="flex items-center justify-center mb-6">
                            <span class="text-3xl mr-4">💇‍♀️</span>
                            <h3 class="text-2xl font-bold text-gray-800">{{ t('features.forCustomers.title') }}</h3>
                        </div>
                        <div class="space-y-6">
                            <div class="flex items-start">
                                <span class="text-2xl mr-4 text-red-500">✨</span>
                                <div>
                                    <h4 class="font-semibold mb-1">{{ t('features.forCustomers.find.title') }}</h4>
                                    <p class="text-gray-600">{{ t('features.forCustomers.find.desc') }}</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <span class="text-2xl mr-4 text-red-500">⚡️</span>
                                <div>
                                    <h4 class="font-semibold mb-1">{{ t('features.forCustomers.book.title') }}</h4>
                                    <p class="text-gray-600">{{ t('features.forCustomers.book.desc') }}</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <span class="text-2xl mr-4 text-red-500">🎯</span>
                                <div>
                                    <h4 class="font-semibold mb-1">{{ t('features.forCustomers.notify.title') }}</h4>
                                    <p class="text-gray-600">{{ t('features.forCustomers.notify.desc') }}</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <span class="text-2xl mr-4 text-red-500">💫</span>
                                <div>
                                    <h4 class="font-semibold mb-1">{{ t('features.forCustomers.gallery.title') }}</h4>
                                    <p class="text-gray-600">{{ t('features.forCustomers.gallery.desc') }}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Dashboard Features -->
                    <div
                        class="bg-white rounded-2xl p-8 shadow-lg transform hover:scale-110 transition-transform duration-300">
                        <div class="flex items-center justify-center mb-6">
                            <span class="text-3xl mr-4">🚀</span>
                            <h3 class="text-2xl font-bold text-gray-800">{{ t('features.forSalons.title') }}</h3>
                        </div>
                        <div class="space-y-6">
                            <div class="flex items-start">
                                <span class="text-2xl mr-4 text-red-500">💼</span>
                                <div>
                                    <h4 class="font-semibold mb-1">{{ t('features.forSalons.management.title') }}</h4>
                                    <p class="text-gray-600">{{ t('features.forSalons.management.desc') }}</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <span class="text-2xl mr-4 text-red-500">📊</span>
                                <div>
                                    <h4 class="font-semibold mb-1">{{ t('features.forSalons.analytics.title') }}</h4>
                                    <p class="text-gray-600">{{ t('features.forSalons.analytics.desc') }}</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <span class="text-2xl mr-4 text-red-500">🔔</span>
                                <div>
                                    <h4 class="font-semibold mb-1">{{ t('features.forSalons.notifications.title') }}
                                    </h4>
                                    <p class="text-gray-600">{{ t('features.forSalons.notifications.desc') }}</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <span class="text-2xl mr-4 text-red-500">🎯</span>
                                <div>
                                    <h4 class="font-semibold mb-1">{{ t('features.forSalons.marketing.title') }}</h4>
                                    <p class="text-gray-600">{{ t('features.forSalons.marketing.desc') }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Journey -->
        <section id="journey" class="px-6 py-24 bg-gray-50">
            <div class="max-w-7xl mx-auto">
                <h2 class="text-4xl text-center font-bold mb-4">{{ t('journey.title') }}</h2>
                <p class="text-gray-600 text-center text-lg mb-16 max-w-2xl mx-auto">
                    {{ t('journey.subtitle') }}
                </p>

                <!-- Step 1: Find -->
                <div class="grid md:grid-cols-2 gap-12 items-center mb-24">
                    <div class="order-2 md:order-1">
                        <div class="flex items-center gap-3 mb-4">
                            <span class="text-3xl">🔍</span>
                            <h3 class="text-2xl font-bold">{{ t('journey.step1.title') }}</h3>
                        </div>
                        <p class="text-gray-600 text-lg">{{ t('journey.step1.desc') }}</p>
                    </div>
                    <div class="order-1 md:order-2 bg-white rounded-2xl p-8 shadow-lg">
                        <div class="aspect-square bg-gray-100 rounded-xl flex items-center justify-center">
                            <img src="../assets/orina-find.png" alt="">
                        </div>
                    </div>
                </div>

                <!-- Step 2: Book -->
                <div class="grid md:grid-cols-2 gap-12 items-center mb-24">
                    <div class="bg-white rounded-2xl p-8 shadow-lg">
                        <div class="aspect-square bg-gray-100 rounded-xl flex items-center justify-center">
                            <img src="../assets/orina-book.png" alt="">
                        </div>
                    </div>
                    <div>
                        <div class="flex items-center gap-3 mb-4">
                            <span class="text-3xl">📅</span>
                            <h3 class="text-2xl font-bold">{{ t('journey.step2.title') }}</h3>
                        </div>
                        <p class="text-gray-600 text-lg">{{ t('journey.step2.desc') }}</p>
                    </div>
                </div>

                <!-- Step 3: Experience -->
                <div class="grid md:grid-cols-2 gap-12 items-center mb-24">
                    <div class="order-2 md:order-1">
                        <div class="flex items-center gap-3 mb-4">
                            <span class="text-3xl">✨</span>
                            <h3 class="text-2xl font-bold">{{ t('journey.step3.title') }}</h3>
                        </div>
                        <p class="text-gray-600 text-lg">{{ t('journey.step3.desc') }}</p>
                    </div>
                    <div class="order-1 md:order-2 bg-white rounded-2xl p-8 shadow-lg">
                        <div class="aspect-square bg-gray-100 rounded-xl flex items-center justify-center">
                            <img src="../assets/orina-experience.png" alt="">
                        </div>
                    </div>
                </div>

                <!-- Step 4: Share -->
                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div class="bg-white rounded-2xl p-8 shadow-lg">
                        <div class="aspect-square bg-gray-100 rounded-xl flex items-center justify-center">
                            <img src="../assets/orina-grow.png" alt="">
                        </div>
                    </div>
                    <div>
                        <div class="flex items-center gap-3 mb-4">
                            <span class="text-3xl">🌟</span>
                            <h3 class="text-2xl font-bold">{{ t('journey.step4.title') }}</h3>
                        </div>
                        <p class="text-gray-600 text-lg">{{ t('journey.step4.desc') }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Pricing -->
        <section id="pricing" class="px-6 py-24 bg-white">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-bold mb-4">{{ t('pricing.title') }}</h2>
                    <p class="text-gray-600 text-lg max-w-2xl mx-auto">{{ t('pricing.subtitle') }}</p>
                </div>

                <div class="flex flex-col md:flex-row gap-8">
                    <!-- Basic Plan -->
                    <div
                        class=" bg-white rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300 min-w-full md:min-w-[406px]">
                        <div class="text-center mb-8">
                            <h3 class="text-2xl font-bold text-gray-800 mb-2">{{ t('pricing.basic.title') }}</h3>
                            <div class="flex items-center justify-center">
                                <span class="text-4xl font-bold text-gray-800">{{ t('pricing.basic.price') }}₽</span>
                                <span class="text-gray-500 ml-2">/{{ t('pricing.period') }}</span>
                            </div>
                        </div>
                        <ul class="space-y-4 mb-8">
                            <li class="flex items-center">
                                <span class="text-green-500 mr-2">✓</span>
                                <span>{{ t('pricing.basic.features.1') }}</span>
                            </li>
                            <li class="flex items-center">
                                <span class="text-green-500 mr-2">✓</span>
                                <span>{{ t('pricing.basic.features.2') }}</span>
                            </li>
                            <li class="flex items-center">
                                <span class="text-green-500 mr-2">✓</span>
                                <span>{{ t('pricing.basic.features.3') }}</span>
                            </li>
                        </ul>
                        <a href="http://app.orina.beauty"
                            class="block w-full text-center bg-gray-100 text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-200">
                            {{ t('pricing.basic.cta') }}
                        </a>
                    </div>

                    <!-- Pro Plan -->
                    <div
                        class="bg-white rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300 relative min-w-full md:min-w-[406px]">
                        <div class="absolute top-0 right-0 bg-red-500 text-white px-4 py-1 rounded-bl-xl rounded-tr-xl">
                            {{ t('pricing.pro.popular') }}
                        </div>
                        <div class="text-center mb-8">
                            <h3 class="text-2xl font-bold text-gray-800 mb-2">{{ t('pricing.pro.title') }}</h3>
                            <div class="flex items-center justify-center">
                                <span class="text-4xl font-bold text-gray-800">{{ t('pricing.pro.price') }}₽</span>
                                <span class="text-gray-500 ml-2">/{{ t('pricing.period') }}</span>
                            </div>
                        </div>
                        <ul class="space-y-4 mb-8">
                            <li class="flex items-center">
                                <span class="text-green-500 mr-2">✓</span>
                                <span>{{ t('pricing.pro.features.1') }}</span>
                            </li>
                            <li class="flex items-center">
                                <span class="text-green-500 mr-2">✓</span>
                                <span>{{ t('pricing.pro.features.2') }}</span>
                            </li>
                            <li class="flex items-center">
                                <span class="text-green-500 mr-2">✓</span>
                                <span>{{ t('pricing.pro.features.3') }}</span>
                            </li>
                            <li class="flex items-center">
                                <span class="text-green-500 mr-2">✓</span>
                                <span>{{ t('pricing.pro.features.4') }}</span>
                            </li>
                        </ul>
                        <a href="http://app.orina.beauty"
                            class="block w-full text-center bg-red-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-600 transition-colors duration-200">
                            {{ t('pricing.pro.cta') }}
                        </a>
                    </div>

                    <!-- Enterprise Plan -->
                    <div
                        class="bg-white rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300 min-w-full md:min-w-[406px]">
                        <div class="text-center mb-8">
                            <h3 class="text-2xl font-bold text-gray-800 mb-2">{{ t('pricing.enterprise.title') }}</h3>
                            <div class="flex items-center justify-center">
                                <span class="text-4xl font-bold text-gray-800">{{ t('pricing.enterprise.price')
                                    }}</span>
                            </div>
                        </div>
                        <ul class="space-y-4 mb-8">
                            <li class="flex items-center">
                                <span class="text-green-500 mr-2">✓</span>
                                <span>{{ t('pricing.enterprise.features.1') }}</span>
                            </li>
                            <li class="flex items-center">
                                <span class="text-green-500 mr-2">✓</span>
                                <span>{{ t('pricing.enterprise.features.2') }}</span>
                            </li>
                            <li class="flex items-center">
                                <span class="text-green-500 mr-2">✓</span>
                                <span>{{ t('pricing.enterprise.features.3') }}</span>
                            </li>
                            <li class="flex items-center">
                                <span class="text-green-500 mr-2">✓</span>
                                <span>{{ t('pricing.enterprise.features.4') }}</span>
                            </li>
                        </ul>
                        <a href="http://app.orina.beauty"
                            class="block w-full text-center bg-gray-100 text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-200">
                            {{ t('pricing.enterprise.cta') }}
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact -->
        <section id="contact" class="px-6 py-24 bg-red-500">
            <div class="max-w-2xl mx-auto text-center">
                <h2 class="text-3xl font-bold mb-4 text-white">{{ t('contact.title') }}</h2>
                <p class="text-white text-lg mb-8 opacity-90">
                    {{ t('contact.subtitle') }}
                </p>

                <div class="flex flex-col gap-6">
                    <div class="grid md:grid-cols-2 gap-4">
                        <a href="mailto:sales@orina.beauty"
                            class="bg-white/90 text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-white transition-colors duration-200">
                            {{ t('contact.sales') }}
                        </a>
                        <a href="mailto:support@orina.beauty"
                            class="bg-white/90 text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-white transition-colors duration-200">
                            {{ t('contact.support') }}
                        </a>
                    </div>
                    <a href="mailto:partnership@orina.beauty"
                        class="bg-white/90 text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-white transition-colors duration-200">
                        {{ t('contact.partnership') }}
                    </a>
                </div>

                <div class="mt-6 text-sm text-white/80">
                    <p>{{ t('contact.privacy') }}</p>
                </div>
            </div>
        </section>


    </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>