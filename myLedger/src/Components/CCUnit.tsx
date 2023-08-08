import React from 'react';

type OwnProps = {
  childCategoryName: string;
};

const CCUnit = ({ childCategoryName }: OwnProps) => {
  return (
    <div className="bg-orange-400">
      <div className="p-5 m-3">
        <div>하위 카테고리 이름: {childCategoryName}</div>
      </div>
    </div>
  );
};

export default CCUnit;
