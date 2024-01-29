import { SkeletonViewState } from './SkeletonViewState';

export class SkeletonListViewState {
  list: SkeletonViewState[];

  constructor({ list }: SkeletonListViewState) {
    this.list = list;
  }
}
