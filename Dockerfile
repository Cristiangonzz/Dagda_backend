# Usa una imagen oficial de Node.js como base
FROM node:23.10

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json al contenedor
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Expone el puerto en el que corre NestJS
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "run", "start"]