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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","716e51f971387d7716466529da7e777c"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","34ee1ece0d9c7446fdbdb843308584e6"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","861d60335c94c4709ae8bd96f5f4be42"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","c946c33b3732c6e65a62b962fb9bf066"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","4bf749d1be75b51e88ef6beb2373365f"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","24e69190b34d9d3d0c5a8277bbef49cd"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","f4e3f0a2804d63993cc76af812f981f1"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","c9f9148d72c466e2aba1a9da44d563ba"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","255580bff355455fa5372245dc67ef26"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","3344d23efb1661c131dce8048f471ec9"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","a898b568ad9071ae8bf1589e496e265e"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","c2be13315e9196349d694abb21af7d61"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","9830ef7c09cd4df21b71b70a902beacb"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","db0c238ac68490f068922b3e0ac45047"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","854b4cec94fb4238a71ae58f3b32a913"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","a53054ce17ef69015976ff37f2f1c743"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","220d3ed32a36f773f54b87bc9e80258c"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","ee93db2ec6256a2dd01afab396e10692"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","d48a3c41a40b958ff1de5e792c0069b9"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","af2c0cc61dea7ce8d737d9e47b4cedcc"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","98e3305a7c133044ecfef5853cd092ab"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","6c3e1baf8e8dc21ac6d6311c18f856ba"],["E:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","5e1e376b4951329cade74ec10864447f"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","892daec63ae27f41068d044b1fb44881"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","eb5b71efed86b41fa10c88c19cb5dd51"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","248d3224e2b5ebd5445451ee5c48bc97"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","65a53ab54bba46fa8c99a8c29f51ec45"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","ab07f69133bae84d7e3b156c8347d151"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","b28679943ffa1f1ad34aefff8c8dbea9"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","7864e6a8f4f81ddfe4d391ba29f2fa3d"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","aeacd3458b8e1b685e62f834096e8416"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","2ffa39f02b5a9ea5baca0f42b8fe0dfc"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","52e36063198d0b8a8d97deafa84f6082"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","f97b629162c8a86bde39f74b972b2569"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","4920922f3c1bcec868d1c54705aa2d31"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","21920bf736d206197af6d1681ec3f71c"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","cee83a148eaf15bf06cf00296deaabf0"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","c24a75cd266d84eaf10cab9fb1e4f7e4"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","e110a04330d382bb087e131118bc441c"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","6554ca3ee63baa27500ceab2b464acd1"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","b75b903ddea684295ee96cf8bf233b40"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","cd452f9c7344e955b9f974fdd1b51de3"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","f188cf1785b29352ff8d665a14fa3206"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","499e18a99b9fcb7d2cced0506d6b4a64"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","7ca281c1066506bd714539118b247a5d"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","85ce21abc2e98c7c67a442ab15708c39"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","7027241db641f5b87e701caf51d8fcd0"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","4a86782a017e5a742786740bb070b158"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","eaaf489095fda230f2f1a159c1aa88a5"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","5e6c2dbfb7c4e050acf581655708c7a3"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","5069b7d2d4999ce03709034df313d393"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","8e3be6086c21c34b91fc0700ef65b0f1"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","e2e4dde11593526a3f44c2206d076af7"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","0be0c2cd8aca075757bc3ef5c9f3ec69"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","40c83f7cc8895dd96e45eefcd24f8dc1"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","80ed4adfcb64055cd9232fe52ffdeeea"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","a34ff14dc9e07a588aefbe2959cab5f8"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","4903f4842f8bd523a0f1b31ba16ea1d1"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","05381c84ef99c685f92925eecc1ad0c5"],["E:/qinhao/hexo/public/2021/03/01/c_1/index.html","da26b56bfad73915172b4e6ea2e47f78"],["E:/qinhao/hexo/public/2021/03/02/c_2/index.html","ce35915cb5ca6ecdc3e53b7377b99855"],["E:/qinhao/hexo/public/2021/03/03/c_3/index.html","2bb227f9405f335b726c12640ed64f27"],["E:/qinhao/hexo/public/2021/03/04/c_4/index.html","bbf3b21250b595e28c440aaa579e867b"],["E:/qinhao/hexo/public/2021/03/05/c_5/index.html","4e3cc9202d2829df9b407de0df05c320"],["E:/qinhao/hexo/public/2021/03/06/c_6/index.html","e609edc6530ec4c629fbe1b54d3633ca"],["E:/qinhao/hexo/public/2021/03/07/c_7/index.html","2c628990ec6988b697843b645f039bc8"],["E:/qinhao/hexo/public/2021/03/08/c_8/index.html","d932ad24b6b176c64e21bafe731c2021"],["E:/qinhao/hexo/public/2021/03/15/c_9/index.html","8c3ed9bd3a7b66ba68495a223d604f98"],["E:/qinhao/hexo/public/2021/03/16/c_10/index.html","56f9f456bce421dd53b85888897b7164"],["E:/qinhao/hexo/public/2021/03/17/c-11/index.html","713688c726167e5b31ae7e0555a2aa2b"],["E:/qinhao/hexo/public/2021/04/25/FileDownload/index.html","f588b2d79c1de44cc0f0ae3f790bb711"],["E:/qinhao/hexo/public/2021/04/25/PythonUdp/index.html","69fa3b3e96964cf7e33de450c27fcf7e"],["E:/qinhao/hexo/public/2021/04/25/TCP/index.html","85b31b355bfbd81f4c77e767ff2dc965"],["E:/qinhao/hexo/public/2021/04/25/TCP_client/index.html","08e0336ae244408e44b160ff786ca8de"],["E:/qinhao/hexo/public/2021/04/25/TCP_server/index.html","e0b2e0939a766f782a354c68313d4cd6"],["E:/qinhao/hexo/public/2021/05/14/gcc/index.html","ec7d309e72955f16786d0ac6ac5da871"],["E:/qinhao/hexo/public/ByteDanceVerify.html","9fae9db5ed78fe2a0d663336177334b3"],["E:/qinhao/hexo/public/about/index.html","225d6d328d08331c901acefcfcfe37df"],["E:/qinhao/hexo/public/archives/2020/02/index.html","577a135ad6053e77e59f555ac0b32d67"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","6ac623c1df3f76178c186c5ec903bfd8"],["E:/qinhao/hexo/public/archives/2020/03/index.html","16061b825c0704525fea4eae40a8f54b"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","47339d95a464083255d871cadbde7716"],["E:/qinhao/hexo/public/archives/2020/04/index.html","077312805b4e81e031835ef5d1f13d5d"],["E:/qinhao/hexo/public/archives/2020/05/index.html","ad389db74c1594af88464d71842de592"],["E:/qinhao/hexo/public/archives/2020/06/index.html","b4318db055deb8cc54578646812217bd"],["E:/qinhao/hexo/public/archives/2020/07/index.html","d89eacaec1265b5cb32ee20b5d2be6a8"],["E:/qinhao/hexo/public/archives/2020/08/index.html","eae2a664b6814545d10efb3630603163"],["E:/qinhao/hexo/public/archives/2020/10/index.html","cb5aa6730703727b6583d18904fda989"],["E:/qinhao/hexo/public/archives/2020/11/index.html","2d38e0e31883aa52143d481c0070bb52"],["E:/qinhao/hexo/public/archives/2020/index.html","614285760d6a82ce1aa943664e6e01c7"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","a6cb554a2c984492de646eb0b6188b1a"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","c0f543720e70e7492fa411c6ef30bcb3"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","b860fdfa847929527987b290d58c9685"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","ad12ff2cfb56e68ff64ebb463e6fe764"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","a5a2bd5f9a0fd94db0ea5e4a529cabaf"],["E:/qinhao/hexo/public/archives/2021/03/index.html","a711c42f7df822210c32dd26dddabdf9"],["E:/qinhao/hexo/public/archives/2021/03/page/2/index.html","f96cee902c1694fbb4462268d5ce7d84"],["E:/qinhao/hexo/public/archives/2021/04/index.html","cc294ec896145947614d24d286bbb2a3"],["E:/qinhao/hexo/public/archives/2021/05/index.html","1b372787bdd17d9cf2b9c525732ed727"],["E:/qinhao/hexo/public/archives/2021/index.html","ac5d607ea2fdcb151582dae459de149f"],["E:/qinhao/hexo/public/archives/2021/page/2/index.html","d4a139c167fb8f92c90a344d0aaf74a0"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","147ebcf60e1e4f11e7e9115a00216f74"],["E:/qinhao/hexo/public/archives/index.html","f9550e7c979776dcae27eb5336227215"],["E:/qinhao/hexo/public/archives/page/2/index.html","f9550e7c979776dcae27eb5336227215"],["E:/qinhao/hexo/public/archives/page/3/index.html","f9550e7c979776dcae27eb5336227215"],["E:/qinhao/hexo/public/archives/page/4/index.html","1c307aa23916f417d2f884863477310f"],["E:/qinhao/hexo/public/archives/page/5/index.html","f9550e7c979776dcae27eb5336227215"],["E:/qinhao/hexo/public/archives/page/6/index.html","0e1ce3e241ba139e68ec19a07161a703"],["E:/qinhao/hexo/public/archives/page/7/index.html","d7f66a2894914e829af5bce4c53c7d86"],["E:/qinhao/hexo/public/archives/page/8/index.html","0e1ce3e241ba139e68ec19a07161a703"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/C语言/index.html","fb498ddff80cab534997b732b571821c"],["E:/qinhao/hexo/public/categories/C语言/page/2/index.html","b8e54acab622ffec44326669170ab53d"],["E:/qinhao/hexo/public/categories/Java/index.html","f5503615585b3c4ac4b927706a826959"],["E:/qinhao/hexo/public/categories/Linux/index.html","860269b3352afb3d1216c22c2854c49e"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","cabf049edf9b1e3671b76f8cbb6fe9ed"],["E:/qinhao/hexo/public/categories/Python/index.html","6c1cebb5056234793d7e63fe691a7110"],["E:/qinhao/hexo/public/categories/Python/page/2/index.html","5208099d3adb9c9695fee572598356c4"],["E:/qinhao/hexo/public/categories/交换机/index.html","95d6b44ae38193144c0852394d8be610"],["E:/qinhao/hexo/public/categories/华为认证/index.html","6c33adc7532fa9916f04c7d8a3c48ba8"],["E:/qinhao/hexo/public/categories/小技巧/index.html","c141a23931e21e8bfc31775ca82208d9"],["E:/qinhao/hexo/public/categories/数据库/index.html","25e448b184b8c5e914a14ccc6df085b2"],["E:/qinhao/hexo/public/categories/服务器/index.html","d296537317b762cb93f2cf4e45ca1c27"],["E:/qinhao/hexo/public/categories/网络安全/index.html","3acc5f13aa329294c3fce7a6ba6263f0"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","8e8eb8eef5a084a360976fc70f6a4acd"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","c117ee427d49037481fee7ca94f6666c"],["E:/qinhao/hexo/public/categories/软件破解/index.html","94e0cec2b360fe8a89949de62a2f75d7"],["E:/qinhao/hexo/public/categories/通信技术/index.html","9715b5ad4569b650b9e17c3468a31bce"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","9e5e15025a074ae0fc900243deb22157"],["E:/qinhao/hexo/public/category/index.html","287114a5193d63621ec908168600f58d"],["E:/qinhao/hexo/public/css/style.css","69bbc27a8094ac09453486ddd0820200"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","076e3508d27092947ae39737e2488397"],["E:/qinhao/hexo/public/donate/drinks/script.js","1c65abbe04a6bff48000efbc6a2a0648"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","1edd6baa549da99da85451d92cde64f8"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["E:/qinhao/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["E:/qinhao/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/friends/index.html","f1b627502d83ca647d7ec7c462ca2c52"],["E:/qinhao/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["E:/qinhao/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["E:/qinhao/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["E:/qinhao/hexo/public/index.html","97e5ee2c5ae94a6669b5dd0eb51190f6"],["E:/qinhao/hexo/public/js/aplayer.js","a0a8f225cab4df42a6e0164b45d7641a"],["E:/qinhao/hexo/public/js/app.js","60b11cc8c0c85ca294cd3ff2e82096ad"],["E:/qinhao/hexo/public/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["E:/qinhao/hexo/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["E:/qinhao/hexo/public/mylist/index.html","c340dda23ca2f7c50f342fcfe1d5ef8a"],["E:/qinhao/hexo/public/page/2/index.html","f4219c57687954185e299175546beebd"],["E:/qinhao/hexo/public/page/3/index.html","cb777c7ce0bd755fc35a74488d845d80"],["E:/qinhao/hexo/public/page/4/index.html","78c46ff2462a7023fe0c7880d44ef3c1"],["E:/qinhao/hexo/public/page/5/index.html","cba42fbcaa57156921c882f8d59ef3ec"],["E:/qinhao/hexo/public/page/6/index.html","8d8e4f431211bcb590c3bb96bec25fe6"],["E:/qinhao/hexo/public/page/7/index.html","d209a8c10e951d621ba832c160e729e4"],["E:/qinhao/hexo/public/page/8/index.html","eaf0b00a095b47de8764cf86d4bf86a8"],["E:/qinhao/hexo/public/style.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/sw-register.js","a234c6006b16da40f70bdd1de6935d3e"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/tags/IIS/index.html","d91d80694316948ecb24cc6744ae28e0"],["E:/qinhao/hexo/public/tags/MySQL/index.html","37cc5352816edfb95c32aa22e92aa58b"],["E:/qinhao/hexo/public/tags/Photoshop/index.html","8b4618bb91ae8fd0781e4a49639247b5"],["E:/qinhao/hexo/public/tags/VPN/index.html","8cce42c205d148bf35ffa5314a74694c"],["E:/qinhao/hexo/public/tags/Web服务器/index.html","92efa6d472d068fc34961d2ace82f550"],["E:/qinhao/hexo/public/tags/index.html","5f51b1d2705349ec747a7558e05e5a9b"],["E:/qinhao/hexo/public/tags/交换机/index.html","6e2fa7746d3a02b3c39206183423ea68"],["E:/qinhao/hexo/public/tags/图像处理/index.html","53dcc9d39ec9c33784b694c183cf96ef"],["E:/qinhao/hexo/public/tags/基础网络/index.html","b38b8800a8cb07f5b53054982b54b995"],["E:/qinhao/hexo/public/tags/思科/index.html","11db0a2033302639ace46cd1c85a09cd"],["E:/qinhao/hexo/public/tags/思科GRE/index.html","4596e093f6baaf72abc65642c0c59acb"],["E:/qinhao/hexo/public/tags/数据库/index.html","d3467dcff1bb13e5858410006e0c5686"],["E:/qinhao/hexo/public/tags/无线技术/index.html","73d75630af51d4b1277293aa3bc8925e"],["E:/qinhao/hexo/public/tags/无线技术/page/2/index.html","22b5944be2c0b44bb15e7294c1f352b0"],["E:/qinhao/hexo/public/tags/系统安装/index.html","60dc729ff4de8fd533dfd4b6518c231e"],["E:/qinhao/hexo/public/tags/网络安全/index.html","f0f001103508349cefda07ec2ebbdb2a"],["E:/qinhao/hexo/public/tags/网络技术/index.html","2f3c353cf1e4930e600f6fe670947d06"],["E:/qinhao/hexo/public/tags/计算机三级/index.html","a7dee6cf8c889d8515889affb1de4689"],["E:/qinhao/hexo/public/tags/路由器/index.html","9c1bdbc9e37c01a86ead815cb42c470d"],["E:/qinhao/hexo/public/tags/软考/index.html","fdb78f5caa8f06acacd436b8c58c29d1"],["E:/qinhao/hexo/public/tags/通信原理/index.html","d17d69afbb4cd0d8844f6a409192a42d"],["E:/qinhao/hexo/public/tags/通信原理/page/2/index.html","eafb70b4280496029bf38feeb45cc0c3"],["E:/qinhao/hexo/public/tags/通信技术/index.html","342db68df1f2feba796f8ddbad745b93"],["E:/qinhao/hexo/public/tags/通信技术/page/2/index.html","3ca55c43b0a26e442050665e52d90322"]];
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







