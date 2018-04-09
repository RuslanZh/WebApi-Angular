import * as fromBlog from './blog.reducer';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface BlogState {
  blog: fromBlog.BlogState;
}

export const reducers: ActionReducerMap<BlogState> = {
  blog: fromBlog.blogReducer
};

export const getBlogState = createFeatureSelector<BlogState>('blog');
