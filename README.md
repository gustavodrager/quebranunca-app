# quebranunca-app

Aplicativo mobile oficial da plataforma **QuebraNunca** – Jogue, agende e valide partidas de futevôlei na palma da sua mão.

## 🧱 Stack

- **Framework**: React Native
- **Linguagem**: TypeScript
- **Navegação**: React Navigation
- **Gerenciamento de Estado**: Context API / Zustand (ajustar conforme uso)
- **Estilização**: Tailwind via NativeWind
- **API**: Integração com `quebranunca-api`

## 📱 Funcionalidades

- Cadastro e login de jogadores
- Lista e criação de grupos
- Agenda e submissão de partidas
- Validação colaborativa dos resultados
- Consulta de rankings

## 📁 Estrutura do Projeto

```
/src
  /assets
  /components
  /contexts
  /hooks
  /navigation
  /screens
  /services
  /styles
  App.tsx
```

## 🧪 Como rodar localmente

### Pré-requisitos

- Node.js 18+
- Yarn ou npm
- Expo CLI ou React Native CLI
- Android Studio ou Xcode (para emuladores)

### Instalação

```bash
yarn install
```

### Executar com Expo

```bash
npx expo start
```

### Executar com React Native CLI

```bash
npx react-native run-android
# ou
npx react-native run-ios
```

## ⚙️ Variáveis de Ambiente

Crie um `.env` baseado no [`.env.example`](./.env.example):

```env
API_URL=https://api.quebranunca.com
```

Use `react-native-dotenv` ou `expo-constants` para acessar variáveis no código.

## 📦 Build e Publicação

Utilize o Expo ou EAS (Expo Application Services) para build e distribuição.

```bash
eas build --platform android
eas build --platform ios
```

## 🧠 Design

Estilo visual compatível com a identidade da web. Componentes reutilizáveis planejados via NativeWind.

## 🛠 Contribuindo

Contribuições são bem-vindas! Confira [`CONTRIBUTING.md`](./CONTRIBUTING.md) para mais informações.
