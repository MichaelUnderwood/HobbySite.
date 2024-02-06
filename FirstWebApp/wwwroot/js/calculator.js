$(document).ready(function () {
    $('#calculate').on('click', function () {
        // Get user input
        var hours = parseFloat($('#hours').val());

        // Validate input
        if (isNaN(hours) || hours <= 0) {
            alert('Please enter a valid positive number for hours.');
            return;
        }

        // Hourly rate (modify this based on your actual rate)
        var hourlyRate = 50;

        // Calculate total
        var total = hours * hourlyRate;

        // Display total
        $('#total').val('$' + total.toFixed(2));
    });
});
