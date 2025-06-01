---

# DevDiary – AI-Powered Developer Log & Productivity Assistant

## 📝 Short Description

DevDiary is a full-stack web application that allows developers to log their daily coding activities and receive personalized productivity tips or tool recommendations through AI. The tool streamlines self-assessment and helps developers reflect on and improve their daily workflows.

---

## 🧰 Tech Stack

### Frontend

* React.js
* Axios
* Tailwind CSS (optional)

### Backend

* Node.js
* Express.js
* MongoDB with Mongoose

### AI Integration

* OpenAI GPT-3.5 (for suggestions and productivity insights)

### Optional Visualization

* Recharts (for displaying log trends and productivity analytics)

---

## ⭐ Features

* Log daily development tasks via a simple UI
* Store and manage log history
* Receive AI-generated tips to improve workflow and tool usage
* Optional data visualization to track productivity trends
* Clean and responsive interface for better user experience

---

## 🚀 How to Run

### 1. Clone the Repository

git clone https://github.com/HussainRaza17/devdiary-ai



### Setup the Backend

## Install & run

Make sure you have nodejs `19.9.0` or higher and npm `9.6.3` or higher installed. Install dependencies with:

```bash
npm install
```

Once it's done start up a local server with:

```bash
npm run dev
```

To view the components storybook:

```bash
npm run dev:storybook
```

## Deployment

I've set up the site using Cloudflare for hosting. Deploy the site to Cloudflare Pages:

```bash
npm run deploy
```


Create a .env file inside the server folder:


OPENAI_API_KEY
MONGO_URI


Start the server:

bash
node index.js


### 3. Setup the Frontend

bash
cd ../client
npm install
npm start


---

## 🤖 AI Usage Explanation

DevDiary uses the OpenAI GPT-3.5 API to analyze user-provided development logs and generate practical, context-aware suggestions. These may include:

* Tools to consider based on tasks performed
* Workflow optimization tips
* Common best practices

*Example Prompt:*


You are a developer productivity assistant. Analyze the following daily log and return 2-3 personalized tips to help improve performance or recommend tools.

Log: "Refactored login component, reviewed 3 pull requests, studied MongoDB aggregation pipelines."


*Example Response:*

* Use Prettier with ESLint to maintain clean code during refactors.
* Schedule pull request reviews in blocks to reduce context switching.
* Explore MongoDB Compass for visual query optimization.

---

## 📄 License

This project is licensed under the Apache License 2.0.

---
