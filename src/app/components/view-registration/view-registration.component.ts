import { Component, OnInit } from '@angular/core';
import { BikeService } from 'src/app/services/bike.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.css']
})
export class ViewRegistrationComponent implements OnInit {

  public bikeReg : any;

  constructor(private bikeService: BikeService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getBikeReg(this.route.snapshot.params.id)
  }

  getBikeReg(id:number){
    this.bikeService.getBike(id).subscribe(
      data => {
        this.bikeReg = data;
      },
      err => console.log(err),
      () => console.log('Bikes Loaded')
    )
  }

  deleteBikeReg(id: number){
    console.log(id)
    this.bikeService.deleteBikeRegistration(id).subscribe(
      data => {
        return true;
      },
      error => {
        return Observable.throw(error);
      }
    );
  }

}
