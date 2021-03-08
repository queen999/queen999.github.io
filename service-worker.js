/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","bb952ee44966c33032486f1f5d66f6a0"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","b61d5a12f9d912449ec71ac676af9747"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","adc23f7bbbe42a87506085caa679b3fd"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","242eb38d85e0ee6f4e7fc6df6dd0777a"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","b7d19a9c225fef30880c2f354ff91efc"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","837c8761e200c9eace38fd1404ca43c9"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","ad03f6b70db921506efbcff5b4317041"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","654cb86db1ef1065aee914b8b5f7f538"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","f651d261302de6562e431a791309fb11"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","beec0eed68fe38d1fd119c16ec25ba0b"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","a79be00b08fb078ab891ca26ff1d2ee4"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","4687984b3141490ec03a9820cce815e7"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","9a7b40e1b6059fe09ef61c60e2022162"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","37dced2967e32b8084cd7c51fbfbbd4d"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","c5b4b7e5117430829dc9b5c270969e29"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","150e559c52481b11a2da3bec9edb6ca4"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","f7c950ade2c835c8bacb9f85759fcfd5"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","3d87c2f1db09d1635511eebfe62d830c"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","d01a12433814d62cdb5a9aca143c82a5"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","fe2449e56204252af2cd542357c68008"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","4adc5f0b6ecd13da13ee745eb7ec4e06"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","69be286d1f35647de323a3f064eb1f02"],["E:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","b9b4b8626ce98eb78adf330e4f5f38b8"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","251d7c5c22fd48fb6e66a55a72325485"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","444650da0048925511557c717b3d2ac8"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","34359ca3db3f63b0f21cf5ead33a59ec"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","5808a35a1b0655109569fd4748ba4d6c"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","7c4772e0fc2fdc6ddb3d4be1e311ae4a"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","daa1c09d1cd0138514ea07894953ae5d"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","0ed143f67ee0e1bd699319785b83b48b"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","27180d917325085f46372293dabfec63"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","c9b2ba7bb6d5b26aa8cadfbe0c0fa28b"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","9bb0fd7378f184206e7504fd23a3977e"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","78d47deb1200982579de31e38bc7ade6"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","30981b90310add669103c5aa456df6b9"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","3cc41e40281a49baef35cd542bf792b2"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","1a6e917fbcbe6e5b67bf55ec370e4156"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","54c4b49f050ecfc0ccf1cb4a3231fe03"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","836d7084db14bb3c4c2f7385e6002660"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","dbf06deab81d717bb79921886b0cd6fc"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","294cd29bdfac7d612de4d73e3a0555f8"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","8189405e715775e7cbcb109e034e47ee"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","077db62a68594b8a2c328bfe3f24f92e"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","85eebd82c964f6025bfc6daece06c612"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","09118cb6d7d7a00fb46636c6443ff15f"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","e0eef5903b2a840e87281f1355a85d94"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","2161e77c7d82b75dfa69c53873b886f2"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","e4b93203baccf7263fedda848d8a6a14"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","e20e1f1ed6241b81e369b48e01b7402d"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","d596a360faa553d319805d5cfac0573d"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","6fb914e8e382b62cacb97d97feae9399"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","a3143cc8a7aeb681fcd6b30e6db4bc23"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","3175bd36aa532a3e359f4c96531aefd3"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","96b7c4f81ea2f7f036082afa7dab5604"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","0d6cfe7beb6bdbc908f4295d04a34097"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","8cf437097e4e26fcecdb784793b1b166"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","cb0169987e902de43eccbb871ee76688"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","f53e2548b2e15f47bdb6aa560c77a223"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","af8e1e5cc518563a41f540545411c25b"],["E:/qinhao/hexo/public/2020/12/15/C_basic/index.html","032d9897c455d84de51369a72a227ccf"],["E:/qinhao/hexo/public/ByteDanceVerify.html","305d875b87508bedd325dc5c11c5ae31"],["E:/qinhao/hexo/public/about/index.html","bbee68c07433b91e5f970819333d71f4"],["E:/qinhao/hexo/public/archives/2020/02/index.html","2cc71e345385ec143d87022c2e3721dc"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","494e3e65df85bf9ef26a54dea1d61acb"],["E:/qinhao/hexo/public/archives/2020/03/index.html","b2f76132fde6b48a33c9da9f54c5a3e1"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","52409fe185273bde700daec8fa807403"],["E:/qinhao/hexo/public/archives/2020/04/index.html","71042152085d65686d227c889ee708ae"],["E:/qinhao/hexo/public/archives/2020/05/index.html","67c3a2f19bc3cfcd2ee15e2658928f25"],["E:/qinhao/hexo/public/archives/2020/06/index.html","f777bce87374d027e22c4a8043ecd7a7"],["E:/qinhao/hexo/public/archives/2020/07/index.html","595b8039d9ae4df761c098cf54fa15f9"],["E:/qinhao/hexo/public/archives/2020/08/index.html","9d041cc9427d94338333c416608936f3"],["E:/qinhao/hexo/public/archives/2020/10/index.html","00efcaeccf80fe452c24cb9eb6b78abe"],["E:/qinhao/hexo/public/archives/2020/11/index.html","5d16b1cf78e0a681419dddac4c48145a"],["E:/qinhao/hexo/public/archives/2020/12/index.html","65a729faaaa6dea296557c2d9fe52063"],["E:/qinhao/hexo/public/archives/2020/index.html","0c1fea858fc7cc3539699b41a8d3ecc1"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","27bc443eef27aa75a9b3a339c8154a33"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","3f15a33379b4e288d4c9ca7b1a4a6a8d"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","f729264562e3b8cdbde42190a2379aa2"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","94e85a4e9ae5efacf123f8c72bf3a646"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","7337ebcb96211c5faa43ad8a288e03a4"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","ffc1cb34826a7062792f267557ca324b"],["E:/qinhao/hexo/public/archives/index.html","adea93e117af83a762c5c1b0e49de38d"],["E:/qinhao/hexo/public/archives/page/2/index.html","b4c96765d66ff9e7b0682e8e1127d064"],["E:/qinhao/hexo/public/archives/page/3/index.html","adea93e117af83a762c5c1b0e49de38d"],["E:/qinhao/hexo/public/archives/page/4/index.html","b4c96765d66ff9e7b0682e8e1127d064"],["E:/qinhao/hexo/public/archives/page/5/index.html","b4c96765d66ff9e7b0682e8e1127d064"],["E:/qinhao/hexo/public/archives/page/6/index.html","b4c96765d66ff9e7b0682e8e1127d064"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/C语言/index.html","e40f8e2059ec43160d601fe084d76304"],["E:/qinhao/hexo/public/categories/Java/index.html","7479e408f7e74a413ac5a694f28925a1"],["E:/qinhao/hexo/public/categories/Linux/index.html","fc93dc3d42deeebe5a230feaa6a2b8c3"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","3102807ba4833c7e7053e82a1ea87113"],["E:/qinhao/hexo/public/categories/Python/index.html","f07a7934a596362922fa3b840f324e51"],["E:/qinhao/hexo/public/categories/交换机/index.html","75e14beea545b3fadcf52ed9809a7a1a"],["E:/qinhao/hexo/public/categories/华为认证/index.html","a3c3b361e7ca48f7febb61529aa6643c"],["E:/qinhao/hexo/public/categories/小技巧/index.html","c3475e297b4527cc95c5e67ab24afd5c"],["E:/qinhao/hexo/public/categories/数据库/index.html","b57e2287226d2fd9f6f7cb81ea24778b"],["E:/qinhao/hexo/public/categories/服务器/index.html","ab232455a172c2b35500bb72363fba25"],["E:/qinhao/hexo/public/categories/网络安全/index.html","f5ca8a4be96d0d2d0e17847d20e298fe"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","2c4d58015866e4944dbe890644df34ff"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","35d5017a925c5871c79289063b317903"],["E:/qinhao/hexo/public/categories/软件破解/index.html","5e28b3179e83feecb95110492f90d4e4"],["E:/qinhao/hexo/public/categories/通信技术/index.html","d335408da0698cdcdeb27520e258533e"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","9ccfdacf1447676c18389e3686b40e34"],["E:/qinhao/hexo/public/category/index.html","476db8e25773f59f66d8b1c2c02aaf87"],["E:/qinhao/hexo/public/css/style.css","f5e2c67bc8af009b55f92e0cda779c39"],["E:/qinhao/hexo/public/donate/sponsor-page-master/drinks/README.html","294c3d61b11254b0c5f383b9de635f51"],["E:/qinhao/hexo/public/donate/sponsor-page-master/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/sponsor-page-master/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/sponsor-page-master/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/sponsor-page-master/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/sponsor-page-master/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/sponsor-page-master/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/sponsor-page-master/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/sponsor-page-master/drinks/index.html","b4ddd09f9a4740238ee7a2333090e565"],["E:/qinhao/hexo/public/donate/sponsor-page-master/drinks/script.js","abf77069ea0d234276c40d03750b46ee"],["E:/qinhao/hexo/public/donate/sponsor-page-master/drinks/style.css","c9c1bba44206b8d0bb8e819a193ac8e3"],["E:/qinhao/hexo/public/donate/sponsor-page-master/simple/README.html","63fb510ee042525ba0f25fcfa3922292"],["E:/qinhao/hexo/public/donate/sponsor-page-master/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/sponsor-page-master/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/sponsor-page-master/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/sponsor-page-master/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/sponsor-page-master/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/sponsor-page-master/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/sponsor-page-master/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/sponsor-page-master/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/sponsor-page-master/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/sponsor-page-master/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/sponsor-page-master/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/sponsor-page-master/simple/index.html","42a0912881a073a2a84c992cde0210cd"],["E:/qinhao/hexo/public/donate/sponsor-page-master/simple/script.js","cd690b7e5de20b9d9402de0bea5c59f5"],["E:/qinhao/hexo/public/donate/sponsor-page-master/simple/style.css","76df9dabe8673699f454266bff5009b0"],["E:/qinhao/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["E:/qinhao/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["E:/qinhao/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/friends/index.html","778b9fcb9d210bf4d5672c8ce2851211"],["E:/qinhao/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["E:/qinhao/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["E:/qinhao/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["E:/qinhao/hexo/public/index.html","899d0b3acc50fbcef728c35d3eba12d9"],["E:/qinhao/hexo/public/js/aplayer.js","a0a8f225cab4df42a6e0164b45d7641a"],["E:/qinhao/hexo/public/js/app.js","60b11cc8c0c85ca294cd3ff2e82096ad"],["E:/qinhao/hexo/public/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["E:/qinhao/hexo/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["E:/qinhao/hexo/public/mylist/index.html","5da26fa360be56a1c5402bcc536c4729"],["E:/qinhao/hexo/public/page/2/index.html","1a5d4740bb9c107fadc8ea229ec27a36"],["E:/qinhao/hexo/public/page/3/index.html","2fa0c4f00c7eea82c3d9b843c6a0a184"],["E:/qinhao/hexo/public/page/4/index.html","c5e63bc9abf4737b1a2cdbf51b7edde5"],["E:/qinhao/hexo/public/page/5/index.html","8b25ee168864f0dd38ec6dc37c9a7989"],["E:/qinhao/hexo/public/page/6/index.html","04f7b0e1cc0b0f260ad192bddc5a144c"],["E:/qinhao/hexo/public/sw-register.js","1d7dd3976599205991595a9f0e82a6f1"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/tags/IIS/index.html","30401293161430f56ff8007a3e69f866"],["E:/qinhao/hexo/public/tags/MySQL/index.html","56aa98ce52b57aa36dfa1fbe5eaac7f6"],["E:/qinhao/hexo/public/tags/Photoshop/index.html","b28c667af47ffc2a737dfb64fa767de8"],["E:/qinhao/hexo/public/tags/VPN/index.html","067862b26e8bdefc205a106c02a73aaa"],["E:/qinhao/hexo/public/tags/Web服务器/index.html","8b00d97462da1ba8aaa072ca13e88a9a"],["E:/qinhao/hexo/public/tags/index.html","5ad304f743aa29b32bd545ca0789261e"],["E:/qinhao/hexo/public/tags/交换机/index.html","d115304192091de83a4561fe461b69bb"],["E:/qinhao/hexo/public/tags/图像处理/index.html","029ae64be3e4cbf749349e959589f8db"],["E:/qinhao/hexo/public/tags/基础网络/index.html","623547346017a26f434fb9e0700df78f"],["E:/qinhao/hexo/public/tags/思科/index.html","3ae61e3a1e5bfdeeb867e7e542798383"],["E:/qinhao/hexo/public/tags/思科GRE/index.html","7d8ec8075c0ec7dfcf08a6dd17f6113b"],["E:/qinhao/hexo/public/tags/数据库/index.html","48cec39cde9d719bebde74e6a5377bb1"],["E:/qinhao/hexo/public/tags/无线技术/index.html","8e53500df1fc68014ee8896491773f41"],["E:/qinhao/hexo/public/tags/无线技术/page/2/index.html","a4e55c63bc5a7c94498f81145f16126b"],["E:/qinhao/hexo/public/tags/系统安装/index.html","42fd5e359618dafe78cc0a77ecf9528b"],["E:/qinhao/hexo/public/tags/网络安全/index.html","49bd094f75639307fdf98bdc3f23ca39"],["E:/qinhao/hexo/public/tags/网络技术/index.html","f9396c155cde0ddc9678e56dccdc13c1"],["E:/qinhao/hexo/public/tags/计算机三级/index.html","c0f21360e6891d9dcee6b91c1f2821bc"],["E:/qinhao/hexo/public/tags/路由器/index.html","1b5db8b64effe2054b496725dca7b0db"],["E:/qinhao/hexo/public/tags/软考/index.html","8e895468e69d8bd36d94489fd14dc274"],["E:/qinhao/hexo/public/tags/通信原理/index.html","404dd589309e13ff96433aaed67eb01b"],["E:/qinhao/hexo/public/tags/通信原理/page/2/index.html","c1a8ebe966dea1b599591a8c574bd600"],["E:/qinhao/hexo/public/tags/通信技术/index.html","4732cc02251c5947d637df44a4d00be5"],["E:/qinhao/hexo/public/tags/通信技术/page/2/index.html","5d482b8eab063291096653e58f183130"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







