"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const compression = require("compression");
const helmet_1 = require("helmet");
const http_exception_filter_1 = require("./common/filters/http-exception.filter");
const transform_interceptor_1 = require("./common/interceptors/transform.interceptor");
const config_1 = require("@nestjs/config");
const common_2 = require("@nestjs/common");
const common_3 = require("@nestjs/common");
async function bootstrap() {
    const logger = new common_1.Logger('Bootstrap');
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: ['error', 'warn', 'log', 'debug', 'verbose'],
    });
    const configService = app.get(config_1.ConfigService);
    app.enableVersioning({
        type: common_2.VersioningType.URI,
        prefix: 'v',
        defaultVersion: '1',
    });
    app.use((0, helmet_1.default)());
    app.use(compression());
    app.enableCors({
        origin: configService.get('CORS_ORIGIN', '*'),
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
        allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'X-Requested-With'],
        exposedHeaders: ['X-Total-Count'],
        credentials: true,
        maxAge: 3600,
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        forbidUnknownValues: true,
        transform: true,
        transformOptions: {
            enableImplicitConversion: false,
        },
        errorHttpStatusCode: common_3.HttpStatus.UNPROCESSABLE_ENTITY,
        skipMissingProperties: false,
        skipNullProperties: false,
        skipUndefinedProperties: false,
    }));
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
    app.useGlobalInterceptors(new transform_interceptor_1.TransformInterceptor());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('E-commerce API')
        .setDescription('A comprehensive e-commerce API built with NestJS')
        .setVersion('1.0')
        .addBearerAuth()
        .addApiKey({ type: 'apiKey', name: 'X-API-KEY', in: 'header' }, 'X-API-KEY')
        .addTag('products', 'Product management endpoints')
        .addTag('users', 'User management endpoints')
        .addTag('orders', 'Order management endpoints')
        .addTag('categories', 'Category management endpoints')
        .addTag('cart', 'Shopping cart endpoints')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api/docs', app, document, {
        swaggerOptions: {
            persistAuthorization: true,
            tagsSorter: 'alpha',
            operationsSorter: 'alpha',
        },
    });
    const port = configService.get('PORT', 3004);
    await app.listen(port);
    logger.log(`🚀 E-commerce API is running on: http://localhost:${port}`);
    logger.log(`📚 API Documentation available at: http://localhost:${port}/api/docs`);
    logger.log(`🔒 API Version: v1`);
}
bootstrap();
//# sourceMappingURL=main.js.map