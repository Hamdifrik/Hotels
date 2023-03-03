import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { IHotel } from '../hotl';
import { HotlService } from '../hotl.service';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit {


  public hotel: IHotel= <IHotel>{};
  
  constructor(
    private route:ActivatedRoute,
    private hotelService:HotlService,
    private router:Router

  ){}
  public packToListe(){
    this.router.navigate(['/hotels']);

  }
  
  ngOnInit() :void {
    const id:number = +this.route.snapshot.paramMap.getAll('id') ;
    this.hotelService.getHotels().subscribe((hotels:IHotel[]) => {
      /*this.l = hotels.find(hotel  => hotel.HotelId == id);
      console.log('hotel: ',this.hotel);*/
    });
  
  }


}
