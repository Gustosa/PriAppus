const staticPriAppus = "dev-PriAppus-site-v1";

var assets = [
  "/",
  "index.css",
  "img/favicon.gif",
  "img/mascote.png",
  "img/penis.png",
  "img/ifpr.gif",
  "img/epididimo_divisoes.png",
  "img/menu.svg",
  "img/saco_escrotal_testiculos.png",
  "img/prostata.webp",
  "img/puzzle.svg",
  "img/casinha.png",
  "img/back.svg",
  "img/home.svg",
  "img/anatomia_penis.jpg",
  "img/question.svg",
  "img/bulbouretral.jpg",
  "img/vesicula_seminal.png",
  "img/uretra.png",
  "img/information.svg",
  "img/interrogacao.png",
  "img/canal_deferente.jpg",
  "img/ducto_vesicula.webp",
  "img/vasectomia.jpg",
  "img/cordao_espermatico.png",
  "img/corte_tubulo.jpg",
  "img/criptorquidia.jpeg",
  "img/epididimo.png",
  "img/espermatogenese_1.jpg",
  "img/espermatogenese_2.jpg",
  "img/fimose.png",
  "img/mitose_meiose.webp",
  "img/penis_ereto.PNG",
  "img/penis_flacido.PNG",
  "img/saco_aberto.webp",
  "img/suprarrenais.jpeg",
  "img/torcao.jpeg",
  "img/tyson.webp",
  "img/varicocele_bilateral_unilateral.jpg",
  "img/icons/icon-128x128.png",
  "img/icons/icon-96x96.png",
  "img/icons/icon-144x144.png",
  "img/icons/icon-192x192.png",
  "img/icons/icon-152x152.png",
  "img/icons/icon-384x384.png",
  "img/icons/icon-72x72.png",
  "img/icons/icon-512x512.png",
  "img/testiculos.jpg",
  "img/glandula_bulbouretral.png",
  "tutoriais/tutorial.css",
  "tutoriais/tutorial_index.html",
  "tutoriais/tutorial.js",
  "orgaos/testiculos/definicao.html",
  "orgaos/testiculos/orgao.html",
  "orgaos/testiculos/doencas.html",
  "orgaos/testiculos/curiosidades.html",
  "orgaos/uretra/doencas.html",
  "orgaos/uretra/curiosidades.html",
  "orgaos/uretra/definicao.html",
  "orgaos/uretra/sistema_urinario.html",
  "orgaos/uretra/orgao.html",
  "orgaos/prostata/orgao.html",
  "orgaos/prostata/curiosidades.html",
  "orgaos/prostata/doencas.html",
  "orgaos/prostata/definicao.html",
  "orgaos/ducto_deferente/orgao.html",
  "orgaos/ducto_deferente/curiosidades.html",
  "orgaos/ducto_deferente/definicao.html",
  "orgaos/epididimo/orgao.html",
  "orgaos/epididimo/definicao.html",
  "orgaos/epididimo/doencas.html",
  "orgaos/epididimo/curiosidades.html",
  "orgaos/glandula_bulbouretral/orgao.html",
  "orgaos/glandula_bulbouretral/curiosidades.html",
  "orgaos/glandula_bulbouretral/definicao.html",
  "orgaos/vesicula_seminal/definicao.html",
  "orgaos/vesicula_seminal/curiosidades.html",
  "orgaos/vesicula_seminal/orgao.html",
  "orgaos/penis/orgao.html",
  "orgaos/penis/doencas.html",
  "orgaos/penis/curiosidades.html",
  "orgaos/penis/definicao.html",
  "orgaos/saco_escrotal/curiosidades.html",
  "orgaos/saco_escrotal/orgao.html",
  "orgaos/saco_escrotal/definicao.html",
  "manifest.json",
  "atividades/desafios/desafios.html",
  "atividades/questoes/questoes.html",
  "js/index.js",
  "js/questoes.js",
  "js/main.js",
  "sw.js",
  "js/controlar_acesso.js",
  "index.html",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticPriAppus).then(async (cache) => {
      try {
        ok = await cache.addAll(assets);
      } catch (err) {
        console.log(err);
        console.error("sw: cache.addAll");
        for (let i of assets) {
          try {
            ok = await cache.add(i);
          } catch (err) {
            console.log(err);
            console.warn("sw: cache.add", i);
          }
        }
      }
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
