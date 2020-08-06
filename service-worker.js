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

var precacheConfig = [["D:/qinhao/hexo/public/2019-nCoV/index.html","72027881619e4f25903fa0d406f07930"],["D:/qinhao/hexo/public/2019/12/04/hello/index.html","1429962255bc8c9c2df186d6fd8267bd"],["D:/qinhao/hexo/public/2019/12/22/HP_Switch_Config/index.html","fe909e627e34a467ce5ccf4689d1995a"],["D:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","3f85034b0635bfd1d28f2ea766a5bb90"],["D:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","7896307dd067e99d5f4f97bfeb7dbb97"],["D:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","53e639682c82b1290eabc218c5a3f145"],["D:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","3e2ba7d3a573702b179dee1e97db079d"],["D:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","22ad7abdf5752a341d710eaf44eb8770"],["D:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","e6bc017051e1ca55c49434336731aa25"],["D:/qinhao/hexo/public/2020/02/24/ssh/index.html","e322c7ec958a97d9eb6f2169303374cf"],["D:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","ba0cc0556de8b730a344b46ff3dd910b"],["D:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","c4cda156a656f51894946fefdc70a2d5"],["D:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","35e4426dbef0b2e440897be3015db6cc"],["D:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","b4b304599535f767f29dd2866da696db"],["D:/qinhao/hexo/public/2020/03/04/acl/index.html","baf7f631780a5516aeb96eee8fe12704"],["D:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","f1562a6af46ddd52f97cdff60b8476a5"],["D:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","2685effdf40e9eaeeee5fa56bf89d11c"],["D:/qinhao/hexo/public/2020/03/07/3G/index.html","69b84022ce5281576868548375d4daca"],["D:/qinhao/hexo/public/2020/03/07/GSM/index.html","74a9488ed2f0a3c8fb51f70b92e58b8e"],["D:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","10a5a8f599365d27278444f599575079"],["D:/qinhao/hexo/public/2020/03/07/LTE/index.html","bd2cdeb8b369aa2cc1383d7be17c4802"],["D:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","5f6492eb44b1a0d08114607ff9ae7310"],["D:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","116e9302398af7e7f12df0beb6518c2a"],["D:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","f76d65daee8a2afd95367c5cd53e68bf"],["D:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","749f99c9bba767f661969d0d8656d6b4"],["D:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","f2073762c74ed4a264fb19a02ad56e79"],["D:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","ac51673b1401e0c687c15d1b7d30f35a"],["D:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","3f5a21d4cb8a6cd3edee6ac353c43f15"],["D:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","9b20bbc5c9c80ff8b263a6a1148eeadc"],["D:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","e8a47e9b911806f3bece7e33ca3a51df"],["D:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","feeb17c614b898e7c2c57caf1ddbae12"],["D:/qinhao/hexo/public/2020/04/03/Layer/index.html","caa166747b05fba5c9202804d8ef447a"],["D:/qinhao/hexo/public/2020/04/04/color/index.html","73a250b87011bf9af69305a950931a9f"],["D:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","be215ee2408d3d13cb9ac08605939c61"],["D:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","1d02aa7dd6bd724818ed4b3dd66cc448"],["D:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","210a0630def247935ec768e90eb4932d"],["D:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","65be2c86cdf920ee5afd6e69b6a5fe4c"],["D:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","abc81a8f354fa1b4626d050a95010809"],["D:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","7f64c871af00f469907e7a80617f730a"],["D:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","8dd381c6a8b711c354782be2a3ca5298"],["D:/qinhao/hexo/public/2020/05/11/MIMO/index.html","52c4cc82af46d3b620bcad57d4400d77"],["D:/qinhao/hexo/public/2020/05/12/ICIC/index.html","5f5bdaa9b40ad22deee07daed5012d13"],["D:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","90f8e35f61bbb451ea78ad23fdec3790"],["D:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","292bdbbdffe8b4221ce7490740d593d0"],["D:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","e66eace2e4dd1a1ca9c6ac799408575d"],["D:/qinhao/hexo/public/2020/05/20/python-2/index.html","6bbb48308b49163005899c5a77c6e69d"],["D:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","e033384ad1062579af53fdec9a08daa8"],["D:/qinhao/hexo/public/2020/05/24/Python-3/index.html","7c5f3ad2a3ed2aabe5eb4f4274594ae3"],["D:/qinhao/hexo/public/2020/05/25/Python-4/index.html","cfb81cbcc778d2b7bbd07d57f430d4a9"],["D:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","43b7e207d34f0674529e05081c43b1b3"],["D:/qinhao/hexo/public/2020/06/01/Python-5/index.html","c1366147440f32ea7faa18a56559f4b8"],["D:/qinhao/hexo/public/2020/06/11/lanzous/index.html","21f344ca4cf9f2dd9298c119f371d19a"],["D:/qinhao/hexo/public/2020/06/13/buy-VPN/index.html","b6850f2b2d4b9c79d7e469443dc8cee8"],["D:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","60cfcc92f2952eeb849414e7695bec17"],["D:/qinhao/hexo/public/2020/07/01/qudou/index.html","6e7c5e6a5d237ea8a1231a755907ff38"],["D:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","83968aac3ea27aec99457fe56972f319"],["D:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","708ec0bbdf17840fd119af91a251cb71"],["D:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","c855c2f058145c7ce0ebbaf0c6252a47"],["D:/qinhao/hexo/public/ByteDanceVerify.html","4b80daa0b43993550fb1ffdc31912dd4"],["D:/qinhao/hexo/public/VPN/index.css","8013e09c9d199085bcb55fc941411c54"],["D:/qinhao/hexo/public/VPN/index.html","ca0e4a77db170e39837a6466cefb0ff2"],["D:/qinhao/hexo/public/about/index.html","88b6c3f1a3c0d8bef1102802592640ce"],["D:/qinhao/hexo/public/archives/2019/12/index.html","25a127d3745c9cb3726d34334362732f"],["D:/qinhao/hexo/public/archives/2019/index.html","2984c20d43da972348075d0f130add41"],["D:/qinhao/hexo/public/archives/2020/02/index.html","bf733d6f2e9efe69881051915c646aec"],["D:/qinhao/hexo/public/archives/2020/02/page/2/index.html","24411570c2e9529ee4e981a02034efe2"],["D:/qinhao/hexo/public/archives/2020/03/index.html","4465e66d4c7d2d293e94231f80cca8bc"],["D:/qinhao/hexo/public/archives/2020/03/page/2/index.html","cad960021073e1f71e5a2bfd7fe0bc9f"],["D:/qinhao/hexo/public/archives/2020/04/index.html","8b2f96882ef7e563697df35b41ef510f"],["D:/qinhao/hexo/public/archives/2020/05/index.html","d9c90acfc690b8b9ae8b9c296ff34379"],["D:/qinhao/hexo/public/archives/2020/06/index.html","8a08e7e3db07e277fd4d5d179040e8cb"],["D:/qinhao/hexo/public/archives/2020/07/index.html","660b49031cec77a9e540ff9771fc6799"],["D:/qinhao/hexo/public/archives/2020/index.html","a6d260e422e0002b2536c5eebace154d"],["D:/qinhao/hexo/public/archives/2020/page/2/index.html","2f7f9ffe0be87ce68a217210004d15af"],["D:/qinhao/hexo/public/archives/2020/page/3/index.html","0a5e3de82790c86b765e4f95abe6eb89"],["D:/qinhao/hexo/public/archives/2020/page/4/index.html","b737831a8855af79614099afd53ffbcb"],["D:/qinhao/hexo/public/archives/2020/page/5/index.html","400b21a250036f0e6cc0ad8f1f46a98f"],["D:/qinhao/hexo/public/archives/2020/page/6/index.html","099a45397fd739ef9979122bf3fe1733"],["D:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","373613e0724d9785ceeeae0690ee5812"],["D:/qinhao/hexo/public/archives/index.html","3617e6370d947131901bd2b2ccf62ff7"],["D:/qinhao/hexo/public/archives/page/2/index.html","3617e6370d947131901bd2b2ccf62ff7"],["D:/qinhao/hexo/public/archives/page/3/index.html","3617e6370d947131901bd2b2ccf62ff7"],["D:/qinhao/hexo/public/archives/page/4/index.html","c746481f4b9bfa3f7c44c7bf3ceb2873"],["D:/qinhao/hexo/public/archives/page/5/index.html","c746481f4b9bfa3f7c44c7bf3ceb2873"],["D:/qinhao/hexo/public/archives/page/6/index.html","c746481f4b9bfa3f7c44c7bf3ceb2873"],["D:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/qinhao/hexo/public/categories/Linux/index.html","0b9af2d5d5ca369eb5a00a13692b5360"],["D:/qinhao/hexo/public/categories/Photoshop/index.html","0bb7e5808cd033086bffa8873d779797"],["D:/qinhao/hexo/public/categories/Python/index.html","df7709a20f2185a3a47fd6d0c83b5b63"],["D:/qinhao/hexo/public/categories/VPN/index.html","cfc3652db84e0f8d8b963373bdde85c3"],["D:/qinhao/hexo/public/categories/个人/index.html","8e9a99bcfeca5b17d726ca69c1c858fb"],["D:/qinhao/hexo/public/categories/交换机/index.html","392c034443aebeb367540b881b295787"],["D:/qinhao/hexo/public/categories/华为认证/index.html","d9ae2fcf2a4ede6722f43977e621a80d"],["D:/qinhao/hexo/public/categories/小技巧/index.html","4f434340cd06a6a7e23ce475417011ad"],["D:/qinhao/hexo/public/categories/数据库/index.html","f4fac14348222926be13f98d22e7b3d7"],["D:/qinhao/hexo/public/categories/服务器/index.html","82f09486db4b993b8eac30513afb2557"],["D:/qinhao/hexo/public/categories/网络安全/index.html","1db32b1239a5db27ce5555001774760f"],["D:/qinhao/hexo/public/categories/计算机三级/index.html","07ead9d36a310cc8f323e6162fde0a08"],["D:/qinhao/hexo/public/categories/计算机网络/index.html","114c88aa01c4957e08b3550cc6a5c131"],["D:/qinhao/hexo/public/categories/软件破解/index.html","d5cda2eb3f28fc924879be8d57eef0de"],["D:/qinhao/hexo/public/categories/通信技术/index.html","493c194f7be9800468757b63bc3e28ce"],["D:/qinhao/hexo/public/categories/通信技术/page/2/index.html","226522264bf22ad128a34ad77f776dcc"],["D:/qinhao/hexo/public/category/index.html","1613f800b4996b81406066cb212c210a"],["D:/qinhao/hexo/public/css/style.css","28b8b9d8d2d35dd8cca2120f3d205618"],["D:/qinhao/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/qinhao/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/qinhao/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["D:/qinhao/hexo/public/friends/index.html","39a4c97fe3b0aae38b982f4dfe785295"],["D:/qinhao/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["D:/qinhao/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["D:/qinhao/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["D:/qinhao/hexo/public/index.html","2c0ccb56cf861de4ad88f52a533475c0"],["D:/qinhao/hexo/public/js/app.js","ea306851b6276a0ffeec351d138589e5"],["D:/qinhao/hexo/public/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["D:/qinhao/hexo/public/js/valine.js","303a3cafe360b6aa26d5e8de035e46bc"],["D:/qinhao/hexo/public/mylist/index.html","2b1f7e4c4335ca526ddd5e0f3c33c759"],["D:/qinhao/hexo/public/page/2/index.html","340b848ae9c0a1172b93c9c7d553e71e"],["D:/qinhao/hexo/public/page/3/index.html","2ca281716d64f194e5368c2b865c53c8"],["D:/qinhao/hexo/public/page/4/index.html","1866eec6ac48baed17efe5e3537e0ae8"],["D:/qinhao/hexo/public/page/5/index.html","131db1f5546379f5010dc1f398678c91"],["D:/qinhao/hexo/public/page/6/index.html","1a9b5fc7812687c7235285375df5c799"],["D:/qinhao/hexo/public/tags/IIS/index.html","e59c22a599402eca3c46b3409cf64f10"],["D:/qinhao/hexo/public/tags/MySQL/index.html","5ed143a542d90d981569bf9bc7f4b78f"],["D:/qinhao/hexo/public/tags/Photoshop/index.html","4d884b609e26efc2ba7f8f778087075a"],["D:/qinhao/hexo/public/tags/VPN/index.html","42ab8a10703462b524402f5b80d53f65"],["D:/qinhao/hexo/public/tags/Web服务器/index.html","fac1286e68d45a4d31f8d5559ea66dcf"],["D:/qinhao/hexo/public/tags/index.html","8771c7b635cbddd8bc80423d1773dd7f"],["D:/qinhao/hexo/public/tags/交换机/index.html","4c214b05cad28aad4c6faff5571d5e69"],["D:/qinhao/hexo/public/tags/图像处理/index.html","bf93fc714e67acc914ab0a4a3418a324"],["D:/qinhao/hexo/public/tags/基础网络/index.html","c30ce49d5389376265941881116941ce"],["D:/qinhao/hexo/public/tags/思科/index.html","2d34c4f45613a35974726bfee2582c98"],["D:/qinhao/hexo/public/tags/思科GRE/index.html","c707e117577b4c4baf78e445bbdec70a"],["D:/qinhao/hexo/public/tags/数据库/index.html","4bf1a0405ddab71204816510d84a0046"],["D:/qinhao/hexo/public/tags/无线技术/index.html","4afab541ec8663795d3e8f9f15e590d9"],["D:/qinhao/hexo/public/tags/无线技术/page/2/index.html","dd62671e350fe566ad904fd276e7c6f2"],["D:/qinhao/hexo/public/tags/系统安装/index.html","8ea3af8a0ce123a8327acfddc0b6212c"],["D:/qinhao/hexo/public/tags/网络安全/index.html","456a21101c895451bb697de718deb48a"],["D:/qinhao/hexo/public/tags/网络技术/index.html","697e9101b86b59ca9c03de2bd0c99633"],["D:/qinhao/hexo/public/tags/计算机三级/index.html","dacc9e0dc945f05da44457ef72ee1269"],["D:/qinhao/hexo/public/tags/路由器/index.html","dbb8c7e54285ebb51ca48f5a30f413cb"],["D:/qinhao/hexo/public/tags/软考/index.html","ebc354c0a338d21669ed51a5635a2be2"],["D:/qinhao/hexo/public/tags/通信原理/index.html","4d9c074ef7a67eef05c3b3b641cf5291"],["D:/qinhao/hexo/public/tags/通信原理/page/2/index.html","3c3085ca7726d26c4117ee932a9e9181"],["D:/qinhao/hexo/public/tags/通信技术/index.html","3df1d4da96677d8f96c52c2f7072880c"],["D:/qinhao/hexo/public/tags/通信技术/page/2/index.html","97d1857b70c69fbb3b2dc6a57737db87"]];
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







