import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CountryComponent } from '../../app/countries/components/country.component';

import { HttpClientTestingModule } from '@angular/common/http/testing'
import { FormsModule } from '@angular/forms';

import { Configuration } from '../../app/app.constants';
import { ThingService } from '../../app/core/services/thing-data.service';

import { Store } from '@ngrx/store';
import { StoreModule } from '@ngrx/store';

describe('CountryComponent', () => {

    let fixture: ComponentFixture<CountryComponent>;
    let comp: CountryComponent;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            schemas: [NO_ERRORS_SCHEMA],
            imports: [
                FormsModule,
                HttpClientTestingModule,
                StoreModule.forRoot({})
            ],
            providers: [
                ThingService,
                Configuration,
                Store
            ],
            declarations: [CountryComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CountryComponent);
        comp = fixture.componentInstance;
    });

    it('should test component initilization', async () => {
        expect(fixture).toBeTruthy();
        expect(comp).toBeTruthy();
    })

    it('should test ngOnInit', async () => {
        comp.ngOnInit();
        expect(comp.regionList[0].name).toEqual("Asia");
    })

    it('should test getCountries', async () => {
        comp.getCountries({ target: { value: "test" } } as any)
        expect(comp.selectedRegion).toEqual("test");
    })

    it('should test getCountries', async () => {
        comp.countryList = { countries: [{ name: "test" }] }
        comp.getCountryRecords({ target: { value: "test" } } as any)
        expect(comp.country).toEqual({ name: "test" });
    })

});
