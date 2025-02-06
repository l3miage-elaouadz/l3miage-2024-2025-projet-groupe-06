import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanfierunejourneeComponent } from './planfierunejournee.component';

describe('PlanfierunejourneeComponent', () => {
  let component: PlanfierunejourneeComponent;
  let fixture: ComponentFixture<PlanfierunejourneeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanfierunejourneeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanfierunejourneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
