# NutriScan

Application mobile fictive inspirée de YUKA, construite avec React Native et Expo.
Permet de simuler le scan d'un code-barres alimentaire, d'obtenir une note de santé sur 100,
de consulter la fiche détaillée d'un produit, l'historique des scans et un tableau de santé.

## Structure du projet

```
nutriscan-app/
├── App.js                        # Point d'entrée, monte la navigation
├── src/
│   ├── theme/colors.js           # Palette de couleurs et helper de notation
│   ├── data/products.js          # Données fictives (produits, historique, stats)
│   ├── components/               # Composants réutilisables
│   │   ├── ScoreBadge.js
│   │   ├── ProductCard.js
│   │   ├── ProductDetailedCard.js
│   │   ├── StatCard.js
│   │   ├── ScanFrame.js
│   │   ├── ConsumptionChart.js
│   │   └── InsightCard.js
│   ├── screens/                  # Les 4 écrans principaux
│   │   ├── ScanScreen.js
│   │   ├── ProductDetailScreen.js
│   │   ├── HistoryScreen.js
│   │   ├── DashboardScreen.js
│   │   └── auth/                 # Connexion / Inscription
│   │       ├── LoginScreen.js
│   │       └── SignUpScreen.js
│   ├── lib/supabase.js           # Client Supabase (session persistée via AsyncStorage)
│   ├── context/AuthContext.js    # Contexte d'authentification (session, signIn/signUp/signOut)
│   └── navigation/
│       ├── AppNavigator.js       # Racine : bascule Auth ↔ App selon la session
│       ├── AuthNavigator.js      # Pile Connexion/Inscription
│       └── MainTabNavigator.js   # Navigation par onglets + piles internes
```

## Lancer le projet

```bash
cd nutriscan-app
npm install
npm run web
```

Cela ouvre l'application dans votre navigateur (Expo web) sur `http://localhost:8081` (ou un port similaire indiqué dans le terminal).

Vous pouvez aussi lancer :
- `npm start` puis appuyer sur `w` pour ouvrir le web, `a` pour Android, `i` pour iOS (macOS requis).

## Authentification Supabase

1. Créez un projet sur [supabase.com](https://supabase.com) et activez l'authentification par email/mot de passe.
2. Copiez `.env.example` en `.env` et renseignez :
   ```
   EXPO_PUBLIC_SUPABASE_URL=https://votre-projet.supabase.co
   EXPO_PUBLIC_SUPABASE_ANON_KEY=votre-anon-key
   ```
3. Le préfixe `EXPO_PUBLIC_` est nécessaire pour qu'Expo expose ces valeurs côté client — c'est prévu pour l'anon key (la sécurité des données repose sur les policies RLS de Supabase, pas sur le secret de cette clé).
4. Tant qu'aucune session n'est active, l'application affiche l'écran de connexion/inscription. Une fois connecté, les 4 écrans (Scan, Historique, Santé) deviennent accessibles, et un bouton "Déconnexion" est disponible sur le Tableau de santé.

## Notes

- Toutes les données produits (scores, historique) restent fictives et statiques, définies dans `src/data/products.js`.
- Le bouton "Scanner un produit" simule un scan aléatoire parmi 8 produits fictifs avec une courte animation.
