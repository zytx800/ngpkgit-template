import { NgModule } from '@angular/core';

// import { CacheLocalStorageModule, CacheModule, MemoryCacheModule } from '@dagonmetric/ng-cache';
// import { ConfigModule } from '@dagonmetric/ng-config';
// import { HttpConfigLoaderModule } from '@dagonmetric/ng-config/http-loader';
// import { LogModule } from '@dagonmetric/ng-log';
// import { ConsoleLoggerModule } from '@dagonmetric/ng-log/console';
// import { ApplicationInsightsLoggerModule } from '@dagonmetric/ng-log-applicationinsights';
// import { GTagLoggerModule } from '@dagonmetric/ng-log-gtag';
// import { FacebookAnalyticsLoggerModule } from '@dagonmetric/ng-log-facebook-analytics';
// import { FirebaseAnalyticsLoggerModule } from '@dagonmetric/ng-log-firebase-analytics';
// import { TranslitModule } from '@dagonmetric/ng-translit';

@NgModule({
    imports: [
        // // ng-cache modules
        // CacheModule,
        // CacheLocalStorageModule,
        // MemoryCacheModule,

        // // ng-config modules
        // ConfigModule.init(),
        // HttpConfigLoaderModule.withOptions({
        //     endpoint: '/appsettings.json'
        // }),

        // // ng-log modules
        // LogModule.withConfig({ minLevel: 'debug' }),
        // ConsoleLoggerModule,
        // ApplicationInsightsLoggerModule.withOptions({
        //     config: {
        //         instrumentationKey: 'YOUR_INSTRUMENTATION_KEY_GOES_HERE'
        //         /* ...Other Configuration Options... */
        //     }
        // }),
        // GTagLoggerModule.withOptions({
        //     measurementId: 'GA_MEASUREMENT_ID'
        // }),
        // FacebookAnalyticsLoggerModule,
        // FirebaseAnalyticsLoggerModule.config({
        //     firebase: {
        //         apiKey: '<your_firebase_app_api_key>',
        //         projectId: '<your_firebase_project_id>',
        //         appId: '<your_firebase_app_id>',
        //         // Replace 'G-1111111111' with your measurementId
        //         measurementId: 'G-1111111111',
        //         // ...
        //     }
        // }),

        // // ng-translit module
        // TranslitModule
    ]
})
export class AppModule { }
