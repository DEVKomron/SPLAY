import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBillingHistoryDto } from './dto/create-billing-history.dto';
import { UpdateBillingHistoryDto } from './dto/update-billing-history.dto';

@Injectable()
export class BillingHistoryService {
  constructor(private readonly prismaServise: PrismaService) {}

  create(createBillingHistoryDto: CreateBillingHistoryDto) {
    return this.prismaServise.billingHistory.create({ data: createBillingHistoryDto });
  }

  findAll() {
    return this.prismaServise.billingHistory.findMany({
      include: { User: true, Subscription: true, PaymentMethod: true },
    });
  }

  async findOne(id: number) {
    const billingHistory = await this.prismaServise.billingHistory.findUnique({
      where: { id },
      include: { User: true, Subscription: true, PaymentMethod: true },
    });

    if (!billingHistory) {
      throw new NotFoundException(`Billing history #${id} topilmadi`);
    }

    return billingHistory;
  }

  update(id: number, updateBillingHistoryDto: UpdateBillingHistoryDto) {
    return this.prismaServise.billingHistory.update({
      where: { id },
      data: updateBillingHistoryDto,
    });
  }

  async remove(id: number) {
    try {
      await this.prismaServise.billingHistory.delete({ where: { id } });
      return { message: `Billing history #${id} o'chirildi` };
    } catch {
      throw new NotFoundException(`Billing history #${id} topilmadi`);
    }
  }
}
