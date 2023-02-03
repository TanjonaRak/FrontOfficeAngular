import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheEnchereComponent } from './fiche-enchere.component';

describe('FicheEnchereComponent', () => {
  let component: FicheEnchereComponent;
  let fixture: ComponentFixture<FicheEnchereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicheEnchereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheEnchereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
