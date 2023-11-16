import { Injectable } from '@nestjs/common';
import { CreateLoanDto } from './dto/create-loan.dto';
import { UpdateLoanDto } from './dto/update-loan.dto';
import { LoanRepository } from './repositories/loan.repository';

@Injectable()
export class LoansService {
  constructor(private readonly repository: LoanRepository) { }
  create(createLoanDto: CreateLoanDto) {
    return this.repository.create(createLoanDto)
  }

  findAll() {
    return this.repository.findAll()
  }

  findOne(id: number) {
    return this.repository.findOne(id)
  }

  update(id: number, updateLoanDto: UpdateLoanDto) {
    return `This action updates a #${id} loan`;
  }

  remove(id: number) {
    return `This action removes a #${id} loan`;
  }
}
