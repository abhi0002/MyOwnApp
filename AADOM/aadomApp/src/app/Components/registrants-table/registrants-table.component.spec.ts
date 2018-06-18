import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrantsTableComponent } from './registrants-table.component';

describe('RegistrantsTableComponent', () => {
  let component: RegistrantsTableComponent;
  let fixture: ComponentFixture<RegistrantsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrantsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrantsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
