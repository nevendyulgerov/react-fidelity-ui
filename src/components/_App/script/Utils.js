import moment from 'moment/moment';
import { randomInclusive } from '../../../utils/ammo';

const defaultThumbnail = 'https://wallpaperbits.com/wp-content/uploads/2018/01/google-nexus-5-wallpaper-154171-nature-landscape-mountain-nexus-5.jpg';

export const createItems = (count = 10) => {
  const items = [];
  for (let i = 0; i < count; i++) {
    const isNewDate = randomInclusive(0, 10) > 6;
    const subTrackedDays = randomInclusive(0, 365);
    const isSelected = randomInclusive(0, 10) > 9;
    items.push({
      id: i,
      name: `Item ${i + 1}`,
      title: `Item ${i + 1}`,
      url: 'https://google.com',
      isSelected,
      thumbnail: defaultThumbnail,
      note: 'some note',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      created_at: isNewDate
        ? moment(new Date()).subtract(subTrackedDays, 'days')
        : moment(i > 0 ? items[i - 1].created_at : new Date())
    });
  }
  return items;
};
