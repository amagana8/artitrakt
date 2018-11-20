import * as ArtifactApi from 'node-artifact-api';

async function getSearchDeck() {
    let search_deck = [];
    let set_id = "0";
    let temp_set = {
"card_set":{
"version":1,
"set_info":{
"set_id":0,
"pack_item_def":0,
"name":{
"english":"Base Set",
"german":"Basisset",
"french":"Ensemble de base",
"italian":"Set di base",
"koreana":"기본 세트",
"spanish":"Conjunto base",
"schinese":"基础套牌",
"tchinese":"基礎套牌",
"russian":"Базовый набор",
"thai":"Base Set",
"japanese":"基本セット",
"portuguese":"Base Set",
"polish":"Base Set",
"danish":"Base Set",
"dutch":"Base Set",
"finnish":"Base Set",
"norwegian":"Base Set",
"swedish":"Base Set",
"hungarian":"Base Set",
"czech":"Base Set",
"romanian":"Base Set",
"turkish":"Base Set",
"brazilian":"Conjunto Base",
"bulgarian":"Base Set",
"greek":"Base Set",
"ukrainian":"Base Set",
"latam":"Set de base",
"vietnamese":"Base Set"
}
},
"card_list":[
{
"card_id":1000,
"base_card_id":1000,
"card_type":"Stronghold",
"card_name":{
"english":"Ancient Tower",
"german":"Uralter Turm",
"french":"Tour de l'Ancien",
"italian":"Torre dell'Antico",
"koreana":"고대 포탑",
"spanish":"Torre ancestral",
"schinese":"遗迹塔",
"tchinese":"遺跡塔",
"russian":"Древняя башня",
"thai":"Ancient Tower",
"japanese":"エンシェントタワー",
"portuguese":"Ancient Tower",
"polish":"Ancient Tower",
"danish":"Ancient Tower",
"dutch":"Ancient Tower",
"finnish":"Ancient Tower",
"norwegian":"Ancient Tower",
"swedish":"Ancient Tower",
"hungarian":"Ancient Tower",
"czech":"Ancient Tower",
"romanian":"Ancient Tower",
"turkish":"Ancient Tower",
"brazilian":"Torre Ancestral",
"bulgarian":"Ancient Tower",
"greek":"Ancient Tower",
"ukrainian":"Ancient Tower",
"latam":"Torre Ancestral",
"vietnamese":"Ancient Tower"
},
"card_text":{

},
"mini_image":{
"default":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1000.91b2ed80da07ef5cf343540b09687fbf875168c8.png"
},
"large_image":{
"default":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1000_large_english.d3abe86ed7ab446bcebe784d0052310d4672b86d.png",
"german":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1000_large_german.201ed581f6855b4520bc166aba4a632338a82fde.png",
"french":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1000_large_french.376a2bdf770532d7dbd1274438cc7983fff8f652.png",
"italian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1000_large_italian.4938f9b6894aa6e2f297093c70faec458f3ecdc0.png",
"koreana":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1000_large_koreana.10d84af124313bc9db9eef717a845e7be6309f38.png",
"spanish":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1000_large_spanish.209b8b07070c433516562985e987d4724782e570.png",
"schinese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1000_large_schinese.adf6b4e4e5f462f50b42853a80d490111699fa1d.png",
"tchinese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1000_large_tchinese.70c1e4e6dbed72d8f59b06ae7a7a14eb9dd5ee16.png",
"russian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1000_large_russian.47e6b44851277415f3f586775aa2afa0cca2ee53.png",
"japanese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1000_large_japanese.d515d1d6e58f6a790410b6119e5b3e50d9f5ed38.png",
"brazilian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1000_large_brazilian.d54c33497ed01ce008fdd47c8835280e89df08da.png",
"latam":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1000_large_latam.d54c33497ed01ce008fdd47c8835280e89df08da.png"
},
"ingame_image":{

},
"hit_points":80,
"references":[

]

},
{
"card_id":1001,
"base_card_id":1001,
"card_type":"Stronghold",
"card_name":{
"english":"Defense Tower",
"german":"Verteidigungsturm",
"french":"Tour de défense",
"italian":"Torre di difesa",
"koreana":"방어 포탑",
"spanish":"Torre de defensa",
"schinese":"防御塔",
"tchinese":"防禦塔",
"russian":"Башня",
"thai":"Defense Tower",
"japanese":"ディフェンスタワー",
"portuguese":"Defense Tower",
"polish":"Defense Tower",
"danish":"Defense Tower",
"dutch":"Defense Tower",
"finnish":"Defense Tower",
"norwegian":"Defense Tower",
"swedish":"Defense Tower",
"hungarian":"Defense Tower",
"czech":"Defense Tower",
"romanian":"Defense Tower",
"turkish":"Defense Tower",
"brazilian":"Torre de Defesa",
"bulgarian":"Defense Tower",
"greek":"Defense Tower",
"ukrainian":"Defense Tower",
"latam":"Torre de defensa",
"vietnamese":"Defense Tower"
},
"card_text":{

},
"mini_image":{
"default":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1001.91b2ed80da07ef5cf343540b09687fbf875168c8.png"
},
"large_image":{
"default":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1001_large_english.e54b01cd4acc693d4133b5b17286efc59bd1db46.png",
"german":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1001_large_german.9a2c617c12c44819f5d50644fcf56fafd27bd7cb.png",
"french":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1001_large_french.4fe42c2b53a108aa310618f3ee98577168a57ac8.png",
"italian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1001_large_italian.24faa050b0543c2556fa8afa9a4baac08bbdda04.png",
"koreana":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1001_large_koreana.cccf034ab6827668c08bc7abbebe3b57e4868ef7.png",
"spanish":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1001_large_spanish.c1636ae2d9ba8b5ffd297bc5ef0761ec9fc9c8e7.png",
"schinese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1001_large_schinese.381349d47940368aa33755e92c97ff17945fc14e.png",
"tchinese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1001_large_tchinese.0575c54ac72a991b627ffa327e1e2d866267c29b.png",
"russian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1001_large_russian.33b5582e75301271aa08534ceb46b2a9d6fda90e.png",
"japanese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1001_large_japanese.d976ebc3ce17a4593b9a0b05f102b15c6d1dc9ea.png",
"brazilian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1001_large_brazilian.b1d8d86d16da507b7fe01bc86455b9a61a960c87.png",
"latam":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1001_large_latam.c1636ae2d9ba8b5ffd297bc5ef0761ec9fc9c8e7.png"
},
"ingame_image":{

},
"hit_points":40,
"references":[

]

},
{
"card_id":1007,
"base_card_id":1007,
"card_type":"Stronghold",
"card_name":{
"english":"Ancient Rubble",
"german":"Uraltes Geröll",
"french":"Vestiges de l'Ancien",
"italian":"Rovina dell'Antico",
"koreana":"고대의 잔해",
"spanish":"Escombros ancestrales",
"schinese":"遗迹瓦砾",
"tchinese":"遺跡瓦礫",
"russian":"Руины древней башни",
"thai":"Ancient Rubble",
"japanese":"エンシェントの瓦礫",
"portuguese":"Ancient Rubble",
"polish":"Ancient Rubble",
"danish":"Ancient Rubble",
"dutch":"Ancient Rubble",
"finnish":"Ancient Rubble",
"norwegian":"Ancient Rubble",
"swedish":"Ancient Rubble",
"hungarian":"Ancient Rubble",
"czech":"Ancient Rubble",
"romanian":"Ancient Rubble",
"turkish":"Ancient Rubble",
"brazilian":"Escombros Ancestrais",
"bulgarian":"Ancient Rubble",
"greek":"Ancient Rubble",
"ukrainian":"Ancient Rubble",
"latam":"Escombros Ancestrales",
"vietnamese":"Ancient Rubble"
},
"card_text":{

},
"mini_image":{
"default":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1007.91b2ed80da07ef5cf343540b09687fbf875168c8.png"
},
"large_image":{
"default":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1007_large_english.b955d7916f3a4390a268822952e766d0894a1f14.png",
"german":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1007_large_german.981f9524dcd4e78332f29e48d2fdc8792187916f.png",
"french":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1007_large_french.74bf5f1138c7be3c75d3b7df3425b4a4b5e8620a.png",
"italian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1007_large_italian.691ce12fa2e80fa28daaaa34febe85c84f6f1e9d.png",
"koreana":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1007_large_koreana.38fe69b3becfe15a303f453b815f7e35925c7970.png",
"spanish":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1007_large_spanish.503b946a47c6d086ab9b1f19f6a1eed59449b356.png",
"schinese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1007_large_schinese.880b10850621de0359c794893d7f50375b325952.png",
"tchinese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1007_large_tchinese.ddcb891697dc2248efbc04a7d1816d048cab563f.png",
"russian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1007_large_russian.69abc51f2cf8c23870de4b68840f39c0437e3591.png",
"japanese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1007_large_japanese.cbd4ffe405353335977b0153a74eab88404565a9.png",
"brazilian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1007_large_brazilian.9451519b0efd261c78699be619f2cf21ad462c60.png",
"latam":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1007_large_latam.3f89f0a1bb290eddd24dbe7e5094fac4c6837811.png"
},
"ingame_image":{

},
"references":[

]

},
{
"card_id":1002,
"base_card_id":1002,
"card_type":"Pathing",
"card_name":{
"english":"Left Path",
"german":"Linker Pfad",
"french":"Voie de gauche",
"italian":"Sentiero sinistro",
"koreana":"왼쪽 경로",
"spanish":"Ruta izquierda",
"schinese":"左路",
"tchinese":"左路",
"russian":"Тропа влево",
"thai":"Left Path",
"japanese":"左の道",
"portuguese":"Left Path",
"polish":"Left Path",
"danish":"Left Path",
"dutch":"Left Path",
"finnish":"Left Path",
"norwegian":"Left Path",
"swedish":"Left Path",
"hungarian":"Left Path",
"czech":"Left Path",
"romanian":"Left Path",
"turkish":"Left Path",
"brazilian":"Caminho da Esquerda",
"bulgarian":"Left Path",
"greek":"Left Path",
"ukrainian":"Left Path",
"latam":"Ruta izquierda",
"vietnamese":"Left Path"
},
"card_text":{

},
"mini_image":{
"default":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1002.95db07546620aa3431e88471ac839c34ac1547f9.png"
},
"large_image":{
"default":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1002_large_english.aede5d91274aeb1926fa872793b863b9eda16dba.png",
"german":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1002_large_german.aede5d91274aeb1926fa872793b863b9eda16dba.png",
"french":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1002_large_french.aede5d91274aeb1926fa872793b863b9eda16dba.png",
"italian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1002_large_italian.aede5d91274aeb1926fa872793b863b9eda16dba.png",
"koreana":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1002_large_koreana.aede5d91274aeb1926fa872793b863b9eda16dba.png",
"spanish":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1002_large_spanish.aede5d91274aeb1926fa872793b863b9eda16dba.png",
"schinese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1002_large_schinese.aede5d91274aeb1926fa872793b863b9eda16dba.png",
"tchinese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1002_large_tchinese.aede5d91274aeb1926fa872793b863b9eda16dba.png",
"russian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1002_large_russian.aede5d91274aeb1926fa872793b863b9eda16dba.png",
"japanese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1002_large_japanese.aede5d91274aeb1926fa872793b863b9eda16dba.png",
"brazilian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1002_large_brazilian.aede5d91274aeb1926fa872793b863b9eda16dba.png",
"latam":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1002_large_latam.aede5d91274aeb1926fa872793b863b9eda16dba.png"
},
"ingame_image":{

},
"references":[

]

},
{
"card_id":1003,
"base_card_id":1003,
"card_type":"Pathing",
"card_name":{
"english":"Forward Path",
"german":"Vorwärtspfad",
"french":"Voie avant",
"italian":"Sentiero anteriore",
"koreana":"전방 경로",
"spanish":"Ruta hacia delante",
"schinese":"中路",
"tchinese":"中路",
"russian":"Тропа вперёд",
"thai":"Forward Path",
"japanese":"正面の道",
"portuguese":"Forward Path",
"polish":"Forward Path",
"danish":"Forward Path",
"dutch":"Forward Path",
"finnish":"Forward Path",
"norwegian":"Forward Path",
"swedish":"Forward Path",
"hungarian":"Forward Path",
"czech":"Forward Path",
"romanian":"Forward Path",
"turkish":"Forward Path",
"brazilian":"Caminho Reto",
"bulgarian":"Forward Path",
"greek":"Forward Path",
"ukrainian":"Forward Path",
"latam":"Ruta hacia delante",
"vietnamese":"Forward Path"
},
"card_text":{

},
"mini_image":{
"default":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1003.71bdeca5dc7d774bf98580b882282f0041fd7837.png"
},
"large_image":{
"default":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1003_large_english.7188a0e6e47b41cb4dc91a64ca5f75096830dc3c.png",
"german":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1003_large_german.7188a0e6e47b41cb4dc91a64ca5f75096830dc3c.png",
"french":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1003_large_french.7188a0e6e47b41cb4dc91a64ca5f75096830dc3c.png",
"italian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1003_large_italian.7188a0e6e47b41cb4dc91a64ca5f75096830dc3c.png",
"koreana":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1003_large_koreana.7188a0e6e47b41cb4dc91a64ca5f75096830dc3c.png",
"spanish":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1003_large_spanish.7188a0e6e47b41cb4dc91a64ca5f75096830dc3c.png",
"schinese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1003_large_schinese.7188a0e6e47b41cb4dc91a64ca5f75096830dc3c.png",
"tchinese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1003_large_tchinese.7188a0e6e47b41cb4dc91a64ca5f75096830dc3c.png",
"russian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1003_large_russian.7188a0e6e47b41cb4dc91a64ca5f75096830dc3c.png",
"japanese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1003_large_japanese.7188a0e6e47b41cb4dc91a64ca5f75096830dc3c.png",
"brazilian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1003_large_brazilian.7188a0e6e47b41cb4dc91a64ca5f75096830dc3c.png",
"latam":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1003_large_latam.7188a0e6e47b41cb4dc91a64ca5f75096830dc3c.png"
},
"ingame_image":{

},
"references":[

]

},
{
"card_id":1004,
"base_card_id":1004,
"card_type":"Pathing",
"card_name":{
"english":"Right Path",
"german":"Rechter Pfad",
"french":"Voie de droite",
"italian":"Sentiero destro",
"koreana":"오른쪽 경로",
"spanish":"Ruta derecha",
"schinese":"右路",
"tchinese":"右路",
"russian":"Тропа вправо",
"thai":"Right Path",
"japanese":"右の道",
"portuguese":"Right Path",
"polish":"Right Path",
"danish":"Right Path",
"dutch":"Right Path",
"finnish":"Right Path",
"norwegian":"Right Path",
"swedish":"Right Path",
"hungarian":"Right Path",
"czech":"Right Path",
"romanian":"Right Path",
"turkish":"Right Path",
"brazilian":"Caminho da Direita",
"bulgarian":"Right Path",
"greek":"Right Path",
"ukrainian":"Right Path",
"latam":"Ruta derecha",
"vietnamese":"Right Path"
},
"card_text":{

},
"mini_image":{
"default":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1004.7b798d05d890521a20135c6a3fa33b2458dceb72.png"
},
"large_image":{
"default":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1004_large_english.0ba288582bce54fa6df8a00a43dce4c402ef668d.png",
"german":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1004_large_german.0ba288582bce54fa6df8a00a43dce4c402ef668d.png",
"french":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1004_large_french.0ba288582bce54fa6df8a00a43dce4c402ef668d.png",
"italian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1004_large_italian.0ba288582bce54fa6df8a00a43dce4c402ef668d.png",
"koreana":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1004_large_koreana.0ba288582bce54fa6df8a00a43dce4c402ef668d.png",
"spanish":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1004_large_spanish.0ba288582bce54fa6df8a00a43dce4c402ef668d.png",
"schinese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1004_large_schinese.0ba288582bce54fa6df8a00a43dce4c402ef668d.png",
"tchinese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1004_large_tchinese.0ba288582bce54fa6df8a00a43dce4c402ef668d.png",
"russian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1004_large_russian.0ba288582bce54fa6df8a00a43dce4c402ef668d.png",
"japanese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1004_large_japanese.0ba288582bce54fa6df8a00a43dce4c402ef668d.png",
"brazilian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1004_large_brazilian.0ba288582bce54fa6df8a00a43dce4c402ef668d.png",
"latam":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1004_large_latam.0ba288582bce54fa6df8a00a43dce4c402ef668d.png"
},
"ingame_image":{

},
"references":[

]

},
{
"card_id":1005,
"base_card_id":1005,
"card_type":"Pathing",
"card_name":{
"english":"Forward Path 2",
"german":"Vorwärtspfad 2",
"french":"Voie avant 2",
"italian":"Sentiero anteriore 2",
"koreana":"전방 경로 2",
"spanish":"Ruta hacia delante 2",
"schinese":"中路2",
"tchinese":"中路2",
"russian":"Тропа вперёд 2",
"thai":"Forward Path 2",
"japanese":"正面の道2",
"portuguese":"Forward Path 2",
"polish":"Forward Path 2",
"danish":"Forward Path 2",
"dutch":"Forward Path 2",
"finnish":"Forward Path 2",
"norwegian":"Forward Path 2",
"swedish":"Forward Path 2",
"hungarian":"Forward Path 2",
"czech":"Forward Path 2",
"romanian":"Forward Path 2",
"turkish":"Forward Path 2",
"brazilian":"Caminho Reto 2",
"bulgarian":"Forward Path 2",
"greek":"Forward Path 2",
"ukrainian":"Forward Path 2",
"latam":"Ruta hacia delante 2",
"vietnamese":"Forward Path 2"
},
"card_text":{

},
"mini_image":{
"default":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1005.7b798d05d890521a20135c6a3fa33b2458dceb72.png"
},
"large_image":{
"default":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1005_large_english.34222f6135d48ad31bdb73c9ad05941502fe9322.png",
"german":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1005_large_german.34222f6135d48ad31bdb73c9ad05941502fe9322.png",
"french":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1005_large_french.34222f6135d48ad31bdb73c9ad05941502fe9322.png",
"italian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1005_large_italian.34222f6135d48ad31bdb73c9ad05941502fe9322.png",
"koreana":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1005_large_koreana.34222f6135d48ad31bdb73c9ad05941502fe9322.png",
"spanish":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1005_large_spanish.34222f6135d48ad31bdb73c9ad05941502fe9322.png",
"schinese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1005_large_schinese.34222f6135d48ad31bdb73c9ad05941502fe9322.png",
"tchinese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1005_large_tchinese.34222f6135d48ad31bdb73c9ad05941502fe9322.png",
"russian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1005_large_russian.34222f6135d48ad31bdb73c9ad05941502fe9322.png",
"japanese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1005_large_japanese.34222f6135d48ad31bdb73c9ad05941502fe9322.png",
"brazilian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1005_large_brazilian.34222f6135d48ad31bdb73c9ad05941502fe9322.png",
"latam":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1005_large_latam.34222f6135d48ad31bdb73c9ad05941502fe9322.png"
},
"ingame_image":{

},
"references":[

]

},
{
"card_id":1006,
"base_card_id":1006,
"card_type":"Creep",
"card_name":{
"english":"Melee Creep",
"german":"Nahkampfdiener",
"french":"Cryptide de mêlée",
"italian":"Creep da mischia",
"koreana":"근접 크립",
"spanish":"Críptido cuerpo a cuerpo",
"schinese":"近战小兵",
"tchinese":"近戰小兵",
"russian":"Крип-мечник",
"thai":"Melee Creep",
"japanese":"近接クリープ",
"portuguese":"Melee Creep",
"polish":"Melee Creep",
"danish":"Melee Creep",
"dutch":"Melee Creep",
"finnish":"Melee Creep",
"norwegian":"Melee Creep",
"swedish":"Melee Creep",
"hungarian":"Melee Creep",
"czech":"Melee Creep",
"romanian":"Melee Creep",
"turkish":"Melee Creep",
"brazilian":"Criatura Guerreira",
"bulgarian":"Melee Creep",
"greek":"Melee Creep",
"ukrainian":"Melee Creep",
"latam":"Críptido cuerpo a cuerpo",
"vietnamese":"Melee Creep"
},
"card_text":{

},
"mini_image":{
"default":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1006.3c1f2d846354e3ddf9e0d5eef105334f66120813.png"
},
"large_image":{
"default":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1006_large_english.954fce4124c336d05ed2b4f01841b357cdef3803.png",
"german":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1006_large_german.b2af2d2754818a86d74ed8eb5f0c7eb85b868a54.png",
"french":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1006_large_french.c24a0a9e7e7ea443f0f70d866571c7ae5c63306f.png",
"italian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1006_large_italian.6b31933ef859b5826ad1206e2815cb181218a995.png",
"koreana":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1006_large_koreana.7d7b98e1c63c9c9db84bebef6c9a1887ad2c5be2.png",
"spanish":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1006_large_spanish.57757ebb48827278ba3e9bce6d532541c67e3398.png",
"schinese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1006_large_schinese.e45951ce48992c0e467c4e98618ed8269bafeb72.png",
"tchinese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1006_large_tchinese.98454a3570a0c5cb7e9e1f233b0882f2a165dbd4.png",
"russian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1006_large_russian.071a03860539111c76adb10e58e21ce5355062a2.png",
"japanese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1006_large_japanese.2b94df6db7d0da138f296aa89bd4682e1fadc3fd.png",
"brazilian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1006_large_brazilian.194694ed2b243543aeaa6fab99154413d00b2a65.png",
"latam":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1006_large_latam.57757ebb48827278ba3e9bce6d532541c67e3398.png"
},
"ingame_image":{

},
"illustrator":"Forrest Imel",
"mana_cost":3,
"attack":2,
"hit_points":4,
"references":[

]

},
{
"card_id":1009,
"base_card_id":1009,
"card_type":"Creep",
"card_name":{
"english":"Zombie",
"german":"Zombie",
"french":"Zombie",
"italian":"Zombi",
"koreana":"좀비",
"spanish":"Zombi",
"schinese":"僵尸",
"tchinese":"殭屍",
"russian":"Зомби",
"thai":"Zombie",
"japanese":"ゾンビ",
"portuguese":"Zombie",
"polish":"Zombie",
"danish":"Zombie",
"dutch":"Zombie",
"finnish":"Zombie",
"norwegian":"Zombie",
"swedish":"Zombie",
"hungarian":"Zombie",
"czech":"Zombie",
"romanian":"Zombie",
"turkish":"Zombie",
"brazilian":"Zumbi",
"bulgarian":"Zombie",
"greek":"Zombie",
"ukrainian":"Zombie",
"latam":"Zombi",
"vietnamese":"Zombie"
},
"card_text":{

},
"mini_image":{
"default":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1009.d79cdef2d7088a2b43ad3c52d23825f10e7282e6.png"
},
"large_image":{
"default":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1009_large_english.bf85a1ceab40adaede2f53b5b94044617b78c7e5.png",
"german":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1009_large_german.19e31b9f60692736713204abae225d7ce67b9c51.png",
"french":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1009_large_french.19e31b9f60692736713204abae225d7ce67b9c51.png",
"italian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1009_large_italian.42f870e0f4e2dd1cea92fa5b95e0a190611cd1d7.png",
"koreana":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1009_large_koreana.a7c7e652a9a1041ad84a75d2b41f3ae16e2b9c22.png",
"spanish":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1009_large_spanish.42f870e0f4e2dd1cea92fa5b95e0a190611cd1d7.png",
"schinese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1009_large_schinese.29761d614bc6145a538eae8afe978baa35650436.png",
"tchinese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1009_large_tchinese.d2dd3bcea34bd56b378e8db20b33accf2bb003e5.png",
"russian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1009_large_russian.c42a91544b0f39a7ef47666c17fa8fc51251b0f2.png",
"japanese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1009_large_japanese.cace3812e68d9a83ccaa8cb8b86707912a4ad1e6.png",
"brazilian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1009_large_brazilian.24ec5ca9fff3687c542e3a4976e94293abccd6c3.png",
"latam":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1009_large_latam.42f870e0f4e2dd1cea92fa5b95e0a190611cd1d7.png"
},
"ingame_image":{

},
"illustrator":"Forrest Imel",
"is_black":true,
"mana_cost":1,
"attack":2,
"hit_points":2,
"references":[

]

},
{
"card_id":3000,
"base_card_id":3000,
"card_type":"Item",
"card_name":{
"english":"Traveler's Cloak",
"german":"Mantel des Reisenden",
"french":"Manteau du voyageur",
"italian":"Mantello del viaggiatore",
"koreana":"여행자의 망토",
"spanish":"Manto de viajero",
"schinese":"旅者斗篷",
"tchinese":"旅者斗篷",
"russian":"Плащ путника",
"thai":"Traveler's Cloak",
"japanese":"旅人のマント",
"portuguese":"Traveler's Cloak",
"polish":"Traveler's Cloak",
"danish":"Traveler's Cloak",
"dutch":"Traveler's Cloak",
"finnish":"Traveler's Cloak",
"norwegian":"Traveler's Cloak",
"swedish":"Traveler's Cloak",
"hungarian":"Traveler's Cloak",
"czech":"Traveler's Cloak",
"romanian":"Traveler's Cloak",
"turkish":"Traveler's Cloak",
"brazilian":"Manto do Viajante",
"bulgarian":"Traveler's Cloak",
"greek":"Traveler's Cloak",
"ukrainian":"Traveler's Cloak",
"latam":"Manto de viajero",
"vietnamese":"Traveler's Cloak"
},
"card_text":{
"english":"Equipped hero has +4 Health.",
"german":"Der ausgerüstete Held hat +4 Lebenspunkte.",
"french":"Le héros équipé a +4 PV.",
"italian":"L'eroe equipaggiato ottiene +4 punti salute.",
"koreana":"장착한 영웅의 체력이 4 증가합니다.",
"spanish":"Otorga +4 de Vida al héroe equipado.",
"schinese":"装备此物品的英雄+4生命 。",
"tchinese":"裝備此物品的英雄+4生命。",
"russian":"Даёт владельцу +4 к здоровью.",
"thai":"Equipped hero has +4 Health.",
"japanese":"装備したヒーローは＋4ヘルスを得る。",
"portuguese":"Equipped hero has +4 Health.",
"polish":"Equipped hero has +4 Health.",
"danish":"Equipped hero has +4 Health.",
"dutch":"Equipped hero has +4 Health.",
"finnish":"Equipped hero has +4 Health.",
"norwegian":"Equipped hero has +4 Health.",
"swedish":"Equipped hero has +4 Health.",
"hungarian":"Equipped hero has +4 Health.",
"czech":"Equipped hero has +4 Health.",
"romanian":"Equipped hero has +4 Health.",
"turkish":"Equipped hero has +4 Health.",
"brazilian":"Ao equipar, o herói ganha +4 de Vida.",
"bulgarian":"Equipped hero has +4 Health.",
"greek":"Equipped hero has +4 Health.",
"ukrainian":"Equipped hero has +4 Health.",
"latam":"Otorga +4 de vida al héroe equipado.",
"vietnamese":"Equipped hero has +4 Health."
},
"mini_image":{
"default":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3000.da00fd40824357ba4c29d5d061bdca37a10cabb5.png"
},
"large_image":{
"default":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3000_large_english.a16aa16b6144a2bdd4105056e9b75303ebc89f8b.png",
"german":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3000_large_german.f4cf25f457bced3e4c38145834e222fdae96c911.png",
"french":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3000_large_french.7e00c0b35225fbf2c653c5b41ad0d1294af1541c.png",
"italian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3000_large_italian.e72970b9f163ce479e74198cafbf20ee0f37a73e.png",
"koreana":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3000_large_koreana.abcce49f2cc1157ac439ee590c9746d9259a2036.png",
"spanish":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3000_large_spanish.1a74b41146121d5cf3763681ab2d7fa581cd30fb.png",
"schinese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3000_large_schinese.3a8e4984f241a65530711cbb151803bd81dfb077.png",
"tchinese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3000_large_tchinese.bd29e7dcda7abf80d2098ad8d2af9e1361c83c8f.png",
"russian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3000_large_russian.d5dee9390921fb6c14b5414366c25a5f722db766.png",
"japanese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3000_large_japanese.3d3136e883dfe02f95c15e595863b966a1b10b12.png",
"brazilian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3000_large_brazilian.5a12f94de363b9fd4b8726eb7d0c1190be17478f.png",
"latam":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3000_large_latam.919ddd9697a65aaa6560ecc65193842d64c12f58.png"
},
"ingame_image":{

},
"illustrator":"Julie Baroh",
"sub_type":"Accessory",
"gold_cost":3,
"references":[

]

},
{
"card_id":3001,
"base_card_id":3001,
"card_type":"Item",
"card_name":{
"english":"Leather Armor",
"german":"Lederrüstung",
"french":"Armure de cuir",
"italian":"Armatura di cuoio",
"koreana":"가죽 방어구",
"spanish":"Armadura de cuero",
"schinese":"皮革护甲",
"tchinese":"皮革護甲",
"russian":"Кожаная броня",
"thai":"Leather Armor",
"japanese":"革の鎧",
"portuguese":"Leather Armor",
"polish":"Leather Armor",
"danish":"Leather Armor",
"dutch":"Leather Armor",
"finnish":"Leather Armor",
"norwegian":"Leather Armor",
"swedish":"Leather Armor",
"hungarian":"Leather Armor",
"czech":"Leather Armor",
"romanian":"Leather Armor",
"turkish":"Leather Armor",
"brazilian":"Armadura de Couro",
"bulgarian":"Leather Armor",
"greek":"Leather Armor",
"ukrainian":"Leather Armor",
"latam":"Armadura de cuero",
"vietnamese":"Leather Armor"
},
"card_text":{
"english":"Equipped hero has +1 Armor.",
"german":"Der ausgerüstete Held hat +1 Rüstung.",
"french":"Le héros équipé a +1 d'Armure.",
"italian":"L'eroe equipaggiato ottiene +1 punto armatura.",
"koreana":"장착한 영웅의 방어력이 1 증가합니다.",
"spanish":"Otorga +1 de Armadura al héroe equipado.",
"schinese":"装备此物品的英雄+1护甲。",
"tchinese":"裝備此物品的英雄+1護甲。",
"russian":"Даёт владельцу +1 к броне.",
"thai":"Equipped hero has +1 Armor.",
"japanese":"装備したヒーローは＋1防御力を得る。",
"portuguese":"Equipped hero has +1 Armor.",
"polish":"Equipped hero has +1 Armor.",
"danish":"Equipped hero has +1 Armor.",
"dutch":"Equipped hero has +1 Armor.",
"finnish":"Equipped hero has +1 Armor.",
"norwegian":"Equipped hero has +1 Armor.",
"swedish":"Equipped hero has +1 Armor.",
"hungarian":"Equipped hero has +1 Armor.",
"czech":"Equipped hero has +1 Armor.",
"romanian":"Equipped hero has +1 Armor.",
"turkish":"Equipped hero has +1 Armor.",
"brazilian":"Ao equipar, o herói ganha +1 de Armadura.",
"bulgarian":"Equipped hero has +1 Armor.",
"greek":"Equipped hero has +1 Armor.",
"ukrainian":"Equipped hero has +1 Armor.",
"latam":"Otorga +1 de armadura al héroe equipado.",
"vietnamese":"Equipped hero has +1 Armor."
},
"mini_image":{
"default":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3001.58dda411888ee32c293e911a86f9bf2562e8aa68.png"
},
"large_image":{
"default":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3001_large_english.42ad4645441bc40536ad3e8aa8bb2749ad0741e1.png",
"german":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3001_large_german.1f1f7d468ea84b869d8ebda38972cbb32beedbfa.png",
"french":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3001_large_french.d219c14013395c5e019b3c8722a22e0e3ad74313.png",
"italian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3001_large_italian.6a0c10da19726978a490a8f2076a0ac97151bcd9.png",
"koreana":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3001_large_koreana.cd2378170e080d3c4faa9e6c00a9b54c161193e0.png",
"spanish":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3001_large_spanish.5475fec80f4cc6ec9e22f98434fa9fa84a39bc3f.png",
"schinese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3001_large_schinese.70105684a5200a8663531ab5969060cb21e473b7.png",
"tchinese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3001_large_tchinese.779106ff47004fd4581c714a1903d161da4a07bb.png",
"russian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3001_large_russian.6e602e3d16c144cde2b90bca9a5820350b3b2251.png",
"japanese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3001_large_japanese.10ed48114a355268593c37fcfa54411a1eb3736d.png",
"brazilian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3001_large_brazilian.ededffe4114b2b044be2c25a441ed2be234230fe.png",
"latam":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3001_large_latam.b5a2e995d84572a8d2e9eae68148c69436d21915.png"
},
"ingame_image":{

},
"illustrator":"Pauline Voss",
"sub_type":"Armor",
"gold_cost":3,
"references":[

]

},
{
"card_id":3002,
"base_card_id":3002,
"card_type":"Item",
"card_name":{
"english":"Short Sword",
"german":"Kurzschwert",
"french":"Épée courte",
"italian":"Spada corta",
"koreana":"짧은 검",
"spanish":"Espada corta",
"schinese":"短剑",
"tchinese":"短劍",
"russian":"Короткий меч",
"thai":"Short Sword",
"japanese":"ショートソード",
"portuguese":"Short Sword",
"polish":"Short Sword",
"danish":"Short Sword",
"dutch":"Short Sword",
"finnish":"Short Sword",
"norwegian":"Short Sword",
"swedish":"Short Sword",
"hungarian":"Short Sword",
"czech":"Short Sword",
"romanian":"Short Sword",
"turkish":"Short Sword",
"brazilian":"Espada Curta",
"bulgarian":"Short Sword",
"greek":"Short Sword",
"ukrainian":"Short Sword",
"latam":"Espada corta",
"vietnamese":"Short Sword"
},
"card_text":{
"english":"Equipped hero has +2 Attack.",
"german":"Der ausgerüstete Held hat +2 Angriff.",
"french":"Le héros équipé a +2 d'Attaque.",
"italian":"L'eroe equipaggiato ottiene +2 punti attacco.",
"koreana":"장착한 영웅의 공격력이 2 증가합니다.",
"spanish":"Otorga +2 de Ataque al héroe equipado.",
"schinese":"装备此物品的英雄+2攻击。",
"tchinese":"裝備此物品的英雄+2攻擊。",
"russian":"Даёт владельцу +2 к атаке.",
"thai":"Equipped hero has +2 Attack.",
"japanese":"装備したヒーローは＋2攻撃力を得る。",
"portuguese":"Equipped hero has +2 Attack.",
"polish":"Equipped hero has +2 Attack.",
"danish":"Equipped hero has +2 Attack.",
"dutch":"Equipped hero has +2 Attack.",
"finnish":"Equipped hero has +2 Attack.",
"norwegian":"Equipped hero has +2 Attack.",
"swedish":"Equipped hero has +2 Attack.",
"hungarian":"Equipped hero has +2 Attack.",
"czech":"Equipped hero has +2 Attack.",
"romanian":"Equipped hero has +2 Attack.",
"turkish":"Equipped hero has +2 Attack.",
"brazilian":"Ao equipar, o herói ganha +2 de Ataque.",
"bulgarian":"Equipped hero has +2 Attack.",
"greek":"Equipped hero has +2 Attack.",
"ukrainian":"Equipped hero has +2 Attack.",
"latam":"Otorga +2 de ataque al héroe equipado.",
"vietnamese":"Equipped hero has +2 Attack."
},
"mini_image":{
"default":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3002.6c91be124a62a6e22ccda8d5b86b3b4c8e2fef17.png"
},
"large_image":{
"default":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3002_large_english.ccf853cc18bcd601a8a7584d4234e85450da08bf.png",
"german":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3002_large_german.09ceb33e2435b56c89a35001ef2df13874923139.png",
"french":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3002_large_french.a5e3f2e7d5a71da04996057a00bde25b2c1a0fa4.png",
"italian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3002_large_italian.d0347eab53de6559aa4999f84bc7caa31cbe5789.png",
"koreana":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3002_large_koreana.942f56ea35ba8039d6103ba263acb69f2f6fe83c.png",
"spanish":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3002_large_spanish.dab05d6f92c53a7b00ff323763155eab6a5e7c0f.png",
"schinese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3002_large_schinese.90d6d398ce3b470230f057692ef865530e814549.png",
"tchinese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3002_large_tchinese.a27df09d8d4199aff0320097391fb230983e1138.png",
"russian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3002_large_russian.89ded1388816c146054ec4214a4c659b19016fbf.png",
"japanese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3002_large_japanese.4009cfc002d37dad267a47d4f4eadaeca46d64cb.png",
"brazilian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3002_large_brazilian.656cb2ed27b7d35d410a016c0e7ca6cb34687d24.png",
"latam":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3002_large_latam.b7f6bc553c16a121c91e02e3482fd5bc6e0c708c.png"
},
"ingame_image":{

},
"illustrator":"Tommy Arnold",
"sub_type":"Weapon",
"gold_cost":3,
"references":[

]

},
{
"card_id":3003,
"base_card_id":3003,
"card_type":"Item",
"card_name":{
"english":"Healing Salve",
"german":"Heilsalbe",
"french":"Baume de soin",
"italian":"Balsamo curativo",
"koreana":"치유 물약",
"spanish":"Bálsamo curativo",
"schinese":"治疗药膏",
"tchinese":"治療藥膏",
"russian":"Целебный бальзам",
"thai":"Healing Salve",
"japanese":"癒やしの軟膏",
"portuguese":"Healing Salve",
"polish":"Healing Salve",
"danish":"Healing Salve",
"dutch":"Healing Salve",
"finnish":"Healing Salve",
"norwegian":"Healing Salve",
"swedish":"Healing Salve",
"hungarian":"Healing Salve",
"czech":"Healing Salve",
"romanian":"Healing Salve",
"turkish":"Healing Salve",
"brazilian":"Bálsamo de Cura",
"bulgarian":"Healing Salve",
"greek":"Healing Salve",
"ukrainian":"Healing Salve",
"latam":"Bálsamo curativo",
"vietnamese":"Healing Salve"
},
"card_text":{
"english":"Heal a unit 6.",
"german":"Heilt eine Einheit um 6.",
"french":"Redonne 6 PV à une unité.",
"italian":"Cura un'unità di 6 punti salute.",
"koreana":"유닛의 체력을 6 치유합니다.",
"spanish":"Cura 6 de Vida a una unidad.",
"schinese":"对一个单位进行6治疗。",
"tchinese":"對一個單位進行6治療。",
"russian":"Восстанавливает выбранному существу 6 здоровья.",
"thai":"Heal a unit 6.",
"japanese":"ユニット1体のヘルスを6回復する。",
"portuguese":"Heal a unit 6.",
"polish":"Heal a unit 6.",
"danish":"Heal a unit 6.",
"dutch":"Heal a unit 6.",
"finnish":"Heal a unit 6.",
"norwegian":"Heal a unit 6.",
"swedish":"Heal a unit 6.",
"hungarian":"Heal a unit 6.",
"czech":"Heal a unit 6.",
"romanian":"Heal a unit 6.",
"turkish":"Heal a unit 6.",
"brazilian":"6 de cura a uma unidade.",
"bulgarian":"Heal a unit 6.",
"greek":"Heal a unit 6.",
"ukrainian":"Heal a unit 6.",
"latam":"Cura 6 de vida a una unidad.",
"vietnamese":"Heal a unit 6."
},
"mini_image":{
"default":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3003.79bd2290d75a4de2ca2c525a1ee5615166058a8a.png"
},
"large_image":{
"default":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3003_large_english.dd0f052a41f11d65e06f7d41461f331bbb4afe20.png",
"german":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3003_large_german.2b4ca1a62c8a97c04b442c2b040216ed1f7b410e.png",
"french":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3003_large_french.e3593397401cfc6a77aed1396b9b17bf7ee75b0d.png",
"italian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3003_large_italian.88b989bc25a2919862ebee3b30324a7326646318.png",
"koreana":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3003_large_koreana.9f8432d303fbf106c12d7e5653096592e1de4147.png",
"spanish":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3003_large_spanish.849dffa4c1942776b712729ef50af04f907adc9a.png",
"schinese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3003_large_schinese.64788ffb2d78032eb0be462accc1bca796983d57.png",
"tchinese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3003_large_tchinese.3cff8f346b4da9a7014af3df4c5446e690adc8db.png",
"russian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3003_large_russian.ca23cd38edbb70444f74e68d470e67c3a70c6a2b.png",
"japanese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3003_large_japanese.baa86e69f28a1f3ea411934b1b4eb1cf2306840a.png",
"brazilian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3003_large_brazilian.55cdc260142bdaae8f34386b064fdec2025eb25c.png",
"latam":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3003_large_latam.183f74c9395017a47ae94b02412cd0f7f29355ec.png"
},
"ingame_image":{

},
"illustrator":"Julie Baroh",
"sub_type":"Consumable",
"gold_cost":3,
"references":[

]

},
{
"card_id":3004,
"base_card_id":3004,
"card_type":"Item",
"card_name":{
"english":"Fountain Flask",
"german":"Brunnenflasche",
"french":"Fiole de la fontaine",
"italian":"Fiaschetta della Fontana",
"koreana":"분수 약병",
"spanish":"Frasco de la Fuente",
"schinese":"泉水烧瓶",
"tchinese":"泉源燒瓶",
"russian":"Фонтанная фляга",
"thai":"Fountain Flask",
"japanese":"泉のフラスコ",
"portuguese":"Fountain Flask",
"polish":"Fountain Flask",
"danish":"Fountain Flask",
"dutch":"Fountain Flask",
"finnish":"Fountain Flask",
"norwegian":"Fountain Flask",
"swedish":"Fountain Flask",
"hungarian":"Fountain Flask",
"czech":"Fountain Flask",
"romanian":"Fountain Flask",
"turkish":"Fountain Flask",
"brazilian":"Frasco da Fonte",
"bulgarian":"Fountain Flask",
"greek":"Fountain Flask",
"ukrainian":"Fountain Flask",
"latam":"Frasco de la fuente",
"vietnamese":"Fountain Flask"
},
"card_text":{
"english":"Fully heal a unit.",
"german":"Heile eine Einheit vollständig.",
"french":"Soigne entièrement une unité.",
"italian":"Cura completamente un'unità.",
"koreana":"유닛의 체력을 완전히 회복합니다.",
"spanish":"Cura completamente a una unidad.",
"schinese":"完整治疗一个单位。",
"tchinese":"完整治療一個單位。",
"russian":"Полностью исцеляет выбранное существо.",
"thai":"Fully heal a unit.",
"japanese":"ユニット1体のヘルスを完全に回復する。",
"portuguese":"Fully heal a unit.",
"polish":"Fully heal a unit.",
"danish":"Fully heal a unit.",
"dutch":"Fully heal a unit.",
"finnish":"Fully heal a unit.",
"norwegian":"Fully heal a unit.",
"swedish":"Fully heal a unit.",
"hungarian":"Fully heal a unit.",
"czech":"Fully heal a unit.",
"romanian":"Fully heal a unit.",
"turkish":"Fully heal a unit.",
"brazilian":"Cure completamente uma unidade.",
"bulgarian":"Fully heal a unit.",
"greek":"Fully heal a unit.",
"ukrainian":"Fully heal a unit.",
"latam":"Cura a una unidad por completo.",
"vietnamese":"Fully heal a unit."
},
"mini_image":{
"default":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3004.d27fa94e0d8ae828f80bf40e6c15148514f7648a.png"
},
"large_image":{
"default":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3004_large_english.88a820e2e7b796eebbfd4d3cd3dff4681e0fff58.png",
"german":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3004_large_german.2e559e2d2e041cd462cba7db2daf4a13462718d2.png",
"french":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3004_large_french.72313633697f65d5502b10d80082adf08eb100a3.png",
"italian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3004_large_italian.aba4ed191331341c48c240b3e4941730c40ee01a.png",
"koreana":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3004_large_koreana.23fd610a8d04617b97666f7582526d4002515168.png",
"spanish":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3004_large_spanish.42ae6da6d89632793e83b73f6ead43da3fd63ea3.png",
"schinese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3004_large_schinese.ec3668d7b4557791b715db0c1b30dd8c0b08cfb5.png",
"tchinese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3004_large_tchinese.fa57cd41c40c98c615fe7af414c7c60d5810f17d.png",
"russian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3004_large_russian.9bf145422e51b997664935302b5dc273b6526bb4.png",
"japanese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3004_large_japanese.c1bcba72075b477080bf2019170cecf7408511bd.png",
"brazilian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3004_large_brazilian.f9f4f6e3a9ade17b0daff15287666d551ab87531.png",
"latam":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3004_large_latam.a21eb2815cbdb4841be822c350d55fe4a70f875f.png"
},
"ingame_image":{

},
"illustrator":"Suzanne Helmigh",
"sub_type":"Consumable",
"gold_cost":4,
"references":[

]

},
{
"card_id":3005,
"base_card_id":3005,
"card_type":"Item",
"card_name":{
"english":"Potion of Knowledge",
"german":"Trank des Wissens",
"french":"Potion de savoir",
"italian":"Pozione della conoscenza",
"koreana":"지식의 물약",
"spanish":"Poción del conocimiento",
"schinese":"知识魔药",
"tchinese":"知識魔藥",
"russian":"Зелье знаний",
"thai":"Potion of Knowledge",
"japanese":"知識のポーション",
"portuguese":"Potion of Knowledge",
"polish":"Potion of Knowledge",
"danish":"Potion of Knowledge",
"dutch":"Potion of Knowledge",
"finnish":"Potion of Knowledge",
"norwegian":"Potion of Knowledge",
"swedish":"Potion of Knowledge",
"hungarian":"Potion of Knowledge",
"czech":"Potion of Knowledge",
"romanian":"Potion of Knowledge",
"turkish":"Potion of Knowledge",
"brazilian":"Poção do Conhecimento",
"bulgarian":"Potion of Knowledge",
"greek":"Potion of Knowledge",
"ukrainian":"Potion of Knowledge",
"latam":"Poción del conocimiento",
"vietnamese":"Potion of Knowledge"
},
"card_text":{
"english":"Draw a card.",
"german":"Ziehe eine Karte.",
"french":"Tirez une carte.",
"italian":"Pesca una carta.",
"koreana":"카드 1장을 뽑습니다.",
"spanish":"Saca una carta.",
"schinese":"抽一张牌。",
"tchinese":"抽一張牌。",
"russian":"Вы берёте карту.",
"thai":"Draw a card.",
"japanese":"カードを1枚引く。",
"portuguese":"Draw a card.",
"polish":"Draw a card.",
"danish":"Draw a card.",
"dutch":"Draw a card.",
"finnish":"Draw a card.",
"norwegian":"Draw a card.",
"swedish":"Draw a card.",
"hungarian":"Draw a card.",
"czech":"Draw a card.",
"romanian":"Draw a card.",
"turkish":"Draw a card.",
"brazilian":"Pegue uma carta.",
"bulgarian":"Draw a card.",
"greek":"Draw a card.",
"ukrainian":"Draw a card.",
"latam":"Saca una carta.",
"vietnamese":"Draw a card."
},
"mini_image":{
"default":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3005.80098aa7eb3799b958d4de8bff8c577e2c80fba6.png"
},
"large_image":{
"default":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3005_large_english.76de833a75f909e6298e2319da3869eec577bfec.png",
"german":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3005_large_german.289b0bc75265f2d068f91e06f739f4b888c98ed2.png",
"french":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3005_large_french.9fe2da7acd90adcc97444471176240c5fc40d1c8.png",
"italian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3005_large_italian.74881f95b880781d92012641fa06346ab8b614f0.png",
"koreana":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3005_large_koreana.d64396ba64bd2c485af22a13549f4d8046c586cc.png",
"spanish":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3005_large_spanish.f7cf32b6975c20cc8f7fb19e891366f5aab44859.png",
"schinese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3005_large_schinese.bb44f6d796b851c8642d27ccf8e6d8106ddb9326.png",
"tchinese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3005_large_tchinese.987859422cb4514c3d0a23074e0997624148116d.png",
"russian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3005_large_russian.d2ba41ea80d86255fc9a98d218cb9988d566ca37.png",
"japanese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3005_large_japanese.9af1cd1f6c09942180382f09c062cbcc3885511f.png",
"brazilian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3005_large_brazilian.b241fd042c46bae4250b041829cff23902bb76dd.png",
"latam":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3005_large_latam.f7cf32b6975c20cc8f7fb19e891366f5aab44859.png"
},
"ingame_image":{

},
"illustrator":"Magali Villeneuve",
"sub_type":"Consumable",
"gold_cost":5,
"references":[

]

},
{
"card_id":3006,
"base_card_id":3006,
"card_type":"Item",
"card_name":{
"english":"Town Portal Scroll",
"german":"Schriftrolle des Stadtportals",
"french":"Parchemin de téléportation",
"italian":"Pergamena del portale cittadino",
"koreana":"순간이동 주문서",
"spanish":"Pergamino de teletransporte",
"schinese":"回城卷轴",
"tchinese":"傳送卷軸",
"russian":"Свиток телепортации",
"thai":"Town Portal Scroll",
"japanese":"タウンポータルスクロール",
"portuguese":"Town Portal Scroll",
"polish":"Town Portal Scroll",
"danish":"Town Portal Scroll",
"dutch":"Town Portal Scroll",
"finnish":"Town Portal Scroll",
"norwegian":"Town Portal Scroll",
"swedish":"Town Portal Scroll",
"hungarian":"Town Portal Scroll",
"czech":"Town Portal Scroll",
"romanian":"Town Portal Scroll",
"turkish":"Town Portal Scroll",
"brazilian":"Pergaminho de Teletransporte",
"bulgarian":"Town Portal Scroll",
"greek":"Town Portal Scroll",
"ukrainian":"Town Portal Scroll",
"latam":"Pergamino de teletransporte",
"vietnamese":"Town Portal Scroll"
},
"card_text":{
"english":"Return an allied hero to the Fountain.",
"german":"Bringe einen verbündeten Helden zum Brunnen zurück.",
"french":"Renvoyez un héros allié à la fontaine.",
"italian":"Riporta un eroe alleato alla Fontana.",
"koreana":"아군 영웅 하나를 분수로 복귀시킵니다.",
"spanish":"Devuelve a un héroe aliado a la Fuente.",
"schinese":"将一名友方英雄召回泉水。",
"tchinese":"將一名友方英雄召回泉源。",
"russian":"Возвращает выбранного союзного героя к фонтану.",
"thai":"Return an allied hero to the Fountain.",
"japanese":"味方のヒーロー1体を泉に戻す。",
"portuguese":"Return an allied hero to the Fountain.",
"polish":"Return an allied hero to the Fountain.",
"danish":"Return an allied hero to the Fountain.",
"dutch":"Return an allied hero to the Fountain.",
"finnish":"Return an allied hero to the Fountain.",
"norwegian":"Return an allied hero to the Fountain.",
"swedish":"Return an allied hero to the Fountain.",
"hungarian":"Return an allied hero to the Fountain.",
"czech":"Return an allied hero to the Fountain.",
"romanian":"Return an allied hero to the Fountain.",
"turkish":"Return an allied hero to the Fountain.",
"brazilian":"Mande um herói aliado de volta à Fonte.",
"bulgarian":"Return an allied hero to the Fountain.",
"greek":"Return an allied hero to the Fountain.",
"ukrainian":"Return an allied hero to the Fountain.",
"latam":"Devuelve a un héroe aliado a la fuente.",
"vietnamese":"Return an allied hero to the Fountain."
},
"mini_image":{
"default":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3006.9dba468ce4b98978d1115ff24f3f8dfcc37659fc.png"
},
"large_image":{
"default":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3006_large_english.6c17addd55fd9766972d105a34edecc7496a7962.png",
"german":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3006_large_german.db55d84b4ebe9919c19c7af524f721791e620f44.png",
"french":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3006_large_french.37c6b00ed3761802e02a12d6e057805faad297fb.png",
"italian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3006_large_italian.f254eef4fa8588418a976aaa534e03ed9c384843.png",
"koreana":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3006_large_koreana.170fcbe8a4c400a2648bb2546edfcf1d6a0737dd.png",
"spanish":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3006_large_spanish.43911d3df37726467292e6ee6b5f7e19e1b34095.png",
"schinese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3006_large_schinese.dad5174e5ddc74db959cb6da04f388a0421f4f43.png",
"tchinese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3006_large_tchinese.ffa6f6185e2f52e298d2f28d3472676a29e123de.png",
"russian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3006_large_russian.fd75e667b87c0d83d73db335f87ad7427f5161b0.png",
"japanese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3006_large_japanese.449554d799f238d8d14c9e1d2d21f5ce6741847b.png",
"brazilian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3006_large_brazilian.043edab2cb42975dad814ff3ad94c623290e84f2.png",
"latam":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3006_large_latam.b53cb1f671c04a3a10b9f683f6bc63ef8c6d36bb.png"
},
"ingame_image":{

},
"illustrator":"Pauline Voss",
"sub_type":"Consumable",
"gold_cost":3,
"references":[

]

},
{
"card_id":4000,
"base_card_id":4000,
"card_type":"Hero",
"card_name":{
"english":"Farvhan the Dreamer",
"german":"Farvhan der Träumer",
"french":"Farvhan le Rêveur",
"italian":"Farvhan il Sognatore",
"koreana":"몽상가 파르반",
"spanish":"Farvhan el Soñador",
"schinese":"梦者法夫涵",
"tchinese":"夢者法夫涵",
"russian":"Фарван Мечтатель",
"thai":"Farvhan the Dreamer",
"japanese":"夢見るファールヴァン",
"portuguese":"Farvhan the Dreamer",
"polish":"Farvhan the Dreamer",
"danish":"Farvhan the Dreamer",
"dutch":"Farvhan the Dreamer",
"finnish":"Farvhan the Dreamer",
"norwegian":"Farvhan the Dreamer",
"swedish":"Farvhan the Dreamer",
"hungarian":"Farvhan the Dreamer",
"czech":"Farvhan the Dreamer",
"romanian":"Farvhan the Dreamer",
"turkish":"Farvhan the Dreamer",
"brazilian":"Farvhan, o Sonhador",
"bulgarian":"Farvhan the Dreamer",
"greek":"Farvhan the Dreamer",
"ukrainian":"Farvhan the Dreamer",
"latam":"Farvhan el Soñador",
"vietnamese":"Farvhan the Dreamer"
},
"card_text":{
"english":"<span style='font-weight:bold;color:#ffffff;'>Pack Leadership</span><br/>Farvhan the Dreamer's allied neighbors have +1 Armor.",
"german":"<span style='font-weight:bold;color:#ffffff;'>Rudelführer</span><br/> Die benachbarten Verbündeten von {s:parentCardName} haben +1 Rüstung.",
"french":"<span style='font-weight:bold;color:#ffffff;'>Chef de meute</span><br/>Les alliés voisins de Farvhan le Rêveur ont +1 d'Armure.",
"italian":"<span style='font-weight:bold;color:#ffffff;'>Comando del branco</span><br/>I vicini alleati di Farvhan il Sognatore ottengono +1 punto armatura.",
"koreana":"<span style='font-weight:bold;color:#ffffff;'>무리 지도력</span><br/>몽상가 파르반에 인접한 이웃 아군의 방어력이 1 증가합니다.",
"spanish":"<span style='font-weight:bold;color:#ffffff;'>Líder de la manada</span><br/> Losaliados adyacentes de Farvhan el Soñador tienen +1 de Armadura.",
"schinese":"<span style='font-weight:bold;color:#ffffff;'>兽群领袖</span><br/>梦者法夫涵的友方近邻+1护甲。",
"tchinese":"<span style='font-weight:bold;color:#ffffff;'>獸群領袖</span><br/>夢者法夫涵的友方近鄰+1護甲。",
"russian":"<span style='font-weight:bold;color:#ffffff;'>Лидер стаи</span><br/>Фарван Мечтатель даёт соседним союзникам +1 к броне.",
"thai":"<span style='font-weight:bold;color:#ffffff;'>Pack Leadership</span><br/>Farvhan the Dreamer's allied neighbors have +1 Armor.",
"japanese":"<span style='font-weight:bold;color:#ffffff;'>群れの統率</span><br/>夢見るファールヴァンに隣接する味方ユニットは＋1防御力を得る。",
"portuguese":"<span style='font-weight:bold;color:#ffffff;'>Pack Leadership</span><br/>Farvhan the Dreamer's allied neighbors have +1 Armor.",
"polish":"<span style='font-weight:bold;color:#ffffff;'>Pack Leadership</span><br/>Farvhan the Dreamer's allied neighbors have +1 Armor.",
"danish":"<span style='font-weight:bold;color:#ffffff;'>Pack Leadership</span><br/>Farvhan the Dreamer's allied neighbors have +1 Armor.",
"dutch":"<span style='font-weight:bold;color:#ffffff;'>Pack Leadership</span><br/>Farvhan the Dreamer's allied neighbors have +1 Armor.",
"finnish":"<span style='font-weight:bold;color:#ffffff;'>Pack Leadership</span><br/>Farvhan the Dreamer's allied neighbors have +1 Armor.",
"norwegian":"<span style='font-weight:bold;color:#ffffff;'>Pack Leadership</span><br/>Farvhan the Dreamer's allied neighbors have +1 Armor.",
"swedish":"<span style='font-weight:bold;color:#ffffff;'>Pack Leadership</span><br/>Farvhan the Dreamer's allied neighbors have +1 Armor.",
"hungarian":"<span style='font-weight:bold;color:#ffffff;'>Pack Leadership</span><br/>Farvhan the Dreamer's allied neighbors have +1 Armor.",
"czech":"<span style='font-weight:bold;color:#ffffff;'>Pack Leadership</span><br/>Farvhan the Dreamer's allied neighbors have +1 Armor.",
"romanian":"<span style='font-weight:bold;color:#ffffff;'>Pack Leadership</span><br/>Farvhan the Dreamer's allied neighbors have +1 Armor.",
"turkish":"<span style='font-weight:bold;color:#ffffff;'>Pack Leadership</span><br/>Farvhan the Dreamer's allied neighbors have +1 Armor.",
"brazilian":"<span style='font-weight:bold;color:#ffffff;'>Liderança do Bando</span><br/>Os aliados adjacentes de Farvhan, o Sonhador recebem +1 de Armadura.",
"bulgarian":"<span style='font-weight:bold;color:#ffffff;'>Pack Leadership</span><br/>Farvhan the Dreamer's allied neighbors have +1 Armor.",
"greek":"<span style='font-weight:bold;color:#ffffff;'>Pack Leadership</span><br/>Farvhan the Dreamer's allied neighbors have +1 Armor.",
"ukrainian":"<span style='font-weight:bold;color:#ffffff;'>Pack Leadership</span><br/>Farvhan the Dreamer's allied neighbors have +1 Armor.",
"latam":"<span style='font-weight:bold;color:#ffffff;'>Líder de la manada</span><br/> Los aliados vecinos de Farvhan el Soñador tienen +1 de armadura.",
"vietnamese":"<span style='font-weight:bold;color:#ffffff;'>Pack Leadership</span><br/>Farvhan the Dreamer's allied neighbors have +1 Armor."
},
"mini_image":{
"default":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4000.049cff338ab7274d0dcde4d4e3ec5bc5bcdd2a8e.png"
},
"large_image":{
"default":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4000_large_english.98083eaf4ad23e5671e56772a2cb2c3781769827.png",
"german":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4000_large_german.957b8c55d5291ebfcf43d2601d14f8a660c40f7b.png",
"french":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4000_large_french.77ac6915c43c6af86caf9aaa5fa0c000dee13109.png",
"italian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4000_large_italian.15e0437ac63dbe27c62dd05946920f75185dfd95.png",
"koreana":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4000_large_koreana.53172532e0c36d30151d5af3073b2dab6d85f990.png",
"spanish":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4000_large_spanish.3941e5415a2842076996952b7b32facc51123091.png",
"schinese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4000_large_schinese.d4abbe30688c96731fe28c3607906d0a0fd25a57.png",
"tchinese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4000_large_tchinese.096d8608e3b9fda32a1d53c427561882861c0ac9.png",
"russian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4000_large_russian.3612ec6fb51df7894f1fceaa9878126e5ef2ef4b.png",
"japanese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4000_large_japanese.5f0c44867e1749e4f7449b8f5d6764bee614ea76.png",
"brazilian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4000_large_brazilian.3a88a5fb1da46b01ddef3d5f6176de3aa7a8ce5e.png",
"latam":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4000_large_latam.3941e5415a2842076996952b7b32facc51123091.png"
},
"ingame_image":{
"default":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4000_ingame.cb1d509e48befec604e5ca48a6fe0752ff2ff1e5.png"
},
"illustrator":"Wisnu Tan",
"is_green":true,
"attack":4,
"hit_points":10,
"references":[
{
"card_id":4002,
"ref_type":"includes",
"count":3
},
{
"card_id":4001,
"ref_type":"passive_ability"
}
]

},
{
"card_id":4001,
"base_card_id":4001,
"card_type":"Passive Ability",
"card_name":{
"english":"Pack Leadership",
"german":"Rudelführer",
"french":"Chef de meute",
"italian":"Comando del branco",
"koreana":"무리 지도력",
"spanish":"Líder de la manada",
"schinese":"兽群领袖",
"tchinese":"獸群領袖",
"russian":"Лидер стаи",
"thai":"Pack Leadership",
"japanese":"群れの統率",
"portuguese":"Pack Leadership",
"polish":"Pack Leadership",
"danish":"Pack Leadership",
"dutch":"Pack Leadership",
"finnish":"Pack Leadership",
"norwegian":"Pack Leadership",
"swedish":"Pack Leadership",
"hungarian":"Pack Leadership",
"czech":"Pack Leadership",
"romanian":"Pack Leadership",
"turkish":"Pack Leadership",
"brazilian":"Liderança do Bando",
"bulgarian":"Pack Leadership",
"greek":"Pack Leadership",
"ukrainian":"Pack Leadership",
"latam":"Líder de la manada",
"vietnamese":"Pack Leadership"
},
"card_text":{
"english":"Farvhan the Dreamer's allied neighbors have +1 Armor.",
"german":"Die benachbarten Verbündeten von Farvhan der Träumer haben +1 Rüstung.",
"french":"Les voisins alliés de Farvhan le Rêveur ont +1 d'Armure.",
"italian":"I vicini alleati di Farvhan il Sognatore ottengono +1 punto armatura.",
"koreana":"몽상가 파르반 카드에 인접한 아군 이웃의 방어력이 1 증가합니다.",
"spanish":"Otorga +1 de Armadura a los aliados adyacentes de Farvhan el Soñador.",
"schinese":"梦者法夫涵的友方近邻+1护甲。",
"tchinese":"夢者法夫涵的友方近鄰+1護甲。",
"russian":"Фарван Мечтатель даёт соседним союзникам +1 к броне.",
"thai":"Farvhan the Dreamer's allied neighbors have +1 Armor.",
"japanese":"夢見るファールヴァンに隣接する味方ユニットは＋1防御力を得る。",
"portuguese":"Farvhan the Dreamer's allied neighbors have +1 Armor.",
"polish":"Farvhan the Dreamer's allied neighbors have +1 Armor.",
"danish":"Farvhan the Dreamer's allied neighbors have +1 Armor.",
"dutch":"Farvhan the Dreamer's allied neighbors have +1 Armor.",
"finnish":"Farvhan the Dreamer's allied neighbors have +1 Armor.",
"norwegian":"Farvhan the Dreamer's allied neighbors have +1 Armor.",
"swedish":"Farvhan the Dreamer's allied neighbors have +1 Armor.",
"hungarian":"Farvhan the Dreamer's allied neighbors have +1 Armor.",
"czech":"Farvhan the Dreamer's allied neighbors have +1 Armor.",
"romanian":"Farvhan the Dreamer's allied neighbors have +1 Armor.",
"turkish":"Farvhan the Dreamer's allied neighbors have +1 Armor.",
"brazilian":"Os aliados adjacentes de Farvhan, o Sonhador, ganham +1 de Armadura.",
"bulgarian":"Farvhan the Dreamer's allied neighbors have +1 Armor.",
"greek":"Farvhan the Dreamer's allied neighbors have +1 Armor.",
"ukrainian":"Farvhan the Dreamer's allied neighbors have +1 Armor.",
"latam":"Otorga +1 de armadura a los aliados vecinos de Farvhan el Soñador.",
"vietnamese":"Farvhan the Dreamer's allied neighbors have +1 Armor."
},
"mini_image":{

},
"large_image":{

},
"ingame_image":{

},
"references":[

]

},
{
"card_id":4002,
"base_card_id":4002,
"card_type":"Creep",
"card_name":{
"english":"Prowler Vanguard",
"german":"Herumtreibervorhut",
"french":"Rôdeur de première ligne",
"italian":"Predatore d'avanguardia",
"koreana":"배회자 선봉대",
"spanish":"Vanguardia de Merodeadores",
"schinese":"潜行者先锋",
"tchinese":"潛行者先鋒",
"russian":"Скиталец-защитник",
"thai":"Prowler Vanguard",
"japanese":"プローラーのヴァンガード",
"portuguese":"Prowler Vanguard",
"polish":"Prowler Vanguard",
"danish":"Prowler Vanguard",
"dutch":"Prowler Vanguard",
"finnish":"Prowler Vanguard",
"norwegian":"Prowler Vanguard",
"swedish":"Prowler Vanguard",
"hungarian":"Prowler Vanguard",
"czech":"Prowler Vanguard",
"romanian":"Prowler Vanguard",
"turkish":"Prowler Vanguard",
"brazilian":"Gatuno Vanguardista",
"bulgarian":"Prowler Vanguard",
"greek":"Prowler Vanguard",
"ukrainian":"Prowler Vanguard",
"latam":"Merodeador de la vanguardia",
"vietnamese":"Prowler Vanguard"
},
"card_text":{
"english":"Prowler Vanguard's allied neighbors have +1 Armor.",
"german":"Die benachbarten Verbündeten von Herumtreibervorhut haben +1 Rüstung.",
"french":"Les alliés voisins du Rôdeur de première ligne ont +1 d'Armure.",
"italian":"I vicini alleati di Predatore d'avanguardia ottengono +1 punto armatura.",
"koreana":"배회자 선봉대 카드에 인접한 아군 이웃의 방어력이 1 증가합니다.",
"spanish":"Otorga +1 de Armadura a los aliados adyacentes de Vanguardia de Merodeadores.",
"schinese":"潜行者先锋的友方近邻+1护甲。",
"tchinese":"潛行者先鋒的友方近鄰+1護甲。",
"russian":"Скиталец-защитник даёт соседним союзникам +1 к броне.",
"thai":"Prowler Vanguard's allied neighbors have +1 Armor.",
"japanese":"プローラーのヴァンガードに隣接する味方ユニットは＋1防御力を得る。",
"portuguese":"Prowler Vanguard's allied neighbors have +1 Armor.",
"polish":"Prowler Vanguard's allied neighbors have +1 Armor.",
"danish":"Prowler Vanguard's allied neighbors have +1 Armor.",
"dutch":"Prowler Vanguard's allied neighbors have +1 Armor.",
"finnish":"Prowler Vanguard's allied neighbors have +1 Armor.",
"norwegian":"Prowler Vanguard's allied neighbors have +1 Armor.",
"swedish":"Prowler Vanguard's allied neighbors have +1 Armor.",
"hungarian":"Prowler Vanguard's allied neighbors have +1 Armor.",
"czech":"Prowler Vanguard's allied neighbors have +1 Armor.",
"romanian":"Prowler Vanguard's allied neighbors have +1 Armor.",
"turkish":"Prowler Vanguard's allied neighbors have +1 Armor.",
"brazilian":"Os aliados adjacentes do Gatuno Vanguardista ganham +1 de Armadura.",
"bulgarian":"Prowler Vanguard's allied neighbors have +1 Armor.",
"greek":"Prowler Vanguard's allied neighbors have +1 Armor.",
"ukrainian":"Prowler Vanguard's allied neighbors have +1 Armor.",
"latam":"Otorga +1 de armadura a los aliados vecinos de Merodeador de la vanguardia.",
"vietnamese":"Prowler Vanguard's allied neighbors have +1 Armor."
},
"mini_image":{
"default":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4002.b1bcc606172e9963bfa54ce14b2c6308d315b56d.png"
},
"large_image":{
"default":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4002_large_english.dc13b997545edd56faed706116e27fcce53d3ca3.png",
"german":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4002_large_german.c148ef776ccdeb38810d8f7f4a2a9afbc44af5b8.png",
"french":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4002_large_french.961f58cf965db73f22fae69d3ebffa650710a8a2.png",
"italian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4002_large_italian.8bd98abfb851cf9b9f7364d5b147efbf7b329bdc.png",
"koreana":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4002_large_koreana.80d80a792fab2962462bab16bf93107e09212006.png",
"spanish":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4002_large_spanish.0330346e63043468d71fb429db1513d2622054b1.png",
"schinese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4002_large_schinese.f40f9a90a365c03a21044e4cbe4246d9865a94b2.png",
"tchinese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4002_large_tchinese.4b0733c08304533b71eb0ccc44eb31a0123dea4d.png",
"russian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4002_large_russian.a4f36bdef94d29b67873c6f458b807432b62b0c8.png",
"japanese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4002_large_japanese.d6833a42f149ec6f6d111e1e751372aad35e00a3.png",
"brazilian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4002_large_brazilian.a60b049c57f6ef4d2e972b9e2f7e9774afe2f2df.png",
"latam":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4002_large_latam.d93b9f44d7f74356b5ee14e14e4a2a810a213409.png"
},
"ingame_image":{

},
"illustrator":"Wisnu Tan",
"is_green":true,
"mana_cost":4,
"hit_points":6,
"references":[

]

},
{
"card_id":4003,
"base_card_id":4003,
"card_type":"Hero",
"card_name":{
"english":"Keefe the Bold",
"german":"Keefe der Kühne",
"french":"Keefe le Téméraire",
"italian":"Keefe il Coraggioso",
"koreana":"대담한 키프",
"spanish":"Keefe el Osado",
"schinese":"勇者基弗",
"tchinese":"勇者基弗",
"russian":"Киф Могучий",
"thai":"Keefe the Bold",
"japanese":"豪胆なるキーフェ",
"portuguese":"Keefe the Bold",
"polish":"Keefe the Bold",
"danish":"Keefe the Bold",
"dutch":"Keefe the Bold",
"finnish":"Keefe the Bold",
"norwegian":"Keefe the Bold",
"swedish":"Keefe the Bold",
"hungarian":"Keefe the Bold",
"czech":"Keefe the Bold",
"romanian":"Keefe the Bold",
"turkish":"Keefe the Bold",
"brazilian":"Keefe, o Destemido",
"bulgarian":"Keefe the Bold",
"greek":"Keefe the Bold",
"ukrainian":"Keefe the Bold",
"latam":"Keefe el Osado",
"vietnamese":"Keefe the Bold"
},
"card_text":{

},
"mini_image":{
"default":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4003.2cc81eb5cf6375fdfad19781634a37df496e20c0.png"
},
"large_image":{
"default":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4003_large_english.209a1de8722c8ff273dd8efb2eb53905f02f6e27.png",
"german":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4003_large_german.9ca15f6d19e37684d823e1d31b09db31b3cb0e2b.png",
"french":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4003_large_french.e01a06b169ae33990f45a400a4b4333e8733dde0.png",
"italian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4003_large_italian.0914ac218aca2e95ccee4876f1e3b78d5b60ea76.png",
"koreana":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4003_large_koreana.2e0d837582531eaa2eeae283876deb755552114b.png",
"spanish":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4003_large_spanish.bf56ef05c6ad9bc4f2bd8c02d014a37b215d3bb8.png",
"schinese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4003_large_schinese.f10d49ca6a7d03de23347987c8608960d6cd3e27.png",
"tchinese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4003_large_tchinese.4eb54e0cfe1ca7fd6cf8b805efab18bc8a4e40af.png",
"russian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4003_large_russian.88856c90dbf31f423a839844324c7d013f7fa735.png",
"japanese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4003_large_japanese.4b6ab782ec73f23b101874320ab03cd6c4c67a81.png",
"brazilian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4003_large_brazilian.542e1bd038ba3f61489733922f81e08e3e7d6b9a.png",
"latam":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4003_large_latam.bf56ef05c6ad9bc4f2bd8c02d014a37b215d3bb8.png"
},
"ingame_image":{
"default":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4003_ingame.754e1c3ccfaa3b0b0921ff0fba171aef6d343ca8.png"
},
"illustrator":"Lius Lasahido",
"is_red":true,
"attack":6,
"armor":1,
"hit_points":11,
"references":[
{
"card_id":4004,
"ref_type":"includes",
"count":3
}
]

},
{
"card_id":4004,
"base_card_id":4004,
"card_type":"Spell",
"card_name":{
"english":"Fighting Instinct",
"german":"Kampfinstinkt",
"french":"Instinct de combat",
"italian":"Istinto di combattimento",
"koreana":"전투 본능",
"spanish":"Instinto de lucha",
"schinese":"战斗本能",
"tchinese":"戰鬥本能",
"russian":"Боевой инстинкт",
"thai":"Fighting Instinct",
"japanese":"闘争本能",
"portuguese":"Fighting Instinct",
"polish":"Fighting Instinct",
"danish":"Fighting Instinct",
"dutch":"Fighting Instinct",
"finnish":"Fighting Instinct",
"norwegian":"Fighting Instinct",
"swedish":"Fighting Instinct",
"hungarian":"Fighting Instinct",
"czech":"Fighting Instinct",
"romanian":"Fighting Instinct",
"turkish":"Fighting Instinct",
"brazilian":"Instinto Guerreiro",
"bulgarian":"Fighting Instinct",
"greek":"Fighting Instinct",
"ukrainian":"Fighting Instinct",
"latam":"Instinto de lucha",
"vietnamese":"Fighting Instinct"
},
"card_text":{
"english":"Modify a <span style='font-weight:bold;color:#c2352d;'>red hero</span> with +1 Attack and +1 Armor.",
"german":"Modifiziere einen <span style='font-weight:bold;color:#c2352d;'>roten Helden</span> mit +1 Angriff und +1 Rüstung.",
"french":"Choisissez un héros <span style='font-weight:bold;color:#c2352d;'>rouge</span> : il gagne +1 d'Attaque et +1 d'Armure.",
"italian":"Modifica un <span style='font-weight:bold;color:#c2352d;'>eroe rosso</span> con +1 punto attacco e +1 punto armatura.",
"koreana":"<span style='font-weight:bold;color:#c2352d;'>적색 영웅</span>의 공격력 및 방어력이 1씩 증가하도록 변형합니다.",
"spanish":"Modifica a un héroe",
"schinese":"修改一名<span style='font-weight:bold;color:#c2352d;'>红色英雄</span>，使其+1攻击和+1护甲。",
"tchinese":"修改一名<span style='font-weight:bold;color:#c2352d;'>紅色英雄</span>，使其+1攻擊和+1護甲。",
"russian":"Выбранный <span style='font-weight:bold;color:#c2352d;'>красный герой</span> получает модификацию: +1 к атаке и +1 к броне.",
"thai":"Modify a <span style='font-weight:bold;color:#c2352d;'>red hero</span> with +1 Attack and +1 Armor.",
"japanese":"<span style='font-weight:bold;color:#c2352d;'>赤のヒーロー</span>1体に＋1攻撃力と＋1防御力の修整を加える。",
"portuguese":"Modify a <span style='font-weight:bold;color:#c2352d;'>red hero</span> with +1 Attack and +1 Armor.",
"polish":"Modify a <span style='font-weight:bold;color:#c2352d;'>red hero</span> with +1 Attack and +1 Armor.",
"danish":"Modify a <span style='font-weight:bold;color:#c2352d;'>red hero</span> with +1 Attack and +1 Armor.",
"dutch":"Modify a <span style='font-weight:bold;color:#c2352d;'>red hero</span> with +1 Attack and +1 Armor.",
"finnish":"Modify a <span style='font-weight:bold;color:#c2352d;'>red hero</span> with +1 Attack and +1 Armor.",
"norwegian":"Modify a <span style='font-weight:bold;color:#c2352d;'>red hero</span> with +1 Attack and +1 Armor.",
"swedish":"Modify a <span style='font-weight:bold;color:#c2352d;'>red hero</span> with +1 Attack and +1 Armor.",
"hungarian":"Modify a <span style='font-weight:bold;color:#c2352d;'>red hero</span> with +1 Attack and +1 Armor.",
"czech":"Modify a <span style='font-weight:bold;color:#c2352d;'>red hero</span> with +1 Attack and +1 Armor.",
"romanian":"Modify a <span style='font-weight:bold;color:#c2352d;'>red hero</span> with +1 Attack and +1 Armor.",
"turkish":"Modify a <span style='font-weight:bold;color:#c2352d;'>red hero</span> with +1 Attack and +1 Armor.",
"brazilian":"Modifique um <span style='font-weight:bold;color:#c2352d;'>herói vermelho</span>, dando-lhe +1 de Ataque e +1 de Armadura.",
"bulgarian":"Modify a <span style='font-weight:bold;color:#c2352d;'>red hero</span> with +1 Attack and +1 Armor.",
"greek":"Modify a <span style='font-weight:bold;color:#c2352d;'>red hero</span> with +1 Attack and +1 Armor.",
"ukrainian":"Modify a <span style='font-weight:bold;color:#c2352d;'>red hero</span> with +1 Attack and +1 Armor.",
"latam":"Modifica a un héroe <span style='font-weight:bold;color:#c2352d;'>rojo</span> con +1 de ataque y +1 de armadura.",
"vietnamese":"Modify a <span style='font-weight:bold;color:#c2352d;'>red hero</span> with +1 Attack and +1 Armor."
},
"mini_image":{
"default":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4004.7a24a893bab45fddaa22ab7659ad427bb6ddaa21.png"
},
"large_image":{
"default":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4004_large_english.5815b6a7557776fbe78590362b87253c6557bb8d.png",
"german":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4004_large_german.1bc74dba112275d1730e34ec1172d450fb23d955.png",
"french":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4004_large_french.a3a9432c377f26eedeb7852bc3cebe968d7fdb9f.png",
"italian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4004_large_italian.4088c736da89a44a9e6c1bb7b5cec08e3b245bc4.png",
"koreana":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4004_large_koreana.44170463256f3ac73cd4b249890483256c12a02b.png",
"spanish":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4004_large_spanish.9ac4b223f4075613fd33c0606ca2ab54623f2e07.png",
"schinese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4004_large_schinese.31f174089d895d4ff24d823c0599065331470293.png",
"tchinese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4004_large_tchinese.1cc30a37acf68eade540c647bfd324f35d4738bd.png",
"russian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4004_large_russian.f2f526d0e5e42834634eedb9255674ae6e687318.png",
"japanese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4004_large_japanese.666670e60ad4db399de1ff4efa2ce893aec4e84d.png",
"brazilian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4004_large_brazilian.993299abf7bccc1fee329864dbc4638561960831.png",
"latam":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4004_large_latam.59dfb7799de2fa987e0f927c28f19fd10b513447.png"
},
"ingame_image":{

},
"illustrator":"Lius Lasahido",
"is_red":true,
"mana_cost":5,
"references":[

]

},
{
"card_id":4005,
"base_card_id":4005,
"card_type":"Hero",
"card_name":{
"english":"Debbi the Cunning",
"german":"Debbi die Listige",
"french":"Debbi la Rusée",
"italian":"Debbi la Scaltra",
"koreana":"교활한 데비",
"spanish":"Debbi la Astuta",
"schinese":"诈者德比",
"tchinese":"詐者德比",
"russian":"Дебби Коварная",
"thai":"Debbi the Cunning",
"japanese":"狡猾なるデビ",
"portuguese":"Debbi the Cunning",
"polish":"Debbi the Cunning",
"danish":"Debbi the Cunning",
"dutch":"Debbi the Cunning",
"finnish":"Debbi the Cunning",
"norwegian":"Debbi the Cunning",
"swedish":"Debbi the Cunning",
"hungarian":"Debbi the Cunning",
"czech":"Debbi the Cunning",
"romanian":"Debbi the Cunning",
"turkish":"Debbi the Cunning",
"brazilian":"Debbi, a Astuta",
"bulgarian":"Debbi the Cunning",
"greek":"Debbi the Cunning",
"ukrainian":"Debbi the Cunning",
"latam":"Debi la Astuta",
"vietnamese":"Debbi the Cunning"
},
"card_text":{
"english":"<span style='font-weight:bold;color:#ffffff;'>Meticulous Planner</span><br/>Debbi the Cunning deals +2 damage when attacking a hero or tower.",
"german":"<span style='font-weight:bold;color:#ffffff;'>Akribische Planung</span><br/>Debbi die Listige fügt beim Angriff auf einen Helden oder Turm +2 Schaden zu.",
"french":"<span style='font-weight:bold;color:#ffffff;'>Poignard agile</span><br/>Debbi la Rusée inflige +2 points de dégâts si elle attaque un héros ou une tour.",
"italian":"<span style='font-weight:bold;color:#ffffff;'>Affonda il coltello</span><br/>Debbi la Scaltra Infligge +2 punti danno quando attacca un eroe o una torre.",
"koreana":"<span style='font-weight:bold;color:#ffffff;'>치밀한 계획가</span><br/>교활한 데비|이|가| 영웅이나 포탑을 공격할 때 추가 피해를 2 줍니다.",
"spanish":"<span style='font-weight:bold;color:#ffffff;'>Navaja pendenciera</span><br/>Debbi la Astuta inflige +2 de daño al atacar a un héroe o a una torre.",
"schinese":"<span style='font-weight:bold;color:#ffffff;'>缜密策士</span><br/>诈者德比攻击英雄或塔时，造成+2伤害。",
"tchinese":"<span style='font-weight:bold;color:#ffffff;'>縝密策士</span><br/>詐者德比攻擊英雄或塔時，造成+2傷害。",
"russian":"<span style='font-weight:bold;color:#ffffff;'>Тщательная подготовка</span><br/>Дебби Коварная наносит на 2 урона больше, когда атакует героя или башню.",
"thai":"<span style='font-weight:bold;color:#ffffff;'>Meticulous Planner</span><br/>Debbi the Cunning deals +2 damage when attacking a hero or tower.",
"japanese":"<span style='font-weight:bold;color:#ffffff;'>慎重な策士</span><br/>狡猾なるデビはヒーローまたはタワーを攻撃時に＋2ダメージを与える。",
"portuguese":"<span style='font-weight:bold;color:#ffffff;'>Meticulous Planner</span><br/>Debbi the Cunning deals +2 damage when attacking a hero or tower.",
"polish":"<span style='font-weight:bold;color:#ffffff;'>Meticulous Planner</span><br/>Debbi the Cunning deals +2 damage when attacking a hero or tower.",
"danish":"<span style='font-weight:bold;color:#ffffff;'>Meticulous Planner</span><br/>Debbi the Cunning deals +2 damage when attacking a hero or tower.",
"dutch":"<span style='font-weight:bold;color:#ffffff;'>Meticulous Planner</span><br/>Debbi the Cunning deals +2 damage when attacking a hero or tower.",
"finnish":"<span style='font-weight:bold;color:#ffffff;'>Meticulous Planner</span><br/>Debbi the Cunning deals +2 damage when attacking a hero or tower.",
"norwegian":"<span style='font-weight:bold;color:#ffffff;'>Meticulous Planner</span><br/>Debbi the Cunning deals +2 damage when attacking a hero or tower.",
"swedish":"<span style='font-weight:bold;color:#ffffff;'>Meticulous Planner</span><br/>Debbi the Cunning deals +2 damage when attacking a hero or tower.",
"hungarian":"<span style='font-weight:bold;color:#ffffff;'>Meticulous Planner</span><br/>Debbi the Cunning deals +2 damage when attacking a hero or tower.",
"czech":"<span style='font-weight:bold;color:#ffffff;'>Meticulous Planner</span><br/>Debbi the Cunning deals +2 damage when attacking a hero or tower.",
"romanian":"<span style='font-weight:bold;color:#ffffff;'>Meticulous Planner</span><br/>Debbi the Cunning deals +2 damage when attacking a hero or tower.",
"turkish":"<span style='font-weight:bold;color:#ffffff;'>Meticulous Planner</span><br/>Debbi the Cunning deals +2 damage when attacking a hero or tower.",
"brazilian":"<span style='font-weight:bold;color:#ffffff;'>Faca Afiada</span><br/>Debbi, a Astuta causa +2 de dano ao atacar um herói ou torre.",
"bulgarian":"<span style='font-weight:bold;color:#ffffff;'>Meticulous Planner</span><br/>Debbi the Cunning deals +2 damage when attacking a hero or tower.",
"greek":"<span style='font-weight:bold;color:#ffffff;'>Meticulous Planner</span><br/>Debbi the Cunning deals +2 damage when attacking a hero or tower.",
"ukrainian":"<span style='font-weight:bold;color:#ffffff;'>Meticulous Planner</span><br/>Debbi the Cunning deals +2 damage when attacking a hero or tower.",
"latam":"<span style='font-weight:bold;color:#ffffff;'>Navaja pendenciera</span><br/> Debi la Astuta inflige +2 de daño al atacar a un héroe o a una torre.",
"vietnamese":"<span style='font-weight:bold;color:#ffffff;'>Meticulous Planner</span><br/>Debbi the Cunning deals +2 damage when attacking a hero or tower."
},
"mini_image":{
"default":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4005.ceab77c296987994f9dfbc5f27bfcbb3fefde14a.png"
},
"large_image":{
"default":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4005_large_english.1f3aabfc7dd72a07ecc9e2d8f2c1af988e636cec.png",
"german":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4005_large_german.68ec1e579b7eee9abf2e198ce8131fe857cc45ca.png",
"french":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4005_large_french.046a01a7f54216f0e3cf52036dcb6e9611be056b.png",
"italian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4005_large_italian.2a84f2ace02cf9553f7e4ece63f7ac9565946e6e.png",
"koreana":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4005_large_koreana.b2bb1d92d2a57d74aa3e7e40b169ee62e08009d4.png",
"spanish":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4005_large_spanish.15bfc6e99aa862616c1b93c76747a5a704127fbc.png",
"schinese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4005_large_schinese.be52f7cd502797557d5153c9b5769814cbde43e3.png",
"tchinese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4005_large_tchinese.93ecc94e197d68ca963bed617f37f21cc114d4e8.png",
"russian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4005_large_russian.dc6a49304414c36cf133539d1372b8c0fe2b3498.png",
"japanese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4005_large_japanese.c49d8864c3fe07a560c3ce420e6ccc7358ccc9e1.png",
"brazilian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4005_large_brazilian.bd38a88def93cbd3bbbd9f393347b8de4bd0cd61.png",
"latam":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4005_large_latam.68fbe3fdd83c03fb6bc31f170f6f0792e14bc1f7.png"
},
"ingame_image":{
"default":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4005_ingame.fa80d8637ebe79e37f2e6b332de59de4d7bc568a.png"
},
"illustrator":"Livia Prima",
"is_black":true,
"attack":7,
"hit_points":5,
"references":[
{
"card_id":4007,
"ref_type":"includes",
"count":3
},
{
"card_id":4006,
"ref_type":"passive_ability"
}
]

},
{
"card_id":4006,
"base_card_id":4006,
"card_type":"Passive Ability",
"card_name":{
"english":"Meticulous Planner",
"german":"Akribische Planung",
"french":"Poignard agile",
"italian":"Affonda il coltello",
"koreana":"치밀한 계획가",
"spanish":"Navaja pendenciera",
"schinese":"缜密策士",
"tchinese":"縝密策士",
"russian":"Тщательная подготовка",
"thai":"Meticulous Planner",
"japanese":"慎重な策士",
"portuguese":"Meticulous Planner",
"polish":"Meticulous Planner",
"danish":"Meticulous Planner",
"dutch":"Meticulous Planner",
"finnish":"Meticulous Planner",
"norwegian":"Meticulous Planner",
"swedish":"Meticulous Planner",
"hungarian":"Meticulous Planner",
"czech":"Meticulous Planner",
"romanian":"Meticulous Planner",
"turkish":"Meticulous Planner",
"brazilian":"Faca Afiada",
"bulgarian":"Meticulous Planner",
"greek":"Meticulous Planner",
"ukrainian":"Meticulous Planner",
"latam":"Navaja pendenciera",
"vietnamese":"Meticulous Planner"
},
"card_text":{
"english":"Debbi the Cunning deals +2 damage when attacking a hero or tower.",
"german":"Debbi die Listige fügt beim Angriff auf einen Helden oder Turm +2 Schaden zu.",
"french":"Debbi la Rusée inflige +2 points de dégâts si elle attaque un héros ou une tour.",
"italian":"Debbi la Scaltra infligge +2 punti danno quando attacca un eroe o una torre.",
"koreana":"교활한 데비 카드로 영웅 또는 포탑 공격 시 피해를 2 더 줍니다.",
"spanish":"Debbi la Astuta inflige +2 de daño al atacar a un héroe o a una torre.",
"schinese":"诈者德比攻击英雄或塔时，造成+2伤害。",
"tchinese":"詐者德比攻擊英雄或塔時，造成+2傷害。",
"russian":"Дебби Коварная наносит на 2 урона больше, когда атакует героя или башню.",
"thai":"Debbi the Cunning deals +2 damage when attacking a hero or tower.",
"japanese":"狡猾なるデビはヒーローまたはタワーを攻撃時に＋2ダメージを与える。",
"portuguese":"Debbi the Cunning deals +2 damage when attacking a hero or tower.",
"polish":"Debbi the Cunning deals +2 damage when attacking a hero or tower.",
"danish":"Debbi the Cunning deals +2 damage when attacking a hero or tower.",
"dutch":"Debbi the Cunning deals +2 damage when attacking a hero or tower.",
"finnish":"Debbi the Cunning deals +2 damage when attacking a hero or tower.",
"norwegian":"Debbi the Cunning deals +2 damage when attacking a hero or tower.",
"swedish":"Debbi the Cunning deals +2 damage when attacking a hero or tower.",
"hungarian":"Debbi the Cunning deals +2 damage when attacking a hero or tower.",
"czech":"Debbi the Cunning deals +2 damage when attacking a hero or tower.",
"romanian":"Debbi the Cunning deals +2 damage when attacking a hero or tower.",
"turkish":"Debbi the Cunning deals +2 damage when attacking a hero or tower.",
"brazilian":"Debbi, a Astuta causa +2 de dano ao atacar um herói ou uma torre.",
"bulgarian":"Debbi the Cunning deals +2 damage when attacking a hero or tower.",
"greek":"Debbi the Cunning deals +2 damage when attacking a hero or tower.",
"ukrainian":"Debbi the Cunning deals +2 damage when attacking a hero or tower.",
"latam":"Debi la Astuta inflige +2 de daño cuando ataca a un héroe o una torre.",
"vietnamese":"Debbi the Cunning deals +2 damage when attacking a hero or tower."
},
"mini_image":{

},
"large_image":{

},
"ingame_image":{

},
"references":[

]

},
{
"card_id":4007,
"base_card_id":4007,
"card_type":"Spell",
"card_name":{
"english":"No Accident",
"german":"Kein Unfall",
"french":"Crime parfait",
"italian":"Nessun incidente",
"koreana":"필연",
"spanish":"No es casualidad",
"schinese":"绝非巧合",
"tchinese":"絕非巧合",
"russian":"Неслучайность",
"thai":"No Accident",
"japanese":"仕組まれた事故",
"portuguese":"No Accident",
"polish":"No Accident",
"danish":"No Accident",
"dutch":"No Accident",
"finnish":"No Accident",
"norwegian":"No Accident",
"swedish":"No Accident",
"hungarian":"No Accident",
"czech":"No Accident",
"romanian":"No Accident",
"turkish":"No Accident",
"brazilian":"Não Foi Acidente",
"bulgarian":"No Accident",
"greek":"No Accident",
"ukrainian":"No Accident",
"latam":"No es casualidad",
"vietnamese":"No Accident"
},
"card_text":{
"english":"Deal 3 damage to a unit.",
"german":"Füge einer Einheit 3 Schaden zu.",
"french":"Inflige 3 points de dégâts à une unité.",
"italian":"Infliggi 3 punti danno a un'unità.",
"koreana":"유닛 하나에게 피해를 3 줍니다.",
"spanish":"Inflige 3 de daño a una unidad.",
"schinese":"对一个单位造成3伤害。",
"tchinese":"對一個單位造成3傷害。",
"russian":"Наносит выбранному существу 3 урона.",
"thai":"Deal 3 damage to a unit.",
"japanese":"ユニット1体に3ダメージを与える。",
"portuguese":"Deal 3 damage to a unit.",
"polish":"Deal 3 damage to a unit.",
"danish":"Deal 3 damage to a unit.",
"dutch":"Deal 3 damage to a unit.",
"finnish":"Deal 3 damage to a unit.",
"norwegian":"Deal 3 damage to a unit.",
"swedish":"Deal 3 damage to a unit.",
"hungarian":"Deal 3 damage to a unit.",
"czech":"Deal 3 damage to a unit.",
"romanian":"Deal 3 damage to a unit.",
"turkish":"Deal 3 damage to a unit.",
"brazilian":"Cause 3 de dano a uma unidade.",
"bulgarian":"Deal 3 damage to a unit.",
"greek":"Deal 3 damage to a unit.",
"ukrainian":"Deal 3 damage to a unit.",
"latam":"Inflige 3 de daño a una unidad.",
"vietnamese":"Deal 3 damage to a unit."
},
"mini_image":{
"default":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4007.53db98297ccfc48f3cb87d7a1beee39fb0e356c4.png"
},
"large_image":{
"default":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4007_large_english.a84ff17b0ed3352ecc635852ecbd6da0a7f722f6.png",
"german":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4007_large_german.ec64727c9462e9f34ced5bd5453cb6c78732fb76.png",
"french":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4007_large_french.5d9d05aa8deba05457dc7e586e6ec67218e2a702.png",
"italian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4007_large_italian.31d79f3d7f24f74e61020e8d009596476e7a73c0.png",
"koreana":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4007_large_koreana.6d4c59fb81c9cb57219e31409a10aece4d9ae744.png",
"spanish":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4007_large_spanish.bf0dc6f43e847681b904da8dd04c61f0a9500ebd.png",
"schinese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4007_large_schinese.ca06cdce644699966991f155743d7182120c0e4b.png",
"tchinese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4007_large_tchinese.5f02fdb76c7b2f3e77e57a7ad7c223e95b5465fd.png",
"russian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4007_large_russian.2eec6a3360651710e2c5057377117e7b90771a01.png",
"japanese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4007_large_japanese.7c26e888dff79d6dac48540a67e725ec7c3c58d3.png",
"brazilian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4007_large_brazilian.a65cbdf5f1b37e4c3361a4daf547315915f3b004.png",
"latam":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4007_large_latam.bf0dc6f43e847681b904da8dd04c61f0a9500ebd.png"
},
"ingame_image":{

},
"illustrator":"Livia Prima",
"is_black":true,
"mana_cost":3,
"references":[

]

},
{
"card_id":4008,
"base_card_id":4008,
"card_type":"Hero",
"card_name":{
"english":"J'Muy the Wise",
"german":"J'Muy der Weise",
"french":"J'Muy le Sage",
"italian":"J'Muy il Saggio",
"koreana":"현자 제이무이",
"spanish":"J'Muy el Sabio",
"schinese":"智者吉姆伊",
"tchinese":"智者吉姆伊",
"russian":"Дж'Мой Мудрый",
"thai":"J'Muy the Wise",
"japanese":"聡明なるジャムイ",
"portuguese":"J'Muy the Wise",
"polish":"J'Muy the Wise",
"danish":"J'Muy the Wise",
"dutch":"J'Muy the Wise",
"finnish":"J'Muy the Wise",
"norwegian":"J'Muy the Wise",
"swedish":"J'Muy the Wise",
"hungarian":"J'Muy the Wise",
"czech":"J'Muy the Wise",
"romanian":"J'Muy the Wise",
"turkish":"J'Muy the Wise",
"brazilian":"J'Muy, o Sábio",
"bulgarian":"J'Muy the Wise",
"greek":"J'Muy the Wise",
"ukrainian":"J'Muy the Wise",
"latam":"J'Muy el Sabio",
"vietnamese":"J'Muy the Wise"
},
"card_text":{
"english":"<span style='font-weight:bold;color:#ffffff;'>Wisdom of the Elders</span><br/><span style='font-weight:bold;color:#ffffff;'>Active 4:</span> Draw a card.",
"german":"<span style='font-weight:bold;color:#ffffff;'>Weisheit der Alten</span><br/><span style='font-weight:bold;color:#ffffff;'>Aktiv 4:</span> Ziehe eine Karte.",
"french":"<span style='font-weight:bold;color:#ffffff;'>Sagesse des aînés</span><br/><span style='font-weight:bold;color:#ffffff;'>Active 4:</span> tirez une carte.",
"italian":"<span style='font-weight:bold;color:#ffffff;'>Saggezza degli anziani</span><br/><span style='font-weight:bold;color:#ffffff;'>Attiva 4:</span> Pesca una carta.",
"koreana":"<span style='font-weight:bold;color:#ffffff;'>장로의 지혜</span><br/><span style='font-weight:bold;color:#ffffff;'>Active 4:</span> 카드를 1장 뽑습니다.",
"spanish":"<span style='font-weight:bold;color:#ffffff;'>La sabiduría de los ancianos</span><br/><span style='font-weight:bold;color:#ffffff;'>Activa 4:</span> Saca una carta.",
"schinese":"<span style='font-weight:bold;color:#ffffff;'>长者的智慧</span><br/><span style='font-weight:bold;color:#ffffff;'>主动4：</span>抽一张牌。",
"tchinese":"<span style='font-weight:bold;color:#ffffff;'>長者的智慧</span><br/><span style='font-weight:bold;color:#ffffff;'>主動 4：</span>抽一張牌。",
"russian":"<span style='font-weight:bold;color:#ffffff;'>Мудрость старейшин</span><br/><span style='font-weight:bold;color:#ffffff;'>Активная 4:</span> вы берёте карту.",
"thai":"<span style='font-weight:bold;color:#ffffff;'>Wisdom of the Elders</span><br/><span style='font-weight:bold;color:#ffffff;'>Active 4:</span> Draw a card.",
"japanese":"長老たちの知恵<BR>\n<span style='font-weight:bold;color:#ffffff;'>アクティブ4：</span>カードを1枚引く。",
"portuguese":"<span style='font-weight:bold;color:#ffffff;'>Wisdom of the Elders</span><br/><span style='font-weight:bold;color:#ffffff;'>Active 4:</span> Draw a card.",
"polish":"<span style='font-weight:bold;color:#ffffff;'>Wisdom of the Elders</span><br/><span style='font-weight:bold;color:#ffffff;'>Active 4:</span> Draw a card.",
"danish":"<span style='font-weight:bold;color:#ffffff;'>Wisdom of the Elders</span><br/><span style='font-weight:bold;color:#ffffff;'>Active 4:</span> Draw a card.",
"dutch":"<span style='font-weight:bold;color:#ffffff;'>Wisdom of the Elders</span><br/><span style='font-weight:bold;color:#ffffff;'>Active 4:</span> Draw a card.",
"finnish":"<span style='font-weight:bold;color:#ffffff;'>Wisdom of the Elders</span><br/><span style='font-weight:bold;color:#ffffff;'>Active 4:</span> Draw a card.",
"norwegian":"<span style='font-weight:bold;color:#ffffff;'>Wisdom of the Elders</span><br/><span style='font-weight:bold;color:#ffffff;'>Active 4:</span> Draw a card.",
"swedish":"<span style='font-weight:bold;color:#ffffff;'>Wisdom of the Elders</span><br/><span style='font-weight:bold;color:#ffffff;'>Active 4:</span> Draw a card.",
"hungarian":"<span style='font-weight:bold;color:#ffffff;'>Wisdom of the Elders</span><br/><span style='font-weight:bold;color:#ffffff;'>Active 4:</span> Draw a card.",
"czech":"<span style='font-weight:bold;color:#ffffff;'>Wisdom of the Elders</span><br/><span style='font-weight:bold;color:#ffffff;'>Active 4:</span> Draw a card.",
"romanian":"<span style='font-weight:bold;color:#ffffff;'>Wisdom of the Elders</span><br/><span style='font-weight:bold;color:#ffffff;'>Active 4:</span> Draw a card.",
"turkish":"<span style='font-weight:bold;color:#ffffff;'>Wisdom of the Elders</span><br/><span style='font-weight:bold;color:#ffffff;'>Active 4:</span> Draw a card.",
"brazilian":"<span style='font-weight:bold;color:#ffffff;'>Sabedoria dos Anciões</span><br/><span style='font-weight:bold;color:#ffffff;'>Ativa 4:</span> Pegue uma carta.",
"bulgarian":"<span style='font-weight:bold;color:#ffffff;'>Wisdom of the Elders</span><br/><span style='font-weight:bold;color:#ffffff;'>Active 4:</span> Draw a card.",
"greek":"<span style='font-weight:bold;color:#ffffff;'>Wisdom of the Elders</span><br/><span style='font-weight:bold;color:#ffffff;'>Active 4:</span> Draw a card.",
"ukrainian":"<span style='font-weight:bold;color:#ffffff;'>Wisdom of the Elders</span><br/><span style='font-weight:bold;color:#ffffff;'>Active 4:</span> Draw a card.",
"latam":"<span style='font-weight:bold;color:#ffffff;'>Sabiduría de los ancianos</span><br/><span style='font-weight:bold;color:#ffffff;'>Activa 4:</span> Saca una carta.",
"vietnamese":"<span style='font-weight:bold;color:#ffffff;'>Wisdom of the Elders</span><br/><span style='font-weight:bold;color:#ffffff;'>Active 4:</span> Draw a card."
},
"mini_image":{
"default":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4008.35f4da08e371db6ecc077f4aad08113dac8cc4de.png"
},
"large_image":{
"default":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4008_large_english.ca1cc8d40556a466550afd50e41a1ef0f09eba6c.png",
"german":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4008_large_german.fb5fbd68a797df7fbad06aab4abb07c5c0c60039.png",
"french":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4008_large_french.9839c352b0885a35eec42d8e356e09e42852b923.png",
"italian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4008_large_italian.d546f55194e1c9c22e402fa4d7848a8ffc4bcb9f.png",
"koreana":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4008_large_koreana.6401fbac99510ae85f13df282a48f3b3cce07acd.png",
"spanish":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4008_large_spanish.03e76afc22d5588502b0d7bca9ecfe3343b67369.png",
"schinese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4008_large_schinese.1f9b4bf572946f7a286ab844173c7f5a3493d702.png",
"tchinese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4008_large_tchinese.5a0199c4c3370cb4171acbc31687360a6afc8a19.png",
"russian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4008_large_russian.77f98d084be52cee2f828e8a11ae4f7e9c88a2fe.png",
"japanese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4008_large_japanese.5104a4e2e1f49d829d47ab5cfcc4696d16939003.png",
"brazilian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4008_large_brazilian.9bdc8e0cc9488274c8b0abf1eaf954abe1b9994e.png",
"latam":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4008_large_latam.03e76afc22d5588502b0d7bca9ecfe3343b67369.png"
},
"ingame_image":{
"default":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4008_ingame.094a2c09317b5d7b0dbce840c3384811912e0e06.png"
},
"illustrator":"Billy Christian",
"is_blue":true,
"attack":3,
"hit_points":8,
"references":[
{
"card_id":4010,
"ref_type":"includes",
"count":3
},
{
"card_id":4009,
"ref_type":"active_ability"
}
]

},
{
"card_id":4009,
"base_card_id":4009,
"card_type":"Ability",
"card_name":{
"english":"Wisdom of the Elders",
"german":"Weisheit der Alten",
"french":"Sagesse des aînés",
"italian":"Saggezza degli anziani",
"koreana":"장로의 지혜",
"spanish":"La sabiduría de los ancianos",
"schinese":"长者的智慧",
"tchinese":"長者的智慧",
"russian":"Мудрость старейшин",
"thai":"Wisdom of the Elders",
"japanese":"長老たちの知恵",
"portuguese":"Wisdom of the Elders",
"polish":"Wisdom of the Elders",
"danish":"Wisdom of the Elders",
"dutch":"Wisdom of the Elders",
"finnish":"Wisdom of the Elders",
"norwegian":"Wisdom of the Elders",
"swedish":"Wisdom of the Elders",
"hungarian":"Wisdom of the Elders",
"czech":"Wisdom of the Elders",
"romanian":"Wisdom of the Elders",
"turkish":"Wisdom of the Elders",
"brazilian":"Sabedoria dos Anciões",
"bulgarian":"Wisdom of the Elders",
"greek":"Wisdom of the Elders",
"ukrainian":"Wisdom of the Elders",
"latam":"Sabiduría de los ancianos",
"vietnamese":"Wisdom of the Elders"
},
"card_text":{
"english":"Draw a card.",
"german":"Ziehe eine Karte.",
"french":"Tirez une carte.",
"italian":"Pesca una carta.",
"koreana":"카드 뽑기.",
"spanish":"Saca una carta.",
"schinese":"抽一张牌。",
"tchinese":"抽一張牌。",
"russian":"Вы берёте карту.",
"thai":"Draw a card.",
"japanese":"カードを1枚引く。",
"portuguese":"Draw a card.",
"polish":"Draw a card.",
"danish":"Draw a card.",
"dutch":"Draw a card.",
"finnish":"Draw a card.",
"norwegian":"Draw a card.",
"swedish":"Draw a card.",
"hungarian":"Draw a card.",
"czech":"Draw a card.",
"romanian":"Draw a card.",
"turkish":"Draw a card.",
"brazilian":"Pegue uma carta.",
"bulgarian":"Draw a card.",
"greek":"Draw a card.",
"ukrainian":"Draw a card.",
"latam":"Saca una carta.",
"vietnamese":"Draw a card."
},
"mini_image":{

},
"large_image":{

},
"ingame_image":{

},
"references":[

]

},
{
"card_id":4010,
"base_card_id":4010,
"card_type":"Spell",
"card_name":{
"english":"Battlefield Control",
"german":"Schlachtfeldkontrolle",
"french":"Contrôle du champ de bataille",
"italian":"Controllo del campo di battaglia",
"koreana":"전장 조종",
"spanish":"Control de la batalla",
"schinese":"战场控制",
"tchinese":"戰場控制",
"russian":"Контроль боя",
"thai":"Battlefield Control",
"japanese":"戦場支配",
"portuguese":"Battlefield Control",
"polish":"Battlefield Control",
"danish":"Battlefield Control",
"dutch":"Battlefield Control",
"finnish":"Battlefield Control",
"norwegian":"Battlefield Control",
"swedish":"Battlefield Control",
"hungarian":"Battlefield Control",
"czech":"Battlefield Control",
"romanian":"Battlefield Control",
"turkish":"Battlefield Control",
"brazilian":"Controle de Batalha",
"bulgarian":"Battlefield Control",
"greek":"Battlefield Control",
"ukrainian":"Battlefield Control",
"latam":"Control de la batalla",
"vietnamese":"Battlefield Control"
},
"card_text":{
"english":"Choose a unit. Choose a combat target for it.",
"german":"Wähle eine Einheit. Wähle ein Kampfziel.",
"french":"Choisissez une unité. Désignez sa cible de combat.",
"italian":"Scegli un'unità. Scegli un bersaglio in combattimento per essa.",
"koreana":"유닛 하나를 선택합니다. 해당 유닛의 전투 대상을 선택합니다.",
"spanish":"Elige una unidad y selecciona su objetivo de combate.",
"schinese":"选择一个单位，为其选择一个战斗目标。",
"tchinese":"選擇一個單位。為其選擇一個戰鬥目標。",
"russian":"Выберите существо. Выберите его цель в сражении.",
"thai":"Choose a unit. Choose a combat target for it.",
"japanese":"ユニットを1体選ぶ。そのユニットの戦闘対象を選択する。",
"portuguese":"Choose a unit. Choose a combat target for it.",
"polish":"Choose a unit. Choose a combat target for it.",
"danish":"Choose a unit. Choose a combat target for it.",
"dutch":"Choose a unit. Choose a combat target for it.",
"finnish":"Choose a unit. Choose a combat target for it.",
"norwegian":"Choose a unit. Choose a combat target for it.",
"swedish":"Choose a unit. Choose a combat target for it.",
"hungarian":"Choose a unit. Choose a combat target for it.",
"czech":"Choose a unit. Choose a combat target for it.",
"romanian":"Choose a unit. Choose a combat target for it.",
"turkish":"Choose a unit. Choose a combat target for it.",
"brazilian":"Escolha uma unidade. Escolha um alvo de combate para ela.",
"bulgarian":"Choose a unit. Choose a combat target for it.",
"greek":"Choose a unit. Choose a combat target for it.",
"ukrainian":"Choose a unit. Choose a combat target for it.",
"latam":"Elige una unidad. Selecciona su objetivo de combate.",
"vietnamese":"Choose a unit. Choose a combat target for it."
},
"mini_image":{
"default":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4010.5627b0170ff8a8242d046fcf5308a46f13ad2b06.png"
},
"large_image":{
"default":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4010_large_english.033c2c5379f86a901894ae22181f73a5004f8f08.png",
"german":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4010_large_german.9f65251ae63b4fb6120c8b4c1e7055c4ad064745.png",
"french":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4010_large_french.8d606721ad8a1e5f11393efd9b23afd862e74ee8.png",
"italian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4010_large_italian.fcd247915c9f66507a724dee8230bf81a27230d2.png",
"koreana":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4010_large_koreana.fc70b727e4c5042c91c0f2f0f7e9829f2ca2cad5.png",
"spanish":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4010_large_spanish.764ec12279bfcf3fa9473ed97a2fe28609c97e06.png",
"schinese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4010_large_schinese.11c6db9346bfb4813154f83b2aec609d73c487da.png",
"tchinese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4010_large_tchinese.77d890e700f4947d5874ac995f46621eea0d7d38.png",
"russian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4010_large_russian.05f467f2a9c240759ea81d00e190fd751b7071c2.png",
"japanese":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4010_large_japanese.85ae48bc3e7b728a1eb4d88c54969d1bb7bb2977.png",
"brazilian":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4010_large_brazilian.a34a140b33f25df81ea6e6757cd50a1a9c324a0a.png",
"latam":"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4010_large_latam.a2a2b976e16c0201870865f178f33dc119f5e5fd.png"
},
"ingame_image":{

},
"illustrator":"Billy Christian",
"is_blue":true,
"mana_cost":1,
"references":[

]

}
]

}
};

    while (/*typeof (temp_set = await ArtifactApi.getSet(set_id, false)) === 'object' &&*/ temp_set.hasOwnProperty('card_set')) {
        addToDeck(search_deck, temp_set);

        let integer = parseInt(set_id, 10);
        integer++;
        set_id = integer.toString(); 
        temp_set = {};  
    }

    return search_deck;
}

function addToDeck(search_deck, temp_set) {
    let card_list = temp_set.card_set.card_list;

    for (var i = 0; i < card_list.length; i++) {
        let card = card_list[i];
        if (card.type != "Stronghold" && card.type != "Pathing") {
            var value = {
                id : card.card_id,
                type : card.type,
                name : card.card_name.english,
                text : card.card_text.english,
                mini_image : card.mini_image.default,
                image : card.large_image.default
            }
            search_deck[search_deck.length] = { 
                label : card_list[i].card_name.english,
                value : value
            };
        }
    }
}

export default { getSearchDeck };
