import React from 'react';
import T from 'prop-types';

import './index.scss';
import colors from '../../const/colors';

const StatusLabel = ({ labelColor, label }) => (
  <td className="status-label">
    <p
      style={{
        backgroundColor: labelColor,
      }}
      className="label"
    >
      {label}
    </p>
  </td>
);

StatusLabel.propTypes = {
  label: T.string.isRequired,
  labelColor: T.string,
};

StatusLabel.defaultProps = {
  labelColor: colors.table.disableLabel,
};

export default StatusLabel;
