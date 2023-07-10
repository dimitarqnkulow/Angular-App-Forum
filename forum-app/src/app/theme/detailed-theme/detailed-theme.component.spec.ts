import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedThemeComponent } from './detailed-theme.component';

describe('DetailedThemeComponent', () => {
  let component: DetailedThemeComponent;
  let fixture: ComponentFixture<DetailedThemeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailedThemeComponent]
    });
    fixture = TestBed.createComponent(DetailedThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
