import { serverConfig } from "@configs/serverConfig";
import { app } from "./app";

const { PREFIX, HOSTNAME, PORT } = serverConfig;

app.listen(PORT, HOSTNAME, () =>
  console.log(`SERVER ON: ${PREFIX}://${HOSTNAME}:${PORT}`),
);
