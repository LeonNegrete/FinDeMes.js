/*  let fechaDeHoy = new Date();


let trabajo = {
    sueldo:103000,
    ingreso:new Date(2022,4),
    mesesAntiguedad: ()=>{
        let months = (fechaDeHoy.getFullYear - trabajo.ingreso.getFullYear)*12
        months -= trabajo.ingreso.getMonth
        months += fechaDeHoy.getMonth
        return months <= 0? 0: months
    },
    aguinaldo: ()=> {
        if (trabajo.mesesAntiguedad() < 6){
            return (trabajo.sueldo / 12) * trabajo.mesesAntiguedad()
        }else{
            return trabajo.sueldo / 2
        }
    },
    aumento: (porcentaje)=>{
        trabajo.sueldo += (trabajo.sueldo/100) * porcentaje
    }
}

let gastos = {
    habitacionales:61200,
    luz:1200,
    gas:500,
    internet:2400,
    telefoniaMovil:1100,
    educacion:22040,
    comidaHigiene:30000,
    sube:300,
    deporte:undefined
}

let ingresos = {
    sueldo:trabajo.sueldo,
    cuotaAlimentaria:20000,
    abuela:6000,
    resto:undefined,
    ahorro:undefined,
    aumento:undefined,
    aguinaldo:undefined
}



let calcular = (gastosArg) => {
    let valores = Object.values(gastosArg).filter(e => e); //Dando como callback la condicion e, los valores que se leen como false (null o undefined) no seran incluidos
    return valores.reduce((acc,val)=>{
        return acc = acc + val
    })
    
}

let ingreso = calcular(ingresos);
let gasto = calcular(gastos); */


