const a1 = document.getElementById("a1")
const a2 = document.getElementById("a2")
const a3 = document.getElementById("a3")
const a4 = document.getElementById("a4")
const a5 = document.getElementById("a5")
const a6 = document.getElementById("a6")
const a7 = document.getElementById("a7")
const a8 = document.getElementById("a8")
const b1 = document.getElementById("b1")
const b2 = document.getElementById("b2")
const b3 = document.getElementById("b3")
const b4 = document.getElementById("b4")
const b5 = document.getElementById("b5")
const b6 = document.getElementById("b6")
const b7 = document.getElementById("b7")
const b8 = document.getElementById("b8")
const c1 = document.getElementById("c1")
const c2 = document.getElementById("c2")
const c3 = document.getElementById("c3")
const c4 = document.getElementById("c4")
const c5 = document.getElementById("c5")
const c6 = document.getElementById("c6")
const c7 = document.getElementById("c7")
const c8 = document.getElementById("c8")
const d1 = document.getElementById("d1")
const d2 = document.getElementById("d2")
const d3 = document.getElementById("d3")
const d4 = document.getElementById("d4")
const d5 = document.getElementById("d5")
const d6 = document.getElementById("d6")
const d7 = document.getElementById("d7")
const d8 = document.getElementById("d8")
const e1 = document.getElementById("e1")
const e2 = document.getElementById("e2")
const e3 = document.getElementById("e3")
const e4 = document.getElementById("e4")
const e5 = document.getElementById("e5")
const e6 = document.getElementById("e6")
const e7 = document.getElementById("e7")
const e8 = document.getElementById("e8")
const f1 = document.getElementById("f1")
const f2 = document.getElementById("f2")
const f3 = document.getElementById("f3")
const f4 = document.getElementById("f4")
const f5 = document.getElementById("f5")
const f6 = document.getElementById("f6")
const f7 = document.getElementById("f7")
const f8 = document.getElementById("f8")
const g1 = document.getElementById("g1")
const g2 = document.getElementById("g2")
const g3 = document.getElementById("g3")
const g4 = document.getElementById("g4")
const g5 = document.getElementById("g5")
const g6 = document.getElementById("g6")
const g7 = document.getElementById("g7")
const g8 = document.getElementById("g8")
const h1 = document.getElementById("h1")
const h2 = document.getElementById("h2")
const h3 = document.getElementById("h3")
const h4 = document.getElementById("h4")
const h5 = document.getElementById("h5")
const h6 = document.getElementById("h6")
const h7 = document.getElementById("h7")
const h8 = document.getElementById("h8")
const nombreBlancas = document.getElementById("nombre-blancas")
const nombreNegras = document.getElementById("nombre-negras")

let historial=[]
let movimientos=0
let casillas=[]
let casillaInicial=null
let casillaFinal=null
let handlers=new Map ()
let contenedor
let contenedor1
let fichas = []
let fichasCoronacion = []
let contador
let turno = "blanco"
let turnos= 0

class Fichas {
    constructor (color, nombre, tipo, posicion, foto, turno){
        this.color= color
        this.nombre= nombre
        this.tipo= tipo
        this.posicion=posicion
        this.foto=foto
        this.movimiento = 0
        this.turno = turno
    }
}

let alfilBlanco = new Fichas ("blanco", "alfil-blanco", "alfil",64, "./img/alfilblanco.png")
let caballoBlanco = new Fichas ("blanco", "caballo-blanco", "caballo",64, "./img/caballoblanco.png")
let torreBlanca = new Fichas ("blanco", "torre-blanca", "torre",64, "./img/torreblanca.png")
let reinaBlanca = new Fichas ("blanco", "reina-blanca", "dama",64, "./img/reinablanca.png")
let alfilNegro = new Fichas ("negro", "alfil-negro", "alfil",64, "./img/alfilnegro.png")
let caballoNegro = new Fichas ("negro", "caballo-negro", "caballo",64, "./img/caballonegro.png")
let torreNegra = new Fichas ("negro", "torre-negra", "torre",64, "./img/torrenegra.png")
let reinaNegra = new Fichas ("negro", "reina-negra", "dama",64, "./img/reinanegra.png")

