import { LayoutModule } from './shared/modules/layout.module';
import { CoreModule } from './shared/modules/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { DragDirective } from './shared/directives/drag.directive';

@NgModule({
  declarations: [AppComponent, ListComponent, DragDirective],
  imports: [BrowserModule, FormsModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
