import React from 'react';
import { setParentCategory } from '../reducers/productReducer';
import { useDispatch } from 'react-redux';

type OwnProps = {
  // setParentUnit: (pc: string) => void;
  dataCategoryName: string;
  // value: ParentUnit;
  imgPath: string;
  screenCategoryName: string;
};

const PCUnit = ({
  dataCategoryName,
  imgPath,
  screenCategoryName,
}: OwnProps) => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    // setParentUnit(dataCategoryName);
    dispatch(setParentCategory(dataCategoryName));
  }; // 상사가 준 도구로 상사가 관리하는 값을 바꿨으니 바람직 하지 않을까?

  // PCUnit을 클릭하면 클릭 된 ParentCategory가 currentParentCategoryName이 된다.
  // currentParentCategoryName은 PCUnit의 부모인 PCContainer의 부모인 Addition의 state값이므로 Addition 컴포넌트가 리랜더링된다.
  // Addition 컴포넌트가 리랜더링 될 때, currentParentCategoryName값이 공백이 아니므로 CCContainer가 보여지게 된다.

  return (
    <div
      onClick={onClickHandler}
      className="m-3 transition-all border border-gray-200 rounded-lg shadow cursor-pointer hover:scale-110 bg-white- duration dark:bg-gray-800 dark:border-gray-700 desktop:w-1/5 tablet:w-1/4 mobile:w-1/3"
    >
      <div className="p-5">
        <div className="flex justify-center ">
          <img className="mx-0 my-auto w-11 " src={imgPath} />
        </div>
        <h5 className="mb-2 font-bold tracking-tight text-center text-gray-900 dark:text-white desktop:text-2xl mobile:text-sm">
          {screenCategoryName}
        </h5>
      </div>
    </div>
  );
};

export default PCUnit;
