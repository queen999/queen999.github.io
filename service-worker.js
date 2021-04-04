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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","78edfcd5957a0cd92e3e933a97156636"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","bd7b65ce5e2051c6f52ca6c455317d3d"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","1d1fde7ffb3baabc783e1b84ff902cb1"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","4dc70df8de82259a995561d9f2f9ef6e"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","ab43c9c0aa52d2217fd119205b1b93df"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","e40a56ea19cfe627bc27a2225e67baea"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","f10562868f37140ec76e3af3deaf0d47"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","3eb59439ac9fc574f4262ce379b4e330"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","254020f65a34e51b22327ef94b909664"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","c05d9604168f8a504a8bfcf410a873ef"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","bf0e523b14d4802f627639f9a1e5f32b"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","6e93852893cbf001d5e2e58fd8a60207"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","b7c89733bb0060533fbec0c989ba3b5f"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","b8e482aff9444876d61772c9c337c8bf"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","60a6a5ffb8f5f73ebe9de5e5b04fc055"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","4e788e4fb2867f86153c64ea01ead73d"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","e72ce7523f706194c82913ae8f882fa4"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","40809b9735b3bc7da1d23f9adf11f697"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","c32cc0bf29be9862639ff8d1b3fe49ce"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","623297c18287547c248e44786731eff8"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","89a01e73ec99c4dc77abec0613034d96"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","3b45dd20ad319c8b710fc8702a2bfe2f"],["E:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","f5d4961901d34a78dd96cd4f9a2a7a9c"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","2d8c63856ea1a4b3203d1b9ded2471fa"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","dbdd33ba930627e0955361cc56dd8aa3"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","e067e84c9df666243843e6b318ac6713"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","cfbc6b79ed87b5f31b9ec6d1c22eb80f"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","78c4d76e143f3b63fd023ec8fbe261e8"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","68d060cfee20b29317a05bd80f6d145b"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","43c710d2a945a6697a324919fe81abc0"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","aa7f91798e0e96bd9e469128e9099441"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","c5b90f3a510c5c99f6b34b7d33937457"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","6b370b94ee313c1866a186dd37d48dac"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","7262ed8f37d175179dfafa57bb9d338f"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","fc7e52d24933b47fe4e8e22d84a6f53a"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","53fd1115baccfd045a257567935dd860"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","8186f81715b133a7aff4edca3d6a5a7d"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","fd229b1b73aae04e5277d03b5dc01829"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","f77d1f69ccc2201903d15af0c9af402f"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","0b29820453cafdb115f14446836645e3"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","218fd1a5000f01598801b03074f257e3"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","cd13a73bb1e669f770a29d9c41f767d3"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","d4670c2785514d12f2477feee0a7b283"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","0d6aa01a7e0f2ab41511193e93893fa2"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","333bfb94aeb5ab2a74677c20906862b8"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","4c21fab23cfb50cbaaef5bde3dd73e4b"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","07d812552d54f01a81134ffe012273f3"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","05f573f22b447216e1785cc10191f3ef"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","b9534c4020b23a9740b611a5ea95b2eb"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","d7522e492c106b5ec067643aaaa204e8"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","65590887719c994e30971b7d4ee22202"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","6411f45a678aaa1624f7c7640665d07b"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","c4ce07346d0aedcef143e97c56fba37a"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","b0d4555f6833ad023d655a8196aab7e8"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","fb595ef2521e90a9daca64baefaa658e"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","6f977545abc997874595229c0fab3f00"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","e37e77427ac5415192f588130e10b136"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","559ef4d15c770ff206c2730ad374c335"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","4b7d2f44251bce95c2290e89f8468e9b"],["E:/qinhao/hexo/public/2021/03/01/c_1/index.html","93afa4e6cc41bb3b8e3739b82f988abc"],["E:/qinhao/hexo/public/2021/03/02/c_2/index.html","788c3075b0a683dc72d6f5570bf35d4d"],["E:/qinhao/hexo/public/2021/03/03/c_3/index.html","3a476bb327c2002a3fbe40f61d4ba46f"],["E:/qinhao/hexo/public/2021/03/04/c_4/index.html","042eee7a2cb12b587389789d7e485889"],["E:/qinhao/hexo/public/2021/03/05/c_5/index.html","6cf8d46ad7a92a31ecd02ca2a92711c7"],["E:/qinhao/hexo/public/2021/03/06/c_6/index.html","044d3da0f3adbfc51b146626c809842a"],["E:/qinhao/hexo/public/2021/03/07/c_7/index.html","66a0d3130133d4e323d3e70e5c909054"],["E:/qinhao/hexo/public/2021/03/08/c_8/index.html","af1a315a778ecf45a0fe17823d201b98"],["E:/qinhao/hexo/public/2021/03/15/c_9/index.html","cd9fc86561989356ba950590a396ad79"],["E:/qinhao/hexo/public/2021/03/16/c_10/index.html","1c4f517cc34c315efe99d59743b454d9"],["E:/qinhao/hexo/public/2021/03/17/c-11/index.html","543920fcdfa1cef9df162f220c048b6d"],["E:/qinhao/hexo/public/ByteDanceVerify.html","fa02418db7760b912f6dda212cdcdfc0"],["E:/qinhao/hexo/public/about/index.html","53effab320192abfe04663829703c6bc"],["E:/qinhao/hexo/public/archives/2020/02/index.html","8b2ccf56eb83ce190f5ed0770de98f13"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","9e27122a4fb3eff005fc3e0109ec0785"],["E:/qinhao/hexo/public/archives/2020/03/index.html","f6e8096bb4f1646fa1ee685eb361c011"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","4c6a5a86bb230aa6339a94e28858fbe1"],["E:/qinhao/hexo/public/archives/2020/04/index.html","756318f78e92a659c61a6ed228e835da"],["E:/qinhao/hexo/public/archives/2020/05/index.html","2721153f8d8980652b8faab8b57e78b1"],["E:/qinhao/hexo/public/archives/2020/06/index.html","e1bc3c0775f5864cb9a5d9b589543fe3"],["E:/qinhao/hexo/public/archives/2020/07/index.html","b1aa7b136bb5128a55185e21a5896bf5"],["E:/qinhao/hexo/public/archives/2020/08/index.html","78b348385f5eeb63a1cca81613cbed48"],["E:/qinhao/hexo/public/archives/2020/10/index.html","dbed3fd224c865a6e3153d88032bba35"],["E:/qinhao/hexo/public/archives/2020/11/index.html","9f4862126ef43ad3270fca22a55d9994"],["E:/qinhao/hexo/public/archives/2020/index.html","1de6ee39b21b57a22cf5efc35bf1704f"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","6e1a245d7906e4e17207be95d8168d92"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","b17ac2ee6912fd760d183059d0d931d8"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","5dbb1713a9ef56c31fe48e19c34b8b77"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","9c1255cac207c28862f255324548e1b7"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","b71fa794c7bfae4d9c7d1551c54ea644"],["E:/qinhao/hexo/public/archives/2021/03/index.html","4bf8628542c3bf1430e923cca1099d6c"],["E:/qinhao/hexo/public/archives/2021/03/page/2/index.html","1a4ba733a0eb61d53b1abcf061434567"],["E:/qinhao/hexo/public/archives/2021/index.html","10ce4550d703432eb26dc9b0225d8305"],["E:/qinhao/hexo/public/archives/2021/page/2/index.html","dc892c184b3bbb11bbc2348f1c399dc7"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","cfb0ed578ad221b8392c030c8bff3972"],["E:/qinhao/hexo/public/archives/index.html","41280889a6b99516bfeb0a9263615a47"],["E:/qinhao/hexo/public/archives/page/2/index.html","41280889a6b99516bfeb0a9263615a47"],["E:/qinhao/hexo/public/archives/page/3/index.html","1574b219b21a121f2a48797365689e0f"],["E:/qinhao/hexo/public/archives/page/4/index.html","d21609b086d241fa4a996348fbc4454c"],["E:/qinhao/hexo/public/archives/page/5/index.html","1574b219b21a121f2a48797365689e0f"],["E:/qinhao/hexo/public/archives/page/6/index.html","1574b219b21a121f2a48797365689e0f"],["E:/qinhao/hexo/public/archives/page/7/index.html","1574b219b21a121f2a48797365689e0f"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/C语言/index.html","cd8c23bce26973aa2b5a257924306faf"],["E:/qinhao/hexo/public/categories/C语言/page/2/index.html","aa1f96df20126dce9149313fed4df848"],["E:/qinhao/hexo/public/categories/Java/index.html","6251bacdb7f229a8509e4dc88b5b56f9"],["E:/qinhao/hexo/public/categories/Linux/index.html","385fa2a80600aec75c6f8a9371da8864"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","eddea9c0035707f4ed197ab058b56602"],["E:/qinhao/hexo/public/categories/Python/index.html","c1cdc34b369a3d865229414f9155fe75"],["E:/qinhao/hexo/public/categories/交换机/index.html","d3429c6a9b59d6ea24353ffee5a57280"],["E:/qinhao/hexo/public/categories/华为认证/index.html","dd612623b50402aac2cabad515833745"],["E:/qinhao/hexo/public/categories/小技巧/index.html","aeb727560a326b28f4897ff82d085515"],["E:/qinhao/hexo/public/categories/数据库/index.html","c61fdcbfcb456f784184238b738296a6"],["E:/qinhao/hexo/public/categories/服务器/index.html","756ff2b8c06ca821069dd47d8b59adad"],["E:/qinhao/hexo/public/categories/网络安全/index.html","0cd168336c9716868f8bc043f690b527"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","af5a2e15d9c91df962dd1dee1a063bd8"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","7307a16a24680cb13c46008b011036a1"],["E:/qinhao/hexo/public/categories/软件破解/index.html","443afe91b692ccec81135d86c6489504"],["E:/qinhao/hexo/public/categories/通信技术/index.html","79a6e8918c2017654cde3036ccf17965"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","f0b75585c7293e23bccb15ced65d91fa"],["E:/qinhao/hexo/public/category/index.html","76bea1eed552e90f7b3e79f9009a982c"],["E:/qinhao/hexo/public/css/style.css","69bbc27a8094ac09453486ddd0820200"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","076e3508d27092947ae39737e2488397"],["E:/qinhao/hexo/public/donate/drinks/script.js","1c65abbe04a6bff48000efbc6a2a0648"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","1edd6baa549da99da85451d92cde64f8"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["E:/qinhao/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["E:/qinhao/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/friends/index.html","07e222de8f41fd1be29c184276e6d5b1"],["E:/qinhao/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["E:/qinhao/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["E:/qinhao/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["E:/qinhao/hexo/public/index.html","fcd2f2410ba57ddadb9f4635a83ffa48"],["E:/qinhao/hexo/public/js/aplayer.js","a0a8f225cab4df42a6e0164b45d7641a"],["E:/qinhao/hexo/public/js/app.js","60b11cc8c0c85ca294cd3ff2e82096ad"],["E:/qinhao/hexo/public/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["E:/qinhao/hexo/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["E:/qinhao/hexo/public/mylist/index.html","42140bfa70f03e0c896e2b4e5fefe74a"],["E:/qinhao/hexo/public/page/2/index.html","54e01b760db476b8911a2a6dd4e15589"],["E:/qinhao/hexo/public/page/3/index.html","fd1104f9008d159f20cb4a69a24537ff"],["E:/qinhao/hexo/public/page/4/index.html","b00b73e478a60e97545a64468b12dbce"],["E:/qinhao/hexo/public/page/5/index.html","5a211cb5ef3714178012692c0a1a36ed"],["E:/qinhao/hexo/public/page/6/index.html","ace4956358d6836c1a73e46d39c682f4"],["E:/qinhao/hexo/public/page/7/index.html","53cd9905462da27a707be645a85f7723"],["E:/qinhao/hexo/public/style.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/sw-register.js","05c87a6e81c0e08bcf26e5de501f9ce4"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/tags/IIS/index.html","9168bf2c00082f76b32cd69556f9c994"],["E:/qinhao/hexo/public/tags/MySQL/index.html","a67c3fd1a460d100e37d633f0ac9e465"],["E:/qinhao/hexo/public/tags/Photoshop/index.html","78658897a7d966e9885b43a6aada841b"],["E:/qinhao/hexo/public/tags/VPN/index.html","21cfd0d911a8d1e21e45332bb22f9b2a"],["E:/qinhao/hexo/public/tags/Web服务器/index.html","7b8a59a1400e2ff4d8fb76fcd89b05df"],["E:/qinhao/hexo/public/tags/index.html","d7d789b0401f8fcde8838722e1102845"],["E:/qinhao/hexo/public/tags/交换机/index.html","edd718fa10c0eb5aa433dab4b44bfb53"],["E:/qinhao/hexo/public/tags/图像处理/index.html","ff30270f80da8063c97e5d6c0409a69b"],["E:/qinhao/hexo/public/tags/基础网络/index.html","3642ffea2b4d5be31ddc3f458f48dfe9"],["E:/qinhao/hexo/public/tags/思科/index.html","cc569bac4d0734e221f21bac2e3fd239"],["E:/qinhao/hexo/public/tags/思科GRE/index.html","254fd57b99671f19e7ac4e97ffeb3d89"],["E:/qinhao/hexo/public/tags/数据库/index.html","c21f2ae22d4b6daf3b8117cb2a4bbf62"],["E:/qinhao/hexo/public/tags/无线技术/index.html","cace6d4fdf3d61e210c4cbe597b2189f"],["E:/qinhao/hexo/public/tags/无线技术/page/2/index.html","6a06c3ee7e553724e000f4c8168881f6"],["E:/qinhao/hexo/public/tags/系统安装/index.html","22383b11673d31580bcccb4b2c529b9b"],["E:/qinhao/hexo/public/tags/网络安全/index.html","d6b232834413f4898b7181c15657df80"],["E:/qinhao/hexo/public/tags/网络技术/index.html","f90ca9f3e74ccdad159265613ae952f0"],["E:/qinhao/hexo/public/tags/计算机三级/index.html","ecc99a853b1ddb485a7a00a4419457d4"],["E:/qinhao/hexo/public/tags/路由器/index.html","6bace40c87a261d81350745c92d6d8d1"],["E:/qinhao/hexo/public/tags/软考/index.html","8376cf7d32d0def3b2813576840ded93"],["E:/qinhao/hexo/public/tags/通信原理/index.html","673d325a24d6648ab6e30a7f344fe592"],["E:/qinhao/hexo/public/tags/通信原理/page/2/index.html","367c40fc3f24f4499327e181774f4cbd"],["E:/qinhao/hexo/public/tags/通信技术/index.html","e67f9d85015873be90ffb17e16ab1dea"],["E:/qinhao/hexo/public/tags/通信技术/page/2/index.html","fe142cf26cd8e8b86fbb0304314a1865"]];
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







