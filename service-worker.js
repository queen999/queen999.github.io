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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","a562500b52e00fd2a65a600c4198bb27"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","69ed38691e63d32c9caa58f640ce373a"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","09653c944759f1f113218f7da65f49f4"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","9191df3ca466c6e5e57f37da89dffc11"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","d485e35d50adf4f3a1cd9dbfa68bfee5"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","cb6a3b52ce43b728ae6ba753769fc454"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","ef79f2ec1a9dabc95405e721b85d2440"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","0f20d1c57c9c4be00872f3df4c5d1ea8"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","d914fc6f50586196cc89ae44460266ee"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","ba3d23b58e7c9561c157526b830727f0"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","a9864aed6935e41ad5ef59eb9ccfc82a"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","f5f86400c6bd3b1a022a84211ba22a94"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","3faf52c0a1fd0165ca555a9e98a95328"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","65cd1671e438673301c5bb435b28246c"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","2018f41862f4fef8789f5d24e5863b50"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","8529f8aac12cccdcb720c574ad065351"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","be4ae6a295560af160658e54530d17f0"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","d1f703a675f1c92b249ceabaefcd9a70"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","8feb13065df45be96bd1f63ca74489a3"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","075f1c835c70eb28f896cdd951837928"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","78a8571bebb9544f574ccacfa32c3bf0"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","e9894de1cae0dee1b5f4c38ae2b1f1c4"],["E:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","f186513ec648d4378831eccc6ff44de5"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","7f93dbfeffc014964b2f14acb6d775b7"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","f268cc60b42c6052acbaed74ec043f26"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","c0e6ff84171c55dd90c465cce17ec0f5"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","4ec8e331bb143ab22007700d4260a0f7"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","286491af2d8fe18bebe6792192214291"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","033d5222e49e390f9ad4a30d2d244b62"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","625a4a8dda21fc134be23bb875657e76"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","20f1eafab098a74bc078fed834b843ce"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","cb1f769ba1d2f1d15735787bc29b403f"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","b5d30c1c9e68aba5c8e30698b52a6a32"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","9bf39272b93cd6f91329b38b7a55fe0c"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","3f6b15dbb9956eb1b1207754619e7541"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","fc277c748a65fa44366bc1d02b70dfb7"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","af79fdc9863fd7b0e17fceb9206de8d4"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","515bdde57c143f90d167d465ec7e72b0"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","8caf8a6a3cd8f9913bec76e64ea1a0cf"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","a15e961fa51c9f7b7cc1d7285076f56d"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","ae7dc6c22d0750ac32ee6f82e10a90af"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","394bfb358655e7382621675f92fbda69"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","f4f37a187e067b95491e41a1b6b3d08e"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","7a872c1f8f05f56c6d63d91b9ec7879a"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","5474938ee59c172fcb295f12a092b629"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","7fa19db9d310def131ab70c11e5747c8"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","bfd53996fb3cc587a0737c8baf628171"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","4c8c9813e5e4f3687bce5e1c89fba1d9"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","cec2bf0ba13fe95c1e6048e7344d15b7"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","53dba853540b1db721c6c5adf7b3a771"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","c3d0c328f824d7d3b86938ef0c3441ca"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","fe14104203cb38e4291a05d376bcd7a5"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","901eada24a0cf0d1c79135042694e751"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","07a9158f4fe6587b9f533e9d2633e6a5"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","5e9041935c40938aca3f1461c6b262bb"],["E:/qinhao/hexo/public/ByteDanceVerify.html","e1adddab45735a0bb8f4eea71bedeb0a"],["E:/qinhao/hexo/public/about/index.html","40bed6947e83773b3cc1d39346c17689"],["E:/qinhao/hexo/public/archives/2020/02/index.html","4c22665f22be5fbfd5213a32056a152f"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","ae62b7c01753b423d3b5c74b3015babe"],["E:/qinhao/hexo/public/archives/2020/03/index.html","db48fb2b72215c0e4ba5d034e30c4785"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","4d1276fe4ae15d5be9bee751fd37951b"],["E:/qinhao/hexo/public/archives/2020/04/index.html","317908c7ca0f931b32ba69d0607938a7"],["E:/qinhao/hexo/public/archives/2020/05/index.html","57729f509637717cebdcb3b9c5a59b73"],["E:/qinhao/hexo/public/archives/2020/06/index.html","7a0cb05d04a8b67bd9b95f18bb251c25"],["E:/qinhao/hexo/public/archives/2020/07/index.html","3111b6aec2ba7f50fd901d86d8f77ea5"],["E:/qinhao/hexo/public/archives/2020/08/index.html","bf5bc5a3ea622d856617da17cf1c21c7"],["E:/qinhao/hexo/public/archives/2020/index.html","73fa1d9627db9fa038c2f619b369ded7"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","7560414dff474bb5fbf0f141f81d10e0"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","7aeb6df2e0447e8b1dedf27397712639"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","28f5c3f1bb0120204b9c791efe941014"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","ec3ccec351ce021891c1ed6a1005f7c5"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","f02b465ad4b6ab8a03551c13568a8006"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","dc078fca735033bbb43dcb4590b63a17"],["E:/qinhao/hexo/public/archives/index.html","f03ea096f260133f2cacb5a351ea31a6"],["E:/qinhao/hexo/public/archives/page/2/index.html","f03ea096f260133f2cacb5a351ea31a6"],["E:/qinhao/hexo/public/archives/page/3/index.html","f03ea096f260133f2cacb5a351ea31a6"],["E:/qinhao/hexo/public/archives/page/4/index.html","21d9618bbfd0ce779fa1600d3ee007dc"],["E:/qinhao/hexo/public/archives/page/5/index.html","21d9618bbfd0ce779fa1600d3ee007dc"],["E:/qinhao/hexo/public/archives/page/6/index.html","21d9618bbfd0ce779fa1600d3ee007dc"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/Linux/index.html","585bafa1bf129cae43307033fff68743"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","ffcb6852f2b658b69d3eb72914132e2f"],["E:/qinhao/hexo/public/categories/Python/index.html","28900c0ee6de3e1693fdb186f93691be"],["E:/qinhao/hexo/public/categories/交换机/index.html","b8afe2e8bb1f0678ad58c60154c10b7d"],["E:/qinhao/hexo/public/categories/华为认证/index.html","72e1a41c5ef39ed028c5da929305d862"],["E:/qinhao/hexo/public/categories/小技巧/index.html","0bd285ea40cdd8afbf6faf1f746d94ec"],["E:/qinhao/hexo/public/categories/数据库/index.html","c3fcefe6f261fdbf2bbd0f76552d6861"],["E:/qinhao/hexo/public/categories/服务器/index.html","000c9429c2f2db9950cc8edc231f1942"],["E:/qinhao/hexo/public/categories/网络安全/index.html","cd78f4578eac1bda7044fb73c981ef08"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","5ffe051d55af42b2ce6cc1b5e4a64463"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","2f52aa521e501ec0ad3aa7a32737a7b3"],["E:/qinhao/hexo/public/categories/软件破解/index.html","6645da38d2cebd7e71bbdb74ef2b2bd6"],["E:/qinhao/hexo/public/categories/通信技术/index.html","e1e1d057eb5eff4eee97123dc0d04fc8"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","6890fb85b5adfbeee04f140823a7653b"],["E:/qinhao/hexo/public/category/index.html","105da0cd41257b19a29b3737d3d3689d"],["E:/qinhao/hexo/public/css/style.css","940a599036b2a40f1cda8deba1fa0555"],["E:/qinhao/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["E:/qinhao/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["E:/qinhao/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/friends/index.html","bf36a06d0105cf975feb46bab4387b7c"],["E:/qinhao/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["E:/qinhao/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["E:/qinhao/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["E:/qinhao/hexo/public/index.html","e928eb578b82ef48430923712f48ff08"],["E:/qinhao/hexo/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["E:/qinhao/hexo/public/js/app.js","804e218b8d00f3db3d393a7811cc0f3c"],["E:/qinhao/hexo/public/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["E:/qinhao/hexo/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["E:/qinhao/hexo/public/mylist/index.html","c26e45713ea96ce16f409f0827f9335f"],["E:/qinhao/hexo/public/page/2/index.html","cd75f2b61c6278f2fc347cb9c5036a95"],["E:/qinhao/hexo/public/page/3/index.html","cc77ed45c0b21b99b913d9711e1418c8"],["E:/qinhao/hexo/public/page/4/index.html","8680a3ae941364057ee6869d13ac8502"],["E:/qinhao/hexo/public/page/5/index.html","5d91f9d9f479284b0888b079163ee445"],["E:/qinhao/hexo/public/page/6/index.html","c2c681d3bf1727ff644fbba5a236da5a"],["E:/qinhao/hexo/public/sw-register.js","f51be6de29e04bdebabbd0d04f627e7a"],["E:/qinhao/hexo/public/sw.js","bb66928b84ce569930edd24a77f3b046"],["E:/qinhao/hexo/public/tags/IIS/index.html","378108b1979801f9255ea2a79683127c"],["E:/qinhao/hexo/public/tags/MySQL/index.html","44af664a2e0b7efc77b635a41d975e7d"],["E:/qinhao/hexo/public/tags/Photoshop/index.html","61027a619fc5d6ce05aededf179afbde"],["E:/qinhao/hexo/public/tags/VPN/index.html","e3c630f94206f9d7321ce0c915982f82"],["E:/qinhao/hexo/public/tags/Web服务器/index.html","7e780c0d8b4922f7ed694a6dca36b364"],["E:/qinhao/hexo/public/tags/index.html","46390b2ee5c48685a3c7c6dc0f5112ef"],["E:/qinhao/hexo/public/tags/交换机/index.html","33dec2b4e2100edf56950f9545fc3bc5"],["E:/qinhao/hexo/public/tags/图像处理/index.html","88c1dc7372377cf29078a5e9401057cd"],["E:/qinhao/hexo/public/tags/基础网络/index.html","bf78c0eac3b43dbd34145ca6f1102f2f"],["E:/qinhao/hexo/public/tags/思科/index.html","b8e886436ebc0bdf19b6ed45525e0ba3"],["E:/qinhao/hexo/public/tags/思科GRE/index.html","e75a58173c922f89069f4ee2da5d64c2"],["E:/qinhao/hexo/public/tags/数据库/index.html","c540dbcce658d5df984efeed209b5f20"],["E:/qinhao/hexo/public/tags/无线技术/index.html","dd37a8c41b9cdba1d58ff2d6a10e8c1e"],["E:/qinhao/hexo/public/tags/无线技术/page/2/index.html","70e566ffced3e63b56280b55b098048e"],["E:/qinhao/hexo/public/tags/系统安装/index.html","47bb06272867e699f9ff59bca95cd058"],["E:/qinhao/hexo/public/tags/网络安全/index.html","98dd4a905e8a1d28034cad4b14ebda40"],["E:/qinhao/hexo/public/tags/网络技术/index.html","c69e509c2b86875fc8afc4c3bef78255"],["E:/qinhao/hexo/public/tags/计算机三级/index.html","cb1cca7d9858fe02fe04a1ce27be9afc"],["E:/qinhao/hexo/public/tags/路由器/index.html","ee58f7cb567f25f6e1a9641b60729b23"],["E:/qinhao/hexo/public/tags/软考/index.html","08598d6d497c6ef3f25674e61cabe639"],["E:/qinhao/hexo/public/tags/通信原理/index.html","4e4d01de4149034851b94fbbff0468d3"],["E:/qinhao/hexo/public/tags/通信原理/page/2/index.html","8e3c6f1b41ac5ba277419455fb00217d"],["E:/qinhao/hexo/public/tags/通信技术/index.html","cf5c9ce28da08f8a8b353437ac63f6cc"],["E:/qinhao/hexo/public/tags/通信技术/page/2/index.html","63cc48ab766f4193c64d9faa5a8bbcb1"]];
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







