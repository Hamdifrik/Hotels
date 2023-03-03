import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { HotlComponent } from './hotl/hotl.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import{HttpClientModule} from '@angular/common/http';
import { HommeComponent } from './homme/homme.component';
import { HotelDetailComponent } from './hotl/hotel-detail/hotel-detail.component';
import { RouterModule } from '@angular/router';
import { HotelDetailGuard } from './hotl/hotel-detail.guard';

registerLocaleData(localeFr,'fr');



@NgModule({
  declarations: [
    AppComponent,
    HotlComponent,
    StarRatingComponent,
    HommeComponent,
    HotelDetailComponent ,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'homme',component:HommeComponent},
      {path:'',redirectTo: 'homme',pathMatch:'full'},
      {path: 'hotels/:id',component:HotelDetailComponent,
    canActivate:[HotelDetailGuard]},
      {path: 'hotels',component:HotlComponent},
      {path:'**',redirectTo: 'homme',pathMatch:'full'}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
