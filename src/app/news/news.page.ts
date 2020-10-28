import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DeliverPage } from '../deliver/deliver.page';
@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  @Input() name : '';
  data: any;
  
  constructor(private route: ActivatedRoute, private router: Router,public navCtrl: NavController) { 
    this.route.queryParams.subscribe((params=>{
      if(this.router.getCurrentNavigation().extras.state){
          this.data = this.router.getCurrentNavigation().extras.state.user;
      }
    }))

  }
  onGoDeliver() {
    
  }

  ngOnInit() {
  }

}
