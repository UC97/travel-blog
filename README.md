# 🌍 Travel Blog - End-to-End DevOps Project

## 📌 Overview

This project demonstrates a complete DevOps journey by building, containerizing, and deploying a full-stack travel blog application.

The goal is to understand how applications evolve from manual setups to production-ready distributed systems.

---

## 🏗️ Architecture

Frontend (React) → Backend (Node.js API) → Data (JSON file)

Deployed using:

* Docker (containerization)
* Docker Compose (multi-service orchestration)
* Kubernetes (k3s cluster)

---

## 🛠️ Tech Stack

### Application

* Frontend: React
* Backend: Node.js (Express)
* Storage: JSON file (data.json)

### DevOps Tools

* Git & GitHub (version control)
* Docker (containerization)
* Docker Compose (local orchestration)
* Kubernetes (k3s) (cluster orchestration)
* PM2 (process manager - initial phase)

---

## 🚀 Features

* View travel blog posts
* Add new blog posts via API
* Persistent storage (file-based)
* Multi-container setup using Docker
* Ready for Kubernetes deployment

---

## 📁 Project Structure

travel-blog/
├── backend/
│   ├── server.js
│   ├── routes/
│   ├── data.json
│   └── Dockerfile
├── frontend/
│   ├── src/
│   ├── public/
│   └── Dockerfile
├── docker-compose.yml
└── README.md

---

## ⚙️ Local Setup (Without Docker)

### Backend

cd backend
npm install
node server.js

### Frontend

cd frontend
npm install
npm start

Open: http://localhost:3000

---

## 🐳 Docker Setup

### Build and Run Backend

cd backend
docker build -t travel-backend .
docker run -p 5000:5000 travel-backend

### Build and Run Frontend

cd frontend
docker build -t travel-frontend .
docker run -p 3000:3000 travel-frontend

---

## 🔗 Docker Compose (Recommended)

Run full application:

docker-compose up --build

Access:

* Frontend: http://localhost:3000
* Backend API: http://localhost:5000/api/posts

---

## ☸️ Kubernetes Cluster Setup (k3s)

### Cluster Architecture

* Ubuntu Laptop → Master Node (k3s server)
* Raspberry Pi → Worker Node (k3s agent)
* Windows (WSL) → Control Plane (kubectl)

### Install k3s on Master

curl -sfL https://get.k3s.io | sh -

### Get Node Token

sudo cat /var/lib/rancher/k3s/server/node-token

### Join Worker Node

curl -sfL https://get.k3s.io | K3S_URL=https://<MASTER_IP>:6443 K3S_TOKEN=<TOKEN> sh -

### Verify Cluster

kubectl get nodes

---

## 🔄 DevOps Journey

### Phase 1: Manual Deployment

* Ran backend and frontend manually
* No persistence
* No automation

### Phase 2: Persistence & Process Management

* Added file-based storage (data.json)
* Introduced environment variables
* Used PM2 for process management

### Phase 3: Containerization

* Dockerized backend and frontend
* Created Docker images
* Ran containers independently

### Phase 4: Multi-Service Orchestration

* Introduced docker-compose
* Enabled inter-container networking
* Single command system startup

### Phase 5: Kubernetes (In Progress)

* Multi-node cluster using k3s
* Laptop (master) + Raspberry Pi (worker)

---

## 🧠 Key Learnings

* Difference between localhost in containers vs host machine
* Importance of environment isolation
* Container networking concepts
* Multi-service orchestration
* Infrastructure setup for distributed systems

---

## 📌 Next Steps

* Deploy application to Kubernetes
* Add Ingress for external access
* Implement CI/CD pipeline (GitLab)
* Add monitoring (Prometheus + Grafana)

---

## 👨‍💻 Author

Umesh Chandra

---

## ⭐ Notes

This project is built as a hands-on DevOps learning system and evolves step-by-step toward production-grade architecture.

