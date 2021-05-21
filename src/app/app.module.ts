import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { translationChunksConfig, translations } from '@spartacus/assets';
import { ConfigModule } from '@spartacus/core';
import { TmaB2cStorefrontModule, tmaTranslations } from '@spartacus/tua-spa';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    TmaB2cStorefrontModule.withConfig({
      backend: {
        tmf: {
          baseUrl: 'https://localhost:9002',
          prefix: '/b2ctelcotmfwebservices/v2/',
        },
        occ: {
          baseUrl: 'https://localhost:9002',
          prefix: '/occ/v2/',
        },
        tmf_appointment: {
          baseUrl: 'http://localhost:8080',
          prefix: '/tmf-api',
        },
        tmf_resource_pool_management: {
          baseUrl: 'http://localhost:8080',
          prefix: '/tmf-api',
        },
        premiseLookup: {
          baseUrl: 'http://localhost:9003',
          prefix: '/premise/v1/',
        }
      },
      context: {
        urlParameters: ['baseSite', 'language', 'currency'],
        baseSite: ['telcospa', 'utilitiesspa'],
      },
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en',
      },
      features: { level: '2.0' },
      journeyChecklist: {
        journeyChecklistSteps: ['APPOINTMENT', 'MSISDN', 'INSTALLATION_ADDRESS'],
        msisdn_reservation: {
          msisdn_qty: 1,
          msisdn_capacity_amount_demand: 1,
          msisdn_applied_capacity_amount: 5,
          applied_capacity_amount_for_msisdn_reservation: 1,
        },
        appointment: {
          requested_number_of_timeslots: 5,
          end_date_of_timeslots: 3,
        }
      }
    }),
    ConfigModule.withConfig({ i18n: { resources: tmaTranslations } }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
