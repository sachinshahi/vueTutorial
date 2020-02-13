import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersAndMixinsComponent } from './filters-and-mixins.component';

describe('FiltersAndMixinsComponent', () => {
  let component: FiltersAndMixinsComponent;
  let fixture: ComponentFixture<FiltersAndMixinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltersAndMixinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersAndMixinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
