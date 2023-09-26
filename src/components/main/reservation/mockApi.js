const availableTimesByDate = {
    '2023-08-29': ['10:00', '11:00', '12:00'],
    '2023-09-01': ['10:00', '11:00', '12:00'],
    '2023-09-02': ['14:00', '15:00', '16:00'],
    '2023-09-03': ['10:00', '11:00', '12:00'],
    '2023-09-04': ['14:00', '15:00', '16:00'],
    '2023-09-05': ['10:00', '11:00', '12:00'],
    '2023-09-06': ['14:00', '15:00', '16:00'],
    '2023-09-07': ['10:00', '11:00', '12:00'],
    '2023-09-08': ['14:00', '15:00', '16:00'],
    '2023-09-09': ['10:00', '11:00', '12:00'],
    '2023-09-10': ['14:00', '15:00', '16:00'],
    '2023-09-11': ['10:00', '11:00', '12:00'],
    '2023-09-12': ['14:00', '15:00', '16:00'],
    '2023-09-13': ['10:00', '11:00', '12:00'],
    '2023-09-14': ['14:00', '15:00', '16:00'],
    '2023-09-15': ['10:00', '11:00', '12:00'],
    '2023-09-24': ['14:00', '15:00', '16:00'],
    '2023-09-25': ['10:00', '11:00', '12:00'],
    '2023-09-26': ['14:00', '15:00', '16:00'],
    '2023-09-27': ['10:00', '11:00', '12:00'],
    '2023-09-28': ['14:00', '15:00', '16:00'],
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