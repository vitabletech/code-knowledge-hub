const categorizedKnowledgeData = {
  "Domain & Architecture": [
    { "id": "14009",
      'content': "<ul><li>Use domain services for complex business logic such as involving multiple aggregates or external interactions.</li><li>For example, <strong>Payment Processing</strong>.</li><li>We can create a PaymentProcessing class and use DI to inject it via the constructor.</li><li>Similarly, we can use application layer domain events, etc.</li></ul>"
    },
    { "id": "22436",
      'content': "<p>Validate the Domain Layer and Application Layer.</p><p>We can also use libraries such as class-validator or Zod for complex validation.</p><p>We can throw exceptions accordingly.</p>"
    },
    { "id": "25453",
      'content': "<ul><li>Avoid using multiple state variables unnecessarily. Combine them if possible to prevent re-renders and prop drilling.</li><li>To prevent prop drilling, use Context API or Redux.</li><li>Always provide a key when rendering lists. Never use index as a key.</li><li>Use useEffect or useCallback hooks to avoid unnecessary re-renders.</li></ul>"
    },
    { "id": "26515",
      'content': "<p>Tracing requests across systems can be challenging, especially with microservices. Implement a logging mechanism to track the source of issues.</p><p>Use Correlation IDs to trace requests. There are built-in packages available for error tracking.</p>"
    },
    { "id": "30821",
      'content': "<p>HTTP status 412 (Precondition Failed) is used when a condition set in request headers fails. Typically used when updating non-existing records or failing preconditions.</p><p>HTTP 409 (Conflict) is used when trying to create duplicate records or delete items that violate business rules.</p>"
    },
    { "id": "32240",
      'content': "<p>Database transactions are useful when running multiple dependent SQL queries. They help improve performance and ensure consistency (rollback on failure).</p>"
    },
    { id: 33495,
      'content': "<p>The primary purpose of a Port is to define an interface that specifies how the application core interacts with external systems.</p><p>Ports act as an abstraction layer, decoupling business logic from dependencies such as databases, UIs, or third-party services.</p>"
    },
    { id: 37672,
      'content': "<p>Handling legacy code requires incremental refactoring with a strong safety net, not a complete rewrite.</p><ul><li>Document undocumented functionality.</li><li>Add logging to understand runtime behavior.</li><li>Write unit/integration tests.</li><li>Implement CI/CD pipelines for regression testing.</li><li>Use feature flags for rolling out changes.</li><li>Identify and remove unused functions/code.</li><li>Apply coding standards like ESLint or PHP fixers.</li></ul>"
    }
  ],
  "Frontend (React)": [
    { id: "55995",
      "content": "<p>Monitoring distributed systems is difficult without a centralized logging mechanism. Use Kibana, Datadog, Prometheus dashboards, alerting mechanisms, or services like AWS CloudWatch.</p>"
    },
    { id: "58623",
      "content": "<p>For large projects with many components, divide them into microservices.</p><p>This allows parallel development and isolates failures.</p><p>Use health checks and auto-restarts to improve availability. Git helps manage and share code efficiently.</p>"
    },
    { id: "59205",
      "content": "<p>The Correlation ID pattern is useful for signup flows with email verification.</p><p>Generate a unique ID during signup, store it, and use it to verify email completion.</p><p>This ensures idempotency and traceability.</p>"
    },
    { id: "60523",
      "content": "<p>In my previous company, we managed technical debt based on priority, business needs, and security risks.</p><p>We maintained a technical debt document in Confluence to track issues.</p>"
    },
    { id: "71108",
      "content": "<p>As a project lead, I collaborated with system architects, performed POCs, and discussed development strategies.</p><p>I actively listened to others' viewpoints, noted points, clarified doubts, and aligned decisions with the team.</p><p>Documentation of decisions ensured transparency and alignment.</p>"
    },
    { id: "75300",
      "content": "<ul><li>Separate pure and impure functions.</li><li>Handle effects via dependency injection.</li><li>Use Redux for managing side effects and state.</li></ul>"
    },
    { id: "76543",
      "content": "<p>Integration tests ensure that core business logic remains functional when interacting with external systems.</p><p>They build confidence that infrastructure changes don’t break core logic.</p>"
    },
    { id: "83754",
      "content": "<p>TDD (Test Driven Development) involves writing a failing test first, then the actual function, and validating with the test.</p><p>It helps ensure correct implementation from the start.</p>"
    },
    { id: "85634",
      "content": "<p>I remember working on an SVN-based project where centralized version control made collaboration difficult.</p><p>For small teams and frequent deployments, trunk-based development is ideal.</p><p>For larger teams, use GitFlow to manage multiple branches efficiently.</p>"
    }
  ],
  "Testing & Quality": [
    { "id": "92301",
      "content": "<p>In one project, the signup process was slow due to synchronous email sending.</p><p>I moved the email process to the background using AWS SQS, improving performance.</p>"
    },
    { "id": "1747",
      "content": "<p>The test pyramid illustrates the balance between cost and time for testing types:</p><ul><li>Unit testing: 70-80% coverage, fast and cost-effective.</li><li>Integration testing: 15-20%, slower due to dependencies.</li><li>End-to-end/UI testing: expensive and time-consuming.</li></ul>"
    },
    { "id": "135",
      "content": "<p>Feature flags in TypeScript allow conditional feature deployment without reverting code.</p><p>They’re useful when multiple features are present, but only some are production-ready.</p>"
    }
  ]
};
