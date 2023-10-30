const availableTimesByDate = {
    '2023-10-30': ['10:00', '11:00', '12:00'],
    '2023-10-31': ['10:00', '11:00', '12:00'],
    '2023-11-01': ['10:00', '11:00', '12:00'],
    '2023-11-02': ['14:00', '15:00', '16:00'],
    '2023-11-03': ['10:00', '11:00', '12:00'],
    '2023-11-04': ['14:00', '15:00', '16:00'],
    '2023-11-05': ['10:00', '11:00', '12:00'],
    '2023-11-06': ['14:00', '15:00', '16:00'],
    '2023-11-07': ['10:00', '11:00', '12:00'],
    '2023-11-08': ['14:00', '15:00', '16:00'],
    '2023-11-09': ['10:00', '11:00', '12:00'],
    '2023-11-10': ['14:00', '15:00', '16:00'],
    '2023-11-11': ['10:00', '11:00', '12:00'],
    '2023-11-12': ['14:00', '15:00', '16:00'],
    '2023-11-13': ['10:00', '11:00', '12:00'],
    '2023-11-14': ['14:00', '15:00', '16:00'],
    '2023-11-15': ['10:00', '11:00', '12:00'],
    '2023-11-24': ['14:00', '15:00', '16:00'],
    '2023-11-25': ['10:00', '11:00', '12:00'],
    '2023-11-26': ['14:00', '15:00', '16:00'],
    '2023-11-27': ['10:00', '11:00', '12:00'],
    '2023-11-28': ['14:00', '15:00', '16:00'],
    '2023-11-29': ['14:00', '15:00', '16:00'],
};


const fetchAPI = (date) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (availableTimesByDate[date]) {
                console.log("mockApi return: ", availableTimesByDate[date], date);
                resolve(availableTimesByDate[date]);
            }
            else {
                console.log("mockApi return: ", "No available times for the selected date.", date);
                reject(new Error('No available times for the selected date.'));
            }
        }, 1000)
    })
}

// changed the api then it returns false sometimes.
const submitAPI = (formData) => {

    availableTimesByDate[formData.date] = availableTimesByDate[formData.date].filter(time => time !== formData.time);

    return new Promise((resolve, reject) => {
        let success = Math.floor(Math.random()*10);
        setTimeout(() => {
            if (success > 4) {
                const reservationId = Math.floor(Math.random()*100000);
                console.log("mockApi return: submission done", formData, reservationId, success);
                resolve(reservationId); // Simulate successful submission
            } else {
                console.log("mockApi return: submission failed", formData, success);
                reject(new Error('Form submission failed.'));
            }
        }, 1000); // Simulate API delay
    });
};

export { fetchAPI, submitAPI }