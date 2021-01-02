import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingfirebaseComponent } from './usingfirebase.component';

describe('UsingfirebaseComponent', () => {
  let component: UsingfirebaseComponent;
  let fixture: ComponentFixture<UsingfirebaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsingfirebaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingfirebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
