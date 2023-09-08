import { Component, OnInit, HostListener } from '@angular/core';
import { Covid19StatisticsService } from 'src/app/services/covid-19-statistics.service';

@Component({
  selector: 'app-vaccination-details',
  templateUrl: './vaccination-details.component.html',
  styleUrls: ['./vaccination-details.component.css']
})
export class VaccinationDetailsComponent implements OnInit  {

  chosenCountry: string;
  isCountryChosen: boolean = false;
  countryName: any;
  vaccData: Array<any> = [];;
  countryFlag: any;

  srcWidth: any;
  isMobile: boolean;

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

  ngOnInit(): void {
    this.getCountryName();
  }

  onSelectCountryName(name: any) {
    this.chosenCountry = name.target.value;
    this.isCountryChosen = true;
    console.log('chosenCountry: ', this.chosenCountry);
  }

  getCountryName() {
    this.covid19StatisticsService.getCountryData().subscribe(response => {
      this.countryName = response.data.map((countryName: any) => countryName.name);
      console.log('countryName>>> ', this.countryName);
    })
  }

  getStatistics(country: string) {
    let lastdays = 2;
    let fullData = true;
    this.covid19StatisticsService.getVaccinationDetails(country, lastdays, fullData).subscribe(data => {
      let freshData: any = data;
      console.log('freshData: ', freshData);
      this.vaccData = new Array();
      this.vaccData.push(freshData.timeline[0]);
      console.log('vaccData: ', this.vaccData);
    }, (err) => {
      console.log('err: ', err);
      alert(err.error.message);
    }, () => {
      console.log('<<<getStatistics completes>>>');
    });
  }

  getCountryFlag(country: string) {
    this.covid19StatisticsService.getDataByCountry(country).subscribe(response => {
      let data: Array<any> = [];
      data.push(response)
      this.countryFlag = data.map((flag) => flag.countryInfo.flag);
      console.log('countryFlag: ', this.countryFlag);
    }, (err) => {
      console.log('err: ', err);
      // alert(err.error.message);
    });
  }

  viewVaccinationData() {
    console.log('viewStats');
    setTimeout(() => {
      this.getCountryFlag(this.chosenCountry)
      this.getStatistics(this.chosenCountry);
    }, 0);
  }

  validation() {
    if (this.isCountryChosen == true) {
      return true;
    } else {
      return false;
    }
  }

}
