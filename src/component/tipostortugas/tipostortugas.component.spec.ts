import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipostortugasComponent } from './tipostortugas.component';

describe('TipostortugasComponent', () => {
  let component: TipostortugasComponent;
  let fixture: ComponentFixture<TipostortugasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipostortugasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipostortugasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
