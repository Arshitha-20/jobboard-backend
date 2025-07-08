import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobsController } from './jobs/jobs.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [],
  controllers: [AppController, JobsController],
  providers: [AppService, PrismaService], // 👈 add PrismaService here
})
export class AppModule {}
