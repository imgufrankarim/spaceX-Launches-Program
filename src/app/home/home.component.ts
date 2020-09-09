import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name = 'Gufran Karim';
  public spaceapi: any;
  public successlaunch: any;
  public failedLaunchData : any;
  public successfullLaunchData: boolean = false;
  public loadUnSuccessfulLaunch: boolean = false;
  public loadSuccessLandData: boolean = false;
  public loadFailedLandData: boolean = false;
  public loadAllData: boolean = false;
  public displayYearlyData : boolean = false;
  public successLandData: any;
  public failedLandData: any;
  public yearlyData: any;
  public noRecordMsg: string;

  constructor(private spacexapi: UtilityService) { }

  public dispSpacedata() {
    this.spacexapi.getAllApi().subscribe(data => {
      this.spaceapi = data;
      this.loadAllData = true;
    });
  }

  // Dsiplay Launch Data
  public launchSuccess(launchFlag) { 
    this.spacexapi.getLaunchData(launchFlag).subscribe(data => {
      this.successlaunch = data;
      this.successfullLaunchData = true;
      this.loadAllData = false;
      this.loadUnSuccessfulLaunch = false;
    });
  }

  
  // Dsplay Land Data
  public landSuccess(landFlag) {
    this.spacexapi.getLandData(landFlag).subscribe(data => {
      this.successLandData = data;
      this.loadSuccessLandData = true;
      this.successfullLaunchData = false;
      this.loadAllData = false;
      this.loadUnSuccessfulLaunch = false;
    });
  }

  // Dsiplay yearly data
  public loadYearlyData(year) { 
    this.spacexapi.getYearlyData(year).subscribe(data => {
      this.yearlyData = data;
      if(this.yearlyData.length == 0){
        this.noRecordMsg = `No Record Found ${year}`;
      }
      this.loadSuccessLandData = false;
      this.displayYearlyData  = true;
      this.successfullLaunchData = false;
      this.loadAllData = false;
      this.loadUnSuccessfulLaunch = false;
    });
  }

  ngOnInit() {
    this.dispSpacedata();
  }

}
