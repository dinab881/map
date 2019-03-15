import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectUsStateComponent } from './select-us-state.component';

describe('SelectUsStateComponent', () => {
  let component: SelectUsStateComponent;
  let fixture: ComponentFixture<SelectUsStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectUsStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectUsStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
