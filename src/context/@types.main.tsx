export interface IData {
  // Data
  id: string;
  socialLink: string;
  socialName: string;
  description: string;
}

export type MainContextType = {
  datas: IData[];
  saveData: (data: IData) => void;
  removeData: (id: string) => void;
  filteredDatas: IData[];
  filterData: (key: string) => void;
  status: boolean;
  setStatus: (value: boolean) => void;
};
