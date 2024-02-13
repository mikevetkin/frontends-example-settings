import { SkeletonViewState } from './SkeletonViewState';

export class SkeletonListViewState {
  key: string;
  list: SkeletonViewState[];

  constructor({ list, key }: SkeletonListViewState) {
    this.list = list;
    this.key = key;
  }
}
