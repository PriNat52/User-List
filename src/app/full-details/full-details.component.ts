import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-full-details',
  templateUrl: './full-details.component.html',
  styleUrls: ['./full-details.component.css'],
})
export class FullDetailsComponent implements OnInit {
  @Input() name!: string;

  @Output() details: EventEmitter<any> = new EventEmitter();

  fullAdress: any = [];
  click: any;

  constructor(private service: DetailsService) {}

  ngOnInit() {}

  onDetails(name: any) {
    this.service
      .fullDetails(name)
      .pipe(
        map((obj: any) => {
          const nameList = obj
            .map((ele) => {
              if (ele.name === name) {
                return {
                  username: ele.username,
                  email: ele.email,
                  street: ele.address.street,
                  suite: ele.address.suite,
                  city: ele.address.city,
                  zip: ele.address.zipcode,
                };
              }
            })
            .filter((ele: any) => ele);
          return nameList;
        }),
        tap((nameList: any) => {
          this.fullAdress = [...nameList];
          this.details.emit(this.fullAdress[0]);
        })
      )
      .subscribe();
  }
}
