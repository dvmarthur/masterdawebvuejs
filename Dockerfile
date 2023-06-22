# Use a imagem base Node.js
FROM node:14

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie os arquivos de package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie todos os arquivos do projeto para o diretório de trabalho
COPY . .

# Compile o projeto
RUN npm run build

# Expõe a porta em que o aplicativo Vue.js será executado (pode ser necessário ajustar isso com base na sua configuração)
EXPOSE 8080

# Comando para iniciar o servidor do aplicativo Vue.js
CMD [ "npm", "run", "serve" ]
