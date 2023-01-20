import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbrirdialogComponent } from './abrirdialog.component';

describe('AbrirdialogComponent', () => {
  let component: AbrirdialogComponent;
  let fixture: ComponentFixture<AbrirdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbrirdialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbrirdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
