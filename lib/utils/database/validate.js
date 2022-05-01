import validator from 'validator';

const validatorsByType = {
    string: (value) => {
        return (typeof value === 'string')
    },
    integer: validator.isInt,
    uuid: validator.isUUID,
};

const validate = (model, inputState) => Object.keys(model).reduce((output, key) => {
    const { type, required } = model[key];
    const value = inputState[key];

    const { errors, state } = output;

    if (!value || value === '') {
        if (required) errors.push(`Missing required field "key"`);
        return { errors, state };
    }
    
    // validate type matches
    console.log(`${key} (${type}) (${required}): "${value}"`);
    if (!validatorsByType[type](value)) errors.push(`Invalid type for field "${key}" (expected ${type})`);
    else state[key] = value;

    return { errors, state };
}, { errors: [], state: {}});

export default validate;
