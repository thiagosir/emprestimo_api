import { Injectable } from "@nestjs/common";
import { CreateCustomerDto } from "../dto/create-customer.dto";
import { CustomerEntity } from "../entities/customer.entity";
import { PrismaService } from "src/prisma/prisma.service";



@Injectable()
export class CustomersRepository {
  constructor(private readonly prisma: PrismaService) { }

  async create(createCustomerDto: CreateCustomerDto): Promise<CustomerEntity> {
    return this.prisma.customer.create({
      data: createCustomerDto
    })
  }

  async findAll(): Promise<CustomerEntity[]> {
    return this.prisma.customer.findMany()
  }
}