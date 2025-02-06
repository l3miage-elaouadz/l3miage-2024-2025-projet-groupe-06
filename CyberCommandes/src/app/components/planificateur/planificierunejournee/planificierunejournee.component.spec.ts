import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanificierunejourneeComponent } from './planificierunejournee.component';

describe('PlanificierunejourneeComponent', () => {
  let component: PlanificierunejourneeComponent;
  let fixture: ComponentFixture<PlanificierunejourneeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanificierunejourneeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanificierunejourneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
