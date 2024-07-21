"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const platform_socket_io_1 = require("@nestjs/platform-socket.io");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useWebSocketAdapter(new platform_socket_io_1.IoAdapter(app));
    app.enableCors();
    if (!process.env.PORT) {
        process.env.PORT = '3001';
    }
    await app.listen(process.env.PORT, () => {
        console.log(`app is running on port ${process.env.PORT}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map