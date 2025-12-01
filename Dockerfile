# Stage 1: Build
FROM node:18-alpine AS build
WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm ci --silent

# Copier le code source
COPY . .

# Build de production
RUN npm run build

# Stage 2: Production avec Nginx
FROM nginx:alpine AS production

# Copier la configuration Nginx personnalisée
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copier les fichiers buildés depuis le stage de build
COPY --from=build /app/build /usr/share/nginx/html

# Exposer les ports 80 et 443
EXPOSE 80
EXPOSE 443

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]

# Stage 3: Développement (optionnel)
FROM node:18-alpine AS development
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]