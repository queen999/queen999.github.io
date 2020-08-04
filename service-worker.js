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

var precacheConfig = [["D:/qinhao/hexo/public/2019-nCoV/index.html","72027881619e4f25903fa0d406f07930"],["D:/qinhao/hexo/public/2019/12/04/hello/index.html","2ba2eb2bdb3924e30c6a8911d7ea904e"],["D:/qinhao/hexo/public/2019/12/22/HP_Switch_Config/index.html","ea404e5ed196481f46337ddb16986f31"],["D:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","681ee3a8beb3a55d0f83d3146234f36b"],["D:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","839ce8d6b2ca96a6f64e5e261eb5ecf6"],["D:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","9ac34d1dc512e32de13ae3b739c7cfee"],["D:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","d7b62676d1b94dadf2a7035236770601"],["D:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","4eabeab3cbe7a89ad81be940feee9a25"],["D:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","9abc158378ed5b795c0c3a1117aab3c6"],["D:/qinhao/hexo/public/2020/02/24/ssh/index.html","66525b29de2f8d10de24e8e46e7b5089"],["D:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","4bedb2433c83e32bdfed7147a6804996"],["D:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","24e1abccf417e11f9e07e96fcbc616df"],["D:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","c245d4de3216bb4a665f19e40530f609"],["D:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","657fc496abbdfab66fd18837843b0181"],["D:/qinhao/hexo/public/2020/03/04/acl/index.html","241bedf5888b21e3104e077ece49432e"],["D:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","d4644e09a3ef8fb5311419b16ecc99c0"],["D:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","2d6e2205837ef2e494bf7ffc6abd4b16"],["D:/qinhao/hexo/public/2020/03/07/3G/index.html","bb2719ee1ed4245c00b61aa526779790"],["D:/qinhao/hexo/public/2020/03/07/GSM/index.html","e22c268a1becc326b7ff2a9cb7060a13"],["D:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","9240f0690d78460b2d7a2847de2f7767"],["D:/qinhao/hexo/public/2020/03/07/LTE/index.html","d1878f1a5a144a36461727036ed71054"],["D:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","aef131f411617dd11537057dc7db76c2"],["D:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","82e471bee2257f6a5266b195fba5f27a"],["D:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","394ece0efdfe7c11d0cbd81a7db7f640"],["D:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","7c42f3d1ccfbfadc24cb70b577e2f508"],["D:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","b88cefd0692c0b73f47412674dcce79d"],["D:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","2190b1dd8897e13ad131a96dd92074ca"],["D:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","87e5a6f2cb53206773f682f86a968086"],["D:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","cf4ced8efd96a7a76462890bdddf770e"],["D:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","6415056ffc911ddd014cacb0d34cbd85"],["D:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","9c99b5a2579c8824fcf1ee2e5c0449af"],["D:/qinhao/hexo/public/2020/04/03/Layer/index.html","7e9fb8c6476232049d9843ca6c9762fc"],["D:/qinhao/hexo/public/2020/04/04/color/index.html","c45d0bceda7c319507b19f58d295e753"],["D:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","4665e65f0c677997bc03b5761dd428de"],["D:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","1c9306481573f08bb6ce1acaf027c4df"],["D:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","83ea8be7c10382a66603ee4c1a74baec"],["D:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","e290af3d6f24142946592e0b3e6e3128"],["D:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","63faeae0fb3d68d18c2c24f382fa0121"],["D:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","d7fd1a1b3a6002170243a53665b339ab"],["D:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","a32c3f84e3c671c327d6a7d732895790"],["D:/qinhao/hexo/public/2020/05/11/MIMO/index.html","46b38263e1aff962f91f7b38ecab9098"],["D:/qinhao/hexo/public/2020/05/12/ICIC/index.html","21dccbac97cdb5556e62246d82fb5ade"],["D:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","67f1a1d8982c90f202661711b0d1f866"],["D:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","d837ea279aa04863612d513a16fdf70d"],["D:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","b8aba5b476a6a39f3faab5aa840dd62d"],["D:/qinhao/hexo/public/2020/05/20/python-2/index.html","03649d3fd56988ef3ee818df7fe2ee80"],["D:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","f1988a1c1c3eda31ed4cc6295848029b"],["D:/qinhao/hexo/public/2020/05/24/Python-3/index.html","a1c6e060cfd024d95f55a2eca6b8a5c0"],["D:/qinhao/hexo/public/2020/05/25/Python-4/index.html","1f96dd4961f9ad687f75ed731c3a9352"],["D:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","deba3ac7f9ba5303d334b76b6e21af68"],["D:/qinhao/hexo/public/2020/06/01/Python-5/index.html","891794dafd0767c391921ebea517a255"],["D:/qinhao/hexo/public/2020/06/11/lanzous/index.html","8e4c96166e41af0f5cd266a7569ba2e8"],["D:/qinhao/hexo/public/2020/06/13/buy-VPN/index.html","07f3de7648a3353bc4455eb2502b53e6"],["D:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","c3c8c408ea14f07514757b94b242d6b3"],["D:/qinhao/hexo/public/2020/07/01/qudou/index.html","ecd6b9e148e26d1354cbf9993650cbed"],["D:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","94d1e5b0e5e9c14d7affea7a9107d566"],["D:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","a417cd106064c5712d1ea3e71e60846b"],["D:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","2cf757f31204cde86b3811ef6c7b5139"],["D:/qinhao/hexo/public/ByteDanceVerify.html","017e1cccfa32dbeae750ce3d01f5a8a0"],["D:/qinhao/hexo/public/VPN/index.css","8013e09c9d199085bcb55fc941411c54"],["D:/qinhao/hexo/public/VPN/index.html","ca0e4a77db170e39837a6466cefb0ff2"],["D:/qinhao/hexo/public/about/index.html","0367c0df659f7e2197fa1aee30934274"],["D:/qinhao/hexo/public/archives/2019/12/index.html","af25ac0408c536f7b5067ed94839a632"],["D:/qinhao/hexo/public/archives/2019/index.html","af357a90559277527c5531d5e3b7cacc"],["D:/qinhao/hexo/public/archives/2020/02/index.html","ab575efb8b16fdd4765ad0aadf5bdea2"],["D:/qinhao/hexo/public/archives/2020/02/page/2/index.html","d020d3ad23ed4e429a178888527263d2"],["D:/qinhao/hexo/public/archives/2020/03/index.html","5454f810ab522af5323843a19ce74acc"],["D:/qinhao/hexo/public/archives/2020/03/page/2/index.html","5b77e970455126a9595e5fe67996e681"],["D:/qinhao/hexo/public/archives/2020/04/index.html","e8e268a0bc0351ad286d9b0c81f829df"],["D:/qinhao/hexo/public/archives/2020/05/index.html","1432920750f318e4ec652562153afa03"],["D:/qinhao/hexo/public/archives/2020/06/index.html","c0ab0ffeeae73c31bf63ca2fe154e316"],["D:/qinhao/hexo/public/archives/2020/07/index.html","7307030d06b7a185c4866b4af3963360"],["D:/qinhao/hexo/public/archives/2020/index.html","1e98d2a30b8170dbca6bfb6c3f0894eb"],["D:/qinhao/hexo/public/archives/2020/page/2/index.html","cc7f3d56f26492f6bfaeef26eceaf224"],["D:/qinhao/hexo/public/archives/2020/page/3/index.html","7e2d692d0bc23964e87b22d962bbc4ad"],["D:/qinhao/hexo/public/archives/2020/page/4/index.html","3a9e9cf6a8f2c8e9d1ff1795f66fc8e9"],["D:/qinhao/hexo/public/archives/2020/page/5/index.html","c580d0d52f99cad8bf5af663be5ef41d"],["D:/qinhao/hexo/public/archives/2020/page/6/index.html","32ab4e1225d3ac01242aa145197dba1e"],["D:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","fd16530d84cc2e4915680d7300476f91"],["D:/qinhao/hexo/public/archives/index.html","3db38f320731ece7b7259bf546d9265b"],["D:/qinhao/hexo/public/archives/page/2/index.html","3db38f320731ece7b7259bf546d9265b"],["D:/qinhao/hexo/public/archives/page/3/index.html","3db38f320731ece7b7259bf546d9265b"],["D:/qinhao/hexo/public/archives/page/4/index.html","bfc097c9265061ea33569f0082e728eb"],["D:/qinhao/hexo/public/archives/page/5/index.html","bfc097c9265061ea33569f0082e728eb"],["D:/qinhao/hexo/public/archives/page/6/index.html","bfc097c9265061ea33569f0082e728eb"],["D:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/qinhao/hexo/public/categories/Linux/index.html","ee00c5b51042f5ff05843066580ec367"],["D:/qinhao/hexo/public/categories/Photoshop/index.html","f2957265fbbd2c9a2a8398d4fd4d8563"],["D:/qinhao/hexo/public/categories/Python/index.html","4f4d2fbee54ad8fcbc1290f5cb7ca4b7"],["D:/qinhao/hexo/public/categories/VPN/index.html","222a9950aead5b5a0e73352817862867"],["D:/qinhao/hexo/public/categories/个人/index.html","cf4659d533a59eb42fd0527ae4c48fa9"],["D:/qinhao/hexo/public/categories/交换机/index.html","d1186b28aecfb5e26e2d7cd81d337e8b"],["D:/qinhao/hexo/public/categories/华为认证/index.html","dda2848235d7f15d42206f0a383990b4"],["D:/qinhao/hexo/public/categories/小技巧/index.html","d8249762ff42431b6bbf237e46ac3bf9"],["D:/qinhao/hexo/public/categories/数据库/index.html","a4380c4d93e9afc6deb68b5a5b46fc63"],["D:/qinhao/hexo/public/categories/服务器/index.html","227d2295a52091d62dfcbf31ed21ab82"],["D:/qinhao/hexo/public/categories/网络安全/index.html","8e07802b586572f44107c638670fe786"],["D:/qinhao/hexo/public/categories/计算机三级/index.html","2dead468d5b8fb490cc597ebe4517648"],["D:/qinhao/hexo/public/categories/计算机网络/index.html","74793d8c75d4502669956df1f60ba59b"],["D:/qinhao/hexo/public/categories/软件破解/index.html","32934192540faf7369edeb4a26efbedf"],["D:/qinhao/hexo/public/categories/通信技术/index.html","082ced8b61be96f72fb2803502591fb9"],["D:/qinhao/hexo/public/categories/通信技术/page/2/index.html","13b6fcf702e26cf9e47880e46a6de669"],["D:/qinhao/hexo/public/category/index.html","72dae20c96e798c7867583504ebe2063"],["D:/qinhao/hexo/public/css/style.css","28b8b9d8d2d35dd8cca2120f3d205618"],["D:/qinhao/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/qinhao/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/qinhao/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["D:/qinhao/hexo/public/friends/index.html","c80353d1d426c34c530d152aad227c5e"],["D:/qinhao/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["D:/qinhao/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["D:/qinhao/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["D:/qinhao/hexo/public/index.html","ea84764d11bb33a1f44a999c1aa9936f"],["D:/qinhao/hexo/public/js/app.js","ea306851b6276a0ffeec351d138589e5"],["D:/qinhao/hexo/public/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["D:/qinhao/hexo/public/js/valine.js","303a3cafe360b6aa26d5e8de035e46bc"],["D:/qinhao/hexo/public/mylist/index.html","2939d9db334c051ffb4d3950c84b8d56"],["D:/qinhao/hexo/public/page/2/index.html","1b6853cec8ddf02ff29d8775d700d4e2"],["D:/qinhao/hexo/public/page/3/index.html","4f0885cc401036ff04ce7928ae4b7bff"],["D:/qinhao/hexo/public/page/4/index.html","797d52df22875ffccfc953db9d86639e"],["D:/qinhao/hexo/public/page/5/index.html","6200104825338c478b4b524397e6c268"],["D:/qinhao/hexo/public/page/6/index.html","d9026b7eedb34fdd8ad6ee5d5e4c8a80"],["D:/qinhao/hexo/public/tags/IIS/index.html","fe5a25d14f68cdc0629225b752199313"],["D:/qinhao/hexo/public/tags/MySQL/index.html","3a464887d3570199331fdc24ea62abf0"],["D:/qinhao/hexo/public/tags/Photoshop/index.html","9d9c06189e0d167819a4337aeca1a999"],["D:/qinhao/hexo/public/tags/VPN/index.html","23b184f10c26ea2731fa9f22323e61cf"],["D:/qinhao/hexo/public/tags/Web服务器/index.html","3042e333d27b50b5d2307ce4001a25ca"],["D:/qinhao/hexo/public/tags/index.html","fc5ea344481503997bd24ee5a228c543"],["D:/qinhao/hexo/public/tags/交换机/index.html","269e394f5d354fa535a8bbeb067d01a8"],["D:/qinhao/hexo/public/tags/图像处理/index.html","1f25dc673bc6a401bdd7f2fe80dbb01a"],["D:/qinhao/hexo/public/tags/基础网络/index.html","7ca194fb7895d9670b3811e8000c03d3"],["D:/qinhao/hexo/public/tags/思科/index.html","348237083fd61bdb0baf4f70ba2f92bc"],["D:/qinhao/hexo/public/tags/思科GRE/index.html","1eb40239c5fd7808125b9296e5d846c4"],["D:/qinhao/hexo/public/tags/数据库/index.html","189cfdbdaec9ebe08d26c257ad28e9ac"],["D:/qinhao/hexo/public/tags/无线技术/index.html","5ca01a4976cd10f543537fd79dd5aef6"],["D:/qinhao/hexo/public/tags/无线技术/page/2/index.html","0b19d45edfef27a5296aa07ecd888014"],["D:/qinhao/hexo/public/tags/系统安装/index.html","63f5828cbf58f7b1ffe220531e024d41"],["D:/qinhao/hexo/public/tags/网络安全/index.html","131b12c4d5fdceb75d66c048ab3f0bfa"],["D:/qinhao/hexo/public/tags/网络技术/index.html","0be88db455162f70d387052e9757a395"],["D:/qinhao/hexo/public/tags/计算机三级/index.html","f4c4a3951d59fd8e8d6736d7e8c6537b"],["D:/qinhao/hexo/public/tags/路由器/index.html","dd29a603c723860509ed99c428a2214b"],["D:/qinhao/hexo/public/tags/软考/index.html","77882269df9dd7110b855377bd83961d"],["D:/qinhao/hexo/public/tags/通信原理/index.html","d5e66b2de34019edf9b6d7d6ef153d8d"],["D:/qinhao/hexo/public/tags/通信原理/page/2/index.html","3ca6a4a3887f4fa7796f1135088d3248"],["D:/qinhao/hexo/public/tags/通信技术/index.html","7b5864d20a9f75b91918d51cd79006f5"],["D:/qinhao/hexo/public/tags/通信技术/page/2/index.html","7a1614a440f6620c5b03c1043bd234cd"]];
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







