import React from 'react';
import AppLayout from '../Components/AppLayout';
import PCContainer from '../Components/PCContainer';

const Addition = () => {
  return (
    <>
      <AppLayout>
        <PCContainer phrase="추가하실 상품의 카테고리를 클릭해주세요" />
      </AppLayout>{' '}
    </>
  );
};

export default Addition;
