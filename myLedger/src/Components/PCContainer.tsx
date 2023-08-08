import React, { ReactNode } from 'react';
import PCUnit from './PCUnit';
import { ParentCategories } from '../reducers/productReducer';

type OwnProps = {
  parentCategories: ParentCategories;
};

const PCContainer = ({ parentCategories }: OwnProps) => {
  // PCContainer는 parentCategories에 있는 속성들을 모두 보여줘야 하므로
  // state.ParentCategories의 값을 state값으로 한다.

  const PCArr: ReactNode[] = []; // 다 만들고 최적화 방법 알아보기

  Object.entries(parentCategories).forEach(([propName, propValue]) => {
    PCArr.push(
      <PCUnit
        // setParentUnit={setParentUnit} // setParentUnit은 클릭한 PCUnit의 이름을 currentParentCategoryName으로 변경한다.
        dataCategoryName={propName} // categoryName은 속성의 이름이다. 클릭하면 categoryName의 값이 currentParentCategoryName에 저장된다.
        // value={propValue} // propValue는 속성에 매핑된 값(여기선 객체)이다.
        screenCategoryName={propValue.name}
        imgPath={propValue.imgPath}
        key={propValue.parentCategoryId}
      />,
    );
  });

  return (
    <div className="w-3/4">
      <h1 className="my-10 font-semibold text-center desktop:text-2xl mobile:text-sm">
        추가하실 상품의 카테고리를 클릭해주세요
      </h1>
      <div className="flex flex-wrap justify-center">{PCArr}</div>
    </div>
  );
};

export default PCContainer;
