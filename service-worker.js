if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,r,i)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const c={uri:location.origin+s.slice(1)};return Promise.all(r.map(s=>{switch(s){case"exports":return a;case"module":return c;default:return e(s)}})).then(e=>{const s=i(...e);return a.default||(a.default=s),a})}))}}define("./service-worker.js",["./workbox-f8d4e228"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.eaa14d0d.css",revision:"4df0037fca2bd14307cef48f73ea9735"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/67.96d16d41.js",revision:"207be40ce9489b9939478b97f88b408d"},{url:"assets/js/68.1adf794e.js",revision:"67dcac1f280d2cb858665f7453b605cb"},{url:"assets/js/app.089cb644.js",revision:"f2686e4c8b0252105774e51ffcefd8ae"},{url:"assets/js/layout-Blog.b2f7aa9a.js",revision:"8bf48f29298b3cced03b0de48711ef3b"},{url:"assets/js/layout-Layout.4f7e4292.js",revision:"f67b9feddd15acd34da768c93f63f277"},{url:"assets/js/layout-NotFound.3ebda001.js",revision:"871664ce58e65755e17ab68118841e9a"},{url:"assets/js/layout-Slide.ff99b324.js",revision:"cb98ae9746375e36af64d454bd91305d"},{url:"assets/js/page--250a475b.f37d6aa2.js",revision:"fa2fee390a3c75fc326900caa169bf92"},{url:"assets/js/page-ABeginner'sGuidetoSSLWhatItisWhyItMakesYourWebsiteMoreSecure--5aa113b0.84737b09.js",revision:"0399e2b4f037f97ab019d8e7b089bf72"},{url:"assets/js/page-AnHonestGuidetoBuildingaPowerfulDeveloperPortfolio--63e8a362.81e94859.js",revision:"ce7b39efe45de45b1a609e24268e800f"},{url:"assets/js/page-AnIntrotoJavascriptProxyObjects--6e2e56d4.18ef6ddf.js",revision:"42567112fb4aedd440995d1461b2fced"},{url:"assets/js/page-AskingforHelp--35137760.627e1f6d.js",revision:"87a25ae6ac07893078492c0f09c564f4"},{url:"assets/js/page-AsyncandAwait--00563efc.cf459a93.js",revision:"1d4938a25358badb77eccb8599729116"},{url:"assets/js/page-Base64Images--31c88e02.bf30d073.js",revision:"c17cbbb7c2b62ace20161ada7d240357"},{url:"assets/js/page-CallbackHell--77b6f2d8.fec07659.js",revision:"42eddc0b9c755ec786c2df934b70fc55"},{url:"assets/js/page-CDataTypes--17b83594.2ac41af3.js",revision:"17d359a86f7a64e360f991850b9c6fcc"},{url:"assets/js/page-CEnum's--549dff62.f2e19064.js",revision:"2fd46d9913d8954290e31b56c7b7e057"},{url:"assets/js/page-CheatingatDesign--b86e9dfc.e04cdf6f.js",revision:"d0a67bc262bfd27d1b729c5557de59f4"},{url:"assets/js/page-ChromeDeveloperTools--3ac6c1c2.990a67af.js",revision:"a710031000215b8ead1274825f1b674c"},{url:"assets/js/page-CInheritance--f21d927c.ec527b98.js",revision:"fba05f6bc60d4102287fd4eb83cfc548"},{url:"assets/js/page-CList--59a36c7c.38d4c3bf.js",revision:"a0ff11e52a4c4866be30fa6b3070c51f"},{url:"assets/js/page-CodedocumentationforJavaScriptwithJSDocanintroduction--532626c2.a48886ed.js",revision:"7e290c2c740f447b35862a88a500fa41"},{url:"assets/js/page-CommandLine--59665682.549f0189.js",revision:"cbf8ef1ac65571bdc3f1f9e9327b8a15"},{url:"assets/js/page-CommandPrompt--3886a1b6.54fc218c.js",revision:"75b9927d6158b4174f599bffe822621a"},{url:"assets/js/page-CSS--3499b964.4d66a89d.js",revision:"06c00abb687397c2f90a4fedbe6340d6"},{url:"assets/js/page-Debugging101--e75f723c.8ae82f6f.js",revision:"b339543e701db51603ef2c3d3c5ce71f"},{url:"assets/js/page-DesigningaStrongUserExperience--e9575b7c.41f5a408.js",revision:"60d84da0fc5618838484828a911ea069"},{url:"assets/js/page-EncapsulationinJavaScript--632d87c8.f32c93c1.js",revision:"fb9f8fcc15cece5d60b57152e51ec62c"},{url:"assets/js/page-ES6modules--a1aa3138.9d420c57.js",revision:"157fa0c426cdd1ccd32063549843b308"},{url:"assets/js/page-ExternalResources--3e184026.3665a234.js",revision:"128fcc5debab1d179752545846722e72"},{url:"assets/js/page-Flexbox--6005737c.5485de28.js",revision:"eb2b3053414accc70b69c2c9b817784b"},{url:"assets/js/page-GIT101--9b4f39ec.f8f80761.js",revision:"e2d88ab6b512de24f8f7c7a1c3155c76"},{url:"assets/js/page-GitHubActionsandHowtoUseThem--71546850.9cfefb55.js",revision:"c3fa1d6e1f97d71de438325b557c2209"},{url:"assets/js/page-HownottouseinterfacesinC--06b1ba24.b176236a.js",revision:"0838e72e4579fe6d1402ca4a089dc358"},{url:"assets/js/page-HowtoUsePropsinVueTheUltimateGuide(withExamples)--01be32d4.7ec64950.js",revision:"bff448641844c939290f52441ec85818"},{url:"assets/js/page-HTMLCSS--0c29523e.c01057bc.js",revision:"558042f4622135619abed211366a58f3"},{url:"assets/js/page-JavaScript--7ed066fc.ef895c60.js",revision:"779c5483d605d8094e187ced363c3020"},{url:"assets/js/page-JavaScriptFunctions--6219c638.ded894d7.js",revision:"fddfe432ecad10002079c7df938fa605"},{url:"assets/js/page-JavaScriptPromises--42f49ce2.3e8526b7.js",revision:"55684ab97ddb3c8a67ce01200c0beff6"},{url:"assets/js/page-Markdown--57af1f42.0156cf26.js",revision:"06c2c354e6c0cb10e091ed45491285e6"},{url:"assets/js/page-MongoDbRelationships--55564584.e3a35ae3.js",revision:"8cd59491d04dfcdadff6775a043e1008"},{url:"assets/js/page-Mongoose101Workingwithsubdocuments--a7e5a83c.818ef302.js",revision:"75b49769c20e5b1db62e22933d068c24"},{url:"assets/js/page-PairProgramming--9a0adf88.5d0e57de.js",revision:"27602c2607cb739ae73632361a3bcce4"},{url:"assets/js/page-PillarsofOOP--44ca160c.b4d0c962.js",revision:"849809706b733fd0f68c7a2798ee0570"},{url:"assets/js/page-PrototypalInheritance--3cb0bfe2.9470b198.js",revision:"523a0449f1ab3576f3670d3a66c66921"},{url:"assets/js/page-RecommendedBooks--6ac349bc.caf72241.js",revision:"bd377c360e91d768d34db975b8522dc6"},{url:"assets/js/page-RegularExpressions(RegEx)InJavaScript--23195b5c.4e8ea316.js",revision:"3df2b6f42ffc892af738b1e923c2ba91"},{url:"assets/js/page-Relationships--770d6462.66ba4a3f.js",revision:"a8df8eac76a0920df85edbb7de8140fe"},{url:"assets/js/page-ScrumforSmallTeams--7aeddd22.e4759403.js",revision:"65e4a1c1569330dc78ca56785fff4099"},{url:"assets/js/page-SQLInjection--57a6cf82.7d003c8b.js",revision:"058ede1a75b51ece60ece3b7552fef24"},{url:"assets/js/page-TestinginVue--41d0a7e2.72c98851.js",revision:"5dbf693f967b608bad6608ae91768aff"},{url:"assets/js/page-TheFetchAPI--66e75a7a.fd3f7c85.js",revision:"b3f7b7c866ed9163063979fd7146c545"},{url:"assets/js/page-TheMistakesIMadeAsaBeginnerProgrammer--eab33f14.e199378b.js",revision:"12658914e4f49a8582159dadd8fc6b24"},{url:"assets/js/page-TheObserverPattern--3b338638.83ffc456.js",revision:"a4531f387df56bc2beed3332fbf22596"},{url:"assets/js/page-UnderstandingComponent-BasedArchitecture--7b2f6ee2.71295203.js",revision:"6f186400ea4b521d19c160d64f0967bb"},{url:"assets/js/page-UnderstandingVuejsLifecycleHooks--69ab4c9c.3d170cf9.js",revision:"3c9e05861e76a1627c19b578ab082d2f"},{url:"assets/js/page-Unittesting---why--3588a210.de534085.js",revision:"8ae3d5c62ea4cdfc3d3b98b7325f1782"},{url:"assets/js/page-UsingNestedRoutesinVuejs--7eebee66.d9cfbbe1.js",revision:"95689f6167a69e50795e9c50cd255337"},{url:"assets/js/page-UsingQueryParameters--51586c12.ee80128a.js",revision:"308a545f3e8980c447c68292e1b0c258"},{url:"assets/js/page-Var,letandconst--4330674c.41b2b024.js",revision:"ef2cd67640fcacf536c2a50faccfb1c8"},{url:"assets/js/page-VirtualsinMongoose--b0aa5afc.f5ccef7f.js",revision:"5263b45dc9c569ed034fb104ba5c3ed3"},{url:"assets/js/page-WelcometoSQL--577ea948.dc0d950a.js",revision:"1a385e0515612665dce1665fec7bd506"},{url:"assets/js/page-WhatisREST--88dcf87c.13f9a546.js",revision:"b69a639b3579ab38792c8d973ea119c4"},{url:"assets/js/page-WireframingAComprehensiveGuide--94157fcc.2e11e542.js",revision:"5136e2308f5b0fc0853e00690dafe055"},{url:"assets/js/vendors~layout-Blog~layout-Layout.abe96493.js",revision:"ca0ce99a9808d6d98c6dbba1a6d032c3"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.d2c0c9f1.js",revision:"8e503339f07cf17b258c69e499d2465e"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.606f6e74.js",revision:"a34710f15af026be92f13aef839bc03b"},{url:"assets/js/vendors~photo-swipe.20729263.js",revision:"a73c30ba10058b485950d48d3e162b95"},{url:"404.html",revision:"8d4d4063352fc650844595eb890673e0"},{url:"article/index.html",revision:"0c141205519579f66b7108aa347dc031"},{url:"category/index.html",revision:"a5caf1115114a02a89debfa9eea7b4ae"},{url:"encrypt/index.html",revision:"b99e4a3fce99ee2e7ae0ea1a9acb2e96"},{url:"index.html",revision:"0dfb58b585f8c49aa9b8849b11ac1647"},{url:"resources/Books/index.html",revision:"d4e75ef9221a3384eab8110f56dc4f22"},{url:"resources/index.html",revision:"87ab530aac3302ba0e748e88b64da75e"},{url:"resources/wk1/01-GIT/index.html",revision:"aa6247510d35ad444a39d02b125557a6"},{url:"resources/wk1/02-Comand-Prompt/index.html",revision:"f9f0a29a55377561c54c7c1172231437"},{url:"resources/wk1/03-CSS/index.html",revision:"ee0bd940d4a11e86b9f997c471f1dc30"},{url:"resources/wk1/04-Cheating-at-Design/index.html",revision:"ea42176e738fd069cafbecdef3e717c8"},{url:"resources/wk1/05-Flexbox/index.html",revision:"5c63c20cd4f78053a2e027c7c11aeb61"},{url:"resources/wk1/06-Wireframing/index.html",revision:"96eb0a2ff1d7c0054dd10268e9fbf69a"},{url:"resources/wk1/07-AskingForHelp/index.html",revision:"d302e5a42be84e62becc2028bda3b278"},{url:"resources/wk10/01-CSharpGenerics/index.html",revision:"2e0cc283c9abe4f020cd2c66f511833c"},{url:"resources/wk10/02-ListMethods/index.html",revision:"be8ee89bac51fea0da07fb7b7544750b"},{url:"resources/wk10/03-Enums/index.html",revision:"d353dceda94b5a82a512491592c0d7d7"},{url:"resources/wk10/04-Inheritance/index.html",revision:"131ca359cbbee6578e925d0091917a7d"},{url:"resources/wk10/05-Interfaces/index.html",revision:"d5d5a7bfac5ed4c39f880c243432670f"},{url:"resources/wk11/01-MySQL-GettingStarted/index.html",revision:"6273057ba0e95e73bfa663ed1307f00b"},{url:"resources/wk11/02-MySQL-Relationships/index.html",revision:"0b9f3b75f3fb17478581b96c842737ad"},{url:"resources/wk11/03-SQL-Injection/index.html",revision:"53c70ad6bf836514199ce027d81a931a"},{url:"resources/wk2/01-Let-Var-Const/index.html",revision:"d33b84e069802a863e60f5f479c71f2c"},{url:"resources/wk2/02-Functions/index.html",revision:"be51e7ecdca316550aa93256fd99eb53"},{url:"resources/wk2/03-Chrome-Dev-Tools/index.html",revision:"0225e8ee86ff151219cf5df91655f4a7"},{url:"resources/wk2/04-Regex/index.html",revision:"aa3696af50e24e5f9a96d92d37b0dac1"},{url:"resources/wk2/05-Prototypical-Inheritance/index.html",revision:"f4a104aa1a1a65feb6bbb306a705a465"},{url:"resources/wk2/06-Coding-Mistakes/index.html",revision:"8e939c53862e128840e6ef62f2ef03ac"},{url:"resources/wk3/01-Modules/index.html",revision:"3e4742ecb547906a8f4e11f5a8057e33"},{url:"resources/wk3/02-Encapsulation/index.html",revision:"6216e2ab39adfa442e7bc301e1446888"},{url:"resources/wk3/03-Proxies/index.html",revision:"1cbce4e53c2ea5c43f324b8587511399"},{url:"resources/wk3/04-ObserverPattern/index.html",revision:"42febc967137dd312658b4977874c970"},{url:"resources/wk3/05-Debugging101/index.html",revision:"1023f2972a03c44112a0f1dd77565964"},{url:"resources/wk4/01-Callbacks/index.html",revision:"e284f5bbfbfe1c4390f70311c6dabb72"},{url:"resources/wk4/02-Promises/index.html",revision:"f55cbd93b24dc82c2a4f236f90bcb416"},{url:"resources/wk4/03-AsyncAwait/index.html",revision:"7b4842350def64ce5eb035b4bc7e6512"},{url:"resources/wk4/04-Fetch/index.html",revision:"57b50480e9c23687e181f4a5502cb2ad"},{url:"resources/wk4/05-REST/index.html",revision:"b23de2e554c6e0dc18c42e80e887213c"},{url:"resources/wk5/01-QueryParameters/index.html",revision:"d1e2e6de3e0f547dcb42ec4412ce98f7"},{url:"resources/wk5/02-Relationships/index.html",revision:"16f8bdf4e97055104f11e60dbc8b0cc8"},{url:"resources/wk5/03-SubDocuments/index.html",revision:"a4f30d570420f8eb9c598150e776e94f"},{url:"resources/wk5/04-Virtuals/index.html",revision:"e050f3ee10a7842d1ea8ce17e9e71656"},{url:"resources/wk6/01-ComponentBasedArchitecture/index.html",revision:"6eba34769c361c16cc196bcc75ad42c2"},{url:"resources/wk6/02-Props/index.html",revision:"ed74e5690366923c9bf768b7e4968cbc"},{url:"resources/wk6/03-VueLifeCycleHooks/index.html",revision:"5969764305b030028bcf0caf0746805e"},{url:"resources/wk6/04-ChildRoutes/index.html",revision:"aad84b70aeb091321aa4bdddfca44478"},{url:"resources/wk7/01-PairProgramming/index.html",revision:"18488c21901325972bf31ce2a1f2e9d0"},{url:"resources/wk7/02-JSDocs/index.html",revision:"4e87a41e13d33466d53428ee1829626d"},{url:"resources/wk7/03-CreatingGoodUx/index.html",revision:"529ae775b88dd9e6eecb7186f57be7f7"},{url:"resources/wk8-9/01-BuildingAPortfolio/index.html",revision:"3df905d17b0752c8cd2f654a006e4f8a"},{url:"resources/wk8-9/02-ScrumForSmallTeams/index.html",revision:"7e415b0f68d1e183428591536e840d31"},{url:"resources/wk8-9/03-UnitTesting/index.html",revision:"1289c95ab3d0164d74c9d2c23b902927"},{url:"resources/wk8-9/04-VueTesting/index.html",revision:"24d6f37d1e91bc2b6ee18ccb10a9a255"},{url:"resources/wk8-9/05-GithubActions/index.html",revision:"8ad95d1f2bfafb60c24f881210dfad11"},{url:"resources/wk8-9/06-Base64/index.html",revision:"f26a63e5ad6ea9a360c9c277831c8a8d"},{url:"resources/wk8-9/07-SSL/index.html",revision:"6d43257d55daf81cbf04e7ea1a71270d"},{url:"slide/index.html",revision:"ea7f48fccb19129270e3aa446b29710e"},{url:"tag/index.html",revision:"90aaa0ead2e711a4ab98f051f908cd36"},{url:"timeline/index.html",revision:"bc4a8a416189cbafe9abbf1203a8e59c"},{url:"vocab/02-Command-Line/index.html",revision:"d9127b42fd7a4dc20752269694bcc396"},{url:"vocab/03-JavaScript/index.html",revision:"97dab1ae21e7c00d6507f59ac7201b01"},{url:"vocab/04-Principles-and-Patterns/index.html",revision:"5b417f7adf13478005d2f145651edb3b"},{url:"vocab/05-MarkDown/index.html",revision:"fd82a089a64ecec535870e51896a8cad"},{url:"vocab/index.html",revision:"3b923481851428adc34b84319fb04e90"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
