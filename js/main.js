var array=[1,2,0,2,3,6,7,-7,12,15];

function maior(array){  
    var maior = array[0];
    for(valor of array){
        if(maior < valor){ 
            maior=valor;   
        }        
    }     
    return maior; 
}
console.log(array);
console.log("maior: "+maior(array));

function minimo(array){
    var minimo = array[0];
    /*for(valor of array){
        if(minimo > valor){
            minimo=valor;
        }
    } 
    return minimo;
    */
   return array.reduce((a,b) => a+b, 0);
}
console.log("menor: " +minimo(array));