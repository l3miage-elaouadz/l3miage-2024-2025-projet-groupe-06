import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargerunetourneeComponent } from './chargerunetournee.component';

describe('ChargerunetourneeComponent', () => {
  let component: ChargerunetourneeComponent;
  let fixture: ComponentFixture<ChargerunetourneeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChargerunetourneeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChargerunetourneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
