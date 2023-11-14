import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCustomerDto {
  @IsNotEmpty()
  @IsNumber()
  age: number;
  
  @IsString()
  @IsNotEmpty()
  cpf: string;
  
  @IsString()
  @IsNotEmpty()
  name: string;
  
  @IsNumber()
  @IsNotEmpty()
  income: number;

  @IsString()
  @IsNotEmpty()
  location: string;
}
