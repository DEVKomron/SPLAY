import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createProfileDto: CreateProfileDto) {
    return this.prisma.profile.create({ data: createProfileDto });
  }

  async findAll() {
    return this.prisma.profile.findMany();
  }

  async findOne(id: number) {
    return this.prisma.profile.findUnique({ where: { id } });
  }

  async update(id: number, updateProfileDto: UpdateProfileDto) {
    return this.prisma.profile.update({ where: { id }, data: updateProfileDto });
  }

  async remove(id: number) {
    return this.prisma.profile.delete({ where: { id } });
  }
}
