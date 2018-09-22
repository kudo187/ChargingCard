import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardViettelComponent } from './card-viettel.component';

describe('CardVietelComponent', () => {
  let component: CardViettelComponent;
  let fixture: ComponentFixture<CardViettelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardViettelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardViettelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
