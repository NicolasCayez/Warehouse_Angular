import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUsersComponent } from './add-users.component';

describe('SelectUsersComponent', () => {
  let component: AddUsersComponent;
  let fixture: ComponentFixture<AddUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddUsersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
