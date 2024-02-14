import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: 'field for set user name', default: 'Maksym', required: false })
  name: string;

  @ApiProperty({ description: 'field for set user email', default: 'maksym@gmail.com' })
  email: string;

  @ApiProperty()
  password: string;
}
