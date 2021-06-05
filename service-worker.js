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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","1d9f7341836ae48eab0d5553eb5c0548"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","16d47e138895039208d382492dd42fb0"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","019c85e913971c4c1b0a71ececbaecdd"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","bce7d44331c9d5c218e8d1a0f1d9e5fd"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","80c76625d63f0188987d1e0725650714"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","399d904beffabb79104690256fff2e00"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","6a318728fe5de841a0c490d9c778dd5f"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","e0087c8f72ae807d2d4a9cdcb0fee444"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","21b06779e8a80f4b39c1bb9c74d0a533"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","71609bf9ed520e11735ecacfecc527e8"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","ad204e3a0cc4977c24a69f27cb24ab7e"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","1efc4ec714155985587b52f51b905c07"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","64fda31ca9853cce0db0b4d49493b88e"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","dc5d6181bcb89cfea856b35db2ee85d4"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","6ecf2508b017ed1d1a805eefe94e008f"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","b30db8dc26267e196b893e42fdf0070b"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","f8baad20661c2a13842e367757455004"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","14c923d27ea9bdc71c0faadb4458382f"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","1b95fe461f1ea813890cd8437fe683da"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","12754afdcb31c1bb77df7bba4b3d9303"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","1eeca67f4f690a6d391489e29ad8c280"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","923cfe83f273d1b654ac6cb01d778b69"],["E:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","5fa290d26f75e22b21a4cc42519d22eb"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","2756d1ed0e41423e567648822d93ca7e"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","6be7323add194a6dd168403aae8b2ffa"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","a745d0348bed9285bd719e3ee4ef7ef2"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","f22fae7a5d56432df97eb2bd5e2b5700"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","51d198e78848c1af9965ab286b29652f"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","245d9b0eaa1af6fbe7d71c29d6369c07"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","d420f9d84f99d4b299a204d06385eb2b"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","dfdd5bfb120fd1ae34d07cf0f46c8542"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","a9c77b8015a407219907c2b69e1a5bae"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","e945c67a3b8e7cbd81492d0cdf58ddcb"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","12b03f1224585a8c7d1aa72570322fd1"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","754665cfb086eab6fa2ab82e2a2c28b8"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","03d5c2c33014dd7b0e68c21f84d97501"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","d90a32a2dbe19eb5e95f106882cf9ca0"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","b59cacbef81f0fdde17578e3ff4d4541"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","ab07db24664a889a9cc7d541e37f4caa"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","c747beae8fc3e406198f8008684e109b"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","40341f056321abae1902190f40923dc7"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","3b94ae6fb1c550ae860941a5e6ce20a6"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","561b8b39259f6087504d55efe2cf12e7"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","f1e85993c1ead16f7921e567d47be4fb"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","738d6144c833d277cba2005e1ea308f7"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","51ace896c777474d034c9037f3a5884d"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","070cef65274d14e2e79a279478c4166b"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","5bee0a3d654d17a106fd81be48ac26d8"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","bd4145634e5d800c846a7a09e172b0c3"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","ddf379ac4d4ed74c4136a323d17106f2"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","55e950d11d6c14b56532768e853e8d3b"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","2a9a0bb5538b2a0b29af8d11f1e349d2"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","d8681547862041d3aced68e4df8ccc93"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","f3736f240c0aa5b2666623e46c014706"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","9d14997c658dc7a813acf03691334092"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","ae54666f4cebd4185f2accbeac3e9f62"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","6ea39f3d67d417376ec090e23ec55766"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","928aa0ee21dc7c2d414f7291410c6dd8"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","034f78cd88aa56dade1380e7aa56e700"],["E:/qinhao/hexo/public/2021/03/01/c_1/index.html","2f751e6b54afc37a5d15928ea77de271"],["E:/qinhao/hexo/public/2021/03/02/c_2/index.html","43f02a3b31f2fd3f79d7caf536daf2a4"],["E:/qinhao/hexo/public/2021/03/03/c_3/index.html","03f4bdbe947b5ef833e214a43237e325"],["E:/qinhao/hexo/public/2021/03/04/c_4/index.html","1fe73efb9b80b5140c0ececea759a155"],["E:/qinhao/hexo/public/2021/03/05/c_5/index.html","ce5e386f65f54fcb0ad8faa378aa5d8f"],["E:/qinhao/hexo/public/2021/03/06/c_6/index.html","da9b0d8299d244a694f29d67dc44c17b"],["E:/qinhao/hexo/public/2021/03/07/c_7/index.html","17044b4b090a4effaa764b0af32761d9"],["E:/qinhao/hexo/public/2021/03/08/c_8/index.html","bedaebdc2a14a952de038c955d30add2"],["E:/qinhao/hexo/public/2021/03/15/c_9/index.html","1c994259c73dd5bb363db8a2c67f4a90"],["E:/qinhao/hexo/public/2021/03/16/c_10/index.html","f79097fdbec4ad7cab9ec257390930f3"],["E:/qinhao/hexo/public/2021/03/17/c-11/index.html","1dd6cfd2fab7f1f014197a8bf8b10470"],["E:/qinhao/hexo/public/2021/04/25/FileDownload/index.html","9be5f0a5ef4ce007cdbaae33e1fc5fa6"],["E:/qinhao/hexo/public/2021/04/25/PythonUdp/index.html","1fcf75063cf4030a092df9beaf990148"],["E:/qinhao/hexo/public/2021/04/25/TCP/index.html","7071faf4c9b325f625753b1f35cb3507"],["E:/qinhao/hexo/public/2021/04/25/TCP_client/index.html","324daf9eb6d68fce5cff59d6adb55f0d"],["E:/qinhao/hexo/public/2021/04/25/TCP_server/index.html","e7b8e6f7f48445d1e9fec2ef76b9f8b5"],["E:/qinhao/hexo/public/2021/05/14/CPU_Register/index.html","78a96cae108f9cc8387378e112b07c34"],["E:/qinhao/hexo/public/2021/05/14/gcc/index.html","4dc97de58a511591ac4434ef4639280f"],["E:/qinhao/hexo/public/2021/05/20/Algorithm_1/index.html","c9aa23266b38a1545b5b5b932dd9dffe"],["E:/qinhao/hexo/public/2021/05/20/C_Programming_1/index.html","cd4d3ed610a90cde817dbda7577c8db8"],["E:/qinhao/hexo/public/2021/05/21/Base/index.html","56e32222889e5cea95bfb24d2246bf38"],["E:/qinhao/hexo/public/2021/05/22/memory_save_number/index.html","636d86d7ef0d76822915f2f5759eb925"],["E:/qinhao/hexo/public/ByteDanceVerify.html","9b37912beec93358d45d752520d80bac"],["E:/qinhao/hexo/public/about/index.html","012bea9451d7f7d0afd34f0c08506905"],["E:/qinhao/hexo/public/archives/2020/02/index.html","c9089daf531c5e100d058ebeb58b327e"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","4a10f8c4cd7eb85a869794ae7dcbf7fc"],["E:/qinhao/hexo/public/archives/2020/03/index.html","5c20bbca60f91a805d7186b5d24ad846"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","29e82a47a435c97beb3ba47ea0f9f063"],["E:/qinhao/hexo/public/archives/2020/04/index.html","634d3a6e55774639795cf86bc4eae196"],["E:/qinhao/hexo/public/archives/2020/05/index.html","b4eda7f5ad28928b4e2f09a32c309e64"],["E:/qinhao/hexo/public/archives/2020/06/index.html","3c18cf4d4dd75285aa7a87aab728f1da"],["E:/qinhao/hexo/public/archives/2020/07/index.html","5c7e58dbc0f2a3b32f7d1fc2be31e645"],["E:/qinhao/hexo/public/archives/2020/08/index.html","9e9b111d5e2dff44a54cc6254f21813b"],["E:/qinhao/hexo/public/archives/2020/10/index.html","87d3239be3f35ff5de3aa362c3adb769"],["E:/qinhao/hexo/public/archives/2020/11/index.html","945ca6767eaf19a935150350aa1109c2"],["E:/qinhao/hexo/public/archives/2020/index.html","b34c4cc2b4b769e3748faa7b0255ac66"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","f2b86969444a1b1e41b7bc98bf2be367"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","f3e43048dd85d801a0dfdb2c0a415e0a"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","b674abc1b08413b7718ec950d5398a1b"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","c8f7102249768290f02970e469fcb2de"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","ceab40c9b0c00d0449d21ea35a52bb3f"],["E:/qinhao/hexo/public/archives/2021/03/index.html","a14eee47b96ddfdd143020a1abd850bb"],["E:/qinhao/hexo/public/archives/2021/03/page/2/index.html","14918f4b835f0e1ea5623fe6a6f2b76a"],["E:/qinhao/hexo/public/archives/2021/04/index.html","c37a8003ff867101becf096ef666e437"],["E:/qinhao/hexo/public/archives/2021/05/index.html","572600a763847557c87c5f9c86e5bf45"],["E:/qinhao/hexo/public/archives/2021/index.html","307eab50f1cb7ce3ceccf958a3e4f322"],["E:/qinhao/hexo/public/archives/2021/page/2/index.html","99d62b0b3724ce2cd561e42355e763c7"],["E:/qinhao/hexo/public/archives/2021/page/3/index.html","20b02034340de90570a97a3ca856ef76"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","8a9b8909485dec382449e8cc4d78531a"],["E:/qinhao/hexo/public/archives/index.html","0015e28c09ed8250ef4b5746ccea534e"],["E:/qinhao/hexo/public/archives/page/2/index.html","0015e28c09ed8250ef4b5746ccea534e"],["E:/qinhao/hexo/public/archives/page/3/index.html","2e7f40c3dc4b340249b2d4472edd2172"],["E:/qinhao/hexo/public/archives/page/4/index.html","bd0524c46f35bf13a8ecb1505d1ef8f7"],["E:/qinhao/hexo/public/archives/page/5/index.html","0015e28c09ed8250ef4b5746ccea534e"],["E:/qinhao/hexo/public/archives/page/6/index.html","2bbfcfeb1600d9d9b657bb3e8e2170a9"],["E:/qinhao/hexo/public/archives/page/7/index.html","2bbfcfeb1600d9d9b657bb3e8e2170a9"],["E:/qinhao/hexo/public/archives/page/8/index.html","2bbfcfeb1600d9d9b657bb3e8e2170a9"],["E:/qinhao/hexo/public/archives/page/9/index.html","2bbfcfeb1600d9d9b657bb3e8e2170a9"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/C语言/index.html","9d905291dc35691d97448162150dd7d8"],["E:/qinhao/hexo/public/categories/C语言/page/2/index.html","60bd4a4a62284d4c27a2e74b8fc5783d"],["E:/qinhao/hexo/public/categories/Java/index.html","d736d7814621d016c0dc4ef521a11f66"],["E:/qinhao/hexo/public/categories/Linux/index.html","f48e1e6f81b9a80f6ed891efe6b32704"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","b03651d9c486008e626bfdc2af5c1f28"],["E:/qinhao/hexo/public/categories/Python/index.html","925e2ec6d40b0ab64009fb463f169f85"],["E:/qinhao/hexo/public/categories/Python/page/2/index.html","5bf255370b1383ffbf04c2c69156c9fe"],["E:/qinhao/hexo/public/categories/交换机/index.html","b553df07d131b060ed9229999e8f60d3"],["E:/qinhao/hexo/public/categories/华为认证/index.html","674abcfcb174b41cc4006f1d34348700"],["E:/qinhao/hexo/public/categories/小技巧/index.html","8f0711fc6f22b24c10a8c30c39bfad6e"],["E:/qinhao/hexo/public/categories/数据库/index.html","ba2ea113ba520b7b5d72cbf3a3fa6d27"],["E:/qinhao/hexo/public/categories/服务器/index.html","fd36752799eb9db9c2c0ee14e423a07a"],["E:/qinhao/hexo/public/categories/算法基础/index.html","1aff883d2b169dfd23e5e9842ad8789d"],["E:/qinhao/hexo/public/categories/网络安全/index.html","ca9595f449a7d5d2491f9aee911f8474"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","da24b09bcdbf62ce910ff78e24d3f6ba"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","b0a3efe083e641f019860fcead226c2f"],["E:/qinhao/hexo/public/categories/软件破解/index.html","8b2c81e4a3a85f3fcdd632fa0e1023a2"],["E:/qinhao/hexo/public/categories/通信技术/index.html","3ecd897f42aedaa472700c5f26ba77dc"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","4a0bb5843adf9f3cb588133d5627a490"],["E:/qinhao/hexo/public/category/index.html","fc9ff9f51ce0adea63b9e6eca7f50c71"],["E:/qinhao/hexo/public/css/style.css","69bbc27a8094ac09453486ddd0820200"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","076e3508d27092947ae39737e2488397"],["E:/qinhao/hexo/public/donate/drinks/script.js","1c65abbe04a6bff48000efbc6a2a0648"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","1edd6baa549da99da85451d92cde64f8"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["E:/qinhao/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["E:/qinhao/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/friends/index.html","cf9e94518b530d39e66dc792705bc746"],["E:/qinhao/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["E:/qinhao/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["E:/qinhao/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["E:/qinhao/hexo/public/index.html","cdd4874ea8652dedb0cf36292877a8a4"],["E:/qinhao/hexo/public/js/aplayer.js","a0a8f225cab4df42a6e0164b45d7641a"],["E:/qinhao/hexo/public/js/app.js","60b11cc8c0c85ca294cd3ff2e82096ad"],["E:/qinhao/hexo/public/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["E:/qinhao/hexo/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["E:/qinhao/hexo/public/mylist/index.html","05e406eec0b5936ed3aa0b0bede1247a"],["E:/qinhao/hexo/public/page/2/index.html","93bfeb5c9efdc3b4710e62a7e6a2e056"],["E:/qinhao/hexo/public/page/3/index.html","19270591c24ffcbb783edf7772763566"],["E:/qinhao/hexo/public/page/4/index.html","8740c6c4b48abaa9420ec24726e29a32"],["E:/qinhao/hexo/public/page/5/index.html","2152287824791174654df05167958eba"],["E:/qinhao/hexo/public/page/6/index.html","01fd9c64c245a3c1209cdd536dc5a4f5"],["E:/qinhao/hexo/public/page/7/index.html","054e40e01bc786a065c59e39c9c93254"],["E:/qinhao/hexo/public/page/8/index.html","7b8185c61d3b76c6b996eab9974030df"],["E:/qinhao/hexo/public/page/9/index.html","972b7b8143e6a6e8d8817d161d573147"],["E:/qinhao/hexo/public/style.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/sw-register.js","6ab718476957a5ef00f044809dba10f4"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/tags/IIS/index.html","533bccd15e9cfbdc47c992a2d5b2eae0"],["E:/qinhao/hexo/public/tags/MySQL/index.html","45ef20de48e297df0104df2d3a82b501"],["E:/qinhao/hexo/public/tags/Photoshop/index.html","cef89bda3dd6ec66ca12f5686c150fed"],["E:/qinhao/hexo/public/tags/VPN/index.html","1ad8684bd77fc7dd73b7c089ab3b0af6"],["E:/qinhao/hexo/public/tags/Web服务器/index.html","8e6b3956c7c968603e42bee967027979"],["E:/qinhao/hexo/public/tags/index.html","11065b1cc81d2ddc37618fd6e7b5ff2a"],["E:/qinhao/hexo/public/tags/交换机/index.html","1d9dcf843df37143763842170d90870c"],["E:/qinhao/hexo/public/tags/图像处理/index.html","87e32d73ca14165d60de2b14acecba05"],["E:/qinhao/hexo/public/tags/基础网络/index.html","e117585f7b2935fd7c76376ad617c18b"],["E:/qinhao/hexo/public/tags/思科/index.html","bb9a93a9c6502283943ff11cb1bb8f53"],["E:/qinhao/hexo/public/tags/思科GRE/index.html","09b1e9a53e093eec5bdcfaaf8acff885"],["E:/qinhao/hexo/public/tags/数据库/index.html","fa48cc98fbdfe15f61680bbafc658a11"],["E:/qinhao/hexo/public/tags/无线技术/index.html","9a84de8fbc0996bf5a3ab4ae385ed7c9"],["E:/qinhao/hexo/public/tags/无线技术/page/2/index.html","d3c773b318a119b226794323c9ad4350"],["E:/qinhao/hexo/public/tags/系统安装/index.html","b7a8d1c25796abc52683e211a89b74cf"],["E:/qinhao/hexo/public/tags/网络安全/index.html","0838a1a445847da4e48990cb1fdfc2d1"],["E:/qinhao/hexo/public/tags/网络技术/index.html","aaa48df22ff9b65aacb7528f56bd3379"],["E:/qinhao/hexo/public/tags/计算机三级/index.html","ca5d5622db554ba5cbcc98afa0047013"],["E:/qinhao/hexo/public/tags/路由器/index.html","0564a8b305161dcf3367fde6fa1d4958"],["E:/qinhao/hexo/public/tags/软考/index.html","1f9f9b6843f7bec46799374a12a0e3a2"],["E:/qinhao/hexo/public/tags/通信原理/index.html","9d400a169a1ec79a35fd1faa456c0889"],["E:/qinhao/hexo/public/tags/通信原理/page/2/index.html","aafef38c09dfcce8d62dc1092d8994e9"],["E:/qinhao/hexo/public/tags/通信技术/index.html","54592e35a1b058942a1ddf46759f8b90"],["E:/qinhao/hexo/public/tags/通信技术/page/2/index.html","3c7a73281ab3d9146f1274dc278e19ce"]];
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







