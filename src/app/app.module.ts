import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BuilderModule } from '@builder.io/angular';
import { environment } from 'src/environments/environment';
import { LeadFormComponent } from './lead-form/lead-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, LeadFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BuilderModule.forRoot(environment.builderApiKey),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
