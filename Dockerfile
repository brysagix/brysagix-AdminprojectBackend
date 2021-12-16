#imagen base
FROM node
#crear directorio de trabajo
WORKDIR /use/src/app
#copie lo que se llame package...etc y copielo a la raiz de trabajo
COPY package*.json ./
#isntalar dependencias
RUN npm install
#Copie todo lo que tengo en el proyecto hacia el dir
COPY . ./
#Expongamos un puerto donde muestro la app
EXPOSE 4000
#Corramos la aplicación
CMD ["node", "src/index.js"]