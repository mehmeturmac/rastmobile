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

  // Filter

  const [filteredDatas, setFilteredDatas] = React.useState<IData[]>(datas);

  const filterData = (key: string) => {
    const filter = datas.filter((data) => data.socialLink.includes(key) || data.socialName.includes(key) || data.description.includes(key));
    setFilteredDatas(filter);
  };

  React.useEffect(() => {
    localStorage.setItem('rastmobile', JSON.stringify(datas));
    setFilteredDatas(datas);
  }, [datas]);

  const values = {
    datas,
    saveData,
    status,
    setStatus,
    removeData,
    filteredDatas,
    filterData,
  };

  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
};
