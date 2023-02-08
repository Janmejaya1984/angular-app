import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScdcComponent } from './scdc.component';

describe('ScdcComponent', () => {
  let component: ScdcComponent;
  let fixture: ComponentFixture<ScdcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScdcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScdcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
