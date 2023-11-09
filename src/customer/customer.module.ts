import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { CustomersRepository } from './repositories/customer.repository';

@Module({
  controllers: [CustomerController],
  providers: [CustomerService, PrismaService, CustomersRepository],
})
export class CustomerModule {}
