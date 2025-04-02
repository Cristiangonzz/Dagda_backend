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

# Ajusta permisos para que el usuario no root pueda escribir
RUN mkdir -p /app/dist && chmod -R 777 /app

# Expone el puerto en el que corre NestJS
EXPOSE 8080

# Comando para iniciar la aplicación
CMD ["npm", "run", "start"]