window.addEventListener('load', ()=>{

    let botonMas = document.querySelector('#masCampos');
    let form = document.querySelector('#form');
    let body = document.querySelector('body');
    let formContent = document.querySelector('.formContent')
    let ingresar = document.querySelector('#ingresar');

    let count = 1
    botonMas.addEventListener('click', (e)=>{
        e.preventDefault();
        let newLabelTxt = document.createElement('label')
        newLabelTxt.for = 'ingresoNombre' + count
        newLabelTxt.innerText = 'Nombre de ingreso'
        newLabelTxt.classList.add('label','mt-5')

        let newLabelNum = document.createElement('label')
        newLabelNum.for = 'ingresoMonto' + count
        newLabelNum.innerText = 'Monto'
        newLabelNum.classList.add('label','mt-2')

        //Input Nombre de ingreso
        let newInputTxt = document.createElement('input')
        newInputTxt.setAttribute('type', 'text')
        newInputTxt.setAttribute('id', count)
        newInputTxt.setAttribute('name', 'ingresoNombre' + count)
        newInputTxt.classList.add('input', 'is-primary', 'column','mb-1')
        //Input Monto
        let newInputNum = document.createElement('input')
        newInputNum.setAttribute('type', 'Number')
        newInputNum.setAttribute('id', count)
        newInputNum.setAttribute('name', 'ingresoMonto' + count)
        newInputNum.classList.add('input', 'is-primary', 'column','mb-1')
        count++

        formContent.appendChild(newLabelTxt)
        formContent.appendChild(newInputTxt)
        formContent.appendChild(newLabelNum)
        formContent.appendChild(newInputNum)
    })
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        let data = new FormData(form)
        let dataObj = Object.fromEntries(data);   
        let results = document.createElement('p')
        results.classList.add('results')
        results.innerText += `Tus gastos:\n`
        let gastoTotal = 0;
        for (let [key,value] of Object.entries(dataObj)){
            console.log(key)
            if (key.includes('Nombre')){
                results.innerHTML += `${value}: `;
            }else{
                results.innerHTML += `${value}<br>`;
                gastoTotal += +value
            }
            
        }
        results.innerHTML +=`<br> Total: ${gastoTotal}`
        body.appendChild(results);


        //agregar creacion dinamica de form ingresos
        //remplazar nombres de lo pegado debajo
        let count = 1
        let botonMasIng = document.createElement('button');
        botonMasIng.id = 'botonMasIng'
        botonMasIng.addEventListener('click', ()=>{
        let newInputTxt = document.createElement('input')
        newInputTxt.setAttribute('type', 'text')
        newInputTxt.setAttribute('id', count)
        newInputTxt.setAttribute('name', 'ingresoNombre' + count)
        newInputTxt.classList.add('input is-primary column is-one-quarter')
        let newInputNum = document.createElement('input')
        newInputNum.setAttribute('type', 'Number')
        newInputNum.setAttribute('id', count)
        newInputNum.setAttribute('name', 'ingresoMonto' + count)
        newInputNum.classList.add('input is-primary column is-one-quarter')
        count++

        form.appendChild(newInputTxt)
        form.appendChild(newInputNum)
        })
        form.addEventListener('submit', (e)=>{
        e.preventDefault();
        let data = new FormData(form)
        let dataObj = Object.fromEntries(data);   
        let results = document.createElement('p')
        results.innerText += `Tus gastos:\n`
        let gastoTotal = 0;
        for (let [key,value] of Object.entries(dataObj)){
            console.log(key)
            if (key.includes('Nombre')){
                results.innerHTML += `${value}: `;
            }else{
                results.innerHTML += `${value}<br>`;
                gastoTotal += +value
            }
            
        }
        results.innerHTML +=`<br> Total: ${gastoTotal}`
        body.appendChild(results);

        console.log(Object.entries(dataObj))
        })
    })


    let fechaDeHoy = new Date();
    let trabajo = {
        sueldo:103000,
        ingreso:new Date(2022,4),
        mesesAntiguedad: ()=>{
            let months = (fechaDeHoy.getFullYear - trabajo.ingreso.getFullYear)*12
            months -= trabajo.ingreso.getMonth
            months += fechaDeHoy.getMonth
            return months <= 0? 0: months
        },
        aguinaldo: ()=> {
            if (trabajo.mesesAntiguedad() < 6){
                return (trabajo.sueldo / 12) * trabajo.mesesAntiguedad()
            }else{
                return trabajo.sueldo / 2
            }
        },
        aumento: (porcentaje)=>{
            trabajo.sueldo += (trabajo.sueldo/100) * porcentaje
        }
    }
    
    let gastos = {
        habitacionales:61200,
        luz:1200,
        gas:500,
        internet:2400,
        telefoniaMovil:1100,
        educacion:22040,
        comidaHigiene:30000,
        sube:300,
        deporte:undefined
    }
    
    let ingresos = {
        sueldo:trabajo.sueldo,
        cuotaAlimentaria:20000,
        abuela:6000,
        resto:undefined,
        ahorro:undefined,
        aumento:undefined,
        aguinaldo:undefined
    }
    
    
    
    let calcular = (gastosArg) => {
        let valores = Object.values(gastosArg).filter(e => e); //Dando como callback la condicion e, los valores que se leen como false (null o undefined) no seran incluidos
        return valores.reduce((acc,val)=>{
            return acc = acc + val
        })
        
    }
    
    let ingreso = calcular(ingresos);
    let gasto = calcular(gastos);

    


    console.log('...')
    console.log(`Tus ingresos`)
    console.log(`________________________________________________________`)
    for (ingresoArg in ingresos){
        console.log(`${ingresoArg} : ${ingresos[ingresoArg]}`)
    }


    
    console.log(`________________________________________________________`)
    console.log(`Total: ${ingreso}`)
    console.log(`________________________________________________________`)
    console.log('...')
    console.log(ingreso-gasto > 0 ? `Tenes un restante de ${ingreso-gasto}`:`Tenes un deficit de ${ingreso-gasto}`)


})










//Pruebas y uso en consola:


/* console.log(`Tus gastos:`)
console.log(`________________________________________________________`)
for (gastoArg in gastos){
    console.log(`${gastoArg} : ${gastos[gastoArg]}`)
}
console.log(`________________________________________________________`)
console.log(`Total: ${gasto}`)
console.log(`________________________________________________________`)
console.log('...')
console.log(`Tus ingresos`)
console.log(`________________________________________________________`)
for (ingresoArg in ingresos){
    console.log(`${ingresoArg} : ${ingresos[ingresoArg]}`)
}
console.log(`________________________________________________________`)
console.log(`Total: ${ingreso}`)
console.log(`________________________________________________________`)
console.log('...')
console.log(ingreso-gasto > 0 ? `Tenes un restante de ${ingreso-gasto}`:`Tenes un deficit de ${ingreso-gasto}`) */