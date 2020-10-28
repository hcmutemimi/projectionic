import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @Input() count = 3;
  @Input() deliver = 'giao hàng nhanh nhất';
  user = {
    name: 'hoai mi',
    address: {
      district: 'Thu Duc',
      city: 'Ho Chi Minh',
      zip: 70000
    },
    order: [
      'bread no core',
      'grill bread']
  }

  constructor(private router: Router, private dataService: DataService) { }
  onGoDeliver(){
      let navigationExtras: NavigationExtras = {
        queryParams: {
          say: JSON.stringify(this.user)
        },
      }
      this.router.navigate(['/deliver'], navigationExtras)
    }
    onGoOrder(){
      this.dataService.setData(42, this.user);
      this.router.navigateByUrl('/order/42');
    }
    onGoNews(){
      let navigationExtras: NavigationExtras = {
        state: {
          user: this.user
        },
      }
      this.router.navigate(['/news'], navigationExtras)
  
    }

  ngOnInit() {
  }

}
