import CourseBox from "../components/CourseBox";

export default () => {
  return (
    <div className="animate-fade">
      <h2 className="text-2xl mb-5 font-bold">Coursework</h2>

      <div className="px-2 sm:px-20 flex flex-col gap-6">
        <CourseBox
          title="Database Systems"
          bullets={[
            "Modeled domains with ER diagrams and relational schemas",
            "Designed normalized schemas and implemented them with SQL",
            "Wrote complex queries and ACID transactions",
            "Built app backends interfacing with RDBMS drivers",
            "Applied indexes, storage layouts, and query optimization",
          ]}
          tags={["SQL", "Relational Algebra", "Transactions", "Indexing"]}
        />

        <CourseBox
          title="Scalable Software Architecture"
          bullets={[
            "Built cloud services resilient to crashes and restarts",
            "Served many concurrent users via network APIs",
            "Applied 3‑tier design: frontend, backend, database",
            "Used SQL/NoSQL, queues, caches, CDNs, load balancers, serverless",
            "Practiced DevOps: CI/CD, staging, containers/VMs, logging, monitoring",
          ]}
          tags={["Cloud", "APIs", "CDN", "Load Balancing", "CI/CD", "Containers"]}
        />

        <CourseBox
          title="Programming Languages"
          bullets={[
            "Explored language paradigms and runtime semantics",
            "Reasoned about types, memory, and safety guarantees",
            "Implemented interpreters/components to study evaluation models",
          ]}
          tags={["Type Systems", "Interpreters", "Semantics"]}
        />

        <CourseBox
          title="Parallel Computing"
          bullets={[
            "Studied shared/distributed memory, CPU vs GPU, multicore/multiprocessor",
            "Used models: threads, OpenMP, MPI, CUDA, MapReduce",
            "Handled race conditions, synchronization, barriers, deadlocks",
            "Analyzed caching, coherence, consistency, profiling, speedup, Amdahl’s law",
            "Discussed lock‑free data structures and parallel algorithms",
          ]}
          tags={["OpenMP", "MPI", "CUDA", "Amdahl's Law"]}
        />
      </div>
    </div>
  );
}