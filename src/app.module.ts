import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { DevicesModule } from "./devices/devices.module";
import { PaymentMethodModule } from "./payment-method/payment-method.module";
import { BillingHistoryModule } from "./billing-history/billing-history.module";
import { SubscriptionModule } from "./subscription/subscription.module";
import { SubscriptionPlansModule } from "./subscription-plans/subscription-plans.module";
import { ProfileModule } from "./profile/profile.module";
import { SearchHistoryModule } from "./search-history/search-history.module";
import { RaitingsModule } from "./raitings/raitings.module";
import { WatchHistoryModule } from "./watch-history/watch-history.module";
import { LanguageModule } from "./language/language.module";
import { ContentModule } from "./content/content.module";
import { CategoryContentModule } from "./category-content/category-content.module";
import { CategoryModule } from './category/category.module';
import { UsersModule } from "./users/users.module";

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    UsersModule,
    DevicesModule,
    PaymentMethodModule,
    BillingHistoryModule,
    SubscriptionModule,
    SubscriptionPlansModule,
    ProfileModule,
    SearchHistoryModule,
    RaitingsModule,
    WatchHistoryModule,
    LanguageModule,
    ContentModule,
    CategoryContentModule,
    CategoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
