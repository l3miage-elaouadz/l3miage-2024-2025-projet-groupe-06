import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCommandesComponent } from './table-commandes.component';

describe('TableCommandesComponent', () => {
  let component: TableCommandesComponent;
  let fixture: ComponentFixture<TableCommandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableCommandesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableCommandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