let peonBlanco1 = new Fichas ("blanco", "peon-blanco1", "peon", 1, "./img/peonblanco.png")
let peonBlanco2 = new Fichas ("blanco", "peon-blanco2", "peon", 9, "./img/peonblanco.png")
let peonBlanco3 = new Fichas ("blanco", "peon-blanco3", "peon", 17, "./img/peonblanco.png")
let peonBlanco4 = new Fichas ("blanco", "peon-blanco4", "peon", 25, "./img/peonblanco.png")
let peonBlanco5 = new Fichas ("blanco", "peon-blanco5", "peon", 33, "./img/peonblanco.png")
let peonBlanco6 = new Fichas ("blanco", "peon-blanco6", "peon", 41, "./img/peonblanco.png")
let peonBlanco7 = new Fichas ("blanco", "peon-blanco7", "peon", 49, "./img/peonblanco.png")
let peonBlanco8 = new Fichas ("blanco", "peon-blanco8", "peon", 57, "./img/peonblanco.png")
let torreBlanca1 = new Fichas ("blanco", "torre-blanca1", "torre", 0, "./img/torreblanca.png")
let torreBlanca2 = new Fichas ("blanco", "torre-blanca2", "torre", 56, "./img/torreblanca.png")
let alfilBlanco1 = new Fichas ("blanco", "alfil-blanco1", "alfil", 16,"./img/alfilblanco.png")
let alfilBlanco2 = new Fichas ("blanco", "alfil-blanco2", "alfil", 40,"./img/alfilblanco.png")
let caballoBlanco1 = new Fichas ("blanco", "caballo-blanco1", "caballo", 8,"./img/caballoblanco.png")
let caballoBlanco2 = new Fichas ("blanco", "caballo-blanco2", "caballo", 48,"./img/caballoblanco.png")
let reyBlanco= new Fichas ("blanco", "rey-blanco", "rey", 24,"./img/reyblanco.png")
let damaBlanca= new Fichas ("blanco", "dama-Blanca", "dama", 32,"./img/reinablanca.png")

let peonNegro1 = new Fichas ("negro", "peon-negro1", "peon", 6, "./img/peonnegro.png")
let peonNegro2 = new Fichas ("negro", "peon-negro2", "peon", 14, "./img/peonnegro.png")
let peonNegro3 = new Fichas ("negro", "peon-negro3", "peon", 22, "./img/peonnegro.png")
let peonNegro4 = new Fichas ("negro", "peon-negro4", "peon", 30, "./img/peonnegro.png")
let peonNegro5 = new Fichas ("negro", "peon-negro5", "peon", 38, "./img/peonnegro.png")
let peonNegro6 = new Fichas ("negro", "peon-negro6", "peon", 46, "./img/peonnegro.png")
let peonNegro7 = new Fichas ("negro", "peon-negro7", "peon", 54, "./img/peonnegro.png")
let peonNegro8 = new Fichas ("negro", "peon-negro8", "peon", 62, "./img/peonnegro.png")
let torreNegra1 = new Fichas ("negro", "torre-negra1", "torre", 7, "./img/torrenegra.png")
let torreNegra2 = new Fichas ("negro", "torre-negra2", "torre", 63, "./img/torrenegra.png")
let alfilNegro1 = new Fichas ("negro", "alfil-negro1", "alfil", 23,"./img/alfilnegro.png")
let alfilNegro2 = new Fichas ("negro", "alfil-negro2", "alfil", 47,"./img/alfilnegro.png")
let caballoNegro1 = new Fichas ("negro", "caballo-negro1", "caballo", 15,"./img/caballonegro.png")
let caballoNegro2 = new Fichas ("negro", "caballo-negro2", "caballo", 55,"./img/caballonegro.png")
let reyNegro= new Fichas ("negro", "rey-negro", "rey", 39,"./img/reynegro.png")
let damaNegra= new Fichas ("negro", "dama-negra", "dama", 31,"./img/reinanegra.png")

fichasCoronacion.push (alfilBlanco, caballoBlanco, torreBlanca, reinaBlanca, alfilNegro, caballoNegro, torreNegra, reinaNegra)
fichas.push(peonBlanco1, peonBlanco2, peonBlanco3, peonBlanco4, peonBlanco5, peonBlanco6, peonBlanco7, peonBlanco8, torreBlanca1, torreBlanca2, alfilBlanco1, alfilBlanco2, caballoBlanco1,caballoBlanco2, reyBlanco, damaBlanca, peonNegro1, peonNegro2, peonNegro3, peonNegro4, peonNegro5, peonNegro6, peonNegro7, peonNegro8, torreNegra1, torreNegra2, alfilNegro1, alfilNegro2, caballoNegro1, caballoNegro2, reyNegro, damaNegra)

casillas.push(a1,a2,a3,a4,a5,a6,a7,a8,b1,b2,b3,b4,b5,b6,b7,b8,c1,c2,c3,c4,c5,c6,c7,c8,d1,d2,d3,d4,d5,d6,d7,d8,e1,e2,e3,e4,e5,e6,e7,e8,f1,f2,f3,f4,f5,f6,f7,f8,g1,g2,g3,g4,g5,g6,g7,g8,h1,h2,h3,h4,h5,h6,h7,h8)

