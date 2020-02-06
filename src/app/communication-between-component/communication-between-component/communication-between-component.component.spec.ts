import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationBetweenComponentComponent } from './communication-between-component.component';

describe('CommunicationBetweenComponentComponent', () => {
  let component: CommunicationBetweenComponentComponent;
  let fixture: ComponentFixture<CommunicationBetweenComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunicationBetweenComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicationBetweenComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
