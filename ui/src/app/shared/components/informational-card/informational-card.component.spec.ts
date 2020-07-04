import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationalCardComponent } from './informational-card.component';

describe('InformationalCardComponent', () => {
  let component: InformationalCardComponent;
  let fixture: ComponentFixture<InformationalCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationalCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
