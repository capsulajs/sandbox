import {
  AddChildRequest,
  RemoveChildRequest,
  ChildrenRequest,
  GetTabs,
  SetTabs,
  OrientationRequest,
  AddRequest,
  SelectRequest,
  RemoveRequest,
  SetContent,
} from "./types";

interface PanelNode {
  addChild: (r: AddChildRequest) => PanelNode;
  removeChild: (r: RemoveChildRequest) => void;
  children: (r: ChildrenRequest) => PanelNode[];
  orientation: (r: OrientationRequest) => void;
  setTabs: (r: SetTabs) => void;
  getTabs: (r: GetTabs) => any;
}

export interface Tabs {
  add: (r: AddRequest) => number;
  remove: (r: RemoveRequest) => void;
  select: (r: SelectRequest) => void;
  component: () => Component;
}

export interface Content {
  setContent: (r: SetContent) => void;
  component: () => Component;
}
