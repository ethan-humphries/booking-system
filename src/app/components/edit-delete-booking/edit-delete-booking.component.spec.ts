import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeleteBookingComponent } from './edit-delete-booking.component';

describe('EditDeleteBookingComponent', () => {
  let component: EditDeleteBookingComponent;
  let fixture: ComponentFixture<EditDeleteBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDeleteBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDeleteBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
