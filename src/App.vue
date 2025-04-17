<script setup>
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<template>
  <div class="bg-white text-gray-800 font-sans">
    <!-- Navbar -->
    <nav class="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-6 md:px-0 py-4">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <div class="flex items-center">
            <h1 class="text-4xl font-bold">
              <span class="text-red-500">O</span>rina<span class="text-red-500">.</span>
            </h1>
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-8">
            <a href="#features" class="text-gray-600 hover:text-gray-900 transition-colors duration-200">Features</a>
            <a href="#journey" class="text-gray-600 hover:text-gray-900 transition-colors duration-200">About</a>
            <a href="#waitlist" class="text-gray-600 hover:text-gray-900 transition-colors duration-200">Pricing</a>
            <a href="#contact" class="text-gray-600 hover:text-gray-900 transition-colors duration-200">Contact</a>
          </div>

          <!-- CTA Buttons -->
          <div class="hidden md:flex items-center space-x-4">
            <button class="text-gray-700 hover:text-red-500 font-semibold transition-colors duration-200">
              Sign In
            </button>
            <a href="#waitlist"
              class="bg-red-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-red-600 transition-colors duration-200">
              Join Waitlist
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
            <a href="#features"
              class="block text-gray-600 hover:text-gray-900 transition-colors duration-200">Features</a>
            <a href="#about" class="block text-gray-600 hover:text-gray-900 transition-colors duration-200">About</a>
            <a href="#pricing"
              class="block text-gray-600 hover:text-gray-900 transition-colors duration-200">Pricing</a>
            <a href="#contact"
              class="block text-gray-600 hover:text-gray-900 transition-colors duration-200">Contact</a>
            <div class="pt-4 space-y-4">
              <button
                class="block w-full text-left text-gray-700 hover:text-red-500 font-semibold transition-colors duration-200">
                Sign In
              </button>
              <a href="#waitlist"
                class="block w-full bg-red-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-red-600 transition-colors duration-200">
                Join Waitlist
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- Add margin-top to the hero section to account for fixed navbar -->
    <div class="pt-16">
      <!-- Hero -->
      <section class="relative px-6 py-12 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <!-- Content -->
          <div class="text-center md:text-left relative z-10">
            <p class="text-4xl mb-6 font-semibold text-gray-800">
              Your Salon, Just a Tap Away.
            </p>
            <p class="text-lg mb-8 text-gray-600">
              A smarter, simpler way to book salon appointments and manage beauty businesses.
              Whether you're getting styled or managing the salon—Orina connects you in seconds.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <a href="#waitlist"
                class="bg-red-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-600 transition-colors duration-300">
                Join the Waitlist
              </a>
              <a href="#waitlist"
                class="bg-white text-gray-800 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 border-2 border-gray-200 transition-colors duration-300">
                Book a Demo
              </a>
            </div>
            <p class="mt-4 text-sm text-gray-500">✨ Join 500+ salons already waiting to transform their business</p>
          </div>

          <!-- Image -->
          <div class="relative">
            <div class="aspect-square rounded-3xl bg-gradient-to-br from-red-100 to-red-50 shadow-2xl overflow-hidden">
              <!-- Placeholder styling -->
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="relative w-4/5 h-4/5">
                  <!-- Abstract shape decorations -->
                  <div
                    class="absolute top-0 right-0 w-24 h-24 bg-red-200 rounded-full opacity-50 transform translate-x-1/2 -translate-y-1/2">
                  </div>
                  <div
                    class="absolute bottom-0 left-0 w-32 h-32 bg-red-300 rounded-full opacity-30 transform -translate-x-1/2 translate-y-1/2">
                  </div>

                  <!-- Image placeholder with icon -->
                  <div class="absolute inset-0 flex items-center justify-center">
                    <span class="text-8xl">💇‍♀️</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Floating elements -->
            <div class="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg transform rotate-3">
              <p class="text-sm font-semibold">⭐️ 4.9/5 Rating</p>
            </div>
            <div class="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg transform -rotate-3">
              <p class="text-sm font-semibold">🚀 Book in 30 seconds</p>
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
            <h2 class="text-4xl font-bold mb-4">Experience the Difference</h2>
            <p class="text-gray-600 text-lg max-w-2xl mx-auto">Discover how Orina transforms your salon experience with
              powerful features for both customers and beauty salons.</p>
          </div>

          <div class="grid md:grid-cols-2 gap-16">
            <!-- Customer Features -->
            <div class="bg-white rounded-2xl p-8 shadow-lg transform hover:scale-110 transition-transform duration-300">
              <div class="flex items-center justify-center mb-6">
                <span class="text-3xl mr-4">💇‍♀️</span>
                <h3 class="text-2xl font-bold text-gray-800">For Customers</h3>
              </div>
              <div class="space-y-6">
                <div class="flex items-start">
                  <span class="text-2xl mr-4 text-red-500">✨</span>
                  <div>
                    <h4 class="font-semibold mb-1">Find Your Perfect Salon</h4>
                    <p class="text-gray-600">Browse top-rated salons near you, read reviews, and explore their signature
                      styles.</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <span class="text-2xl mr-4 text-red-500">⚡️</span>
                  <div>
                    <h4 class="font-semibold mb-1">Lightning-Fast Booking</h4>
                    <p class="text-gray-600">Book your favorite stylist in seconds, with real-time availability and
                      instant confirmation.</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <span class="text-2xl mr-4 text-red-500">🎯</span>
                  <div>
                    <h4 class="font-semibold mb-1">Never Miss an Appointment</h4>
                    <p class="text-gray-600">Smart reminders, calendar sync, and instant updates keep you perfectly on
                      schedule.</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <span class="text-2xl mr-4 text-red-500">💫</span>
                  <div>
                    <h4 class="font-semibold mb-1">Inspiration Gallery</h4>
                    <p class="text-gray-600">Create your style wishlist and share inspiration directly with your
                      stylist.
                    </p>
                  </div>
                </div>
                <div class="flex items-start">
                  <span class="text-2xl mr-4 text-red-500">💎</span>
                  <div>
                    <h4 class="font-semibold mb-1">Effortless Payments</h4>
                    <p class="text-gray-600">Skip the checkout line with secure digital payments and split-payment
                      options.</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Dashboard Features -->
            <div class="bg-white rounded-2xl p-8 shadow-lg transform hover:scale-110 transition-transform duration-300">
              <div class="flex items-center justify-center mb-6">
                <span class="text-3xl mr-4">🚀</span>
                <h3 class="text-2xl font-bold text-gray-800">For Salons</h3>
              </div>
              <div class="space-y-6">
                <div class="flex items-start">
                  <span class="text-2xl mr-4 text-red-500">💼</span>
                  <div>
                    <h4 class="font-semibold mb-1">Smart Business Management</h4>
                    <p class="text-gray-600">Manage appointments, staff schedules, and client relationships from one
                      powerful dashboard.</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <span class="text-2xl mr-4 text-red-500">📊</span>
                  <div>
                    <h4 class="font-semibold mb-1">Analytics & Insights</h4>
                    <p class="text-gray-600">Track revenue, popular services, and customer satisfaction with real-time
                      analytics.</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <span class="text-2xl mr-4 text-red-500">🔔</span>
                  <div>
                    <h4 class="font-semibold mb-1">Automated Notifications</h4>
                    <p class="text-gray-600">Reduce no-shows with automated reminders and booking confirmations.</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <span class="text-2xl mr-4 text-red-500">💰</span>
                  <div>
                    <h4 class="font-semibold mb-1">Payment Processing</h4>
                    <p class="text-gray-600">Accept deposits, process payments, and manage refunds with ease.</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <span class="text-2xl mr-4 text-red-500">🎯</span>
                  <div>
                    <h4 class="font-semibold mb-1">Marketing Tools</h4>
                    <p class="text-gray-600">Grow your business with integrated marketing tools and customer loyalty
                      programs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Journey -->
      <section id="journey" class="px-6 py-20 max-w-4xl mx-auto">
        <h2 class="text-2xl text-center font-bold mb-6">✨ Your Beauty Journey Starts Here</h2>
        <ol class="list-decimal list-inside space-y-6">
          <li>
            <strong>Discover</strong> —
            <span class="text-gray-600">Find your perfect match from our curated network of top-rated salons and expert
              stylists who align with your unique style and preferences.</span>
          </li>
          <li>
            <strong>Book</strong> —
            <span class="text-gray-600">Schedule your appointment in seconds with our intuitive booking system. Pick
              your
              time, service, and stylist—all with just a few taps.</span>
          </li>
          <li>
            <strong>Experience</strong> —
            <span class="text-gray-600">Enjoy a seamless salon visit with digital check-in, style sharing, and
              contactless
              payments. Your perfect look awaits!</span>
          </li>
          <li>
            <strong>Share & Grow</strong> —
            <span class="text-gray-600">Join our beauty community. Share your experience, earn rewards, and discover new
              styles and trends from fellow beauty enthusiasts.</span>
          </li>
        </ol>
      </section>

      <!-- Waitlist -->
      <section id="waitlist" class="px-6 py-24 bg-red-500">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-4 text-white">📲 Ready to Try Orina?</h2>
          <p class="text-white text-lg mb-8 opacity-90">
            Be among the first to experience the future of salon booking. Get early access and exclusive updates.
          </p>

          <form class="flex flex-col md:flex-row gap-4 justify-center items-center">
            <div class="w-full md:w-2/3">
              <input type="email" placeholder="Enter your email address"
                class="w-full px-6 py-3 rounded-full border-2 border-transparent bg-white/90 placeholder-gray-500 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/30"
                required />
            </div>
            <button type="submit"
              class="w-full md:w-auto bg-gray-50 text-gray-500 hover:text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-500 transition-colors duration-400 border-2 border-transparent hover:border-white">
              Get Early Access
            </button>
          </form>

          <div class="mt-6 text-sm text-white/80">
            <p>🔒 We respect your privacy and will never share your information.</p>
            <p class="mt-2">✨ Join 500+ others excited about Orina</p>
          </div>
        </div>
      </section>

      <!-- Final Note -->
      <section class="bg-gray-50 px-6 py-16 text-center">
        <h2 class="text-2xl font-bold mb-4">🧡 Inspired by the best, built for you.</h2>
        <p class="mb-4">"Think Fresha, but reimagined for flexibility and speed."</p>
        <p class="text-gray-700">Explore the new standard in salon scheduling.</p>
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
                Transforming the beauty industry with seamless scheduling and business management solutions.
              </p>
            </div>

            <!-- Contact Details -->
            <div class="md:text-right space-y-4" id="contact">
              <div>
                <h3 class="text-white font-semibold mb-2">Contact Us</h3>
                <a href="mailto:hello@orina.co" class="text-gray-400 hover:text-white transition-colors duration-200">
                  hello@orina.co
                </a>
              </div>
              <div>
                <h3 class="text-white font-semibold mb-2">Follow Us</h3>
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
            <p class="text-sm text-gray-400">&copy; 2025 Orina. All rights reserved.</p>
            <div class="flex gap-4 mt-4 md:mt-0">
              <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors duration-200">Privacy
                Policy</a>
              <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors duration-200">Terms of
                Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
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
</style>
