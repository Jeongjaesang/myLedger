import React from 'react';

type OwnProps = {
  categoryName: string;
};

const PCUnit = ({ categoryName }: OwnProps) => {
  return (
    <div>
      <div>{categoryName}</div>
    </div>
  );
};

export default PCUnit;
