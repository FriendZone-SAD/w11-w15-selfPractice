// ==========================
// Week 12 - DOM & Date/Time Practice
// ==========================

const currentTimeDiv = document.getElementById("current-time");
const bookingResultDiv = document.getElementById("booking-result");
const bookingInfoDiv = document.getElementById("booking-info");
const startInput = document.getElementById("start");
const endInput = document.getElementById("end");
const checkBtn = document.getElementById("check-booking");

// Task 1: Show current time (updates every second)
function updateCurrentTime() {
    const now = new Date();
    currentTimeDiv.textContent = "Current Local Time (Bangkok): " + 
        now.toLocaleString('th-TH', { timeZone: 'Asia/Bangkok' });
}
setInterval(updateCurrentTime, 1000);
updateCurrentTime();

// Task 2, 3, 4, 5: Booking input and validation
const openTime = { hour: 8, minute: 0 };
const closeTime = { hour: 17, minute: 0 };

// Hardcoded existing booking
const existingBooking = {
    start: new Date('2025-11-02T09:00:00+07:00'),
    end: new Date('2025-11-02T12:00:00+07:00')
};

// Helper: Check overlap
function isOverlapping(startA, endA, startB, endB) {
    return startB <= endA && endB >= startA;
}

// Helper: Check if time is within allowed hours
function isWithinOpenHours(startDate, endDate) {
    const open = new Date(startDate);
    open.setHours(openTime.hour, openTime.minute, 0, 0);

    const close = new Date(endDate);
    close.setHours(closeTime.hour, closeTime.minute, 0, 0);

    return startDate >= open && endDate <= close;
}

checkBtn.addEventListener("click", () => {
    const startDate = new Date(startInput.value);
    const endDate = new Date(endInput.value);

    if (isNaN(startDate) || isNaN(endDate)) {
        bookingResultDiv.textContent = "Please enter valid start and end datetime.";
        bookingInfoDiv.textContent = "";
        return;
    }

    // Task 3: Validate booking hours
    const validHours = isWithinOpenHours(startDate, endDate);
    const validMsg = validHours ? "Valid Booking Time" : "Invalid Booking Time";

    // Task 4: Check overlap
    const overlap = isOverlapping(startDate, endDate, existingBooking.start, existingBooking.end);
    const overlapMsg = overlap ? "Booking overlaps existing booking!" : "No overlap with existing booking.";

    bookingResultDiv.textContent = `${validMsg} | ${overlapMsg}`;

    // Task 5: Display formatted booking info
    const formattedStart = startDate.toLocaleString('th-TH', { timeZone: 'Asia/Bangkok' });
    const formattedEnd = endDate.toLocaleString('th-TH', { timeZone: 'Asia/Bangkok' });
    const existingStart = existingBooking.start.toLocaleString('th-TH', { timeZone: 'Asia/Bangkok' });
    const existingEnd = existingBooking.end.toLocaleString('th-TH', { timeZone: 'Asia/Bangkok' });

    bookingInfoDiv.innerHTML = `
        <strong>Your Booking:</strong><br>
        Start: ${formattedStart}<br>
        End: ${formattedEnd}<br><br>
        <strong>Existing Booking:</strong><br>
        Start: ${existingStart}<br>
        End: ${existingEnd}
    `;
});
