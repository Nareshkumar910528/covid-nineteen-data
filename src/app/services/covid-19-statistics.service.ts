import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class Covid19StatisticsService {
    baseURL: string = "https://disease.sh/v3/covid-19";
    baseVaccineURL: string = "https://disease.sh/v3/covid-19/vaccine/coverage/countries/";

    COUNTRY_DETAIL: string = 'https://countriesnow.space/api/v0.1/countries/states';

    COUNTRY_DATA: string = '../assets/mock-countries.json';

    constructor(private http: HttpClient) { }

    getOverallData(): Observable<any> {
        let apiURL = this.baseURL + "/all";
        console.log('apiURL: ', apiURL);
        return this.http.get(apiURL);
    }

    getDataByCountry(country: string): Observable<any> {
        let apiURL = this.baseURL + "/countries/" + country;
        console.log('apiURL: ', apiURL);
        return this.http.get(apiURL);
    }

    getCountryData(): Observable<any> {
        return this.http.get(this.COUNTRY_DETAIL);
    }

    getVaccinationDetails(country: string, lastdays: number, fullData: boolean): Observable<any> {
        let apiURL = this.baseVaccineURL + country + "?lastdays=" + lastdays + "&fullData=" + fullData;
        console.log('apiURL: ', apiURL);
        return this.http.get(apiURL);
    }

    retrieveCountryData(): Observable<any> {
        return this.http.get(this.COUNTRY_DATA);
    }
}

