import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DetailsService } from './details.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FullDetailsComponent } from './full-details/full-details.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent, FullDetailsComponent],
  bootstrap: [AppComponent],
  providers: [DetailsService],
})
export class AppModule {}
