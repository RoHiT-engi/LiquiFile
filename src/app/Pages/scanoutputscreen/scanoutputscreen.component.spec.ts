import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanoutputscreenComponent } from './scanoutputscreen.component';

describe('ScanoutputscreenComponent', () => {
  let component: ScanoutputscreenComponent;
  let fixture: ComponentFixture<ScanoutputscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScanoutputscreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanoutputscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
