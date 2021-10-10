import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StasticsComponent } from './stastics.component';

describe('StasticsComponent', () => {
  let component: StasticsComponent;
  let fixture: ComponentFixture<StasticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StasticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StasticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
