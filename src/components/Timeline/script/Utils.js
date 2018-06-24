import { extend, shape } from '../../../utils/ammo';


/**
 * @description Group items by date
 * @param items
 * @param targetKey
 * @returns {*}
 */
export const groupItemsByDate = (items, targetKey) => {
  // group items by date
  const groupedItems = items.reduce((accumulator, item, index) => {
    const nextItem = extend({}, item);
    const nextItemDate = new Date(nextItem[targetKey]);
    const nextItemDateObj = getDateYMD(nextItemDate);
    const alreadyAddedItems = shape(accumulator).reduceTo('items').fetch();
    const isAlreadyAdded = alreadyAddedItems.filter(item => item.id === nextItem.id).length > 0;

    if (isAlreadyAdded) {
      return accumulator;
    }

    const itemsMatchingByDay = items.filter(filterItem => {
      const filterItemDate = new Date(filterItem[targetKey]);
      const filterItemDateObj = getDateYMD(filterItemDate);
      return isSameDate(nextItemDateObj, filterItemDateObj);
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

/**
 * @description Get difference in days
 * @param dateA
 * @param dateB
 * @returns {number}
 */
export const getDifferenceInDays = (dateA, dateB) => {
  const millisecondsInDay = 1000 * 60 * 60 * 24;
  const dateObjA = getDateYMD(dateA);
  const dateObjB = getDateYMD(dateB);
  const utcDateA = Date.UTC(dateObjA.year, dateObjA.month, dateObjA.day);
  const utcDateB = Date.UTC(dateObjB.year, dateObjB.month, dateObjB.day);

  return Math.floor((utcDateB - utcDateA) / millisecondsInDay);
};

/**
 * @description Get date year - month - day
 * @param date
 * @returns {{year: number, month: number, day: number}}
 */
export const getDateYMD = date => ({
  year: date.getFullYear(),
  month: date.getMonth(),
  day: date.getDate()
});

/**
 * @description Is same date
 * @param dateA
 * @param dateB
 * @returns {boolean}
 */
export const isSameDate = (dateA, dateB) => dateA.year === dateB.year && dateA.month === dateB.month && dateA.day === dateB.day;
