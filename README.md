# Frontend Docs (LEIA) 

Linguagem: Javascript  
Framework: Vue 3 + Nuxt Last Version Stable <br>
Node: v20.7.0  
Npm: v10.1.0 

Bibliotecas usadas:

```bash
  # Pinia
  https://pinia.vuejs.org/

  # Pinia-Plugin-PersistedState
  https://github.com/prazdevs/pinia-plugin-persistedstate

  # Google-fonts
  https://nuxt.com/modules/google-fonts

  # FormKit
  https://formkit.com/

  # Icons
  https://nuxt.com/modules/icons

  # TailwindCSS
  https://nuxt.com/modules/tailwindcss
```

## Como rodar o projeto
Certifique-se de instalar as dependências:

Criar um arquivo .env:
```
  ENVIRONMENT=dev
  NUXT_PUBLIC_API_BASE=https://challenge.lidmo.com.br/api/
```

```bash
# npm
npm install

# yarn
yarn install
```

## Rodar o projeto

Inicie o servidor de desenvolvimento em `http://localhost:3000`:

```bash
# npm
npm run dev

# yarn
yarn dev
```

## Production

Crie o aplicativo para produção:

```bash
# npm
npm run build

# yarn
yarn build
```

Pré-visualizar localmente a versão de produção:

```bash
# npm
npm run preview

# yarn
yarn preview
```