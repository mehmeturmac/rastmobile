import React from 'react';
import { IData, MainContextType } from './@types.main';

// sampleData
import data from '../data.json';

const local = localStorage.getItem('rastmobile');
const localData = typeof local === 'string' ? JSON.parse(local) : null;

export const MainContext = React.createContext<MainContextType | null>(null);

export const MainProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Modal
  const [status, setStatus] = React.useState<boolean>(false);

  // Data
  const [datas, setDatas] = React.useState<IData[]>(localData || data);

  const saveData = (data: IData) => {
    const newData: IData = {
      id: data.id,
      socialLink: data.socialLink,
      socialName: data.socialName,
      description: data.description,
    };
    setDatas([...datas, newData]);
  };

  const removeData = (id: string) => {
    const newDatas = datas.filter((data) => data.id !== id);
    setDatas(newDatas);
  };

  React.useEffect(() => {
    localStorage.setItem('rastmobile', JSON.stringify(datas));
  }, [datas]);

  const values = {
    datas,
    saveData,
    status,
    setStatus,
    removeData,
  };

  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
};
