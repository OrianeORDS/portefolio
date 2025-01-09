# 🌐 Portfolio Web Application

## ✨ Description

Ce projet est un portfolio interactif, construit avec **Next.js** (un framework basé sur React) et **Tailwind CSS**, pour présenter mes projets, compétences et expériences dans un format moderne et responsive.

## 🛠️ Technologies utilisées

- **Next.js** : Framework React pour le rendu côté serveur et la génération statique.
- **Tailwind CSS** : Framework CSS utilitaire pour un design rapide et personnalisable.
- **SendGrid** : Envoi d'emails via API
- **Node.js** : Environnement pour exécuter le projet et gérer les dépendances.

## 🎨 Maquette Figma
Vous pouvez consulter la maquette de ce projet sur [Figma](https://www.figma.com/design/pIf33bgQVmbeFaaHlsfN9b/ORDS-WEB-DEV?node-id=0-1&p=f&m=dev).

## 🚀 Installation

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/OrianeORDS/portefolio
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```

3. Créez un fichier .env.local à la racine du projet
   ```bash
   touch .env.local
   ```

4. Créez un compte SendGrid, puis configurez les variables d'environnement ci-dessous. 
 Important : Assurez-vous que l'adresse dans RECIPIENT_EMAIL est validée dans SendGrid.
   ```bash
   echo "SENDGRID_API_KEY=VotreCléAPI" >> .env.local
   echo "RECIPIENT_EMAIL=AdresseDestinataire@example.com"  >> .env.local
   ```

5. Lancez le serveur de développement :
   ```bash
   npm run dev
   ```

6. Ouvrez dans votre navigateur :
   ```
   http://localhost:3000
   ```

## 📂 Structure du projet

```
ORDS PORTFOLIO
├── app                     # Dossier des routes et pages (App Router)
│   ├── api                 # Routes API pour le backend
│   │   ├── sendEmail       # Dossier pour la route API d'envoi d'emails
│   │   │   ├── route.js    # Fichier pour gérer la logique de l'API
│   ├── globals.css         # Styles globaux pour l'application
│   ├── favicon.png         # Icône de l'application
│   ├── layout.js           # Mise en page commune (Layout)
│   ├── page.js             # Page d'accueil
├── components              # Composants réutilisables
├── public                  # Fichiers publics (images,   pdf etc.)
├── scripts                 # Scripts utilitaires
├── node_modules            # Modules Node.js installés
├── .env.local              # Fichier de configuration des variables d'environnement
├── .gitignore              # Fichiers à exclure du dépôt Git
├── eslint.config.mjs       # Configuration ESLint
├── next.config.mjs         # Configuration Next.js
├── package.json            # Gestion des dépendances
├── package-lock.json       # Verrouillage des dépendances
├── postcss.config.mjs      # Configuration PostCSS
├── tailwind.config.mjs     # Configuration de Tailwind CSS
├── README.md               # Documentation du projet

```

## 👩‍💻 Auteur

Créé par Oriane Royon Da Silva. 

