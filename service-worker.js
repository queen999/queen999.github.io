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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","67fb77c81ea74ee45af99e5e172a7eec"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","d15e52e94b063ede96f834278c71436f"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","8d299fd0e24d48c11f8e666506ae3682"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","847ba162495df75c3c4924a045b496e2"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","20947ac154935989a8c3c497355ba894"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","5729e0afb682744636b6098a761073dd"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","0b5be466731779657ec8680e8a7eff05"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","87ab74aec997a8b40ef9e2d52bcff8e0"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","f92b8ad507b49e7d477468a6d8a4d84a"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","36ce3f43c05d61230e208c7a137f28d5"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","312f33e059fdb6bd3caa1d7c4a38cfa0"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","ecf3fedf88bea63d6e37552ec25943fb"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","2c5e515e7210ba36c61ae987b39c57b7"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","f1191ce6a2e981f9c9d2f0c97214ca4b"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","255b9a3b3ddd455530fa67c11786e6cb"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","960c6d20f04478f6fe10495fc74b3435"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","2f32b35061d2d879722693ebc1941520"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","68c22ed21c6671458fc1fd4c8711f6cc"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","103cadf32183e8e6e7b3d05549e572c4"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","3359c185299f53eb2257639945c5e93c"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","b9f90737d600f8f1390f0c1d7ab94795"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","2fe552611d712783b693286560e4e2ab"],["E:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","778e101c51b14d49c965eca242f8aa70"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","da1a51891440d3e172d7d9e82c23eb36"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","724a606e4c75488bf3030bc7c5f66b75"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","dcb5bb98a949ef96c164dae24d9b69a0"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","f19e54f9f3220a1bb748b6d8c97e05e8"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","063b3fba2c41ec26f66ffd493935a1c4"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","94a171cfd813006134696a0bebcb506a"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","07304816c947fbe67602ffab61116bf6"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","d7b39ad47aded8d4792d1d5a2776e861"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","d16f5b4133a04c891da71c32b1224a4a"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","f96ae516a94b9fbd846002f10f7e0483"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","2697a7a420cff5257a37de1e7d386043"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","6f2dfaa75199d0011c86574205dad4f3"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","3da21433e0d895540d07654c068f0602"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","3e230a016e1c02deffdd8977bc6d793a"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","0ba52f4d51c9dc10a462aeafe0ae7f86"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","a5996bb72d1f3b986ab604efa846be49"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","41f8b049fdecacc95171da5cfcf5a700"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","23f3c15d44f976207f4d407e040d87c1"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","2cb64fe79c118a827b71d593a3a97351"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","2f9f47bfff494ca743e4183113f4937a"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","e9e91788056c179bd4fe06e8169e567d"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","ec8493f0ebd0685e0431bb4e1f2a9162"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","ed695a2a83efb4c2f20d535a36cdd4f1"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","e0c5b46545274b7d64a077c7d7d0f7a2"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","7edfeddfa1810aa3b9c76def49a8eb6b"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","3a8ec2ccd6f5798ecbb6014c82a0bb81"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","77041b607a92ffb1db35ebfeb459d5fe"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","2f95597770e7876a83acf44e4de4eb3e"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","6a6d164c7515ef2ceceff0c9159665b1"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","0d7a4b84fd283a3194f1ea350c48a6dc"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","b524d3c0e640949e366eed6fa29f346b"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","79bf993112b9071ebbd285dc93113742"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","6718da8970c021752008bb44d4b33a56"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","5a4f97cd9cfdff0b468cc89169e4da5b"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","f97d71552bff5c5de11a8f8d3dc788ed"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","e0794d167cad5229f6ff9b90e407689f"],["E:/qinhao/hexo/public/2021/03/01/c_1/index.html","4a02437a3c885ef82bb3a0df592a2a8e"],["E:/qinhao/hexo/public/2021/03/02/c_2/index.html","cda4c31fc763bee6c7d25e8e0fa6fa48"],["E:/qinhao/hexo/public/2021/03/03/c_3/index.html","0166d047b0e712bc69c52f66bd96cf9d"],["E:/qinhao/hexo/public/2021/03/04/c_4/index.html","427dd9bd4be97bb4cf6c8fb4fe2cb25a"],["E:/qinhao/hexo/public/2021/03/05/c_5/index.html","a9ee957e456d0d5eb9f15dbe18c1f3a3"],["E:/qinhao/hexo/public/2021/03/06/c_6/index.html","9981e9c16b268a9c2b762a19abb92c61"],["E:/qinhao/hexo/public/2021/03/07/c_7/index.html","c8fd70e5a954069b26249c53bf55d52b"],["E:/qinhao/hexo/public/2021/03/08/c_8/index.html","2f62fa64037e20f98837dfe902881b7c"],["E:/qinhao/hexo/public/2021/03/15/c_9/index.html","68d6b044cde0d51c0663ef6b1996a74c"],["E:/qinhao/hexo/public/2021/03/16/c_10/index.html","f9050bae40d8846c97e7156c90adfab9"],["E:/qinhao/hexo/public/2021/03/17/c-11/index.html","107b1e033317abc338bad6231f52f0ee"],["E:/qinhao/hexo/public/2021/04/25/FileDownload/index.html","0eab7a443ade1edfd4b4438859155c1c"],["E:/qinhao/hexo/public/2021/04/25/PythonUdp/index.html","b1e3b90e1fe6488c3d986e1071bb097d"],["E:/qinhao/hexo/public/2021/04/25/TCP/index.html","7a70d435d0cb1bb012d2e95b59a73957"],["E:/qinhao/hexo/public/2021/04/25/TCP_client/index.html","972fe284a57b8c7dee8871f1467c94e4"],["E:/qinhao/hexo/public/2021/04/25/TCP_server/index.html","fd9b515a9fe343bb945eeba02f91177c"],["E:/qinhao/hexo/public/2021/05/14/CPU_Register/index.html","4d01e84e80f764bc0969d79fcb6a8426"],["E:/qinhao/hexo/public/2021/05/14/gcc/index.html","0927418c7ed872f8392babb4b9a6d857"],["E:/qinhao/hexo/public/2021/05/20/Algorithm_1/index.html","de24927a5e03031eadc0b187ba12a2cd"],["E:/qinhao/hexo/public/2021/05/20/C_Programming_1/index.html","a6848c3ef3d43cf77e66086c40b5bfbf"],["E:/qinhao/hexo/public/ByteDanceVerify.html","2d3d6175eef5fc649e998d8873c82a08"],["E:/qinhao/hexo/public/about/index.html","43eb816b2144d094f051e0146ac77f2e"],["E:/qinhao/hexo/public/archives/2020/02/index.html","b0be270768d56e9a1b15285981428632"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","f10fb2c7df8d1e3173fc6fc209440920"],["E:/qinhao/hexo/public/archives/2020/03/index.html","0ad7d3ea0e86b92151d749527a856ae4"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","9d9be25fad96001d2fcdeed04357e911"],["E:/qinhao/hexo/public/archives/2020/04/index.html","24dcd013469dccf51a09e540425d9462"],["E:/qinhao/hexo/public/archives/2020/05/index.html","f29109e4bf8e09a1bcc4d225cdd00bca"],["E:/qinhao/hexo/public/archives/2020/06/index.html","47145ed5b7b0216cf1e58fb071070f42"],["E:/qinhao/hexo/public/archives/2020/07/index.html","63ec7d0c61493f042efcc9a39b2147e4"],["E:/qinhao/hexo/public/archives/2020/08/index.html","543974c07ecf098fad9d737164c092b3"],["E:/qinhao/hexo/public/archives/2020/10/index.html","be0dafad7916f55ff813ab367bf6c5ee"],["E:/qinhao/hexo/public/archives/2020/11/index.html","ca2dbef0945ee12f75d8ac40ce0d270f"],["E:/qinhao/hexo/public/archives/2020/index.html","631a9a95f971564f2060068ff0e42974"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","82e7df73dc2fc2e31097a74c3326bab6"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","176cc123df3b0c16ef8657e89a5cb7f4"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","2e3144ead0c992df39bf36a672871b9a"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","a8b8934aa6f96c9917d68335982684a4"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","439362d088402890b5dcb9026b2f3f5a"],["E:/qinhao/hexo/public/archives/2021/03/index.html","58d46c8b5c7fed0b3ad7b5d2725d73c9"],["E:/qinhao/hexo/public/archives/2021/03/page/2/index.html","b41f0b1a57a8834c1f8d2e872acc909b"],["E:/qinhao/hexo/public/archives/2021/04/index.html","1403e954c039eb14da919d92d3c9aebe"],["E:/qinhao/hexo/public/archives/2021/05/index.html","c7961c9abe153b70b7b28cbdf767f051"],["E:/qinhao/hexo/public/archives/2021/index.html","fe9f87bf5f6964f930ad4fcc0000f280"],["E:/qinhao/hexo/public/archives/2021/page/2/index.html","e3bc9b90230ad35e6cf2f469d11552e9"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","3c965f44198273e1223ea15c6fc82177"],["E:/qinhao/hexo/public/archives/index.html","478d843812c297202f1149866137de28"],["E:/qinhao/hexo/public/archives/page/2/index.html","478d843812c297202f1149866137de28"],["E:/qinhao/hexo/public/archives/page/3/index.html","b33bc8bb9d34b4e43f6f3cd0c0c43ecc"],["E:/qinhao/hexo/public/archives/page/4/index.html","c017cad326d7d3c0488ee1f52ab40fb2"],["E:/qinhao/hexo/public/archives/page/5/index.html","b33bc8bb9d34b4e43f6f3cd0c0c43ecc"],["E:/qinhao/hexo/public/archives/page/6/index.html","c017cad326d7d3c0488ee1f52ab40fb2"],["E:/qinhao/hexo/public/archives/page/7/index.html","c017cad326d7d3c0488ee1f52ab40fb2"],["E:/qinhao/hexo/public/archives/page/8/index.html","c017cad326d7d3c0488ee1f52ab40fb2"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/C语言/index.html","cc9980861c9d0da6c642b24fd733e6fd"],["E:/qinhao/hexo/public/categories/C语言/page/2/index.html","750707145c09b8c9659aeb7c62c08026"],["E:/qinhao/hexo/public/categories/Java/index.html","18b91776fe0e7df8355e46e310b0cd99"],["E:/qinhao/hexo/public/categories/Linux/index.html","79fa5a6141a947c38de458481a7648c9"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","af2a968890efb12579b88bea4aa89dfd"],["E:/qinhao/hexo/public/categories/Python/index.html","c44490e26727c3b1ba3aa63d3e88aaa4"],["E:/qinhao/hexo/public/categories/Python/page/2/index.html","b384e32bd4b357e047e503d2b6dca41b"],["E:/qinhao/hexo/public/categories/交换机/index.html","76c4dc7fc4551b069b0747865ec0cf81"],["E:/qinhao/hexo/public/categories/华为认证/index.html","1f1d3045f6b254566697dd96e27c9672"],["E:/qinhao/hexo/public/categories/小技巧/index.html","4ae2bc0cbfad0fec2b47211786fed71a"],["E:/qinhao/hexo/public/categories/数据库/index.html","8bd208b2de2b2af2bbba45c565bc8516"],["E:/qinhao/hexo/public/categories/服务器/index.html","5adce378027854e60548311d6a7e5398"],["E:/qinhao/hexo/public/categories/算法基础/index.html","eb4b4d0a6dd3e74cada7c1cabca5344b"],["E:/qinhao/hexo/public/categories/网络安全/index.html","cf6acbd80a914b56e0a850247c17c43d"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","a782da2ea5fff3bc35a16591d830dbe5"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","49a72deab46e1b1f95d09ab2cc5a4675"],["E:/qinhao/hexo/public/categories/软件破解/index.html","ed50fd450472378ddb9b50db9c786e8e"],["E:/qinhao/hexo/public/categories/通信技术/index.html","3197de66b4a602c0bace4cc125920684"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","cb1496c34f8312abe43d6c9f96e49aa6"],["E:/qinhao/hexo/public/category/index.html","ff337349f5c1de818ded87667b7baf72"],["E:/qinhao/hexo/public/css/style.css","69bbc27a8094ac09453486ddd0820200"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","076e3508d27092947ae39737e2488397"],["E:/qinhao/hexo/public/donate/drinks/script.js","1c65abbe04a6bff48000efbc6a2a0648"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","1edd6baa549da99da85451d92cde64f8"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["E:/qinhao/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["E:/qinhao/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/friends/index.html","6ceed0c76003fc43544e92abd574f974"],["E:/qinhao/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["E:/qinhao/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["E:/qinhao/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["E:/qinhao/hexo/public/index.html","8bf053ddb176fe77a912d78991549516"],["E:/qinhao/hexo/public/js/aplayer.js","a0a8f225cab4df42a6e0164b45d7641a"],["E:/qinhao/hexo/public/js/app.js","60b11cc8c0c85ca294cd3ff2e82096ad"],["E:/qinhao/hexo/public/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["E:/qinhao/hexo/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["E:/qinhao/hexo/public/mylist/index.html","bc9142594834a10d9531495c8fd5a49a"],["E:/qinhao/hexo/public/page/2/index.html","1873af4694c6f4903c9c99c15f90eae8"],["E:/qinhao/hexo/public/page/3/index.html","ca5d010664074722960cdece5842b057"],["E:/qinhao/hexo/public/page/4/index.html","9a4fedacbf53b666b268e38c27244df5"],["E:/qinhao/hexo/public/page/5/index.html","e551698e7ff6fab3fe1444833abeb5a5"],["E:/qinhao/hexo/public/page/6/index.html","73eaf9fd33b60cc4f2b7a688de20da99"],["E:/qinhao/hexo/public/page/7/index.html","eece63084c72f963092f496d07a99d52"],["E:/qinhao/hexo/public/page/8/index.html","2a98ebcfe3872f35cd474960f3da5155"],["E:/qinhao/hexo/public/style.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/sw-register.js","f0bcc521bc0cd9f50ed5cc28ef1899ae"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/tags/IIS/index.html","a1686b0173619063124f0a1287ee81ab"],["E:/qinhao/hexo/public/tags/MySQL/index.html","9269c580696409bdd0b96719e5bf546c"],["E:/qinhao/hexo/public/tags/Photoshop/index.html","f3dae2bb783562ee6cc8022a5a0b84fb"],["E:/qinhao/hexo/public/tags/VPN/index.html","7df4a1c6476c7e225fa2f0e6bd954a99"],["E:/qinhao/hexo/public/tags/Web服务器/index.html","73971164dd9b5f4c55f5b46fab6a8b3b"],["E:/qinhao/hexo/public/tags/index.html","9debb0fc65f7d233609a5a6969f87945"],["E:/qinhao/hexo/public/tags/交换机/index.html","d13e39ed63a8199dd15560ced252de84"],["E:/qinhao/hexo/public/tags/图像处理/index.html","d5bbf17d852288d1e78c95b23077f596"],["E:/qinhao/hexo/public/tags/基础网络/index.html","fc699daf92b720690ef16c4ecde70456"],["E:/qinhao/hexo/public/tags/思科/index.html","f15dcb4c96be34c1bc3fb977c4508124"],["E:/qinhao/hexo/public/tags/思科GRE/index.html","0b8990de8b907b4ff39e8d1d59ff2cf3"],["E:/qinhao/hexo/public/tags/数据库/index.html","dc087fce0c58de3c14142e8908c7fe07"],["E:/qinhao/hexo/public/tags/无线技术/index.html","fa5e4191357eb9d33754c0d245555f09"],["E:/qinhao/hexo/public/tags/无线技术/page/2/index.html","5965392fc7f7942368f9dc97a7c09d3e"],["E:/qinhao/hexo/public/tags/系统安装/index.html","1a13896b5097e25d516d4e597fc6749c"],["E:/qinhao/hexo/public/tags/网络安全/index.html","9f2bbbaf63ffab2fe95239458edde4a7"],["E:/qinhao/hexo/public/tags/网络技术/index.html","a5a6d81fddbb3c21abdb13f8827dc385"],["E:/qinhao/hexo/public/tags/计算机三级/index.html","d408b511541fafec6463894b75b17b8b"],["E:/qinhao/hexo/public/tags/路由器/index.html","a10d3b7f8034886d47cc720abb451d93"],["E:/qinhao/hexo/public/tags/软考/index.html","765ffc73a6b959fcf10d3c5a7598ccf8"],["E:/qinhao/hexo/public/tags/通信原理/index.html","b2a005a5b5ea6961f9ae123645c008ca"],["E:/qinhao/hexo/public/tags/通信原理/page/2/index.html","ccdbf183883eeababf97d3e682b09a57"],["E:/qinhao/hexo/public/tags/通信技术/index.html","c5dbbe72bd5164d4df88742aabfeda66"],["E:/qinhao/hexo/public/tags/通信技术/page/2/index.html","73922645516a470224b36184991165ba"]];
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







