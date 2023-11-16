<script setup>
definePageMeta({
  layout: 'dashboard',
})
const useLogin = useLoginStore()

onBeforeMount(() => {
  if (!useLogin.token) {
    return navigateTo('/login')
  }
})

</script>
<template>
  <div>
    <NuxtLayout/>
  </div>
</template>