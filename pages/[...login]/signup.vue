<script setup>
const useLogin = useLoginStore()
const animationRegister = ref(false)

const registerNewAccount = reactive({
  name: '',
  email: '',
  password:'',
  password_confirmation:''
})

const isDisabled = ref(true);

const rules = reactive({
  name: [
    (val) => !!val || "Campo obrigatório",
    (val) =>
      /^[A-Za-z ]+$/.test(val.trim()) ||
      "Apenas letras e espaços são permitidos",
  ],
  email: [
    (val) => !!val || 'Campo obrigatório',
    (val) =>
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(val) ||
      'Endereço de e-mail inválido',
  ],
})

watch(
  () => registerNewAccount.name,
  (newName) => {
    if (newName && registerNewAccount.email) {
      const nameValidationResults = rules.name.map((rule) => rule(newName));
      const hasError = nameValidationResults.some((result) => typeof result === 'string');
      isDisabled.value = hasError
    } else {
      isDisabled.value = true
    }
  }
)

watch(
  () => registerNewAccount.email,
  (newEmail) => {
    if (registerNewAccount.name && newEmail) {
      const emailValidationResults = rules.email.map((rule) => rule(newEmail));
      const hasError = emailValidationResults.some((result) => typeof result === 'string');
      isDisabled.value = hasError;
    } else {
      isDisabled.value = true;
    }
  }
)

function register() {
  useLogin.doRegister(registerNewAccount)
}

onBeforeMount(() => {
  if (useLogin.token) {
    return navigateTo('/')
  }
})

</script>
<template>
  <div class="flex items-center justify-center h-screen">
    <h1 class="hidden md:block md:text-2xl lg:text-4xl md:px-5 lg:px-14">Faça login ou crie uma conta</h1>
    <div class="max-w-6xl :mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div class="flex md:h-[32rem]">
        <!-- Coluna 1 -->
        <div class="p-2 md:p-5 bg-blue-500">
        </div>
        
        <!-- Coluna 2 -->
        <div class="p-8 md:w-96 h-[30rem] md:flex justify-center items-center">
          <!-- Conteúdo da coluna 2 -->
          <div class="md:mt-10">
            <InputComponent
              v-model="registerNewAccount.name"
              type="text"
              label="Nome"
              validation="required|matches:/[a-zA-Z]+$/|length:3"
              validation-visibility="live"
              placeholder="Joao de Maria"
              icon="people"
            />
            <InputComponent
              v-model="registerNewAccount.email"
              type="email"
              label="Digite seu e-mail"
              validation="required|email"
              validation-visibility="live"
              placeholder="email@gerenciador.com"
              icon="email"
            />
            <InputComponent
              v-model="registerNewAccount.password"
              type="password"
              label="Senha"
              validation="required|password"
              validation-visibility="live"
              icon="password"
              placeholder="123"
            />
            <InputComponent
              v-model="registerNewAccount.password_confirmation"
              type="password"
              label="Confirmar senha"
              validation="required|password"
              validation-visibility="live"
              icon="password"
              placeholder="123"
            />

            <div class="md:grid md:grid-cols-1">
              <ButtonComponent
                :disabled="isDisabled"
                class="w-full"
                type="button"
                label="Criar conta"
                @click="register"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
  
</template>