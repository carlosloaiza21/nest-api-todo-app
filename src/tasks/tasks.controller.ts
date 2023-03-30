import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateDto, UpdatedFields } from './dto/task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTask() {
    return this.tasksService.getAllTask();
  }

  @Post()
  createTask(@Body() newTask: CreateDto) {
    const { title, description } = newTask;
    return this.tasksService.createTask(title, description);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return this.tasksService.deleteTask(id);
  }

  @Patch(':id')
  updateTask(@Param('id') id: string, @Body() UpdatedFields: UpdatedFields) {
    return this.tasksService.updateTask(id, UpdatedFields);
  }
}
