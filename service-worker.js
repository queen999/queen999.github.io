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

var precacheConfig = [["D:/qinhao/hexo/public/2019-nCoV/index.html","72027881619e4f25903fa0d406f07930"],["D:/qinhao/hexo/public/2019/12/04/hello/index.html","fffea8610e38f15438d666da1c169103"],["D:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","0739bc94ab270ff3d0268c1b71f5be55"],["D:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","7896307dd067e99d5f4f97bfeb7dbb97"],["D:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","53e639682c82b1290eabc218c5a3f145"],["D:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","3e2ba7d3a573702b179dee1e97db079d"],["D:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","22ad7abdf5752a341d710eaf44eb8770"],["D:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","e6bc017051e1ca55c49434336731aa25"],["D:/qinhao/hexo/public/2020/02/24/ssh/index.html","e322c7ec958a97d9eb6f2169303374cf"],["D:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","ba0cc0556de8b730a344b46ff3dd910b"],["D:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","c4cda156a656f51894946fefdc70a2d5"],["D:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","35e4426dbef0b2e440897be3015db6cc"],["D:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","b4b304599535f767f29dd2866da696db"],["D:/qinhao/hexo/public/2020/03/04/acl/index.html","baf7f631780a5516aeb96eee8fe12704"],["D:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","f1562a6af46ddd52f97cdff60b8476a5"],["D:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","2685effdf40e9eaeeee5fa56bf89d11c"],["D:/qinhao/hexo/public/2020/03/07/3G/index.html","69b84022ce5281576868548375d4daca"],["D:/qinhao/hexo/public/2020/03/07/GSM/index.html","74a9488ed2f0a3c8fb51f70b92e58b8e"],["D:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","10a5a8f599365d27278444f599575079"],["D:/qinhao/hexo/public/2020/03/07/LTE/index.html","bd2cdeb8b369aa2cc1383d7be17c4802"],["D:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","5f6492eb44b1a0d08114607ff9ae7310"],["D:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","116e9302398af7e7f12df0beb6518c2a"],["D:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","f76d65daee8a2afd95367c5cd53e68bf"],["D:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","749f99c9bba767f661969d0d8656d6b4"],["D:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","f2073762c74ed4a264fb19a02ad56e79"],["D:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","ac51673b1401e0c687c15d1b7d30f35a"],["D:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","3f5a21d4cb8a6cd3edee6ac353c43f15"],["D:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","9b20bbc5c9c80ff8b263a6a1148eeadc"],["D:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","e8a47e9b911806f3bece7e33ca3a51df"],["D:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","feeb17c614b898e7c2c57caf1ddbae12"],["D:/qinhao/hexo/public/2020/04/03/Layer/index.html","caa166747b05fba5c9202804d8ef447a"],["D:/qinhao/hexo/public/2020/04/04/color/index.html","73a250b87011bf9af69305a950931a9f"],["D:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","be215ee2408d3d13cb9ac08605939c61"],["D:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","1d02aa7dd6bd724818ed4b3dd66cc448"],["D:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","210a0630def247935ec768e90eb4932d"],["D:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","65be2c86cdf920ee5afd6e69b6a5fe4c"],["D:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","abc81a8f354fa1b4626d050a95010809"],["D:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","7f64c871af00f469907e7a80617f730a"],["D:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","8dd381c6a8b711c354782be2a3ca5298"],["D:/qinhao/hexo/public/2020/05/11/MIMO/index.html","52c4cc82af46d3b620bcad57d4400d77"],["D:/qinhao/hexo/public/2020/05/12/ICIC/index.html","5f5bdaa9b40ad22deee07daed5012d13"],["D:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","90f8e35f61bbb451ea78ad23fdec3790"],["D:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","292bdbbdffe8b4221ce7490740d593d0"],["D:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","e66eace2e4dd1a1ca9c6ac799408575d"],["D:/qinhao/hexo/public/2020/05/20/python-2/index.html","6bbb48308b49163005899c5a77c6e69d"],["D:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","e033384ad1062579af53fdec9a08daa8"],["D:/qinhao/hexo/public/2020/05/24/Python-3/index.html","7c5f3ad2a3ed2aabe5eb4f4274594ae3"],["D:/qinhao/hexo/public/2020/05/25/Python-4/index.html","cfb81cbcc778d2b7bbd07d57f430d4a9"],["D:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","43b7e207d34f0674529e05081c43b1b3"],["D:/qinhao/hexo/public/2020/06/01/Python-5/index.html","c1366147440f32ea7faa18a56559f4b8"],["D:/qinhao/hexo/public/2020/06/11/lanzous/index.html","21f344ca4cf9f2dd9298c119f371d19a"],["D:/qinhao/hexo/public/2020/06/13/buy-VPN/index.html","5cb1de05cb7ed5d1bb4cb8bc08725f55"],["D:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","60cfcc92f2952eeb849414e7695bec17"],["D:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","3ef1c8438856f08134c73f3859382a4c"],["D:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","708ec0bbdf17840fd119af91a251cb71"],["D:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","c855c2f058145c7ce0ebbaf0c6252a47"],["D:/qinhao/hexo/public/ByteDanceVerify.html","4b80daa0b43993550fb1ffdc31912dd4"],["D:/qinhao/hexo/public/VPN/index.css","8013e09c9d199085bcb55fc941411c54"],["D:/qinhao/hexo/public/VPN/index.html","ca0e4a77db170e39837a6466cefb0ff2"],["D:/qinhao/hexo/public/about/index.html","88b6c3f1a3c0d8bef1102802592640ce"],["D:/qinhao/hexo/public/archives/2019/12/index.html","1e8fac74f3955dd566996412a2b8f94c"],["D:/qinhao/hexo/public/archives/2019/index.html","3a531c556772ec33c3f53355444392f3"],["D:/qinhao/hexo/public/archives/2020/02/index.html","21ebd885a305a5693185ad193ab2dcb9"],["D:/qinhao/hexo/public/archives/2020/02/page/2/index.html","2fb15c419e721e4f5d5611fad6202fbe"],["D:/qinhao/hexo/public/archives/2020/03/index.html","0a46e214f876d5a1e9c7b66375ac9ef2"],["D:/qinhao/hexo/public/archives/2020/03/page/2/index.html","bd4df27178fa1592fc5371539a8098cf"],["D:/qinhao/hexo/public/archives/2020/04/index.html","2e72ed14d4de19d83196798117c5bbdd"],["D:/qinhao/hexo/public/archives/2020/05/index.html","56aeffad8defb783ef2b3abf3579f0dd"],["D:/qinhao/hexo/public/archives/2020/06/index.html","f27ccaf78ea4aaf67524d726c65da5f0"],["D:/qinhao/hexo/public/archives/2020/07/index.html","6166e535bca9932e9be23fbb801093a1"],["D:/qinhao/hexo/public/archives/2020/index.html","66de93354fac46b9cafdd71465fe1184"],["D:/qinhao/hexo/public/archives/2020/page/2/index.html","85278966530069dfb3a3a730cdc8d320"],["D:/qinhao/hexo/public/archives/2020/page/3/index.html","cb74f2e21524298d7b29c807a8b8bcaf"],["D:/qinhao/hexo/public/archives/2020/page/4/index.html","d4c1bd7b3d047225d7e6969c8e93dbd6"],["D:/qinhao/hexo/public/archives/2020/page/5/index.html","f39013186612b67f4020ff276e20c530"],["D:/qinhao/hexo/public/archives/2020/page/6/index.html","c00aec55bfaf121081f2f92141820dec"],["D:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","373613e0724d9785ceeeae0690ee5812"],["D:/qinhao/hexo/public/archives/index.html","e4a053bcc27ecd7a4884166511a77508"],["D:/qinhao/hexo/public/archives/page/2/index.html","e4a053bcc27ecd7a4884166511a77508"],["D:/qinhao/hexo/public/archives/page/3/index.html","e4a053bcc27ecd7a4884166511a77508"],["D:/qinhao/hexo/public/archives/page/4/index.html","808b4447c59e150646b4a930962cdb51"],["D:/qinhao/hexo/public/archives/page/5/index.html","808b4447c59e150646b4a930962cdb51"],["D:/qinhao/hexo/public/archives/page/6/index.html","808b4447c59e150646b4a930962cdb51"],["D:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/qinhao/hexo/public/categories/Linux/index.html","680a47330176efd0df9054b9dfcd11bb"],["D:/qinhao/hexo/public/categories/Photoshop/index.html","59bae0f98729b32d5e2de1554ff5fd15"],["D:/qinhao/hexo/public/categories/Python/index.html","c7cadc0e82215a9330b41eaec653f450"],["D:/qinhao/hexo/public/categories/VPN/index.html","83321a164b33c396391b7df479e9115f"],["D:/qinhao/hexo/public/categories/个人/index.html","1fe7156aeb16c123ce0adc62c07aa5d0"],["D:/qinhao/hexo/public/categories/交换机/index.html","a4ff33499d74b71d003b889fc27e2ece"],["D:/qinhao/hexo/public/categories/华为认证/index.html","8d162a0296888b056c037be46c64836a"],["D:/qinhao/hexo/public/categories/小技巧/index.html","70ff620e9eca760956b7101b5a92d003"],["D:/qinhao/hexo/public/categories/数据库/index.html","49b3b1de81a6295ab823aa897b115cd1"],["D:/qinhao/hexo/public/categories/服务器/index.html","7f71f6993510c6a54537be4ad9377f1e"],["D:/qinhao/hexo/public/categories/网络安全/index.html","3c0f07f2d8059f3e9c7bce0daecd20bd"],["D:/qinhao/hexo/public/categories/计算机三级/index.html","9cb5dfffa2243adf82ceba84bc08fb81"],["D:/qinhao/hexo/public/categories/计算机网络/index.html","fa72901e1da496cacd86997995d2ca61"],["D:/qinhao/hexo/public/categories/软件破解/index.html","35c56c4ef15e1db120a662b611bccb71"],["D:/qinhao/hexo/public/categories/通信技术/index.html","ea2851d20bf1cd2b7ed2742a92353b99"],["D:/qinhao/hexo/public/categories/通信技术/page/2/index.html","2bf5614b2190a22dfc9ea13621d898e5"],["D:/qinhao/hexo/public/category/index.html","3e5b195be56f946f17b635517ff6ffd0"],["D:/qinhao/hexo/public/css/style.css","28b8b9d8d2d35dd8cca2120f3d205618"],["D:/qinhao/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/qinhao/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/qinhao/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["D:/qinhao/hexo/public/friends/index.html","39a4c97fe3b0aae38b982f4dfe785295"],["D:/qinhao/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["D:/qinhao/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["D:/qinhao/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["D:/qinhao/hexo/public/index.html","f4162ece5db89d0aa3a235bf9621c846"],["D:/qinhao/hexo/public/js/app.js","ea306851b6276a0ffeec351d138589e5"],["D:/qinhao/hexo/public/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["D:/qinhao/hexo/public/js/valine.js","303a3cafe360b6aa26d5e8de035e46bc"],["D:/qinhao/hexo/public/mylist/index.html","4529e1397d6e1308b2268a46799bf204"],["D:/qinhao/hexo/public/page/2/index.html","1e9fdb2f5d3914670241e14fb92ae591"],["D:/qinhao/hexo/public/page/3/index.html","0fee12e257bab1b688eb4e04b60bc2f0"],["D:/qinhao/hexo/public/page/4/index.html","67db0c37d07dadfc6c9587c2a73557d7"],["D:/qinhao/hexo/public/page/5/index.html","b0f24e11fcb848dba1a813c124b824a9"],["D:/qinhao/hexo/public/page/6/index.html","7324434c3d476e8bc8e0c3769f496f39"],["D:/qinhao/hexo/public/tags/IIS/index.html","c68c7146f5c5ae72d3bef22449073f81"],["D:/qinhao/hexo/public/tags/MySQL/index.html","0b9a5e0494105968665ce5806e5ccebc"],["D:/qinhao/hexo/public/tags/Photoshop/index.html","98bcd0d9fe8b65eac14b60920e666ae0"],["D:/qinhao/hexo/public/tags/VPN/index.html","87e1aa77c21ba5951394e0951f7c467b"],["D:/qinhao/hexo/public/tags/Web服务器/index.html","9784af1ceaadce0f0d6274535581620b"],["D:/qinhao/hexo/public/tags/index.html","8771c7b635cbddd8bc80423d1773dd7f"],["D:/qinhao/hexo/public/tags/交换机/index.html","79b4380b6b03c4cfc23e5adc366e1fe7"],["D:/qinhao/hexo/public/tags/图像处理/index.html","2f82408c7ce2d46a970f13efe8eb6e30"],["D:/qinhao/hexo/public/tags/基础网络/index.html","8c0e27d372dfed1cbe4fe547c00fe22b"],["D:/qinhao/hexo/public/tags/思科/index.html","aebfa86cae90e73bb455492902916919"],["D:/qinhao/hexo/public/tags/思科GRE/index.html","bab8444efb51a3daebb74b3e070a39fc"],["D:/qinhao/hexo/public/tags/数据库/index.html","e093364137c4da7571451fa496f8724f"],["D:/qinhao/hexo/public/tags/无线技术/index.html","e52d3be1fc259e3b996f9f7a94475a6c"],["D:/qinhao/hexo/public/tags/无线技术/page/2/index.html","b4c8c75ffb50ca2a6bac19b99a341b9b"],["D:/qinhao/hexo/public/tags/系统安装/index.html","3398e80a7784bf6f027585986d23a876"],["D:/qinhao/hexo/public/tags/网络安全/index.html","869d654d2fbed20bd301590585697ada"],["D:/qinhao/hexo/public/tags/网络技术/index.html","afefee8e72ccfc5a54a7fca2f3f93504"],["D:/qinhao/hexo/public/tags/计算机三级/index.html","3ee8bbbfd3c76471a4e78f58a16c2f9f"],["D:/qinhao/hexo/public/tags/路由器/index.html","0854ac7b88530012ff26e2a79fd1d574"],["D:/qinhao/hexo/public/tags/软考/index.html","5aa1497d01ed0c73c26fc4a6030e50ae"],["D:/qinhao/hexo/public/tags/通信原理/index.html","783aadc257a79ec45c0fab608795da92"],["D:/qinhao/hexo/public/tags/通信原理/page/2/index.html","8cc63fe908098ff08812a35202ff48e0"],["D:/qinhao/hexo/public/tags/通信技术/index.html","0692387c1706c869b61a98ff217ab4a6"],["D:/qinhao/hexo/public/tags/通信技术/page/2/index.html","8eee8bc681fbfac955fed3a26abccbc3"]];
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







