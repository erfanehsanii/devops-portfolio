export const portfolio = {
  name: "Erfan Ehsani",
  role: "Senior DevOps & Cloud Engineer",
  tagline: "I build reliable platforms that let engineering teams ship with confidence.",
  summary:
    "DevOps and cloud engineer with 11 years of experience across infrastructure operations, automation, Kubernetes, observability, and security. I turn complex infrastructure into dependable, measurable platforms.",
  location: "Open to remote and relocation opportunities",
  github: "https://github.com/erfanehsanii",
  // Add your actual LinkedIn profile URL before publishing.
  linkedin: "",
  email: "",
  // Add `resume.pdf` to `public/` and set this to `/resume.pdf` when ready.
  resumeUrl: "",
  focus: ["Platform engineering", "Cloud security", "Observability", "Developer enablement"],
  skills: [
    { category: "Cloud & Containers", items: ["AWS", "Kubernetes / RKE2", "Docker", "Helm", "HAProxy"] },
    { category: "Infrastructure as Code", items: ["Terraform", "Ansible", "Linux", "Networking", "Git"] },
    { category: "Observability", items: ["Prometheus", "Grafana", "Alertmanager", "Elastic Stack", "OpenTelemetry"] },
    { category: "Data & Streaming", items: ["Redis", "Kafka", "ClickHouse", "RabbitMQ", "MinIO"] },
  ],
  experience: [
    {
      period: "2015 — Present",
      title: "DevOps & Cloud Engineering",
      description:
        "Designed, operated, and automated production infrastructure across cloud and on-premises environments, with an emphasis on resilient delivery, security, and practical observability.",
      highlights: [
        "Built Kubernetes platforms with highly available control planes and workload-aware storage.",
        "Implemented monitoring, alerting, centralized logging, and repeatable infrastructure automation.",
        "Applied AWS networking, Secrets Manager, WAF, CloudFront, and OWASP-aligned security controls.",
      ],
    },
    {
      period: "Earlier career",
      title: "Operations, Database & Software Engineering",
      description:
        "Developed a strong systems foundation through operations management, Oracle database administration, software development, and network support.",
      highlights: [
        "Connects product, operations, and security concerns when making infrastructure decisions.",
        "Brings a hands-on troubleshooting mindset from the application layer to the network.",
      ],
    },
  ],
  projects: [
    {
      title: "Highly Available Kubernetes Platform",
      tag: "Kubernetes · RKE2 · Helm",
      description: "Designed an HA RKE2 cluster with dedicated workload placement, local persistent storage, and ingress-based access for platform services.",
      outcome: "A repeatable foundation for stateful platform workloads.",
    },
    {
      title: "Observability Platform",
      tag: "Prometheus · Grafana · Alertmanager",
      description: "Built a unified metrics and alerting stack covering Linux, Windows, Kubernetes, databases, and synthetic endpoint checks.",
      outcome: "Faster detection, actionable alerts, and clearer capacity visibility.",
    },
    {
      title: "Elastic Logging & Fleet",
      tag: "Elasticsearch · Kibana · Logstash",
      description: "Deployed an ECK-based logging platform with secured ingestion, Fleet-managed agents, lifecycle policies, and external snapshot planning.",
      outcome: "Searchable operational data with a scalable retention strategy.",
    },
    {
      title: "Resilient Redis Streams",
      tag: "Redis · Sentinel · TLS",
      description: "Created a TLS-enabled Redis Streams service with replication, Sentinels, HAProxy, ACLs, and durable storage conventions.",
      outcome: "A secure event-streaming tier designed for high availability.",
    },
    {
      title: "Windows Monitoring Automation",
      tag: "Ansible · WinRM · Prometheus",
      description: "Automated Windows Exporter rollout, health validation, and Prometheus target onboarding across Windows server fleets.",
      outcome: "Consistent telemetry without manual per-host setup.",
    },
    {
      title: "Kafka KRaft Lab",
      tag: "Kafka · Strimzi · Kubernetes",
      description: "Implemented a KRaft-based Kafka cluster using Strimzi node pools, topology-aware local volumes, and validated produce/consume workflows.",
      outcome: "A practical lab for streaming platform operations.",
    },
  ],
  certifications: [
    "Add your certifications here — for example: AWS, Kubernetes, HashiCorp Terraform, or Linux credentials.",
  ],
};
