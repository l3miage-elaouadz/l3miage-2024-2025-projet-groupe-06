import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCommandesComponent } from './filter-commandes.component';

describe('FilterCommandesComponent', () => {
  let component: FilterCommandesComponent;
  let fixture: ComponentFixture<FilterCommandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterCommandesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterCommandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
