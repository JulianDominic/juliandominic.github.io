---
title: "Hello there, I'm Julian!"
# Optional: drop a square-ish photo at static/images/profile.jpg and uncomment.
# photo: /images/profile.jpg
---

I'm an undergraduate studying Computer Science at the **Singapore Management University (SMU)**, expecting to graduate by May 2028.

I have a growing passion for low-level systems programming and site reliability engineering. I run a humble homelab where I get to play sysadmin, and I enjoy repairing Nintendo consoles (GBA-SP & DS-Lite).

<!--
  Everything above the first "##" heading is the intro next to your photo.
  Every "##" heading below becomes its own section on the home page.
-->

## Experience

### GovTech

*Software Engineer Intern · Singpass Security Team · May 2026 – Aug 2026*

- Architected and deployed a **unified visibility platform**, serving as a single pane of glass for stakeholders to monitor security and risk metrics across critical Singpass systems.
- Automated collector log ingestion into **Datadog**, implementing health-monitoring dashboards and real-time alerting that **reduced mean time to detect (MTTD) system anomalies by 95%**.
- Engineered a custom **Model Context Protocol (MCP) client and server** to scrape and parse Confluence documentation, eliminating manual data entry and **cutting processing time by 80%**.

### Titular Roman Catholic Archdiocese of Singapore

*Software Engineer Intern · May 2025 – Aug 2025*

- Architected and implemented Singpass (Login and MyInfo) **across Mobile and Web**, ensuring a **secure and reliable system** from the ground up.
- Overcame **major security** and **legacy dependency challenges**, modernizing an existing codebase and delivering a seamless login and data verification experience.
- Oversaw the feature **end-to-end** from **development to deployment** on Google Cloud/Firebase, **now serving 300,000+ users**, reducing login errors and enabling stakeholders to provide more accurate pastoral services through verified user data.

## Projects

### io_uring HTTP Server

*[GitHub](https://github.com/JulianDominic/io_uring-http-server) · Apr 2026 – May 2026*

- High-performance **HTTP/1.1 (subset) web server** in C++26 using the Linux `io_uring` subsystem via `liburing` to process thousands of concurrent connections **without blocking runtime operations**.
- Peak throughput of over **189,000 requests/sec** on an Intel i5-13600K and **107,000 requests/sec** on a Raspberry Pi 5.

### Homelab

*Jun 2022 – Present*

- Provisioned and maintained a **multi-service server** hosting static websites, dynamic web applications, media streaming services, and a secure VPN gateway.
- Streamlined deployments by migrating all services to a **containerized Docker Compose environment**, eliminating dependency conflicts and reducing configuration time.
- Built a **container-monitoring service** that detects failures and sends multi-platform alerts, improving reliability and response time.

### TARIFIC

*[GitHub](https://github.com/isaacpua/CS203-G5T1-AY2025T1) · Aug 2025 – Nov 2025*

- Standardized local development with Docker, ensuring **full environment parity** between local, staging, and production.
- Architected the **cloud-native AWS infrastructure** with Terraform, provisioning compute (ECS, ECR), networking (VPC, Route53, ALB), and storage (S3).
- Built a CI/CD pipeline with **GitHub Actions** to sync frontend assets to S3 and push containerized backend builds to ECR.
- Built **Model Context Protocol (MCP) servers** so AI agents can query live USITC tariff data and perform predictive rate forecasting.

### MTGPriceAggregator

*[GitHub](https://github.com/JulianDominic/MTGPriceAggregator) · Dec 2023 – Oct 2025*

- Full-stack price aggregation platform using **Litestar** and **React**.
- **Concurrent scraping engine** with Beautiful Soup 4 that processes vendor requests **in parallel**, significantly reducing latency for real-time price comparisons.

## Awards

- **UBS-SMU-X IT Solution Architecture Award (AY25/26):** $5,000 industry award
- **Meet Millennium 2026 (Singapore):** 1st place, AmplifyME Trading Simulation
- **UBS Coding Challenge 2025 (Singapore):** 2nd of 35 teams in a 2-day competition
