import { ImageSourcePropType } from "react-native";

export interface SendMoneyprops {
    id: number;
    name: string;
    amount: string;
    background: string;
    img: ImageSourcePropType;
    isNew: boolean;
}
export interface SendMoneySectionProp {
    data: Array<{ name: string; amount: string; id: number; background: string; img: ImageSourcePropType }>;
  }
