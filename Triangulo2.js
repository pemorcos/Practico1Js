        let esc=0; /*Total de escalones*/
        let i=1;   /*Para contar los escalones*/
        let j=1;   /*Para recorrer cada escalon poniendo los #  */
        let k=1;   /*Para dar los espacios en la parte delantera de cada escalon */
        let op=1;
        let l=0;
        let pir = "";
        var hola = "Hola Gero";
        console.log(hola);
        let hello = "Hecha la opcion de continuar con Do While";
        console.log(hello);
        do {
            esc= prompt("Ingrese la cantidad de Escalones (de 2 a 20 permitidos):"); 
            if (esc>=2 && esc<=20) {
                i=1;
                j=1;
                k=1;
                l=0   ;        
                console.log(`Triangulo de `, esc, `Escalones`);
                for(i=1; i<=esc;++i) {
                    pir = "";
                    
                    for(k=esc-i; k > 0; --k) {
                        pir += " ";
                    }
                    for(j=1; j <= i+l; ++j) {
                        
                        pir += "#";
                    }

                    console.log(pir);
                    l=i;
                }
            } else {
                console.error("Valor ingresado fuera de Rango");
            }
            op = prompt("Ingrese 1 para continuar");
        } while (op==1);