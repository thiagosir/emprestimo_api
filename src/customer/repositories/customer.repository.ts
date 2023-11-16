import { Injectable } from "@nestjs/common";
import { CreateCustomerDto } from "../dto/create-customer.dto";
import { CustomerEntity } from "../entities/customer.entity";
import { PrismaService } from "src/prisma/prisma.service";
import { UpdateCustomerDto } from "../dto/update-customer.dto";


@Injectable()
export class CustomersRepository {
  constructor(private readonly prisma: PrismaService) { }

  async create(createCustomerDto: CreateCustomerDto): Promise<CustomerEntity> {
    return this.prisma.customer.create({
      data: createCustomerDto
    })
  }

  async createLoansCustomer(createCustomerDto: CreateCustomerDto): Promise<CustomerEntity> {
    const { income, age, location, name } = createCustomerDto

    if (income <= 3000) {
        console.log("PERSONAL")
    }

    return this.prisma.customer.create({
      data: createCustomerDto
    })
  }

  async findAll(): Promise<CustomerEntity[]> {
    return this.prisma.customer.findMany()
  }

  async findOne(cpf: string): Promise<CustomerEntity> {
    return this.prisma.customer.findUnique({
      where: {
        cpf: cpf
      }
    })
  }

  async update(cpf: string, updateCustomerDto: UpdateCustomerDto): Promise<CustomerEntity> {
    return this.prisma.customer.update({
      data: updateCustomerDto,
      where: {
        cpf: cpf
      }
    })
  }

  async remove(cpf: string): Promise<CustomerEntity> {
    return this.prisma.customer.delete({
      where: {
        cpf: cpf
      }
    })
  }
}