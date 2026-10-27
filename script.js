/* Sankofa dos Nomes: dados e comportamento da página. */

  /* ====== DADOS ======
     SIGNIFICADOS: um registro por nome (chave sem acento e em minúsculas).
     ALUNOS: um registro por aluno (nome, turma e foto, ex.: "fotos/maria-1a.jpg"; "" usa a inicial). */
  var SIGNIFICADOS = {

    // Alunos 2º D

    maria:   { nome: "Maria",   origem: "Origem: Hebraica", texto: "Vem de Miriam. Os estudiosos divergem, e as leituras mais citadas são \"amada\", \"senhora\" e \"a elevada\"." },
    joao:    { nome: "João",    origem: "Origem: Hebraica", texto: "Vem de Yohanan e quer dizer \"Deus é misericordioso\"." },
    ana:     { nome: "Ana",     origem: "Origem: Hebraica", texto: "Vem de Hannah e significa \"graça\" ou \"aquela que tem a compaixão de Deus\"." },
    pedro:   { nome: "Pedro",   origem: "Origem: Grega",    texto: "Vem de petros e significa \"pedra\", algo firme e que serve de alicerce." },
    beatriz: { nome: "Beatriz", origem: "Origem: Latina",    texto: "Vem de Beatrix e quer dizer \"aquela que traz felicidade\" ou \"a que abençoa\"." },
    lucas:   { nome: "Lucas",   origem: "Origem: Latina",    texto: "Vem de Lucanus e é associado a \"luz\": quem nasce ao amanhecer ou quem traz claridade." },
    guilherme: { nome: "Guilherme", origem: "Origem: Germânica", texto: "Vem de Willahelm ou Willehelm e significa \"protetor decidido\", algo como protetor decidido."},
    roberta: { nome:"Roberta", origem: "Origem: Germânica", texto: "Vem de Hrodebert e significa \"famosa\" ou \"gloriosa\", Brilhante na glória"},
    miguel: { nome:"Miguel", origem: "Origem: Hebraica", texto: "Vem de Mikha'el e quer dizer \"Ninguém é como Deus\""},
    enzo: { nome:"Enzo", origem: "Origem: Germânica/Italiana", texto: "Uma variação do nome Heinz que é diminutivo de Heinrich e quer dizer \"Vencedor\""},
    fernanda: { nome:"Fernanda", origem: "Origem: Germânica", texto: "Variação feminina de Ferndinand que siginifica \"Viajante Corajosa\""},
    fernando: { nome:"Fernando", origem: "Origem: Germânica", texto: "Vem de Ferndinand que siginifica \"Viajante Corajoso\""},
    breno: { nome: "Breno", origem: "Origem Celta/Gaulesa", texto:" Significa \"Líder\"." },
    gisele: { nome:"Gisele", origem: "Origem Germânica", texto: "Vem de \"juramento\", \"algo como Aquela que maneja a lança com destreza\"."},
    breno: { nome:"Breno", origem: "Celta", texto: "Significa \"líder\", \"chefe\" ou \"nobre\"."},
    bruno: { nome:"Bruno", origem: "Germânica", texto: "Significa \"marrom\", \"castanho\" ou \"sombrio\"."},
    caua: { nome:"Cauã", origem: "Indígena (Tupi)", texto: "Significa \"gavião\" ou \"falcão\"."},
    davi: { nome:"Davi", origem: "Hebraica", texto: "Significa \"o amado\", \"querido\" ou \"predileto\"."},
    emanuely: { nome:"Emanuely", origem: "Hebraica", texto: "Significa \"Deus está conosco\"."},
    emily: { nome:"Emily", origem: "Latina", texto: "Significa \"aquela que fala de modo agradável\" ou \"rival\"."},
    gabriel: { nome:"Gabriel", origem: "Hebraica", texto: "Significa \"homem de Deus\" ou \"fortaleza de Deus\"."},
    giovanna: { nome:"Giovanna", origem: "Hebraica/Italiana", texto: "Significa \"Deus é gracioso\" ou \"dádiva de Deus\"."},
    gustavo: { nome:"Gustavo", origem: "Germânica", texto: "Significa \"protegido por Deus\"."},
    henry: { nome:"Henry", origem: "Germânica", texto: "Significa \"o governante da casa\" ou \"príncipe do lar\"."},
    henzo: { nome:"Henzo", origem: "Germânica", texto: "Variação de Enzo, significa \"senhor do lar\" ou \"príncipe de sua casa\"."},
    isaac: { nome:"Isaac", origem: "Hebraica", texto: "Significa \"filho da alegria\"."},
    isabely: { nome:"Isabely", origem: "Hebraica", texto: "Significa \"consagrada a Deus\"."},
    jose: { nome:"José", origem: "Hebraica", texto: "Significa \"aquele que acrescenta\"."},
    julia: { nome:"Julia", origem: "Latina", texto: "Significa \"jovem\" ou \"filha de Júpiter\"."},
    kauan: { nome:"Kauan", origem: "Indígena (Tupi)", texto: "Significa \"gavião\" ou \"falcão\"."},
    leonardo: { nome:"Leonardo", origem: "Germânica", texto: "Significa \"valente como um leão\" ou \"forte como um leão\"."},
    marco: { nome:"Marco", origem: "Latina", texto: "Significa \"guerreiro\"."},
    nicollas: { nome:"Nicollas", origem: "Grega", texto: "Significa \"vitorioso\" ou \"o que vence com o povo\"."},
    paulo: { nome:"Paulo", origem: "Latina", texto: "Significa \"pequeno\" ou \"de baixa estatura\"."},
    quezia: { nome:"Quézia", origem: "Hebraica", texto: "Significa \"perfume\"."},
    samuel: { nome:"Samuel", origem: "Hebraica", texto: "Significa \"ouvido por Deus\" ou \"nome de Deus\"."},
    tiago: { nome:"Tiago", origem: "Hebraica", texto: "Significa \"aquele que vem no calcanhar\"."},
    victor: { nome:"Victor", origem: "Latina", texto: "Significa \"vencedor\" ou \"conquistador\"."},
    vitor: { nome:"Vitor", origem: "Latina", texto: "Significa \"vencedor\" ou \"conquistador\"."},
    william: { nome:"William", origem: "Germânica", texto: "Significa \"protetor corajoso\" ou \"o que deseja proteger\"."},
    yasmin: { nome:"Yasmin", origem: "Persa", texto: "Significa \"jasmim\" ou \"flor perfumada\"."},
    beatriz: { nome:"Beatriz", origem: "Latina", texto: "Significa \"a que traz felicidade\" ou \"viajante\"."},
    felipe: { nome:"Felipe", origem: "Grega", texto: "Significa \"amigo dos cavalos\"."},
    hosana: { nome:"Hosana", origem: "Hebraica", texto: "Significa \"salvai-nos\" ou \"libertadora\"."},
    luane: { nome:"Luane", origem: "Latina/Germânica", texto: "Significa \"guerreira gloriosa e cheia de graça\"."},

    // Alunos do 2º E
    antonny: { nome:"Antonny", origem: "Origem Latina", texto: "Variante de Antônio, significa \"valioso\", \"inestimável\" ou \"digno de apreço\"."},
    ashiley: { nome:"Ashiley", origem: "Origem Inglesa", texto: "Variante de Ashley, significa \"prado de freixos\"."},
    brayan: { nome:"Brayan", origem: "Origem Celta", texto: "Significa \"nobre\", \"forte\" ou \"virtuoso\"."},
    bruno: { nome:"Bruno", origem: "Origem Germânica", texto: "Significa \"sombrio\"."},
    davi: { nome:"Davi", origem: "Origem Hebraica", texto: "Significa \"o amado\", \"querido\" ou \"predileto\"."},
    douglas: { nome:"Douglas", origem: "Origem Escocesa", texto: "Significa \"água escura\" ou \"rio escuro\"."},
    emily: { nome:"Emily", origem: "Origem Latina", texto: "Significa \"aquela que fala de modo agradável\"."},
    erick: { nome:"Erick", origem: "Origem Germânica", texto: "Significa \"o que reina como uma águia\" ou \"rei solitário e poderoso\"."},
    felipe: { nome:"Felipe", origem: "Origem Grega", texto: "Significa \"amigo dos cavalos\"."},
    gabriel: { nome:"Gabriel", origem: "Origem Hebraica", texto: "Significa \"homem de Deus\" ou \"fortaleza de Deus\"."},
    guilherme: { nome:"Guilherme", origem: "Origem Germânica", texto: "Significa \"protetor corajoso\" ou \"o que deseja proteger\"."},
    heloisa: { nome:"Heloisa", origem: "Origem Germânica", texto: "Significa \"guerreira famosa\" ou \"saudável\"."},
    higor: { nome:"Higor", origem: "Origem Nórdica", texto: "Variante de Igor, significa \"o que trabalha a terra\"."},
    igor: { nome:"Igor", origem: "Origem Nórdica", texto: "Significa \"o que trabalha a terra\"."},
    joão: { nome:"João", origem: "Origem Hebraica", texto: "Significa \"Deus é cheio de graça\" ou \"agraciado por Deus\"."},
    kaic: { nome:"Kaic", origem: "Origem Indígena (Tupi)", texto: "Variante de Caíque, significa \"ave aquática\" ou \"aquele que desliza sobre as águas\"."},
    kaua: { nome:"Kaua", origem: "Origem Indígena (Tupi)", texto: "Significa \"gavião\" ou \"falcão\"."},
    leonardo: { nome:"Leonardo", origem: "Origem Germânica", texto: "Significa \"valente como um leão\" ou \"forte como um leão\"."},
    lucas: { nome:"Lucas", origem: "Origem Grega", texto: "Significa \"luminoso\"."},
    miguel: { nome:"Miguel", origem: "Origem Hebraica", texto: "Significa \"Ninguém é como Deus?\"."},
    moises: { nome:"Moises", origem: "Origem Hebraica/Egípcia", texto: "Significa \"tirado das águas\" ou \"filho\"."},
    nicolas: { nome:"Nicolas", origem: "Origem Grega", texto: "Significa \"vitorioso\" ou \"o que vence com o povo\"."},
    pietro: { nome:"Pietro", origem: "Origem Grega/Italiana", texto: "Variante italiana de Pedro, significa \"pedra\" ou \"rochedo\"."},
    samuel: { nome:"Samuel", origem: "Origem Hebraica", texto: "Significa \"ouvido por Deus\" ou \"nome de Deus\"."},
    vinicius: { nome:"Vinicius", origem: "Origem Latina", texto: "Significa \"aquele que produz vinho\"."},
    yasmin: { nome:"Yasmin", origem: "Origem Persa", texto: "Significa \"jasmim\" ou \"flor perfumada\"."},
    isaac: { nome:"Isaac", origem: "Origem Hebraica", texto: "Significa \"filho da alegria\"."},
    beatriz: { nome:"Beatriz", origem: "Origem Latina", texto: "Significa \"a que traz felicidade\" ou \"viajante\"."},
    abner: { nome:"Abner", origem: "Origem Hebraica", texto: "Significa \"meu pai é uma luz\"."},
    thiago: { nome:"Thiago", origem: "Origem Hebraica", texto: "Significa \"aquele que vem no calcanhar\" (variante de Jacó)."},
    gustavo: { nome:"Gustavo", origem: "Origem Germânica", texto: "Significa \"protegido por Deus\"."},
    andré: { nome:"André", origem: "Origem Grega", texto: "Significa \"robusto\"."},
    julia: { nome:"Julia", origem: "Origem Latina", texto: "Significa \"jovem\"."},
    nathan: { nome:"Nathan", origem: "Origem Hebraica", texto: "Significa \"presente de Deus\"."},
    emanuele: { nome:"Emanuele", origem: "Origem Hebraica", texto: "Variante feminina de Emanuel, significa \"Deus está conosco\"."},
    alexska: { nome:"Alexska", origem: "Origem Grega", texto: "Variante de Alexandra, significa \"defensora da humanidade\" ou \"aquela que repele os inimigos\"."},
    ane: { nome:"Ane", origem: "Origem Hebraica", texto: "Variante de Ana, significa \"cheia de graça\" ou \"graciosa\"."},
  
  // Alunos 

  };
  var ALUNOS = [
    { nome: "Maria",   turma: "1º A", foto: "" },
    { nome: "Maria",   turma: "1º B", foto: "" },
    { nome: "Maria",   turma: "2º A", foto: "" },
    { nome: "João",    turma: "1º A", foto: "" },
    { nome: "João",    turma: "3º B", foto: "" },
    { nome: "Ana",     turma: "2º B", foto: "" },
    { nome: "Ana",     turma: "3º A", foto: "" },
    { nome: "Pedro",   turma: "1º B", foto: "" },
    { nome: "Beatriz", turma: "2º A", foto: "" },
    { nome: "Lucas",   turma: "1º A", foto: "" },
    { nome: "Lucas",   turma: "2º B", foto: "" },
    { nome: "guilherme", turma: "2º B", foto: ""},
    { nome: "roberta", turma: "2ºB", foto: ""},
    { nome: "Miguel", turma: "1ºA", foto: "./Rastros_que_transpassam/miguelteste.jpeg"},
    { nome: "Enzo", turma: "1ºC", foto: ""},
    { nome: "Fernando", turma: "1ºC", foto: ""},
    { nome: "Fernanda", turma: "1ºC", foto: ""},
    { nome: "Gisele", turma: "1ºC", foto:""},
    { nome: "Ana", turma: "2º D", foto: "" },
    { nome: "Breno", turma: "2º D", foto: "" },
    { nome: "Bruno", turma: "2º D", foto: "" },
    { nome: "Caua", turma: "2º D", foto: "" },
    { nome: "Davi", turma: "2º D", foto: "" },
    { nome: "Davi", turma: "2º D", foto: "" },
    { nome: "Emanuely", turma: "2º D", foto: "" },
    { nome: "Emily", turma: "2º D", foto: "" },
    { nome: "Gabriel", turma: "2º D", foto: "" },
    { nome: "Gabriel", turma: "2º D", foto: "" },
    { nome: "Giovanna", turma: "2º D", foto: "" },
    { nome: "Gustavo", turma: "2º D", foto: "" },
    { nome: "Henry", turma: "2º D", foto: "" },
    { nome: "Henzo", turma: "2º D", foto: "" },
    { nome: "Isaac", turma: "2º D", foto: "" },
    { nome: "Isabely", turma: "2º D", foto: "" },
    { nome: "João", turma: "2º D", foto: "" },
    { nome: "José", turma: "2º D", foto: "" },
    { nome: "Julia", turma: "2º D", foto: "" },
    { nome: "Julia", turma: "2º D", foto: "" },
    { nome: "Julia", turma: "2º D", foto: "" },
    { nome: "Julia", turma: "2º D", foto: "" },
    { nome: "Kauan", turma: "2º D", foto: "" },
    { nome: "Kauan", turma: "2º D", foto: "" },
    { nome: "Leonardo", turma: "2º D", foto: "" },
    { nome: "Lucas", turma: "2º D", foto: "" },
    { nome: "Marco", turma: "2º D", foto: "" },
    { nome: "Maria", turma: "2º D", foto: "" },
    { nome: "Nicollas", turma: "2º D", foto: "" },
    { nome: "Paulo", turma: "2º D", foto: "" },
    { nome: "Quézia", turma: "2º D", foto: "" },
    { nome: "Samuel", turma: "2º D", foto: "" },
    { nome: "Tiago", turma: "2º D", foto: "" },
    { nome: "Victor", turma: "2º D", foto: "" },
    { nome: "Vitor", turma: "2º D", foto: "" },
    { nome: "William", turma: "2º D", foto: "" },
    { nome: "Yasmin", turma: "2º D", foto: "" },
    { nome: "Ana", turma: "2º D", foto: "" },
    { nome: "Samuel", turma: "2º D", foto: "" },
    { nome: "Beatriz", turma: "2º D", foto: "" },
    { nome: "Felipe", turma: "2º D", foto: "" },
    { nome: "Hosana", turma: "2º D", foto: "" },
    { nome: "Luane", turma: "2º D", foto: "" },
    { nome: "Ana", turma: "2º E", foto: "" },
    { nome: "Ana", turma: "2º E", foto: "" },
    { nome: "Ana", turma: "2º E", foto: "" },
    { nome: "Anna", turma: "2º E", foto: "" },
    { nome: "Antonny", turma: "2º E", foto: "" },
    { nome: "Ashiley", turma: "2º E", foto: "" },
    { nome: "Brayan", turma: "2º E", foto: "" },
    { nome: "Bruno", turma: "2º E", foto: "" },
    { nome: "Davi", turma: "2º E", foto: "" },
    { nome: "Douglas", turma: "2º E", foto: "" },
    { nome: "Emily", turma: "2º E", foto: "" },
    { nome: "Erick", turma: "2º E", foto: "" },
    { nome: "Felipe", turma: "2º E", foto: "" },
    { nome: "Gabriel", turma: "2º E", foto: "" },
    { nome: "Guilherme", turma: "2º E", foto: "" },
    { nome: "Heloisa", turma: "2º E", foto: "" },
    { nome: "Higor", turma: "2º E", foto: "" },
    { nome: "Igor", turma: "2º E", foto: "" },
    { nome: "Joao", turma: "2º E", foto: "" },
    { nome: "João", turma: "2º E", foto: "" },
    { nome: "João", turma: "2º E", foto: "" },
    { nome: "Kaic", turma: "2º E", foto: "" },
    { nome: "Kaua", turma: "2º E", foto: "" },
    { nome: "Keynne", turma: "2º E", foto: "" },
    { nome: "Leonardo", turma: "2º E", foto: "" },
    { nome: "Lucas", turma: "2º E", foto: "" },
    { nome: "Miguel", turma: "2º E", foto: "" },
    { nome: "Moises", turma: "2º E", foto: "" },
    { nome: "Nicolas", turma: "2º E", foto: "" },
    { nome: "Pietro", turma: "2º E", foto: "" },
    { nome: "Samuel", turma: "2º E", foto: "" },
    { nome: "Samuel", turma: "2º E", foto: "" },
    { nome: "Vinicius", turma: "2º E", foto: "" },
    { nome: "Yasmin", turma: "2º E", foto: "" },
    { nome: "Isaac", turma: "2º E", foto: "" },
    { nome: "Beatriz", turma: "2º E", foto: "" },
    { nome: "Abner", turma: "2º E", foto: "" },
    { nome: "Thiago", turma: "2º E", foto: "" },
    { nome: "Gustavo", turma: "2º E", foto: "" },
    { nome: "Davi", turma: "2º E", foto: "" },
    { nome: "André", turma: "2º E", foto: "" },
    { nome: "Ana", turma: "2º E", foto: "" },
    { nome: "Julia", turma: "2º E", foto: "" },
    { nome: "Julia", turma: "2º E", foto: "" },
    { nome: "Nathan", turma: "2º E", foto: "" },
    { nome: "Emanuele", turma: "2º E", foto: "" },
    { nome: "Alexska", turma: "2º E", foto: "" },
    { nome: "Ane", turma: "2º E", foto: "" },
  ];

  var reduzir = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var intro = document.getElementById("intro");
  var busca = document.getElementById("busca");
  var campo = document.getElementById("campo-nome");
  var form = document.getElementById("form-busca");
  var area = document.getElementById("resultado");
  var exemplos = document.getElementById("lista-exemplos");
  var animando = false;

  function norm(s) {
    return String(s).normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/\s+/g, " ").trim();
  }
  function esc(s) { var d = document.createElement("div"); d.textContent = s; return d.innerHTML; }

  /* grupos por primeiro nome */
  var grupos = {};
  ALUNOS.forEach(function (a) {
    var k = norm(a.nome).split(" ")[0];
    (grupos[k] = grupos[k] || []).push(a);
  });

  /* ---------- transição estilo Netflix: zoom para dentro do ovo ---------- */
  function entrar() {
    if (animando) return;
    animando = true;
    if (reduzir) { abrirBusca(); animando = false; return; }
    intro.classList.add("zoom");
    setTimeout(abrirBusca, 760);
    setTimeout(function () { intro.hidden = true; animando = false; }, 1800);
  }
  function abrirBusca() {
    busca.hidden = false;
    busca.classList.remove("enter");
    void busca.offsetWidth;
    if (!reduzir) busca.classList.add("enter");
    if (reduzir) intro.hidden = true;
    window.scrollTo(0, 0);
    try { campo.focus({ preventScroll: true }); } catch (e) {}
  }
  function voltar() {
    intro.classList.remove("zoom");
    intro.hidden = false;
    busca.hidden = true;
    busca.classList.remove("enter");
    window.scrollTo(0, 0);
  }
  document.getElementById("botao-entrar").addEventListener("click", entrar);
  document.getElementById("botao-voltar").addEventListener("click", voltar);

  /* ---------- busca ---------- */
  function cartao(a) {
    var ini = esc(a.nome.charAt(0).toUpperCase());
    var base = '<svg viewBox="0 0 200 200" aria-hidden="true"><use href="#sankofa"/></svg><span class="initial" aria-hidden="true">' + ini + '</span>';
    var img = a.foto ? '<img src="' + esc(a.foto) + '" alt="Foto de ' + esc(a.nome) + ', turma ' + esc(a.turma) + '" onerror="this.remove()">' : "";
    return '<figure><div class="photo">' + img + base + '</div>' +
      '<figcaption><strong>' + esc(a.nome) + '</strong><span>' + esc(a.turma) + '</span></figcaption></figure>';
  }

  function mostrarVazio() {
    area.innerHTML = '<div class="empty"><div class="photo"><svg viewBox="0 0 200 200" aria-hidden="true"><use href="#sankofa"/></svg></div>' +
      '<p>O significado do seu nome e as fotos de quem tem o mesmo nome aparecem aqui.</p></div>';
  }
  function mostrarNaoEncontrado(q) {
    area.innerHTML = '<div class="empty notfound reveal"><div class="photo"><svg viewBox="0 0 200 200" aria-hidden="true"><use href="#sankofa"/></svg></div>' +
      '<p>Não achamos "' + esc(q) + '" na lista da turma. Confira a grafia, por exemplo os acentos, e tente de novo.</p></div>';
  }

  function mostrarGrupo(chave, chaves) {
    var info = SIGNIFICADOS[chave] || { nome: grupos[chave][0].nome, origem: "Origem", texto: "O significado deste nome ainda não foi cadastrado." };
    var pessoas = grupos[chave];
    var n = pessoas.length;
    var chips = "";
    if (chaves.length > 1) {
      chips = '<div class="others"><span>Mais de um resultado:</span>' + chaves.map(function (k) {
        return '<button type="button" class="chip" data-k="' + esc(k) + '" aria-pressed="' + (k === chave) + '">' + esc(grupos[k][0].nome) + '</button>';
      }).join("") + '</div>';
    }
    area.innerHTML = chips +
      '<article class="name-head reveal">' +
        '<span class="tag">' + esc(info.origem) + '</span>' +
        '<h3>' + esc(info.nome) + '</h3>' +
        '<p class="label-small">O que significa</p>' +
        '<p class="meaning">' + esc(info.texto) + '</p>' +
      '</article>' +
      '<section class="people reveal">' +
        '<p class="label-small">' + n + (n === 1 ? ' aluno com este nome' : ' alunos com este nome') + '</p>' +
        '<div class="grid">' + pessoas.map(cartao).join("") + '</div>' +
      '</section>';
    var bs = area.querySelectorAll(".chip");
    for (var i = 0; i < bs.length; i++) {
      bs[i].addEventListener("click", function (e) { mostrarGrupo(e.currentTarget.getAttribute("data-k"), chaves); });
    }
  }

  function buscar(texto) {
    var q = norm(texto);
    if (!q) { mostrarVazio(); return; }
    var todas = Object.keys(grupos);
    var exatas = todas.filter(function (k) { return k === q; });
    var achadas = exatas.length ? exatas : todas.filter(function (k) { return k.indexOf(q) === 0; });
    if (!achadas.length) { mostrarNaoEncontrado(texto.trim()); return; }
    mostrarGrupo(achadas[0], achadas);
  }

  form.addEventListener("submit", function (e) { e.preventDefault(); buscar(campo.value); });

  exemplos.innerHTML = ["maria", "joao", "ana", "pedro"].map(function (k) {
    return '<button type="button" class="chip" data-nome="' + esc(SIGNIFICADOS[k].nome) + '">' + esc(SIGNIFICADOS[k].nome) + '</button>';
  }).join("");
  exemplos.addEventListener("click", function (e) {
    var b = e.target.closest("button[data-nome]");
    if (!b) return;
    campo.value = b.getAttribute("data-nome");
    buscar(campo.value);
  });

  mostrarVazio();
