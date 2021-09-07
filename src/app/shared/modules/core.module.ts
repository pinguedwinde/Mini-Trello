import { LayoutModule } from './layout.module';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const MODULES = [LayoutModule, BrowserAnimationsModule];

@NgModule({
  declarations: [],
  imports: MODULES,
  exports: MODULES,
})
export class CoreModule {}
