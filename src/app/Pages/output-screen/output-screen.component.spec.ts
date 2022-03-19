import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputScreenComponent } from './output-screen.component';

describe('OutputScreenComponent', () => {
  let component: OutputScreenComponent;
  let fixture: ComponentFixture<OutputScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
