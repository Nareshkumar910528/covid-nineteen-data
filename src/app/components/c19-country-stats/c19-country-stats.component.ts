import { Component, Input, OnInit, HostListener } from '@angular/core';
import { Covid19StatisticsService } from 'src/app/services/covid-19-statistics.service';

@Component({
    selector: 'app-c19-country-stats',
    templateUrl: './c19-country-stats.component.html',
    styleUrls: ['./c19-country-stats.component.css']
})

export class C19CountryStatsComponent implements OnInit {

    srcWidth: any
    isMobile: boolean;

    @Input('country-stats') countryStats: any
    @Input('country-flag') countryFlag: any

    @HostListener('window:resize', ['$event'])
    getScreenSize(event?: any) {
      this.srcWidth = window.innerWidth;
      if (window.innerWidth < 768) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    }

    constructor(private covid19StatisticsService: Covid19StatisticsService) { 
        this.getScreenSize();
    }

    ngOnInit() {
        console.log('countryStats: ', this.countryStats);
        console.log('countryFlag: ', this.countryFlag);
    }
}