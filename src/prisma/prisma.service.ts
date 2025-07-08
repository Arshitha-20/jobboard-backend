import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  async onModuleInit() {
  console.log('⏳ Connecting to database...');
  await this.$connect();
  console.log('✅ Connected to database!');
}


  async onModuleDestroy() {
    await this.$disconnect();
  }
}
