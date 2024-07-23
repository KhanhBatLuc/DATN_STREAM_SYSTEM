
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './user/user.module';
import databaseConfig from './config/database.config';

@Module({
  imports: 
  // [
    // ConfigModule.forRoot(
    //   {
    //     envFilePath: ['.env','.env.development.local', '.env.development'],
    //   }
    // ),
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: process.env.POSTGRES_HOST || 'localhost',
    //   port: +process.env.POSTGRES_PORT || 5432,
    //   username: process.env.POSTGRES_USER,
    //   password: process.env.POSTGRES_PASSWORD,
    //   database: process.env.POSTGRES_DB,
    //   entities: [User],
    //   synchronize: false, //if true database auto create tables on every application launched
    //   migrationsTableName: "auth_services_migrations",
    //   logging: true,
    //   migrations: ['./database/migrations/*{.ts,.js}'],
    //   migrationsRun: false,
    // }),
    // AuthModule],
  [ 
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [databaseConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule, AuthModule],
      useFactory: (configService: ConfigService) => ({
        ...configService.get('database'),
      }),
      inject: [ConfigService],
    }),
    UserModule,
    AuthModule

  ],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
