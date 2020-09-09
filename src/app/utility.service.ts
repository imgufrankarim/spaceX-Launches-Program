import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  constructor(private http: HttpClient) { }
  
// Get all Launches data
  public getAllApi() {
    const dataURL = 'https://api.spaceXdata.com/v3/launches?limit=10';
    return this.http.get(dataURL);

  }

// Get All Success or Failed Launch Data
  public getLaunchData(launchFlag) {
    const launchURL = `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${launchFlag}`;
    return this.http.get(launchURL);
  }



// Get All Success and Failed Land Data
public getLandData(landFlag) {
  const landURL = `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=${landFlag}`;
  return this.http.get(landURL);
}


// Get All yearly data
  public getYearlyData(year) {
    const yearlyData = `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=${year}`
    return this.http.get(yearlyData);
  }
}
