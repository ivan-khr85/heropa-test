export const types = {
  DATE: 'Date',
  LABEL: 'Label',
  STRING: 'String',
  NUMBER: 'Number',
};

export const statuses = {
  ACTIVE: 'Active',
  DISABLED: 'Disabled',
};

export const data = [
  [
    {
      column: 'Name',
      value: 'test',
    },
    {
      column: 'Location',
      value: 12,
    },
    {
      column: 'Created At',
      value: new Date(),
    },

    {
      column: 'Owner',
      value: 'test',
    },
    {
      column: 'VMs',
      value: 12,
    },
    {
      column: 'Status',
      value: statuses.ACTIVE,
    },
  ],
  [
    {
      column: 'Name',
      value: 'test',
    },
    {
      column: 'Location',
      value: 10202.182,
    },
    {
      column: 'Created At',
      value: new Date(),
    },

    {
      column: 'Owner',
      value: 'test',
    },
    {
      column: 'VMs',
      value: 10202.182,
    },
    {
      column: 'Status',
      value: statuses.ACTIVE,
    },
  ],
  [
    {
      column: 'Name',
      value: 'Available',
    },
    {
      column: 'Location',
      value: 12,
    },
    {
      column: 'Created At',
      value: new Date(2548332435634),
    },

    {
      column: 'Owner',
      value: 'Available',
    },
    {
      column: 'VMs',
      value: 12,
    },
    {
      column: 'Status',
      value: statuses.DISABLED,
    },

  ],
  [
    {
      column: 'Name',
      value: 'Salas',
    },
    {
      column: 'Location',
      value: 10202.182,
    },
    {
      column: 'Created At',
      value: new Date(2548332435634),
    },

    {
      column: 'Owner',
      value: 'Salas',
    },
    {
      column: 'VMs',
      value: 10202.182,
    },
    {
      column: 'Status',
      value: statuses.DISABLED,
    },
  ],
  [
    {
      column: 'Name',
      value: 'Jack',
    },
    {
      column: 'Location',
      value: 77017,
    },
    {
      column: 'Created At',
      value: new Date(25482435634),
    },

    {
      column: 'Owner',
      value: 'Merison',
    },
    {
      column: 'VMs',
      value: 10202,
    },
    {
      column: 'Status',
      value: statuses.ACTIVE,
    },
  ],
  [
    {
      column: 'Name',
      value: 'Salas',
    },
    {
      column: 'Location',
      value: 10202.182,
    },
    {
      column: 'Created At',
      value: new Date(2548332435634),
    },

    {
      column: 'Owner',
      value: 'Salas',
    },
    {
      column: 'VMs',
      value: 10202.182,
    },
    {
      column: 'Status',
      value: statuses.DISABLED,
    },
  ],
];

export const columns = [
  {
    name: 'Name',
    type: types.STRING,
  },
  {
    name: 'Location',
    type: types.NUMBER,
  },
  {
    name: 'Created At',
    type: types.DATE,
    format: 'YYYY/MM/DD',
  },

  {
    name: 'Owner',
    type: types.STRING,
  },
  {
    name: 'VMs',
    type: types.NUMBER,
  },
  {
    name: 'Status',
    type: types.LABEL,
  },
];
