import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Controller('jobs')
export class JobsController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async findAll() {
    return this.prisma.jobs.findMany();
  }

  @Post()
  async create(@Body() data: any) {
    return this.prisma.jobs.create({
      data: {
        title: data.title,
        company: data.company,
        location: data.location,
        jobType: data.jobType,
       salaryMin: data.salaryMin,
        salaryMax: data.salaryMax,
        deadline: data.deadline ? new Date(data.deadline).toISOString() : null,
        description: data.description,
      },
    });
  }
}
