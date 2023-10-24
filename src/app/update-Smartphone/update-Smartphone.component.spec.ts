import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSmartphoneComponent } from './update-Smartphone.component';

describe('UpdateSmartphoneComponent', () => {
  let component: UpdateSmartphoneComponent;
  let fixture: ComponentFixture<UpdateSmartphoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateSmartphoneComponent]
    });
    fixture = TestBed.createComponent(UpdateSmartphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
