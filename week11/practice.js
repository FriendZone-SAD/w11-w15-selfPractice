// ==========================
// INT151 Self-Practice: Date/Time
// ==========================

// Task 1: Create Date Objects
console.log("=== Task 1: Create Date Objects ===");
const today1 = new Date();
const today2 = new Date(Date.now());
console.log("Current time (method 1):", today1);
console.log("Current time (method 2):", today2);

const birthdayStr = new Date('2005-08-15T12:00:00');
const birthdaySpecific = new Date(2005, 7, 15, 12, 0, 0, 0);
console.log("Birthday (string):", birthdayStr);
console.log("Birthday (specific):", birthdaySpecific);

// Task 2: Extract Date Components
console.log("\n=== Task 2: Extract Date Components ===");
const someDate = new Date();
console.log("Year:", someDate.getFullYear());
console.log("Month (1-12):", someDate.getMonth() + 1);
console.log("Day of Month:", someDate.getDate());
console.log("Day of Week (0=Sun):", someDate.getDay());
console.log("Hours:", someDate.getHours());
console.log("Minutes:", someDate.getMinutes());
console.log("Seconds:", someDate.getSeconds());

// Task 3: UTC vs Local Time
console.log("\n=== Task 3: UTC vs Local Time ===");
const bangkokTime = new Date('2025-12-25T10:00:00+07:00');
const utcTime = bangkokTime.toISOString();
console.log("Local time (Bangkok):", bangkokTime.toString());
console.log("UTC time:", utcTime);

// Task 4: Formatting Dates
console.log("\n=== Task 4: Formatting Dates ===");
console.log("Thai format:", bangkokTime.toLocaleString('th-TH', { timeZone: 'Asia/Bangkok' }));
console.log("English (UK):", bangkokTime.toLocaleString('en-GB', { timeZone: 'Asia/Bangkok' }));
console.log("English (US):", bangkokTime.toLocaleString('en-US', { timeZone: 'Asia/Bangkok' }));

const formatter = new Intl.DateTimeFormat('th-TH', {
    dateStyle: 'full',
    timeStyle: 'short',
    timeZone: 'Asia/Bangkok',
    weekday: 'long',
    month: 'long'
});
console.log("Intl.DateTimeFormat:", formatter.format(bangkokTime));

// Task 5: Compare Dates
console.log("\n=== Task 5: Compare Dates ===");
const start = new Date('2025-11-02T10:00:00+07:00');
const end = new Date('2025-11-02T09:00:00+08:00');
console.log("Start (UTC):", start.toISOString());
console.log("End (UTC):", end.toISOString());
console.log("Is Start later than End?", start.getTime() > end.getTime());

// Task 6: Overlapping Time Check
console.log("\n=== Task 6: Overlapping Time Check ===");
const aStart = new Date('2025-11-01T00:00:00');
const aEnd = new Date('2025-11-05T00:00:00');
const bStart = new Date('2025-11-02T00:00:00');
const bEnd = new Date('2025-11-04T00:00:00');

function isOverlapping(startA, endA, startB, endB) {
    return startB <= endA && endB >= startA;
}
console.log("Do periods overlap?", isOverlapping(aStart, aEnd, bStart, bEnd));

// Task 7: Booking Validation
console.log("\n=== Task 7: Booking Validation ===");
const openTime = new Date('2025-11-02T08:00:00+07:00');
const closeTime = new Date('2025-11-02T17:00:00+07:00');
const bookingStart = new Date('2025-11-02T09:00:00+07:00');
const bookingEnd = new Date('2025-11-02T17:00:00+07:00');

if (bookingStart >= openTime && bookingEnd <= closeTime) {
    console.log("Valid Booking Time");
} else {
    console.log("Invalid Booking Time");
}

// Bonus: Detect System Timezone and Locale
console.log("\n=== Bonus: System Timezone and Locale ===");
const systemOptions = new Intl.DateTimeFormat().resolvedOptions();
console.log("System Timezone:", systemOptions.timeZone);
console.log("System Locale:", systemOptions.locale);