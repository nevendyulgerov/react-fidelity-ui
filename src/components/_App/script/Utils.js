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
      url: 'https://google.com',
      isSelected,
      thumbnail: defaultThumbnail,
      note: 'some note',
      created_at: isNewDate
        ? moment(new Date()).subtract(subTrackedDays, 'days')
        : moment(i > 0 ? items[i - 1].created_at : new Date())
    });
  }
  return items;
};
