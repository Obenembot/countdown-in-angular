import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingFBComponent } from './using-fb.component';

describe('UsingFBComponent', () => {
  let component: UsingFBComponent;
  let fixture: ComponentFixture<UsingFBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsingFBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingFBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
