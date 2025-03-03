import { Injectable } from '@nestjs/common';
import { CreatePaymentMethodDto } from './dto/create-payment-method.dto';
import { UpdatePaymentMethodDto } from './dto/update-payment-method.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PaymentMethodService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPaymentMethodDto: CreatePaymentMethodDto) {
    return this.prisma.paymentMethod.create({
      data: createPaymentMethodDto,
    });
  }

  async findAll() {
    return this.prisma.paymentMethod.findMany();
  }

  async findOne(id: number) {
    return this.prisma.paymentMethod.findUnique({
      where: { id },
    });
  }

  async update(id: number, updatePaymentMethodDto: UpdatePaymentMethodDto) {
    return this.prisma.paymentMethod.update({
      where: { id },
      data: updatePaymentMethodDto,
    });
  }

  async remove(id: number) {
    return this.prisma.paymentMethod.delete({
      where: { id },
    });
  }
}
