import * as R from 'ramda';
import colors from '../../const/colors';


export const defaultDateFormat = 'YYYY/MM/DD';
export const statuses = {
  ACTIVE: 'Active',
  DISABLED: 'Disabled',
};

export const getStatusesColors = R.cond([
  [R.equals(statuses.ACTIVE), R.always(colors.table.activeLabel)],
  [R.equals(statuses.DISABLED), R.always(colors.table.disableLabel)],
  [R.T, R.always(statuses.DISABLED)],
]);

export const types = {
  DATE: Date,
  LABEL: 'Label',
};
