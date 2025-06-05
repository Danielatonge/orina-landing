<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { getPostBySlug, getRelatedPosts } from '../data/posts'

const { t } = useI18n()
const route = useRoute()
const router = useRouter()

const post = ref(null)
const relatedPosts = ref([])

onMounted(() => {
    const slug = route.params.slug
    const foundPost = getPostBySlug(slug)

    if (!foundPost) {
        // Redirect to 404 or blog listing if post not found
        router.push('/blog')
        return
    }

    post.value = foundPost
    relatedPosts.value = getRelatedPosts(foundPost)
})
</script>

<template>
    <article v-if="post" class="max-w-4xl mx-auto px-6 py-24">
        <!-- Header -->
        <header class="mb-12">
            <div class="flex items-center gap-4 mb-6">
                <router-link to="/blog" class="text-red-500 hover:text-red-600 transition-colors duration-200">
                    ← {{ t('blog.title') }}
                </router-link>
                <span class="text-gray-400">/</span>
                <span class="text-red-500 font-semibold">{{ t(`blog.categories.${post.category}`) }}</span>
            </div>
            <h1
                class="text-5xl font-black text-gray-900 mb-6 tracking-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                {{ post.title }}
            </h1>
            <div class="flex items-center gap-6 text-gray-600">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                        <span class="text-gray-400">👤</span>
                    </div>
                    <div>
                        <p class="font-semibold text-gray-800">{{ post.author.name }}</p>
                        <p class="text-sm">{{ post.author.role }}</p>
                    </div>
                </div>
                <span class="text-gray-400">•</span>
                <time :datetime="post.date">{{ new Date(post.date).toLocaleDateString() }}</time>
            </div>
        </header>

        <!-- Featured Image -->
        <div class="aspect-video bg-gray-200 rounded-2xl mb-12">
            <div class="w-full h-full flex items-center justify-center text-gray-400">
                [Featured Image]
            </div>
        </div>

        <!-- Content -->
        <div class="prose prose-lg max-w-none mb-16">
            <div v-for="(section, index) in post.content.sections" :key="index" class="mb-12">
                <h2 class="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                    <span>{{ section.icon }}</span>
                    {{ index + 1 }}. {{ section.title }}
                </h2>

                <p class="text-gray-600 mb-6">{{ section.content }}</p>

                <ul v-if="section.list" class="list-disc list-inside space-y-2 mb-6">
                    <li v-for="(item, i) in section.list" :key="i" class="text-gray-600">
                        {{ item }}
                    </li>
                </ul>

                <div v-if="section.code" class="bg-gray-800 rounded-lg p-4 my-6 overflow-x-auto shadow-lg">
                    <pre><code class="language-javascript text-white">{{ section.code.content }}</code></pre>
                </div>
            </div>

            <blockquote class="border-l-4 border-red-500 pl-4 italic my-8 text-gray-700">
                "{{ post.content.quote.text }}" - {{ post.content.quote.author }}
            </blockquote>

            <div class="mt-12">
                <h3 class="text-2xl font-semibold text-red-600 mb-6 flex items-center gap-2">
                    <span>🔑</span> Key Takeaways
                </h3>
                <ol class="list-decimal list-inside space-y-4">
                    <li v-for="(takeaway, index) in post.content.takeaways" :key="index" class="text-gray-600">
                        <strong class="text-gray-800">{{ takeaway.title }}</strong> {{ takeaway.description }}
                    </li>
                </ol>
            </div>
        </div>

        <!-- Related Posts -->
        <div v-if="relatedPosts.length > 0">
            <h3 class="text-2xl font-bold mb-8">Related Articles</h3>
            <div class="grid md:grid-cols-2 gap-8">
                <article v-for="relatedPost in relatedPosts" :key="relatedPost.id"
                    class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div class="aspect-video bg-gray-200">
                        <div class="w-full h-full flex items-center justify-center text-gray-400">
                            [Image]
                        </div>
                    </div>
                    <div class="p-6">
                        <span class="text-sm text-red-500 font-semibold">
                            {{ t(`blog.categories.${relatedPost.category}`) }}
                        </span>
                        <h4 class="text-xl font-bold mt-2 mb-3">{{ relatedPost.title }}</h4>
                        <div class="flex justify-between items-center">
                            <span class="text-sm text-gray-500">
                                {{ new Date(relatedPost.date).toLocaleDateString() }}
                            </span>
                            <router-link :to="'/blog/' + relatedPost.slug"
                                class="text-red-500 font-semibold hover:text-red-600 transition-colors duration-200">
                                {{ t('blog.readMore') }} →
                            </router-link>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </article>
</template>

<style>
@import "tailwindcss";

.aspect-video {
    aspect-ratio: 16 / 9;
}

:deep(.prose) {
    @apply text-gray-600 leading-relaxed;
}

:deep(.prose h1) {
    @apply text-5xl font-black text-gray-900 mt-12 mb-8 tracking-tight;
    @apply bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent;
}

:deep(.prose h2) {
    @apply text-3xl font-bold text-gray-800 mt-10 mb-6 tracking-tight;
}

:deep(.prose h3) {
    @apply text-2xl font-semibold text-gray-800 mt-8 mb-4;
}

:deep(.prose p) {
    @apply mb-4 leading-relaxed;
}

:deep(.prose ul) {
    @apply list-disc list-inside mb-4 space-y-2;
}

:deep(.prose ol) {
    @apply list-decimal list-inside mb-4 space-y-2;
}

:deep(.prose li) {
    @apply mb-2;
}

:deep(.prose blockquote) {
    @apply border-l-4 border-red-500 pl-4 italic my-6 text-gray-700;
}

:deep(.prose pre) {
    @apply bg-gray-800 rounded-lg p-4 my-6 overflow-x-auto shadow-lg;
}

:deep(.prose code) {
    @apply bg-gray-100 rounded px-1.5 py-0.5 text-sm font-mono;
}

:deep(.prose pre code) {
    @apply bg-transparent p-0 text-white;
}

:deep(.prose strong) {
    @apply font-bold text-gray-800;
}

:deep(.hljs) {
    @apply bg-transparent;
}
</style>