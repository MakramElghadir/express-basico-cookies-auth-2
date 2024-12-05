# Usa una imagen base oficial de Node.js
FROM node:18

# Crea un directorio de trabajo
WORKDIR /usr/src/app

# Copia el archivo package.json
COPY package.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Expone el puerto en el que la aplicación se ejecutará
EXPOSE 3000

# Define el comando para ejecutar la aplicación
CMD ["node", "server.js"]

#docker build -t node-app .

#docker run -p 3000:3000 node-app