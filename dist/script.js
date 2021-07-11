
// sets up date in footer of HTML
let dtEl = $('<p>');
let todayDate = moment().format("MMM D, YYYY");
dtEl.text(todayDate);
$('#today-date').append(dtEl);