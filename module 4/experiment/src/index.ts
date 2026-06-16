import { app } from "./app.js";
import { logger } from "./config/logger.js";

const port = 4000;

app.listen(port, () => {
  logger.info(`Server running on PORT:${port}`);
});
