import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSmartphoneComponent } from './add-Smartphone.component';

describe('AddSmartphoneComponent', () => {
  let component: AddSmartphoneComponent;
  let fixture: ComponentFixture<AddSmartphoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSmartphoneComponent]
    });
    fixture = TestBed.createComponent(AddSmartphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
