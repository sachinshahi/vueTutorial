import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VueJsInstanceComponent } from './vue-js-instance.component';

describe('VueJsInstanceComponent', () => {
  let component: VueJsInstanceComponent;
  let fixture: ComponentFixture<VueJsInstanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VueJsInstanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VueJsInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
