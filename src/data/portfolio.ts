export const portfolio = {
  name: "Erfan Ehsani",
  role: "Senior DevOps / Site Reliability Engineer",
  tagline: "I build reliable platforms that let engineering teams ship with confidence.",
  summary:
    "Senior DevOps and Site Reliability Engineer with 5+ years of hands-on experience building Kubernetes platforms, cloud infrastructure, CI/CD pipelines, and observability systems. I combine AWS, Terraform, automation, and incident-focused operations to make complex platforms dependable and measurable.",
  location: "Tehran, Iran · Open to remote and relocation opportunities",
  github: "https://github.com/erfanehsanii",
  linkedin: "https://www.linkedin.com/in/erfan-ehsani/",
  email: "erfanehsani1992@gmail.com",
  phone: "+989125458845",
  resumeUrl: "erfan-sedighehsani-resume.pdf",
  focus: ["Kubernetes platforms", "Cloud security", "Observability", "Platform reliability"],
  skills: [
    { category: "Cloud & Containers", items: ["AWS", "EKS", "ECS", "RKE2", "Kubespray", "Docker", "Helm", "Rook-Ceph"] },
    { category: "Infrastructure as Code", items: ["Terraform", "Ansible", "Packer", "SaltStack", "Linux", "Bash", "Python"] },
    { category: "CI/CD & GitOps", items: ["GitHub Actions", "GitLab CI", "Jenkins", "FluxCD", "Git", "SonarQube"] },
    { category: "Observability", items: ["Prometheus", "Grafana", "Alertmanager", "Zabbix", "ELK / ECK", "CloudWatch"] },
    { category: "Networking & Security", items: ["HAProxy", "NGINX", "Keepalived", "Cilium", "AWS WAF", "DNS"] },
    { category: "Data & Messaging", items: ["Redis", "RabbitMQ", "PostgreSQL", "Oracle", "ClickHouse", "AWS RDS"] },
  ],
  experience: [
    {
      period: "Aug 2025 — Present",
      title: "DevOps Engineer · Informatics Services Corporation (ISC)",
      description:
        "Builds and operates production Kubernetes infrastructure for a nationwide Central Bank Digital Currency platform handling critical financial workloads.",
      highlights: [
        "Designed multi-datacenter RKE2 Kubernetes infrastructure across banking environments to remove single points of failure.",
        "Implemented Rook-Ceph storage for Kubernetes and blockchain workloads, plus HAProxy, Keepalived, and NGINX for fault-tolerant routing.",
        "Built high-throughput observability and logging with Prometheus, Grafana, Zabbix, and EFK.",
      ],
    },
    {
      period: "Mar 2024 — Aug 2025",
      title: "DevOps Engineer · youki GmbH (Remote contract)",
      description:
        "Managed AWS and Kubernetes infrastructure for a growing product platform, with an emphasis on reliable delivery, cloud cost efficiency, and security.",
      highlights: [
        "Reduced AWS monthly costs by about 47%, from €17K to €9K, while scaling from 3 to 8 applications.",
        "Maintained 99.9% uptime through EKS and on-premises reliability improvements and autoscaling.",
        "Improved delivery speed by 40% using GitHub Actions and FluxCD GitOps workflows.",
        "Implemented AWS WAF protections, CloudWatch logging, and Athena-based security analysis; also deployed blockchain and AI/ML workloads on AWS.",
      ],
    },
    {
      period: "Feb 2024 — Dec 2024",
      title: "Site Reliability Engineer · Digikala",
      description:
        "Supported reliability and incident response for a large-scale e-commerce platform while modernizing its observability and operational automation.",
      highlights: [
        "Migrated Prometheus and Grafana to Kubernetes with zero downtime while monitoring 10,000+ targets.",
        "Improved incident investigation and bottleneck detection speed by around 50% through stronger dashboards, alerts, and monitoring coverage.",
        "Automated Linux configuration and operational workflows with Ansible and SaltStack and developed custom Python and Bash exporters.",
      ],
    },
    {
      period: "Feb 2023 — Feb 2024",
      title: "DevOps Engineer · Dotis Arian Qeshm Co. (Dotin)",
      description:
        "Designed and operated Kubernetes application environments for banking and enterprise workloads.",
      highlights: [
        "Built production Kubernetes clusters with Kubespray, RBAC, deployment standards, and secure operational practices.",
        "Containerized applications and standardized releases with Jenkins CI/CD pipelines.",
        "Implemented Prometheus, Grafana, and ELK for application visibility and troubleshooting.",
      ],
    },
    {
      period: "Apr 2021 — Feb 2023",
      title: "DevOps Monitoring Specialist · Digikala",
      description:
        "Progressed from Monitoring Engineer to Monitoring Specialist while supporting 24/7 production operations and on-call response.",
      highlights: [
        "Re-architected the observability stack with Prometheus, Grafana, ELK, Docker Compose, Ansible, and SaltStack.",
        "Improved alert quality with tuned Alertmanager and Slack notifications, and led post-incident analysis and RCA reporting.",
        "Built engineering and business dashboards for critical website, application, and infrastructure metrics.",
      ],
    },
  ],
  projects: [
    {
      title: "Financial-Grade Multi-Datacenter Kubernetes",
      tag: "RKE2 · Rook-Ceph · HAProxy",
      description: "Designed resilient RKE2 infrastructure for Central Bank Digital Currency workloads, combining multi-datacenter topology, persistent storage, and highly available traffic layers.",
      outcome: "A platform built to remove single points of failure for critical financial services.",
    },
    {
      title: "AWS Platform Cost & Delivery Optimization",
      tag: "AWS · Terraform · EKS · FluxCD",
      description: "Managed AWS infrastructure and Kubernetes workloads with Terraform, GitHub Actions, and GitOps, while improving security and scaling delivery workflows.",
      outcome: "47% lower AWS cost and 40% faster delivery while the platform grew from 3 to 8 applications.",
    },
    {
      title: "Observability at E-Commerce Scale",
      tag: "Prometheus · Grafana · Kubernetes",
      description: "Migrated Prometheus and Grafana to Kubernetes with no downtime, expanded dashboards and alerts, and automated telemetry for a major e-commerce platform.",
      outcome: "Reliable monitoring for 10,000+ targets and approximately 50% faster incident investigation.",
    },
    {
      title: "AWS WAF Security Hardening",
      tag: "AWS WAF · CloudWatch · Athena",
      description: "Designed WAF protections with custom rule groups and OWASP Top 10 coverage for internet-facing services, then tuned controls to minimize false positives.",
      outcome: "Stronger application-layer protection against common threats including SQL injection and XSS.",
    },
    {
      title: "Node.js Application Delivery",
      tag: "Docker Compose · NGINX · GitHub Actions",
      description: "Deployed a Dockerized Node.js application behind an NGINX reverse proxy and built a GitHub Actions build-and-release workflow.",
      outcome: "A repeatable, automated route from source code to production deployment.",
    },
  ],
  certifications: ["Certification details available on request."],
};
