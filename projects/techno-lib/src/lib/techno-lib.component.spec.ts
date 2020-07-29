import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnoLibComponent } from './techno-lib.component';

describe('TechnoLibComponent', () => {
  let component: TechnoLibComponent;
  let fixture: ComponentFixture<TechnoLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnoLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnoLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
