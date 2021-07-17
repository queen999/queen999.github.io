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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","0b60f850080545b6a50a870fe99159d3"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","80150214b1c6e02d6bb9ce3c3ece417d"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","5a2509f227d874b4a503ca88c591edae"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","2b76fb9c1021f7bc227b96a3059b43a8"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","66cb162080a4af61ffa05e596c6d8e04"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","f9aeaca2a9e185044c44769e92bf958c"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","a1e456b5eff34f0667c0128c7a770866"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","5fcae8b478e29412e3c8d0816927dc44"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","e138528246d89ca97aa2ef1723685cf8"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","63f3f7088495755ac432374de3c11d2d"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","593b319cb516c5f70505d6cb0c61dcdf"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","3c8f972c8f3a2cd11542306edc917a73"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","00aab0b283036fc8ad4a40a61c0e6450"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","460113a2d86948a61fffde0f353bccb3"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","ff0ae1800aaf117788211f0dc27771b9"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","a61de7ebefda71686400680a79fc98f4"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","39c766e69f26473746d149c133c498b0"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","82bdb5d3784989a1e5575fe57435f13f"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","6625d5da16d86b5ca12c9a8e6bdf79d9"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","62111efbee08cd2053d343cb2bcf4857"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","b6c0d6446212b8db70ff4bc708da0ae1"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","015e0a57be54f948aa2787b9fc576e8d"],["E:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","20737e35cf875e5eadce698131a76fe1"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","7b49013b3c358823d6353ba003d2ddf2"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","ec4ab824ec35424133c509d7c8cc80b0"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","2d98ca1baeb5e9fe671ffb4124a2e62c"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","1ece2e66f32be60839096754c29979a2"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","889cb86a087a4eebaf2d26f0d93bfb5f"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","47bc594b815ec0a468bf9968d0216063"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","48b84d8d4cd351a151cad8fae263b9ad"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","7ee2eb6dd06c41b867c54ad6d05ad804"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","81e4fe5bba49e59f615d6c16ac4385a4"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","ada5474ce35bf96765069b13d7b0a27d"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","00fad2f5c063a6cf7a4b9c865542cadb"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","79c60cdf0ec49a601e028158f57cd649"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","249cc4818e3fbf7c00401306849e0138"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","91ae93a501900d2c60fa54c6808921ec"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","5009745cbf3874d24baa54db9a41960b"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","167c9fea27f996c3a9cdeef2e7a95fd5"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","8dc7a6298844d0f1f3161dacc5a59c87"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","dd6897b59d8c8b93483ed6b2e287cac9"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","d303e7d9734d6a22ac3dd2a725b797c4"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","a54de66da67a8b0047e86885c930a6d9"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","28e5729d9cd1efa8799ac0c2859edde5"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","91c7f96c5a4a026a5229e04c094171ce"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","24e38649e7155dec3aca400eacf99028"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","e38ed327c967e1d1fd768a15c965fb1b"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","c33743ff98bc67bfcb558cffc5fecacd"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","512828502472ca87dc73c3c4cfb1f704"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","0607ff15b9c5f910787e7ece1faedb8b"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","5b7e3da466c1d7e66cee6c4d2c9b424c"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","9be9f316bb607e04f65ce8782108ce0d"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","fb6b5a92a092cd343aa233a017b32098"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","45482b0f23545d24dc4927957e571151"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","7efb11d50d318f3b99d68ca25e49079a"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","4bef8b7faef04aab7d1ef0ef959f479d"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","cbdec522b4802784324e12cf8b800da4"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","0117f39fc7dc9b1a7005118130ee0961"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","a24e055faf91f7a45523741629bbbb28"],["E:/qinhao/hexo/public/2021/03/01/c_1/index.html","92a37804219327664e3c675545620434"],["E:/qinhao/hexo/public/2021/03/02/c_2/index.html","b3570801e08e3319052502154ed58069"],["E:/qinhao/hexo/public/2021/03/03/c_3/index.html","8986f7befa2a8d13f95aa1e365d257ad"],["E:/qinhao/hexo/public/2021/03/04/c_4/index.html","34532edd9c86e4eb815096d349c68dc4"],["E:/qinhao/hexo/public/2021/03/05/c_5/index.html","f8af80a912b205c5f6ccb39b26c7e73a"],["E:/qinhao/hexo/public/2021/03/06/c_6/index.html","da43b64f4c1e09d9dae5411784080914"],["E:/qinhao/hexo/public/2021/03/07/c_7/index.html","a430c3892f3c247c052d758c07c18918"],["E:/qinhao/hexo/public/2021/03/08/c_8/index.html","d44885aea71badbaee37d8e62342b364"],["E:/qinhao/hexo/public/2021/03/15/c_9/index.html","8f803240ca7dab856ffba02d7bd77de4"],["E:/qinhao/hexo/public/2021/03/16/c_10/index.html","6f26aa608b6e3fda2add4f8614856265"],["E:/qinhao/hexo/public/2021/03/17/c-11/index.html","d9784f503af907cca489551e5a28411e"],["E:/qinhao/hexo/public/2021/04/25/FileDownload/index.html","c1a230309b47a611514444034d3d5639"],["E:/qinhao/hexo/public/2021/04/25/PythonUdp/index.html","ff99b8e4e607ee7498bd521b38bf94cf"],["E:/qinhao/hexo/public/2021/04/25/TCP/index.html","5167bfa3882396b9c4512e3dc71e4daa"],["E:/qinhao/hexo/public/2021/04/25/TCP_client/index.html","6c1953be7f64afd8b0cee89fbf45a26c"],["E:/qinhao/hexo/public/2021/04/25/TCP_server/index.html","ed222222d1b971f600a5d8dffe92822f"],["E:/qinhao/hexo/public/2021/05/14/CPU_Register/index.html","c2fb8b0072a0ecd355829aa756994d97"],["E:/qinhao/hexo/public/2021/05/14/gcc/index.html","98edd5d48b72df82328838be85ce32e8"],["E:/qinhao/hexo/public/2021/05/20/Algorithm_1/index.html","dffa39972506424b07183fc205216e7e"],["E:/qinhao/hexo/public/2021/05/20/C_Programming_1/index.html","49cfce07d081f1596e4e243521c57ae9"],["E:/qinhao/hexo/public/2021/05/21/Base/index.html","7adf9547ab8a56411aaa8f0679a750a9"],["E:/qinhao/hexo/public/2021/05/22/memory_save_number/index.html","977a49401c9dab9e490dfa806e3e9553"],["E:/qinhao/hexo/public/2021/06/24/OverLoad_1/index.html","eebeeb0ff101960b2798b97caa5806ee"],["E:/qinhao/hexo/public/2021/07/06/mysql_question_1/index.html","d47e6583f238429a87676cf4aae5fe36"],["E:/qinhao/hexo/public/2021/07/07/mysql_dql_1/index.html","115b152cca181b0278ac83ddcf84a043"],["E:/qinhao/hexo/public/2021/07/08/mysql_forget_root_password/index.html","f17d2ebb14dd59d1b8fcf10ed97f77b1"],["E:/qinhao/hexo/public/2021/07/10/JDBC_SQL_injection/index.html","7a2cc6a96894c77ca0324ce501cceb7e"],["E:/qinhao/hexo/public/2021/07/11/MySQL/index.html","54601373a36eb7b4bd2166b217322c03"],["E:/qinhao/hexo/public/2021/07/11/MySQL_constraint/index.html","e6b855acdbce99adb7da35b4f21ffd32"],["E:/qinhao/hexo/public/2021/07/11/MySQL_transaction/index.html","95e6418681283cc7bf9483df06e7c33d"],["E:/qinhao/hexo/public/2021/07/12/JDBC/index.html","61de77422f07afbd60e564b4564e8263"],["E:/qinhao/hexo/public/2021/07/12/JDBCTemplate/index.html","cdd437993994bff3daed499aecfefcce"],["E:/qinhao/hexo/public/2021/07/14/xml/index.html","2a8082904950126b35aa10eceec02e87"],["E:/qinhao/hexo/public/ByteDanceVerify.html","8b5163380a08c37d4649fad1252c3c80"],["E:/qinhao/hexo/public/about/index.html","b8aa6aeb196c0367a9092e4ac9ecc29d"],["E:/qinhao/hexo/public/archives/2020/02/index.html","c304b1a64147fd01433f0399a1de8ef4"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","47a8ac4826d1c236931addb734740cae"],["E:/qinhao/hexo/public/archives/2020/03/index.html","26fa17a6bdb1d6d545d9a204d3bd4ca7"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","f84ffc4953da79a441abe5a8cc7850d8"],["E:/qinhao/hexo/public/archives/2020/04/index.html","f83f709602b7ac7704d234f8e2160737"],["E:/qinhao/hexo/public/archives/2020/05/index.html","22e78a2441cdee77bfc3efec4212bb77"],["E:/qinhao/hexo/public/archives/2020/06/index.html","4c39f97b0b2a681166d99860b07c71a9"],["E:/qinhao/hexo/public/archives/2020/07/index.html","9bb1a5f5765f397be8f1db4be5a72d77"],["E:/qinhao/hexo/public/archives/2020/08/index.html","f2f873bbdc955386173852cb6756f8f3"],["E:/qinhao/hexo/public/archives/2020/10/index.html","95fafe03bf83eef1da2146d679df8900"],["E:/qinhao/hexo/public/archives/2020/11/index.html","6a801a8256eca170c6842e76535d8480"],["E:/qinhao/hexo/public/archives/2020/index.html","c64376c3a79ebce225f82414ddbaf98c"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","61f05e8c9b090a2737558c883fe1d755"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","90c10a56e7386aa7256f3017fa0ea685"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","49b7f6c71f32a19485bdecb06d91370c"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","994e855dccae5ad87f5b8c3a373c7561"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","1810d2f7bb1c8cfbf15a7a4cff8e0428"],["E:/qinhao/hexo/public/archives/2021/03/index.html","8e3ad78f06d76157aa913ee8e5e9dd73"],["E:/qinhao/hexo/public/archives/2021/03/page/2/index.html","d8828931d068994e1faf8dbe6421ac9e"],["E:/qinhao/hexo/public/archives/2021/04/index.html","0d5e8261bae0e7c6007faab107e8d182"],["E:/qinhao/hexo/public/archives/2021/05/index.html","5ae53e086870f3b97273d6668ff9da18"],["E:/qinhao/hexo/public/archives/2021/06/index.html","be90ed45cc52b4a68b050ce35f405fd5"],["E:/qinhao/hexo/public/archives/2021/07/index.html","28026f19f00717c9f4551ed0db74ba7c"],["E:/qinhao/hexo/public/archives/2021/index.html","1a5df37da1dcaf95d875f6d40f2e3333"],["E:/qinhao/hexo/public/archives/2021/page/2/index.html","e2d612f1cc2b871a949efa2b7be3bff0"],["E:/qinhao/hexo/public/archives/2021/page/3/index.html","899fbfacc907d5d240f690595fd892b7"],["E:/qinhao/hexo/public/archives/2021/page/4/index.html","3b3c747fc307212e8d7de3b354e60b4b"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","9a2c152ef81b91c21d5f4e936a6efbb2"],["E:/qinhao/hexo/public/archives/index.html","daf01eb13677cf2a0f797f598cdde91d"],["E:/qinhao/hexo/public/archives/page/10/index.html","4002507a74fd865beefbd4c1ce2caeb6"],["E:/qinhao/hexo/public/archives/page/2/index.html","a68080088aa3eea069b33d2fd29abec3"],["E:/qinhao/hexo/public/archives/page/3/index.html","a68080088aa3eea069b33d2fd29abec3"],["E:/qinhao/hexo/public/archives/page/4/index.html","a68080088aa3eea069b33d2fd29abec3"],["E:/qinhao/hexo/public/archives/page/5/index.html","daf01eb13677cf2a0f797f598cdde91d"],["E:/qinhao/hexo/public/archives/page/6/index.html","207871123d5d5c72e7c7cf780588d0e8"],["E:/qinhao/hexo/public/archives/page/7/index.html","4002507a74fd865beefbd4c1ce2caeb6"],["E:/qinhao/hexo/public/archives/page/8/index.html","4002507a74fd865beefbd4c1ce2caeb6"],["E:/qinhao/hexo/public/archives/page/9/index.html","4002507a74fd865beefbd4c1ce2caeb6"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/C语言/index.html","acdff9ffe9ecef1592ac3f4be2e58d48"],["E:/qinhao/hexo/public/categories/C语言/page/2/index.html","883c14748746764e77f4905dadd33a27"],["E:/qinhao/hexo/public/categories/Java/index.html","b899015e9e13efd989b36a97a9990f8d"],["E:/qinhao/hexo/public/categories/Linux/index.html","ef560a36d804ea241fa1456ad3d48a67"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","fc2be3c4322c999a8e02f3399219e421"],["E:/qinhao/hexo/public/categories/Python/index.html","9ab3f0e0f864a10a9f3ee9123643750b"],["E:/qinhao/hexo/public/categories/Python/page/2/index.html","f036f2cc550bdf4e5aa5d621e9df0129"],["E:/qinhao/hexo/public/categories/交换机/index.html","2a482469541956e6c065c3e865f03974"],["E:/qinhao/hexo/public/categories/华为认证/index.html","81472d8453a8057cabc4e00fba97079a"],["E:/qinhao/hexo/public/categories/小技巧/index.html","b63f556c29b86f116545a0705df38e94"],["E:/qinhao/hexo/public/categories/数据库/index.html","cf65022c8f4761f6c2061aeb37d06d05"],["E:/qinhao/hexo/public/categories/服务器/index.html","3a1ae63cb2ba9ef4ccb6f55515620d64"],["E:/qinhao/hexo/public/categories/算法基础/index.html","0b59a7d3cb80ede0365ebfd7e19679ce"],["E:/qinhao/hexo/public/categories/网络安全/index.html","6b5db0da7d5bb811e1963171541233ef"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","31579d2b4b10490f02cc2b9659a5ffe0"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","ff6a3b8cd279f2f7a730089e30843a0f"],["E:/qinhao/hexo/public/categories/软件破解/index.html","8cc048430c6f616f7998f25479d4836d"],["E:/qinhao/hexo/public/categories/通信技术/index.html","4a715ea9006e61b1e0af81515fee0f5f"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","7b395c2ff4e48c1e88bd50c17c0298ab"],["E:/qinhao/hexo/public/category/index.html","7790b8d8ea77af350831f4d514760d1e"],["E:/qinhao/hexo/public/css/style.css","69bbc27a8094ac09453486ddd0820200"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","076e3508d27092947ae39737e2488397"],["E:/qinhao/hexo/public/donate/drinks/script.js","1c65abbe04a6bff48000efbc6a2a0648"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","1edd6baa549da99da85451d92cde64f8"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["E:/qinhao/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["E:/qinhao/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/friends/index.html","c999b19f057045e71ef93a3c584069cb"],["E:/qinhao/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["E:/qinhao/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["E:/qinhao/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["E:/qinhao/hexo/public/index.html","f68a16339883695b0702a972d29c78f9"],["E:/qinhao/hexo/public/js/aplayer.js","a0a8f225cab4df42a6e0164b45d7641a"],["E:/qinhao/hexo/public/js/app.js","60b11cc8c0c85ca294cd3ff2e82096ad"],["E:/qinhao/hexo/public/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["E:/qinhao/hexo/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["E:/qinhao/hexo/public/mylist/index.html","47f5a2160b14c0ec06e774e75de74553"],["E:/qinhao/hexo/public/page/10/index.html","7fc255072d2937d464a53ee46911183e"],["E:/qinhao/hexo/public/page/2/index.html","f541835bd6ac30334fbd7beea92a62f1"],["E:/qinhao/hexo/public/page/3/index.html","b45a32d5208ffe6a638b619239f6bfd6"],["E:/qinhao/hexo/public/page/4/index.html","fd61f88fae9d46a4fbac4db9a2d45445"],["E:/qinhao/hexo/public/page/5/index.html","3bcd06a4b4286fe0406c97ddf2da6a73"],["E:/qinhao/hexo/public/page/6/index.html","093bd4d2fc88a7bfb2dcbf30896914f7"],["E:/qinhao/hexo/public/page/7/index.html","217dfe478a0f3533d57afe9e407869e7"],["E:/qinhao/hexo/public/page/8/index.html","8f375b80e62d65b708aec1d7bee647a9"],["E:/qinhao/hexo/public/page/9/index.html","ddbd824d39a37ab2071b5e4a62757e40"],["E:/qinhao/hexo/public/style.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/sw-register.js","2dc2d2d8d3cd2c48fe9473e9741c1447"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/tags/IIS/index.html","ffce43d271a30f1305338c12b055fe23"],["E:/qinhao/hexo/public/tags/MySQL/index.html","9867fdddec64860eb148aa981afab4fc"],["E:/qinhao/hexo/public/tags/Photoshop/index.html","6fe14193936c7a58bc3283cfed1b43d0"],["E:/qinhao/hexo/public/tags/VPN/index.html","7f7efb1164a13534e14be9e7660dbc95"],["E:/qinhao/hexo/public/tags/Web服务器/index.html","54aa6dadd8b8ad7545e4cd1a19201a99"],["E:/qinhao/hexo/public/tags/index.html","003e8a6af98f2b59531759f129e0af4c"],["E:/qinhao/hexo/public/tags/交换机/index.html","af10b9027107f19fd807f9f0070407e9"],["E:/qinhao/hexo/public/tags/图像处理/index.html","80e16bc04ee7c9e52cd675aed109e4bf"],["E:/qinhao/hexo/public/tags/基础网络/index.html","03acae8b41882b15124dc54772064be6"],["E:/qinhao/hexo/public/tags/思科/index.html","912a04eec987caf4cf1539d90cb4496a"],["E:/qinhao/hexo/public/tags/思科GRE/index.html","c6b68d613ad2e3fa51d21f8962e144f4"],["E:/qinhao/hexo/public/tags/数据库/index.html","d6c66e9ecbcfa64702032d27b8c8a82d"],["E:/qinhao/hexo/public/tags/无线技术/index.html","d7e3f0429d7e8756680fbcd5a947ce24"],["E:/qinhao/hexo/public/tags/无线技术/page/2/index.html","f43081aa0ced683ce797232e27fb272a"],["E:/qinhao/hexo/public/tags/系统安装/index.html","832fed233b720e02d6f851ba4725241b"],["E:/qinhao/hexo/public/tags/网络安全/index.html","e7a1cf649414d00a0a45385917e0b4af"],["E:/qinhao/hexo/public/tags/网络技术/index.html","ec95de91c2991fdf0e79dc8ec3081309"],["E:/qinhao/hexo/public/tags/计算机三级/index.html","6f5ad748ca436bb95c7c04f111c65464"],["E:/qinhao/hexo/public/tags/路由器/index.html","1d5a4072e3fb457d79e7adcdfd150872"],["E:/qinhao/hexo/public/tags/软考/index.html","662a274b4e7ef59610886ed40569d41a"],["E:/qinhao/hexo/public/tags/通信原理/index.html","31acede6015e3ce729d5694faf988e56"],["E:/qinhao/hexo/public/tags/通信原理/page/2/index.html","4abc04421acc581f241d3189bfe9ffab"],["E:/qinhao/hexo/public/tags/通信技术/index.html","1d8772f0316ab137f4a27b0703f4e365"],["E:/qinhao/hexo/public/tags/通信技术/page/2/index.html","7b26b4a63071321d887489107d60cc3c"]];
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







