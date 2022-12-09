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


//Pruebas y uso en consola:


console.log(`Tus gastos:`)
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
console.log(ingreso-gasto > 0 ? `Tenes un restante de ${ingreso-gasto}`:`Tenes un deficit de ${ingreso-gasto}`)