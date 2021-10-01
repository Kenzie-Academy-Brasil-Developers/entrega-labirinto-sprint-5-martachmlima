const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];

const main = document.getElementById("gameSpace")

const labirinto = () => {
    let line
    for (let i = 0; i < map.length; i++){
        line = map[i]
        line = document.createElement("div")
        line.classList.add("line")
        main.appendChild(line)
        for (let j = 0; j < map[i].length; j++){
            let cell = map[i][j]
            cell = document.createElement("div")
            cell.classList.add("cell")
            line.appendChild(cell)

            if (map[i][j] === "W"){
                cell.classList.add("noWalk")
            }

            if (map[i][j] === " "){
                cell.classList.add("free")
            }

            if (map[i][j] === "S"){
                cell.setAttribute("id", "inicio")
            }

            if (map[i][j] === "F"){
                cell.setAttribute("id", "final")
            }
        }
    }
}

labirinto()

const jogador = document.createElement("div")
jogador.setAttribute("id", "player")
jogador.innerText = "player"
main.appendChild(jogador)

const message = document.createElement("span")
message.innerText = "Você ganhou!"
message.setAttribute("id", "win")

let playerTop = 0
let playerLeft = 0


document.addEventListener('keydown', (event) => {
    const keyName = event.key;

    if (keyName === "ArrowDown" && playerTop < 160 && playerLeft !== 0 && playerLeft !== 800){
        playerTop += 40
    }
    if (keyName === "ArrowUp" && playerTop > -320 && playerLeft !== 0 && playerLeft !== 800){
        playerTop -= 40
    }
    if ((keyName === "ArrowLeft" && playerLeft > 40) || 
        (keyName === "ArrowLeft" && playerLeft === 40 && playerTop === 0)){
        playerLeft -= 40
    }
    if ((keyName === "ArrowRight" && playerLeft < 760) || 
        (keyName === "ArrowRight" && playerLeft === 760 && playerTop === -40)){
        playerLeft += 40
    }

    if (playerLeft === 800 && playerTop === -40){
        main.appendChild(message)
        setTimeout(() => {
            main.removeChild(message)
        }, 2000);
    }

    document.getElementById("player").style.transform = `translate(${playerLeft}px, ${playerTop}px)`
}) 