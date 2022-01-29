import { Injectable } from '@nestjs/common';
import { JobInterface } from './interfaces/job.interfaces'
import {Model} from "mongoose";
import {JobDocument, Job} from "./schemas/job.schema";
import {InjectModel} from "@nestjs/mongoose";
import {find} from "rxjs";
import {strict} from "assert";
@Injectable()
export class JobsService {
  constructor(
    @InjectModel(Job.name) private jobModel: Model<JobDocument>
  ) {}

  async find(id: string) : Promise<Job> {

    return await this.jobModel.findOne({_id : id});
  }

  async create(job: Job) : Promise<Job> {
    const  newJob = new this.jobModel(job);
    return await newJob.save();
  }

  async update(id: string,job: Job) : Promise<Job> {

    return await this.jobModel.findByIdAndUpdate(id, job);
  }

  async delete(id: string) : Promise<Job> {

    return await this.jobModel.findByIdAndDelete(id);
  }
}
