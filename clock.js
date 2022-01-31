function calculateAngle(hours, minutes) {
    let minutesAngle = minutes * (360 / 60);
    let hoursAngle = (hours % 12) * 30 + (minutes/2);
    let result = Math.abs(hoursAngle - minutesAngle);
    return Math.min(result, 360 - result);
    }
