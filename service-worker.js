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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","a562500b52e00fd2a65a600c4198bb27"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","69ed38691e63d32c9caa58f640ce373a"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","09653c944759f1f113218f7da65f49f4"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","9191df3ca466c6e5e57f37da89dffc11"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","d485e35d50adf4f3a1cd9dbfa68bfee5"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","cb6a3b52ce43b728ae6ba753769fc454"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","ef79f2ec1a9dabc95405e721b85d2440"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","0f20d1c57c9c4be00872f3df4c5d1ea8"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","d914fc6f50586196cc89ae44460266ee"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","ba3d23b58e7c9561c157526b830727f0"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","a9864aed6935e41ad5ef59eb9ccfc82a"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","f5f86400c6bd3b1a022a84211ba22a94"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","3faf52c0a1fd0165ca555a9e98a95328"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","65cd1671e438673301c5bb435b28246c"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","2018f41862f4fef8789f5d24e5863b50"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","8529f8aac12cccdcb720c574ad065351"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","be4ae6a295560af160658e54530d17f0"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","d1f703a675f1c92b249ceabaefcd9a70"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","8feb13065df45be96bd1f63ca74489a3"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","075f1c835c70eb28f896cdd951837928"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","78a8571bebb9544f574ccacfa32c3bf0"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","e9894de1cae0dee1b5f4c38ae2b1f1c4"],["E:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","f186513ec648d4378831eccc6ff44de5"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","7f93dbfeffc014964b2f14acb6d775b7"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","f268cc60b42c6052acbaed74ec043f26"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","c0e6ff84171c55dd90c465cce17ec0f5"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","4ec8e331bb143ab22007700d4260a0f7"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","286491af2d8fe18bebe6792192214291"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","033d5222e49e390f9ad4a30d2d244b62"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","625a4a8dda21fc134be23bb875657e76"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","20f1eafab098a74bc078fed834b843ce"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","cb1f769ba1d2f1d15735787bc29b403f"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","b5d30c1c9e68aba5c8e30698b52a6a32"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","9bf39272b93cd6f91329b38b7a55fe0c"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","3f6b15dbb9956eb1b1207754619e7541"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","fc277c748a65fa44366bc1d02b70dfb7"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","af79fdc9863fd7b0e17fceb9206de8d4"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","515bdde57c143f90d167d465ec7e72b0"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","8caf8a6a3cd8f9913bec76e64ea1a0cf"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","a15e961fa51c9f7b7cc1d7285076f56d"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","ae7dc6c22d0750ac32ee6f82e10a90af"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","394bfb358655e7382621675f92fbda69"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","f4f37a187e067b95491e41a1b6b3d08e"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","7a872c1f8f05f56c6d63d91b9ec7879a"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","5474938ee59c172fcb295f12a092b629"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","7fa19db9d310def131ab70c11e5747c8"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","bfd53996fb3cc587a0737c8baf628171"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","4c8c9813e5e4f3687bce5e1c89fba1d9"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","cec2bf0ba13fe95c1e6048e7344d15b7"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","53dba853540b1db721c6c5adf7b3a771"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","c3d0c328f824d7d3b86938ef0c3441ca"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","fe14104203cb38e4291a05d376bcd7a5"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","901eada24a0cf0d1c79135042694e751"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","07a9158f4fe6587b9f533e9d2633e6a5"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","5e9041935c40938aca3f1461c6b262bb"],["E:/qinhao/hexo/public/ByteDanceVerify.html","e1adddab45735a0bb8f4eea71bedeb0a"],["E:/qinhao/hexo/public/about/index.html","40bed6947e83773b3cc1d39346c17689"],["E:/qinhao/hexo/public/archives/2020/02/index.html","29f5afe7f4966674b9a7bd4bc8cd0a64"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","eadcad0091de5bcf743380b533a3ea5e"],["E:/qinhao/hexo/public/archives/2020/03/index.html","43ff956ef78b03b32bba83c3c2758c8e"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","44446143d8aa803ef09326d1dd2001a0"],["E:/qinhao/hexo/public/archives/2020/04/index.html","ce60aeda4083ce4a8e553fc284c7dca0"],["E:/qinhao/hexo/public/archives/2020/05/index.html","c92e6c9486cb168a6150efe34680d014"],["E:/qinhao/hexo/public/archives/2020/06/index.html","fb04385984a0efbda8a22fb28d3b1287"],["E:/qinhao/hexo/public/archives/2020/07/index.html","70b46fccb60f56b1a667c39d3cdc59c4"],["E:/qinhao/hexo/public/archives/2020/08/index.html","69f479262867604fdd85fd0d82e41f3d"],["E:/qinhao/hexo/public/archives/2020/index.html","d49f6516d23e92bd47459a31a411649e"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","d824ce13921583b4d26dbef41b0855fc"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","8f1cf9f4c543f6deb16b66c463e5ea05"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","0b8f32a6499e686b45b952e81c9dcac2"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","d1f3c36ccdddc32ec5d4ca15efd5667e"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","234e8d4380ee36ba690d41767aa8b1cd"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","dc078fca735033bbb43dcb4590b63a17"],["E:/qinhao/hexo/public/archives/index.html","19116989868c4fd26a301b3266b289c8"],["E:/qinhao/hexo/public/archives/page/2/index.html","19116989868c4fd26a301b3266b289c8"],["E:/qinhao/hexo/public/archives/page/3/index.html","19116989868c4fd26a301b3266b289c8"],["E:/qinhao/hexo/public/archives/page/4/index.html","45f2b810833c8807470438b5b221877c"],["E:/qinhao/hexo/public/archives/page/5/index.html","45f2b810833c8807470438b5b221877c"],["E:/qinhao/hexo/public/archives/page/6/index.html","45f2b810833c8807470438b5b221877c"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/Linux/index.html","416663b5b1348db6fbd1a723fdb8171e"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","77915ffb172e2bcdb39f08eb18f57547"],["E:/qinhao/hexo/public/categories/Python/index.html","0acc8a7a3fd96a5dbda04fc37d86c2b4"],["E:/qinhao/hexo/public/categories/交换机/index.html","49e78ec7b800d8d15e120fc589a2a135"],["E:/qinhao/hexo/public/categories/华为认证/index.html","a5b46129f82f407b54fe3eef5e449b79"],["E:/qinhao/hexo/public/categories/小技巧/index.html","18e602a56c8cfe1a06ea4b9bc07bac81"],["E:/qinhao/hexo/public/categories/数据库/index.html","48e5c8e7ba4f0340931d14e3644916dc"],["E:/qinhao/hexo/public/categories/服务器/index.html","b13cc02f2a44b4f3c3e9436d8e65b01e"],["E:/qinhao/hexo/public/categories/网络安全/index.html","bcb328c541690e216ea814b1f869ec4b"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","c9f3532339151abdfc1fb73ced08784d"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","f96e430d9126848cdbd7beb920a1a5d1"],["E:/qinhao/hexo/public/categories/软件破解/index.html","1432ca7eb612565221a4df9be5566505"],["E:/qinhao/hexo/public/categories/通信技术/index.html","bf3b78780d93c82fad6c5f29b7111ff4"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","e9fb223ba4eda0028e2e4431cd91fce2"],["E:/qinhao/hexo/public/category/index.html","105da0cd41257b19a29b3737d3d3689d"],["E:/qinhao/hexo/public/css/style.css","940a599036b2a40f1cda8deba1fa0555"],["E:/qinhao/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["E:/qinhao/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["E:/qinhao/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/friends/index.html","bf36a06d0105cf975feb46bab4387b7c"],["E:/qinhao/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["E:/qinhao/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["E:/qinhao/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["E:/qinhao/hexo/public/index.html","b76557c81b190f766bce8b3554d2a25e"],["E:/qinhao/hexo/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["E:/qinhao/hexo/public/js/app.js","804e218b8d00f3db3d393a7811cc0f3c"],["E:/qinhao/hexo/public/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["E:/qinhao/hexo/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["E:/qinhao/hexo/public/mylist/index.html","9b997f8197bbce53df3b9042410ef413"],["E:/qinhao/hexo/public/page/2/index.html","c7b34c919f9ea0ff40efd67a8ea50354"],["E:/qinhao/hexo/public/page/3/index.html","f9722adafdd6555306ca420a5dbb2844"],["E:/qinhao/hexo/public/page/4/index.html","eedad94bc5bce1d9092c96e6a9843c19"],["E:/qinhao/hexo/public/page/5/index.html","ccb9f5215450dd37c0ea72e0d6c8c154"],["E:/qinhao/hexo/public/page/6/index.html","f701723047827781bd4d3f0a5a16d845"],["E:/qinhao/hexo/public/sw-register.js","28b38b252a58b7a2a153ef7b05abced7"],["E:/qinhao/hexo/public/sw.js","644de7bcfe819d1498282469598307ba"],["E:/qinhao/hexo/public/tags/IIS/index.html","2329e253e583864baf66b0002c69af69"],["E:/qinhao/hexo/public/tags/MySQL/index.html","97dc921839573591860b4a602d63ecaa"],["E:/qinhao/hexo/public/tags/Photoshop/index.html","401fd3eb33a5dc620a8c4f2dddae4478"],["E:/qinhao/hexo/public/tags/VPN/index.html","056fe06ccae13d9fa2550dafab088ce4"],["E:/qinhao/hexo/public/tags/Web服务器/index.html","d33a5507ab79c4e424d71f67bf65a814"],["E:/qinhao/hexo/public/tags/index.html","46390b2ee5c48685a3c7c6dc0f5112ef"],["E:/qinhao/hexo/public/tags/交换机/index.html","053159a08f65d4e2c30c1925e4fbaf74"],["E:/qinhao/hexo/public/tags/图像处理/index.html","44ee86b7a8a430fdab9ea141aed72fe1"],["E:/qinhao/hexo/public/tags/基础网络/index.html","bb2616a6038ce046774de7b111c5ca4a"],["E:/qinhao/hexo/public/tags/思科/index.html","e9d60477af6474a764e0263caf9efac6"],["E:/qinhao/hexo/public/tags/思科GRE/index.html","3e792effe6f6ce7cb50fc571e8bcda95"],["E:/qinhao/hexo/public/tags/数据库/index.html","b8c8c81c15f81fad420b1543f1a3a687"],["E:/qinhao/hexo/public/tags/无线技术/index.html","515be6d219e16317745bf62fd930545b"],["E:/qinhao/hexo/public/tags/无线技术/page/2/index.html","473b34c9bacdbac3fb3243ad6a4f1243"],["E:/qinhao/hexo/public/tags/系统安装/index.html","e7bc7b0dea12d0673c1a4d211779a50a"],["E:/qinhao/hexo/public/tags/网络安全/index.html","883252a1dfa71fa868f6652233aedc00"],["E:/qinhao/hexo/public/tags/网络技术/index.html","a9cb2ea8c2fb3e9023d695f4af3f3342"],["E:/qinhao/hexo/public/tags/计算机三级/index.html","f5abfdacd966d544d5ea3e0d4ef771a7"],["E:/qinhao/hexo/public/tags/路由器/index.html","23d41cf50383de64db9236a83219bd28"],["E:/qinhao/hexo/public/tags/软考/index.html","a6831fc4411caa59f12971de954163b5"],["E:/qinhao/hexo/public/tags/通信原理/index.html","309fdb0915de76ab28708f648af04319"],["E:/qinhao/hexo/public/tags/通信原理/page/2/index.html","5ed4c81443a7c65e192e981973d81270"],["E:/qinhao/hexo/public/tags/通信技术/index.html","a556af20a28fe89a6359d589886b7eb5"],["E:/qinhao/hexo/public/tags/通信技术/page/2/index.html","d9d0e993f90694f19a03ef4513a734c5"]];
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