fichas.forEach ((ficha) => {
    contenedor1 = `<img id="${ficha.nombre}" src="${ficha.foto}" alt="${ficha.nombre}">`
    casillas[ficha.posicion].innerHTML=contenedor1
    
})

function movimientoPeonBlanco (index){
    if (casillaInicial-7>=0 && casillaInicial-7==casillaFinal){
        if (casillas[casillaInicial-7].querySelector("img")!==null){
            verificarCaptura (index)

        } else if (casillas[casillaInicial-7].querySelector("img")==null && casillas[casillaInicial-8].querySelector("img")!==null){
            for (let i = 0; i < fichas.length; i++) {
                if (casillaFinal-1 == fichas[i].posicion){
                    if (fichas[i].color == "negro" && fichas[i].tipo=="peon" && fichas[i].movimiento==1){
                        if ((fichas[i].posicion+1)%2==1 && fichas[i].turno==turnos-1){
                            moverCasillaFinal(index)
                            casillas[casillaInicial-8].innerHTML=""
                        } else {
                            jugadaErronea()
                            finalizarTurno()
                        }
                    } else {
                        jugadaErronea()
                        finalizarTurno ()
                    }
                }
            }
        }
    } else if (casillaInicial+9<=63 && casillaInicial+9==casillaFinal){
        if (casillas[casillaInicial+9].querySelector("img")!==null){
            verificarCaptura(index)

        } else if (casillas[casillaInicial+9].querySelector("img")==null && casillas[casillaInicial+8].querySelector("img")!==null){
            for (let i = 0; i < fichas.length; i++) {
                if (casillaFinal-1 == fichas[i].posicion){
                    if (fichas[i].color == "negro" && fichas[i].tipo=="peon" && fichas[i].movimiento==1){
                        if ((fichas[i].posicion+1)%2==1 && fichas[i].turno==turnos-1){
                            moverCasillaFinal(index)
                            casillas[casillaInicial+8].innerHTML=""
                        } else {
                            jugadaErronea()
                            finalizarTurno()
                        }
            
                    } else {
                        jugadaErronea()
                        finalizarTurno ()
                    }
                }
            }
        }
    } else if (casillas[casillaInicial+1].querySelector("img")==null && casillaInicial+1==casillaFinal){
        moverCasillaFinal(index)
        fichas[index].movimiento=fichas[index].movimiento+1
    } else if (casillas[casillaInicial+2].querySelector("img")==null && casillaInicial+2==casillaFinal && fichas[index].movimiento==0 && casillas[casillaInicial+1].querySelector("img")==null){
        moverCasillaFinal(index)
        fichas[index].movimiento=fichas[index].movimiento+1
    } else {
        jugadaErronea()
        finalizarTurno()
    }
}

function movimientoPeonNegro (index){
    if (casillaInicial+7>=0 && casillaInicial+7==casillaFinal){
        if (casillas[casillaInicial+7].querySelector("img")!==null){
            verificarCaptura (index)
    
        } else if (casillas[casillaInicial+7].querySelector("img")==null && casillas[casillaInicial+8].querySelector("img")!==null){
            for (let i = 0; i < fichas.length; i++) {
                if (casillaFinal+1 == fichas[i].posicion){
                    if (fichas[i].color == "blanco" && fichas[i].tipo=="peon" && fichas[i].movimiento==1){   
                        if ((fichas[i].posicion-1)%2==0 && fichas[i].turno==turnos){
                            moverCasillaFinal(index)
                            casillas[casillaInicial+8].innerHTML=""
                        } else {
                            jugadaErronea()
                            finalizarTurno()
                        }
                    } else {
                        jugadaErronea()
                        finalizarTurno ()
                    }
                }
            }
        }
    } else if (casillaInicial-9<=63 && casillaInicial-9==casillaFinal){
        if (casillas[casillaInicial-9].querySelector("img")!==null){
            verificarCaptura(index)
    
        } else if (casillas[casillaInicial-9].querySelector("img")==null && casillas[casillaInicial-8].querySelector("img")!==null){
            for (let i = 0; i < fichas.length; i++) {
                if (casillaFinal+1 == fichas[i].posicion){
                    if (fichas[i].color == "blanco" && fichas[i].tipo=="peon" && fichas[i].movimiento==1){
                        if ((fichas[i].posicion-1)%2==0 && fichas[i].turno==turnos){
                            moverCasillaFinal(index)
                            casillas[casillaInicial-8].innerHTML=""
                        } else {
                            jugadaErronea()
                            finalizarTurno()
                        }
                    } else {
                        jugadaErronea()
                        finalizarTurno ()
                    }
                }
            }
        }
    } else if (casillas[casillaInicial-1].querySelector("img")==null && casillaInicial-1==casillaFinal){
        moverCasillaFinal(index)
        fichas[index].movimiento=fichas[index].movimiento+1
    } else if (casillas[casillaInicial-2].querySelector("img")==null && casillaInicial-2==casillaFinal && fichas[index].movimiento==0 && casillas[casillaInicial-1].querySelector("img")==null){
        moverCasillaFinal(index)
        fichas[index].movimiento=fichas[index].movimiento+1
    } else {
        jugadaErronea()
        finalizarTurno()
    }
}

