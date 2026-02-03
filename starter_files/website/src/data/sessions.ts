export interface Session {
  id: string;
  title: string;
  speaker: string;
  category: 'Keynote' | 'Breakout' | 'Learning Lab' | 'Customer Story';
  day: 'Day 1' | 'Day 2' | 'Day 3';
  time: string;
  location: string;
  description: string;
  details?: {
    fullDescription: string;
    takeaways: string[];
    tracks: string[];
    level?: string;
    speakerBio?: string;
  };
}

export const SESSIONS: Session[] = [
  {
    id: 's1',
    title: 'The Future of AI is Here',
    speaker: 'Dr. Elena Rostova',
    category: 'Keynote',
    day: 'Day 1',
    time: '09:00 AM - 10:30 AM',
    location: 'Main Hall A',
    description: 'Join our CEO for the opening keynote as we explore the groundbreaking advancements in AI technology and what lies ahead for the industry.',
    details: {
      fullDescription: 'Join our CEO for the opening keynote as we explore the groundbreaking advancements in AI technology and what lies ahead for the industry. This session will cover the trajectory of generative AI, the rise of autonomous agents, and how these technologies are reshaping the global economy. Dr. Rostova will share her vision for the next decade of innovation at TechStack.',
      takeaways: ['AI industry roadmap', 'Generative AI trends', 'Autonomous agents strategy'],
      tracks: ['AI/ML', 'Strategy'],
      level: 'Beginner',
      speakerBio: 'Dr. Elena Rostova is the CEO of TechStack and a pioneer in the field of neural networks.'
    }
  },
  {
    id: 's2',
    title: 'End-to-End MLOps with Kubernetes',
    speaker: 'Marcus Chen',
    category: 'Learning Lab',
    day: 'Day 1',
    time: '09:00 AM - 11:00 AM',
    location: 'Lab C',
    description: 'Learn the entire MLOps lifecycle. From data ingestion to model training, containerization, and deployment to a Kubernetes cluster.',
    details: {
      fullDescription: 'Learn the entire MLOps lifecycle. From data ingestion to model training, containerization, and deployment to a Kubernetes cluster. This hands-on workshop will use Kubeflow and Argo Workflows to demonstrate how to build reproducible and scalable machine learning pipelines.',
      takeaways: ['Kubernetes deployment', 'Pipeline automation', 'Model versioning'],
      tracks: ['Cloud Native', 'AI/ML'],
      level: 'Intermediate',
      speakerBio: 'Marcus Chen is a Principal Engineer specializing in cloud infrastructure and machine learning.'
    }
  },
  {
    id: 's3',
    title: 'Micro-Frontends at Scale',
    speaker: 'Priya Patel',
    category: 'Breakout',
    day: 'Day 1',
    time: '11:00 AM - 12:00 PM',
    location: 'Room 101',
    description: 'Learn how to brand distributed niches effectively.',
    details: {
      fullDescription: 'Learn how to brand distributed niches effectively. We will dive into module federation, orchestration patterns, and how to maintain a cohesive user experience across multiple independent frontend teams.',
      takeaways: ['Module Federation', 'Frontend Architecture', 'Team Autonomy'],
      tracks: ['Web', 'Architecture'],
      level: 'Advanced',
      speakerBio: 'Priya Patel is a Senior Architect at a leading e-commerce firm.'
    }
  },
  {
    id: 's4',
    title: 'Real-Time Event Streaming with Kafka',
    speaker: 'Sarah Johnson',
    category: 'Breakout',
    day: 'Day 1',
    time: '11:00 AM - 12:00 PM',
    location: 'Room 201',
    description: 'Real-world case study on unleashing real-time initiatives.',
    details: {
      fullDescription: 'Real-world case study on unleashing real-time initiatives. Sarah will walk through how her team built a high-throughput event processing system handling millions of events per second with Apache Kafka and Flink.',
      takeaways: ['Kafka optimization', 'Stream processing', 'Fault tolerance'],
      tracks: ['Data Engineering', 'Backend'],
      level: 'Intermediate',
      speakerBio: 'Sarah Johnson is a Data Engineer focused on distributed systems.'
    }
  },
  {
    id: 's5',
    title: 'Graph Neural Networks in Practice',
    speaker: 'Isabella Martinez',
    category: 'Learning Lab',
    day: 'Day 1',
    time: '11:00 AM - 01:00 PM',
    location: 'Lab A',
    description: 'Workshop: Generating extensible relationships.',
    details: {
      fullDescription: 'Workshop: Generating extensible relationships. Discover how to apply GNNs to social networks, recommendation systems, and molecular biology. We will build a recommendation engine using PyTorch Geometric.',
      takeaways: ['Graph Theory', 'PyTorch Geometric', 'Recommendation Engines'],
      tracks: ['AI/ML', 'Data Science'],
      level: 'Advanced',
      speakerBio: 'Isabella Martinez is a Research Scientist and GNN expert.'
    }
  },
  {
    id: 's6',
    title: 'Optimizing React Performance',
    speaker: 'David Kim',
    category: 'Breakout',
    day: 'Day 1',
    time: '01:00 PM - 02:00 PM',
    location: 'Room 102',
    description: 'Strategies for streamlining customized eyeballs.',
    details: {
      fullDescription: 'Strategies for streamlining customized eyeballs. Learn advanced techniques like React Server Components, hydration optimization, and profiling to make your web apps lightning fast.',
      takeaways: ['React Server Components', 'Web Vitals', 'Memoization'],
      tracks: ['Web', 'Frontend'],
      level: 'Intermediate',
      speakerBio: 'David Kim is a Frontend Lead and regular contributor to React core.'
    }
  },
  {
    id: 's7',
    title: 'Building Scalable Community Platforms',
    speaker: 'James Wilson',
    category: 'Breakout',
    day: 'Day 1',
    time: '01:00 PM - 02:00 PM',
    location: 'Room 202',
    description: 'How we e-enabled dynamic communities.',
    details: {
      fullDescription: 'How we e-enabled dynamic communities. This talk focuses on the infrastructure required to support millions of concurrent users in real-time chat and collaborative environments.',
      takeaways: ['WebSockets', 'Horizontal Scaling', 'Redis Pub/Sub'],
      tracks: ['Backend', 'Architecture'],
      level: 'Intermediate',
      speakerBio: 'James Wilson is the CTO of a popular social platform.'
    }
  },
  {
    id: 's8',
    title: 'High-Throughput Data Pipelines',
    speaker: 'Robert Garcia',
    category: 'Learning Lab',
    day: 'Day 1',
    time: '02:00 PM - 04:00 PM',
    location: 'Lab B',
    description: 'Hands-on: Transitioning efficient channels.',
    details: {
      fullDescription: 'Hands-on: Transitioning efficient channels. Build a scalable ETL pipeline using Apache Airflow and dbt. Learn how to monitor data quality and handle schema evolution.',
      takeaways: ['Apache Airflow', 'dbt', 'ETL Patterns'],
      tracks: ['Data Engineering'],
      level: 'Intermediate',
      speakerBio: 'Robert Garcia is a Senior Data Architect.'
    }
  },
  {
    id: 's9',
    title: 'Open Source Stewardship Strategy',
    speaker: 'Thomas Lee',
    category: 'Breakout',
    day: 'Day 1',
    time: '02:30 PM - 03:30 PM',
    location: 'Room 103',
    description: 'Implementing strategic communities for growth.',
    details: {
      fullDescription: 'Implementing strategic communities for growth. Learn how to build a sustainable open source project, manage maintainer burnout, and foster an inclusive contributor community.',
      takeaways: ['Community Management', 'Governance Models', 'Sustainability'],
      tracks: ['Open Source', 'Leadership'],
      level: 'Beginner',
      speakerBio: 'Thomas Lee is a Director of Open Source Strategy.'
    }
  },
  {
    id: 's10',
    title: 'Securing Modern Web APIs',
    speaker: 'Michael Brown',
    category: 'Breakout',
    day: 'Day 1',
    time: '02:30 PM - 03:30 PM',
    location: 'Room 203',
    description: 'Targeting holistic web services effectively.',
    details: {
      fullDescription: 'Targeting holistic web services effectively. A deep dive into OAuth 2.1, OIDC, and JWT best practices. Learn how to protect your APIs against common OWASP vulnerabilities.',
      takeaways: ['OAuth 2.1', 'OIDC', 'API Security'],
      tracks: ['Security', 'Backend'],
      level: 'Intermediate',
      speakerBio: 'Michael Brown is a Security Consultant and researcher.'
    }
  },
  {
    id: 's11',
    title: 'Next-Gen WebAssembly (Wasm)',
    speaker: 'Lisa Wang',
    category: 'Learning Lab',
    day: 'Day 1',
    time: '04:00 PM - 06:00 PM',
    location: 'Lab A',
    description: 'E-Enabling next-generation web services.',
    details: {
      fullDescription: 'E-Enabling next-generation web services. Explore the potential of Wasm beyond the browser. We will build a serverless function in Rust and deploy it to a Wasm runtime.',
      takeaways: ['Wasm Component Model', 'Rust', 'Edge Computing'],
      tracks: ['Web', 'Cloud Native'],
      level: 'Advanced',
      speakerBio: 'Lisa Wang is a Software Engineer at a cloud infrastructure provider.'
    }
  },
  {
    id: 's12',
    title: 'Building Ethical AI Systems',
    speaker: 'Prof. Emily Carter',
    category: 'Keynote',
    day: 'Day 2',
    time: '09:00 AM - 10:00 AM',
    location: 'Main Hall A',
    description: 'A deep dive into the importance of ethics in AI development, ensuring safety, fairness, and transparency.',
    details: {
      fullDescription: 'A deep dive into the importance of ethics in AI development, ensuring safety, fairness, and transparency. Prof. Carter will discuss the socio-technical challenges of AI bias and the regulatory landscape for 2026.',
      takeaways: ['AI Ethics', 'Bias Mitigation', 'Regulation'],
      tracks: ['AI/ML', 'Social Impact'],
      level: 'Beginner',
      speakerBio: 'Prof. Emily Carter is a researcher at MIT focusing on AI ethics.'
    }
  },
  {
    id: 's13',
    title: 'Personalization at Scale with AI',
    speaker: 'Maria Hernandez',
    category: 'Learning Lab',
    day: 'Day 2',
    time: '09:00 AM - 11:00 AM',
    location: 'Lab C',
    description: 'Streamlining B2C experiences lab.',
    details: {
      fullDescription: 'Streamlining B2C experiences lab. Learn how to use transformer models to deliver hyper-personalized content in real-time. Hands-on with vector databases and RAG (Retrieval-Augmented Generation).',
      takeaways: ['Vector Databases', 'RAG', 'Transformer Models'],
      tracks: ['AI/ML', 'Product'],
      level: 'Intermediate',
      speakerBio: 'Maria Hernandez is a Product Lead at a global fintech.'
    }
  },
  {
    id: 's14',
    title: 'Building Vertical AI Agents',
    speaker: 'Christopher Davis',
    category: 'Breakout',
    day: 'Day 2',
    time: '11:00 AM - 12:00 PM',
    location: 'Room 101',
    description: 'Optimizing vertical applications for better performance.',
    details: {
      fullDescription: 'Optimizing vertical applications for better performance. Discover how to build domain-specific AI agents for healthcare, finance, and law using specialized fine-tuned models.',
      takeaways: ['Domain-Specific AI', 'Model Fine-tuning', 'Agent Frameworks'],
      tracks: ['AI/ML', 'Backend'],
      level: 'Advanced',
      speakerBio: 'Christopher Davis is the founder of an AI automation startup.'
    }
  },
  {
    id: 's15',
    title: 'Distributed Tracing & Observability',
    speaker: 'Jennifer Martinez',
    category: 'Breakout',
    day: 'Day 2',
    time: '11:00 AM - 12:00 PM',
    location: 'Room 201',
    description: 'Aggregating granular synergies for success.',
    details: {
      fullDescription: 'Aggregating granular synergies for success. This session covers OpenTelemetry, Jaeger, and how to effectively debug complex microservice architectures.',
      takeaways: ['OpenTelemetry', 'Distributed Tracing', 'Monitoring'],
      tracks: ['Cloud Native', 'DevOps'],
      level: 'Intermediate',
      speakerBio: 'Jennifer Martinez is a SRE with extensive observability experience.'
    }
  },
  {
    id: 's16',
    title: 'Real-Time Analytics with Apache Flink',
    speaker: 'Kevin Anderson',
    category: 'Learning Lab',
    day: 'Day 2',
    time: '11:00 AM - 01:00 PM',
    location: 'Lab A',
    description: 'Maximize real-time eyeballs workshop.',
    details: {
      fullDescription: 'Maximize real-time eyeballs workshop. Build a real-time analytics dashboard using Flink SQL and Confluent Cloud. Learn about windowing, state management, and exactly-once processing.',
      takeaways: ['Flink SQL', 'Stream Processing', 'Stateful Analytics'],
      tracks: ['Data Engineering'],
      level: 'Advanced',
      speakerBio: 'Kevin Anderson is a Streaming Architect.'
    }
  },
  {
    id: 's17',
    title: 'Edge AI: Running Models Locally',
    speaker: 'Susan Taylor',
    category: 'Breakout',
    day: 'Day 2',
    time: '01:00 PM - 02:00 PM',
    location: 'Room 102',
    description: 'Redefining world-class bandwidth standards.',
    details: {
      fullDescription: 'Redefining world-class bandwidth standards. Explore ONNX Runtime, TensorFlow Lite, and how to deploy efficient ML models on mobile and IoT devices without cloud dependencies.',
      takeaways: ['ONNX', 'Mobile ML', 'Privacy-Preserving AI'],
      tracks: ['AI/ML', 'Mobile'],
      level: 'Intermediate',
      speakerBio: 'Susan Taylor is an IoT Specialist and firmware engineer.'
    }
  },
  {
    id: 's18',
    title: 'Benchmarking Large Language Models',
    speaker: 'Daniel White',
    category: 'Breakout',
    day: 'Day 2',
    time: '01:00 PM - 02:00 PM',
    location: 'Room 202',
    description: 'Benchmarking synergistic vortals in the industry.',
    details: {
      fullDescription: 'Benchmarking synergistic vortals in the industry. Learn how to evaluate LLM performance using standardized datasets and custom metrics for latency, cost, and accuracy.',
      takeaways: ['LLM Evaluation', 'Cost Analysis', 'Quality Assurance'],
      tracks: ['AI/ML'],
      level: 'Intermediate',
      speakerBio: 'Daniel White is an AI Researcher focused on LLM performance.'
    }
  },
  {
    id: 's19',
    title: 'WebTransport & WebSockets Deep Dive',
    speaker: 'Jessica Thomas',
    category: 'Learning Lab',
    day: 'Day 2',
    time: '02:00 PM - 04:00 PM',
    location: 'Lab B',
    description: 'Seize next-generation bandwidth tutorial.',
    details: {
      fullDescription: 'Seize next-generation bandwidth tutorial. Compare WebTransport with traditional WebSockets. We will build a low-latency video streaming control plane using the new WebTransport API.',
      takeaways: ['WebTransport', 'HTTP/3', 'Low Latency'],
      tracks: ['Web', 'Backend'],
      level: 'Advanced',
      speakerBio: 'Jessica Thomas is a Web Standards enthusiast and engineer.'
    }
  },
  {
    id: 's20',
    title: 'Serverless vs. Edge Functions',
    speaker: 'Paul Moore',
    category: 'Breakout',
    day: 'Day 2',
    time: '02:30 PM - 03:30 PM',
    location: 'Room 103',
    description: 'Techniques to disintermediate back-end web services.',
    details: {
      fullDescription: 'Techniques to disintermediate back-end web services. Discuss the pros and cons of regional serverless versus global edge execution. Case studies from Vercel and Cloudflare.',
      takeaways: ['Edge Computing', 'Serverless Architecture', 'Latency Optimization'],
      tracks: ['Web', 'Cloud Native'],
      level: 'Intermediate',
      speakerBio: 'Paul Moore is a Cloud Architect and blogger.'
    }
  },
  {
    id: 's21',
    title: 'Optimizing 5G for IoT',
    speaker: 'Mark Jackson',
    category: 'Breakout',
    day: 'Day 2',
    time: '02:30 PM - 03:30 PM',
    location: 'Room 203',
    description: 'Transforming bleeding-edge bandwidth case study.',
    details: {
      fullDescription: 'Transforming bleeding-edge bandwidth case study. Learn how 5G network slicing and private 5G networks are enabling massive IoT deployments in manufacturing and logistics.',
      takeaways: ['5G Network Slicing', 'IoT Connectivity', 'Industrial Automation'],
      tracks: ['Hardware', 'IoT'],
      level: 'Intermediate',
      speakerBio: 'Mark Jackson is a Telecommunications Expert.'
    }
  },
  {
    id: 's22',
    title: 'Scaling Rust for Web Services',
    speaker: 'Laura Martin',
    category: 'Learning Lab',
    day: 'Day 3',
    time: '09:00 AM - 11:00 AM',
    location: 'Lab C',
    description: 'Scaling next-generation e-business strategies.',
    details: {
      fullDescription: 'Scaling next-generation e-business strategies. A deep dive into Axum, Tokio, and async Rust. Build a high-performance REST API with database integration using SQLx.',
      takeaways: ['Async Rust', 'Axum', 'Performance Tuning'],
      tracks: ['Backend', 'Web'],
      level: 'Advanced',
      speakerBio: 'Laura Martin is a Core Maintainer of several Rust libraries.'
    }
  },
  {
    id: 's23',
    title: 'Migrating from Monolith to Microservices',
    speaker: 'Michelle Wu',
    category: 'Breakout',
    day: 'Day 3',
    time: '11:00 AM - 12:00 PM',
    location: 'Room 101',
    description: 'Transitioning to holistic models seamlessly.',
    details: {
      fullDescription: 'Transitioning to holistic models seamlessly. Strategies for splitting the monolith using the Strangler Fig pattern. Dealing with data consistency and cross-service transactions.',
      takeaways: ['Strangler Fig Pattern', 'Domain Driven Design', 'Eventual Consistency'],
      tracks: ['Architecture', 'Backend'],
      level: 'Intermediate',
      speakerBio: 'Michelle Wu is a Principal Consultant specializing in migrations.'
    }
  },
  {
    id: 's24',
    title: 'Service Mesh with Istio & Linkerd',
    speaker: 'David O\'Connell',
    category: 'Breakout',
    day: 'Day 3',
    time: '11:00 AM - 12:00 PM',
    location: 'Room 201',
    description: 'Meshing customized web services seamlessly.',
    details: {
      fullDescription: 'Meshing customized web services seamlessly. Compare Istio and Linkerd. Learn how to implement mutual TLS, traffic shifting, and fault injection for improved resilience.',
      takeaways: ['Service Mesh', 'mTLS', 'Resilience Testing'],
      tracks: ['Cloud Native', 'Security'],
      level: 'Advanced',
      speakerBio: 'David O\'Connell is a Cloud Infrastructure Engineer.'
    }
  },
  {
    id: 's25',
    title: 'Efficient Video Streaming Protocols',
    speaker: 'Steven Thompson',
    category: 'Learning Lab',
    day: 'Day 3',
    time: '11:00 AM - 01:00 PM',
    location: 'Lab A',
    description: 'Cultivating efficient bandwidth deep dive.',
    details: {
      fullDescription: 'Cultivating efficient bandwidth deep dive. Learn about HLS, DASH, and the newer LL-HLS. We will configure a low-latency transcoding pipeline using FFmpeg.',
      takeaways: ['HLS/DASH', 'FFmpeg', 'Video Codecs'],
      tracks: ['Web', 'Media'],
      level: 'Advanced',
      speakerBio: 'Steven Thompson is a Video Engineer at a major streaming service.'
    }
  },
  {
    id: 's26',
    title: 'Headless Commerce Architectures',
    speaker: 'Kenneth Lewis',
    category: 'Breakout',
    day: 'Day 3',
    time: '01:00 PM - 02:00 PM',
    location: 'Room 102',
    description: 'Redefining world-class e-commerce experiences.',
    details: {
      fullDescription: 'Redefining world-class e-commerce experiences. Explore the benefits of separating the frontend from the commerce engine. APIs, webhooks, and omnichannel delivery strategies.',
      takeaways: ['Headless CMS', 'Omnichannel Strategy', 'API-First Design'],
      tracks: ['Web', 'Architecture'],
      level: 'Intermediate',
      speakerBio: 'Kenneth Lewis is an E-commerce Architect.'
    }
  },
  {
    id: 's27',
    title: 'DevRel: Building Developer Trust',
    speaker: 'Patricia Walker',
    category: 'Breakout',
    day: 'Day 3',
    time: '01:00 PM - 02:00 PM',
    location: 'Room 202',
    description: 'Monetizing next-generation relationships.',
    details: {
      fullDescription: 'Monetizing next-generation relationships. Learn how to build a successful Developer Relations program. Authenticity, documentation, and the importance of developer advocacy.',
      takeaways: ['Developer Advocacy', 'Content Strategy', 'Community Building'],
      tracks: ['DevRel', 'Growth'],
      level: 'Beginner',
      speakerBio: 'Patricia Walker is a VP of Developer Relations.'
    }
  },
  {
    id: 's28',
    title: 'GraphQL Federation at Scale',
    speaker: 'Brian Garcia',
    category: 'Learning Lab',
    day: 'Day 3',
    time: '02:00 PM - 04:00 PM',
    location: 'Lab B',
    description: 'Driving rich web services masterclass.',
    details: {
      fullDescription: 'Driving rich web services masterclass. Hands-on with Apollo Federation. Learn how to compose multiple subgraphs into a single unified data graph for your organization.',
      takeaways: ['Apollo Federation', 'Schema Design', 'Subgraph Communication'],
      tracks: ['Web', 'Backend'],
      level: 'Advanced',
      speakerBio: 'Brian Garcia is a GraphQL expert and maintainer.'
    }
  },
  {
    id: 's29',
    title: 'Multi-Cloud Infrastructure Management',
    speaker: 'Amara Okafor',
    category: 'Breakout',
    day: 'Day 3',
    time: '02:30 PM - 03:30 PM',
    location: 'Room 103',
    description: 'Engaging distributed infrastructures at scale.',
    details: {
      fullDescription: 'Engaging distributed infrastructures at scale. Learn how to manage workloads across AWS, Azure, and GCP using Terraform and Crossplane. Strategies for cloud exit and cost optimization.',
      takeaways: ['Terraform', 'Crossplane', 'Cloud Optimization'],
      tracks: ['Cloud Native', 'DevOps'],
      level: 'Advanced',
      speakerBio: 'Amara Okafor is a Principal Cloud Engineer.'
    }
  },
  {
    id: 's30',
    title: 'Accessibility in Modern Web Apps',
    speaker: 'Tariq Al-Fayed',
    category: 'Breakout',
    day: 'Day 3',
    time: '02:30 PM - 03:30 PM',
    location: 'Room 203',
    description: 'Re-intermediating rich communities for growth.',
    details: {
      fullDescription: 'Re-intermediating rich communities for growth. Practical tips for meeting WCAG 2.2 standards. Testing with screen readers and building accessible component libraries.',
      takeaways: ['WCAG 2.2', 'ARIA Patterns', 'Inclusive Design'],
      tracks: ['Web', 'Frontend'],
      level: 'Beginner',
      speakerBio: 'Tariq Al-Fayed is an Accessibility Advocate and engineer.'
    }
  },
  {
    id: 's31',
    title: 'Advanced PostgreSQL Patterns',
    speaker: 'Wei Zhang',
    category: 'Breakout',
    day: 'Day 3',
    time: '04:00 PM - 05:00 PM',
    location: 'Room 104',
    description: 'E-Enabling efficient schemas for data.',
    details: {
      fullDescription: 'E-Enabling efficient schemas for data. Optimize your database with advanced indexing, partitioning, and JSONB. Learn about query optimization and performance tuning for 2026.',
      takeaways: ['Indexing', 'Partitioning', 'JSONB Optimization'],
      tracks: ['Database', 'Backend'],
      level: 'Advanced',
      speakerBio: 'Wei Zhang is a Database Administrator and open source contributor.'
    }
  },
  {
    id: 's32',
    title: 'Bridging Digital & Physical Retail',
    speaker: 'Mateo Fernandez',
    category: 'Breakout',
    day: 'Day 3',
    time: '04:00 PM - 05:00 PM',
    location: 'Room 204',
    description: 'Streamlining clicks-and-mortar functionalities.',
    details: {
      fullDescription: 'Streamlining clicks-and-mortar functionalities. How AR/VR and IoT are merging online and offline shopping experiences. A look at the future of retail tech.',
      takeaways: ['Retail Tech', 'AR/VR', 'IoT Integration'],
      tracks: ['Product', 'Innovation'],
      level: 'Intermediate',
      speakerBio: 'Mateo Fernandez is a Product Innovation Lead.'
    }
  }
];
