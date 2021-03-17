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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","823c833deb6bb130be4abf97f6f53f8c"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","9bb0588da7c701b61522bbb2fbad62b2"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","04bad81de49bd1706a471f0e34063b00"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","c506650e075181eb7b93002147896b6a"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","359d54ad32629a2caf7a7fe0a53120e1"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","c7733f8dddeb55d0266aedd90b19ee00"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","b1890d238badc1f1a9be833995b097f6"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","73a74569cc1acaf625d43a974a34a347"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","e3f079d3767f365820257a7bde9edde6"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","3bd23f52b310c4169bbc30fec70486f9"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","85d8b97e7ffc1141201191ccff850ddc"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","be6ab5e55d13b30849fda37b44734a57"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","f5eae6a315bdff40b89647132d79f6b5"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","004aadfb521de575020e88c802b973a1"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","88bae236141528390b55f75223c65714"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","f9bc37d0976808ee0e0ede5f8b3ddf75"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","73fa39f34b9eb3516c0a0479f51f9513"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","afe97726cdadd82477107b0b7f14b7ae"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","7071f663f6dc5bccbbb8fc563d3bb522"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","0fd6f9d3e317afd20e4c0df4d0946e02"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","515b4487f734d98d98711724248fb605"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","2b164bf3dc71f08b6127fb4f0104966e"],["E:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","5887916620e7a095442dc937a31e89bf"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","304641aa4d218d21abeea660e3141f64"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","de0d8d40689627dcc7904a829d2b4d23"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","b701d57a82d55ea241e894416122dcb2"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","6e0f39f596e006dc55206e0f3a527409"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","345370ce5d2fd1a5ad891200a9a8b75c"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","47d6c417bcb797293c350e4b9c56ec21"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","3f4e1c60eeccbc7cd511c9b0c06164e9"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","78d49c37f05eae6092d0ce113193e502"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","fbb3753a8ee28e33e5985c6471d8866b"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","3edbd0d4f4089523c10de5c8bf2a1e9f"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","e4c99c90dd02afbd8c233557d91c2b9d"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","b569b30c864e88a21e8b284765bf865e"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","db5f111a6661d96292c25393c8cee272"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","a36dfcb1e0bf3671e068923c700d1c8a"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","46a8d08fbeb6d80648985194455f5474"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","94e445bf7b37e7fc7025a24c6bc10d56"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","49ffcaae0ab43ec9356eb4228ec98837"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","952163af91b5d5a425ef78f6c5432bb5"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","6f69efd98fd7607641b3e2b6cbca79bb"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","0ba8f7d9011a31f9b6536cc948ad90d9"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","ac1eb4028f1e351c8ec31d7bd1b235be"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","c9f698ad207a9d472bab21c0c60458af"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","d91c15285e4f89be93503710823a15ee"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","80fc137f0d7e7ca84ea494ee1d74042f"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","71fd56257db20239a3be28a4e784cca5"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","9c99177c0f6f5cf08e245178d67bd861"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","3eacacec67e5a385edf6af11c233327a"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","4c58ad3b3adb377f28b808b21ae2806e"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","cdecf4828d842391ff59fa344383b644"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","1087e5a37fda2de394496cda70aeffab"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","2cd1273534a6dcefe4e7e8f04b150e09"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","a012b2b6c76f47abe5117a52c01d8d68"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","31804ce5c40fd11b4cdcad136ce11d4b"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","2ba72d77eaceb4254f9e1989ac3c7d1b"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","968fac2d90f5c7aa4487138a768044f0"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","05f121a950b3dab4bbbcf8f5160d3c50"],["E:/qinhao/hexo/public/2021/03/01/c_1/index.html","9446bd2fd23ea2ecb7d18b9ea3842a37"],["E:/qinhao/hexo/public/2021/03/02/c_2/index.html","e1ddd22ac5226ebb82733d3046bf28a5"],["E:/qinhao/hexo/public/2021/03/03/c_3/index.html","f3dce3fa2b914288299fd014a78ad228"],["E:/qinhao/hexo/public/2021/03/04/c_4/index.html","1f4b60b10c4b68f6fe22ae968cad0e8b"],["E:/qinhao/hexo/public/2021/03/05/c_5/index.html","b2d72892a90839a96c547956891361bf"],["E:/qinhao/hexo/public/2021/03/06/c_6/index.html","d8345d69b13734fcbca9323bca31d8d8"],["E:/qinhao/hexo/public/2021/03/07/c_7/index.html","4264dd5e0759c6043929144c28e70b69"],["E:/qinhao/hexo/public/2021/03/15/c_9/index.html","3bdcb415dee4a7cdd8fc5a58c79f2bb9"],["E:/qinhao/hexo/public/2021/03/16/c_10/index.html","f375c7eadc6ce28c0958fc9545503182"],["E:/qinhao/hexo/public/2021/03/17/c-11/index.html","7f7217ddfd481dae4406b638a433c3bc"],["E:/qinhao/hexo/public/ByteDanceVerify.html","28cc453edd5e220c257b96d36d2c288b"],["E:/qinhao/hexo/public/about/index.html","cf34cb2cc11a31a8426e062209e1e9e0"],["E:/qinhao/hexo/public/archives/2020/02/index.html","fbcc57ae784aa321f1d0d242b1f8df5f"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","770e135a293b9bba8104cb60dcbb8c8e"],["E:/qinhao/hexo/public/archives/2020/03/index.html","b3f9633c13b5427c0678ec1fb7eee090"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","28802bb523f6df547b04f9ac9a2c5c3e"],["E:/qinhao/hexo/public/archives/2020/04/index.html","1222657544a2b71dcfb0f841c3413f7b"],["E:/qinhao/hexo/public/archives/2020/05/index.html","1177f656ac92a6c23c358e979d3cb789"],["E:/qinhao/hexo/public/archives/2020/06/index.html","6e8d5c109eb593b7d948f7b397bb9545"],["E:/qinhao/hexo/public/archives/2020/07/index.html","07c6bd42ec4f268feefef5a43a786c43"],["E:/qinhao/hexo/public/archives/2020/08/index.html","989f249d8a4df2e5b25be474e3440c1a"],["E:/qinhao/hexo/public/archives/2020/10/index.html","6fa2047e411541d7cd0489213fc00ba5"],["E:/qinhao/hexo/public/archives/2020/11/index.html","f5d3317ca25e6b1ae71a99da26b390a0"],["E:/qinhao/hexo/public/archives/2020/index.html","489e16e3db2a55a9a4fb4daa95852db4"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","31d06e19b04986525363c7fcfa929415"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","a919ad1d5f65d5b934679ddd0db3dd1c"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","e45e75a08d55e04112b56e13763eccee"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","e1dc7eea264a672bd9a241c4d92f8117"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","92ca3de4bf59ae0165941730f96c9d74"],["E:/qinhao/hexo/public/archives/2021/03/index.html","64ccc83bbca0b8b49ba2bdfda9b7b7d3"],["E:/qinhao/hexo/public/archives/2021/index.html","6ce4327415894794ab9a9daea340afa7"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","62be2d0e6c3e34ab97ceb8bbadae08ca"],["E:/qinhao/hexo/public/archives/index.html","43c41799562657b2124db2be701c5996"],["E:/qinhao/hexo/public/archives/page/2/index.html","43c41799562657b2124db2be701c5996"],["E:/qinhao/hexo/public/archives/page/3/index.html","0db1546eb03f95bea837900d3eafd675"],["E:/qinhao/hexo/public/archives/page/4/index.html","43c41799562657b2124db2be701c5996"],["E:/qinhao/hexo/public/archives/page/5/index.html","0db1546eb03f95bea837900d3eafd675"],["E:/qinhao/hexo/public/archives/page/6/index.html","0db1546eb03f95bea837900d3eafd675"],["E:/qinhao/hexo/public/archives/page/7/index.html","e7ea51fadd2e6b1e76a5a5273d14a520"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/C语言/index.html","4f61707aee030310eab7a22004a1c9fc"],["E:/qinhao/hexo/public/categories/Java/index.html","643c22c9859c43c0b34ac366b616ca22"],["E:/qinhao/hexo/public/categories/Linux/index.html","5acab7708f844cd581a55aa4197db45c"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","305a9fdd2895679c524490e1d0c9984c"],["E:/qinhao/hexo/public/categories/Python/index.html","b010b153575b0a5b75478dd31f498f14"],["E:/qinhao/hexo/public/categories/交换机/index.html","c2dd3e40d5f5e2de425053751f215a1e"],["E:/qinhao/hexo/public/categories/华为认证/index.html","1d87fb4a9417d0083f4f69e68b271c31"],["E:/qinhao/hexo/public/categories/小技巧/index.html","9fbb33985fceb824f55709f13d0c13a9"],["E:/qinhao/hexo/public/categories/数据库/index.html","f2692e7cad08d69e5ee28a03909c1a48"],["E:/qinhao/hexo/public/categories/服务器/index.html","cf3fd3feacce94139c80af74ca8d56dd"],["E:/qinhao/hexo/public/categories/网络安全/index.html","cceaf19146b602446a7b07454ccf8244"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","2cbaa7aa40d15a8ce5fb8c0f25918c12"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","a517506024ba4d3e1b417ed8285398c8"],["E:/qinhao/hexo/public/categories/软件破解/index.html","edb6d73554fa5c905593b5c83e0ff09d"],["E:/qinhao/hexo/public/categories/通信技术/index.html","10353611d747ff33e25af74ed2f2d2cb"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","4c2cf25e1d610dd6573cf46c9e2155be"],["E:/qinhao/hexo/public/category/index.html","cb756873d6094603f3ce36bfe3951003"],["E:/qinhao/hexo/public/css/style.css","69bbc27a8094ac09453486ddd0820200"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","076e3508d27092947ae39737e2488397"],["E:/qinhao/hexo/public/donate/drinks/script.js","1c65abbe04a6bff48000efbc6a2a0648"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","1edd6baa549da99da85451d92cde64f8"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["E:/qinhao/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["E:/qinhao/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/friends/index.html","3c84543e12c180f6914af3365cb18567"],["E:/qinhao/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["E:/qinhao/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["E:/qinhao/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["E:/qinhao/hexo/public/index.html","dd70954d891f94695a76a727a7defb1c"],["E:/qinhao/hexo/public/js/aplayer.js","a0a8f225cab4df42a6e0164b45d7641a"],["E:/qinhao/hexo/public/js/app.js","60b11cc8c0c85ca294cd3ff2e82096ad"],["E:/qinhao/hexo/public/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["E:/qinhao/hexo/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["E:/qinhao/hexo/public/mylist/index.html","6fe63ce7f2b87c6a888aa99abf09b6d0"],["E:/qinhao/hexo/public/page/2/index.html","6847607e80975fad2cb78346a2ea1ef4"],["E:/qinhao/hexo/public/page/3/index.html","b85d32c13a47fd5b5214d640c36ec4e8"],["E:/qinhao/hexo/public/page/4/index.html","bd009053319e221eb2a7e6092db3baf3"],["E:/qinhao/hexo/public/page/5/index.html","09e317486796ee3f8591b27af3b59a0a"],["E:/qinhao/hexo/public/page/6/index.html","6b7eae643609c49bb0e091a6254b55cb"],["E:/qinhao/hexo/public/page/7/index.html","00b02befe73be348856881a6798e50ff"],["E:/qinhao/hexo/public/style.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/sw-register.js","173177907494af2581908e94d40cc220"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/tags/IIS/index.html","faddf804652d3baeaa6a82bb60a7eafa"],["E:/qinhao/hexo/public/tags/MySQL/index.html","23a9c0f032764b504e1959240cc47853"],["E:/qinhao/hexo/public/tags/Photoshop/index.html","59c6f2efd688a94a17ac781ac51e934f"],["E:/qinhao/hexo/public/tags/VPN/index.html","c3fc586574bd58832ba75a290eea2f6b"],["E:/qinhao/hexo/public/tags/Web服务器/index.html","4f0cc4c5ec550ca721b79225c8fce6ef"],["E:/qinhao/hexo/public/tags/index.html","30984071bd43499480abf08858e830c7"],["E:/qinhao/hexo/public/tags/交换机/index.html","d30b74f131cb04121f8618013683664c"],["E:/qinhao/hexo/public/tags/图像处理/index.html","1d2a841765cdd495390ab2370bcd8a9b"],["E:/qinhao/hexo/public/tags/基础网络/index.html","0c875d02ddc7e0a383141b71f55c2f17"],["E:/qinhao/hexo/public/tags/思科/index.html","4050ccbe9117400f122a33172737a616"],["E:/qinhao/hexo/public/tags/思科GRE/index.html","bf0baaec49ef2c6f84f3a2946573c313"],["E:/qinhao/hexo/public/tags/数据库/index.html","c9a7007db150ccf166d0fc0d6256be44"],["E:/qinhao/hexo/public/tags/无线技术/index.html","baeeccc89b2cfa38f96a849ace815665"],["E:/qinhao/hexo/public/tags/无线技术/page/2/index.html","c6c0b0818283a7c4538186a8d28ec8d0"],["E:/qinhao/hexo/public/tags/系统安装/index.html","df861c86bb3bf40df26d94c3aad920e3"],["E:/qinhao/hexo/public/tags/网络安全/index.html","a38b063cb736077b34f7d74e6e91259a"],["E:/qinhao/hexo/public/tags/网络技术/index.html","7b172b0e00c879a389b21ef0f82e0939"],["E:/qinhao/hexo/public/tags/计算机三级/index.html","7bf05aa3472643ea6e7c97790e049437"],["E:/qinhao/hexo/public/tags/路由器/index.html","c60094a7b2a944dd839af1d3e8589524"],["E:/qinhao/hexo/public/tags/软考/index.html","6b78091a4a4d600c88a5d8390e1c2149"],["E:/qinhao/hexo/public/tags/通信原理/index.html","f709b56788ba72b5244b985fdca5a8d4"],["E:/qinhao/hexo/public/tags/通信原理/page/2/index.html","00b154e56beaace8512206c9ccbcecca"],["E:/qinhao/hexo/public/tags/通信技术/index.html","eebd7698d17418e626d66ee2e555ae8f"],["E:/qinhao/hexo/public/tags/通信技术/page/2/index.html","e18ced26f01a2034dd01f9789cf5fc1c"]];
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







