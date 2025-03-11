const defaultSection = 'seccionLibro';
console.log("defaultSeccion", defaultSection)
document.getElementById(defaultSection).classList.remove('hidden');

document.getElementById('sectionSelector').addEventListener('change', function(){
    let selectedValue= this.value;
console.log("defaultSeccion", selectedValue)


    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden');
    });




    document.getElementById(selectedValue).classList.remove('hidden');
})