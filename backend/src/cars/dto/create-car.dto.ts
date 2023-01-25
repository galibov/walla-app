import { IsString, IsNumber } from 'class-validator';

export class CreateCarDto {
  @IsString()
  model: string;
  @IsNumber()
  year: number;
  @IsString()
  fuel: string;
}
