export interface PhysicalProduct {
  childCategorries: string;
  nameOfProduct: string;
  price: number;
  whereToBuy: string;
  date: string;
  // * 추가하기 할 때 당일 날짜 자동으로 되어있게끔
  ImgPath: string;
  memo: string;
}

export type phonePlan = Pick<PhysicalProduct, 'whereToBuy' | 'price' | 'memo'>;

export type RorTfee = Pick<PhysicalProduct, 'price' | 'memo'>;

export type monthlyService = Pick<
  PhysicalProduct,
  'whereToBuy' | 'price' | 'memo'
>;

interface ParentCategories {
  clothes: PhysicalProduct[];
  foods: PhysicalProduct[];
  furnitures: PhysicalProduct[];
  homeAppliances: PhysicalProduct[];
  toiletries: PhysicalProduct[];
  cleaningTools: PhysicalProduct[];
  miscItems: PhysicalProduct[];
  phonePlans: phonePlan[];
  transFee: RorTfee[];
  taxes: RorTfee[];
  monthlyServices: monthlyService[];
  medicines: PhysicalProduct[];
}

interface ProductState {
  parentCategories: ParentCategories;
  currentParentCategory: string;
  currentChildCategory: string;
}

const initialState: ProductState = {
  parentCategories: {
    clothes: [],
    foods: [],
    furnitures: [],
    homeAppliances: [],
    toiletries: [],
    cleaningTools: [],
    miscItems: [],
    phonePlans: [],
    transFee: [],
    taxes: [],
    monthlyServices: [],
    medicines: [],
  },
  currentParentCategory: '',
  currentChildCategory: '',
};

const ADD_ITEMS = 'myLedger/ADD_ITEMS' as const;

export const addItems = (
  item: PhysicalProduct | RorTfee | monthlyService | phonePlan,
) => {
  return {
    type: ADD_ITEMS,
    payload: item,
  };
};

type ProductAction = ReturnType<typeof addItems>;

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
    default: {
      newState = { ...state };
    }
  }
  return newState;
};
