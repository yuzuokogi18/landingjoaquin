import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteresantesComponent } from './interesantes.component';

describe('InteresantesComponent', () => {
  let component: InteresantesComponent;
  let fixture: ComponentFixture<InteresantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteresantesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteresantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
