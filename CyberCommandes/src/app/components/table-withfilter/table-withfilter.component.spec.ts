import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWithfilterComponent } from './table-withfilter.component';

describe('TableWithfilterComponent', () => {
  let component: TableWithfilterComponent;
  let fixture: ComponentFixture<TableWithfilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableWithfilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableWithfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
