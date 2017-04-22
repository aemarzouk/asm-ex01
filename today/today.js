var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

exports.dayOfWeek = function() {
return days[new Date().getDay() - 1];
}