function movimientoTorre (index){
    if (casillaFinal-casillaInicial == 8 || casillaFinal-casillaInicial == 16 || casillaFinal-casillaInicial == 24 || casillaFinal-casillaInicial ==32  || casillaFinal-casillaInicial == 40 || casillaFinal-casillaInicial == 48 || casillaFinal-casillaInicial == 56){
        contador=(casillaFinal-casillaInicial) / 8
        for (let i = 1; i <= contador; i++) {
            if (i==contador){
                if (casillas[casillaFinal].querySelector("img")==null){
                    moverCasillaFinal (index)
                    fichas[index].movimiento++
                } else {
                    verificarCaptura (index)
                }
            } else if (casillas[casillaInicial+(8*i)].querySelector("img")!==null){
                jugadaErronea()
                finalizarTurno ()
                break
            }
            
        }
    } else if (casillaFinal-casillaInicial == -8 || casillaFinal-casillaInicial == -16 || casillaFinal-casillaInicial == -24 || casillaFinal-casillaInicial ==-32  || casillaFinal-casillaInicial == -40 || casillaFinal-casillaInicial == -48 || casillaFinal-casillaInicial == -56){
        contador=(casillaFinal-casillaInicial) / -8
        for (let i = 1; i <= contador; i++) {
            if (i==contador){
                if (casillas[casillaFinal].querySelector("img")==null){
                    moverCasillaFinal (index)
                    fichas[index].movimiento++
                } else {
                    verificarCaptura(index)
                }
            } else if (casillas[casillaInicial+(-8*i)].querySelector("img")!==null){
                jugadaErronea()
                finalizarTurno ()
                break
            }
        }
        
    } else if (casillaFinal-casillaInicial==1 || casillaFinal-casillaInicial==2 || casillaFinal-casillaInicial==3 || casillaFinal-casillaInicial==4 || casillaFinal-casillaInicial==5 || casillaFinal-casillaInicial==6 || casillaFinal-casillaInicial==7 || casillaFinal-casillaInicial==-1 || casillaFinal-casillaInicial==-2 || casillaFinal-casillaInicial==-3 || casillaFinal-casillaInicial==-4 || casillaFinal-casillaInicial==-5 || casillaFinal-casillaInicial==-6 || casillaFinal-casillaInicial==-7){

        for (let i = 0; i <= 56; i+=8) {
            if (fichas[index].posicion >=i && fichas[index].posicion <=i+7 && casillaInicial >=i && casillaInicial <= i+7 && casillaFinal >=i && casillaFinal<=i+7){ 
                movimientoVerticalTorre (index)
            }
        }
        finalizarTurno ()
    } else {
        jugadaErronea()
        finalizarTurno()
    }
}

function movimientoVerticalTorre (index) {
    contador = casillaFinal - casillaInicial
    if (contador < 0){
        contador = contador * -1
        for (let i = 1; i <= contador; i++) {
            if (i==contador){
                if (casillas[casillaFinal].querySelector("img")==null){
                    moverCasillaFinal (index)
                    fichas[index].movimiento++
                } else {
                    verificarCaptura(index)
                }
            } else if (casillas[casillaInicial-i].querySelector("img") !== null){
                jugadaErronea()
                finalizarTurno ()
                break
            }
            
        }
    } else {
        for (let i = 1; i <= contador; i++) {
            if (i==contador){
                if (casillas[casillaFinal].querySelector("img")==null){
                    moverCasillaFinal (index)
                    fichas[index].movimiento++
                } else {
                    verificarCaptura(index)
                }
            } else if (casillas[casillaInicial+i].querySelector ("img") !== null){
                jugadaErronea()
                finalizarTurno ()
                break
            }
            
        }

    }
}

