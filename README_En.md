# 🤖 Multi-agent Workflow with n8n

This project demonstrates a **multi-agent architecture** built with **n8n**, including:  
- a **coordinator agent** (GPT-5),  
- two **executor agents** (GPT-4o) specialized in data retrieval and messaging,  
- a **logging system** in Google Sheets,  
- real integrations (weather, ephemeris, solar radiation, Gmail, Discord).  

The goal is to showcase a **distributed agentic approach**, with dynamic prompts and supervised logging.

---

## 🖼️ Workflow Overview

![Multi-agent workflow](https://github.com/Jerome-openclassroom/workflow_agents/blob/main/screenshots/workflow.png)

---

## ⚙️ Main Features
- **Coordinator agent**: selects the executor, generates dynamic system prompts, and logs decisions.  
- **Agent_executant_1 (Retrieve)**: fetches weather, ephemeris, solar radiation (fixed city: Marseille).  
- **Agent_executant_2 (Messaging)**: sends messages via Gmail and Discord (JSON formatted).  
- **Google Sheets**: logs all steps (reasoning, delegation, execution).  
- **Verified outputs**: automatic email, Discord message, reliable weather data.  

---

## ☀️ Scientific Calculation: Average Solar Irradiance

The workflow goes beyond retrieving raw data: it also derives **physical indicators**.

Example for Marseille (09/18/2025):  
- **Daily solar radiation sum**: 19.38 MJ/m²  
- **Sunrise**: 07:21  
- **Sunset**: 19:43  
- **Day length**: ≈ 12.37 h  

Conversion:  
- 19.38 MJ/m² = 19,380,000 J/m²  
- Duration = 12.37 h = 44,532 s  

Average irradiance:  
\[
\frac{19,380,000}{44,532} \approx 435 \ \text{W/m}^2
\]

👉 The system thus computes an **average solar irradiance of 435 W/m²** for the day, adding scientific depth to the environmental analysis.


---
## 💾 Structure

```
workflow_agents/
├── README.md           # Main documentation (French)
├── README_En.md        # English translated documentation
├── code/               # Scripts and workflows
│   ├── workflow_agents.json # n8n blueprint for the multi-agent workflow
│   └── parser.js            # JS script to parse CoT and map data into Google Sheets
├── screenshots/        # Illustrative screenshots
│   ├── Log.png         # Example of Google Sheets logging
│   ├── mail.png        # Example of generated email
│   └── workflow.png    # n8n workflow overview
```

---

## 📌 Example Flow

1. **User request**: “Give me the weather and ephemeris with radiation.”  
2. **Coordinator agent** delegates to **Agent_executant_1**, which calls APIs and returns JSON data.  
3. If the user requests an email, **Agent_executant_2** formats and sends it via Gmail.  
4. All decisions and outputs are logged in **Google Sheets** (`screenshots/Log.png`).  

---

## 🛠️ Requirements

- [n8n.cloud](https://n8n.io) account or local installation.  
- Access to OpenAI API (GPT-4o, GPT-5).  
- API keys for:  
  - [WeatherAPI](https://www.weatherapi.com/)  
  - [Open-Meteo](https://open-meteo.com/)  
  - [Google Gmail API](https://developers.google.com/gmail/api)  
  - Discord webhook.  

---

## 🚀 Installation

1. Clone the repository:  
```bash
git clone https://github.com/Jerome-openclassroom/workflow_agents.git
```

2. Import `code/workflow_agents.json` into n8n.  
3. Add your credentials (OpenAI, Gmail, Weather APIs, Discord).  
4. Run the workflow and interact via chat.  

---

## 📸 Screenshots

- **Google Sheets log**: detailed agentic reasoning.  
- **Generated email**: structured and automatic.  
- **n8n workflow**: overview of agents and connections.  

---

## 📜 License

MIT License.  
