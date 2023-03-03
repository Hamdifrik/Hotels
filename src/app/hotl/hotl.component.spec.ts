import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotlComponent } from './hotl.component';

describe('HotlComponent', () => {
  let component: HotlComponent;
  let fixture: ComponentFixture<HotlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
