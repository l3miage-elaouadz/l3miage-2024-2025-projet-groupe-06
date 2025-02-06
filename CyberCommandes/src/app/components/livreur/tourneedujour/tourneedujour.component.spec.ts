import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourneedujourComponent } from './tourneedujour.component';

describe('TourneedujourComponent', () => {
  let component: TourneedujourComponent;
  let fixture: ComponentFixture<TourneedujourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TourneedujourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourneedujourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
