import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RencherirComponent } from './rencherir.component';

describe('RencherirComponent', () => {
  let component: RencherirComponent;
  let fixture: ComponentFixture<RencherirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RencherirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RencherirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
