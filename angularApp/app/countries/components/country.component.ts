import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CountryState } from '../store/country.state';
import { initialState } from '../store/country.reducer';
import * as CountryActions from '../store/country.action';
import { Region } from './../../models/region';

@Component({
    selector: 'app-country-component',
    templateUrl: './country.component.html',
    styleUrls: ['./country.component.scss']
})

export class CountryComponent implements OnInit {

    public async: any;

    regionsState$: Observable<CountryState>;
    selectedRegion: string;
    countryList: any;
    country: any;
    regionList: any;

    constructor(private store: Store<any>) {
        this.regionsState$ = this.store.select<CountryState>((state: any) => state.world);
    }

    ngOnInit() {
        this.regionsState$.subscribe((d: any) => {
            this.countryList = d.regions.filter((data: any) => data.name === this.selectedRegion)[0];
        });
        this.regionList = initialState.regions;
    }

    public getCountries(event: Event) {
        const target = event['target'] as any;
        if (target['value']) {
            this.selectedRegion = target['value'];
            this.store.dispatch(new CountryActions.SelectRegionAction({ name: this.selectedRegion, countries: [] }));
        } else {
            this.countryList = [];
            this.country = null;
        }
    }

    getCountryRecords(event: Event) {
        const target = event['target'] as any
        if (target['value']) {
            this.country = this.countryList.countries.filter((data: any) => data.name === target['value'])[0];
        } else {
            this.country = null;
        }
    }

    public collapse(region: Region) {
        this.store.dispatch(new CountryActions.CollapseRegionAction(region));
    }
}
