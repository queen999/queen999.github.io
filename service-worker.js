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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","90eab2df602e36f25725cd7db04c1420"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","a6181504ca0981b9b4275ddb9a6c1cde"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","fc5d0092d0ff29ee546ab7da4b4ee46d"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","1ac85b0cbfef4838c3a3acd3112da57d"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","e98f7066ff8d1dc70dbd141f0be1ec48"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","f9aeaca2a9e185044c44769e92bf958c"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","b296e712a78c476ab6922c219a146726"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","07ebde512e9ea3be989063dcb59a5a28"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","6a4c61992922861439c6902351145c47"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","5f4f8be3c3736472e8b66081b6611fa4"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","dea32b633667d6015d94c41ded36c642"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","3c8f972c8f3a2cd11542306edc917a73"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","389063ed42649c246f1e91a1937b5ed2"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","7fcff2280aaa0f521a65bd367fa72c5f"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","ff0ae1800aaf117788211f0dc27771b9"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","5866a6b0710eab6335c12530a52bae71"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","5e481db4159b3a1265c91fa3c2e5201b"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","6df74be82d48846c4b4fe16747b24324"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","752ed904b87eafca5165d8a592e40932"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","9b2361670d49056dc7a5880f36afc336"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","624fdd814b4f6048bf10f85bb51c9727"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","d01e8262d0f8ffc61617c6728200702f"],["E:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","1e38a4eabe92f547c5e7bf49c61576ec"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","a9525883743e4497f478cebbf3836e22"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","0fc0109c9d9de8c569fe070f9e40a21c"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","ca2decc75f6284aaad4be65f02dace58"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","1510cca9ab892a2e0913ad6956d30d10"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","227533f3c2962162e7f619feb375e524"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","77c2706bdbb78a36ad4ed7b281b85ce4"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","ee5abac637cb1a87847603e35a30943e"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","d885b19d23cad1aae0099c5bc822b7bd"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","0a1a6160aafdae6dbc71fd605daa4e22"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","de1b53b9396e86d53fcef07087c84e68"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","29d37a51df93bc58a54d3308007b3070"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","5485766ccedd0394d32de0c7c20c7115"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","45ddc3a9d647b1e7e3cb798b7ee9a940"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","3b61fcbbc822ce56c56513128175cad2"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","87a136cc2edca7571f5cbd3f06ebd8b5"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","0c70199e90d6f5950f5953e65bb1b4c3"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","872f76157fd9de6afd73cef82a661af4"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","f72c9aa5bc98901464e7e09e5fe1dc63"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","e24d7d3805f423ac0280733ab107be34"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","cf493820a08924c9363620ea02421aec"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","e679418220bec71fbdefa847445328f6"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","87e9211a24a8015b1f6b88828f7c6a5f"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","a23c9f35cf96f49ef20179be94fd502f"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","0aef05db0710bee91037ced3f307f7c0"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","ec1844bfa3fed5e88b01066897dd87aa"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","20e3a1fe3754524bf233254259e0ecfb"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","55c13fc3b92be6a8f2f87cc1e12159c9"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","8d898fdb174b10ada3b10571bd8f8bf3"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","b282d2179be47a19e5bccb33348c451f"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","ca87112d5228577d3a40e2d784796535"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","ddb2dcc39f9fcd27d5e685e223e357b6"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","9e9fe00d1e5cb0a79abe2ed863899490"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","4bef8b7faef04aab7d1ef0ef959f479d"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","e4237a0e238fb229fb161f6af62daf0e"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","30bb1bf1ab5b8d04e6905f754fb86084"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","5036c58b8fa8818ec9a2215022d14978"],["E:/qinhao/hexo/public/2021/03/01/c_1/index.html","e7d34ccb41491259cd1ce23384e01e0b"],["E:/qinhao/hexo/public/2021/03/02/c_2/index.html","4b1072f2311721d65c837d1237463a37"],["E:/qinhao/hexo/public/2021/03/03/c_3/index.html","efedb7df2b96e8a13227625db2c020ad"],["E:/qinhao/hexo/public/2021/03/04/c_4/index.html","a310d940066513245e9f98dbcf487368"],["E:/qinhao/hexo/public/2021/03/05/c_5/index.html","39a39d818c86ed9810ae156f47d2b5b5"],["E:/qinhao/hexo/public/2021/03/06/c_6/index.html","f7b1bfad789bbb215d2e751b2ca47d01"],["E:/qinhao/hexo/public/2021/03/07/c_7/index.html","127414c2acbad4a777ed68fa1671a808"],["E:/qinhao/hexo/public/2021/03/08/c_8/index.html","c48a617868fcb49f50a8cc0d5baf7ee3"],["E:/qinhao/hexo/public/2021/03/15/c_9/index.html","6ca6c69da524cd8f1dd89f2bc778e823"],["E:/qinhao/hexo/public/2021/03/16/c_10/index.html","c5b0eece2c78abe013e03388c7e966d7"],["E:/qinhao/hexo/public/2021/03/17/c-11/index.html","1864a83c533a24b432d615e437fcd224"],["E:/qinhao/hexo/public/2021/04/25/FileDownload/index.html","73690ba2a762ec142d02c3c9403bee0e"],["E:/qinhao/hexo/public/2021/04/25/PythonUdp/index.html","6de7b44de599669a922bb4b42956bfb5"],["E:/qinhao/hexo/public/2021/04/25/TCP/index.html","f4d72c7dff297da2401d3853a8cefa6b"],["E:/qinhao/hexo/public/2021/04/25/TCP_client/index.html","d779c73c4be631eb3d8a3ec619b32847"],["E:/qinhao/hexo/public/2021/04/25/TCP_server/index.html","8f4d5abf177ee4a5babf190be2f8911a"],["E:/qinhao/hexo/public/2021/05/14/CPU_Register/index.html","b1fb906926139a9acf4377bfb4513db6"],["E:/qinhao/hexo/public/2021/05/14/gcc/index.html","c757d74fc16ba0447615edcaf8c7d0aa"],["E:/qinhao/hexo/public/2021/05/20/Algorithm_1/index.html","dffa39972506424b07183fc205216e7e"],["E:/qinhao/hexo/public/2021/05/20/C_Programming_1/index.html","19ebdbd3614949e2d0aed631e80dae44"],["E:/qinhao/hexo/public/2021/05/21/Base/index.html","e410b7a085be9a08292eb5db454b9b8d"],["E:/qinhao/hexo/public/2021/05/22/memory_save_number/index.html","f5fb195e2fbb6c96a2e60b3dc966b2bc"],["E:/qinhao/hexo/public/2021/06/24/OverLoad_1/index.html","069e1b6177e9e4ab36da5529abaf3da6"],["E:/qinhao/hexo/public/2021/07/06/mysql_question_1/index.html","8b0225fee5eea39ac7ac35b54049a626"],["E:/qinhao/hexo/public/2021/07/07/mysql_dql_1/index.html","12130a14c8a215a8b3a80821245f90af"],["E:/qinhao/hexo/public/2021/07/08/mysql_forget_root_password/index.html","b0f883db69ddb62c67d204578eea001c"],["E:/qinhao/hexo/public/2021/07/10/JDBC_SQL_injection/index.html","a450ea0e036e594cae64958a9a832f09"],["E:/qinhao/hexo/public/2021/07/11/MySQL/index.html","f76844b6a080c001446eb20ec59eb434"],["E:/qinhao/hexo/public/2021/07/11/MySQL_constraint/index.html","30dc26c32eee35ed7132147fac6ea9dc"],["E:/qinhao/hexo/public/2021/07/11/MySQL_transaction/index.html","30149a420fce2242b0155950d8de5ee3"],["E:/qinhao/hexo/public/2021/07/12/JDBC/index.html","0ad5a6eaf3ea09729b47ebba10892e3a"],["E:/qinhao/hexo/public/2021/07/12/JDBCTemplate/index.html","056ca42cd6b1a0fa6be40a28aa4879e2"],["E:/qinhao/hexo/public/2021/07/14/xml/index.html","a3ed97a7400a381cba81c5038b94bd54"],["E:/qinhao/hexo/public/ByteDanceVerify.html","8b5163380a08c37d4649fad1252c3c80"],["E:/qinhao/hexo/public/about/index.html","b8aa6aeb196c0367a9092e4ac9ecc29d"],["E:/qinhao/hexo/public/archives/2020/02/index.html","ba3660bf4436cb6911278e75fdeef727"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","6c8afa22495e3d69b2aedbc42905f818"],["E:/qinhao/hexo/public/archives/2020/03/index.html","0e864ff33f4e2e40f13f97c7a40753cb"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","4df51ea1dde8d7a3544b2b3c4b1974fb"],["E:/qinhao/hexo/public/archives/2020/04/index.html","ea41237098333161796633d565824d68"],["E:/qinhao/hexo/public/archives/2020/05/index.html","30ead23e0057c8cbd85f70b1686f8be2"],["E:/qinhao/hexo/public/archives/2020/06/index.html","5ed75c7e43c6462c0c2eed884c4fab31"],["E:/qinhao/hexo/public/archives/2020/07/index.html","b4885bb2d78395d820d96fb8e1e2aa40"],["E:/qinhao/hexo/public/archives/2020/08/index.html","60fe18d19609fa4ec0b7d1632b2c01a0"],["E:/qinhao/hexo/public/archives/2020/10/index.html","c060fb28914c0c6937c75f6525efceb1"],["E:/qinhao/hexo/public/archives/2020/11/index.html","453e01eadd9476f42b43ebfcc9034877"],["E:/qinhao/hexo/public/archives/2020/index.html","01ab1aa5d0442b56e541c8ca0e063387"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","24676a6f86e50ae4543c6e93ee8d81ab"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","e7f7a4392c56ea93f0ef1af2bcf78e27"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","fa4a948d165aedf4720fab5e78c5ac6e"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","2891e268960823f67376927df8c16656"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","39d5edcc063f0b9a181b9e876f4e3705"],["E:/qinhao/hexo/public/archives/2021/03/index.html","0bb1767ecfff44891ee360ecbbb4d975"],["E:/qinhao/hexo/public/archives/2021/03/page/2/index.html","496b10548dbb46a662b84164f27db0c5"],["E:/qinhao/hexo/public/archives/2021/04/index.html","c2befbbb4b586beb04784845e99d673e"],["E:/qinhao/hexo/public/archives/2021/05/index.html","f6903ffd90737f773417a736daad33c5"],["E:/qinhao/hexo/public/archives/2021/06/index.html","075f7a0352f8bc61fd1a163ade0b7906"],["E:/qinhao/hexo/public/archives/2021/07/index.html","86d8e940b634c044dedf707b42a06498"],["E:/qinhao/hexo/public/archives/2021/index.html","6a7bced1e2ef158d88036ed06313301e"],["E:/qinhao/hexo/public/archives/2021/page/2/index.html","081e3d123845b80714bc26c63c82c8af"],["E:/qinhao/hexo/public/archives/2021/page/3/index.html","f3a8bcd85f35dbac895b7b4df28eff89"],["E:/qinhao/hexo/public/archives/2021/page/4/index.html","367cb38e1b24f39f30b0c5f1a82d78c4"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","9a2c152ef81b91c21d5f4e936a6efbb2"],["E:/qinhao/hexo/public/archives/index.html","fb0efcffc37b565c7948b6073942b609"],["E:/qinhao/hexo/public/archives/page/10/index.html","8379aa6c41de04da525307aee86ee5a9"],["E:/qinhao/hexo/public/archives/page/2/index.html","0a42e25de39a402a12288ca7d14498d7"],["E:/qinhao/hexo/public/archives/page/3/index.html","b7528109dcca765fa9558f94b4b31bc8"],["E:/qinhao/hexo/public/archives/page/4/index.html","0a42e25de39a402a12288ca7d14498d7"],["E:/qinhao/hexo/public/archives/page/5/index.html","fb0efcffc37b565c7948b6073942b609"],["E:/qinhao/hexo/public/archives/page/6/index.html","6d401dd82f5d85d61ae9483d5615e0c1"],["E:/qinhao/hexo/public/archives/page/7/index.html","9703f776048376aad6c4cc0a12d245b5"],["E:/qinhao/hexo/public/archives/page/8/index.html","9703f776048376aad6c4cc0a12d245b5"],["E:/qinhao/hexo/public/archives/page/9/index.html","9703f776048376aad6c4cc0a12d245b5"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/C语言/index.html","31623f22a616f59f8704321c4fb2713b"],["E:/qinhao/hexo/public/categories/C语言/page/2/index.html","58342ec5d5b7d9d1a8ec78c1bd594df5"],["E:/qinhao/hexo/public/categories/Java/index.html","8c63222e2334d796f39e2d89a3805017"],["E:/qinhao/hexo/public/categories/Linux/index.html","1f5ef8097ccce61a9f618adf8a760abc"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","9506448a3fe716dcb1c9d325232592eb"],["E:/qinhao/hexo/public/categories/Python/index.html","7d0ab3852ada00d50d441a80999fe9e4"],["E:/qinhao/hexo/public/categories/Python/page/2/index.html","fbf35eb61b6f07882d701f2284756ab8"],["E:/qinhao/hexo/public/categories/交换机/index.html","3ed26c6c207d54c974abf2890c5671f5"],["E:/qinhao/hexo/public/categories/华为认证/index.html","e6a7562245611ee1145e303c56cc826c"],["E:/qinhao/hexo/public/categories/小技巧/index.html","d4697ae6ba9444d015f9e367ffb1e2a0"],["E:/qinhao/hexo/public/categories/数据库/index.html","a40bfa2edafa372ab7387be93bdf7baa"],["E:/qinhao/hexo/public/categories/服务器/index.html","321327856e67aee3c7664f844f7b7510"],["E:/qinhao/hexo/public/categories/算法基础/index.html","cb292a0687861d356b4b3e99a082c904"],["E:/qinhao/hexo/public/categories/网络安全/index.html","aabf6edc32532186c92d9252b1fadeaf"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","02375da24009a57166cecf1cb3bc5793"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","f54daea52ae4798d3e2a592aec53f83a"],["E:/qinhao/hexo/public/categories/软件破解/index.html","7d69ab68ef8bd2856b5033dde6ee2d79"],["E:/qinhao/hexo/public/categories/通信技术/index.html","c0735c305605e7d7ca9fea2ec0f1e4ae"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","bf625e064f9e3a21cd8a18210d534a4b"],["E:/qinhao/hexo/public/category/index.html","7790b8d8ea77af350831f4d514760d1e"],["E:/qinhao/hexo/public/css/style.css","69bbc27a8094ac09453486ddd0820200"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","076e3508d27092947ae39737e2488397"],["E:/qinhao/hexo/public/donate/drinks/script.js","1c65abbe04a6bff48000efbc6a2a0648"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","1edd6baa549da99da85451d92cde64f8"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["E:/qinhao/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["E:/qinhao/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/friends/index.html","c999b19f057045e71ef93a3c584069cb"],["E:/qinhao/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["E:/qinhao/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["E:/qinhao/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["E:/qinhao/hexo/public/index.html","3e305ae6489277e4690a25c001a69bef"],["E:/qinhao/hexo/public/js/aplayer.js","a0a8f225cab4df42a6e0164b45d7641a"],["E:/qinhao/hexo/public/js/app.js","60b11cc8c0c85ca294cd3ff2e82096ad"],["E:/qinhao/hexo/public/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["E:/qinhao/hexo/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["E:/qinhao/hexo/public/mylist/index.html","ef967c124c794dd5ae9da411896c44e4"],["E:/qinhao/hexo/public/page/10/index.html","aef0f937b094e0f9430dc9c53fa94891"],["E:/qinhao/hexo/public/page/2/index.html","f459f8c354f82fbfe1016f98cc685761"],["E:/qinhao/hexo/public/page/3/index.html","34ad149a60fa21d655d0fe44410c6f61"],["E:/qinhao/hexo/public/page/4/index.html","951140e0049a9af0c63068dac097323e"],["E:/qinhao/hexo/public/page/5/index.html","b22960ae98f8eadc276393590b19c45f"],["E:/qinhao/hexo/public/page/6/index.html","aa7196388a6c831b7477f58c9bcfc1df"],["E:/qinhao/hexo/public/page/7/index.html","00952b28c8c161f63734ae517604f8a9"],["E:/qinhao/hexo/public/page/8/index.html","00218a76acc8ddc269fd3f1467b35fb6"],["E:/qinhao/hexo/public/page/9/index.html","7a7badeedfe744aadbfe422e013e6992"],["E:/qinhao/hexo/public/style.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/sw-register.js","a7452d1ddd054ec0c92273f717783c61"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/tags/index.html","6c899663a754ff84040847c5874e7163"]];
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







