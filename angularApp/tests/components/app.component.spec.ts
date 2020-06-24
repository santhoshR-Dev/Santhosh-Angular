// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { FormsModule } from '@angular/forms';
// import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';

// import { Configuration } from '../../app/app.constants';
// import { ThingService } from '../../app/core/services/thing-data.service';
// //import { CountryComponent } from '../../app/countries/components/country.component';
// import { AppComponent } from '../../app/app.component';

// describe('HomeComponent', () => {

//     let fixture: ComponentFixture<AppComponent>;
//     let comp: AppComponent;

//     beforeEach(async () => {
//         TestBed.configureTestingModule({
//             schemas: [NO_ERRORS_SCHEMA],
//             imports: [
//                 FormsModule,
//                 HttpClientTestingModule,
//                 CUSTOM_ELEMENTS_SCHEMA
//             ],
//             providers: [
//                 ThingService,
//                 Configuration
//             ],
//             declarations: [AppComponent]
//         }).compileComponents();
//     });

//     beforeEach(() => {
//         fixture = TestBed.createComponent(AppComponent);
//         comp = fixture.componentInstance;
//     });

//     it('on init should get all things', async () => {
//         const http = TestBed.get(HttpTestingController);
//         const customConfiguration = TestBed.get(Configuration);
//         const expectedResponse = [{ id: 1, name: 'NetCore' }];

//         const url = customConfiguration.Server + 'api/things/';

//         fixture.detectChanges();

//         http.expectOne(url).flush(expectedResponse);

//         fixture.whenStable().then(() => {
//             expect(true).toEqual(true);
//         });
//     })
// });
