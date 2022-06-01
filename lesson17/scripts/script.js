// Task 1
var custonPag = document.querySelector('#custon-pag')
var chevronLeft = document.querySelector('.chevron_left')

custonPag.addEventListener('click', function(event){
    if(event.target === chevronLeft){
        if(!document.querySelector('.active').previousElementSibling.classList.contains('arrow')){
            document.querySelector('.active').previousElementSibling.classList.add('active')
            document.querySelector('.active').nextElementSibling.classList.remove('active')
        }
    }

    if(event.target.parentElement.parentElement === document.querySelector('#right-arrow')){
        if(!document.querySelector('.active').nextElementSibling.classList.contains('arrow')){
            document.querySelector('.active').nextElementSibling.classList.add('active')
            document.querySelector('.active').classList.remove('active')
        }
    }
})



/** Task 2 */

var allButtons = ['Button 1', 'Test Btn', 'Open Link', 'To News', 'Modal Window','Best Btn'];

var boxBtn = document.querySelector('#box-btn');

function addBtn(arr){
    for(var i = 0; i < allButtons.length; i++){
        var btn = document.createElement('a')
        btn.classList.add('waves-effect')
        btn.classList.add('waves-light')
        btn.classList.add('btn')
        btn.innerHTML = allButtons[i]
        boxBtn.append(btn)
    }
}
addBtn(allButtons)


 

/** Task3 */

var allCollection = ['Elem1', 'Hello World!', 'I love JS', 'Simple Element', 'Item 5'];

var collectionList = document.getElementById('collection-list')

function addList(arr){
    for(var i = 0; i < allCollection.length; i++){
        var line = document.createElement('a')
        line.classList.add('collection-item')
        line.innerHTML = allCollection[i];
        collectionList.append(line)
    }
}
addList(allCollection)

collectionList.addEventListener('click', function(event){
    if(event.target.tagName ==='A'){
        alert(event.target.innerHTML)
    }
})

// Task 4

var collectionContainer = document.getElementById('collection_container')

collectionContainer.addEventListener('click', function(event){
    if(event.target.tagName === 'I'){
        event.target.parentElement.parentElement.remove()
    }

    if(collectionContainer.children.length === 0){
        var mes = document.createElement('p')
        mes.innerHTML = 'Empty to-do'
        collectionContainer.append(mes)
    }
})


// Task 5

var colorBlock = document.getElementById('colorBlock')

colorBlock.addEventListener('click', function(event){
    if(event.target.innerHTML === 'blue'){
        event.target.style.backgroundColor = 'blue'
    }

    if(event.target.innerHTML === 'red'){
        event.target.style.backgroundColor = 'red'
    }
})



/** Task6 */


var infoList = [
    {
        id: 1,
        name: 'Манчестер Юнайтед',
        yearFoundation: 1878,
        championsLeague: [1968, 1999, 2008],
        europaLeague: [2017],
        url: './images/footbal/manchester.png'
    },
    {
        id: 2,
        name: 'Барселона',
        yearFoundation: 1899,
        championsLeague: [1992, 2006, 2009, 2011, 2015],
        europaLeague: [],
        url: './images/footbal/barcelona.png'
    },
    {
        id: 3,
        name: 'ПСЖ',
        yearFoundation: 1970,
        championsLeague: [],
        europaLeague: [],
        url: './images/footbal/psg.png'
    },
    {
        id: 4,
        name: 'Ювентус',
        yearFoundation: 1897,
        championsLeague: [1985, 1996],
        europaLeague: [],
        url: './images/footbal/juventus.png'
    },
    {
        id: 5,
        name: 'Бавария',
        yearFoundation: 1900,
        championsLeague: [1974, 1975, 1976, 2001, 2013, 2020],
        europaLeague: [],
        url: './images/footbal/bayern.png'
    }
]

var select = document.getElementById('select')
var img = document.getElementById('img')
var years = document.querySelector('.years')
select.addEventListener('change', function(){
    for(var i = 0; i < infoList.length; i++){
        if(+select.options[select.selectedIndex].value === infoList[i].id){
            img.src = infoList[i].url
            years.children[0].innerHTML = infoList[i].yearFoundation
            if(infoList[i].championsLeague.length === 0){
                years.children[1].innerHTML = 'На данный момент нет кубков'
            }
            else{
                years.children[1].innerHTML = ''
            infoList[i].championsLeague.forEach(function(elem){
                return years.children[1].innerHTML += (elem + ', ')
            })
            }
            if(infoList[i].europaLeague.length === 0){
                years.children[2].innerHTML = 'На данный момент нет кубков'
            }
            else{
                years.children[2].innerHTML = infoList[i].europaLeague
            }
        }
    }
})




// Task 7

var grid = document.getElementById('grid');
var btnTable = document.getElementById('btnTable')
var tbody = document.getElementsByTagName('tbody')

btnTable.addEventListener('click', function(){
    var arr = []
    var arrSort = [];
     for(var i = 0; i < tbody[0].children.length; i++){
        arr.push([+tbody[0].children[i].children[0].innerHTML, tbody[0].children[i].children[1].innerHTML])
     }
    
    
    console.log(arrSort)
})




/**Task8 */

var searchList = [
    'Мишка',
    'Осьминожка',
    'Акула',
    'Авокадо',
    'Моль Молли',
    'Альпака',
    'Пингвиненок',
    'Моль',
    'Пачакун',
    'Ленивец'
]

var input = document.querySelector('input[type=search]')
var list = document.getElementById('list')

// input.addEventListener('input', function(event){
    
//     var arr = searchList.filter(function(elem){
//            if(elem.startsWith(event.target.value)){
//                  return elem
//            }
//     })
//     arr.forEach(function(elem){
//         return [...list.children].forEach(function(el){
//             if(elem === el.innerHTML){
//                 if(input.value === ''){
//                      return el.style.display = 'block'
//                 }
//                  return el.style.display = 'block'
//             }
//             else{
//                 return el.style.display = 'none'
//             }
//         })
//     })
// })
input.addEventListener('input',function(){
    var li = document.querySelectorAll('#list li');

    li.forEach(function(elem){
        if( !(elem.innerHTML.includes(input.value)) && input.value !== ''){

            elem.style.display = 'none';

        }else{
            elem.style.display = 'block';
        }
    });
});