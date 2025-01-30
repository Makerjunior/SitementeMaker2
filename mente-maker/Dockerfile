# Usa a imagem oficial do Node.js 20.18.0 como base
FROM node:20.18.0

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Garante que o npm esteja na versão correta
RUN npm install -g npm@11.1.0

# Copia os arquivos do projeto para dentro do container
COPY . .

# Instala as dependências do projeto
RUN npm install

# Compila a aplicação (caso necessário)
RUN npm run build

# Expõe a porta que a aplicação usará
EXPOSE 8087

# Define o comando para iniciar a aplicação
CMD ["npm", "start"]
