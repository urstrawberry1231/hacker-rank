function minimumNumber(n, password) {
    const numbers = "0123456789";
    const lower_case = "abcdefghijklmnopqrstuvwxyz";
    const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const special_characters = "!@#$%^&*()-+";

    let hasDigit = false;
    let hasLower = false;
    let hasUpper = false;
    let hasSpecial = false;

    for (let char of password) {
        if (numbers.includes(char)) hasDigit = true;
        else if (lower_case.includes(char)) hasLower = true;
        else if (upper_case.includes(char)) hasUpper = true;
        else if (special_characters.includes(char)) hasSpecial = true;
    }

    let missingTypes = 0;
    if (!hasDigit) missingTypes++;
    if (!hasLower) missingTypes++;
    if (!hasUpper) missingTypes++;
    if (!hasSpecial) missingTypes++;

    return Math.max(missingTypes, 6 - n);
}