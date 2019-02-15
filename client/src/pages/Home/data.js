export const data = [
  [
    {
      column: 'A',
      value: 'test',
    },
    {
      column: 'B',
      value: 12,
    },
    {
      column: 'C',
      value: new Date(),
    },
  ],
  [
    {
      column: 'A',
      value: 'Salas',
    },
    {
      column: 'B',
      value: 10202.182,
    },
    {
      column: 'C',
      value: new Date(2548332435634),
    },
  ],
];

export const columns = [
  {
    name: 'A',
    type: String,
  },
  {
    name: 'B',
    type: Number,
  },
  {
    name: 'C',
    type: Date,
    format: 'YYYY/MM/DD',
  },
];
