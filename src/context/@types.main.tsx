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
  status: boolean;
  setStatus: (value: boolean) => void;
};
