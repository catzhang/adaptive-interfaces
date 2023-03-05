import COUNTRIES from "./COUNTRIES";

const BUCKETS = {
    LOW: 1,
    MEDIUM: 2,
    HIGH: 3,
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