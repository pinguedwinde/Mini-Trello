import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

const MODULES = [CommonModule, FlexLayoutModule, MaterialModule];

@NgModule({
  declarations: [],
  imports: MODULES,
  exports: MODULES,
})
export class LayoutModule {}
