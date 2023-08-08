import React from 'react';
import AppLayout from '../Components/AppLayout';
import PCContainer from '../Components/PCContainer';
import CCContainer from '../Components/CCContainer';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers';

const Addition = () => {
  const parentCategories = useSelector(
    (state: RootState) => state.ProductReducer.parentCategories,
  );

  const currentParentCategoryName = useSelector(
    (state: RootState) => state.ProductReducer.currentParentCategoryName,
  );

  // 속성값을 받을 때는 받을 타입을 명시해줘야 하는데, 컴포넌트 내부에서 함수를 정의할때는 타입이 필요 없는건가
  const showChildCategories = () => {
    const childCategoriesArr = [];
    const parentCategory = parentCategories[currentParentCategoryName];
    const childCategories = parentCategory.childCategories;

    for (const key in childCategories) {
      childCategoriesArr.push(key);
    }
    return childCategoriesArr;
  };

  console.log('아래는 선택하신 큰 카테고리 입니다.');
  console.log(currentParentCategoryName);

  return (
    <>
      <AppLayout>
        {currentParentCategoryName ? (
          <CCContainer childCategoriesNames={showChildCategories()} />
        ) : (
          <PCContainer parentCategories={parentCategories} />
        )}
      </AppLayout>{' '}
    </>
  );
};

export default Addition;
