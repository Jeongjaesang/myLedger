import React, { useState, useEffect } from 'react';
import { childCategories } from '../reducers/productReducer';
import AddForm from './AddForm';
import CCUnit from './CCUnit';

type OwnProps = {
  childCategoriesNames: string[]; // 현재 선택된 parentCategory의 childCategory
};

const CCContainer = ({ childCategoriesNames }: OwnProps) => {
  const [addClicked, setAddClicked] = useState(false);
  const [childCategoriesArr, setChildCategoriesArr] = useState<string[]>([]);

  useEffect(() => {
    setChildCategoriesArr([...childCategoriesNames]);
  }, []);

  //  const childCategoriesArr = [];
  //  후에 추가버튼은 float으로 CCUNit들 옆에 오게 할 예정..
  return (
    <div className="m-6 ">
      <h1 className="text-2xl font-bold">
        추가하실 상품의 하위 카테고리를 선택해 주세요
      </h1>
      <h2 className="m-4 text-red-600">
        * 원하시는 하위 카테고리가 없다면 상품 추가하기를 클릭해주세요
      </h2>
      <button
        onClick={() => {
          console.log(childCategoriesArr);
        }}
        className="p-1 border-2"
      >
        추가하기
      </button>

      {addClicked && <AddForm />}

      <div>
        {childCategoriesArr.map((childCategoriesName) => (
          <CCUnit childCategoryName={childCategoriesName} />
        ))}
      </div>
    </div>
  );
};

export default CCContainer;
