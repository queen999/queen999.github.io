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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","823c833deb6bb130be4abf97f6f53f8c"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","9bb0588da7c701b61522bbb2fbad62b2"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","04bad81de49bd1706a471f0e34063b00"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","c506650e075181eb7b93002147896b6a"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","359d54ad32629a2caf7a7fe0a53120e1"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","c7733f8dddeb55d0266aedd90b19ee00"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","b1890d238badc1f1a9be833995b097f6"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","73a74569cc1acaf625d43a974a34a347"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","e3f079d3767f365820257a7bde9edde6"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","3bd23f52b310c4169bbc30fec70486f9"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","85d8b97e7ffc1141201191ccff850ddc"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","be6ab5e55d13b30849fda37b44734a57"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","f5eae6a315bdff40b89647132d79f6b5"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","004aadfb521de575020e88c802b973a1"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","88bae236141528390b55f75223c65714"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","f9bc37d0976808ee0e0ede5f8b3ddf75"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","73fa39f34b9eb3516c0a0479f51f9513"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","afe97726cdadd82477107b0b7f14b7ae"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","7071f663f6dc5bccbbb8fc563d3bb522"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","0fd6f9d3e317afd20e4c0df4d0946e02"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","515b4487f734d98d98711724248fb605"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","2b164bf3dc71f08b6127fb4f0104966e"],["E:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","5887916620e7a095442dc937a31e89bf"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","304641aa4d218d21abeea660e3141f64"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","de0d8d40689627dcc7904a829d2b4d23"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","b701d57a82d55ea241e894416122dcb2"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","6e0f39f596e006dc55206e0f3a527409"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","345370ce5d2fd1a5ad891200a9a8b75c"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","47d6c417bcb797293c350e4b9c56ec21"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","3f4e1c60eeccbc7cd511c9b0c06164e9"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","78d49c37f05eae6092d0ce113193e502"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","fbb3753a8ee28e33e5985c6471d8866b"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","3edbd0d4f4089523c10de5c8bf2a1e9f"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","e4c99c90dd02afbd8c233557d91c2b9d"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","b569b30c864e88a21e8b284765bf865e"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","db5f111a6661d96292c25393c8cee272"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","a36dfcb1e0bf3671e068923c700d1c8a"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","46a8d08fbeb6d80648985194455f5474"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","94e445bf7b37e7fc7025a24c6bc10d56"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","49ffcaae0ab43ec9356eb4228ec98837"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","952163af91b5d5a425ef78f6c5432bb5"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","6f69efd98fd7607641b3e2b6cbca79bb"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","0ba8f7d9011a31f9b6536cc948ad90d9"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","ac1eb4028f1e351c8ec31d7bd1b235be"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","c9f698ad207a9d472bab21c0c60458af"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","d91c15285e4f89be93503710823a15ee"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","80fc137f0d7e7ca84ea494ee1d74042f"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","71fd56257db20239a3be28a4e784cca5"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","9c99177c0f6f5cf08e245178d67bd861"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","3eacacec67e5a385edf6af11c233327a"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","4c58ad3b3adb377f28b808b21ae2806e"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","cdecf4828d842391ff59fa344383b644"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","1087e5a37fda2de394496cda70aeffab"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","2cd1273534a6dcefe4e7e8f04b150e09"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","a012b2b6c76f47abe5117a52c01d8d68"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","31804ce5c40fd11b4cdcad136ce11d4b"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","2ba72d77eaceb4254f9e1989ac3c7d1b"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","968fac2d90f5c7aa4487138a768044f0"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","4affd5aae0f0d7396b8e4bf111043408"],["E:/qinhao/hexo/public/2020/12/15/C_basic/index.html","a9f2e6d564c1496ae543c01af5526498"],["E:/qinhao/hexo/public/ByteDanceVerify.html","28cc453edd5e220c257b96d36d2c288b"],["E:/qinhao/hexo/public/about/index.html","cf34cb2cc11a31a8426e062209e1e9e0"],["E:/qinhao/hexo/public/archives/2020/02/index.html","37c89e8d92abbe1967c9d9716101fdb1"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","21f0d207a4da9fca78f132586123cf33"],["E:/qinhao/hexo/public/archives/2020/03/index.html","fc8dea371a4c3c9eb87ab0ad4ac54751"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","ed400051bb199832dfd858f3e95c8d1f"],["E:/qinhao/hexo/public/archives/2020/04/index.html","501680f0f3c9e683097becab1295e382"],["E:/qinhao/hexo/public/archives/2020/05/index.html","e5b333d8714183920b95621662f5abe2"],["E:/qinhao/hexo/public/archives/2020/06/index.html","80dc67e7207a1664635751c8cc9eeae5"],["E:/qinhao/hexo/public/archives/2020/07/index.html","98240930b7e5f96b3e40d330bfa05b67"],["E:/qinhao/hexo/public/archives/2020/08/index.html","1bf66f0f928d2686d0a6ad1b0eb15bd3"],["E:/qinhao/hexo/public/archives/2020/10/index.html","8c1185592b316a9a4fa3f5ce4762eaad"],["E:/qinhao/hexo/public/archives/2020/11/index.html","b38f9c2b99acdeba6e8ed91d5f31d751"],["E:/qinhao/hexo/public/archives/2020/12/index.html","d8eefa75ec7f04c08434e2295a8461d4"],["E:/qinhao/hexo/public/archives/2020/index.html","643f6411553ace79610828f328afbbbb"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","0cd010fb21cb8a5b603665ac99a3483d"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","e4e26a4521c4f0da6065836dfe239a07"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","3b0f2a2968027d89f56212ce65570e3f"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","85750b1ebd2a8f9cd7f9e64e5fa60e62"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","19670b41daf6e5221958c7d43ff9ed54"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","62be2d0e6c3e34ab97ceb8bbadae08ca"],["E:/qinhao/hexo/public/archives/index.html","be3d8762f933f56ff7c6e146536cc539"],["E:/qinhao/hexo/public/archives/page/2/index.html","199fe48d710f4122b9393d4cefd86ac0"],["E:/qinhao/hexo/public/archives/page/3/index.html","be3d8762f933f56ff7c6e146536cc539"],["E:/qinhao/hexo/public/archives/page/4/index.html","199fe48d710f4122b9393d4cefd86ac0"],["E:/qinhao/hexo/public/archives/page/5/index.html","199fe48d710f4122b9393d4cefd86ac0"],["E:/qinhao/hexo/public/archives/page/6/index.html","0d9e7caca324f5f7d4f56ca5d3997205"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/C语言/index.html","eb35c23bfd2862509667ce088836d5e3"],["E:/qinhao/hexo/public/categories/Java/index.html","fc93113af559c2846ef325ba0f44e6a2"],["E:/qinhao/hexo/public/categories/Linux/index.html","2e408e53862a3a40b146fac21eb44a45"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","c84903e6d95fab5330772fbb6836443b"],["E:/qinhao/hexo/public/categories/Python/index.html","6cac278757f3ac6e628dfaf6ae36d199"],["E:/qinhao/hexo/public/categories/交换机/index.html","54586617512b4099047371382717c90a"],["E:/qinhao/hexo/public/categories/华为认证/index.html","17ae01915d6668bcedf65e4ad3eb9c0a"],["E:/qinhao/hexo/public/categories/小技巧/index.html","00cb0b3d43f462f5e7d7832e48fc3a3a"],["E:/qinhao/hexo/public/categories/数据库/index.html","3f3809b6ac3bb9a8b07bc53462519202"],["E:/qinhao/hexo/public/categories/服务器/index.html","7702df1c05242282a85ea09b80ad3976"],["E:/qinhao/hexo/public/categories/网络安全/index.html","bcb024cd87b39148ec659ae99c84d377"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","ae23ee93f91829570895f63c48417499"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","a8718f4a7b96e2a2f3831ec104f0f4fc"],["E:/qinhao/hexo/public/categories/软件破解/index.html","1a0f9fca575913c09f0370cadd424b81"],["E:/qinhao/hexo/public/categories/通信技术/index.html","a8b4cdb0712169f3fcf2d4a072ac65ae"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","a9ba0e212b39db281d2ef345a1d039eb"],["E:/qinhao/hexo/public/category/index.html","be5eec7e7e9adc9d676732fc6a260cfd"],["E:/qinhao/hexo/public/css/style.css","69bbc27a8094ac09453486ddd0820200"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","076e3508d27092947ae39737e2488397"],["E:/qinhao/hexo/public/donate/drinks/script.js","1c65abbe04a6bff48000efbc6a2a0648"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","1edd6baa549da99da85451d92cde64f8"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["E:/qinhao/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["E:/qinhao/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/friends/index.html","3c84543e12c180f6914af3365cb18567"],["E:/qinhao/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["E:/qinhao/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["E:/qinhao/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["E:/qinhao/hexo/public/index.html","54d02a378f8feba3ccf2ffe209c06ede"],["E:/qinhao/hexo/public/js/aplayer.js","a0a8f225cab4df42a6e0164b45d7641a"],["E:/qinhao/hexo/public/js/app.js","60b11cc8c0c85ca294cd3ff2e82096ad"],["E:/qinhao/hexo/public/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["E:/qinhao/hexo/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["E:/qinhao/hexo/public/mylist/index.html","f01fdb6cf7c88dbb2e20ae4ae3b92d7f"],["E:/qinhao/hexo/public/page/2/index.html","b31b448a3e8061a4411fe160c0bf5c47"],["E:/qinhao/hexo/public/page/3/index.html","d2ed2f6d429c7d7f03a2b0c7b109e882"],["E:/qinhao/hexo/public/page/4/index.html","1899b613bf381a77ba09bce5eaa831f9"],["E:/qinhao/hexo/public/page/5/index.html","6646522b87cea44830a0685b8bec7c8d"],["E:/qinhao/hexo/public/page/6/index.html","c4b0b00c53154d6a00353a0f0e4c4629"],["E:/qinhao/hexo/public/style.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/sw-register.js","72fbf59fab057f72b16998eaa17e355c"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/tags/IIS/index.html","0b6a36f2c036d7edf04e158152154157"],["E:/qinhao/hexo/public/tags/MySQL/index.html","6b1e5136d56ff95e25438a3f64739edd"],["E:/qinhao/hexo/public/tags/Photoshop/index.html","248a0a4f40db110f812923ae7914ded3"],["E:/qinhao/hexo/public/tags/VPN/index.html","2f6f6d0763d9e6eade3603097625f55c"],["E:/qinhao/hexo/public/tags/Web服务器/index.html","f56848a34dae068a86bc21e1416a86dd"],["E:/qinhao/hexo/public/tags/index.html","30984071bd43499480abf08858e830c7"],["E:/qinhao/hexo/public/tags/交换机/index.html","b1aa23ae6f0007eba3235af59c99b805"],["E:/qinhao/hexo/public/tags/图像处理/index.html","e724ff1f9342378fb0ee2bf64a86d9cc"],["E:/qinhao/hexo/public/tags/基础网络/index.html","846158acadfe0f8c467c2b61e3600960"],["E:/qinhao/hexo/public/tags/思科/index.html","045f24e2fdf9fa1874e2c33cd12422be"],["E:/qinhao/hexo/public/tags/思科GRE/index.html","0d0383e3ff26ed62517627df6001f0b3"],["E:/qinhao/hexo/public/tags/数据库/index.html","f8144e61635c0cd609d7495d8eebd692"],["E:/qinhao/hexo/public/tags/无线技术/index.html","27bac29a5ad6dbf994ae1a43c4abfa43"],["E:/qinhao/hexo/public/tags/无线技术/page/2/index.html","ac5f31d641014b11475ebe8577f17f4d"],["E:/qinhao/hexo/public/tags/系统安装/index.html","174d50a4b07ed9edc8bca2c5a788d831"],["E:/qinhao/hexo/public/tags/网络安全/index.html","f1bb78edc015871b35017fec2644af5d"],["E:/qinhao/hexo/public/tags/网络技术/index.html","971eb3ddcdfcf51a6e1e1c0a1aba4ddc"],["E:/qinhao/hexo/public/tags/计算机三级/index.html","73ff803e7a27eea79ff493c686818188"],["E:/qinhao/hexo/public/tags/路由器/index.html","be8517497a192be164d9a9db257e8d9d"],["E:/qinhao/hexo/public/tags/软考/index.html","05ad0045ebbcd5b27edda96bf33e085b"],["E:/qinhao/hexo/public/tags/通信原理/index.html","acd7542f415c30803230230235115cbf"],["E:/qinhao/hexo/public/tags/通信原理/page/2/index.html","28d812584d34991b35794f9c91a25a9d"],["E:/qinhao/hexo/public/tags/通信技术/index.html","5e3c252be41386852e71e28cfba20a87"],["E:/qinhao/hexo/public/tags/通信技术/page/2/index.html","25a13f62525026284c18cc22bf10c4c2"]];
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







