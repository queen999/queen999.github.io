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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","72027881619e4f25903fa0d406f07930"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","de4376b337d0d41cf4e94e5697c8bc04"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","a765df8fff29d8e5d1ea3891007ea838"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","5009660348fe3712853702a5e3789e55"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","35968507356673f8c89584c687fb4c67"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","a82056f267d75acb0f67264b0cc151b4"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","007fa20ef3cced84fc9bbeca1d5a6022"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","806c3d99d42964d7c4d6b5645c9d85bd"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","e7f0450bdc725facd6d6348924908415"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","11f121db6eeaa41f9a9f83da53f98741"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","f9ad0160380e2c0fe52f863721ce4916"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","586291790a0713ca6c8c579bf06c85cd"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","e0e08784b250df13312a2881317dd11e"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","761db3ff9316368685861c9a4e9beea7"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","4288dfea0c0b142b951d94b9edeccfe2"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","0e03591cb9ec6bc5b07e07bae8a1dee7"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","c0d2161c46bbe65afa8da6e6b5e47aff"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","3504dd7aa8f45b4311be7df70e3582e4"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","c58b5e3be06710ba12bade865668b70f"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","9cbfa16ac4200ff6609a5e12e8d796fb"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","781d509484a57b7dfd065ec9b974af7e"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","67a3a7717571b32b090a8abbfe2caf61"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","7f60b3f520a3861f2079cc6dd17c72ea"],["E:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","a0f9b21c2f817c27f872a8fcccea3743"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","397fcf9cd72d731ca57137515ec8b70b"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","7886c012c8478d8de520b0492d28257e"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","6ae8bb2b8c8febc24a23799e18ead47e"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","11ff52fff11f73845e504db8f44225bf"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","1bbf9bf3ef6f3d8df2d817046e280f8f"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","18018aed8865a0c0b33e871b002899d7"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","edf5b265ca1ebeacee7ef059c3009151"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","48080f8b855bbfe8846e0b1f3ff5eb2d"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","0bc255b1ec33e1a7765e9c480da39338"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","ca43805a1aab4a5202f740c4eb5b43a1"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","1b0f13a2b4a5041278ce6f05c02afef0"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","6475378ed94dc3d2a10e3720459eca7c"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","b5a3ee2f8be365c62eaebdbf043b4a8c"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","9d0711dad1fe38a8cf2508b0f1142301"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","0bda1a7ca77f4c0d7f20b95b44fa088b"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","64ad0774a50a7373a25b1ba350e23e7b"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","a21e9de4c3c2d3d2c177349bce4a5b27"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","10b941b6f66e660e9c6150b33f35bfd1"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","c756ac6404db5de5ef0d22268fe39520"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","86197ab2d9113b3562ed4fb10153a5c7"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","8ae7e03cb19ef14bc913d4f4874718a0"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","9bd9111865bfaec16abd3b406757201e"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","144e228a59ff6a983cec97e1cec79c75"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","35a2d9a85524f5232f12621497a151cd"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","97ffbdabbee679b234f6e3c255288577"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","ae7f3f7bd222eb4befcbf895e4a25c13"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","7bcab841dd17642b2dfa04cf79d03326"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","76ff3430dad1abb42a6e57307f457a84"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","307cbdd5257c5efa60b35a048b65f531"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","ee1d5a8f82520105015c5758aa30c067"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","dfdb70c6f51240f62a4e4f4f29c54e11"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","3e2d9c2879f4631428acc00382ab9565"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","96b2b79f37a02a1b22bf9113416ab9af"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","d3b205c0b7319596bf0d0b5e43d46262"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","570b4d07b7a84864c99ca7ed6393e971"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","a78b315fc7497f7e0639e64654832537"],["E:/qinhao/hexo/public/2020/12/15/C_basic/index.html","b399f285d910f231e789859a5c55262c"],["E:/qinhao/hexo/public/ByteDanceVerify.html","1b7a44db0fb9e2e6bf014fbf8dd8fa2c"],["E:/qinhao/hexo/public/about/index.html","a0f406e347a6844065c992e5cac543c9"],["E:/qinhao/hexo/public/archives/2020/02/index.html","41066fc612c3ec6ff08a915d5ca18b9e"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","a57bab50dbc4be0ba175225f1833abdf"],["E:/qinhao/hexo/public/archives/2020/03/index.html","e6f8d92f7723389dd73e0d1884b17c32"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","90db992e3f8e9d1c07ecd153fc4789c4"],["E:/qinhao/hexo/public/archives/2020/04/index.html","52618ce0e1630094342672a021384e6a"],["E:/qinhao/hexo/public/archives/2020/05/index.html","ea591d52a3f5352ac65dbfcd01bb8b74"],["E:/qinhao/hexo/public/archives/2020/06/index.html","9a8c29f9edce90dbdd886e1afc9d9775"],["E:/qinhao/hexo/public/archives/2020/07/index.html","71c4d09d07fb4c5f070b3127a42eb043"],["E:/qinhao/hexo/public/archives/2020/08/index.html","531780ece1f5b7de9b9e9c383e153613"],["E:/qinhao/hexo/public/archives/2020/10/index.html","ce8eff5d3c7040dd39971e6a8a3d86e6"],["E:/qinhao/hexo/public/archives/2020/11/index.html","f18e79affda5edfb394a4fe221a8f554"],["E:/qinhao/hexo/public/archives/2020/12/index.html","e9b2f0e8bf898ab45c82b2b2ef71ce43"],["E:/qinhao/hexo/public/archives/2020/index.html","87c6df41ff8672b1d4fbb0f32ed1a360"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","5709ce7efdfaf7ebc235b49a82c14dd9"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","fb785b19512bc20a6a602d532e65c56f"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","76eb7a4ca37364fcfc136da4b4504ded"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","2e3a8ff5a51285a75887608cbcf6dab2"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","f17ffedb2626217738e962d08712ee32"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","dac94a1bd6b73adb87dd711a76697378"],["E:/qinhao/hexo/public/archives/index.html","713cd75d685236e3590217ffe7186c58"],["E:/qinhao/hexo/public/archives/page/2/index.html","6244fa8dd644220f6807dd305ec6ddbe"],["E:/qinhao/hexo/public/archives/page/3/index.html","713cd75d685236e3590217ffe7186c58"],["E:/qinhao/hexo/public/archives/page/4/index.html","6244fa8dd644220f6807dd305ec6ddbe"],["E:/qinhao/hexo/public/archives/page/5/index.html","6244fa8dd644220f6807dd305ec6ddbe"],["E:/qinhao/hexo/public/archives/page/6/index.html","6244fa8dd644220f6807dd305ec6ddbe"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/C语言/index.html","4aa01f29ed2b9f4d469f29169f32b351"],["E:/qinhao/hexo/public/categories/Java/index.html","e0058048bbd1400a5d271cbf3c8931a7"],["E:/qinhao/hexo/public/categories/Linux/index.html","103fb1d4ff9f724e19bb5d5bacfae19a"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","126c07cb2d76f88202abfd0cb8ebf3c0"],["E:/qinhao/hexo/public/categories/Python/index.html","586b15711429e425b64a1f487ed18a60"],["E:/qinhao/hexo/public/categories/交换机/index.html","1f72e49fbbc97f64be4ea578b93c0206"],["E:/qinhao/hexo/public/categories/华为认证/index.html","3ceb4495a148cc581b33b796c8f78d65"],["E:/qinhao/hexo/public/categories/小技巧/index.html","9fa4f744f077dafde4d0e617a5c4f6cf"],["E:/qinhao/hexo/public/categories/数据库/index.html","cb26d2ebc7076778876b115be6a57be1"],["E:/qinhao/hexo/public/categories/服务器/index.html","589a93749d8e2a50597969bf38eddbec"],["E:/qinhao/hexo/public/categories/网络安全/index.html","e52f530f64c0d1bd2b9addd67f4cd966"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","b3c0091d80ba0ed726c3c992de636d94"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","bc10d89aae583aade105f538084f5fa4"],["E:/qinhao/hexo/public/categories/软件破解/index.html","8dd2d405eb1da8707dce46ffed44ae5f"],["E:/qinhao/hexo/public/categories/通信技术/index.html","006f2ae8e0419c42c310c9bddbbd1908"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","8693b4eb32a75a17b1c2d44fc60573e6"],["E:/qinhao/hexo/public/category/index.html","4178483afabba87113299d083dbdb76a"],["E:/qinhao/hexo/public/css/style.css","940a599036b2a40f1cda8deba1fa0555"],["E:/qinhao/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["E:/qinhao/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["E:/qinhao/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/friends/index.html","5f3d39edbb51658ef5a81ce71334930b"],["E:/qinhao/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["E:/qinhao/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["E:/qinhao/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["E:/qinhao/hexo/public/index.html","71e75c90c1848aeb736d952e38d12ea5"],["E:/qinhao/hexo/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["E:/qinhao/hexo/public/js/app.js","804e218b8d00f3db3d393a7811cc0f3c"],["E:/qinhao/hexo/public/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["E:/qinhao/hexo/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["E:/qinhao/hexo/public/mylist/index.html","6a71ad829827282bcc3d56e2373eb0e4"],["E:/qinhao/hexo/public/page/2/index.html","3822303a8f3b70d5df1299b5e30e795d"],["E:/qinhao/hexo/public/page/3/index.html","2fd745a6799ee7a071f8024ce8e76658"],["E:/qinhao/hexo/public/page/4/index.html","e5b93c8b006db66f3ce0357039dac378"],["E:/qinhao/hexo/public/page/5/index.html","3e1035424bac8098914dbc2bdf1ff0b5"],["E:/qinhao/hexo/public/page/6/index.html","12c27f5a98027c85e6600c0175a4f72f"],["E:/qinhao/hexo/public/sw-register.js","4969ca141575ea0b1f9400347a828a79"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/tags/IIS/index.html","096cc821d2920f8db7f6bf90fc17d217"],["E:/qinhao/hexo/public/tags/MySQL/index.html","29e910fee5d5442f5dbdf31094342bb2"],["E:/qinhao/hexo/public/tags/Photoshop/index.html","be74ea0c039a31511f8735439c462919"],["E:/qinhao/hexo/public/tags/VPN/index.html","fc3b72ebfb8f784d47925b051797ca9b"],["E:/qinhao/hexo/public/tags/Web服务器/index.html","c6a806f9dcdceb27bf1453656654408e"],["E:/qinhao/hexo/public/tags/index.html","9b0c47012b7d82d2b71d3724c194fbee"],["E:/qinhao/hexo/public/tags/交换机/index.html","4a8771efa41483495dc19f52210bb0a0"],["E:/qinhao/hexo/public/tags/图像处理/index.html","b9361af88c0fc091fed35846a7671f80"],["E:/qinhao/hexo/public/tags/基础网络/index.html","8ebc4dcc77094575a14ebee3c75c5eec"],["E:/qinhao/hexo/public/tags/思科/index.html","5d6e424e92d18d3b5957627e6b63572c"],["E:/qinhao/hexo/public/tags/思科GRE/index.html","0ce5a1ea893fd73a20f82c81c9fd88e0"],["E:/qinhao/hexo/public/tags/数据库/index.html","e9e7ec34a63379744110ccfae420d007"],["E:/qinhao/hexo/public/tags/无线技术/index.html","17458c855901358e5124223c3c0e692c"],["E:/qinhao/hexo/public/tags/无线技术/page/2/index.html","98112e9a36068de847245bb5050fba6f"],["E:/qinhao/hexo/public/tags/系统安装/index.html","570ba87e7fbf20e449d7cd32b185d1c3"],["E:/qinhao/hexo/public/tags/网络安全/index.html","0276eab341390fe949d11da2fe32a113"],["E:/qinhao/hexo/public/tags/网络技术/index.html","b618a162e1769f4058c2c9cb82109acf"],["E:/qinhao/hexo/public/tags/计算机三级/index.html","ac1a27e08e13bb2b139e6d02cf9f0380"],["E:/qinhao/hexo/public/tags/路由器/index.html","3681a6c7c37a67136d01402e5d22342c"],["E:/qinhao/hexo/public/tags/软考/index.html","279d4b0da532d34e20fa9dc1832abeee"],["E:/qinhao/hexo/public/tags/通信原理/index.html","8009c38996665eb35bbe9ff14e3eaa96"],["E:/qinhao/hexo/public/tags/通信原理/page/2/index.html","b57adda49d966cb91214aff9983e650b"],["E:/qinhao/hexo/public/tags/通信技术/index.html","cc17d5f314cf758b1095cccc8bb7558b"],["E:/qinhao/hexo/public/tags/通信技术/page/2/index.html","63406e86996710ca35dd1718bef9f798"]];
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







