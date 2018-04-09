import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routerConfig';

import { BlogModule } from './blog/blog.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
// import {LazyModule} from './lazy/lazy.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ /* an empty object here for this time */}),
    RouterModule.forRoot(appRoutes),
    BlogModule
    // LazyModule
  ],
  providers: [],
  // exports: [AppComponent]
  bootstrap: [AppComponent]
})
export class AppModule { }
