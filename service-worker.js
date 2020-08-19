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

var precacheConfig = [["D:/qinhao/hexo/public/2019-nCoV/index.html","72027881619e4f25903fa0d406f07930"],["D:/qinhao/hexo/public/2019/12/04/hello/index.html","c03ede0e923b017daee97f3ed27d1347"],["D:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","160ea45f4d59078a4b5429d01f48aa52"],["D:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","e77b7172a5eccbf1c21d27bc1a76bfa9"],["D:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","a1dca4f93c56517b4aa2d3f9fa0a9998"],["D:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","2d2ed0797addcf0267e09a70f66f238f"],["D:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","dc6197d30005572083e3bc509fd288d8"],["D:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","70d8cf326f89183df8859d0a5c2379ce"],["D:/qinhao/hexo/public/2020/02/24/ssh/index.html","d148ecd7e0341d7ee3390a37a7ed61f1"],["D:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","ebe6e7fa697c8ad93d77f83a04625c1e"],["D:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","f24c0668dec7c8f900e172acddf4a179"],["D:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","e4c49971f21eac34b0761a45c039d5d4"],["D:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","fd8cba26fcff37aebcba4e3c8f3f1849"],["D:/qinhao/hexo/public/2020/03/04/acl/index.html","f31cf067eccbcb97a48c87d8ed5f7554"],["D:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","9af580e390959e3c0847c7dde80e32bf"],["D:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","b3e5af62c92800b3d34d642cedabd2f5"],["D:/qinhao/hexo/public/2020/03/07/3G/index.html","e8b23fc2f6ee7a53c6ff1fe76ed52d10"],["D:/qinhao/hexo/public/2020/03/07/GSM/index.html","565428b43bf004a2804f8778bc44fe00"],["D:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","e427d92fadb1c8af8dda144f70ba9b8f"],["D:/qinhao/hexo/public/2020/03/07/LTE/index.html","f87e17124a58c051cc0b2a16c8b98556"],["D:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","4a4f08e843e0f93825da144bc03ab208"],["D:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","85eac86d9e8a67815ca32abe0828547a"],["D:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","63fb1d0b59b80380dbb220dde1863140"],["D:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","ce34124bd445d45b1ab3c7f4e0cbe3ce"],["D:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","2a7df4ecce4ce1c807c96c5110181ce7"],["D:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","55c84b866d3a265c133db4ae93b0357a"],["D:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","415e6c7f8946484a495da31ab7a0cd4d"],["D:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","284218996a617c855cbfec4d81c484ec"],["D:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","fb64bc0d0ba795288db8ca3d9c81ea0b"],["D:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","9a20a6aec02750828991b2513eb0aa88"],["D:/qinhao/hexo/public/2020/04/03/Layer/index.html","e4d815fe025b88c3c279f27d1ee94a11"],["D:/qinhao/hexo/public/2020/04/04/color/index.html","c01cb61b150238eb27f8c16ac7acc8a1"],["D:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","b242ef73b28cd50562881b72aa8dea98"],["D:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","c28b3a0be6cd491c82cbea50db45be8c"],["D:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","68f672111e1107ffd126e893d742215d"],["D:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","6cfbbc7d59def1875f5d6092dce7a8d4"],["D:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","ed64c427fafac17493043371d64772bd"],["D:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","2a04e56685ba08941e59e9795bdd269d"],["D:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","9a46f648a6b99cc11df3ced0d8567b26"],["D:/qinhao/hexo/public/2020/05/11/MIMO/index.html","b2712e484ac1c71c08618b3f12d33e72"],["D:/qinhao/hexo/public/2020/05/12/ICIC/index.html","f3fb1c7844d181ab98711606ac25db98"],["D:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","6bcfbc5c952e3c3da71a3140752b47a5"],["D:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","380a5f23bd8e46c68d32cfd115f4911e"],["D:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","1c362eef632ddafe5fd1b3ac66e0e3bf"],["D:/qinhao/hexo/public/2020/05/20/python-2/index.html","cd0e951f16344acf47065755ee625ed2"],["D:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","797b96b6dc4ee2cf74623d4649a27299"],["D:/qinhao/hexo/public/2020/05/24/Python-3/index.html","5b78986e4d54707de89e16e80999a2b0"],["D:/qinhao/hexo/public/2020/05/25/Python-4/index.html","0bf3f29bfd1f22b061c9a31c3876c0df"],["D:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","9281a09940f123d97ad4d2b9ed1b0b77"],["D:/qinhao/hexo/public/2020/06/01/Python-5/index.html","34e7bde9ef2f152a31bbf9d5536606ef"],["D:/qinhao/hexo/public/2020/06/11/lanzous/index.html","4524dcdeedcfdc5211e6033bfe337914"],["D:/qinhao/hexo/public/2020/06/13/buy-VPN/index.html","4970293a7cc577c2457928e4a885f6e6"],["D:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","3689d8df11d2aa03125e796ba30e33db"],["D:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","9d995aa000cf7291961646f4a180d144"],["D:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","ff0a8b941b4c6bc9a848e83a8c3b0d9a"],["D:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","5874eab6f9993fe050ef427af0bff6c3"],["D:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","15c2367dab6eb49e26ecd0c14aaae04e"],["D:/qinhao/hexo/public/2020/08/13/system_info/index.html","1fa2063d219f34b519065a4a775c9ce2"],["D:/qinhao/hexo/public/ByteDanceVerify.html","c2f651cc3e61b7931f8dbe416c896d9e"],["D:/qinhao/hexo/public/VPN/index.css","8013e09c9d199085bcb55fc941411c54"],["D:/qinhao/hexo/public/VPN/index.html","ca0e4a77db170e39837a6466cefb0ff2"],["D:/qinhao/hexo/public/about/index.html","d0ff0cb0134f6e3b2ce56929b86668c6"],["D:/qinhao/hexo/public/archives/2019/12/index.html","67110efe926ad15a7b845eb1456528a2"],["D:/qinhao/hexo/public/archives/2019/index.html","39a27dc0a11db26cbefb23be0e0553ae"],["D:/qinhao/hexo/public/archives/2020/02/index.html","9031d3e3f537c60137b04209c53e55b5"],["D:/qinhao/hexo/public/archives/2020/02/page/2/index.html","868d7de05360b9b3e50944806b8caf55"],["D:/qinhao/hexo/public/archives/2020/03/index.html","1a4f0856a13dbafc900c1b9e0f3f03cb"],["D:/qinhao/hexo/public/archives/2020/03/page/2/index.html","35f530f703701bfb3cafd42d31a5caa2"],["D:/qinhao/hexo/public/archives/2020/04/index.html","14e29fceae2dd0eac738477cbddc5e9c"],["D:/qinhao/hexo/public/archives/2020/05/index.html","c080369561b653347338f031b8fc5b59"],["D:/qinhao/hexo/public/archives/2020/06/index.html","87c76312579ecfa879f83339c2fefe1d"],["D:/qinhao/hexo/public/archives/2020/07/index.html","726243b8324abb059a340bdface5833a"],["D:/qinhao/hexo/public/archives/2020/08/index.html","263e64fe12940742658b93bf4b125e8d"],["D:/qinhao/hexo/public/archives/2020/index.html","337627247eec9a806408cfb8f713ccf4"],["D:/qinhao/hexo/public/archives/2020/page/2/index.html","26660ec776bb4e5121576bb901adf347"],["D:/qinhao/hexo/public/archives/2020/page/3/index.html","fcf9007f697f2a118dea9378d9f90dc6"],["D:/qinhao/hexo/public/archives/2020/page/4/index.html","ee5fd84d27e5affeebdd0d07adfaaabc"],["D:/qinhao/hexo/public/archives/2020/page/5/index.html","16798f96775935ec399206463364fc65"],["D:/qinhao/hexo/public/archives/2020/page/6/index.html","25d79058c390988b3321f30ee55af90e"],["D:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","3ffd1cd58cb43fd87700a968a04f39b3"],["D:/qinhao/hexo/public/archives/index.html","bc7a527e6999857900c41357c77b1574"],["D:/qinhao/hexo/public/archives/page/2/index.html","bc7a527e6999857900c41357c77b1574"],["D:/qinhao/hexo/public/archives/page/3/index.html","bc7a527e6999857900c41357c77b1574"],["D:/qinhao/hexo/public/archives/page/4/index.html","dd26534bb2d288a49104c16b4019da3d"],["D:/qinhao/hexo/public/archives/page/5/index.html","dd26534bb2d288a49104c16b4019da3d"],["D:/qinhao/hexo/public/archives/page/6/index.html","dd26534bb2d288a49104c16b4019da3d"],["D:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/qinhao/hexo/public/categories/Linux/index.html","d44fcdfc3ab5cea07348a40d7f47fe3d"],["D:/qinhao/hexo/public/categories/Photoshop/index.html","84a56c2e91714c634e3f2404c8c362d8"],["D:/qinhao/hexo/public/categories/Python/index.html","79e3c3c5ea059f8a373417fc427dbba9"],["D:/qinhao/hexo/public/categories/VPN/index.html","59f599d6369d4d0e57c60b5d89b89a99"],["D:/qinhao/hexo/public/categories/个人/index.html","21a8e8af2c2b4b9ccb40594999f6a601"],["D:/qinhao/hexo/public/categories/交换机/index.html","dc05cf2e099e317b3cda0841e1b25cc8"],["D:/qinhao/hexo/public/categories/华为认证/index.html","51ea8a7fdbd06eaa9e6d4d1d770edfcb"],["D:/qinhao/hexo/public/categories/小技巧/index.html","c18443a916a267364e202e968a4bd4d7"],["D:/qinhao/hexo/public/categories/数据库/index.html","8b2bb5fed5b674d0fef768c8ed2d1a4b"],["D:/qinhao/hexo/public/categories/服务器/index.html","987d6d194220155c563185f91c819924"],["D:/qinhao/hexo/public/categories/网络安全/index.html","3b8cad5f86719e5fea79323cfdb5799d"],["D:/qinhao/hexo/public/categories/计算机三级/index.html","93119f265a959ba31b77c8a8dc49bd9d"],["D:/qinhao/hexo/public/categories/计算机网络/index.html","fd2131eb893759d6cc6ac06f3d8aae2b"],["D:/qinhao/hexo/public/categories/软件破解/index.html","565eff22651a26a9a3dd43d5cbfbb6c3"],["D:/qinhao/hexo/public/categories/通信技术/index.html","0b9c8b4d030778cd3af458be30608981"],["D:/qinhao/hexo/public/categories/通信技术/page/2/index.html","89fb7ce06b292f15e1a0a16d9fabfeff"],["D:/qinhao/hexo/public/category/index.html","a7d937b389880a8bc13eb4914b4c639a"],["D:/qinhao/hexo/public/css/style.css","940a599036b2a40f1cda8deba1fa0555"],["D:/qinhao/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/qinhao/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/qinhao/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["D:/qinhao/hexo/public/friends/index.html","2b12097e0d9304f70d7f9defcda4dd9d"],["D:/qinhao/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["D:/qinhao/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["D:/qinhao/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["D:/qinhao/hexo/public/index.html","34d926402514003e9616464fc98248f6"],["D:/qinhao/hexo/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["D:/qinhao/hexo/public/js/app.js","804e218b8d00f3db3d393a7811cc0f3c"],["D:/qinhao/hexo/public/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["D:/qinhao/hexo/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["D:/qinhao/hexo/public/mylist/index.html","959ebbbf6d5ab3832e7bc3182da86c21"],["D:/qinhao/hexo/public/page/2/index.html","59f7b969e96f5f40e43b14041cec391a"],["D:/qinhao/hexo/public/page/3/index.html","de502c9fbdf249ce8c4eec23cc579188"],["D:/qinhao/hexo/public/page/4/index.html","79102309bffc230a1609bd4bdccc026c"],["D:/qinhao/hexo/public/page/5/index.html","9885dac97f54925c795230d86d583ebb"],["D:/qinhao/hexo/public/page/6/index.html","70e99802124477568db1632f6441d427"],["D:/qinhao/hexo/public/tags/IIS/index.html","98ca1a84df44556cabfc75b6ad3d1401"],["D:/qinhao/hexo/public/tags/MySQL/index.html","b25227a10086bd4b5db471fb0dbc6c3c"],["D:/qinhao/hexo/public/tags/Photoshop/index.html","504bcf35d97a3d6945aa88455f7786b8"],["D:/qinhao/hexo/public/tags/VPN/index.html","a4481ecb5f574fc24f3c6d84d3b40ba9"],["D:/qinhao/hexo/public/tags/Web服务器/index.html","0ce05527e65072f938f7b2264294d9b7"],["D:/qinhao/hexo/public/tags/index.html","06c00a5265759c6cb865fbb159a14777"],["D:/qinhao/hexo/public/tags/交换机/index.html","13b0278a3b7da116e816473de8450a77"],["D:/qinhao/hexo/public/tags/图像处理/index.html","f165a26ce12f6ff3048aa23573651725"],["D:/qinhao/hexo/public/tags/基础网络/index.html","d4cc343c0f82399a63bcaa837c94087e"],["D:/qinhao/hexo/public/tags/思科/index.html","e7a76f8964193d586f28b2408e29accc"],["D:/qinhao/hexo/public/tags/思科GRE/index.html","9cedcda324d870a406cf2ad3521e6ba1"],["D:/qinhao/hexo/public/tags/数据库/index.html","e11a9260b709ba017e0bd4a6c6f0af9d"],["D:/qinhao/hexo/public/tags/无线技术/index.html","a8cd8b2f51b36de65797863cc342b030"],["D:/qinhao/hexo/public/tags/无线技术/page/2/index.html","c050621a78a314af4528532b290783e1"],["D:/qinhao/hexo/public/tags/系统安装/index.html","0b77077f98b842bacbd505c195af97d7"],["D:/qinhao/hexo/public/tags/网络安全/index.html","a7a52bd611c7526bbdc62d1b6d26b9ef"],["D:/qinhao/hexo/public/tags/网络技术/index.html","aa4f0daf071b59d25a8eb353dfc8ebff"],["D:/qinhao/hexo/public/tags/计算机三级/index.html","52b6233115a15baa6d08c98539d656f5"],["D:/qinhao/hexo/public/tags/路由器/index.html","277ca6f59209c435a0c9ef951daca5f4"],["D:/qinhao/hexo/public/tags/软考/index.html","f7b52ec780a789a6589dfc363913e667"],["D:/qinhao/hexo/public/tags/通信原理/index.html","62922ac0987e2ca3db9aef29f8fc0a86"],["D:/qinhao/hexo/public/tags/通信原理/page/2/index.html","2dae8c30fd9fe9135b704b2c388dd923"],["D:/qinhao/hexo/public/tags/通信技术/index.html","f4a247db23562c8f47e9cf9d5a5df6cc"],["D:/qinhao/hexo/public/tags/通信技术/page/2/index.html","c7c4f5ddad77325532e27ddc6a6a49a4"]];
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







