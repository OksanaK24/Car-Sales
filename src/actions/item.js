export const ADDING_FEATURE = "ADDING_FEATURE";
export const REMOVING_FEATURE = "REMOVING_FEATURE";

export function addingFeature(item) {
    return {
      type: ADDING_FEATURE,
      payload: item
    };
  }

export function removingFeature(item) {
    return {
        type: REMOVING_FEATURE,
        payload: item
    };
}