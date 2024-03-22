import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Cont1Component } from './cont1/cont1.component';
import { Cont2Component } from './cont2/cont2.component';
import { Cont3Component } from './cont3/cont3.component';
import { Cont4Component } from './cont4/cont4.component';
import { Cont5Component } from './cont5/cont5.component';
import { Cont6Component } from './cont6/cont6.component';
import { Cont7Component } from './cont7/cont7.component';
import { Cont8Component } from './cont8/cont8.component';
import { Cont10Component } from './cont10/cont10.component';
import { Cont9Component } from './cont9/cont9.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestPipe } from './test.pipe';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GalaryComponent } from './galary/galary.component';
import { FormComponent } from './form/form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { provideHttpClient, withFetch } from '@angular/common/http';






const routes:Routes = [
{
  path:"",redirectTo:'/home',pathMatch:'full'
},
{
  path:"home", component: HomeComponent
},
{
  path:"AboutUs", component:AboutUsComponent,
},
{
  path:"ContactUs",component:ContactUsComponent,
},
{
  path:"Galary", component:GalaryComponent,
},
{
  path:"**", component:NotFoundComponent,
}

]

@NgModule({
  declarations: [
    AppComponent,
    Cont1Component,
    Cont2Component,
    Cont3Component,
    Cont4Component,
    Cont5Component,
    Cont6Component,
    Cont7Component,
    Cont8Component,
    Cont10Component,
    Cont9Component,
    AboutUsComponent,
    HomeComponent,
    TestPipe,
    ContactUsComponent,
    GalaryComponent,
    FormComponent,
    NotFoundComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,








  ],
  providers: [
    provideClientHydration(),provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
