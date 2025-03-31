import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoCatalogoComponent } from './curso-catalogo.component';

describe('CursoCatalogoComponent', () => {
  let component: CursoCatalogoComponent;
  let fixture: ComponentFixture<CursoCatalogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursoCatalogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursoCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
