import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy/lazy.component';
import { routing } from './lazy.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [LazyComponent],
  exports: [LazyComponent]
})
export class LazyModule { }
