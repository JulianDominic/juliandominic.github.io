+++
date = '2026-05-23T00:09:25+08:00'
draft = false
title = 'Projects'
+++

### *io_uring HTTP Server*

*[GitHub](https://github.com/JulianDominic/io_uring-http-server) | Apr 2026 - May 2026*

- High-performance **HTTP/1.1 (subset) web server** in C++26 utilizing the Linux `io_uring` subsystem via `liburing` to process thousands of concurrent network connections **completely out of kernel space without blocking runtime operations**.
- Achieved a peak throughput performance of over **189,000 Requests Per Second (RPS)** on Intel i5 13600K and **107,000 RPS** on a Raspberry Pi5.

---

### *Homelab*

*Jun 2022 - Present*
 
- Provisioned and maintained a **multi-service server** environment hosting static websites, dynamic web applications,
media streaming services, and a secure VPN gateway.
- Streamlined deployment workflows by migrating all services to a **containerized Docker Compose environment,**
eliminating dependency conflicts and reducing configuration time.
- Built a **container-monitoring service** that detects failures and sends multi-platform alerts, improving server software
reliability and response time.

---

### *TARIFIC*

*[GitHub](github.com/isaacpua/CS203-G5T1-AY2025T1) | Aug 2025 - Nov 2025*

- Standardized local development workflows using Docker, ensuring **full environmental parity** between local, staging,
and production systems.
- Architected the **cloud-native AWS infrastructure** via Terraform, provisioning compute (ECS, ECR), networking
(VPC, Route53, ALB), and storage (S3) resources.
- Engineered a continuous deployment (CI/CD) pipeline using **GitHub Actions** to automatically sync frontend assets
to S3 and push containerized backend builds to ECR.
- Built **Model Context Protocol (MCP) servers** to enable AI agents to query live USITC tariff data and perform
predictive rate forecasting.

---

### *MTGPriceAggregator*

*[GitHub](https://github.com/JulianDominic/MTGPriceAggregator) | Dec 2023 - Oct 2025*

- Engineered a full-stack price aggregation platform using **Litestar** and **React**.
- Implemented a **concurrent scraping engine** with Beautiful Soup 4 that processes multiple vendor requests in
**parallel**, significantly reducing latency for real-time price comparisons.

---
