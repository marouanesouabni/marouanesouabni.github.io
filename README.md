# Marouane Souabni — MERN Portfolio

Portfolio full-stack avec un frontend React/Vite, une API Node.js/Express, MongoDB pour les messages de contact, envoi d'e-mails SMTP et dashboard privé.

## Architecture

```text
React + Vite (GitHub Pages)  →  Express API (Render/Railway)  →  MongoDB Atlas
                                    └─ SMTP → sbnmarouan@gmail.com
```

GitHub Pages peut héberger le frontend, mais pas Express, MongoDB ou l'envoi d'e-mails. L'API doit être déployée sur un hébergeur Node comme Render ou Railway, et MongoDB sur Atlas.

## Démarrage local

1. Installe les dépendances avec `pnpm install`.
2. Copie `.env.example` en `.env` et renseigne les valeurs. Ne commite jamais `.env`.
3. Crée le hash du mot de passe admin :

   ```bash
   pnpm hash-password "un-mot-de-passe-long-et-unique"
   ```

   Copie le résultat dans `ADMIN_PASSWORD_HASH`.

4. Lance le frontend et l'API :

   ```bash
   pnpm dev:full
   ```

Le portfolio est disponible sur `http://localhost:5173`, l'API sur `http://localhost:5000` et le dashboard privé sur `http://localhost:5173/admin`.

## Variables requises en production

| Variable | Rôle |
| --- | --- |
| `MONGODB_URI` | URL de connexion MongoDB Atlas |
| `JWT_SECRET` | Long secret aléatoire pour signer les sessions admin |
| `ADMIN_EMAIL` | Ton adresse de connexion admin |
| `ADMIN_PASSWORD_HASH` | Hash bcrypt du mot de passe admin |
| `CLIENT_URL` | URL publique du frontend GitHub Pages |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` | Identifiants SMTP du fournisseur e-mail |
| `SMTP_FROM`, `CONTACT_TO_EMAIL` | Expéditeur et destinataire des demandes |

Pour Gmail, utilise un mot de passe d'application ; pour Brevo ou Resend, utilise leurs identifiants SMTP. Les secrets restent exclusivement dans les variables d'environnement de l'hébergeur.

## Déploiement

### API

Déploie ce dépôt sur Render/Railway avec :

```text
Build command: pnpm install
Start command: pnpm start
```

Ajoute toutes les variables ci-dessus et définis `CLIENT_URL` sur l'URL exacte du portfolio.

### Frontend GitHub Pages

Au moment du build, définis `VITE_API_URL` sur l'URL de l'API suivie de `/api`, par exemple :

```text
VITE_API_URL=https://portfolio-api.example.com/api
```

Puis construis et publie le site :

```bash
pnpm build
pnpm deploy
```

Dans GitHub, choisis `gh-pages` puis `/(root)` dans **Settings → Pages**. La branche `main` garde tout le code source (React + API) ; la branche `gh-pages` ne contient que le build statique.

## Sécurité du dashboard

Le dashboard est absent de la navigation publique, mais sa sécurité ne dépend pas de son URL : chaque route d'administration de l'API exige un JWT valide et l'adresse administrateur configurée. Les sessions durent huit heures et sont stockées seulement pour l'onglet de navigateur actuel.
