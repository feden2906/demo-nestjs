import { Transform, Type } from 'class-transformer';
import { IsOptional, IsString, Matches, MinLength } from 'class-validator';

export class CreateUserDto {
  @Transform(({value}) => value.trim())
  @MinLength(3)
  @IsOptional()
  @IsString()
  name?: string;

  @Matches(/sdf/)
  @IsString()
  email: string;

  @IsString()
  @Matches(/sdf/)
  password: string;

  @Type(() => Date)
  @IsOptional()
  date: string
}
