<script setup>
const animationRegister = ref(false)
const useLogin = useLoginStore()
const login = reactive({
  email: '',
  password: '',
})

const isDisabled = ref(true)
const rules = reactive({
  email: [
    (val) => !!val || 'Campo obrigatório',
    (val) =>
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(val) ||
      'Endereço de e-mail inválido',
  ],
})

watch([() => login.email, () => login.password], ([newEmail, newPassword]) => {
  if (newEmail && newPassword) {
    const emailValidationResults = rules.email.map((rule) => rule(newEmail));
    const hasError = emailValidationResults.some((result) => typeof result === 'string');

    if (hasError) {
      isDisabled.value = true
    } else {
      isDisabled.value = false
    }
  }
})

async function doMakeLogin() {
  await useLogin.doLogin(login)
}

function doMakeRedirectForRegister() {
  animationRegister.value = !animationRegister.value
  setTimeout(() => {
    navigateTo('/signup')
  }, 2000)
}

onBeforeMount(() => {
  useLogin.loadingLogin = true
  if (useLogin.token) {
    return navigateTo('/')
  }
})

onMounted(() => {
  useLogin.loadingLogin = false
})

</script>
<template>
  <LoadingComponent :display-loading="useLogin.loadingLogin" />
  <div class="flex items-center justify-center h-screen">
    <h1 class="hidden md:block md:text-2xl lg:text-4xl md:px-5 lg:px-14">Faça login ou crie uma conta</h1>
    <div class="max-w-6xl :mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div class="flex md:h-96" :class="{'animationRegister': animationRegister}">
        <div class="p-2 md:p-5 bg-blue-500"></div>
        <div class="p-8 md:w-96 h-45 md:flex justify-center items-center">
          <div class="md:mt-10">
            <InputComponent
              v-model="login.email"
              type="email"
              label="Digite seu e-mail"
              validation="required|email"
              validation-visibility="live"
              placeholder="email@lidmo.com"
              icon="email"
            />
            
            <InputComponent
              v-model="login.password"
              type="password"
              label="Senha"
              validation="required|password"
              validation-visibility="live"
              icon="password"
              placeholder="123"
            />

            <div class="md:grid md:grid-cols-1">
              <ButtonComponent
                :disabled="isDisabled"
                :class="isDisabled ? 'w-full' :'w-full'"
                type="button"
                label="Login"
                @click="doMakeLogin()"
              />
              <ButtonComponent
                class="w-full mt-3"
                type="button"
                label="Cadastro"
                @click="doMakeRedirectForRegister()"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
  
</template>

<style scoped>
  .animationRegister {
    animation: register 2s alternate
  }

  @keyframes register {
    0% {
      transform: translate(0);
    }
    100% {
      transform: translate(-50px);
    }
  }
</style>