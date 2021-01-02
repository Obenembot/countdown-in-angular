import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { CountdownModule } from 'ngx-countdown'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FormsModule } from '@angular/forms'
import { RegisterComponent } from './rfs/register.component'
import { ReactiveFormsModule } from '@angular/forms'
import { TdfComponent } from './tdf/tdf.component';
import { UsingFBComponent } from './using-fb/using-fb.component';
import { VcComponent } from './vc/vc.component'


@NgModule({
  declarations: [AppComponent, RegisterComponent, TdfComponent, UsingFBComponent, VcComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountdownModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
