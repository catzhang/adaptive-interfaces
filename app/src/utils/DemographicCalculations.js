// const demographics = {
//     age: ageValue,
//     gender: genderValue,
//     country: countryValue,
//   };

import COUNTRIES from "./COUNTRIES";

const BUCKETS = {
    LOW: 1,
    MEDIUM: 2,
    HIGH: 3,
 }

const calculateAgeComplexityBucket = (age) => {
    if (age <= 40) {
        return BUCKETS.MEDIUM;
    } else {
        return BUCKETS.HIGH;
    }
};

// const calculateCountryComplexityBucket = (country) => {
//     const complexity = 
// }