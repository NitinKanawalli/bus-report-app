import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ReportService } from './report.service';
import { HttpClient } from '@angular/common/http';

describe('ReportService', () => {
  let service: ReportService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [ReportService]
  }));

  beforeEach(() => {
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ReportService);
    spyOn(service, 'readData');
  });

  it('should be created', async () => {
    const reportService: ReportService = await TestBed.inject(ReportService);
    await expect(reportService).toBeTruthy();
  });

  it('should be called to read data', async () => {
    await service.readData();
    await expect(service.readData).toHaveBeenCalled();
  });

});
