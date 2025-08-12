<template>
  <header class="bg-white shadow-sm fixed w-full z-10">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <!-- 个人网站信息 -->
      <div class="flex items-center space-x-2">
        <span class="w-8 h-8 icon-[streamline-freehand-color--work-from-home-user-pet-cat]" />
        <h1 class="text-xl font-bold text-gray-800">Ashley</h1>
      </div>

      <!-- 导航链接 - 桌面端 -->
      <nav class="hidden md:flex items-center space-x-8">
        <NuxtLink to="/" class="text-gray-600 hover:text-blue-600 transition-colors font-bold">首页</NuxtLink>
        <NuxtLink to="/about" class="text-gray-600 hover:text-blue-600 transition-colors font-bold">关于</NuxtLink>
        <NuxtLink to="/blog" class="text-gray-600 hover:text-blue-600 transition-colors font-bold">博客</NuxtLink>
        <NuxtLink to="/contact" class="text-gray-600 hover:text-blue-600 transition-colors">联系</NuxtLink>
        <span :class="themeIcon" @click="toggleTheme" />

      </nav>

      <!-- 社交图标 -->
      <div class="flex items-center space-x-4">
        <!-- <a href="https://github.com/yourusername" target="_blank" class="text-gray-600 hover:text-gray-900 transition-colors">
          <i-simple-icons-github class="w-5 h-5" />
        </a> -->
      </div>

      <!-- 移动端菜单按钮 -->
      <button class="md:hidden text-gray-600" @click="toggleMenu">
        <span class="w-6 h-6 icon-[ant-design--menu-fold-outlined]" />
      </button>
    </div>

    <!-- 移动端导航菜单 -->
    <div v-if="isMenuOpen" class="md:hidden border-t">
      <div class="container mx-auto px-4 py-2 flex flex-col space-y-3">
        <NuxtLink to="/" class="py-2 text-gray-600 hover:text-blue-600" @click="toggleMenu">首页</NuxtLink>
        <NuxtLink to="/about" class="py-2 text-gray-600 hover:text-blue-600" @click="toggleMenu">关于</NuxtLink>
        <NuxtLink to="/blog" class="py-2 text-gray-600 hover:text-blue-600" @click="toggleMenu">博客</NuxtLink>
        <NuxtLink to="/contact" class="py-2 text-gray-600 hover:text-blue-600" @click="toggleMenu">联系</NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const theme = ref('light');
const themeIcon = computed(() => {
  return theme.value === 'light' ? 'icon-[ant-design--sun-outlined]' : 'icon-[ant-design--moon-outlined]';
});

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light';
};


</script>

<style scoped>
/* 基础样式已通过Tailwind类实现，如需自定义可添加在此 */
@media (max-width: 768px) {
  .container {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
}
</style>