const capabilities = [
  {
    title: "Go Backend Systems",
    metric: "1,500+ RPM",
    desc: "Payment services, retry flows, circuit breakers, async orchestration, and production debugging.",
    tags: ["Go", "REST APIs", "Kafka/SQS", "PostgreSQL"],
  },
  {
    title: "AWS Cloud Ownership",
    metric: "AWS SAA",
    desc: "Infrastructure across EC2, Lambda, S3, Athena, RDS, Redis, CI/CD, and deployment workflows.",
    tags: ["AWS", "Docker", "ArgoCD", "Jenkins"],
  },
  {
    title: "AI Product Workflows",
    metric: "MCP + RAG",
    desc: "LLM-powered analytics, text-to-SQL, LangGraph agents, PGVector search, and tool-based automation.",
    tags: ["LLMs", "MCP", "LangGraph", "PGVector"],
  },
];

const Capabilities = () => {
  return (
    <section id="systems" className="w-full py-16">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-purple">
          What I can own end-to-end
        </p>
        <h2 className="heading mt-3">
          Backend depth with <span className="text-purple">cloud delivery</span>
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-white-100 md:text-base">
          I focus on systems that need correctness, throughput, and operational
          clarity: Go services, AWS infrastructure, TypeScript APIs, and AI
          workflows that make internal teams faster.
        </p>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {capabilities.map((item) => (
          <article
            key={item.title}
            className="group relative overflow-hidden rounded-3xl border border-white/[0.12] bg-[linear-gradient(145deg,#05081f,#0d102b)] p-6 shadow-[0_0_45px_rgba(203,172,249,0.08)]"
          >
            <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-purple/10 blur-2xl transition group-hover:bg-purple/20" />
            <div className="relative">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <span className="rounded-full border border-purple/30 bg-purple/10 px-3 py-1 text-xs font-semibold text-purple">
                  {item.metric}
                </span>
              </div>
              <p className="mt-5 min-h-24 text-sm leading-6 text-white-100">
                {item.desc}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#10132E] px-3 py-1 text-xs text-blue-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Capabilities;
