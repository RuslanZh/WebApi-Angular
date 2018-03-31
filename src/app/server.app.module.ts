import { AppModule } from './app.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Installed separatly
import {
    ServerModule,
    ServerTransferStateModule
} from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [],
    imports: [
        // Make sure the string matches
        BrowserModule.withServerTransition({
            appId: 'app-blog-id'
        }),
        ServerModule,
        ServerTransferStateModule,
        ModuleMapLoaderModule,
        AppModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class ServerAppModule {}
