let container = document.createElement('div')
container.setAttribute('class','container')




let ul = document.createElement('ul')
ul.setAttribute('class','row')

for(let i = 0; i<pokemon.length; i++ ){
    let li = document.createElement('li')
    li.setAttribute('class','card col-3 g-5 ms-5')
    li.style.background='#fff000';


    let num = document.createElement('h5')
    num.setAttribute('class','card-title')

    let img = document.createElement('img')
    
    let h3 = document.createElement('h3')
    h3.setAttribute('class','card-title')

    
    
    
    
    img.src=`${pokemon[i].img}`,
    h3.textContent=`Name: ${pokemon[i].name}`,
    num.textContent=`Number: ${pokemon[i].num}`,

    li.appendChild(img)
    li.appendChild(h3)
    li.appendChild(num)
    pokemon[i].type.forEach(element => {
        let type = document.createElement('h5')
        type.setAttribute('class','badge bg-dark w-12')
        type.textContent=element;
        li.appendChild(type)
    });
    
    ul.appendChild(li)
}




let SearchPokemon = document.getElementById('inputsearch')
let btn = document.getElementById('btn');
btn.addEventListener('click', (e)=>{
    e.preventDefault();

    let pokem = pokemon.find(item => item.name == SearchPokemon.value);
  
     alert(` number:  ${pokem.num}, \n  name: ${pokem.name}, \n  height: ${pokem.height}, \n weight:  ${pokem.weight}, \n egg: ${pokem.egg}, \n weaknesses: ${pokem.weaknesses.join(' ')}` );
})

  
  




container.appendChild(ul)
document.body.appendChild(container)

