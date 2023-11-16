import { Injectable } from "@nestjs/common";
import { CreateLoanDto } from "../dto/create-loan.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { LoanEntity } from "../entities/loan.entity";




@Injectable()
export class LoanRepository {
  constructor(private readonly prisma: PrismaService) { }

  create(createLoanDto: CreateLoanDto): Promise<LoanEntity> {
    return this.prisma.loan.create({
      data: createLoanDto
    })
  }

  findAll(): Promise<LoanEntity[]> {
    return this.prisma.loan.findMany()
  }

  findOne(id: number) {
    return this.prisma.loan.findUnique({
      where: {
        id: id
      }
    })
  }
}