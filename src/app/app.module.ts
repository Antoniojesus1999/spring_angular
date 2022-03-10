import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClienteComponent } from './cliente/cliente.component';
import { HttpClientModule } from '@angular/common/http';
import { ClienteService } from './cliente/cliente.service'
import { RouterModule, Routes} from '@angular/router';
import { FormComponent } from './cliente/form.component';
import { FormsModule } from '@angular/forms';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { PaginatorComponent } from './paginator/paginator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { DetalleComponent } from './cliente/detalle/detalle.component';





registerLocaleData(localeEs, 'es');

const routes :Routes =[
  { path:'', redirectTo:'/clientes', pathMatch: 'full' },
  { path: 'directiva', component:DirectivaComponent},
  { path: 'clientes', component:ClienteComponent},
  { path: 'clientes/form', component:FormComponent},
  { path: 'clientes/page/:page', component:ClienteComponent},
  { path: 'clientes/form/:id', component: FormComponent},
  { path: 'clientes/ver/:id', component: DetalleComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ClienteComponent,
    FormComponent,
    PaginatorComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatMomentDateModule
  ],
  providers: [
    ClienteService,
    {provide: LOCALE_ID, useValue: 'es' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
