<script setup>
const useLogin = useLoginStore()
const logged = ref(false)

if (useLogin.token) {
    logged.value = true
}

function doMakeLogoff () {
    useLogin.clearLogin()

    if (!useLogin.token) {
        return navigateTo('/login')
    }
}

</script>
<template>
  <nav class="bg-gray-40 p-4 border-b-2 border-gray-100">
      <div class="container mx-auto">
          <div class="flex justify-between items-center">
              <div class="text-black font-semibold text-2xl">Lidmo</div>
              <ul class="flex space-x-4" v-if="!logged">
                  <li><NuxtLink to="/login" class="text-black hover:text-blue-300 font-semibold">Login</NuxtLink></li>
              </ul>
              <ul v-else class="flex space-x-5">
                <li class="font-bold"> 
                    Bem vindo
                </li>
                <li 
                    class="flex justify-end cursor-pointer font-semibold"
                    @click="doMakeLogoff()"
                >
                    Sair
                </li>
                
              </ul>
              
          </div>
      </div>
    </nav>
</template>