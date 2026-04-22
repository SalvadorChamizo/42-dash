import Fastify from "fastify";

const app = Fastify({ logger: true });

const BACKEND_PORT = process.env.BACKEND_PORT || 3000;

app.get("/healthz", async (req, reply) => {
    return reply.code(200).send({"status":"ok"});
})

async function main() {
  await app.listen({ port: Number(BACKEND_PORT), host: "0.0.0.0" })
    .then(() => console.log(`Server running on port ${BACKEND_PORT}`));
}

main();