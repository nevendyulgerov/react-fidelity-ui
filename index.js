import Alert from './src/components/Alert/';
import Breadcrumbs from './src/components/Breadcrumbs/';
import Checkbox from './src/components/Checkbox/';

import Dropdown, {
  changeSingleSelect,
  changeMultiSelect,
  deselectItem,
  filterItemsByName,
  syncDropdownMenuOffset
} from './src/components/Dropdown/';

import Icon from './src/components/Icon/';
import Loader from './src/components/Loader/';
import Modal from './src/components/Modal/';
import Notification from './src/components/Notification/';
import StackableAlerts from './src/components/StackableAlerts/';
import Panel from './src/components/Panel/';
import Tag from './src/components/Tag/';

import Timeline from './src/components/Timeline/';
import './dist/style.min.css';

const utils = {
  changeSingleSelect,
  changeMultiSelect,
  deselectItem,
  filterItemsByName,
  syncDropdownMenuOffset
};

export {
  Alert,
  Breadcrumbs,
  Checkbox,
  Dropdown,
  Icon,
  Loader,
  Modal,
  Notification,
  Panel,
  StackableAlerts,
  Tag,
  Timeline,
  utils
};
