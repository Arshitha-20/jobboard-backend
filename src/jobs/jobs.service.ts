import { Injectable } from '@nestjs/common';
@Injectable()
export class JobsService {
  private jobs = [
    {
      id: 1,
      title: 'Full Stack Developer',
      company: 'Google',
      location: 'Bangalore',
      jobType: 'Full Time',
      salaryMin: 50000,
      salaryMax: 100000,
      deadline: new Date(),
      description: 'Work on amazing things.',
    },
  ];

  findAll() {
    return this.jobs;
  }
}
