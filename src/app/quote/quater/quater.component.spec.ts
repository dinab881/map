import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuaterComponent } from './quater.component';

describe('QuaterComponent', () => {
  let component: QuaterComponent;
  let fixture: ComponentFixture<QuaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
