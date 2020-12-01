import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { TermsModule } from './terms/terms.module';
import * as process from "process";

const username = process.env.POSTGRES_USER || 'postgres';
const password = process.env.POSTGRES_PASSWORD || 'postgres';
const host = process.env.POSTGRES_HOST || "localhost";
const database = process.env.POSTGRES_DATABASE || "nest-test";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: host,
      port: 5432,
      username: username,
      password: password,
      database: database,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UsersModule,
    TermsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}