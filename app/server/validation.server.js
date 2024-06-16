function validEmail(value) {
    return value && value.includes('@')
}

function validUsername(value) {
    return value && value.includes('a') && value.trim().length >= 7
}

function validPassword(value) {
    return value && value.trim().length >= 7
}

export function validate(input) {
    let validationErrors = {}

    if (!validEmail(input.email)) {
        validationErrors.email = 'Invalid email format'
    }

    if (!validUsername(input.username)) {
        validationErrors.username = 'Invalid username'
    }

    if (!validPassword(input.password)) {
        validationErrors.password = 'Password must be at least 7 characters'
    }

    if (Object.keys(validationErrors).length > 0) {
        throw validationErrors
    }
}