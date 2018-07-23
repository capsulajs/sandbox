// @flow
import { Observable } from 'rxjs';
import { API } from "../types";

/**
 * Catalog service can be used to display an API catalog of several environments
 */
export interface Catalog {
  /**
   * The method allow to add an environment to the catalog
   * @return Promise that resolve if the environment has been added successfully
   */
  add: (r: AddRequest) => Promise<>;
  /**
   * The method allow to remove an environment to the catalog
   * @return Promise that resolve if the environment has been removed successfully
   */
  remove: (r: RemoveRequest) => Promise<>;
  /**
   * Provides the currently selected API
   * @return An Observable sequence emitting the currently selected API
   */
  selected: (r: SelectedRequest) => Observable<API>;
  /**
   * The method return a promise to the component to render
   * @return Component
   */
  render: (r: RenderRequest) => Promise<Component>;
}

interface AddRequest {
  environmentId: number
}
interface RemoveRequest {
  environmentId: number
}

interface SelectedRequest {}

interface RenderRequest {}
