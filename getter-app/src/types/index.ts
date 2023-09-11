import { Dispatch, SetStateAction } from "react";

export type DataItemType = {
  id: string;
  lnk: string;
  desc: string;
};

export type DataType = {
  items: DataItemType[];
  selectedId: string;
}

export type ButtonPropsType = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>
  setData: Dispatch<SetStateAction<any>>
}

export type MenuPropsType = {
  data: any;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>
  setData: Dispatch<SetStateAction<any>>
  setItemId: Dispatch<SetStateAction<string>>
}

export type InfoBoxPropsType = {
  itemId: string;
}

export type Info = {
  id: number;
  status: string;
  statusurl: string;
}
