import { appConfig } from "@configs/appConfig";
import { app } from "./app";

const { PREFIX, HOSTNAME, PORT } = appConfig;

app.listen(PORT, HOSTNAME, () =>
  console.log(`SERVER ON: ${PREFIX}://${HOSTNAME}:${PORT}`)
);
