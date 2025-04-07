import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent, MainComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // BuilderModule.forRoot('b7ec17402f8e4f15a7bf9f943a2a88dc'),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
