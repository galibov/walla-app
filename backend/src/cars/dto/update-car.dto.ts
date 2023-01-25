import { IsNumber, IsString } from 'class-validator';
export class UpdateCarDto {
  @IsString()
  id: string;
  @IsString()
  model: string;
  @IsNumber()
  year: number;
  @IsString()
  fuel: string;
}
