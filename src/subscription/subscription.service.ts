import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';

@Injectable()
export class SubscriptionService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createSubscriptionDto: CreateSubscriptionDto) {
    return await this.prisma.subscription.create({
      data: { ...createSubscriptionDto },
    });
  }

  async findAll() {
    return await this.prisma.subscription.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.subscription.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateSubscriptionDto: UpdateSubscriptionDto) {
    return await this.prisma.subscription.update({
      where: { id },
      data: { ...updateSubscriptionDto },
    });
  }

  async remove(id: number) {
    return await this.prisma.subscription.delete({
      where: { id },
    });
  }
}
