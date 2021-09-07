import { LayoutModule } from './shared/modules/layout.module';
import { CoreModule } from './shared/modules/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
