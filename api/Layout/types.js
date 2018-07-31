import { Tabs, Content } from "./Layout";

export interface AddChildRequest {
  index: 0 | 1;
  node: PanelNode;
}

export interface RemoveChildRequest {
  index: 0 | 1;
}

export interface ChildrenRequest {}

export interface OrientationRequest {
  orientation: 'vertical' | 'horizontal';
}

export interface SetTabs {
  data: Tabs;
}

export interface GetTabs {}


export interface AddRequest {
  content: Content;
}

export interface RemoveRequest {
  contentId: number;
}

export interface SelectRequest {
  contentId: number;
}

export interface SetContent {
  title: string;
  content: Component
}