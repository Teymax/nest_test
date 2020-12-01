import { Module } from '@nestjs/common';
// import { UsersController } from './controllers/users/users.controller';
// import { UsersService } from './services/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';

@Module({
    // controllers: [UsersController],
    // providers: [UsersService],
    imports: [
        TypeOrmModule.forFeature([UserEntity])
    ]
})
export class UsersModule {}