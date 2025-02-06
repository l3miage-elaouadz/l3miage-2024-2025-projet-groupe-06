import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstruireunejourneeComponent } from './construireunejournee.component';

describe('ConstruireunejourneeComponent', () => {
  let component: ConstruireunejourneeComponent;
  let fixture: ComponentFixture<ConstruireunejourneeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConstruireunejourneeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConstruireunejourneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