function movimientoAlfil (index){ 
    if ((casillaFinal-casillaInicial)==9 || (casillaFinal-casillaInicial)==18 || (casillaFinal-casillaInicial)==27 || (casillaFinal-casillaInicial)==36 || (casillaFinal-casillaInicial)==45 || (casillaFinal-casillaInicial)==54 || (casillaFinal-casillaInicial)==63 ){
        if (fichas[index].posicion !== 7 && fichas[index].posicion !== 15 && fichas[index].posicion !== 23 && fichas[index].posicion !== 31 && fichas[index].posicion !== 39 && fichas[index].posicion !== 47){
            contador=(casillaFinal-casillaInicial) / 9
            for (let i = 1; i <= contador; i++) {
                if (i==contador){
                    if (casillas[casillaFinal].querySelector("img")==null){
                        moverCasillaFinal (index)
                        fichas[index].movimiento++
                    } else {
                        verificarCaptura (index)
                    }
                } else if (casillas[casillaInicial+(9*i)].querySelector("img")!==null){
                    jugadaErronea()
                    finalizarTurno ()
                    break
                }
                
            }
        }
        finalizarTurno()
    } else if ((casillaFinal-casillaInicial)==7 || (casillaFinal-casillaInicial)==14 || (casillaFinal-casillaInicial)==21 || (casillaFinal-casillaInicial)==28 || (casillaFinal-casillaInicial)==35 || (casillaFinal-casillaInicial)==42 || (casillaFinal-casillaInicial)==49 ){
        if (fichas[index].posicion !== 0 && fichas[index].posicion !== 8 && fichas[index].posicion !== 16 && fichas[index].posicion !== 24 && fichas[index].posicion !== 32 && fichas[index].posicion !== 40 && fichas[index].posicion !== 48 && fichas[index].posicion !== 56) {
            contador=(casillaFinal-casillaInicial) / 7
            for (let i = 1; i <= contador; i++) {
                if (i==contador){
                    if (casillas[casillaFinal].querySelector("img")==null){
                        moverCasillaFinal (index)
                        fichas[index].movimiento++
                    } else {
                        verificarCaptura(index)
                    }
                } else if (casillas[casillaInicial+(7*i)].querySelector("img")!==null){
                    jugadaErronea()
                    finalizarTurno ()
                    break
                }
                
            }
            
        }
        finalizarTurno()
    } else if ( (casillaFinal-casillaInicial)==-9 || (casillaFinal-casillaInicial)==-18 || (casillaFinal-casillaInicial)==-27 || (casillaFinal-casillaInicial)==-36 || (casillaFinal-casillaInicial)==-45 || (casillaFinal-casillaInicial)==-54 || (casillaFinal-casillaInicial)==-63){
        if (fichas[index].posicion !== 16 && fichas[index].posicion !== 24 && fichas[index].posicion !== 32 && fichas[index].posicion !== 40 && fichas[index].posicion !== 48 && fichas[index].posicion !== 56){
            contador=(casillaFinal-casillaInicial) / -9
            for (let i = 1; i <= contador; i++) {
                if (i==contador){
                    if (casillas[casillaFinal].querySelector("img")==null){
                        moverCasillaFinal (index)
                        fichas[index].movimiento++
                    } else {
                        verificarCaptura (index)
                    }
                } else if (casillas[casillaInicial+(-9*i)].querySelector("img")!==null){
                    jugadaErronea()
                    finalizarTurno ()
                    break
                } 
            }
        }
        finalizarTurno()
    } else if ((casillaFinal-casillaInicial)==-7 || (casillaFinal-casillaInicial)==-14 || (casillaFinal-casillaInicial)==-21 || (casillaFinal-casillaInicial)==-28 || (casillaFinal-casillaInicial)==-35 || (casillaFinal-casillaInicial)==-42 || (casillaFinal-casillaInicial)==-49){
        if (fichas[index].posicion !== 7 && fichas[index].posicion !== 15 && fichas[index].posicion !== 23 && fichas[index].posicion !== 31 && fichas[index].posicion !== 39 && fichas[index].posicion !== 47 && fichas[index].posicion !== 55){
            contador=(casillaFinal-casillaInicial) / -7
            for (let i = 1; i <= contador; i++) {
                if (i==contador){
                    if (casillas[casillaFinal].querySelector("img")==null){
                        moverCasillaFinal (index)
                        fichas[index].movimiento++
                    } else {
                        verificarCaptura (index)
                    }
                } else if (casillas[casillaInicial+(-7*i)].querySelector("img")!==null){
                    jugadaErronea()
                    finalizarTurno ()
                    break
                }
                
            }  
        }
        finalizarTurno()     
    } else {
        jugadaErronea()
        finalizarTurno()
    }
    
}

