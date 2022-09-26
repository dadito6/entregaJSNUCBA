const url = 'http://api.mediastack.com/v1/news?access_key=896876a59fde662b4a62015acb4355e1&sources=en,es,-ar.'
const form = document.getElementById('containeer-1')
const btn = document.getElementById('btn')
const general= document.getElementById('general')


document.addEventListener('DOMContentLoaded', async () =>{
  
    let info2 = []
    const desta = document.getElementById('destacado')
    let info = [ ]

    try{
        if(localStorage.getItem('Data')){
        const infor = JSON.parse(localStorage.getItem('Data'))
        console.log(infor)
        info = infor[0]
        info2 = infor[4]
        }else{
            const response= await fetch(url)
            const  inform = await response.json()
            localStorage.setItem('Data',JSON.stringify(inform.data))
            info=inform[0]
            info2=inform[4]
        
    }
        

    }catch(error){
        console.log(error)
    }


    const newA = [ info, info2]

    newA && newA.map(info => {pegarHtml(info,desta,false)} )


        if(btn){
        btn.addEventListener("click", async()=> {
        
        const infor = await JSON.parse(localStorage.getItem('Data'))
        const input = document.getElementById('search').value.toLowerCase()
        const result = document.getElementById('result')
        const imagen =  document.getElementById('img-cargando')
        if (input){
            const but = document.getElementsByClassName('boton')
            imagen.style.display = 'flex'; 
            const newa = infor && infor.flatMap(item => (  {title : item.title.toLowerCase() , image :item.image && item.image, description : item.description.toLowerCase(), url :item.url}) )
           
            if(!newa){
                console.log('no tengo datos')
             }else{
           
                console.log('data:' , newa)
                const encontrados = []
                for ( let elem in newa){
                    if(newa[elem].title.includes(input) || newa[elem].description.includes(input)){
                        encontrados.push(newa[elem])   
                    }
                }
                console.log(encontrados)
                setTimeout(()=>{
                    if (encontrados.length ===0 ){
                        const li = document.createElement('li')
                        const ul =  document.createElement('ul')
                        const span =  document.createElement('span')
                        span.appendChild(document.createTextNode('no encontramos su busqueda...'))
                        span.id='spanSinResult';
                        li.appendChild(span)
                        ul.appendChild(li)
                        result.appendChild(ul)
                    }
                    encontrados && encontrados.map ( item => pegarHtml(item,result,true) )
                    imagen.style.display = "none";
                    },2000) 
                   

                
                    but.onclick= function(){
                        console.log('probandoo')
                        console.log(PosFilter)
                        alert("nelsonn")
                        window.location.href=PosFilter.url;
                    }
                
                      
                        
                    }
              
             
        }else {
            alert('manda algo ')
        }
   
        

     
    
        
    })}


   
    
        

    


})






function pegarHtml (info,destino,a) { 
    const div = document.createElement('div')
    const li = document.createElement('li')
    const l = document.createElement('li')
    const des = document.createElement('span')
    const img = document.createElement('img')
    const span = document.createElement('span')
    const ul = document.createElement('ul')
    span.appendChild(document.createTextNode(info.title))
    des.appendChild(document.createTextNode(info.description))
    li.appendChild(span)
    l.appendChild(des)
    ul.appendChild(li)
    ul.appendChild(l)
    div.appendChild(ul) 
    destino.appendChild(div)
    if (info.image){
        img.src = info.image
        li.appendChild(img)
    }else{
        const br = document.createElement('br')
        const spanNoImage=document.createElement('span')
        spanNoImage.appendChild(br )
        spanNoImage.appendChild(document.createTextNode('no image available'))
        li.appendChild(spanNoImage)
    }
    if (a){
        const but = document.createElement('button')
        const aa = document.createElement('a')
        but.setAttribute('class','boton')
        but.appendChild(document.createTextNode('verArticulo'))
        but.appendChild(aa)
        div.appendChild(but)
    }
}




    function crearSeccion(event) {
        const infor = JSON.parse(localStorage.getItem('Data'))
        if (event === 'ge'){
        let num1 =  Math.floor(Math.random()*25)
        let num2 =  Math.floor(Math.random()*25) 
        pegarHtml(infor[num1],general,true)
        pegarHtml(infor[num2],general,true)
        }else if (event === 'po'){
            pegarData("politica")
        }else{
            pegarData("deportes")
            }

        }
    
        function pegarData(tipo){
            const li = document.createElement('li');
            const ul =  document.createElement('ul')
            const span = document.createElement('span')
            span.appendChild(document.createTextNode(`No se posee informacion sobre ${tipo}`))
            li.appendChild(span)
            ul.appendChild(li)
            general.appendChild(ul)
        }





    














