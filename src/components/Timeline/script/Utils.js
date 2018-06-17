import moment from 'moment';
import { extend, shape } from '../../../utils/ammo';


/**
 * @description Group items by date
 * @param items
 * @param targetKey
 * @returns {*}
 */
const groupItemsByDate = (items, targetKey) => {
  // group items by date
  const groupedItems = items.reduce((accumulator, item, index) => {
    const nextItem = extend({}, item);
    const nextItemDate = moment(nextItem[targetKey]);
    const alreadyAddedItems = shape(accumulator).reduceTo('items').fetch();
    const isAlreadyAdded = alreadyAddedItems.filter(item => item.id === nextItem.id).length > 0;

    if (isAlreadyAdded) {
      return accumulator;
    }

    const itemsMatchingByDay = items.filter(filterItem => {
      const filterItemDate = moment(filterItem[targetKey]);
      return filterItemDate.isSame(nextItemDate, 'day');
    });

    const groupedItems = {
      id: index,
      date: nextItemDate.toString(),
      items: itemsMatchingByDay
    };

    accumulator.push(groupedItems);
    return accumulator;
  }, []);

  // filter grouped items by unique date
  return groupedItems.reduce((accumulator, groupedItem) => {
    const uniqueItems = shape(groupedItem.items).filterByUnique(targetKey).fetch();
    const nextGroupedItem = extend({}, groupedItem, { items: uniqueItems });
    accumulator.push(nextGroupedItem);
    return accumulator;
  }, []);
};

export default groupItemsByDate;
