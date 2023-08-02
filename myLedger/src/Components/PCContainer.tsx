import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers';

import PCUnit from './PCUnit';

type OwnProps = {
  phrase: string;
};

const PCContainer = ({ phrase }: OwnProps) => {
  const parentCategories = useSelector(
    (state: RootState) => state.ProductReducer.parentCategories,
  );

  const PCArr: ReactNode[] = [];

  Object.entries(parentCategories).forEach(([propName]) => {
    PCArr.push(<PCUnit categoryName={propName} key={propName + propName} />);
  });

  return (
    <div className="w-3/4">
      <h1 className="my-10 text-2xl font-semibold">{phrase}</h1>
      <div className="flex">{PCArr}</div>
    </div>
  );
};

export default PCContainer;
