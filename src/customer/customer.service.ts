import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { CustomersRepository } from './repositories/customer.repository';

@Injectable()
export class CustomerService {
  constructor(private readonly repository: CustomersRepository) { }


  create(createCustomerDto: CreateCustomerDto) {
    return this.repository.create(createCustomerDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(cpf: string) {
    return this.repository.findOne(cpf);
  }

  update(cpf: string, updateCustomerDto: UpdateCustomerDto) {
    return this.repository.update(cpf, updateCustomerDto);
  }

  remove(cpf: string) {
    return this.repository.remove(cpf);
  }
}
