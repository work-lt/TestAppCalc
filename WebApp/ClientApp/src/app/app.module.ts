import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';

import { CalculatorComponent } from './calculator/calculator.component';
import { AboutComponent } from './about/about.component';


const appRoutes: Routes = [
  
  {
    path: '',
    component: CalculatorComponent,
    data: { title: 'Calculator' }
  },
  {
    path: 'Calculator',
    component: CalculatorComponent,
    data: { title: 'Calculator' }
  },
  {
    path: 'About',
    component: AboutComponent,
    data: { title: 'About' }
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },

];

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
