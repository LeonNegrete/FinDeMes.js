window.addEventListener('load', ()=>{
    let botonMas = document.querySelector('#masCampos');
    let form = document.querySelector('#form');
    let body = document.querySelector('body');
    let formContent = document.querySelector('.formContent')
    let ingresar = document.querySelector('#ingresar');
    let nombreLabel = document.querySelector('#nombreLabel')
    
    
    let count = 1
    botonMas.addEventListener('click', (e)=>{
        e.preventDefault();
        let newLabelTxt = document.createElement('label')
        newLabelTxt.for = 'ingresoNombre' + count
        if (body.querySelector('.results') == null){
            newLabelTxt.innerText = 'Nombre de ingreso'
        }else{
            newLabelTxt.innerText = 'Nombre de gasto'
        }
        
        newLabelTxt.classList.add('label','mt-5')
        newLabelTxt.setAttribute('id','nombreLabel')

        let newLabelNum = document.createElement('label')
        newLabelNum.for = 'ingresoMonto' + count
        newLabelNum.innerText = 'Monto'
        newLabelNum.classList.add('label','mt-2')

        //Input Nombre de ingreso
        let newInputTxt = document.createElement('input')
        newInputTxt.setAttribute('type', 'text')
        newInputTxt.setAttribute('id', count)
        newInputTxt.setAttribute('name', 'ingresoNombre' + count)
        newInputTxt.classList.add('input', 'is-primary', 'column','is-warning','is-small','mb-1')
        //Input Monto
        let newInputNum = document.createElement('input')
        newInputNum.setAttribute('type', 'Number')
        newInputNum.setAttribute('id', count)
        newInputNum.setAttribute('name', 'ingresoMonto' + count)
        newInputNum.classList.add('input', 'is-primary', 'column','is-warning','is-small','mb-1')
        count++

        formContent.appendChild(newLabelTxt)
        formContent.appendChild(newInputTxt)
        formContent.appendChild(newLabelNum)
        formContent.appendChild(newInputNum)
    })
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        let data = new FormData(form)//Toma cada valor de los input
        let dataObj = Object.fromEntries(data);//Convierte los valores en un objeto  
        if (body.querySelector('.results') == null){ //Evalua si todavia no se enviaron los ingresos
            let results = document.createElement('table') //Crea la tabla de ingresos
            results.classList.add('results','table','is-warning','is-bordered','is-narrow') //Estilos de la tabla de ingresos
            
            let thead = document.createElement('thead');
            let th1 = document.createElement('th');
            let th2 = document.createElement('th');
            th1.innerText = 'Nombres'
            th2.innerText = 'Ingreso'
            thead.appendChild(th1);
            thead.appendChild(th2);
            results.appendChild(thead);
            
            let gastoTotal = 0; //Inicializa la variable que acumulara el total de ingesos
            let newObj = {}
            for (let [key,value] of Object.entries(dataObj)){ //Itera cada valor del input
                if (key.includes('Nombre')){ //Evalua si es un Nombre de ingreso
                    var tr = document.createElement('tr');//row que sera atrapada en esta iteracion y la siguiente
                    let td = document.createElement('td');//cell que tendra el valor de la iteracion (Nombre de ingreso)
                    td.innerText = `${value}`
                    newObj[key] = value
                    tr.appendChild(td)
                }else{
                    let td = document.createElement('td')//cell que tendra el valor de la iteracion (monto)
                    td.innerText = `$${value}`
                    tr.appendChild(td)
                    results.appendChild(tr)
                    newObj[key] = value
                    gastoTotal += +value
                }
            }
            localStorage.setItem('ingresos', JSON.stringify(newObj))
            //Armando el total en la tabla
            let trTotal = document.createElement('tr')
            let tdTotalTxt = document.createElement('td')
            let tdTotal = document.createElement('td')
            tdTotalTxt.innerText = 'Total'
            trTotal.appendChild(tdTotalTxt)
            tdTotal.innerText = gastoTotal
            trTotal.appendChild(tdTotal);
            trTotal.classList.add('is-selected')
            results.appendChild(trTotal);
            body.appendChild(results);

            results.classList.toggle('animation');  
            form.classList.toggle('animation');
            nombreLabel.innerText = 'Nombre de gastos'
            let newLabelsTxt = document.querySelectorAll('#nombreLabel')
            for (const label of newLabelsTxt) {
                label.innerText = 'Nombre de gastos'
            }
            //Limpio inputs
            for (const each of document.querySelectorAll('.input')){
                each.value = '';
            }
        }else{
            let resultsExpense = document.createElement('table') //Crea la tabla de ingresos
            resultsExpense.classList.add('resultsExpense','table','is-bordered','is-narrow','is-warning') //Estilos de la tabla de ingresos
            
            let thead = document.createElement('thead');
            let th1 = document.createElement('th');
            let th2 = document.createElement('th');
            th1.innerText = 'Nombres'
            th2.innerText = 'Gasto'
            thead.appendChild(th1);
            thead.appendChild(th2);
            resultsExpense.appendChild(thead);
            
            let gastoTotal = 0; //Inicializa la variable que acumulara el total de ingesos
            localStorage.setItem('gastos', JSON.stringify(dataObj))
            for (let [key,value] of Object.entries(dataObj)){ //Itera cada valor del input
                if (key.includes('Nombre')){ //Evalua si es un Nombre de ingreso
                    var tr = document.createElement('tr');//row que sera atrapada en esta iteracion y la siguiente
                    let td = document.createElement('td');//cell que tendra el valor de la iteracion (Nombre de ingreso)
                    td.innerText = `${value}`
                    tr.appendChild(td)
                }else{
                    let td = document.createElement('td')//cell que tendra el valor de la iteracion (monto)
                    td.innerText = `$${value}`
                    tr.appendChild(td)
                    resultsExpense.appendChild(tr)
                    gastoTotal += +value
                }
            }
            //Armando el total en la tabla
            let trTotal = document.createElement('tr')
            let tdTotalTxt = document.createElement('td')
            let tdTotal = document.createElement('td')
            tdTotalTxt.innerText = 'Total'
            trTotal.appendChild(tdTotalTxt)
            tdTotal.innerText = gastoTotal
            trTotal.appendChild(tdTotal);
            trTotal.classList.add('is-selected')
            resultsExpense.appendChild(trTotal);
            body.appendChild(resultsExpense);



            resultsExpense.classList.toggle('animation'); 
            form.classList.toggle('lastAnimation');
        }
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


