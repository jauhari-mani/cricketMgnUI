import { Component, OnInit } from '@angular/core';
import { MonthlyChargers } from 'src/app/interfaces/monthly-chargers';
import { PlayerServiceService } from 'src/app/services/player-service.service';

@Component({
  selector: 'app-monthly-charges',
  templateUrl: './monthly-charges.component.html',
  styleUrls: ['./monthly-charges.component.less']
})
export class MonthlyChargesComponent implements OnInit {

  monthlyObject : MonthlyChargers = new MonthlyChargers();

  constructor(private playerService : PlayerServiceService) { }

  ngOnInit(): void {
  }

  formFiled(formValue : any){
    this.monthlyObject.month = formValue.month;
    this.monthlyObject.charges = formValue.monthlyCharges;
    console.log(this.monthlyObject);
    return true;
  }

}
