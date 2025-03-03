import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSubscriptionPlanDto } from './dto/create-subscription-plan.dto';
import { UpdateSubscriptionPlanDto } from './dto/update-subscription-plan.dto';

@Injectable()
export class SubscriptionPlansService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createSubscriptionPlanDto: CreateSubscriptionPlanDto) {
    return await this.prisma.subscriptionPlans.create({
      data: { ...createSubscriptionPlanDto },
    });
  }

  async findAll() {
    return await this.prisma.subscriptionPlans.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.subscriptionPlans.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateSubscriptionPlanDto: UpdateSubscriptionPlanDto) {
    return await this.prisma.subscriptionPlans.update({
      where: { id },
      data: { ...updateSubscriptionPlanDto },
    });
  }

  async remove(id: number) {
    return await this.prisma.subscriptionPlans.delete({
      where: { id },
    });
  }
}
