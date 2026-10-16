/* Sankofa dos Nomes: dados e comportamento da página. */

  /* ====== DADOS ======
     SIGNIFICADOS: um registro por nome (chave sem acento e em minúsculas).
     ALUNOS: um registro por aluno (nome, turma e foto, ex.: "fotos/maria-1a.jpg"; "" usa a inicial). */
  var SIGNIFICADOS = {
    maria:   { nome: "Maria",   origem: "Hebraico", texto: "Vem de Miriam. Os estudiosos divergem, e as leituras mais citadas são \"amada\", \"senhora\" e \"a elevada\"." },
    joao:    { nome: "João",    origem: "Hebraico", texto: "Vem de Yohanan e quer dizer \"Deus é misericordioso\" ou \"Deus fez graça\"." },
    ana:     { nome: "Ana",     origem: "Hebraico", texto: "Vem de Hannah e significa \"graça\" ou \"aquela que tem a compaixão de Deus\"." },
    pedro:   { nome: "Pedro",   origem: "Grego",    texto: "Vem de petros e significa \"pedra\", algo firme e que serve de alicerce." },
    beatriz: { nome: "Beatriz", origem: "Latim",    texto: "Vem de Beatrix e quer dizer \"aquela que traz felicidade\" ou \"a que abençoa\"." },
    lucas:   { nome: "Lucas",   origem: "Latim",    texto: "Vem de Lucanus e é associado a \"luz\": quem nasce ao amanhecer ou quem traz claridade." },
    guilherme: { nome: "Guilherme", origem: "Germânico", texto: "Vem de Willahelm ou Willehelm e significa \"protetor decidido\", algo como protetor decidido."},
    roberta: { nome:"Roberta", origem: "Germânico", texto: "Vem de Hrodebert e significa \"famosa\" ou \"gloriosa\", Brilhante na glória"}
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
    { nome: "roberta", turma: "2ºB", foto: ""}
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
