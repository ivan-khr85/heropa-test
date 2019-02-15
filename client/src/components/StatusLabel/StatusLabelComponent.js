import React from 'react';
import T from 'prop-types';

import './index.scss';
import colors from '../../const/colors';

const StatusLabel = ({ labelColor, label }) => (
  <div
    style={{
      backgroundColor: labelColor,
    }}
    className="status-label"
  >
    <p className="label">{label}</p>
  </div>
);

StatusLabel.propTypes = {
  label: T.string.isRequired,
  labelColor: T.string,
};

StatusLabel.defaultProps = {
  labelColor: colors.table.disableLabel,
};

export default StatusLabel;
