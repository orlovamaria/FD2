const togglePreloader = () => {
    const preloader = document.querySelector('.wrap-preloader')
    preloader.classList.toggle('preloader-show')
}




const renderUniverList = async () => {
    const currentUniver = document.querySelector('#current-tour').value
    togglePreloader()
    const dataUniver = await getListUniver(currentUniver);
    const univerList = document.querySelector('#list-matches')

    univerList.innerHTML = '';
    dataUniver.forEach((element) => {
        univerList.innerHTML += 
        `
        <a href="#!" class="collection-item">
            <span class="badge">${element.name}</span>
            <i class='material-icons'>arrow_forward</i>
        Match</a>
        `
    });
    togglePreloader()
}



renderUniverList()

document.querySelector('#current-tour').addEventListener('change', renderUniverList)

