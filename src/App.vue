<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from './components/LanguageSwitcher.vue'

const isMobileMenuOpen = ref(false)

const { t } = useI18n()
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const currentYear = ref(new Date().getFullYear())
</script>

<template>
  <div class="bg-white text-gray-800 font-sans">
    <!-- Navbar -->
    <nav class="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-6 md:px-0 py-4">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <div class="flex items-center">
            <router-link to="/" class="text-4xl font-bold">
              <span class="text-red-500">O</span>rina<span class="text-red-500">.</span>
            </router-link>
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-8">
            <router-link to="/#features" class="text-gray-600 hover:text-gray-900 transition-colors duration-200">{{
              t('nav.features') }}</router-link>
            <router-link to="/#journey" class="text-gray-600 hover:text-gray-900 transition-colors duration-200">{{
              t('nav.about') }}</router-link>
            <router-link to="/#pricing" class="text-gray-600 hover:text-gray-900 transition-colors duration-200">{{
              t('nav.pricing') }}</router-link>
            <router-link to="/blog" class="text-gray-600 hover:text-gray-900 transition-colors duration-200">{{
              t('nav.blog') }}</router-link>
            <router-link to="/#contact" class="text-gray-600 hover:text-gray-900 transition-colors duration-200">{{
              t('nav.contact') }}</router-link>
          </div>

          <!-- CTA Buttons -->
          <div class="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <a href="http://app.orina.beauty"
              class="bg-red-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-red-600 transition-colors duration-200">
              {{ t('nav.getStarted') }}
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <button class="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none" @click="toggleMobileMenu">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        <!-- Mobile Menu (Hidden by default) -->
        <div class="md:hidden" :class="{ 'hidden': !isMobileMenuOpen }">
          <div class="py-4 space-y-4">
            <router-link to="/#features"
              class="block text-gray-600 hover:text-gray-900 transition-colors duration-200">{{
                t('nav.features') }}</router-link>
            <router-link to="/#about" class="block text-gray-600 hover:text-gray-900 transition-colors duration-200">{{
              t('nav.about') }}</router-link>
            <router-link to="/#pricing"
              class="block text-gray-600 hover:text-gray-900 transition-colors duration-200">{{
                t('nav.pricing') }}</router-link>
            <router-link to="/blog" class="block text-gray-600 hover:text-gray-900 transition-colors duration-200">{{
              t('nav.blog') }}</router-link>
            <router-link to="/#contact"
              class="block text-gray-600 hover:text-gray-900 transition-colors duration-200">{{
                t('nav.contact') }}</router-link>
            <div class="pt-4 space-y-4">
              <a href="http://app.orina.beauty"
                class="block w-full bg-red-500 text-center text-white px-4 py-2 rounded-full font-semibold hover:bg-red-600 transition-colors duration-200">
                {{ t('nav.getStarted') }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- Router View -->
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <!-- Add margin-top to the hero section to account for fixed navbar -->
    <!-- Sponsored Note -->
    <section class="bg-gray-50 px-6 py-16 text-center flex flex-col md:flex-row gap-4 justify-center">
      <div class="flex justify-center">
        <a class="flex gap-4" href="https://fasie.ru/">
          <img src="./assets/fasie-logo.svg" alt="mail" class="object-contain h-24">
        </a>
      </div>
      <div class="flex justify-center">
        <p class="mb-4 max-w-4xl text-center md:text-right ">{{ t('sponsored.title') }}</p>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 text-gray-300 px-6 py-10">
      <div class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-2 gap-8 mb-8">
          <!-- Logo and Description -->
          <div>
            <h1 class="text-4xl font-bold mb-4">
              <span class="text-red-500">O</span>rina<span class="text-red-500">.</span>
            </h1>
            <p class="text-gray-400 max-w-md">
              {{ t('footer.description') }}
            </p>

          </div>

          <!-- Contact Details -->
          <div class="md:text-right space-y-4" id="contact">
            <div>
              <h3 class="text-white font-semibold mb-2">{{ t('footer.contact') }}</h3>
              <a href="mailto:hello@orina.beauty" class="text-gray-400 hover:text-white transition-colors duration-200">
                hello@orina.beauty
              </a>
            </div>
            <div>
              <h3 class="text-white font-semibold mb-2">{{ t('footer.follow') }}</h3>
              <div class="flex md:justify-end gap-4">
                <a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">
                  Twitter
                </a>
                <a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">
                  LinkedIn
                </a>
                <a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p class="text-sm text-gray-400"> &copy; {{ currentYear }} {{ t('footer.rights') }}</p>
          <div class="flex gap-4 mt-4 md:mt-0">
            <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors duration-200">{{
              t('footer.privacy') }}</a>
            <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors duration-200">{{
              t('footer.terms') }}</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
