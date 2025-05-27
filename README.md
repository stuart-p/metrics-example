# Grafana Metrics Demo

A simple project demonstrating metrics capture and visualization using Prometheus and Grafana.

## Overview

This project shows how to:

- Collect system and application metrics using Prometheus
- Visualize these metrics with Grafana dashboards
- Deploy the stack using Docker containers

## Requirements

- Docker
- Docker Compose

## Getting Started

1. Clone this repository

```bash
git clone https://github.com/stuart-p/metrics-grafana.git
cd metrics-grafana
```

2. Start the services

```bash
docker-compose up -d
```

3. Access the tools:
   - Prometheus: http://localhost:9090
   - Grafana: http://localhost:3000 (default login: admin/admin)

## Key Components

- **Prometheus**: Metrics collection and storage
- **Grafana**: Data visualization and dashboards

## Project Structure

```
.
├── docker-compose.yml      # Docker compose configuration
├── api/
│   └── src/                # API configuration
│       └── metrics/        # Prometheus hooks for capturing api metrics
├── prometheus.yml          # Prometheus configuration
├── grafana/
│   ├── provisioning/       # Grafana provisioning files
│   │   ├── dashboards/     # Dashboard definitions
│   │   └── datasources/    # Datasource configuration
│   └── dashboards/
│       └── api-dashboard.json  # API metrics dashboard
└── README.md               # This documentation file
```

## Configuration

Key configuration files:

- `prometheus.yml`: Prometheus targets and scrape intervals
- `docker-compose.yml`: Service definitions and network setup
- `api-dashboard.json`: Provisioned Grafana dashboard

## License

This project is licensed under the MIT License.
