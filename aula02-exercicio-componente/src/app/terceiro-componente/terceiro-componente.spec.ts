import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerceiroComponente } from './terceiro-componente';

describe('TerceiroComponente', () => {
  let component: TerceiroComponente;
  let fixture: ComponentFixture<TerceiroComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerceiroComponente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerceiroComponente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
