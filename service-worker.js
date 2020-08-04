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

var precacheConfig = [["D:/qinhao/hexo/public/2019-nCoV/index.html","72027881619e4f25903fa0d406f07930"],["D:/qinhao/hexo/public/2019/12/04/hello/index.html","cc315676fadaa770ec369f2e2c12b6e7"],["D:/qinhao/hexo/public/2019/12/22/HP_Switch_Config/index.html","5ebb307c8b017d0317faab376ceab1b4"],["D:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","1ac1771c170f6b842cfc5cd0c692c2b8"],["D:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","957afe288223f4033b5c395bec62b31b"],["D:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","20ed77c34411898ebf822570ff7f41bd"],["D:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","185205a294ada2601e1f2331e2896deb"],["D:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","2e5f18378c0cd0b5edffb334c8de86e6"],["D:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","d17f980f7fcf722847c54f04799513d2"],["D:/qinhao/hexo/public/2020/02/24/ssh/index.html","4c86b1aad5b24d6790829253ce8dee8c"],["D:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","57fe3c479fe8be20e0b03a777073145b"],["D:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","38a685a4cfece41d5f06f70255782741"],["D:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","a9cfbcbe3ffe241d0d1535bd37021937"],["D:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","35fc077177ea9640b2ccfaa750880367"],["D:/qinhao/hexo/public/2020/03/04/acl/index.html","1e8c036ce83b1edb079a5b8f0c7de9c9"],["D:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","999294038f9b5d0ab943908e0b1dd364"],["D:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","be2d355819ec25b4b083b0270139b90b"],["D:/qinhao/hexo/public/2020/03/07/3G/index.html","6afe5c68c21db8e597c2a621484a9448"],["D:/qinhao/hexo/public/2020/03/07/GSM/index.html","2fd10bda1bad9b0cef0dff614e710454"],["D:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","e08369521def20c2b82ed8a2c2bd82db"],["D:/qinhao/hexo/public/2020/03/07/LTE/index.html","0908c69775231623fab280408a303643"],["D:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","df3bb1dd0cd476e72eaef6d2081c4065"],["D:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","95f336be9d5c55ef89b3d462fe80b4f9"],["D:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","7200c95adcfd85ee23daf83c4b2f2c5b"],["D:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","3e8cd9ec03133ef97f98fc40ac4ad158"],["D:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","4c845385c6cf1dab4e8c349b1961efbb"],["D:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","af20ff45d52a0117916f0f629865620a"],["D:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","5cc4ff4255f2841bfe1100f6e14505f1"],["D:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","d0742847f14e5476a599eb42202a8745"],["D:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","8a7a979d7ba0dc8a4ca98803b38e1289"],["D:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","4f11692bfccf2b2291e76a7ad35ce33e"],["D:/qinhao/hexo/public/2020/04/03/Layer/index.html","db735e16867c1ca857966da6a6de42f0"],["D:/qinhao/hexo/public/2020/04/04/color/index.html","508c0d029dd043a47a078d5cf2d7fed6"],["D:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","68e60bfacff544112d58375741ccc349"],["D:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","02edb9baee817a324257b9dc8a4ca364"],["D:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","1fa8f9680d8328d81e749b6dcdf6057e"],["D:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","7e5be585f6ccd1ff6dd491f123d706d8"],["D:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","f6c17eae8233d639f0a95b2376e5d812"],["D:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","9b8fc8f61197953e075c379d0d8f446a"],["D:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","b6784fe50c65e69abc1019a70d7b5410"],["D:/qinhao/hexo/public/2020/05/11/MIMO/index.html","346d5ee38eed0e96a032857b5b19eecb"],["D:/qinhao/hexo/public/2020/05/12/ICIC/index.html","83202994d3e8b37a31f325e0220d0724"],["D:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","0f8c8181f8a709668f5965856f3697d9"],["D:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","8cc60b613f7f991818bfad64b7cef8fd"],["D:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","bfcdb10b683b3daec41b3dc95367a167"],["D:/qinhao/hexo/public/2020/05/20/python-2/index.html","0147d83d196e5625ebd5a971d7dd12e1"],["D:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","51ded21fdb5200b18e9ca5ba49d797fc"],["D:/qinhao/hexo/public/2020/05/24/Python-3/index.html","b317f71105cc8e70ad4f436238c93aec"],["D:/qinhao/hexo/public/2020/05/25/Python-4/index.html","d65d7dd0d701c2f8c113dbe72e5b3e4e"],["D:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","69b139a74e2b6038b86c8469e5106886"],["D:/qinhao/hexo/public/2020/06/01/Python-5/index.html","021d12daac5b09630b58040b0357fc4e"],["D:/qinhao/hexo/public/2020/06/11/lanzous/index.html","2b1e5587a48a10aa6164009c5d628a8e"],["D:/qinhao/hexo/public/2020/06/13/buy-VPN/index.html","cccbabee5393cf9465e6ff1189e4da2c"],["D:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","9df6036d16bde31efb8b1aa763ddd0d5"],["D:/qinhao/hexo/public/2020/07/01/qudou/index.html","fa82424d904a9f89cfe59c82821ad6bf"],["D:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","2ab1f805487838001d338035643d2a08"],["D:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","dd42a211ab9288a8a2aeca61ced29be0"],["D:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","74e7f986f00f421abef4c02225761560"],["D:/qinhao/hexo/public/ByteDanceVerify.html","8fd337b90555ac1f8b26fcbae01cc12e"],["D:/qinhao/hexo/public/VPN/index.css","8013e09c9d199085bcb55fc941411c54"],["D:/qinhao/hexo/public/VPN/index.html","ca0e4a77db170e39837a6466cefb0ff2"],["D:/qinhao/hexo/public/about/index.html","a5e05ae9d923c3c9950d60c7342e073d"],["D:/qinhao/hexo/public/archives/2019/12/index.html","b395effc61158a4ca711fa11f9b092d9"],["D:/qinhao/hexo/public/archives/2019/index.html","31cb8976cd8b499ae9c9df3363f84139"],["D:/qinhao/hexo/public/archives/2020/02/index.html","27aa3bee6976ac7f107959b142e7804f"],["D:/qinhao/hexo/public/archives/2020/02/page/2/index.html","abdd0ff0e689cd90b9fdfba2e80e67b5"],["D:/qinhao/hexo/public/archives/2020/03/index.html","555a788d5ae519efe81a3ead73608dff"],["D:/qinhao/hexo/public/archives/2020/03/page/2/index.html","1790849da3fc29e63d4c0d76122dc57c"],["D:/qinhao/hexo/public/archives/2020/04/index.html","1d8737279b5b621c6bfd8bc928e3d89e"],["D:/qinhao/hexo/public/archives/2020/05/index.html","340c6afbc58ce2a7c14884b92606c252"],["D:/qinhao/hexo/public/archives/2020/06/index.html","79c8ce25e3834597cc31299cb5bf24c5"],["D:/qinhao/hexo/public/archives/2020/07/index.html","7e4b0370824fe18e8b12254210fbf85d"],["D:/qinhao/hexo/public/archives/2020/index.html","c3cf62c541b02a967689ee559b4804e9"],["D:/qinhao/hexo/public/archives/2020/page/2/index.html","b7247ff53ebb7be762a8071b058bee76"],["D:/qinhao/hexo/public/archives/2020/page/3/index.html","4922fac35c93b72d5da7e5dd3966c47d"],["D:/qinhao/hexo/public/archives/2020/page/4/index.html","f06ce3dde1279937d836552c536664ed"],["D:/qinhao/hexo/public/archives/2020/page/5/index.html","22711c776c716ed0e5c445d57f4aa947"],["D:/qinhao/hexo/public/archives/2020/page/6/index.html","4757b7e1fda707f1c387f31a04fb68b5"],["D:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","dc5776173479981ee359c8932e8fe622"],["D:/qinhao/hexo/public/archives/index.html","21c18a5b27b83d5eaf2e0574e26b0172"],["D:/qinhao/hexo/public/archives/page/2/index.html","21c18a5b27b83d5eaf2e0574e26b0172"],["D:/qinhao/hexo/public/archives/page/3/index.html","21c18a5b27b83d5eaf2e0574e26b0172"],["D:/qinhao/hexo/public/archives/page/4/index.html","97264b4c2cebd5f6530dd6d5596d9289"],["D:/qinhao/hexo/public/archives/page/5/index.html","97264b4c2cebd5f6530dd6d5596d9289"],["D:/qinhao/hexo/public/archives/page/6/index.html","97264b4c2cebd5f6530dd6d5596d9289"],["D:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/qinhao/hexo/public/categories/Linux/index.html","ad37b9b8bebc7ddd08de8b502d3d6312"],["D:/qinhao/hexo/public/categories/Photoshop/index.html","ca0d2bb735ddab3b8949d0159e21c3c1"],["D:/qinhao/hexo/public/categories/Python/index.html","529ca31aa0874ee63a9f29f14f2cc8fb"],["D:/qinhao/hexo/public/categories/VPN/index.html","630d618e94cc0a8779286932c5fef9db"],["D:/qinhao/hexo/public/categories/个人/index.html","c228fe4a7bc429f5220f44ff155231c7"],["D:/qinhao/hexo/public/categories/交换机/index.html","4430a55f6906294ae3005a6bcc0e5a9b"],["D:/qinhao/hexo/public/categories/华为认证/index.html","d97126b956a2b48b91aa55d5c559cb0d"],["D:/qinhao/hexo/public/categories/小技巧/index.html","0fdace51d7f42b760d39ccbe08aeb60d"],["D:/qinhao/hexo/public/categories/数据库/index.html","69e8ef431108481b611f5c415ddab8be"],["D:/qinhao/hexo/public/categories/服务器/index.html","44cf288fca8fadf985408b1dd1f4001d"],["D:/qinhao/hexo/public/categories/网络安全/index.html","537fb55efc5b80bf0e562c7f9779bd70"],["D:/qinhao/hexo/public/categories/计算机三级/index.html","fdf463a984ddd982f393c436f700a893"],["D:/qinhao/hexo/public/categories/计算机网络/index.html","40013560cc00b3f378613397789c830d"],["D:/qinhao/hexo/public/categories/软件破解/index.html","20d4f9dcd03077be6c3ef4dbff324a33"],["D:/qinhao/hexo/public/categories/通信技术/index.html","820768d8c2da89c2a6dd426b766a7b8b"],["D:/qinhao/hexo/public/categories/通信技术/page/2/index.html","7ab5232310b00511cb903a001777f997"],["D:/qinhao/hexo/public/category/index.html","0f69bea4a144f43727a9f8da21095742"],["D:/qinhao/hexo/public/css/style.css","28b8b9d8d2d35dd8cca2120f3d205618"],["D:/qinhao/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/qinhao/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/qinhao/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["D:/qinhao/hexo/public/friends/index.html","0c0cfaabe80a849317656208dd6b7dfb"],["D:/qinhao/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["D:/qinhao/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["D:/qinhao/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["D:/qinhao/hexo/public/index.html","4c52182adcb323e50c92bde0434dfae8"],["D:/qinhao/hexo/public/js/app.js","ea306851b6276a0ffeec351d138589e5"],["D:/qinhao/hexo/public/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["D:/qinhao/hexo/public/js/valine.js","303a3cafe360b6aa26d5e8de035e46bc"],["D:/qinhao/hexo/public/mylist/index.html","43d6dd849a06e9e8c8f2f18875c0e9a9"],["D:/qinhao/hexo/public/page/2/index.html","cc04234206e94f1384728eebab0a839c"],["D:/qinhao/hexo/public/page/3/index.html","b01d10f80f2f0c264f514fa6b7ff62aa"],["D:/qinhao/hexo/public/page/4/index.html","32193333b651c6658e737feb5fced8c5"],["D:/qinhao/hexo/public/page/5/index.html","0344193371523880bf2c79ca05391879"],["D:/qinhao/hexo/public/page/6/index.html","53f61c1b862dd5d541e13bb9d36676fb"],["D:/qinhao/hexo/public/tags/IIS/index.html","c7e767d59d24ec637314c263d813a6c5"],["D:/qinhao/hexo/public/tags/MySQL/index.html","709ee7f7eb5cdbdd98c5b2d43a0e6aa2"],["D:/qinhao/hexo/public/tags/Photoshop/index.html","b33e2936151b1d74dfe304e913b55f47"],["D:/qinhao/hexo/public/tags/VPN/index.html","ddf5e54bce681c96a3d38a624175f680"],["D:/qinhao/hexo/public/tags/Web服务器/index.html","7c894477600f191f242640cf15e044d2"],["D:/qinhao/hexo/public/tags/index.html","fc709b6eb3cf27a79bee2a85934d2b1b"],["D:/qinhao/hexo/public/tags/交换机/index.html","7773d552020592e235625c2f0d526ba5"],["D:/qinhao/hexo/public/tags/图像处理/index.html","cf812ce3a0ab55e89470eb6245e2073e"],["D:/qinhao/hexo/public/tags/基础网络/index.html","dc0173cf58418f4a7b012e02fe8384bd"],["D:/qinhao/hexo/public/tags/思科/index.html","ec7914c80768ea77a0fe008b47b09dc8"],["D:/qinhao/hexo/public/tags/思科GRE/index.html","5157640c5e41460292e3b94236f1d0b2"],["D:/qinhao/hexo/public/tags/数据库/index.html","af98e8c499d767ab311dccc1e6c3a37d"],["D:/qinhao/hexo/public/tags/无线技术/index.html","d11d50f6b09c9a388050c8a0131152ab"],["D:/qinhao/hexo/public/tags/无线技术/page/2/index.html","2c274f97f7cd6a49fb0c34b3e6ed930f"],["D:/qinhao/hexo/public/tags/系统安装/index.html","bb163604db135a43df94e0ed63d8273c"],["D:/qinhao/hexo/public/tags/网络安全/index.html","d3060cd57ce4dc9b0bf1ed140017ad0d"],["D:/qinhao/hexo/public/tags/网络技术/index.html","05b07698ba14331497347b7bcace5b7c"],["D:/qinhao/hexo/public/tags/计算机三级/index.html","f6611ef807b46f514bf2cb67eadcf251"],["D:/qinhao/hexo/public/tags/路由器/index.html","4de724a706811755ad00df7cf086e521"],["D:/qinhao/hexo/public/tags/软考/index.html","dc3a74f36b5677a21820b7c0b2c35ade"],["D:/qinhao/hexo/public/tags/通信原理/index.html","84495c9646e44704b126ff3ad36168de"],["D:/qinhao/hexo/public/tags/通信原理/page/2/index.html","c257efe8bd712b91df8667a5d720e70a"],["D:/qinhao/hexo/public/tags/通信技术/index.html","911c718393a4bfe81d2651649088308e"],["D:/qinhao/hexo/public/tags/通信技术/page/2/index.html","ecf10a632875ca7e82fa2b7a24a26683"]];
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







