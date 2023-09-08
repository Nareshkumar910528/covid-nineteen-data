import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Covid19StatisticsService } from '../services/covid-19-statistics.service';

@Injectable({
  providedIn: 'root'
})
export class OverallDataResolver implements Resolve<boolean> {

  constructor(private covid19StatisticsService: Covid19StatisticsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    console.log('calling getOverallData() in OverallDataResolver --> ', route);

    return this.covid19StatisticsService.getOverallData().pipe(
      catchError(error => {
      console.error('resolve method return error as follow --> ', error);
      return of('No data available at the moment');
    }));
  }
}
