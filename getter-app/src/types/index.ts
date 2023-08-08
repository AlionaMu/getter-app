import { Dispatch, SetStateAction } from "react";

export type DataItemType = {
  id: string;
  lnk: string;
  desc: string;
};

export type LogsItemType = {
  id: string;
  name: string;
  desc: string;
};

export type ButtonPropsType = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>
}