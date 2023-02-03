import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncheresPropreComponent } from './encheres-propre.component';

describe('EncheresPropreComponent', () => {
  let component: EncheresPropreComponent;
  let fixture: ComponentFixture<EncheresPropreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncheresPropreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncheresPropreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
