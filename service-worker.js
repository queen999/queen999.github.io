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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","0b60f850080545b6a50a870fe99159d3"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","80150214b1c6e02d6bb9ce3c3ece417d"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","5a2509f227d874b4a503ca88c591edae"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","2b76fb9c1021f7bc227b96a3059b43a8"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","66cb162080a4af61ffa05e596c6d8e04"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","f28589b07fa5806f6691f81560bf70eb"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","a1e456b5eff34f0667c0128c7a770866"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","5fcae8b478e29412e3c8d0816927dc44"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","e138528246d89ca97aa2ef1723685cf8"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","63f3f7088495755ac432374de3c11d2d"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","593b319cb516c5f70505d6cb0c61dcdf"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","ff97a7ca956744fb77252bb4ff185297"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","00aab0b283036fc8ad4a40a61c0e6450"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","460113a2d86948a61fffde0f353bccb3"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","567c692a249c8193ab91059b25eae41b"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","a61de7ebefda71686400680a79fc98f4"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","39c766e69f26473746d149c133c498b0"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","82bdb5d3784989a1e5575fe57435f13f"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","6625d5da16d86b5ca12c9a8e6bdf79d9"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","62111efbee08cd2053d343cb2bcf4857"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","b6c0d6446212b8db70ff4bc708da0ae1"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","015e0a57be54f948aa2787b9fc576e8d"],["E:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","20737e35cf875e5eadce698131a76fe1"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","7b49013b3c358823d6353ba003d2ddf2"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","ec4ab824ec35424133c509d7c8cc80b0"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","2d98ca1baeb5e9fe671ffb4124a2e62c"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","1ece2e66f32be60839096754c29979a2"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","889cb86a087a4eebaf2d26f0d93bfb5f"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","47bc594b815ec0a468bf9968d0216063"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","48b84d8d4cd351a151cad8fae263b9ad"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","7ee2eb6dd06c41b867c54ad6d05ad804"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","81e4fe5bba49e59f615d6c16ac4385a4"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","ada5474ce35bf96765069b13d7b0a27d"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","00fad2f5c063a6cf7a4b9c865542cadb"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","79c60cdf0ec49a601e028158f57cd649"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","249cc4818e3fbf7c00401306849e0138"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","91ae93a501900d2c60fa54c6808921ec"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","5009745cbf3874d24baa54db9a41960b"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","167c9fea27f996c3a9cdeef2e7a95fd5"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","8dc7a6298844d0f1f3161dacc5a59c87"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","dd6897b59d8c8b93483ed6b2e287cac9"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","d303e7d9734d6a22ac3dd2a725b797c4"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","a54de66da67a8b0047e86885c930a6d9"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","28e5729d9cd1efa8799ac0c2859edde5"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","91c7f96c5a4a026a5229e04c094171ce"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","24e38649e7155dec3aca400eacf99028"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","e38ed327c967e1d1fd768a15c965fb1b"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","c33743ff98bc67bfcb558cffc5fecacd"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","512828502472ca87dc73c3c4cfb1f704"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","0607ff15b9c5f910787e7ece1faedb8b"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","5b7e3da466c1d7e66cee6c4d2c9b424c"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","9be9f316bb607e04f65ce8782108ce0d"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","fb6b5a92a092cd343aa233a017b32098"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","45482b0f23545d24dc4927957e571151"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","7efb11d50d318f3b99d68ca25e49079a"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","1ccc7a81e00c89093c9a734a08b51f1b"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","cbdec522b4802784324e12cf8b800da4"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","0117f39fc7dc9b1a7005118130ee0961"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","a24e055faf91f7a45523741629bbbb28"],["E:/qinhao/hexo/public/2021/03/01/c_1/index.html","92a37804219327664e3c675545620434"],["E:/qinhao/hexo/public/2021/03/02/c_2/index.html","b3570801e08e3319052502154ed58069"],["E:/qinhao/hexo/public/2021/03/03/c_3/index.html","8986f7befa2a8d13f95aa1e365d257ad"],["E:/qinhao/hexo/public/2021/03/04/c_4/index.html","34532edd9c86e4eb815096d349c68dc4"],["E:/qinhao/hexo/public/2021/03/05/c_5/index.html","f8af80a912b205c5f6ccb39b26c7e73a"],["E:/qinhao/hexo/public/2021/03/06/c_6/index.html","da43b64f4c1e09d9dae5411784080914"],["E:/qinhao/hexo/public/2021/03/07/c_7/index.html","a430c3892f3c247c052d758c07c18918"],["E:/qinhao/hexo/public/2021/03/08/c_8/index.html","d44885aea71badbaee37d8e62342b364"],["E:/qinhao/hexo/public/2021/03/15/c_9/index.html","8f803240ca7dab856ffba02d7bd77de4"],["E:/qinhao/hexo/public/2021/03/16/c_10/index.html","6f26aa608b6e3fda2add4f8614856265"],["E:/qinhao/hexo/public/2021/03/17/c-11/index.html","d9784f503af907cca489551e5a28411e"],["E:/qinhao/hexo/public/2021/04/25/FileDownload/index.html","c1a230309b47a611514444034d3d5639"],["E:/qinhao/hexo/public/2021/04/25/PythonUdp/index.html","ff99b8e4e607ee7498bd521b38bf94cf"],["E:/qinhao/hexo/public/2021/04/25/TCP/index.html","5167bfa3882396b9c4512e3dc71e4daa"],["E:/qinhao/hexo/public/2021/04/25/TCP_client/index.html","6c1953be7f64afd8b0cee89fbf45a26c"],["E:/qinhao/hexo/public/2021/04/25/TCP_server/index.html","ed222222d1b971f600a5d8dffe92822f"],["E:/qinhao/hexo/public/2021/05/14/CPU_Register/index.html","c2fb8b0072a0ecd355829aa756994d97"],["E:/qinhao/hexo/public/2021/05/14/gcc/index.html","98edd5d48b72df82328838be85ce32e8"],["E:/qinhao/hexo/public/2021/05/20/Algorithm_1/index.html","c42b8716eb3a327e54b20d0eb859ccbd"],["E:/qinhao/hexo/public/2021/05/20/C_Programming_1/index.html","49cfce07d081f1596e4e243521c57ae9"],["E:/qinhao/hexo/public/2021/05/21/Base/index.html","7adf9547ab8a56411aaa8f0679a750a9"],["E:/qinhao/hexo/public/2021/05/22/memory_save_number/index.html","977a49401c9dab9e490dfa806e3e9553"],["E:/qinhao/hexo/public/2021/06/24/OverLoad_1/index.html","eebeeb0ff101960b2798b97caa5806ee"],["E:/qinhao/hexo/public/2021/07/06/mysql_question_1/index.html","d47e6583f238429a87676cf4aae5fe36"],["E:/qinhao/hexo/public/2021/07/07/mysql_dql_1/index.html","115b152cca181b0278ac83ddcf84a043"],["E:/qinhao/hexo/public/2021/07/08/mysql_forget_root_password/index.html","55582d64c557365fa9255425268c7254"],["E:/qinhao/hexo/public/ByteDanceVerify.html","5ed72d86f9bcf1f388698c6d7b592030"],["E:/qinhao/hexo/public/about/index.html","de07fdce8cf03046ef56510bf74d1147"],["E:/qinhao/hexo/public/archives/2020/02/index.html","9a45d8fcda4b6b63a310cd3c92f4511e"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","c5910d5cc415eaac34ba83a9dee158f0"],["E:/qinhao/hexo/public/archives/2020/03/index.html","ebb1e3eae91287dfdeb3ac91a9457641"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","8f27dcf0c3309c9638cdbd6c61d4eace"],["E:/qinhao/hexo/public/archives/2020/04/index.html","a0a69a354515514a72436119349fe8f6"],["E:/qinhao/hexo/public/archives/2020/05/index.html","dd817d57a4508984032d1942d4a2fdf9"],["E:/qinhao/hexo/public/archives/2020/06/index.html","d597abbab84f11f351783a16c54b093e"],["E:/qinhao/hexo/public/archives/2020/07/index.html","767b10b73594e053eb39ff86fdef0e1b"],["E:/qinhao/hexo/public/archives/2020/08/index.html","fa2dab8fd9e6fa6650e01ab5701a6eb8"],["E:/qinhao/hexo/public/archives/2020/10/index.html","2f33917d4d029029cddb840ab633ff34"],["E:/qinhao/hexo/public/archives/2020/11/index.html","0fcb658517970fa2e22a5b9cc848b474"],["E:/qinhao/hexo/public/archives/2020/index.html","9ec1d673e7447d9bdfd7d6447135dd76"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","01b9fca0e9a96ac6f67a8c9895d4a53a"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","c3383204f4f2efbfdf9c4602b367a31c"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","d5b81390f71b84f2a6e928b68681e32d"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","5e75505aeb1ef7e7399f0500ad250ac6"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","fa024f8090ee7af8398a9551b7da3bdc"],["E:/qinhao/hexo/public/archives/2021/03/index.html","195cc130cceee120ff45049d788045e2"],["E:/qinhao/hexo/public/archives/2021/03/page/2/index.html","51bac7ed343c53b6c59cf839c64ad806"],["E:/qinhao/hexo/public/archives/2021/04/index.html","3be76fd05a0a7f721502b29f82c8ebca"],["E:/qinhao/hexo/public/archives/2021/05/index.html","35221d2688f9c86bc7dfff92411c7ec7"],["E:/qinhao/hexo/public/archives/2021/06/index.html","e27e8443bb6dd6c3ea84bece88fafd3d"],["E:/qinhao/hexo/public/archives/2021/07/index.html","2bd3308b83654934af1d8d727e78cbed"],["E:/qinhao/hexo/public/archives/2021/index.html","232b0dd4e05a065060159f3248b05ab5"],["E:/qinhao/hexo/public/archives/2021/page/2/index.html","1ad72b90c94133be792b86a710db85e3"],["E:/qinhao/hexo/public/archives/2021/page/3/index.html","88ae56a3cf4fc4182e4c916c159fb67f"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","5595271784a134291db705b6d1b83a2d"],["E:/qinhao/hexo/public/archives/index.html","9791b0afeb62b78c5341a431794daf49"],["E:/qinhao/hexo/public/archives/page/2/index.html","4bd9a3f18c6942c882d7581efeab1e26"],["E:/qinhao/hexo/public/archives/page/3/index.html","4bd9a3f18c6942c882d7581efeab1e26"],["E:/qinhao/hexo/public/archives/page/4/index.html","4bd9a3f18c6942c882d7581efeab1e26"],["E:/qinhao/hexo/public/archives/page/5/index.html","4bd9a3f18c6942c882d7581efeab1e26"],["E:/qinhao/hexo/public/archives/page/6/index.html","83a6576f9934f27038dba2556137d29b"],["E:/qinhao/hexo/public/archives/page/7/index.html","74eacaf5be09bcd3ca61675377f9b355"],["E:/qinhao/hexo/public/archives/page/8/index.html","d4bcfc4db5a2504bf9279db19151c30f"],["E:/qinhao/hexo/public/archives/page/9/index.html","74eacaf5be09bcd3ca61675377f9b355"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/C语言/index.html","a70c80f58102e6625938ae01bdaba8fa"],["E:/qinhao/hexo/public/categories/C语言/page/2/index.html","f2b0a5ca915d0fb209e68f97d591ede7"],["E:/qinhao/hexo/public/categories/Java/index.html","480b18e88c03629763d2c2f775021dcc"],["E:/qinhao/hexo/public/categories/Linux/index.html","d2d22149cca72ecca42bfa6b607b48bb"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","ab90b86d6bcff582cfbee18faccda591"],["E:/qinhao/hexo/public/categories/Python/index.html","8439fa2cf297136f6b4bbb4fcbbdfe3d"],["E:/qinhao/hexo/public/categories/Python/page/2/index.html","b400eb7a2c348fab1927d9eac1e9aa76"],["E:/qinhao/hexo/public/categories/交换机/index.html","06453b5d35d76d7c848e79fbdd78582f"],["E:/qinhao/hexo/public/categories/华为认证/index.html","625985e83c3b8cacb2eb5c4b9a32c223"],["E:/qinhao/hexo/public/categories/小技巧/index.html","3b5596d6d9ae2c02c6a73fdcd15ad140"],["E:/qinhao/hexo/public/categories/数据库/index.html","60c7a9018f3fdc27b554ddceafbf7f65"],["E:/qinhao/hexo/public/categories/服务器/index.html","5a06e80ef1d15dcb9bf142e3e1aaba28"],["E:/qinhao/hexo/public/categories/算法基础/index.html","ddf02b3c47c3c306b14a3c01f33b90c4"],["E:/qinhao/hexo/public/categories/网络安全/index.html","5fe6028b0eb0158623dc69c422a0be40"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","11d9023bbbdf29c10e8c4ee9c92843ef"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","2fa51ef20f36f93da9685bf4ee256a79"],["E:/qinhao/hexo/public/categories/软件破解/index.html","8a706be10aa6926042e554bd5952ac4b"],["E:/qinhao/hexo/public/categories/通信技术/index.html","52449883e0231b0bee60a3e4f4e699cb"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","c3a4adee060d81376fdd9d092a256834"],["E:/qinhao/hexo/public/category/index.html","053ddd3d2e7415b43f26fee72eef13f7"],["E:/qinhao/hexo/public/css/style.css","69bbc27a8094ac09453486ddd0820200"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","076e3508d27092947ae39737e2488397"],["E:/qinhao/hexo/public/donate/drinks/script.js","1c65abbe04a6bff48000efbc6a2a0648"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","1edd6baa549da99da85451d92cde64f8"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["E:/qinhao/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["E:/qinhao/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/friends/index.html","887970d5cf45e989d13e9d5843304dc7"],["E:/qinhao/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["E:/qinhao/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["E:/qinhao/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["E:/qinhao/hexo/public/index.html","336f4b109bd42b042d516b7b8875c8e7"],["E:/qinhao/hexo/public/js/aplayer.js","a0a8f225cab4df42a6e0164b45d7641a"],["E:/qinhao/hexo/public/js/app.js","60b11cc8c0c85ca294cd3ff2e82096ad"],["E:/qinhao/hexo/public/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["E:/qinhao/hexo/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["E:/qinhao/hexo/public/mylist/index.html","dd6630da2ecac9d8d5d460aa24d772a9"],["E:/qinhao/hexo/public/page/2/index.html","667594e8a43f2bb3d0a607dfa48c5db3"],["E:/qinhao/hexo/public/page/3/index.html","e1d2330cb1f3efeafce8bf7cdb9d6fd6"],["E:/qinhao/hexo/public/page/4/index.html","583843588e19bb1dbacbd4fef4d9e0de"],["E:/qinhao/hexo/public/page/5/index.html","2220f7ad7f0a3c9b12792869062ce450"],["E:/qinhao/hexo/public/page/6/index.html","6b475598a3d7a34d0eddf980b6ef2d88"],["E:/qinhao/hexo/public/page/7/index.html","71c8bd2914406f58727711239744eb65"],["E:/qinhao/hexo/public/page/8/index.html","53620ba0db560a58a436a5d699226009"],["E:/qinhao/hexo/public/page/9/index.html","de7bd1138b0f66f60809d0409c906a97"],["E:/qinhao/hexo/public/style.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/sw-register.js","0292ce7c8411c736da8c90d2dad02c53"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/tags/IIS/index.html","ff4aac250ca3eed7029a1a5e2689dd8e"],["E:/qinhao/hexo/public/tags/MySQL/index.html","4d5d5eeb5ae6aeb9adf09f02a4881132"],["E:/qinhao/hexo/public/tags/Photoshop/index.html","1bb2a00bf09d6d463b49a2859ea1836a"],["E:/qinhao/hexo/public/tags/VPN/index.html","ec65051d948c94bc1685a901989f5c8d"],["E:/qinhao/hexo/public/tags/Web服务器/index.html","a5aad896aead467866b05c6d10a6805a"],["E:/qinhao/hexo/public/tags/index.html","a4de729dc411dbd0efd3a79f3a50551b"],["E:/qinhao/hexo/public/tags/交换机/index.html","1d603e4edca4f0fa1200ca4e44d5b849"],["E:/qinhao/hexo/public/tags/图像处理/index.html","89a8124b5311215f85637db60aa095cb"],["E:/qinhao/hexo/public/tags/基础网络/index.html","7aaed9cf8459dc16a4d739379cc157c9"],["E:/qinhao/hexo/public/tags/思科/index.html","c0a28309892d3fac5967afea24f5d511"],["E:/qinhao/hexo/public/tags/思科GRE/index.html","fdc5fdb3c73b984da5efe4b75b63a9ae"],["E:/qinhao/hexo/public/tags/数据库/index.html","0a5922571a2dd55a74f957a3994cc274"],["E:/qinhao/hexo/public/tags/无线技术/index.html","22a9d1318097103a20f4190004e995ca"],["E:/qinhao/hexo/public/tags/无线技术/page/2/index.html","4ce728526ad3c7bf2967bab87f69655e"],["E:/qinhao/hexo/public/tags/系统安装/index.html","52208f71310a28e1993d369aec66d65a"],["E:/qinhao/hexo/public/tags/网络安全/index.html","5d94136362e90e879fb349165c09c892"],["E:/qinhao/hexo/public/tags/网络技术/index.html","d5875d86bafa2e1725809534b82b48be"],["E:/qinhao/hexo/public/tags/计算机三级/index.html","4b778360d17c3e8e0e619884de0266f8"],["E:/qinhao/hexo/public/tags/路由器/index.html","36c32908fd4fd7e5669f361b25eee0d1"],["E:/qinhao/hexo/public/tags/软考/index.html","9b62587abd17931c21d7b6428a0fde10"],["E:/qinhao/hexo/public/tags/通信原理/index.html","05d3b8744a750a2c23c95da14e372cdc"],["E:/qinhao/hexo/public/tags/通信原理/page/2/index.html","264510dec04e319ebb5f6dd5559e4d64"],["E:/qinhao/hexo/public/tags/通信技术/index.html","269784e6978f10c9c948638bbe2c2469"],["E:/qinhao/hexo/public/tags/通信技术/page/2/index.html","92e8dce9cb2417a1e582f4ee0d20b660"]];
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







