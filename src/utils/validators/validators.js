export const requiredField = value => {
    if (value) return undefined;
    return "Field is required";
}

export const maxLengthCreator = (max) => value => {
    return value && value.length <= max ? undefined : `Must be ${max} characters or less`;
}