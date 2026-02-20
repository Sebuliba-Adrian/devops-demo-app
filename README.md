# DevOps Demo App

[![CI](https://github.com/Sebuliba-Adrian/devops-demo-app/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/Sebuliba-Adrian/devops-demo-app/actions/workflows/ci.yml)
[![CD](https://github.com/Sebuliba-Adrian/devops-demo-app/actions/workflows/cd.yml/badge.svg?branch=main)](https://github.com/Sebuliba-Adrian/devops-demo-app/actions/workflows/cd.yml)

A full-stack Node.js application deployed on AWS ECS Fargate, with CI/CD powered by GitHub Actions.

## Architecture

- **Runtime**: Node.js 20 (Alpine) on AWS ECS Fargate
- **Networking**: Custom VPC with public subnets, Internet Gateway, and Security Groups
- **Database**: Amazon RDS PostgreSQL
- **Container Orchestration**: Amazon ECS with Fargate launch type
- **CI/CD**: GitHub Actions (CI for linting/tests, CD for deployment)
- **Monitoring**: Amazon CloudWatch Logs

## Live Endpoints

- Health Check: `http://44.204.212.107:3000/api/health`
- App Info: `http://44.204.212.107:3000/api/info`

## AWS Infrastructure

| Resource | ID |
|---|---|
| VPC | vpc-0e297e713be2fb631 |
| ECS Cluster | devops-demo-cluster |
| ECS Service | devops-demo-service |
| RDS Instance | devops-demo-db |
| Region | us-east-1 |

## Getting Started

```bash
# Clone the repository
git clone https://github.com/Sebuliba-Adrian/devops-demo-app.git
cd devops-demo-app

# Install dependencies
npm install

# Run locally
node server.js
```

## CI/CD Pipeline

- **CI**: Runs on every push to main - lints code and runs tests
- **CD**: Deploys to AWS ECS Fargate after CI passes

## License

MIT
