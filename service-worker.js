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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","0429e9e9b1268d3730336c4bfb5b44e8"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","c8e00ccc7352c1bf83302bf6cfd39176"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","5641baf2b17313a49fe691687bcbb825"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","48fd575b60d97378776f2ffbf0aae72a"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","b5c24888bef8f0072143402504d8bb69"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","54bec9ce27dcd9d75691c7f21da08739"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","1fc9bf25dc551e24e4c544e5ac77ccd1"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","b3bbb19ea1dc699f0ec2c2d19c23ea80"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","b5f928d82895720bd527b2de81c703c1"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","691bf9371ca5d6c40cf30d336d750e55"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","a07007d8c9518ba41f5ce37a46289bb4"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","12630f42e65e3b564c6f3d160670e2c3"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","0c317bdb475292e983575576f9761366"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","45c8157586cfa6fffd26eb710b1b0db9"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","bb374fa389e65deba67ea8844bab01af"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","036a7068639911ae267a42f5db69bcec"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","5b839fef20a8b14df3fa9a5e1571dfab"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","4041474ee3d5a5f05da5a2e353229107"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","c229a9dcecb0294b4a1c4431c0baced9"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","afd7e7abf5e184099f770e9df8c34b85"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","cc01092f54b29c5b64ac1936467bc3ff"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","03435dfb851ce7b87bd5db8b98a80219"],["E:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","f4f17c519dd9f73d2aaf54b9fa85dbbe"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","0c07a408ae77409b1cd723f37230d6fb"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","c0bc31b5ec1a6bd59775b468846fc72d"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","c4274d5f1bf12e1f585312a63af9c164"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","8ce9df7eb980657efeb0dc6a525c33af"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","f05870fa09db69e7cec9ad1a2fccd8d1"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","77964fa01f87f18ef2529edbfcbb6b91"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","9253a682b5f8d1f26eced87283f01c7b"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","577ecd3b853f0e496dbbd5d908681c75"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","a7ad05c28a4e7bf8f5bd6ff56219493f"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","d269b0cb662f52b046987276f567ce9f"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","7df7ae70579a7d203c68ccd68dc756db"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","4b87e5c8305cf26e2a0dd4504aabdea7"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","742e7215dce7d8b1a06741e66363a376"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","daaa030d833a0875319b4d380b2f595a"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","1db6d42dcd7378a76be390f9e85cd83b"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","8a29a233ace72c6f165d1e78d5c36b12"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","81b464f12680967071441a503befd3bf"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","bc14902e8827a466d5318078b4ed48fd"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","7e53f4fd5309fbe6e3ba71c92c45535b"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","06b4ee3ae5de34b6fa5b2e26741d481f"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","6a21fa4c261e2d20ea7228340b813baa"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","2e2262155a89ce7983c3841f5393aa12"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","eeff138ea46a2cdb7ec0b3b450f7be18"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","2d996ca7809623e7edcb12f9e4a615d5"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","4b9eea47feeca1cc137846b613f87826"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","570b2208b08b156e6221e0b11619017c"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","9a8138e6ae05297ba6f907b540bbd645"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","5f598b3c2b4d8876644440a83acef4e9"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","600fd86ce519baac9a633f228e9306a6"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","4081d552252162fd37bcd3941a999f36"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","6aff646364b946ed570ed12a2d999ab1"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","bda18c901486280f2f670584c7479bd3"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","d05cd35e271b0339a3f84ebf8db4668e"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","7002097e9ce9a553a2ed063c486138e7"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","74ac740be071a65b140615771673b5d9"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","80db6ae86429334c83e5838d67d47dab"],["E:/qinhao/hexo/public/2021/03/01/c_1/index.html","0e7f8bc3503122b5fb7625427365c7d2"],["E:/qinhao/hexo/public/2021/03/02/c_2/index.html","fb3c2c2eb536ad42bd7adee0c0707bbf"],["E:/qinhao/hexo/public/2021/03/03/c_3/index.html","5804d92ba71d4bd3c81a0a86cc84570d"],["E:/qinhao/hexo/public/2021/03/04/c_4/index.html","d93eda35b13a12a61d8a41e4f18fd0cd"],["E:/qinhao/hexo/public/2021/03/05/c_5/index.html","7a82f136691cf2336936bab075cde962"],["E:/qinhao/hexo/public/2021/03/06/c_6/index.html","4960301add6091c2b2b294225d717b88"],["E:/qinhao/hexo/public/2021/03/07/c_7/index.html","41d4cd66c50a9d41e5df00d9cfbc3851"],["E:/qinhao/hexo/public/2021/03/08/c_8/index.html","23149d8ff212005d9eff2043fb06ad87"],["E:/qinhao/hexo/public/2021/03/15/c_9/index.html","e6e3c7b347ce2ab8fa38b5e3e8d2611f"],["E:/qinhao/hexo/public/2021/03/16/c_10/index.html","ecc58495f9250c870bf6e4e2d0d79aff"],["E:/qinhao/hexo/public/2021/03/17/c-11/index.html","726b401db1105239ec63b8e0eb57298f"],["E:/qinhao/hexo/public/2021/04/25/FileDownload/index.html","9ef7b33acb4a9e188ebd965dd9be743d"],["E:/qinhao/hexo/public/2021/04/25/PythonUdp/index.html","8d7136f0893b4b7909da31440c927c69"],["E:/qinhao/hexo/public/2021/04/25/TCP/index.html","62cea3d257927298855864f532c9bfc8"],["E:/qinhao/hexo/public/2021/04/25/TCP_client/index.html","5460a5a3585c709507643fd7426ef29d"],["E:/qinhao/hexo/public/2021/04/25/TCP_server/index.html","26d64c11365331cce00cd3b75d5cbff7"],["E:/qinhao/hexo/public/2021/05/14/CPU_Register/index.html","c890a7f93061c2eba8b517d92a0f4994"],["E:/qinhao/hexo/public/2021/05/14/gcc/index.html","5537a1880ad6f1d75d93b28b3edb0cb1"],["E:/qinhao/hexo/public/2021/05/20/Algorithm_1/index.html","0388d4e22bb007d9d3c0f071f383786d"],["E:/qinhao/hexo/public/2021/05/20/C_Programming_1/index.html","3b6c3db55ee76cf30d7a79412f30030a"],["E:/qinhao/hexo/public/ByteDanceVerify.html","37b3a3c4af587074702acc69dcca2aff"],["E:/qinhao/hexo/public/about/index.html","4a2897138cc441755cea1db777a0ca62"],["E:/qinhao/hexo/public/archives/2020/02/index.html","00cd75cb81abd13a994f64cd7991815b"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","1d4d52890112b7f917fb04effd795f2f"],["E:/qinhao/hexo/public/archives/2020/03/index.html","67c4b9b3e00636a271c507977f66f734"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","161a16f42ba796e938fcc30f527ee568"],["E:/qinhao/hexo/public/archives/2020/04/index.html","df3d15faa67a6fefb654bc46fc587380"],["E:/qinhao/hexo/public/archives/2020/05/index.html","7a15d039c75a6f577c5728cde2e95300"],["E:/qinhao/hexo/public/archives/2020/06/index.html","76494114b4212216f54ce88fb2d4f7a0"],["E:/qinhao/hexo/public/archives/2020/07/index.html","7ef5862c7d1b9315af17b00588c7df97"],["E:/qinhao/hexo/public/archives/2020/08/index.html","aaf646976dfd63d548f8456c69b319c8"],["E:/qinhao/hexo/public/archives/2020/10/index.html","b1be5205f7a4bd91b24844fea2582891"],["E:/qinhao/hexo/public/archives/2020/11/index.html","0643a3e0f0fef7a87299effb34b787ad"],["E:/qinhao/hexo/public/archives/2020/index.html","be98fa461c2a057a9457fc88ba560ed5"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","b93843402b06c709fc9cf38d785c60b3"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","f1a6c4dcabbe69d2dd80bdcfdab4b133"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","b2d6988d7643914a65557d65ea20f237"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","a61f25aadee276ad91281f01bd4b4d5f"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","1463687aae4081e94d2250c9756f066d"],["E:/qinhao/hexo/public/archives/2021/03/index.html","3f31399f2c80d34062ede9d42048d0fb"],["E:/qinhao/hexo/public/archives/2021/03/page/2/index.html","16ec7d0f8c76de771cc12363999a5092"],["E:/qinhao/hexo/public/archives/2021/04/index.html","674537abb40cb3ada13e2f9c2a5c028b"],["E:/qinhao/hexo/public/archives/2021/05/index.html","b9d2e9385263d1cd90a8b758939efaf2"],["E:/qinhao/hexo/public/archives/2021/index.html","f96f5122da1b7df2deb6750a28074c3e"],["E:/qinhao/hexo/public/archives/2021/page/2/index.html","120ef5f902540742f0e1d6154e687093"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","b3c6a1b955df66cb2e4314155d18d076"],["E:/qinhao/hexo/public/archives/index.html","14e18b1d9115682deae92965ea28b432"],["E:/qinhao/hexo/public/archives/page/2/index.html","14e18b1d9115682deae92965ea28b432"],["E:/qinhao/hexo/public/archives/page/3/index.html","14e18b1d9115682deae92965ea28b432"],["E:/qinhao/hexo/public/archives/page/4/index.html","2f5bbb7480147823147b11dd458f931a"],["E:/qinhao/hexo/public/archives/page/5/index.html","14e18b1d9115682deae92965ea28b432"],["E:/qinhao/hexo/public/archives/page/6/index.html","d0b9d1d4cb31ac8efa2d564771346983"],["E:/qinhao/hexo/public/archives/page/7/index.html","2f5bbb7480147823147b11dd458f931a"],["E:/qinhao/hexo/public/archives/page/8/index.html","d0b9d1d4cb31ac8efa2d564771346983"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/C语言/index.html","5b428e7e154d8107da90279cf2f359b8"],["E:/qinhao/hexo/public/categories/C语言/page/2/index.html","1cf94fa362749361c220cee9a2fa860e"],["E:/qinhao/hexo/public/categories/Java/index.html","1ddce46d6268fae2dc19354b6ac5ce6b"],["E:/qinhao/hexo/public/categories/Linux/index.html","d55726050af28c67a31446e37e0cd20e"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","1d740e6bb009f20bb4cb1357c34e0a29"],["E:/qinhao/hexo/public/categories/Python/index.html","e1efba5cdcceebd45dfe8695352b4b67"],["E:/qinhao/hexo/public/categories/Python/page/2/index.html","979ce4692883e4eac1c828cf3c96ba91"],["E:/qinhao/hexo/public/categories/交换机/index.html","7ea8eafa86e5cb39934acf6fa77f5de0"],["E:/qinhao/hexo/public/categories/华为认证/index.html","2dd2c706dfce619fe11bb98d4bc64f55"],["E:/qinhao/hexo/public/categories/小技巧/index.html","185f59ed861450ab399a251cc799336a"],["E:/qinhao/hexo/public/categories/数据库/index.html","811ef2e05114da558a828be54e6c120d"],["E:/qinhao/hexo/public/categories/服务器/index.html","c94e50a7895ff7936d97139394df5230"],["E:/qinhao/hexo/public/categories/算法基础/index.html","87c13df824f3acfa707a7e0c8cb25884"],["E:/qinhao/hexo/public/categories/网络安全/index.html","ca6774ad8e0bab226a70ca0804691dd1"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","e27aadbbb6abd7aa3a9669513b16eba7"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","910c0453f26d6893a7f9e487562eb190"],["E:/qinhao/hexo/public/categories/软件破解/index.html","9a8c816c60898705211183a2e8453239"],["E:/qinhao/hexo/public/categories/通信技术/index.html","75a0fcf92be6bfd1189ceb35503bc836"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","e4969426e50a7c3551c5539f8e45a0f2"],["E:/qinhao/hexo/public/category/index.html","7de999e4584d5ce0570e0dda24b45f4b"],["E:/qinhao/hexo/public/css/style.css","69bbc27a8094ac09453486ddd0820200"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","076e3508d27092947ae39737e2488397"],["E:/qinhao/hexo/public/donate/drinks/script.js","1c65abbe04a6bff48000efbc6a2a0648"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","1edd6baa549da99da85451d92cde64f8"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["E:/qinhao/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["E:/qinhao/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/friends/index.html","1ada5167ed63b68a79f8fc79c4c5841d"],["E:/qinhao/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["E:/qinhao/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["E:/qinhao/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["E:/qinhao/hexo/public/index.html","275747938c8242092e98145153439d20"],["E:/qinhao/hexo/public/js/aplayer.js","a0a8f225cab4df42a6e0164b45d7641a"],["E:/qinhao/hexo/public/js/app.js","60b11cc8c0c85ca294cd3ff2e82096ad"],["E:/qinhao/hexo/public/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["E:/qinhao/hexo/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["E:/qinhao/hexo/public/mylist/index.html","ccf11ffdffe408150e4dc0b48d975283"],["E:/qinhao/hexo/public/page/2/index.html","764e22e80799d4cd6376716b05c6b33f"],["E:/qinhao/hexo/public/page/3/index.html","f0d70d0ea9924e8b10662c4f4525f391"],["E:/qinhao/hexo/public/page/4/index.html","da3aa0249a6bd71e8413c91129278c09"],["E:/qinhao/hexo/public/page/5/index.html","67820479fb4ec54c112978f781b2236f"],["E:/qinhao/hexo/public/page/6/index.html","9eda758c4ab7a84a0dc1553712a8a185"],["E:/qinhao/hexo/public/page/7/index.html","c883b76b3b49528ca381b82f34942352"],["E:/qinhao/hexo/public/page/8/index.html","51c93048d989de3ccf283228868d4c4e"],["E:/qinhao/hexo/public/style.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/sw-register.js","09d067d5c048e8c7b585106683ae5c14"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/tags/IIS/index.html","d269f3f257bdde1bd4727a45737f9eaf"],["E:/qinhao/hexo/public/tags/MySQL/index.html","e71659575c7c67a80de119c413231d7f"],["E:/qinhao/hexo/public/tags/Photoshop/index.html","eb9302d36e26397f0c5e5c867dcdf6bf"],["E:/qinhao/hexo/public/tags/VPN/index.html","b04c9e3a3f8f6d70aefb426cdebe6424"],["E:/qinhao/hexo/public/tags/Web服务器/index.html","613af41f99df9ee5ab5bf02d7152626a"],["E:/qinhao/hexo/public/tags/index.html","e458df0ff02d548cc2a97a2747cc4c89"],["E:/qinhao/hexo/public/tags/交换机/index.html","53cc72dd83d4cfa29e5592bdea150d86"],["E:/qinhao/hexo/public/tags/图像处理/index.html","9c3312c74ab45f256b2f7599b0a45f1c"],["E:/qinhao/hexo/public/tags/基础网络/index.html","3e2f5bc89cf904940d856093236ef176"],["E:/qinhao/hexo/public/tags/思科/index.html","98773de180dfe4a3684d28026c774569"],["E:/qinhao/hexo/public/tags/思科GRE/index.html","4ead4ef7a18ea20607cf6063d2baf728"],["E:/qinhao/hexo/public/tags/数据库/index.html","2b43bb018a17b1da5db5649e3daf3a48"],["E:/qinhao/hexo/public/tags/无线技术/index.html","fc276ef84121a2dfae0b742fee9d1c67"],["E:/qinhao/hexo/public/tags/无线技术/page/2/index.html","caef9e72d12bb0d2542f6c4cfa64ec7c"],["E:/qinhao/hexo/public/tags/系统安装/index.html","94d59181004272b8200358b3eb319c42"],["E:/qinhao/hexo/public/tags/网络安全/index.html","729e4e6b6ff221146a7f7e4e5397f55b"],["E:/qinhao/hexo/public/tags/网络技术/index.html","63c0341a7361b7f532c18ef6c8934188"],["E:/qinhao/hexo/public/tags/计算机三级/index.html","81854af9991e8ac168387fa942f69a85"],["E:/qinhao/hexo/public/tags/路由器/index.html","f81d96e0737bf44824142201db145bc4"],["E:/qinhao/hexo/public/tags/软考/index.html","c50d8bbfda31e76c13115c49c97e7549"],["E:/qinhao/hexo/public/tags/通信原理/index.html","8b65fdaf50b7d2bfe828fcc37ccaf51d"],["E:/qinhao/hexo/public/tags/通信原理/page/2/index.html","01096f73211ffbcaf01d5cacaab14da1"],["E:/qinhao/hexo/public/tags/通信技术/index.html","652614b12d559e31504120cfbf13f51f"],["E:/qinhao/hexo/public/tags/通信技术/page/2/index.html","958e436f5539326ca4ff62eae4131ced"]];
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







