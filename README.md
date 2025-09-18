# 🤖 Workflow multi-agents avec n8n

Ce projet présente une architecture **multi-agents** réalisée avec **n8n**, intégrant :  
- un **agent coordinateur** (GPT-5),  
- deux **agents exécutants** (GPT-4o) spécialisés (récupération de données, envoi de messages),  
- un **système de logs** dans Google Sheets,  
- des intégrations concrètes (météo, éphéméride, rayonnement solaire, Gmail, Discord).  

L’objectif est de démontrer une approche **agentique distribuée**, avec prompts dynamiques et supervision par logging.

---

## 🖼️ Aperçu du workflow

![Workflow multi-agents](https://github.com/Jerome-openclassroom/workflow_agents/blob/main/screenshots/workflow.png)

---

## ⚙️ Fonctionnalités principales
- **Agent coordinateur** : sélectionne quel exécutant activer, génère les prompts systèmes dynamiques et trace les décisions.  
- **Agent_executant_1 (Retrieve)** : récupère météo, éphéméride, rayonnement solaire (ville fixe : Marseille).  
- **Agent_executant_2 (Messagerie)** : envoie des messages via Gmail et Discord (JSON formaté).  
- **Google Sheets** : journalise toutes les étapes (raisonnement, délégation, exécution).  
- **Sorties vérifiées** : mail automatique, message Discord, données météo fiables.  

---

## ☀️ Calcul scientifique : Irradiation solaire moyenne

Le workflow ne se contente pas de récupérer des données brutes : il permet aussi d’en extraire des **indicateurs physiques**.

Exemple pour Marseille (18/09/2025) :  
- **Rayonnement solaire cumulé** : 19.38 MJ/m²  
- **Lever du soleil** : 07:21  
- **Coucher du soleil** : 19:43  
- **Durée d’ensoleillement** : ≈ 12.37 h  

Conversion :  
- 19.38 MJ/m² = 19,380,000 J/m²  
- Durée = 12.37 h = 44,532 s  

Irradiation moyenne :  
\[
\frac{19\,380\,000}{44\,532} \approx 435 \ \text{W/m}^2
\]

👉 Le système calcule donc une **irradiation solaire moyenne de 435 W/m²** sur la journée, ce qui enrichit l’analyse des données environnementales.

---

## 💾 Arborescence

```
workflow_agents/
├── README.md           # Documentation principale (Français)
├── README_En.md        # Documentation traduite en anglais
├── code/               # Scripts et workflows
│   ├── workflow_agents.json # Blueprint n8n pour le workflow multi-agents
│   └── parser.js            # Script JS pour parser la CoT et mapper les données dans Google Sheets
├── screenshots/        # Captures d’écran illustratives
│   ├── Log.png         # Exemple de log dans Google Sheets
│   ├── mail.png        # Exemple de mail généré par l’agent messagerie
│   └── workflow.png    # Vue d’ensemble du workflow n8n
```

---

## 📌 Exemple de fonctionnement

1. **Demande utilisateur** : « Donne-moi la météo et l’éphéméride avec le rayonnement. »  
2. **Agent coordinateur** délègue à **Agent_executant_1**, qui appelle les outils météo et retourne les données en JSON.  
3. Si l’utilisateur demande un envoi par mail, **Agent_executant_2** prépare et expédie le message via Gmail.  
4. Les décisions et résultats sont enregistrés dans **Google Sheets** (voir `screenshots/Log.png`).  

---

## 🛠️ Prérequis

- Compte [n8n.cloud](https://n8n.io) ou installation locale.  
- Accès à l’API OpenAI (GPT-4o, GPT-5).  
- Clés API pour :  
  - [WeatherAPI](https://www.weatherapi.com/)  
  - [Open-Meteo](https://open-meteo.com/)  
  - [Google Gmail API](https://developers.google.com/gmail/api)  
  - Webhook Discord.  

---

## 🚀 Installation

1. Cloner le dépôt :  
```bash
git clone https://github.com/Jerome-openclassroom/workflow_agents.git
```

2. Importer `code/workflow_agents.json` dans n8n.  
3. Ajouter vos credentials (OpenAI, Gmail, APIs météo, Discord).  
4. Lancer le workflow et interagir via le chat.  

---

## 📸 Captures

- **Log Google Sheets** : suivi détaillé des décisions agentiques.  
- **Mail généré** : contenu structuré et automatique.  
- **Workflow n8n** : vue d’ensemble des agents et connexions.  

---

## 📜 Licence

Projet sous licence MIT.  
