import { Application, Context, Router } from "jsr:@oak/oak";

const app = new Application();
const router = new Router();

router.get("/", (ctx) => {
    ctx.response.body = ctx;
});

// GET: All tasks
router.get("/tasks", (ctx) => {
});

app.use(router.routes());
app.use(router.allowedMethods());
app.listen({ port: 8080 });
