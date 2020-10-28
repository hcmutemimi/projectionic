import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { NavController,NavParams } from '@ionic/angular';

@Component({
  selector: 'app-deliver',
  templateUrl: './deliver.page.html',
  styleUrls: ['./deliver.page.scss'],
})
export class DeliverPage implements OnInit {
  data: any;
  
  constructor( private route: ActivatedRoute, private router: Router) {
   
    this.route.queryParams
    .subscribe(params=> { 
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
