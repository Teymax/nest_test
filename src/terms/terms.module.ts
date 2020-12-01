import { Module } from '@nestjs/common';
// import { TermsController } from './controllers/terms/terms.controller';
// import { TermsService } from './services/terms/terms.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TermsEntity } from './entities/terms.entity';


@Module({
    // controllers: [TermsController],
    // providers: [TermsService],
    imports: [
        TypeOrmModule.forFeature([TermsEntity])
    ]
})
export class TermsModule {}