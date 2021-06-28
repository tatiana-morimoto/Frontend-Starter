import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { StoreModule } from '@ngrx/store';
import { AppStore } from '../../store/store.model';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { of } from 'rxjs';
import { ShoppingComponent } from './shopping.component';
import { productsReducer } from '../../store/products/products.reducer';
import { getProducts } from '../../store/products/products.selectors';
import { ReactiveFormsModule } from '@angular/forms';
import { getCarts } from '../../store/carts/carts.selector';

describe('ShoppingComponent', () => {
  let component: ShoppingComponent;
  let fixture: ComponentFixture<ShoppingComponent>;
  let store: MockStore<AppStore>;
  const productMock = {
    product: {
      id: 123,
      name: 'Aize',
      description: 'Aize',
      defaultImage: '',
      images: [],
      price: 2000,
      discount: 1000,
    },
  };

  const cartMock = {
    cart: {
      id: 123,
      products: [
        { id: 213, quantity: 1000 },
        { id: 321, quantity: 2000 },
      ],
    },
  };

  const routeStub = {
    data: of({ products: [productMock, productMock] }),
    paramMap: of(convertToParamMap({ id: 1 })),
  };

  const router = {
    navigate: jasmine.createSpy('navigate'),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingComponent],
      imports: [
        StoreModule.forRoot({ products: productsReducer }),
        RouterTestingModule,
        ReactiveFormsModule,
      ],
      providers: [
        provideMockStore({
          initialState: productMock,
          selectors: [
            { selector: getProducts, value: productMock.product },
            { selector: getCarts, value: cartMock.cart },
          ],
        }),
        { provide: ActivatedRoute, useValue: routeStub },
        { provide: Router, useValue: router },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(ShoppingComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => expect(component).toBeTruthy());
});
