import { Component, OnInit, VERSION } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { DetailsService } from './details.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  nameList: any = [];
  address: any;

  constructor(private service: DetailsService) {}

  ngOnInit() {
    this.nameList = this.service
      .details()
      .pipe(
        map((obj: any) => {
          this.nameList = obj.map((ele) => {
            return { name: ele.name };
          });
        })
      )
      .subscribe();
  }

  fullDetails(fullDetails: any) {
    this.address = fullDetails;
  }
}
