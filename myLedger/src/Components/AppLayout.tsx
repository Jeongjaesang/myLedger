import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type OwnProps = {
  children: ReactNode;
};

const AppLayout = ({ children }: OwnProps) => {
  return (
    <div className="w-full">
      <div className="flex justify-center">
        <nav className="flex items-center w-3/4 h-20 border-b-2">
          <div className="basis-0 grow">
            <h1 className="text-2xl font-bold desktop: mobile:text-sm desktop:text-lg ">
              Logo
            </h1>
          </div>
          <ul className="flex justify-around space-x-2 basis-0 grow">
            <li className="text-lg font-semibold cursor-pointer hover:text-sky-500 mobile:text-sm desktop:text-lg">
              <Link to="/">Home</Link>
            </li>
            <li className="text-lg font-semibold cursor-pointer hover:text-sky-500 mobile:text-sm desktop:text-lg">
              <Link to="/Search">Search</Link>
            </li>
            <li className="text-lg font-semibold cursor-pointer hover:text-sky-500 mobile:text-sm desktop:text-lg">
              <Link to="/MemoPage">memo</Link>
            </li>
          </ul>
          <div className="text-right basis-0 grow">
            <button className="px-4 py-2 mx-2 font-semibold text-white rounded-md cursor-pointer bg-sky-500 hover:bg-sky-700 tablet:hidden desktop:hidden mobile:inline ">
              <Link to="/Addition">+</Link>
            </button>
            <button className="px-4 py-2 mx-2 text-lg font-semibold text-white rounded-md cursor-pointer bg-sky-500 hover:bg-sky-700 mobile:hidden desktop:inline tablet:inline">
              <Link to="/Addition">+ items</Link>
            </button>
          </div>
        </nav>
      </div>

      <div className="flex justify-center">{children}</div>
    </div>
  );
};

export default AppLayout;
