import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';

@Injectable()
export class LanguageService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createLanguageDto: CreateLanguageDto) {
    return this.prismaService.language.create({ data: createLanguageDto });
  }

  async findAll() {
    return this.prismaService.language.findMany({
      include: { profile: true },
    });
  }

  async findOne(id: number) {
    const language = await this.prismaService.language.findUnique({
      where: { id },
      include: { profile: true },
    });
    if (!language) {
      throw new NotFoundException(`Language #${id} topilmadi`);
    }
    return language;
  }

  async update(id: number, updateLanguageDto: UpdateLanguageDto) {
    return this.prismaService.language.update({
      where: { id },
      data: updateLanguageDto,
    });
  }

  async remove(id: number) {
    try {
      await this.prismaService.language.delete({ where: { id } });
      return { message: `Language #${id} o'chirildi` };
    } catch {
      throw new NotFoundException(`Language #${id} topilmadi`);
    }
  }
}
