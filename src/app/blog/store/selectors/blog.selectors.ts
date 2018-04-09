import { createSelector } from '@ngrx/store';

// import * as fromRoot from '../../../store';
import * as fromFeature from '../reducers';
import * as fromBlog from '../reducers/blog.reducer';
import { Message } from '../../models/message';

export const getCompleteBlogState = createSelector(
  fromFeature.getBlogState,
  (state: fromFeature.BlogState) => state.blog
);

export const getAllMessagesState = createSelector(
  getCompleteBlogState,
  fromBlog.getAllMessages
);

// export const getRandomMeal = createSelector(getRandomMealState, entities => {
//   return Object.keys(entities).map(id => entities[id]);
// });

// export const getLoading = createSelector(
//   getCompleteHomeState,
//   fromHome.getRandomMealLoading
// );
//
// export const getLoaded = createSelector(
//   getCompleteHomeState,
//   fromHome.getRandomMealLoaded
// );
