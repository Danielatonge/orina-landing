<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { posts } from '../data/posts'

const { t } = useI18n()
const router = useRouter()

const selectedCategory = ref('all')

const categories = [
    { id: 'all', name: t('blog.categories.all') },
    { id: 'trends', name: t('blog.categories.trends') },
    { id: 'tips', name: t('blog.categories.tips') },
    { id: 'business', name: t('blog.categories.business') }
]

const filteredPosts = computed(() => {
    if (selectedCategory.value === 'all') return posts
    return posts.filter(post => post.category === selectedCategory.value)
})

const navigateToPost = (slug) => {
    router.push(`/blog/${slug}`)
}
</script>

<template>
    <section id="blog" class="px-6 py-24 bg-gray-50">
        <div class="max-w-7xl mx-auto">
            <!-- Header -->
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold mb-4">{{ t('blog.title') }}</h2>
                <p class="text-gray-600 text-lg max-w-2xl mx-auto">{{ t('blog.subtitle') }}</p>
            </div>

            <!-- Categories -->
            <div class="flex flex-wrap justify-center gap-4 mb-12">
                <button v-for="category in categories" :key="category.id" @click="selectedCategory = category.id"
                    :class="[
                        'px-6 py-2 rounded-full transition-colors duration-200',
                        selectedCategory === category.id
                            ? 'bg-red-500 text-white'
                            : 'bg-white text-gray-600 hover:bg-gray-100'
                    ]">
                    {{ category.name }}
                </button>
            </div>

            <!-- Featured Posts -->
            <div class="mb-16">
                <h3 class="text-2xl font-bold mb-4">{{ t('blog.featured.title') }}</h3>
                <p class="text-gray-600 mb-8">{{ t('blog.featured.subtitle') }}</p>
                <div class="grid md:grid-cols-3 gap-8">
                    <article v-for="post in filteredPosts.slice(0, 3)" :key="post.id"
                        class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                        @click="navigateToPost(post.slug)">
                        <div class="aspect-video bg-gray-200 overflow-hidden">
                            <div class="w-full h-full flex items-center justify-center text-gray-400">
                                <img :src="post.image" alt="" />
                            </div>
                        </div>
                        <div class="p-6">
                            <span class="text-sm text-red-500 font-semibold">
                                {{ t(`blog.categories.${post.category}`) }}
                            </span>
                            <h4 class="text-xl font-bold mt-2 mb-3">{{ post.title }}</h4>
                            <p class="text-gray-600 mb-4 line-clamp-3 ">{{ post.content.overview }}</p>
                            <div class="flex justify-between items-center">
                                <span class="text-sm text-gray-500">
                                    {{ new Date(post.date).toLocaleDateString() }}
                                </span>
                                <span
                                    class="text-red-500 font-semibold hover:text-red-600 transition-colors duration-200">
                                    {{ t('blog.readMore') }} →
                                </span>
                            </div>
                        </div>
                    </article>
                </div>
            </div>

            <!-- Latest Posts -->
            <div>
                <h3 class="text-2xl font-bold mb-4">{{ t('blog.latest.title') }}</h3>
                <p class="text-gray-600 mb-8">{{ t('blog.latest.subtitle') }}</p>
                <div class="grid md:grid-cols-2 gap-8">
                    <article v-for="post in filteredPosts.slice(3)" :key="post.id"
                        class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                        @click="navigateToPost(post.slug)">
                        <div class="flex flex-col md:flex-row">
                            <div class="md:w-1/3 aspect-video md:aspect-auto bg-gray-200">
                                <div class="w-full h-full flex items-center justify-center text-gray-400">
                                    [Image]
                                </div>
                            </div>
                            <div class="p-6 md:w-2/3">
                                <span class="text-sm text-red-500 font-semibold">
                                    {{ t(`blog.categories.${post.category}`) }}
                                </span>
                                <h4 class="text-xl font-bold mt-2 mb-3">{{ post.title }}</h4>
                                <p class="text-gray-600 mb-4">{{ post.content.sections[0].content }}</p>
                                <div class="flex justify-between items-center">
                                    <span class="text-sm text-gray-500">
                                        {{ new Date(post.date).toLocaleDateString() }}
                                    </span>
                                    <span
                                        class="text-red-500 font-semibold hover:text-red-600 transition-colors duration-200">
                                        {{ t('blog.readMore') }} →
                                    </span>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.aspect-video {
    aspect-ratio: 16 / 9;
}
</style>