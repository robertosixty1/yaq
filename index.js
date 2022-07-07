var level_number = 0;

class Level {
    constructor(question, options) {
        this.question = question;
        this.options = options;
    }
};

class Option {
    constructor(name, correct) {
        this.name = name;
        this.correct = correct;
    }
};

var levels = [
    undefined,
    new Level("Deep Web?", [
        new Option("tenor.com", true),
        new Option("google.com", false),
        new Option("Tor", false),
        new Option("Chrome", false),
    ]),
    new Level("28G", [
        new Option("Disk", false),
        new Option("Memory", false),
        new Option("???", false),
        new Option("Waifus", true),
    ]),
    new Level("Dead?", [
        new Option("Rick Astley", false),
        new Option("Albert Einstein", false),
        new Option("Adidus", true),
        new Option("Johnatan Joestar", false),
    ]),
    new Level("Best Game?", [
        new Option("SIFU", false),
        new Option("Minecraft", false),
        new Option("Roblos", false),
        new Option("Este", true),
    ]),
    new Level("AVISO!!!!", [
        new Option("\u26A0", false),
        new Option("Sword", true),
        new Option("Entendi", false),
        new Option("????", false),
    ]),
    new Level("عبارة عشوائية باللغة العربية", [
        new Option("???????????", false),
        new Option("Uma frase aleatoria em arabe", true),
        new Option("Never gonna give you up", false),
        new Option("Kill the furrys", false),
    ]),
    new Level("You know the rules....", [
        new Option("...and if you ask me how i'm feeling", false),
        new Option("...never gonna give you up", false),
        new Option("...uma frase aleatoria em arabe", false),
        new Option("...and so do i (do i)", true),
    ]),
    new Level("Espere um momento aí...", [
        new Option("...A sua próxima fala será", true),
        new Option("...Você pode estar usando dados móveis", false),
        new Option("...Uma frase aleatoria em arabe", false),
        new Option("...CHEGA DE REFERÊNCIAS!", false),
    ]),
    new Level("C", [
        new Option("CEEAAASARRRR!!!", true),
        new Option("C Programming Language", false),
        new Option("a b C", false),
        new Option("casa", false),
    ]),
    new Level("ALGO MUITO IMPORTANTE AGORA!!", [
        new Option("O que é?", false),
        new Option("Exatamente, logo-logo", false),
        new Option("O", true),
        new Option("Rick Astley", false),
    ]),
    new Level("U", [
        new Option("Among Us", true),
        new Option("Roblos", false),
        new Option("Fuck all of that shit", false),
        new Option("Never gonna give U up", false),
    ]),
    new Level("NO BITCHES???", [
        new Option("No", false),
        new Option("Fuck all of that shit", false),
        new Option("Ah sim", false),
        new Option("Sad Bob", true),
    ]),
    new Level("Eu", [
        new Option("Roberto", false),
        new Option("Hacker", false),
        new Option("Anonymous", false),
        new Option("👏🏻", true),
    ]),
    new Level("Riir", [
        new Option("Rewrite it in Rust", true),
        new Option("Hahahaha", false),
        new Option("Lol", false),
        new Option("KKKKKK", false),
    ]),
    new Level("D", [
        new Option("Douglas", false),
        new Option("Dollynho", false),
        new Option("Dio", true),
        new Option("DO IT!", false),
    ]),
    new Level("K", [
        new Option("KKKKKK", false),
        new Option("KAKKOU", false),
        new Option("Konosuba", false),
        new Option("Kono Dio Da!", true),
    ]),
    new Level("I", [
        new Option("Ish", false),
        new Option("Igor", false),
        new Option("Iggy?", true),
        new Option("Ijikenaide", false),
    ]),
    new Level("O", [
        new Option("Pronunciamento", false),
        new Option("Otto", false),
        new Option("Outro", false),
        new Option("Ora! Ora! Ora! Ora! Ora!", true),
    ]),
    new Level("( ͡° ͜ʖ ͡°)", [
        new Option("SUS", false),
        new Option("HMMMMMM", false),
        new Option("num sei", true),
        new Option("🤔", false),
    ]),
    new Level("Captura vítimas com lavagem celebral (o artur sabe)", [
        new Option("Games EdUuUu", false),
        new Option("what the frick", false),
        new Option("BRKsEDU", true),
        new Option("🤔", false),
    ]),
    new Level("super", [
        new Option("idol", false),
        new Option("Pão de Alho", false),
        new Option("Google Tradutor", false),
        new Option("Objetos Horríveis", true),
    ]),
    new Level("Never gonna give you...", [
        new Option("dom", false),
        new Option("aaaaa", true),
        new Option("Araldo", false),
        new Option("fila da mãe", false),
    ]),
    new Level("onde?", [
        new Option("ne", false),
        new Option("dqw4w", true),
        new Option("ver", false),
        new Option("gonna", false),
    ]),
    new Level("se você der like no vídeo...", [
        new Option("ganha uma loli enrolada em plástico bolha", true),
        new Option("ganha um rickroll", false),
        new Option("ajuda muito o canal", false),
        new Option("bora pro vídeo", false),
    ]),
    new Level("o level anterior era uma referencia ao tio san '-'", [
        new Option("a entendi", true),
    ]),
    new Level("O que é pior?", [
        new Option("Lag no Minecraft", false),
        new Option("Lag na internet enquanto assiste anime", false),
        new Option("A 1ª temporada de JoJo", false),
        new Option("Assistir Naruto", true),
    ]),
    new Level("Lag na internet enquanto assiste anime ta em 2º lugar!", [
        new Option("=>", true),
    ]),
    new Level("O que é pior?", [
        new Option("Tenkuu danzai skelter+heaven", true),
        new Option("Tenkuu danzai skelter+heaven", true),
        new Option("Tenkuu danzai skelter+heaven", true),
        new Option("Tenkuu danzai skelter+heaven", true),
    ]),
    new Level("Desculpa eu precisava fazer essa piada", [
        new Option("=>", true),
    ]),
    new Level("O mais forte", [
        new Option("Dio Brando", false),
        new Option("Edinaldo Pereira", true),
        new Option("Amogus", false),
        new Option("Putin Rebaixado", false),
    ]),
    new Level("VOCÊ VENCEU - Manda uma print dessa tela pro RobertoSixty1#8804", []),
];

function generateGameOverScreen() {
    let html = `<title>GAME OVER</title>
<br />
<p1>GAME OVER</p1>
<br />
<br />
<img src="fbi.gif" />
<br />
<br />
<button type="button" style="font-size:30px;" onclick="window.location.reload()">RESTART</button>`;
    return html;
}

function generateHtmlAndOtherLevels(level) {
    let html = "<title>Level thisisthetitle</title>\n<br />\n".replace(/thisisthetitle/, level_number);
    html += "  <p1> Level ";
    html += level_number;
    html += " - ";
    html += level.question;
    html += "</p1> <br />\n<br />\n";
    for (btn in level.options) {
        let button = level.options[btn];
        html += "  <button type=\"button\" style=\"font-size:30px;\" onclick=\"";
        if (button.correct) {
            html += "level_number += 1; document.getElementById('urmom').innerHTML = generateHtmlAndOtherLevels(levels[level_number]);";
        } else {
            html += "document.getElementById('urmom').innerHTML = generateGameOverScreen();";
        }
        html += "\">";
        html += button.name;
        html += "</button>\n";
    }
    return html;
}

window.addEventListener('load', () => {
    let level = new Level("WELCOOME!", [new Option("GO!", true)]);
    document.getElementById("urmom").innerHTML = generateHtmlAndOtherLevels(level);
})
