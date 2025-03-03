import {
    BadRequestException,
    Injectable,
    NotFoundException,
} from "@nestjs/common";
import { CreateUserDto, UpdateUserDto } from "./dto";
import { PrismaService } from "src/prisma/prisma.service";
import * as bcrypt from "bcrypt";

@Injectable()
export class UsersService {
    constructor(private readonly prismaService: PrismaService) {}
    async create(createUserDto: CreateUserDto) {
        if (createUserDto.password !== createUserDto.confirm_password) {
            throw new BadRequestException("Parollar mos emas");
        }
    
        const hashedPassword = await bcrypt.hash(createUserDto.password, 7);
        const data = {
            email: createUserDto.email,
            password_hash: hashedPassword,
            age: createUserDto.age,  
            gender: createUserDto.gender, 
        };
    
        const newUser = await this.prismaService.user.create({ data });
        return newUser;
    }
    
    

    findAll() {
        return this.prismaService.user.findMany();
    }

    async findOne(id: number) {
        const user = await this.prismaService.user.findUnique({
            where: { id },
        });
        if (!user) {
            throw new NotFoundException("Bunday yo'q");
        }
        return user;
    }
    async findByEmail(email: string) {
        const user = await this.prismaService.user.findUnique({
            where: { email },
        });
        return user;
    }

    async update(id: number, updateUserDto: UpdateUserDto) {
        if (updateUserDto.password && updateUserDto.password !== updateUserDto.confirm_password) {
            throw new BadRequestException("Parollar mos emas!");
        }
    
        const data: any = { ...updateUserDto };
        delete data.confirm_password; 
    
        if (data.password) {
            data.password_hash = await bcrypt.hash(data.password, 7);
            delete data.password;
        }
    
        return this.prismaService.user.update({ where: { id }, data });
    }
    
    

    async remove(id: number) {
        const user = await this.findOne(id);
        return this.prismaService.user.delete({ where: { id } });
    }

    async updateRefreshToken(id: number, hashed_refresh_token: string | null) {
        const updatedUser = await this.prismaService.user.update(
            {
              where: { id },
              data:{ hashed_token:hashed_refresh_token },
            }
        );
    
        return updatedUser;
      }
}
