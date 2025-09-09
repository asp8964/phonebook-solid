import { Document, ObjectId } from "mongoose";
import { Accessor, Setter } from "solid-js";

export interface IPersonBase {
  name: string;
  number: string;
}

export interface IPersonDocument extends IPersonBase, Document {
  _id: ObjectId
  __v: number
}

export interface IPerson extends IPersonBase {
  _id: string
}

export interface IFieldBase {
  value: Accessor<string>;
  onChange: (e: Event) => void;
}

export interface IField extends IFieldBase {
  reset: () => void;
}

export interface IInputProps {
  text: string
  field: IFieldBase;
}

export interface IFilterContext {
  filter: Accessor<string>
  setFilter: Setter<string>
}

export interface IMessageContext {
  message: Accessor<IMessage>
  displayMessage: (value: string, isError: boolean) => void
}

export interface IMessage {
  value: string,
  isError: boolean
}

export type IPersonContext = Accessor<IPerson[]>
