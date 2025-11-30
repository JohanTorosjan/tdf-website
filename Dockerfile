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