const MONTH_NAMES = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

export const formatDate = (d) => {
    return MONTH_NAMES[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
}

export const sortByDescendingTime = (a, b) => b.created_date.getTime() - a.created_date.getTime();