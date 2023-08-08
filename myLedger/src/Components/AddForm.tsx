import React from 'react';

const AddForm = () => {
  return (
    <div className="addForm">
      <form className="px-8 pt-6 pb-8 mb-2 bg-white rounded shadow-md">
        <div className="flex">
          <div className="m-2">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="childCategory"
            >
              하위 카테고리
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="childCategory"
              type="text"
            />
          </div>
          <div className="m-2">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="productName"
            >
              제품명
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="productName"
              type="text"
            />
            {/* <p className="text-xs italic text-red-500">
            Please choose a password.
          </p> */}
          </div>
        </div>

        <div className="flex">
          <div className="m-2">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="price"
            >
              가격
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="price"
              type="text"
            />
          </div>
          <div className="m-2">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="whereToBuy"
            >
              구매처
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="whereToBuy"
              type="text"
            />
          </div>
        </div>
        <div className="m-2">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="date"
          >
            구매날짜
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border border-red-500 shadow appearance-none border-red-500rounded focus:outline-none focus:shadow-outline"
            id="date"
            type="date"
            pattern="\d{4}-\d{2}-\d{2}"
          />
        </div>
        <div className="m-2">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="imgPath"
          >
            이미지
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="imgPath"
            type="file"
          />
        </div>
        <div className="m-2">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="memo"
          >
            메모
          </label>
          <textarea
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="memo"
            // type="text"
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <a
            className="inline-block text-sm font-bold text-blue-500 align-baseline hover:text-blue-800"
            href="#"
          >
            나가기
          </a>
          <button
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            type="button"
          >
            저장
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