function movimientoCaballo (index){
    if (fichas[index].posicion+6==casillaFinal || fichas[index].posicion-6==casillaFinal){
        for (let i = 0; i <= casillas.length; i+=8) {
            if (i<=fichas[index]. posicion && fichas[index]. posicion<=7+i && i<=casillaFinal && casillaFinal<=7+i){
                jugadaErronea()
                return finalizarTurno()
            }
        }
        if (casillas[casillaFinal].querySelector("img")!==null){
            verificarCaptura (index)
        } else {
            moverCasillaFinal (index)

        }

    } else if (fichas[index].posicion+10==casillaFinal || fichas[index].posicion-10==casillaFinal){
        if (fichas[index].posicion-10==casillaFinal){
            for (let i = 16; i <= casillas.length; i+=8) {
                if (fichas[index].posicion == i || fichas[index].posicion==57){
                    jugadaErronea()
                    return finalizarTurno()
                }
            }
            if (casillas[casillaFinal].querySelector("img")!==null){
                verificarCaptura (index)
            } else {
                moverCasillaFinal (index)

            }
        } else if (fichas[index].posicion+10==casillaFinal){
            for (let i = 7; i <= 47; i+=8) {
                if (fichas[index].posicion == i || fichas[index].posicion==6){
                    jugadaErronea()
                    return finalizarTurno()
                }   
            }
            if (casillas[casillaFinal].querySelector("img")!==null){
                verificarCaptura (index)
            } else {
                moverCasillaFinal (index)

            }
        } 
    } else if (fichas[index].posicion+15==casillaFinal || fichas[index].posicion-15==casillaFinal){
        if (fichas[index].posicion-15==casillaFinal){
            for (let i = 15; i <= casillas.length; i+=8) {
                if (fichas[index].posicion == i){
                    jugadaErronea()
                    return finalizarTurno()
                }
            }
            if (casillas[casillaFinal].querySelector("img")!==null){
                verificarCaptura (index)
            } else {
                moverCasillaFinal (index)

            }
        } else if (fichas[index].posicion+15==casillaFinal){
            for (let i = 0; i <= 48; i+=8) {
                if (fichas[index].posicion == i){
                    jugadaErronea()
                    return finalizarTurno()
                }   
            }
            if (casillas[casillaFinal].querySelector("img")!==null){
                verificarCaptura (index)
            } else {
                moverCasillaFinal (index)

            }
        }
    } else if (fichas[index].posicion+17==casillaFinal || fichas[index].posicion-17==casillaFinal){
        if (fichas[index].posicion-17==casillaFinal){
            for (let i = 24; i <= 56; i+=8) {
                if (fichas[index].posicion == i){
                    jugadaErronea()
                    return finalizarTurno()
                }
            }
            if (casillas[casillaFinal].querySelector("img")!==null){
                verificarCaptura (index)
            } else {
                moverCasillaFinal (index)

            }
        } else if (fichas[index].posicion+17==casillaFinal){
            for (let i = 7; i <= 39; i+=8) {
                if (fichas[index].posicion == i){
                    jugadaErronea()
                    return finalizarTurno()
                }   
            }
            if (casillas[casillaFinal].querySelector("img")!==null){
                verificarCaptura (index)
            } else {
                moverCasillaFinal (index)

            }
        }
    } else {
        jugadaErronea()
        finalizarTurno()
        
    }
}

function movimientoDama (index){
    movimientoTorre (index)
    movimientoAlfil (index)
    finalizarTurno()
}

