import COUNTRIES from "./COUNTRIES";

const BUCKETS = {
    LOW: 1,
    MEDIUM: 2,
    HIGH: 3,
}

const calculateAgeColorBucket = (age) => {
    if (age <= 20) {
        return BUCKETS.HIGH;
    } else if (age <= 30) {
        return BUCKETS.MEDIUM;
    } else if (age <= 50) {
        return BUCKETS.LOW;
    } else {
        return BUCKETS.HIGH;
    }
}

const calculateCountryColorBucket = (countryIndex) => {
    const color = COUNTRIES[countryIndex].color;
    if (color <= 5.11) {
        return BUCKETS.LOW;
    } else if (color <= 5.93) {
        return BUCKETS.MEDIUM;
    } else {
        return BUCKETS.HIGH;
    }
}

export const calculateColorBucket = (age, countryIndex) => {
    const ageBucket = calculateAgeColorBucket(age);
    const countryBucket = calculateCountryColorBucket(countryIndex);
    const score = Math.ceil(0.5 * ageBucket + 0.5 * countryBucket);
    if (score === 1) {
        return "Low";
    } else if (score === 2) {
        return "Medium";
    } else {
        return "High";
    }
}

export const calculateGenderBucket = (gender) => {
    if (gender < 34) {
        return "Female";
    } else if (gender < 67) {
        return "Nonbinary";
    } else {
        return "Male";
    }
}

export const calculateAgeComplexityBucket = (age) => {
    if (age <= 40) {
        return BUCKETS.MEDIUM;
    } else {
        return BUCKETS.HIGH;
    }
};

export const calculateCountryComplexityBucket = (countryIndex) => {
    const complexity = COUNTRIES[countryIndex].complexity;
    if (complexity <= 3.9) {
        return BUCKETS.LOW;
    } else if (complexity <= 4.28) {
        return BUCKETS.MEDIUM;
    } else {
        return BUCKETS.HIGH;
    }
}

export const calculateComplexityBucket = (age, countryIndex) => {
    const ageBucket = calculateAgeComplexityBucket(age);
    const countryBucket = calculateCountryComplexityBucket(countryIndex);
    const score = Math.floor(0.5 * ageBucket + 0.5 * countryBucket);
    if (score === 1) {
        return "Low";
    } else if (score === 2) {
        return "Medium";
    } else {
        return "High";
    }
}

export const calculateHierarchy = (countryIndex) => {
    const PDI = COUNTRIES[countryIndex].hierarchy;
    if (PDI <= 39) {
        return "Tree";
    } else if (PDI <= 68) {
        return "Mixed";
    } else {
        return "Flat";
    }
}