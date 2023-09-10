## Objetivo
Este projeto trabalha com um CRUD integrado com o Firebase do Google. Para a criação da interface, foi utilizado o  [https://tailwindcss.com/](https://tailwindcss.co)


## Iniciando o projeto

. Para rodar ele, se tem que:

- Clonar o projeto;
- Criar o projeto dentro da plataforma do Firebase;
- Criar e o arquivo .env.local e alimentá-lo com os dados abaixo: 


NEXT_PUBLIC_FIREBASE_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=xxxxxxxxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_FIREBASE_PROJECT_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=xxxxxxxxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_FIREBASE_APP_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxx

Cada uma das variaveis de ambiente corresponde ao que é gerado ao criar o projeto no Firebase, basta substituir os XXXX por seus dados iniciais


Importante rodar os comandos abaixo:
```bash
npm run dev
```

Abra em seu navegador, o endereço [http://localhost:3000](http://localhost:3000) e confira que o projeto está funcional.