function movimientoRey (index) {
    if (casillaFinal-casillaInicial == 1 || casillaFinal-casillaInicial == -1 || casillaFinal-casillaInicial == 8 || casillaFinal-casillaInicial == -8){
        movimientoTorre (index)
    } else if (casillaFinal-casillaInicial == 7 || casillaFinal-casillaInicial == -7 || casillaFinal-casillaInicial == 9 || casillaFinal-casillaInicial == -9){
        movimientoAlfil (index)
    } else if (casillaFinal - casillaInicial == 16 || casillaFinal - casillaInicial == -16){
        if (casillaFinal == 55 && fichas[index].movimiento == 0 && fichas[25].movimiento == 0){
            for (let i = 8; i <=16 ; i+=8) {
                if (casillas[casillaInicial+i].querySelector("img")!==null){
                    jugadaErronea()
                    return finalizarTurno ()
                }
            }
            casillas[casillaFinal-8].innerHTML=""
            casillas[casillaFinal-8].appendChild(casillas[casillaFinal+8].firstChild)
            fichas[25].posicion = casillaFinal-8
            fichas[25].movimiento++
            moverCasillaFinal (index)

        } else if (casillaFinal == 8 && fichas[index].movimiento == 0 && fichas[8].movimiento == 0){
            for (let i = 8; i <=16 ; i+=8) {
                if (casillas[casillaInicial-i].querySelector("img")!==null){
                    jugadaErronea()
                    return finalizarTurno()
                }
            }
            casillas[casillaFinal+8].innerHTML=""
            casillas[casillaFinal+8].appendChild(casillas[casillaFinal-8].firstChild)
            fichas[8].posicion = casillaFinal+8
            fichas[8].movimiento++
            moverCasillaFinal (index)

        } else if (casillaFinal == 23 && fichas[index].movimiento == 0 && fichas[24].movimiento == 0){
            for (let i = 8; i <=24 ; i+=8) {
                if (casillas[casillaInicial-i].querySelector("img")!==null){
                    jugadaErronea()
                    return finalizarTurno ()
                }
            }
            casillas[casillaFinal+8].innerHTML=""
            casillas[casillaFinal+8].appendChild(casillas[casillaFinal-16].firstChild)
            fichas[24].posicion = casillaFinal+8
            fichas[24].movimiento++
            moverCasillaFinal (index)

        } else if (casillaFinal == 40 && fichas[index].movimiento == 0 && fichas[9].movimiento == 0){
            for (let i = 8; i <=24 ; i+=8) {
                if (casillas[casillaInicial+i].querySelector("img")!==null){
                    jugadaErronea()
                    return finalizarTurno()
                }
            }
            casillas[casillaFinal-8].innerHTML=""
            casillas[casillaFinal-8].appendChild(casillas[casillaFinal+16].firstChild)
            fichas[9].posicion = casillaFinal-8
            fichas[9].movimiento++
            moverCasillaFinal (index)
        }  
    } else {
        jugadaErronea()
        finalizarTurno ()
    }
}
function nombre (){
    document.getElementById('boton-nombre-jugador').addEventListener('click', () => {
        const nombre = document.getElementById('input-nombre').value.trim()
        nombreBlancas.innerHTML=nombre
        nombreNegras.innerHTML="Pacho"
        document.getElementById("overlay").style.display="none"
    })
}

function iniciarJuego() {
    casillas.forEach(function (casilla, index) {
        document.querySelectorAll('.oscuro').forEach(c => c.classList.remove('seleccionada'));
        document.querySelectorAll('.claro').forEach(c => c.classList.remove('seleccionada'));
        const handler = () => nombrarFuncion (index) 
        handlers.set(casilla, handler)
        casilla.addEventListener('click', handler)
    })
}
function nombrarFuncion (index){
    if (casillas[index].querySelector("img")==null){
        return finalizarTurno()
    }
    moverCasillaInicial(index)
    casillas[index].classList.add('seleccionada')
}

function moverCasillaInicial (index){
    if (casillas[index].querySelector('img')!==null){
        casillaInicial=index
        console.log (casillaInicial)
        mover ()
    }
}

function identificarPieza(){
    fichas.forEach ((ficha, index) => {
        if (ficha.posicion == casillaInicial && ficha.tipo == "peon" && ficha.color==turno){
            if (ficha.color==="blanco"){
                movimientoPeonBlanco (index)
            } else {
                movimientoPeonNegro (index)
            }
        } else if (ficha.posicion == casillaInicial && ficha.tipo == "torre" && ficha.color==turno){
            movimientoTorre (index)
        } else if (ficha.posicion == casillaInicial && ficha.tipo == "alfil" && ficha.color==turno){
            movimientoAlfil (index)
        } else if (ficha.posicion == casillaInicial && ficha.tipo == "caballo" && ficha.color==turno){
            movimientoCaballo(index)
        } else if (ficha.posicion == casillaInicial && ficha.tipo == "rey" && ficha.color==turno){
            movimientoRey (index)
        } else if (ficha.posicion == casillaInicial && ficha.tipo == "dama" && ficha.color==turno){
            movimientoDama (index)
        } else if (index==31){
            finalizarTurno()
        }

    })
}

function mover(){
    for (let i = 0; i < casillas.length; i++) {
        casillas[i].removeEventListener('click', handlers.get(casillas[i]))
        handlers.delete(casillas[i])
    }
    casillas.forEach(function(casilla, index){
        const handler = () => nombrarFuncionF (index)
        handlers.set(casilla, handler)
        casilla.addEventListener('click', handler)
            
    })
}

function nombrarFuncionF (index){
    casillaFinal = index
    console.log(casillaFinal)
    identificarPieza()
}

