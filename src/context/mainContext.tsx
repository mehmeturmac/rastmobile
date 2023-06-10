import * as React from 'react';
import { IData, MainContextType } from './@types.main';

// sampleData
import data from '../data.json';

export const MainContext = React.createContext<MainContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

export const MainProvider: React.FC<Props> = ({ children }) => {
  // Modal
  const [status, setStatus] = React.useState<boolean>(false);

  // Data
  const [datas, setDatas] = React.useState<IData[]>(data);

  const saveData = (data: IData) => {
    const newData: IData = {
      id: Math.random().toString(),
      socialLink: data.socialLink,
      socialName: data.socialName,
      description: data.description,
    };
    setDatas([...datas, newData]);
  };

  const values = {
    datas,
    saveData,
    status,
    setStatus,
  };

  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
};
