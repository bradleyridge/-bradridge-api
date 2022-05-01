export default (Model, id, options = { require: false }) => new Model({ id }).fetch(options);
