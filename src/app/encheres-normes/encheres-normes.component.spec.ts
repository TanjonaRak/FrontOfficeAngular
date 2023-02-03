import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncheresNormesComponent } from './encheres-normes.component';

describe('EncheresNormesComponent', () => {
  let component: EncheresNormesComponent;
  let fixture: ComponentFixture<EncheresNormesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncheresNormesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncheresNormesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
