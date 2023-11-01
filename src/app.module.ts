import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmprestimoModule } from './emprestimo/emprestimo.module';
import { CustomerModule } from './customer/customer.module';
import { LoansModule } from './loans/loans.module';

@Module({
  imports: [EmprestimoModule, CustomerModule, LoansModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