function verificarCaptura (index){
    for (let i = 0; i < fichas.length; i++) {
        if (fichas[i].posicion == casillaFinal && fichas[i].color !== fichas[index].color){
            moverCasillaFinal(index)
            fichas[index].movimiento++
            fichas[i]={}
        } else if (i == 31){
            jugadaErronea()
        }
    }
}

function moverCasillaFinal (index){
    console.log("➡️ Nodo a mover: " +casillas[casillaInicial].firstChild) 
    if (casillas[casillaInicial].querySelector("img")!==null){
        casillas[casillaFinal].innerHTML=""
        casillas[casillaFinal].appendChild(casillas[casillaInicial].firstChild)

        actualizarPosicion(index)
        finalizarTurno()
        if (turno=="blanco"){
            turno="negro"
        } else {
            turno ="blanco"
        }
    }
    if (turno == "blanco"){
        turnos++
    }
}

function actualizarPosicion (index){
    fichas[index].posicion=casillaFinal   
    fichas[index].turno=turnos
    historial[movimientos] =[fichas[index].nombre, casillas[casillaFinal].id]
    console.log (historial)
    movimientos++
    verificarCoronacion(index)
}
function verificarCoronacion (index){
    if (fichas[index].color=="blanco" && fichas[index].tipo==="peon"){
        if (fichas[index].posicion == 7 || fichas[index].posicion == 15 || fichas[index].posicion == 23 || fichas[index].posicion == 31 || fichas[index].posicion == 39 || fichas[index].posicion == 47 || fichas[index].posicion == 55 || fichas[index].posicion == 63){
            mostrarModalCoronacion(0, index)
            console.log ("coronaste perra", index)
        }
    } else if (fichas[index].color=="negro" && fichas[index].tipo==="peon") {
        for (let i = 0; i < casillas.length; i+=8) {
            if (fichas[index].posicion==i){
                mostrarModalCoronacion(4, index)
                console.log ("coronaste perra", index)
            }
        }
    }
}

function mostrarModalCoronacion(valorCoronacion, index){
    const modal = document.getElementById("modal-coronacion")
    
        for (let i = 1+valorCoronacion; i < 5+valorCoronacion; i++) {  
            contenedor1 =`<img id="${fichasCoronacion[i-1].nombre}" src="${fichasCoronacion[i-1].foto}" alt="${fichasCoronacion[i-1].nombre}">`
            contenedor = document.getElementById(`boton-${i-valorCoronacion}`)
            const handler = () => ocultarModalCoronacion (index, i-1)
            handlers.set(contenedor, handler)
            contenedor.addEventListener('click', handler)
            contenedor.innerHTML=contenedor1
        }

    // Obtener posición absoluta de la celda
    const rect = casillas[casillaFinal].getBoundingClientRect();
  
    // Posicionar el modal justo encima
    modal.style.left = `${rect.left + window.scrollX}px`
    modal.style.top = `${rect.top + window.scrollY + modal.offsetHeight}px`
    modal.style.display = "block"
}

function ocultarModalCoronacion(index, index1) {
    for (let i = 1; i < 5; i++) {
        
        contenedor=document.getElementById(`boton-${i}`)
        contenedor.removeEventListener('click', handlers.get(contenedor))
        
    }
    const modal = document.getElementById("modal-coronacion")
    modal.style.display = "none"
    
    console.log(index)
    fichas[index].nombre=fichasCoronacion[index1].nombre
    fichas[index].tipo=fichasCoronacion[index1].tipo
    fichas[index].foto=fichasCoronacion[index1].foto
    casillas[casillaFinal].innerHTML=""
    contenedor1 = `<img id="${fichas[index].nombre}" src="${fichas[index].foto}" alt="${fichas[index].nombre}">`
    casillas[casillaFinal].innerHTML=contenedor1
    finalizarTurno()
}

function finalizarTurno(){
    for (let i = 0; i < casillas.length; i++) {
        casillas[i].removeEventListener('click', handlers.get(casillas[i]))
        handlers.delete(casillas[i])
    }
    iniciarJuego ()
    if (Object.keys(fichas[14]).length==0){
        alert("GANARON NEGRAS")
        location.reload()
    } else if (Object.keys(fichas[30]).length==0){
        alert("GANARON BLANCAS")
        location.reload()
    }
}

function jugadaErronea(){
    casillas[casillaFinal].classList.add("error")
    setTimeout (() =>{
        casillas[casillaFinal].classList.remove("error")
    }, 1000)
}
window.addEventListener ('load', iniciarJuego)
window.addEventListener('load', nombre )