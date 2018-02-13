import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPartnersComponent } from './about-partners.component';

describe('AboutPartnersComponent', () => {
  let component: AboutPartnersComponent;
  let fixture: ComponentFixture<AboutPartnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutPartnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
