import { RootState } from "../rootReducer";

export const dataSelector = (state: RootState) => state.data;
export const filteredDataSelector = (state: RootState) => state.filteredData;
export const filterValuesSelector = (state: RootState) => state.filterValues;
export const isDataFilteredSelector = (state: RootState) => state.isDataFiltered;
export const isDataUpdatedSelector = (state: RootState) => state.isDataUpdated;
export const isAddNewUnitSelector = (state: RootState) => state.isAddNewUnit;
export const statusesSelector = (state: RootState) => state.statuses;
export const isDataFetchingSelector = (state: RootState) => state.isDataFetching;
export const isDataFetchErrorSelector = (state: RootState) => state.isDataFetchError;
