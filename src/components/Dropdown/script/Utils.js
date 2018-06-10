

/**
 * @description Change single select
 * @param items
 * @param selectedId
 */
export const changeSingleSelect = (items, selectedId) => items.map(item => ({
  ...item,
  isSelected: item.id === selectedId
}));

/**
 * @description Change multi select
 * @param items
 * @param selectedId
 * @param isSelected
 */
export const changeMultiSelect = (items, selectedId, isSelected) => items.map(item => ({
  ...item,
  isSelected: (item.id === selectedId && !item.isSelected && isSelected) || (item.id !== selectedId && item.isSelected)
}));
