/*var button1 = document.getElementById('button1');
button1.addEventListener('click', function (event) {
    console.log ('JavaScript Click Event', event);
    alert('You Clicked Button 1');
});*/

    /*var database = [
        {_id:'', name:'', genre:'', price:''},
        {_id:'', name:'', genre:'', price:''},
        {_id:'', name:'', genre:'', price:''},
        {_id:'', name:'', genre:'', price:''},
        {_id:'', name:'', genre:'', price:''},
        {_id:'', name:'', genre:'', price:''},
        {_id:'', name:'', genre:'', price:''},
        {_id:'', name:'', genre:'', price:''},
        {_id:'', name:'', genre:'', price:''},
        {_id:'', name:'', genre:'', price:''},
    ];*/
var foo = 'foo'; // Variables declared outside of any function are considered global variables.
                 // These variables can be found on the window object.
(function () {
    var database = [
        {_id:'000', name:'Earthbound', genre:'RPG', price:'19.99'},
        {_id:'001', name:'Super Mario Bros', genre:'Adventure', price:'19.99'},
        {_id:'002', name:'Super Mario Cart', genre:'Racing', price:'24.99'},
        {_id:'003', name:'Guitar Hero', genre:'Rhythm', price:'24.99'},
        {_id:'004', name:'Goat Simulator', genre:'Simulation', price:'6.99'},
        {_id:'005', name:'Crash Bandicoot', genre:'Action', price:'16.99'},
        {_id:'006', name:'Halo', genre:'Action', price:'39.99'},
        {_id:'007', name:'Chrono Trigger', genre:'RPG', price:'26.99'},
        {_id:'008', name:'MineCraft', genre:'Simulation', price:'30.99'},
        {_id:'009', name:'Just Dance', genre:'Rhythm', price:'12.99'},
    ];

    function renderList (results) {
        var tableBody = document.querySelector('#results-table tbody');

        // clear out inner HTML to get rid of any older results
        tableBody.innerHTML = '';
        // Map each database record to a string containing the HTML for it's row
        var tableRows = results.map(function (result, index) {
            return '<tr><td>' + index + '</td><td>' + result.name + '</td><td>' +
                result._id + '</td><td>' + result.published + '</td></tr>';
        });
        // Set the contents of the table body to the new set of rendered HTML rows
        tableRows.forEach(function (row) {
            tableBody.innerHTML += row; // += adds to HTML instead of overwriting it entirely.
        });

        // Lower level scope once again overwrites what's above it.
        var foo = 'renderList';
        console.log(foo); // 'renderList'
    }

    renderList(database);

    // Function to Order results list
    function orderBy(sortValue) {
        // Sort method varies based on what type of value we're sorting
        var sortedResults = (sortValue === 'name') ?
            database.sort(function (a, b) { // Strings need to be sorted in a slightly more compldex way
                var nameA = a.name.toUpperCase(); // ignore upper and lowercase
                var nameB = b.name.toUpperCase(); // ignore upper and lowercase
                // Sorts alphabetically.  -1 puts it before. 1 puts it after
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
            }) :
            database.sort(function (a, b) { // Numbers a booleans are much simpler.
                // Just need postive or negative number
                // Object properties can be accessed through a string representing their name
                return a[sortValue] - b[sortValue];
            });
        renderList(sortedResults);
    }
    // Change events trigger after the value of a form input changes
    document.querySelector('#orderBy').addEventListener('change', function(event){
        // Event is the JavaScript event that transpired, in our change a CHANGE event.
        // Target is the element it was performed on, useful for when the event targets
        // multiple elements.
        // Value has the name implies is the current value of the input element, if there is one
        orderBy(event.target.value);
    });

})();