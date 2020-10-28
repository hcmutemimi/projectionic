import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {

  data: any;
  constructor( private route: ActivatedRoute, private router: Router) {
    this.route.queryParams
    .subscribe(params=> { 
      console.log('params:', params);
      if(params && params.say){
        this.data = JSON.parse(params.say);
      }
    });
   }

  ngOnInit() {
    if(this.route.snapshot.data['say']){
      this.data = this.route.snapshot.data['say'];
    }
  }
}
