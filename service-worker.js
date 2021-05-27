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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","72027881619e4f25903fa0d406f07930"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","44b149178d1eeb287a2e289e834b3928"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","23171f28f90ab3c6ce6c7cbedbb24cad"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","625dbfb62fb0fa9c5b874d974dd61e23"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","e3a3d1525c83f43ea7d1fd709c8b79d8"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","914dec5eb7694380e4ad49a235d62c48"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","a359e23d58fb1c61b77ff6349bffa7ef"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","9bf515c6ccb714fc6c004a8c79833b9b"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","11756f4a54d182849db6ca590b64fe3e"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","a67e37f864d558ea2fa472215b0602c8"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","f709e00eeda381de1bb726aa50dfd06e"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","bbd666c2184a2463cdfea402a01e0f34"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","4a1dff996846713493fa8da9355e8439"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","07dde4c8805865ec6d06a3e37060ee3a"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","192dc4b474165a820f9d804ba555e3dc"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","7e2c3346c0867db4e98349c2eb296abf"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","e091d4bf48cfc1912c240631bb04bc64"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","548cff61035824e3571ee8c3c9b7f8cd"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","c672f5a3824b12ab7b27014205cb4c1e"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","b01baa19cc8aed630950153ce74007b0"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","0e3b3b15c81d604621d4101558a0b225"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","e8094e60f8391c762cd357539f1a59f2"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","c3381cde803ecb17909b794015d7dd7c"],["E:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","7ae69057bcb76216ff5a18d3c1690d2c"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","337fa5b7cfe397029ebc71b58ffd5226"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","ba60ac0cf98ef10cd53a119a56594528"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","ed1b6dda8b5fc1bda352ead9157bd286"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","d907ed6d4fb672b2099a7f3b8eaac3c2"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","17ef44d66c41958ce27f8be9168f5994"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","10f4e9fdf6d0f33bd3159192cf83207e"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","ae8208d7992692f8f36c5ec3ee25e2a0"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","842833273f3a36ca4e761fba45b78191"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","7921dda09c4bf2d18d64084214a8a5ec"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","25b7536e6fabea230833c4e948d41e55"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","b082b49614de98bcb364934a6f6fd968"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","3b5b84e3abc066a2c0d6025671373d26"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","33bbee767f7f8acc9ae40f6a745ab104"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","b6ed21321ffe60977c27068b91646065"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","49536546fdc92370af87a776185477fc"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","80c1a611eaf6417ab8a42dcbe1817307"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","0c2d208d3c74f68890d012a3b61be326"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","392ec0ccb89741ab35bbe6dc7b2c57bb"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","293446d97bf74f744513c32fc5f62b77"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","5383781a43d4a4ed6a23d9482d8ed04d"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","a5dd0bcbad042f43a7a27be7a1e5bfb7"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","e2cbbf799dfa766f2a1c519e2ee3d05c"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","6f776282549cb2c813ad6fb4ffd72fe7"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","a897612a193fa3e9be5050bba1fe93e6"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","a200c2ed96cc6e38f468fb08d7bfa936"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","e87eb92285534ae52f074aecad538832"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","2afd3b0a7187d314a73a21784acd1ea1"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","67d302dbbfb1245cc22ecd6773c3adfa"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","db7641e797fed656bc3e57aab63f0fc2"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","22a10ae0ce17a0b9cc24fcbabf1c43da"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","6346241e5e319626113a5f287ad5afb5"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","00686900d0abf7ac1211256846e4a7f6"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","44971a5ec91f83c27e5b137dbab5a313"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","a2830b1016ac616781ccd2604becd67b"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","31849a91118018e342633b8ae93055fc"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","f203fb74112fc9f30e5d67c4888daf3d"],["E:/qinhao/hexo/public/2021/03/01/c_1/index.html","6ea7ed6e8422cb7095f725dab0684869"],["E:/qinhao/hexo/public/2021/03/02/c_2/index.html","93386b63c16d5c285bcecbfc03bc1695"],["E:/qinhao/hexo/public/2021/03/03/c_3/index.html","94624f4726cc047a23908c65461e141f"],["E:/qinhao/hexo/public/2021/03/04/c_4/index.html","3fd2c3e8a5b52e8631ce1da721271e6a"],["E:/qinhao/hexo/public/2021/03/05/c_5/index.html","dba7852ebc3e526a09ce079e5cf5c05e"],["E:/qinhao/hexo/public/2021/03/06/c_6/index.html","7a4c22fc1de27420c31d1bb029153d86"],["E:/qinhao/hexo/public/2021/03/07/c_7/index.html","2e500bda995e138e3db55ff6741ad52c"],["E:/qinhao/hexo/public/2021/03/08/c_8/index.html","df4d61d9431d32786c1f0c2c9419794f"],["E:/qinhao/hexo/public/2021/03/15/c_9/index.html","706c6ad447efb962c7756574baae5dfb"],["E:/qinhao/hexo/public/2021/03/16/c_10/index.html","84adcd231acecb01acf29a342f3b77b8"],["E:/qinhao/hexo/public/2021/03/17/c-11/index.html","b052b88871249fedd4403fb487c5a6b5"],["E:/qinhao/hexo/public/2021/04/25/FileDownload/index.html","67c37ae90a2abba6f243c57d6d2fde18"],["E:/qinhao/hexo/public/2021/04/25/PythonUdp/index.html","7f7a83c588002e967fb662f80c743cf2"],["E:/qinhao/hexo/public/2021/04/25/TCP/index.html","043c9d8f04d6cb32076b872c2a09f543"],["E:/qinhao/hexo/public/2021/04/25/TCP_client/index.html","99fc551a058c90cab6933ab8f96c1bb6"],["E:/qinhao/hexo/public/2021/04/25/TCP_server/index.html","cdc689d0021973ba9a5ac1ff228b2bea"],["E:/qinhao/hexo/public/2021/05/14/CPU_Register/index.html","2eaeb95289be09ade423acbf3e75335d"],["E:/qinhao/hexo/public/2021/05/14/gcc/index.html","fc366cee7b995aca898eba559e860fe3"],["E:/qinhao/hexo/public/2021/05/20/Algorithm_1/index.html","ece503716612877b6617f7491b088d4a"],["E:/qinhao/hexo/public/2021/05/20/C_Programming_1/index.html","3feb5f0f4a6ba452718fa02e0bbc6ce2"],["E:/qinhao/hexo/public/2021/05/21/Base/index.html","47ea4583b29092d558c4976462d20c6d"],["E:/qinhao/hexo/public/2021/05/22/memory_save_number/index.html","ff0c5e9a9b223778249222cd7460094f"],["E:/qinhao/hexo/public/ByteDanceVerify.html","a4c3ef2244ec5924fea72f80ba46190c"],["E:/qinhao/hexo/public/about/index.html","d862764bb06c4f72e085f79c0dc2bc8f"],["E:/qinhao/hexo/public/archives/2020/02/index.html","e941ec256e4afb836d9d3153c9938f22"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","c8515edfe8cd48ec54bc75c254e1b3b9"],["E:/qinhao/hexo/public/archives/2020/03/index.html","db9858031e8a72cba18b7505715c5815"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","b29f4cdac6ab180256733d6b89c9bd46"],["E:/qinhao/hexo/public/archives/2020/04/index.html","4037bff3b77f6d1ecfd226cb848e1daa"],["E:/qinhao/hexo/public/archives/2020/05/index.html","c0610bdf837e248902bb5e14954f32c7"],["E:/qinhao/hexo/public/archives/2020/06/index.html","ce1e76cc4d545c94e7e7d50d9f3c47f1"],["E:/qinhao/hexo/public/archives/2020/07/index.html","30482658938c8d4e019c634e843449cd"],["E:/qinhao/hexo/public/archives/2020/08/index.html","e8389dfe78d052949019140a75daf7bb"],["E:/qinhao/hexo/public/archives/2020/10/index.html","0a02a866b4ccfc3c81b73de36560c368"],["E:/qinhao/hexo/public/archives/2020/11/index.html","354fc939c43b181c4e14b7d0c7501e6c"],["E:/qinhao/hexo/public/archives/2020/index.html","92b8b89de69d8cab7e418df1c6853209"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","df190e2aadbb58caadec8ea3a10bc8e2"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","3d2b64884a02ce6b4395d6ec3f93639e"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","c7c4adae0fd887c43e8b1a0aed82458e"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","1b278284c2fd6d25c962b0f7f6cfd199"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","3904bda87e07a1f3ac6da0ae6f67b6d0"],["E:/qinhao/hexo/public/archives/2021/03/index.html","df9764961bc63185e1bb1636ac8ce142"],["E:/qinhao/hexo/public/archives/2021/03/page/2/index.html","0f38121b8bba5ce40eaa9c0b60597b97"],["E:/qinhao/hexo/public/archives/2021/04/index.html","0677cb93bc596ec46d1cc13425c1ff6c"],["E:/qinhao/hexo/public/archives/2021/05/index.html","0aff800504ed3435e5bccb261d813616"],["E:/qinhao/hexo/public/archives/2021/index.html","d2c06dfbc3d3b1101c07a8d3ad2f0fa9"],["E:/qinhao/hexo/public/archives/2021/page/2/index.html","75f3a6f89c356e62e9237ddbffa585fc"],["E:/qinhao/hexo/public/archives/2021/page/3/index.html","84f3da63983af3a62b344581acdfff79"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","b229c32f3214b5a931f1ff27a7ae5950"],["E:/qinhao/hexo/public/archives/index.html","5ea506567eb5c73301c02617dc32969d"],["E:/qinhao/hexo/public/archives/page/2/index.html","4aa85e87577d3f52b80fa6500cc879da"],["E:/qinhao/hexo/public/archives/page/3/index.html","4aa85e87577d3f52b80fa6500cc879da"],["E:/qinhao/hexo/public/archives/page/4/index.html","677e35aa8e3245125e6b6358a5a98023"],["E:/qinhao/hexo/public/archives/page/5/index.html","4aa85e87577d3f52b80fa6500cc879da"],["E:/qinhao/hexo/public/archives/page/6/index.html","677e35aa8e3245125e6b6358a5a98023"],["E:/qinhao/hexo/public/archives/page/7/index.html","016381c2ff41b67fbdffa5256da2c0ca"],["E:/qinhao/hexo/public/archives/page/8/index.html","016381c2ff41b67fbdffa5256da2c0ca"],["E:/qinhao/hexo/public/archives/page/9/index.html","016381c2ff41b67fbdffa5256da2c0ca"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/C语言/index.html","c9154f5b5cf37f92914350fcf5d08f63"],["E:/qinhao/hexo/public/categories/C语言/page/2/index.html","efc704816d644c4f44ca407633adcca2"],["E:/qinhao/hexo/public/categories/Java/index.html","ab6cfd18a419a5a319d751bbef4b7d38"],["E:/qinhao/hexo/public/categories/Linux/index.html","e6b56c833846efc3b231b3a016ac1dcf"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","a4fd09a2de49729ff1059d7195581fd5"],["E:/qinhao/hexo/public/categories/Python/index.html","fc376eed8f2dce64adc88f6f6e919784"],["E:/qinhao/hexo/public/categories/Python/page/2/index.html","5defa36c4bf77b31bdfda2442b185646"],["E:/qinhao/hexo/public/categories/交换机/index.html","320a50e7a7dc3df79745cf911f67efd5"],["E:/qinhao/hexo/public/categories/华为认证/index.html","ac28b367daabd92b8a3075a902254e23"],["E:/qinhao/hexo/public/categories/小技巧/index.html","9d40987906e386755714cf8ec8b188e2"],["E:/qinhao/hexo/public/categories/数据库/index.html","a739d310f5ad4c52a3cfee01e6fac559"],["E:/qinhao/hexo/public/categories/服务器/index.html","c66c086f16af4c8d3afde32132a46cf8"],["E:/qinhao/hexo/public/categories/算法基础/index.html","1f81c5edb65dbcfee6c91d06588549d8"],["E:/qinhao/hexo/public/categories/网络安全/index.html","ea3cfcd3add064bc88b9b7abed0cd080"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","0141e7425610a6fd77af4b9730ef7d02"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","66f444dd98188649a727002481f934cb"],["E:/qinhao/hexo/public/categories/软件破解/index.html","6ee91da823e57a4195cc39e995a328e0"],["E:/qinhao/hexo/public/categories/通信技术/index.html","c21734ee254dd19c458a141030701932"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","f4250284544ef364a06c3c1be00e1265"],["E:/qinhao/hexo/public/category/index.html","0c4108397c0616de5de1fbb2b357ea04"],["E:/qinhao/hexo/public/css/style.css","69bbc27a8094ac09453486ddd0820200"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","bf87464f17e70fda82d9bdd29acf3e84"],["E:/qinhao/hexo/public/donate/drinks/script.js","1c65abbe04a6bff48000efbc6a2a0648"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","cca8ec400811d24b0072f4672399a4a1"],["E:/qinhao/hexo/public/donate/simple/script.js","1edd6baa549da99da85451d92cde64f8"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["E:/qinhao/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["E:/qinhao/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/friends/index.html","99337c3ac5a0259e70eac83e4b699737"],["E:/qinhao/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["E:/qinhao/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["E:/qinhao/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["E:/qinhao/hexo/public/index.html","72ccff7145b2fcbc91389ac060a712fe"],["E:/qinhao/hexo/public/js/aplayer.js","a0a8f225cab4df42a6e0164b45d7641a"],["E:/qinhao/hexo/public/js/app.js","60b11cc8c0c85ca294cd3ff2e82096ad"],["E:/qinhao/hexo/public/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["E:/qinhao/hexo/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["E:/qinhao/hexo/public/mylist/index.html","68e09c683b5ee3c7a6e8fa979b63f03b"],["E:/qinhao/hexo/public/page/2/index.html","d438ba62806f6dccd7115cb009caf9bf"],["E:/qinhao/hexo/public/page/3/index.html","1affc10067719b3d2eb68a23ae8e4aa2"],["E:/qinhao/hexo/public/page/4/index.html","f41ea8e2c7d9e8c1961eb4cd904593cd"],["E:/qinhao/hexo/public/page/5/index.html","c502815fa50744ac48af487b2de464bd"],["E:/qinhao/hexo/public/page/6/index.html","07b3d878523198a999d72e57b2db46d2"],["E:/qinhao/hexo/public/page/7/index.html","e2e6696aff83497ad94d08a8951b0e3a"],["E:/qinhao/hexo/public/page/8/index.html","94c37371318b65379c01cd7190053ffb"],["E:/qinhao/hexo/public/page/9/index.html","f64ded88973ec479dd5106bad58ad74c"],["E:/qinhao/hexo/public/style.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/sw-register.js","d99fafc43e506652f6ab37f79726caa2"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/tags/IIS/index.html","8507155b8f6c8012004718e8d4e7b8f4"],["E:/qinhao/hexo/public/tags/MySQL/index.html","5066d32c3f29167d33202257242deb85"],["E:/qinhao/hexo/public/tags/Photoshop/index.html","5e52ddfaad3539340f4ead5b53133895"],["E:/qinhao/hexo/public/tags/VPN/index.html","b1d7f34e76969682c9d1eb5bbc9eada1"],["E:/qinhao/hexo/public/tags/Web服务器/index.html","0658c9d9c222503d1a9d76c9e2473ca0"],["E:/qinhao/hexo/public/tags/index.html","2d4edaffe0a26f89465d2bf7faa2e165"],["E:/qinhao/hexo/public/tags/交换机/index.html","f8001bb90e93e45b3a9eaf546f1d5842"],["E:/qinhao/hexo/public/tags/图像处理/index.html","bf1615863fa10ee05a4ccea6e8861a85"],["E:/qinhao/hexo/public/tags/基础网络/index.html","efbe6d5839231b384a93f9e75600ec15"],["E:/qinhao/hexo/public/tags/思科/index.html","7b55298148cdb3ae91b798002c67851b"],["E:/qinhao/hexo/public/tags/思科GRE/index.html","ee950a81b067d420146b116d3885bcc4"],["E:/qinhao/hexo/public/tags/数据库/index.html","f0a56a91f8c570a92a75c228497afde0"],["E:/qinhao/hexo/public/tags/无线技术/index.html","8f81dcfa904127cc7661811af40b73c1"],["E:/qinhao/hexo/public/tags/无线技术/page/2/index.html","61b58d0ba19827c4255dc8d52bcd6013"],["E:/qinhao/hexo/public/tags/系统安装/index.html","ac28529e8d5d8db5799447dcfddf07a8"],["E:/qinhao/hexo/public/tags/网络安全/index.html","4b02eec9e3d6feb5adf506943d4aed0a"],["E:/qinhao/hexo/public/tags/网络技术/index.html","74c3b882ba548910d0f6fdaf77f32077"],["E:/qinhao/hexo/public/tags/计算机三级/index.html","c96be60a84a88585accb618308630743"],["E:/qinhao/hexo/public/tags/路由器/index.html","c2cc5745cbf21c8f0b46483e9112f742"],["E:/qinhao/hexo/public/tags/软考/index.html","e8afeef9f36523c5e58520125ce9193d"],["E:/qinhao/hexo/public/tags/通信原理/index.html","0f6d827eb937a6e34019216d17c421e3"],["E:/qinhao/hexo/public/tags/通信原理/page/2/index.html","91d4ba2ebdb8ce9d97dd5d87050a35fa"],["E:/qinhao/hexo/public/tags/通信技术/index.html","c539387d10c22216f3602e0045d8c2f0"],["E:/qinhao/hexo/public/tags/通信技术/page/2/index.html","c9dd3380a4d5b7c0233e35f9938eaf2c"]];
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







