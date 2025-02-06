import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartedesuivieComponent } from './cartedesuivie.component';

describe('CartedesuivieComponent', () => {
  let component: CartedesuivieComponent;
  let fixture: ComponentFixture<CartedesuivieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartedesuivieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartedesuivieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
