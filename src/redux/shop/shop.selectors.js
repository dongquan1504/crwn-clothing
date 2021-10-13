import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollectionItem = collectionUrlParam => 
createSelector(
    [selectCollections],
    collections => collections ? collections[collectionUrlParam] : null
//It seems that the selector above is returning collections as an array instead of object, so collections[collectionUrl] is returning undefined
)