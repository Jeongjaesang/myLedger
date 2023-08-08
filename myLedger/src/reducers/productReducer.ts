export interface PhysicalProduct {
  productId: number;
  childCategory: string;
  nameOfProduct: string;
  price: number;
  whereToBuy: string;
  date: string;
  // * 추가하기 할 때 당일 날짜 자동으로 되어있게끔
  ImgPath: string;
  memo: string;
}

export type phonePlan = Pick<
  PhysicalProduct,
  'productId' | 'whereToBuy' | 'price' | 'memo'
>;

export type RorTfee = Pick<PhysicalProduct, 'productId' | 'price' | 'memo'>;

export type monthlyService = Pick<
  PhysicalProduct,
  'productId' | 'whereToBuy' | 'price' | 'memo'
>;

export interface childCategories {
  [name: string]: // 긴 바지
  PhysicalProduct[] | phonePlan[] | RorTfee[] | monthlyService[];
}

export interface ParentUnit {
  parentCategoryId: number;
  name: string;
  imgPath: string;
  childCategories: childCategories;
}

export interface ParentCategories {
  [key: string]: ParentUnit;
  clothes: ParentUnit;
  foods: ParentUnit;
  furnitures: ParentUnit;
  homeAppliances: ParentUnit;
  toiletries: ParentUnit;
  cleaningTools: ParentUnit;
  miscItems: ParentUnit;
  phonePlans: ParentUnit;
  transFee: ParentUnit;
  taxes: ParentUnit;
  monthlyServices: ParentUnit;
  medicines: ParentUnit;
}

let parentCategoryIdIdx = 0;

const createParentUnit = (name: string, imgPath: string): ParentUnit => {
  parentCategoryIdIdx++;
  return {
    parentCategoryId: parentCategoryIdIdx,
    name: name,
    imgPath: imgPath,
    childCategories: {},
  };
};

interface ProductState {
  parentCategories: ParentCategories;
  currentParentCategoryName: string;
  currentChildCategoryName: string;
}

const initialState: ProductState = {
  parentCategories: {
    // clothes: createParentUnit(
    //   'clothes',
    //   '/src/assets/imges/clothes-jersey-shirt-svgrepo-com.svg',
    // ),
    clothes: {
      parentCategoryId: -1,
      name: 'clothes',
      imgPath: '/src/assets/imges/clothes-jersey-shirt-svgrepo-com.svg',
      childCategories: {
        longPants: [
          {
            productId: 1,
            childCategory: 'long pants',
            nameOfProduct: '홍대 뺵 바지',
            price: 10000,
            whereToBuy: 'https://tailwindcss.com/',
            date: '2023-8-8',
            ImgPath: '',
            memo: '시험용',
          },
          {
            productId: 2,
            childCategory: 'long pants',
            nameOfProduct: '스파오 롱 팬츠',
            price: 15000,
            whereToBuy: 'https://tailwindcss.com/',
            date: '2023-8-8',
            ImgPath: '',
            memo: '시험용2',
          },
          {
            productId: 3,
            childCategory: 'long pants',
            nameOfProduct: '우리집 긴 바지',
            price: 105000,
            whereToBuy: 'https://tailwindcss.com/',
            date: '2023-8-8',
            ImgPath: '',
            memo: '시험용3',
          },
        ],

        Tshirt: [
          {
            productId: 4,
            childCategory: 'Tshirt',
            nameOfProduct: '재상이 반팔',
            price: 105000000,
            whereToBuy: 'https://tailwindcss.com/',
            date: '2023-8-8',
            ImgPath: '',
            memo: '시험용4',
          },
          {
            productId: 5,
            childCategory: 'Tshirt',
            nameOfProduct: '길거리에서 주운 반팔',
            price: 0,
            whereToBuy: 'https://tailwindcss.com/',
            date: '2023-8-8',
            ImgPath: '',
            memo: '시험용5',
          },
        ],
      },
    },
    foods: createParentUnit('foods', '/src/assets/imges/lunch-svgrepo-com.svg'),
    furnitures: createParentUnit(
      'furnitures',
      '/src/assets/imges/furniture-house-living-45-svgrepo-com.svg',
    ),
    homeAppliances: createParentUnit(
      'home appliances',
      '/src/assets/imges/gadget-svgrepo-com.svg',
    ),
    toiletries: createParentUnit(
      'toiletries',
      '/src/assets/imges/toiletries-svgrepo-com (1).svg',
    ),
    cleaningTools: createParentUnit(
      'cleaning tools',
      '/src/assets/imges/cleaning-outline-red-svgrepo-com.svg',
    ),
    miscItems: createParentUnit(
      'misc items',
      '/src/assets/imges/miscellaneous-collection-svgrepo-com.svg',
    ),
    phonePlans: createParentUnit(
      'phone plans',
      '/src/assets/imges/smartphone-svgrepo-com.svg',
    ),
    transFee: createParentUnit(
      'trans fee',
      '/src/assets/imges/filled-railway-subway-svgrepo-com.svg',
    ),
    taxes: createParentUnit(
      'taxes',
      '/src/assets/imges/tax-returns-svgrepo-com.svg',
    ),
    monthlyServices: createParentUnit(
      'monthly Services',
      '/src/assets/imges/calendar-payment-schedule-svgrepo-com.svg',
    ),
    medicines: createParentUnit(
      'medicines',
      '/src/assets/imges/medicine-bottle-svgrepo-com.svg',
    ),
  },
  currentParentCategoryName: '',
  currentChildCategoryName: '',
};

const ADD_ITEMS = 'myLedger/ADD_ITEMS' as const;

const SET_PARENTCATEGORY = 'myLedger/SET_PARENTCATEGORY' as const;

export const setParentCategory = (parentCategoryName: string) => {
  return {
    type: SET_PARENTCATEGORY,
    payload: parentCategoryName,
  };
};
// PCUnit을 클릭하면, 해당 PCUnit의 이름이 state.currentParentCategories가 된다.

export const addItems = (
  item: PhysicalProduct | RorTfee | monthlyService | phonePlan,
) => {
  return {
    type: ADD_ITEMS,
    payload: item,
  };
};

type ProductAction =
  | ReturnType<typeof addItems>
  | ReturnType<typeof setParentCategory>;

export const ProductReducer = (
  state: ProductState = initialState,
  action: ProductAction,
): ProductState => {
  let newState: ProductState;
  switch (action.type) {
    case ADD_ITEMS: {
      newState = { ...state };
      break;
    }

    case SET_PARENTCATEGORY: {
      newState = { ...state, currentParentCategoryName: action.payload };
      break;
    }

    default: {
      newState = { ...state };
    }
  }
  return newState;
};
