export default (
    Model,
    state,
    { primaryKey = 'id' } = {},
  ) => (
    new Model().where({ [primaryKey]: state[primaryKey] }).save(state, { method: 'update' })
  );
  