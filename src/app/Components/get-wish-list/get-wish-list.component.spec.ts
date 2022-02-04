import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetWishListComponent } from './get-wish-list.component';

describe('GetWishListComponent', () => {
  let component: GetWishListComponent;
  let fixture: ComponentFixture<GetWishListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetWishListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetWishListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
