Bienvenue dans le projet de création d'une application web de génération de blagues aléatoire. Ce projet comprend une **API** en Node.js et Express, une base de données SQLite et une interface front-end déployée via **GitHub Pages**.

### Description du projet

Ce projet consiste à créer une application web permettant de consulter, ajouter et afficher des blagues de manière aléatoire. Le backend est une API versionnée avec les fonctionnalités suivantes :

- Ajouter une blague à la base de données
- Consulter toutes les blagues
- Consulter une blague par son ID
- Consulter une blague aléatoire

La partie front-end présente une page d'accueil qui reflète l'identité de Carambar, avec un bouton permettant d'afficher une blague aléatoire à chaque clic.

### Technologies utilisées

- **Backend** :
  - Node.js
  - Express.js
  - Sequelize
  - SQLite

- **Frontend** :
  - Vite React, CSS
  - Déployé sur **GitHub Pages**

- **API** :
  - Versionnée avec [Swagger](https://swagger.io/)

- **Déploiement** :
  - Backend déployé sur [Render](https://render.com/)

### Fonctionnalités

#### API

L'API est accessible avec les endpoints suivants :

- `GET /blagues` : Récupérer toutes les blagues
- `GET /blagues/:id` : Récupérer une blague spécifique par son ID
- `POST /blagues` : Ajouter une nouvelle blague
- `GET /blagues/random` : Récupérer une blague aléatoire

#### Frontend

Le frontend consiste en une page d'accueil simple avec un bouton pour afficher une blague aléatoire à chaque clic.

### Installation et Lancement

1. Clonez les repos suivants :
    - Backend : [Lien vers le repo API](https://github.com/JasonVMdev/carambar-back)
    - Frontend : [Lien vers le repo Front](https://github.com/JasonVMdev/carambar-front)
  
2. **Backend** :
   - Installez les dépendances avec : `npm install`
   - Démarrez le serveur avec : `npm run dev`
   - L'API sera disponible sur [Render](https://carambar-back-5vpw.onrender.com).

3. **Frontend** :
   - Le front-end est déjà déployé sur [GitHub Pages](https://jasonvmdev.github.io/carambar-front/).
   - Pour voir le projet en action, cliquez sur le lien du front.

### Documentation API

La documentation complète de l'API est disponible sur [Swagger](https://swagger.io/) à l'adresse suivante :
- [Lien vers la documentation Swagger](https://carambar-back-5vpw.onrender.com/api-docs/)

### Blagues

Voici quelques blagues qui sont présentes dans l'application :

1. Quelle est la femelle du hamster ?
   - L’Amsterdam
2. Que dit un oignon quand il se cogne ?
   - Aïe
3. Quel est l'animal le plus heureux ?
   - Le hibou, parce que sa femme est chouette.
4. Pourquoi le football c'est rigolo ?
   - Parce que Thierry en rit
5. Quel est le sport le plus fruité ?
   - La boxe, parce que tu te prends des pêches dans la poire et tu tombes dans les pommes.

### Contribution

Si vous souhaitez contribuer à ce projet, veuillez forker le dépôt, apporter vos modifications et soumettre une pull request.
