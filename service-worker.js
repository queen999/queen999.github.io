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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","0514f4c31a566e2b1e4283eefec59a88"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","90cd40de8df0976741aa403d5c086177"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","2b61d0be8b3429c098cca91a1c3e1b9e"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","48cb6e9558f7f58749f7aad8699c2505"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","36bb886a08f1c2d2718d11011981679f"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","20b48691f39ffc284f1509a156f3a66d"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","39b01f7f0abdbae8fd9db3225505e875"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","b8926eca07465402117c778e8037c7ba"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","29cb946a671ae8559d7cb20299d00011"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","999bbea26fefb63996b4ba6ec7fcfb96"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","05770dda5bb32d7e0da613ae24418f0e"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","8ead2a6d57c45c8968e98ab62fd8b329"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","b3c226242601c93a6c70ec4ac6d5a209"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","05c7d95982e0f9c23e01d88bc19e43bd"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","a0c23f0afb7f39245bc5f44e1c717b3a"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","4378ff2ac18a4c10168acab1cb83a65e"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","990244638a59048464898dfda77175e5"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","642b90d0db3d7a239c4e160d101ebe7d"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","e54e03e9f27cdc75b6df486d54f5d0e5"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","0d380dbeaf419bbfb722e75ea57e89b1"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","e22bbf8bde7c5e0c1b9ef887f0273123"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","58b06709d90aba18a9ed301d98a6022b"],["E:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","dde5c1f0c291fd3feb4014bfdc826948"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","451964c2a316d7f09a4c91cbdbb5556e"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","7dd3526091805e9304b3f8d152470744"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","045acd99f461c795eb52168cb4606a5d"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","9e1f2ef4933b0801772859f9815d27d5"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","b1886b2decf3ef047c5e4d32ff54383a"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","54d787801138dca776265213065fc2ce"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","1f8e5ac29d1fbbb8969a997657ab0c2a"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","30d960cce66849c5c72d4d9d102da659"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","0371013c1431adbe5d30aaf157d044e4"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","63f86cbb6c9fce018aef823a9e545ac3"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","116adf5f694dd5e5d37d7a04a66b6ce8"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","a81c2086d2a4a6edb93e37711d7bb187"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","c8848e95d09ead89b5dc43091f8ebcb5"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","055345ec97ee97fa6c1d5edfd5993ffc"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","411c4be22933779baf437501eabe5ed8"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","01033cb6a08822e2c02f6bb3a12e1e53"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","9558696f43cd045d834988cbddcc57e4"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","7938d91c78a874ac26a30aaed2662503"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","1bf64c75938d18b35ea59a406e5e7654"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","5250f217d6eebbb976241d7a09744f1c"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","93d871f1070fd85ce46cecf283439a69"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","ccbca5b1ee0bad574a3a4d17fc513aa6"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","ae0d2eea9c500c8d9ea44601b4baf54c"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","4a63f4b070cb338f7d355d26a120eec8"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","e48b505f0aa1c8dfd81940da725be024"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","5ed7e1e4d120bfb4bdbd06f734c315c5"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","d6d9ca7bf9464057f72fc1dcddfc268c"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","68fa521af2e9ed6a68417ba04793242f"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","3e1b3c80dc051f326e51ce638e00d422"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","3bc1855f366a1d1ebf9d6185720f1914"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","19bd0e580430bdb6b7cb428f6af3e17a"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","06f0a8e42916b326b1c6f5b0f7e8cc27"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","8017ca97fe75fb1e7785d814fd5fd016"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","cfc6831ab12b8de5a20c76a7023bd291"],["E:/qinhao/hexo/public/ByteDanceVerify.html","f609c950594b076be1e6db5e791363fd"],["E:/qinhao/hexo/public/about/index.html","697ded7853a08bf4951295c41d5b59b8"],["E:/qinhao/hexo/public/archives/2020/02/index.html","3224ba6519aade89a38b6f2840a730f2"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","04d6c62b42d744d5a0e5ba4b96a2049f"],["E:/qinhao/hexo/public/archives/2020/03/index.html","4e5cea0ee68254c29eff871f69811228"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","4ba7e73db2959390722180e1870a6ac9"],["E:/qinhao/hexo/public/archives/2020/04/index.html","5a2063d49fd6bbb08ba763d4470b5646"],["E:/qinhao/hexo/public/archives/2020/05/index.html","a7d689b409bf0880dbb4370e532960d2"],["E:/qinhao/hexo/public/archives/2020/06/index.html","334a1960dc83aba701b32388130ec2b9"],["E:/qinhao/hexo/public/archives/2020/07/index.html","bfdf43a9125ae201ac3093cbf97f2490"],["E:/qinhao/hexo/public/archives/2020/08/index.html","18a169fe76e7348c852e7b3775a13623"],["E:/qinhao/hexo/public/archives/2020/10/index.html","641495357ff4912ec277f3d340d52a34"],["E:/qinhao/hexo/public/archives/2020/index.html","3c169f6792b627262b4679b211df46cd"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","2356566f78d80bd3ded4f227d302d0a1"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","9ad478b3e97b01d49e5b18d26630507f"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","1e375073af8eb6ee10daba49144be9f5"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","d016de7de2cb517c7137362b13e7b231"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","3ba415f416b1ca743d1199c8a6f7cc11"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","0c8ac9a3f140958a934729a64e760f6b"],["E:/qinhao/hexo/public/archives/index.html","a691c22c34d44a034aed2be22db19e5d"],["E:/qinhao/hexo/public/archives/page/2/index.html","a691c22c34d44a034aed2be22db19e5d"],["E:/qinhao/hexo/public/archives/page/3/index.html","a691c22c34d44a034aed2be22db19e5d"],["E:/qinhao/hexo/public/archives/page/4/index.html","0f7300892075c84f8d0ec178df806e6a"],["E:/qinhao/hexo/public/archives/page/5/index.html","0f7300892075c84f8d0ec178df806e6a"],["E:/qinhao/hexo/public/archives/page/6/index.html","0f7300892075c84f8d0ec178df806e6a"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/Linux/index.html","138c3e5d7887486719e00cd9f048bcb0"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","ab9cc992e23c52f587e9660c7b98b32f"],["E:/qinhao/hexo/public/categories/Python/index.html","2563b448dbb3d053cc1e107522e11c9c"],["E:/qinhao/hexo/public/categories/交换机/index.html","d9a3dbf168380b69d22faf5162e6d5aa"],["E:/qinhao/hexo/public/categories/华为认证/index.html","098206adc60074d03776750373d738fb"],["E:/qinhao/hexo/public/categories/小技巧/index.html","aeb2a2bc69219626e93417f721ad0ee9"],["E:/qinhao/hexo/public/categories/数据库/index.html","4bafe991773ffe8dd77b1beca103574b"],["E:/qinhao/hexo/public/categories/服务器/index.html","cec266b2b54337c3089db5235addd57e"],["E:/qinhao/hexo/public/categories/网络安全/index.html","839e238304064d78e813484d057e0b71"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","ce9160824902d912afcd346f65a4bceb"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","09fdd00306518301ef2bab2c4bb7c087"],["E:/qinhao/hexo/public/categories/软件破解/index.html","b5b6d88e9ff5f4ef94a15091ebe1e19c"],["E:/qinhao/hexo/public/categories/通信技术/index.html","bf5488f85e0d78f9cade4409ad018f7f"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","8d5e864889dc25748edcbdc8fd55a66c"],["E:/qinhao/hexo/public/category/index.html","5ad63a27d5172ddb3664ccc4680aa1d8"],["E:/qinhao/hexo/public/css/style.css","940a599036b2a40f1cda8deba1fa0555"],["E:/qinhao/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["E:/qinhao/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["E:/qinhao/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/friends/index.html","b82d5f86837058b94159e8d69595662e"],["E:/qinhao/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["E:/qinhao/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["E:/qinhao/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["E:/qinhao/hexo/public/index.html","40a9378e723958514cabf47ed376f594"],["E:/qinhao/hexo/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["E:/qinhao/hexo/public/js/app.js","804e218b8d00f3db3d393a7811cc0f3c"],["E:/qinhao/hexo/public/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["E:/qinhao/hexo/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["E:/qinhao/hexo/public/mylist/index.html","296ddf8d659a0125fa707d64159c7aa9"],["E:/qinhao/hexo/public/page/2/index.html","1dad000a9aa4bf4e3f0436bbab05a1d3"],["E:/qinhao/hexo/public/page/3/index.html","8da20f0628b9d5732b9cfdc64103a63e"],["E:/qinhao/hexo/public/page/4/index.html","9a8e9e6877cc9d2ab667bdd050aab6d7"],["E:/qinhao/hexo/public/page/5/index.html","76563dab4a2a1767321678f1128187e7"],["E:/qinhao/hexo/public/page/6/index.html","93279fe8cb67cacc399b11999a6d71ed"],["E:/qinhao/hexo/public/sw-register.js","7356bebe879bd3b19cdbe8f861e1bf19"],["E:/qinhao/hexo/public/sw.js","92791059c692b3b97591817650000224"],["E:/qinhao/hexo/public/tags/IIS/index.html","79dcf1dc949176b3b18833127d846f3e"],["E:/qinhao/hexo/public/tags/MySQL/index.html","4d109318f0fa911ff750b4d5308d1f0d"],["E:/qinhao/hexo/public/tags/Photoshop/index.html","bc9d7094d0e676d11b4f901ce58ea695"],["E:/qinhao/hexo/public/tags/VPN/index.html","68458319d77631d599e5b22cd79aa166"],["E:/qinhao/hexo/public/tags/Web服务器/index.html","60e4ad5baa22b67b256fb32aaab270ac"],["E:/qinhao/hexo/public/tags/index.html","679f96f5be818235ebe7aefe14381ab1"],["E:/qinhao/hexo/public/tags/交换机/index.html","771b7d22a49649aee9a2270813fe12a0"],["E:/qinhao/hexo/public/tags/图像处理/index.html","19f265f953fb52bf48250826fd0c139a"],["E:/qinhao/hexo/public/tags/基础网络/index.html","f4577c0c4384bcf583df60b2247dbc08"],["E:/qinhao/hexo/public/tags/思科/index.html","ec81cb008103f8ba17a802bd300155de"],["E:/qinhao/hexo/public/tags/思科GRE/index.html","a8dfef4f23d8475cb3165a75d19453a7"],["E:/qinhao/hexo/public/tags/数据库/index.html","fbbbc6210e695e718b604e247d3432fe"],["E:/qinhao/hexo/public/tags/无线技术/index.html","7d4ed5b31527130eee632d7e44ce1d33"],["E:/qinhao/hexo/public/tags/无线技术/page/2/index.html","5a5530315aea8fa1ba12a4336e5916e9"],["E:/qinhao/hexo/public/tags/系统安装/index.html","0e32df804a23ffc999bb820b63e500f0"],["E:/qinhao/hexo/public/tags/网络安全/index.html","511572757fb48366e4550304054f9791"],["E:/qinhao/hexo/public/tags/网络技术/index.html","60dc38a279744f845dcdd189eb62966f"],["E:/qinhao/hexo/public/tags/计算机三级/index.html","f8ded747ca541aef259f00879a830b7e"],["E:/qinhao/hexo/public/tags/路由器/index.html","6b69ee03efe4463b8aa970e0885f1e37"],["E:/qinhao/hexo/public/tags/软考/index.html","6cd6f93ad7e8af588e74498a5031540b"],["E:/qinhao/hexo/public/tags/通信原理/index.html","9771f1e2a40abc725a80ca480d32154d"],["E:/qinhao/hexo/public/tags/通信原理/page/2/index.html","559ad58632441edbf9ee1f43469280c2"],["E:/qinhao/hexo/public/tags/通信技术/index.html","01ef929b92ae29d3bd6ecc760745ca5e"],["E:/qinhao/hexo/public/tags/通信技术/page/2/index.html","e6570dad700504c09a50521ded01b9af"]];
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







