import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsideComponent } from './buttonside.component';

describe('ButtonsideComponent', () => {
  let component: ButtonsideComponent;
  let fixture: ComponentFixture<ButtonsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonsideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
