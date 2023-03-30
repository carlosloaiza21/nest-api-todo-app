import { TaskStatus } from '../task.entity';
import { IsNotEmpty, IsString, isString, MinLength } from 'class-validator';

export class CreateDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  title: string;
  description: string;
}

export class UpdatedFields {
  title?: string;
  description?: string;
  status?: TaskStatus;
}
