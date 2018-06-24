import Alert from './src/components/Alert/';
import Breadcrumbs from './src/components/Breadcrumbs/';
import Checkbox from './src/components/Checkbox';
import Dropdown, {
  changeSingleSelect,
  changeMultiSelect,
  deselectItem,
  filterItemsByName,
  syncDropdownMenuOffset
} from './src/components/Dropdown/';
import Icon from './src/components/Icon';
import Loader from './src/components/Loader';
import Notification from './src/components/Notification';
import StackableAlerts from './src/components/StackableAlerts';
import Panel from './src/components/Panel';
import Tag from './src/components/Tag';
import Timeline, {
  groupItemsByDate,
  getDifferenceInDays,
  getDateYMD,
  isSameDate
} from './src/components/Timeline';
import './dist/style.min.css';

const utils = {
  changeSingleSelect,
  changeMultiSelect,
  deselectItem,
  filterItemsByName,
  syncDropdownMenuOffset,
  groupItemsByDate,
  getDifferenceInDays,
  getDateYMD,
  isSameDate
};

export {
  Alert,
  Breadcrumbs,
  Checkbox,
  Dropdown,
  Icon,
  Loader,
  Notification,
  Panel,
  StackableAlerts,
  Tag,
  Timeline,
  utils
};
