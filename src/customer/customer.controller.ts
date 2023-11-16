import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customerService.create(createCustomerDto);
  }

  @Post()
  createLoansCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customerService.create(createCustomerDto)
  }

  @Get()
  findAll() {
    return this.customerService.findAll();
  }

  @Get(':cpf')
  findOne(@Param('cpf') cpf: string) {
    return this.customerService.findOne(cpf);
  }

  @Patch(':cpf')
  update(@Param('cpf') cpf: string, @Body() updateCustomerDto: UpdateCustomerDto) {
    return this.customerService.update(cpf, updateCustomerDto);
  }

  @Delete(':cpf')
  remove(@Param('cpf') cpf: string) {
    return this.customerService.remove(cpf);
  }
}
