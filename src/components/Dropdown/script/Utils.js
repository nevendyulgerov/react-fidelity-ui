import { extend } from '../../../utils/ammo';


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

/**
 * @description Deselect item
 * @param items
 * @param deselectedId
 * @returns {*}
 */
export const deselectItem = (items, deselectedId) => items.reduce((accumulator, item) => {
  const nextItem = extend({}, item, {
    isSelected: item.isSelected && item.id !== deselectedId
  });
  accumulator.push(nextItem);
  return accumulator;
}, []);

/**
 * @description Filter items by name
 * @param items
 * @param filterText
 * @returns {*}
 */
export const filterItemsByName = (items, filterText) => items.filter(item => item.name.toLowerCase().indexOf(filterText.toLowerCase()) > -1);

/**
 * @description Sync dropdown menu offset
 * @param component
 * @param stepOffset
 */
export const syncDropdownMenuOffset = (component, stepOffset = 9) => {
  const toggleMenu = component.querySelector('.trigger.toggle-menu');
  const menu = component.querySelector('.menu');
  const toggleMenuHeight = toggleMenu.offsetHeight;

  menu.style.top = `${toggleMenuHeight + stepOffset}px`;
};
