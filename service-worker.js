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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","d8d25707e12bede1a73e115f21b627d7"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","c0c2dab943320195d8961625368c4c2a"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","7f2158f0a8595330abbc5f2107f4e0c2"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","88d7d5e895ffcf02333d7f75aaed23e1"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","f6affb46e5aaa3c2fb273624c92eb45a"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","e109025967bdf1ae0d87201f59b8e339"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","7bc1588b1323a9f760d3220336b60bb4"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","69d700f6b97dae50c66927d98ef0ddc3"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","1450a8b024faf8029a3834c36af79d4a"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","dacea009b71f9ac8978822886b3ad844"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","cc5fe04885e08a51c80ae4e58cb0646a"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","c0687d1834669b735ea3e9395b85aa30"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","1194f428703cc6267c71ace4e398105e"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","dbac57131ca2e0685df8b8c343c28aa8"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","8c86e227080eab4d1775cd1d98f51e33"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","dbd8c715fe9de4d502ab121a15c8dc6c"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","3edc7f29123e75137233c0c7f97ffc58"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","e1b4c042614c57b1203e4c17ac4172d6"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","1b8b464aba27a9a800249dd07ea2bbae"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","080642d6bee3d0d66acf4fc649f070a6"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","d660f99f1d8cf6ccf36fae57e607b8d7"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","a2d687ddbc61c4406999b04de8e6761c"],["E:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","4700a6b04fd2c37efe10bbd1d988b979"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","05293c12a342375ac6e6712fd66bd87d"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","39c6dc537cdf03d3feb37497f5019e03"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","f53ddd35b3bd368cf9ba3d4de8b5155f"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","eb981584d86747fefc7a614fd6032847"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","9a9252985672eb5e2242a16fa581d51c"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","44456e2100a9e4c2882b9b88cdf51c5d"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","80f2e9c30e89257c1b4e6d5b431ee043"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","9dbb632d6b4402e113ccbd8a559ad392"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","543b90fb866e5242b7169e4ab2c64aeb"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","9dcb6b7a24e60908eb560a505626b330"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","cdab0a28282f4d70001c35b689df2d82"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","ff99aa99b06ec87d8a7dd00d5e62d027"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","0bdc00e433fed881c0070a6d396f87d0"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","c2fb6fae145f63e04a41743f76fed33b"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","32510bcdc394880f6fbf49bdbedf3c5d"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","f529ddca8d0ea9613389f578dea2c9c1"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","af09f2ccf9da8fa59eea549c0cc6f3c5"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","79b6cf87222a813286de8225db28142a"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","5dae85f80aa998e1e65260f9db6af8f4"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","93dd341c9aafab1d3741287e6d04470a"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","a63e61230b0335a4bf85af593dc9efb6"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","aa918ec70415ae6197e84612c7ed33b5"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","a0edaa1b594bdb4065739d01f5ec141d"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","4e11a9897b4377f6a63bd933324ad6ac"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","66e60f3e2f42b73c3951310fb62f2be8"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","510ae7e1e3665cdefac5cae096bb406d"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","7599d08e1cec10ba0cdac36393c9d03d"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","7c1dc80ed8dc51d76108ab2c78601cf0"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","89b4cb5c7b99d794f4c0b92cffc9c555"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","ee04efc941fac099c874b8f48412f1ed"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","b589f74ce027b9fa725d41e4b3317050"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","52d1b8cc8837dd522ddb18817a0bcb9f"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","e572f8d47869325d2266dfeb3f60150e"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","21116ed1187580dbe6387a6f7caefcd2"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","62891201e5f6a90b0a826d496447db69"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","f78e2647db6d44fa2d3f672027b9c1c5"],["E:/qinhao/hexo/public/2021/03/01/c_1/index.html","085c6b3876f8197fab179c2fc8d72097"],["E:/qinhao/hexo/public/2021/03/02/c_2/index.html","2d18c630d4dc23f65eec61b57e94c8ca"],["E:/qinhao/hexo/public/2021/03/03/c_3/index.html","63d6e25670b7c03124648d0f07ce14e4"],["E:/qinhao/hexo/public/2021/03/04/c_4/index.html","4da48171544ce535ab1641bc1c646476"],["E:/qinhao/hexo/public/2021/03/05/c_5/index.html","d4d7342d326cf4af990c4fc376257f7c"],["E:/qinhao/hexo/public/2021/03/06/c_6/index.html","bc3b0393e60f92044f39d8e80b0fcf53"],["E:/qinhao/hexo/public/2021/03/07/c_7/index.html","e5ed62b13d8709f3871cdd318e6815d5"],["E:/qinhao/hexo/public/2021/03/08/c_8/index.html","c202b5b8b2bc8d76a6833eed58101ef4"],["E:/qinhao/hexo/public/2021/03/15/c_9/index.html","a813b97e42b98e0ae44fcae803cc3364"],["E:/qinhao/hexo/public/2021/03/16/c_10/index.html","fab8a62be1ba2a2b733f15a0e0713e95"],["E:/qinhao/hexo/public/2021/03/17/c-11/index.html","edc407e030328477a4cf442828d641c6"],["E:/qinhao/hexo/public/2021/04/25/FileDownload/index.html","d9300bb2a9ae6fdade89bc09a1574121"],["E:/qinhao/hexo/public/2021/04/25/PythonUdp/index.html","2dbc49a43f249bc719a43a06ce02573c"],["E:/qinhao/hexo/public/2021/04/25/TCP/index.html","eb1d011372285dcb101f07d181dc2aed"],["E:/qinhao/hexo/public/2021/04/25/TCP_client/index.html","e36806a97ff6dce8f972d8befdbd41d4"],["E:/qinhao/hexo/public/2021/04/25/TCP_server/index.html","3b89049da2216970c66eb2375a4c23f3"],["E:/qinhao/hexo/public/2021/05/14/CPU_Register/index.html","bbfa5dd0156fba9a23c84fa20d10d791"],["E:/qinhao/hexo/public/2021/05/14/gcc/index.html","2422bd32fdb04e863e8984df9acccbad"],["E:/qinhao/hexo/public/2021/05/20/Algorithm_1/index.html","6c8cf437c27125737c15ec565f17d807"],["E:/qinhao/hexo/public/2021/05/20/C_Programming_1/index.html","6ebcb17b3ac10b6d48e137e553684159"],["E:/qinhao/hexo/public/ByteDanceVerify.html","eea11140005e8c4e477e49b4ad78997b"],["E:/qinhao/hexo/public/about/index.html","043a25bc3c5d8c226b99f31b53917778"],["E:/qinhao/hexo/public/archives/2020/02/index.html","559a3f18c5aaf12ab4e5fc2979edea74"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","2f336de255c0517f164557bd8de8af7d"],["E:/qinhao/hexo/public/archives/2020/03/index.html","f027b637537833f00e17560cdee5c404"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","b2b160f7e5bbf9125d301f79d7fc746d"],["E:/qinhao/hexo/public/archives/2020/04/index.html","835f3759be5ce13f26438b2fc5796125"],["E:/qinhao/hexo/public/archives/2020/05/index.html","bd928ef6172c56917abbe632f6d118e7"],["E:/qinhao/hexo/public/archives/2020/06/index.html","b2bdd56d3bb5aec7d7b698fcbe2621e9"],["E:/qinhao/hexo/public/archives/2020/07/index.html","4e2705ac839a5e30298dbc9d383c37ea"],["E:/qinhao/hexo/public/archives/2020/08/index.html","0a881a35b55f8e097eb72670ea5cb360"],["E:/qinhao/hexo/public/archives/2020/10/index.html","a4c9b009386dbcdba26603826716e056"],["E:/qinhao/hexo/public/archives/2020/11/index.html","18aa91001d039f0f51f7317fe23705d7"],["E:/qinhao/hexo/public/archives/2020/index.html","9a600249963e6e8768a4fb1c4be17f3d"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","180fa7bfcb58095434e6185bdede785e"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","27b7e5c4d1fc9372971597c124e8ee4e"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","13e41664f2c8d665f1cb977b0788b274"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","9bc1efa77453752a6930f6d8923e66ad"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","102b43afc7ae58a346ed247841a2fbe8"],["E:/qinhao/hexo/public/archives/2021/03/index.html","fdee6cfb90a9fff1f5c7094040422b62"],["E:/qinhao/hexo/public/archives/2021/03/page/2/index.html","8e70025d57db6500508e5d8902e56023"],["E:/qinhao/hexo/public/archives/2021/04/index.html","62849fa293fabfbf77ffa2d5ecf64b2b"],["E:/qinhao/hexo/public/archives/2021/05/index.html","c72d713e67289fdf6ec8ffa34eeacc72"],["E:/qinhao/hexo/public/archives/2021/index.html","a252e92bd07f68034e07b597adedd305"],["E:/qinhao/hexo/public/archives/2021/page/2/index.html","e2173c793249630aec3b1bd0061361da"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","b379f9e527a35e552ef0e62ce26d2b42"],["E:/qinhao/hexo/public/archives/index.html","5816a4469cfe75b7c2ba161de68d8404"],["E:/qinhao/hexo/public/archives/page/2/index.html","5816a4469cfe75b7c2ba161de68d8404"],["E:/qinhao/hexo/public/archives/page/3/index.html","5816a4469cfe75b7c2ba161de68d8404"],["E:/qinhao/hexo/public/archives/page/4/index.html","5914b34ee2a9a37d2bf6fee37c7f59a1"],["E:/qinhao/hexo/public/archives/page/5/index.html","5816a4469cfe75b7c2ba161de68d8404"],["E:/qinhao/hexo/public/archives/page/6/index.html","5914b34ee2a9a37d2bf6fee37c7f59a1"],["E:/qinhao/hexo/public/archives/page/7/index.html","6484991b840bd15b4bd948e9db6f8e07"],["E:/qinhao/hexo/public/archives/page/8/index.html","6484991b840bd15b4bd948e9db6f8e07"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/C语言/index.html","ad60ce38c8092b2fffa549c729b4fdca"],["E:/qinhao/hexo/public/categories/C语言/page/2/index.html","c7e2120882f053a8a656841929a50283"],["E:/qinhao/hexo/public/categories/Java/index.html","97ee48ccc9c580ee017392ea1dc8edc0"],["E:/qinhao/hexo/public/categories/Linux/index.html","3de74677237198689a3c3f56547d3766"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","20e1c328c2ba58371fe4333e501ecff0"],["E:/qinhao/hexo/public/categories/Python/index.html","e290257b7bb47186d9bd7f301df3e25d"],["E:/qinhao/hexo/public/categories/Python/page/2/index.html","022e51f611855ca2796a425102ea0e65"],["E:/qinhao/hexo/public/categories/交换机/index.html","9dc748849f22c344809c0bbe61cb87a3"],["E:/qinhao/hexo/public/categories/华为认证/index.html","4e4d372d9ab4acdd0c917ad7181ca484"],["E:/qinhao/hexo/public/categories/小技巧/index.html","d4eca775253bc287785f483a1fdfa877"],["E:/qinhao/hexo/public/categories/数据库/index.html","87f4042e6cc322590397adee139b7817"],["E:/qinhao/hexo/public/categories/服务器/index.html","142111ab0c44de7ac9574b99042ec45c"],["E:/qinhao/hexo/public/categories/算法基础/index.html","3ec28ae1e2602f5b7e6c70678922bddd"],["E:/qinhao/hexo/public/categories/网络安全/index.html","bb0d83ac63afd64104007dd1dd61a1e9"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","6d0f0c7f40acc381fc36c85519a5f996"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","b64983a91243efc30dd39f89795e6a61"],["E:/qinhao/hexo/public/categories/软件破解/index.html","161759145b471744a3deda531c01c85c"],["E:/qinhao/hexo/public/categories/通信技术/index.html","50d48d0863230251541a56ffca368c2a"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","c9edf27c23e4a71767c6e0542abf5223"],["E:/qinhao/hexo/public/category/index.html","f585e99fbc665b7b1e602f56916cf777"],["E:/qinhao/hexo/public/css/style.css","dab9fe4add2672b120eee27c22fece6a"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","076e3508d27092947ae39737e2488397"],["E:/qinhao/hexo/public/donate/drinks/script.js","1c65abbe04a6bff48000efbc6a2a0648"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","1edd6baa549da99da85451d92cde64f8"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["E:/qinhao/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["E:/qinhao/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/friends/index.html","6150cb39d4b862d43e0c41aa80d77cfe"],["E:/qinhao/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["E:/qinhao/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["E:/qinhao/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["E:/qinhao/hexo/public/index.html","6f921e23d6bbcf4ee6534965fdb4ab1b"],["E:/qinhao/hexo/public/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["E:/qinhao/hexo/public/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["E:/qinhao/hexo/public/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["E:/qinhao/hexo/public/js/valine.js","15d0f1f9d975de124ef5389385961992"],["E:/qinhao/hexo/public/mylist/index.html","a55e336e5dcdc234f746af7ca53e1a32"],["E:/qinhao/hexo/public/page/2/index.html","ea675c9e57b7f07871466a1d87334228"],["E:/qinhao/hexo/public/page/3/index.html","925908d5dba06ddef1253dd9bd2e21c2"],["E:/qinhao/hexo/public/page/4/index.html","89e6c9164332d84598c076423e28f1da"],["E:/qinhao/hexo/public/page/5/index.html","238b0d009f2972a150e5e79af4f553ad"],["E:/qinhao/hexo/public/page/6/index.html","3b81c7d64a61375994b5b609aba5b048"],["E:/qinhao/hexo/public/page/7/index.html","f19084ec310a1ab0a04c87595ed585ae"],["E:/qinhao/hexo/public/page/8/index.html","dbb5a0d34a97fa10b69e19550a732aea"],["E:/qinhao/hexo/public/style.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/sw-register.js","8f8888577623d2926fc7921e52e0c3c6"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/tags/IIS/index.html","835d2598ab2e3ed78381e2f48c612ba6"],["E:/qinhao/hexo/public/tags/MySQL/index.html","64f7ffee47f5aa3a05e1399f7252bfc5"],["E:/qinhao/hexo/public/tags/Photoshop/index.html","cc83701a3fb85960666a0fd647cf1d66"],["E:/qinhao/hexo/public/tags/VPN/index.html","95efc9c1b1b1305375b1acc4d125a37f"],["E:/qinhao/hexo/public/tags/Web服务器/index.html","60f35354ea14882b665b2452ed63e122"],["E:/qinhao/hexo/public/tags/index.html","3e883003810abb501dac0ff44fdccbdc"],["E:/qinhao/hexo/public/tags/交换机/index.html","1adb23bbae19acf2c5cbd253eee1aa04"],["E:/qinhao/hexo/public/tags/图像处理/index.html","eb3427fac896ff97929455fbdf62d490"],["E:/qinhao/hexo/public/tags/基础网络/index.html","57aad132bdc23993d1ab62e0142579e5"],["E:/qinhao/hexo/public/tags/思科/index.html","0ae1a8c9cdfc6a75a100ada5b05084b2"],["E:/qinhao/hexo/public/tags/思科GRE/index.html","1d1d76420e2bfeddef3638b78d295590"],["E:/qinhao/hexo/public/tags/数据库/index.html","7f9eec67d12778c0aa02f9db58ece463"],["E:/qinhao/hexo/public/tags/无线技术/index.html","192424eb2e94e3be0ea7f81b8692a34a"],["E:/qinhao/hexo/public/tags/无线技术/page/2/index.html","e2ce53622eae6f4f0f69267567e0c3e8"],["E:/qinhao/hexo/public/tags/系统安装/index.html","dc5baa0f5398f8ca35218038a09bd4d5"],["E:/qinhao/hexo/public/tags/网络安全/index.html","8ab4ec58f1e80987c5969a9063f41e4f"],["E:/qinhao/hexo/public/tags/网络技术/index.html","46a612175606b8f8a1c977b6ef173bad"],["E:/qinhao/hexo/public/tags/计算机三级/index.html","2be9a9fba6e759cb12b8987a6d2d3ecc"],["E:/qinhao/hexo/public/tags/路由器/index.html","be250fef490b9f27e25eb288d5acbc0b"],["E:/qinhao/hexo/public/tags/软考/index.html","9c7b9bc94297da31f20a3c04c987c2bc"],["E:/qinhao/hexo/public/tags/通信原理/index.html","148d49d931f306ef30a7d3e99ab79902"],["E:/qinhao/hexo/public/tags/通信原理/page/2/index.html","fa31a24d141cccda2fe7f59e1cb6a2fa"],["E:/qinhao/hexo/public/tags/通信技术/index.html","47bdac80813161106a70b8a20109a9ad"],["E:/qinhao/hexo/public/tags/通信技术/page/2/index.html","b4a76cd0a24930292e3d53a0f3fb875a"]];
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







