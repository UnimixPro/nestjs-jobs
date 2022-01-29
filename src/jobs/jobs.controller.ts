import { Body, Controller, Get, Param } from '@nestjs/common';
import { JobsService } from "./jobs.service";
import { Job, JobDocument } from "./schemas/job.schema";
import { JobDto } from "./dtos/job.dto";

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobService: JobsService) {
  }
  @Get()
  find(@Param('id') id: string): Promise<Job> {
    return this.jobService.find(id);
  }

  create(@Body() job: JobDto ): Promise<Job> {
    return this.jobService.create(job);
  }

  update(@Param('id') id: string, @Body() job: JobDto ): Promise<Job> {
    return this.jobService.update(id, job);
  }
}
