import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createCategoryDto: CreateCategoryDto) {
    return this.prismaService.category.create({ 
      data:{ ...createCategoryDto,
      description: createCategoryDto.description ?? ""
    }});
  }

  findAll() {
    return this.prismaService.category.findMany({
      include: { categoryContent: true }, 
    });
  }

  async findOne(id: number) {
    const category = await this.prismaService.category.findUnique({
      where: { id },
      include: { categoryContent: true },
    });

    if (!category) {
      throw new NotFoundException(`Category ${id} topilmadi`);
    }
    return category;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return this.prismaService.category.update({
      where: { id },
      data: updateCategoryDto,
    });
  }

  async remove(id: number) {
    try {
      await this.prismaService.category.delete({ where: { id } });
      return { message: `Category ${id} o'chirildi` };
    } catch {
      throw new NotFoundException(`Category ${id} topilmadi`);
    }
  }
}
