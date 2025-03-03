import { PartialType } from '@nestjs/swagger';
import { CreateBillingHistoryDto } from './create-billing-history.dto';

export class UpdateBillingHistoryDto extends PartialType(CreateBillingHistoryDto) {}
