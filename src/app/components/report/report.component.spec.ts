import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { ReportComponent } from './report.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReportService } from 'src/app/services/report.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Observable, of } from 'rxjs';



describe('report-service calls and read data-source', () => {
  let component: ReportComponent;
  let reportService: ReportService;
  let fixture: ComponentFixture<ReportComponent>;

  let httpClient: HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ReportComponent],
      providers: [{ provide: ReportService, useValue: { readData: () => of({}) } },
        { provide: ReportComponent, useValue: { getDataFromReportService: () => of({}) } }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpClient = TestBed.inject(HttpClient);
  });


  beforeEach(() => {
    reportService = TestBed.inject(ReportService);
    spyOn(reportService, 'readData');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });

  it('should be called to read data from report-service', async () => {
    await reportService.readData();
    expect(reportService.readData).toHaveBeenCalled();
  });


});
