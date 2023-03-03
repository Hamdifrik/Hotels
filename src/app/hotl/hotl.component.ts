import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { IHotel } from './hotl';
import { HotlService } from './hotl.service';

@Component({
  selector: 'app-hotl',
  templateUrl: './hotl.component.html',
  styleUrls: ['./hotl.component.css']
})
export class HotlComponent implements OnInit {
  ngOnInit(){
    this.hotelService.getHotels().subscribe({
      next:hotels =>{
        this.hotels=hotels;
   
      },
      error:err=>this.errMsg=err
    }
      
    );
    this.filtereDHotels=this.hotels;
    
  }
  
public title='List Hotel';


public hotels:IHotel[]=[
  {
    HotelId: 1,
    HotelName: "our-seasons-hotel-tunis gammart",
    description:"belle vue au bord de la mer ",
    prix:210,
    imageUrl:'assets/image/four-seasons-hotel-tunis.jpg',
    link:'https://www.tripadvisor.fr/Hotel_Review-g297942-d13144748-Reviews-Four_Seasons_Hotel_Tunis-Gammarth_Tunis_Governorate.html',
    rating:3.5
    
  },
  {
    HotelId: 2,
    HotelName: "le-palace-hotel Marsa",
    description:"bienvenue a tous  ",
    prix:110,
    imageUrl:'assets/image/le-palace-hotel.jpg',
    link:'https://www.tripadvisor.fr/Hotel_Review-g297946-d1178492-Reviews-Le_Palace_Hotel-La_Marsa_Tunis_Governorate.html',
    rating:2.5
    
  },
  {
    HotelId: 5,
    HotelName: "Sousse_Palace_",
    description:"sousse belle vue   ",
    prix:400,
    imageUrl:'assets/image/Sousse_Palace_.jpg',
    link:'https://tn.tunisiebooking.com/detail_hotel_433/',
    rating:5
    
  },
  {
    HotelId: 4,
    HotelName: "Golden_Yasmine_Mehari_Hammamet_",
    description:"belle vue au bord de la mer ",
    prix:280,
    imageUrl:'assets/image/Golden_Yasmine_Mehari_Hammamet_.jpg',
    link:'https://tn.tunisiebooking.com/detail_hotel_396/',

    rating:4 
  }
  
];
public showBadge:boolean | undefined;


public filtereDHotels: IHotel[]=[]; 

public receivedRating :string | undefined;
public errMsg:string | undefined;
constructor(private hotelService: HotlService){}


private _hotelFiltre= '';

public toggleIsNewBade():void{
  this.showBadge= !this.showBadge;
  
}
public get hotelFiltre():string{
  return this._hotelFiltre;
}
public set hotelFiltre(filtre:string){
   this._hotelFiltre=filtre;
   this.filtereDHotels=this.hotelFiltre ? this.filterHotels(this.hotelFiltre):this.hotels;
}
public receivRatingClicked(message:string){
  this.receivedRating=message;

}
private filterHotels(criteria:string):IHotel[]{
  criteria=criteria.toLocaleLowerCase();
  const res=this.hotels.filter(
    (hotel:IHotel)=>hotel.HotelName.toLocaleLowerCase().indexOf(criteria) != -1
  );
  return res;
}

}
