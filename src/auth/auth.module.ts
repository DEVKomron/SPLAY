import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { JwtModule } from "@nestjs/jwt";
import { UsersModule } from "../users/users.module";
import { PrismaModule } from "../prisma/prisma.module";
import { AdminModule } from "../admin/admin.module";
import { RefreshTokenCookieStrategy } from "src/common/strategies";

@Module({
    imports: [
        JwtModule.register({ global: true }),
        UsersModule,
        PrismaModule,
        AdminModule,
    ],
    controllers: [AuthController],
    providers: [AuthService, RefreshTokenCookieStrategy],
})
export class AuthModule {}
