var year = prompt('What is your birth year?', '');
if(year < 1990) {
    alert('Too early...');
}
else if(year > 1990) {
    alert('Too late');
}
else {
    alert('Yeap');
}
