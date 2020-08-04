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

var precacheConfig = [["D:/qinhao/hexo/public/2019-nCoV/index.html","72027881619e4f25903fa0d406f07930"],["D:/qinhao/hexo/public/2019/12/04/hello/index.html","739eb6d40a65c7b98a0daecfc074fb88"],["D:/qinhao/hexo/public/2019/12/22/HP_Switch_Config/index.html","d9252c120c724388d734b838cd3751a7"],["D:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","114af4bd4761864d99f4b7f274c370fd"],["D:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","60f2ade0a46945fe3dce20841cfc30a9"],["D:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","c7d052fbc272dd367cb69e1257b326e2"],["D:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","a0bb9583071f8e9bd9ed6587b0491f1a"],["D:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","1b3de124e9a980ff5e0ea4a5a9727a32"],["D:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","2032b6a2ea950cef502a7e1f67abbe9e"],["D:/qinhao/hexo/public/2020/02/24/ssh/index.html","ddafa58de8148b305f78eac37267a618"],["D:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","e2661d9be7130ee3646214b3efdfd13c"],["D:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","87feeb76d663e52a1d9faf113c1b9159"],["D:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","32e9fb1cd81f2d795a4ef92ad1fd0c2a"],["D:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","f1ffa215e6b5c57b8449bc71c02410fb"],["D:/qinhao/hexo/public/2020/03/04/acl/index.html","bfd6a1a000449210be8febdd3af0ae75"],["D:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","d557117b73b299b73c2fc84256acc9f2"],["D:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","c7cf5691f035edef98ed67f4b43410ae"],["D:/qinhao/hexo/public/2020/03/07/3G/index.html","3847f5db4be7a59777cc6ae7f3884af0"],["D:/qinhao/hexo/public/2020/03/07/GSM/index.html","732a4dfbc4afc180631ab8e434896c7c"],["D:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","7eec7ded9603134f04ce96e447c714b6"],["D:/qinhao/hexo/public/2020/03/07/LTE/index.html","f9f8d5a1242da0e12b52d4252be2efa1"],["D:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","35b5ab2b826e9e3a245de9f0ecb668f0"],["D:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","eb332aaeee47c3345f09029b73cf7066"],["D:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","cab3162622bf4b08d40af133c2373274"],["D:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","1ec8848b287280aaae36e0d6905188ed"],["D:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","f5e4a94868d625c60afd48364af517f4"],["D:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","9dde9f42dadd50d03c10d5b0d477851d"],["D:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","073c57a2145ed3400c0dab69575a1adc"],["D:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","6f33d67c3f6a9e8411492269c38c6692"],["D:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","3f0bcbefbb78a02f0ac8bea129c1a741"],["D:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","31794f5b8ac9e4a8dc92030220fa81c9"],["D:/qinhao/hexo/public/2020/04/03/Layer/index.html","25584df8600adfffbe956bbcb9bd2307"],["D:/qinhao/hexo/public/2020/04/04/color/index.html","276a22e66166272ef3d482f3a5578610"],["D:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","8f44145db6a366d43eed0651059e24e8"],["D:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","ed197fb4d0fc9aa384e5687ca61607e5"],["D:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","fcbd15ec233620f5e60934beaa7825c3"],["D:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","75b379211fd0bb955cfa0940dbf71bc9"],["D:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","ee7dbef1015bb6d8324a79d4d62d777b"],["D:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","d72dd27ea8017ce3f8ac6cbd3b14d1b4"],["D:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","aa0ae01720425ef3b1d202cb588470c5"],["D:/qinhao/hexo/public/2020/05/11/MIMO/index.html","be31f6180b753906517598e21fd69fc3"],["D:/qinhao/hexo/public/2020/05/12/ICIC/index.html","16ba795b60a6d672dc4398b143a35891"],["D:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","a7a389d6496559daa5f57c061d8a6a14"],["D:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","8083db3008acbc9bcdf1d56964064672"],["D:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","c3769e899edb3d9f57614aa1481bb9f9"],["D:/qinhao/hexo/public/2020/05/20/python-2/index.html","255826ad8b8b78933f270baa076a9c60"],["D:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","0a7b0942392a0be053b167b03176dc51"],["D:/qinhao/hexo/public/2020/05/24/Python-3/index.html","05d4bc516a083cc5c089e658c79b135e"],["D:/qinhao/hexo/public/2020/05/25/Python-4/index.html","0a38699fcda2bead3ccf3640908dd808"],["D:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","fadacf8080b6be0e9a639b1fe2f7e0a4"],["D:/qinhao/hexo/public/2020/06/01/Python-5/index.html","146119efda38a24b52e70d5408e45501"],["D:/qinhao/hexo/public/2020/06/11/lanzous/index.html","7845b1eb8ecd70f88019f84e532fff73"],["D:/qinhao/hexo/public/2020/06/13/buy-VPN/index.html","c49ca565861fd7fc453d8f8eabc680ab"],["D:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","a6935a4866ebc95f015d701f384b36a7"],["D:/qinhao/hexo/public/2020/07/01/qudou/index.html","7684b084cb1d754fe51033bf328a032a"],["D:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","3100f7f6f27da2111363cdaba9424f5e"],["D:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","f9c90ceff8fe600a57851690af1bcc46"],["D:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","749700bfc14d786b2d60e9de6c843fec"],["D:/qinhao/hexo/public/ByteDanceVerify.html","35f694e7c36b2078bec762840baee937"],["D:/qinhao/hexo/public/VPN/index.css","8013e09c9d199085bcb55fc941411c54"],["D:/qinhao/hexo/public/VPN/index.html","ca0e4a77db170e39837a6466cefb0ff2"],["D:/qinhao/hexo/public/about/index.html","b429d9e015485be39e10b01eccb2a614"],["D:/qinhao/hexo/public/archives/2019/12/index.html","ead4f447c99662b2c96b1f34527777fb"],["D:/qinhao/hexo/public/archives/2019/index.html","98e97768023559cc262bc53abd20ae99"],["D:/qinhao/hexo/public/archives/2020/02/index.html","1d0cbb4be898fbd9fd72d931bef7feee"],["D:/qinhao/hexo/public/archives/2020/02/page/2/index.html","1385ef6df8617b8d759a430c02abf58c"],["D:/qinhao/hexo/public/archives/2020/03/index.html","29c8eee72e07867694e47189c0e9b881"],["D:/qinhao/hexo/public/archives/2020/03/page/2/index.html","9de8fccc31edb2027a1d65f8c28f32c7"],["D:/qinhao/hexo/public/archives/2020/04/index.html","31316c7abeba0434b90157d049d36825"],["D:/qinhao/hexo/public/archives/2020/05/index.html","30bbe341b98b39cc440e568f423b44f1"],["D:/qinhao/hexo/public/archives/2020/06/index.html","c1b193b4a25b5abd0472d1a9d13fec7d"],["D:/qinhao/hexo/public/archives/2020/07/index.html","375285fa60ba86425d7a41d4ed2b994e"],["D:/qinhao/hexo/public/archives/2020/index.html","0ba8b9ee8839b5ea213068802f3f6c50"],["D:/qinhao/hexo/public/archives/2020/page/2/index.html","9d0ca190c72af121a23b34c1cf8dfe78"],["D:/qinhao/hexo/public/archives/2020/page/3/index.html","f709f6d5e0d7c8930e3328e0549870f9"],["D:/qinhao/hexo/public/archives/2020/page/4/index.html","b673721c20ce48614e6a47f8690c1b2b"],["D:/qinhao/hexo/public/archives/2020/page/5/index.html","e7215734e6db9bfd63804348d8f26404"],["D:/qinhao/hexo/public/archives/2020/page/6/index.html","b0de61d0e4b3133307668d8b2a0cebb9"],["D:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","2509445119c78214fae987834a700538"],["D:/qinhao/hexo/public/archives/index.html","9a9129d470e5d08d68c0d59261f5afb2"],["D:/qinhao/hexo/public/archives/page/2/index.html","9a9129d470e5d08d68c0d59261f5afb2"],["D:/qinhao/hexo/public/archives/page/3/index.html","9a9129d470e5d08d68c0d59261f5afb2"],["D:/qinhao/hexo/public/archives/page/4/index.html","4022ffbe9e5b28790d5c44f835858003"],["D:/qinhao/hexo/public/archives/page/5/index.html","4022ffbe9e5b28790d5c44f835858003"],["D:/qinhao/hexo/public/archives/page/6/index.html","4022ffbe9e5b28790d5c44f835858003"],["D:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/qinhao/hexo/public/categories/Linux/index.html","3dc964166606e5192a4282259910259f"],["D:/qinhao/hexo/public/categories/Photoshop/index.html","a04696d84cb5a7751a3aef35e99bd223"],["D:/qinhao/hexo/public/categories/Python/index.html","300f63ca842d5124e9ac336dae29f15a"],["D:/qinhao/hexo/public/categories/VPN/index.html","1850932c05905792181b641cc95da39a"],["D:/qinhao/hexo/public/categories/个人/index.html","c0466920de51d1118ee97b72833eb345"],["D:/qinhao/hexo/public/categories/交换机/index.html","58ba4e332de1cf0d11ec335ed4a29df0"],["D:/qinhao/hexo/public/categories/华为认证/index.html","f9b53d5200d17e495dc0f1b2830cfa66"],["D:/qinhao/hexo/public/categories/小技巧/index.html","3620540993b2ee6a718d3c6632d02ba9"],["D:/qinhao/hexo/public/categories/数据库/index.html","90856788de863f74e484e2c9499aff41"],["D:/qinhao/hexo/public/categories/服务器/index.html","4e781235b5f3f11f48aa0568e7ba19b6"],["D:/qinhao/hexo/public/categories/网络安全/index.html","590f0309369b9c7a0b8d9ebe7aa485fd"],["D:/qinhao/hexo/public/categories/计算机三级/index.html","517fad33e9fbf15c6ee766e3e7955ce5"],["D:/qinhao/hexo/public/categories/计算机网络/index.html","11878afbf0f4abb18b0f0f4480452ac6"],["D:/qinhao/hexo/public/categories/软件破解/index.html","8d8793ee3f2ff2f9631c1b28f95260bd"],["D:/qinhao/hexo/public/categories/通信技术/index.html","a3be187572a751a03827c94b7b78d7e0"],["D:/qinhao/hexo/public/categories/通信技术/page/2/index.html","e8ef80af0002cbc8f09182dfd8cd85d7"],["D:/qinhao/hexo/public/category/index.html","ef1ad300fa45082add23d3fc12fddc3f"],["D:/qinhao/hexo/public/css/style.css","28b8b9d8d2d35dd8cca2120f3d205618"],["D:/qinhao/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/qinhao/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/qinhao/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["D:/qinhao/hexo/public/friends/index.html","0b5a953d0b069065276ce451c8956ff5"],["D:/qinhao/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["D:/qinhao/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["D:/qinhao/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["D:/qinhao/hexo/public/index.html","c067bb0304f82aa97483da5725d441a6"],["D:/qinhao/hexo/public/js/app.js","ea306851b6276a0ffeec351d138589e5"],["D:/qinhao/hexo/public/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["D:/qinhao/hexo/public/js/valine.js","303a3cafe360b6aa26d5e8de035e46bc"],["D:/qinhao/hexo/public/mylist/index.html","a695bb2b52f8093cc227a4ae2b976386"],["D:/qinhao/hexo/public/page/2/index.html","3d504a10ee8a3cbd1ac7a523ba5fc660"],["D:/qinhao/hexo/public/page/3/index.html","519c573af4f5913160a6874cfb40d251"],["D:/qinhao/hexo/public/page/4/index.html","4d3b94caa00901dbbf8ea388ea4249c8"],["D:/qinhao/hexo/public/page/5/index.html","742b435d3dfaf9bf1e73b34ebb96db66"],["D:/qinhao/hexo/public/page/6/index.html","9f058f663840c1d448da483521ab629d"],["D:/qinhao/hexo/public/tags/IIS/index.html","00bf5fa40233d43655f8677820724aa7"],["D:/qinhao/hexo/public/tags/MySQL/index.html","e0f8129a8fbadd303a5ed2881e9433f8"],["D:/qinhao/hexo/public/tags/Photoshop/index.html","8179b85c2c90bb3f83775a0f67abd357"],["D:/qinhao/hexo/public/tags/VPN/index.html","3b318a8de58aa15722a71bdbef7d9168"],["D:/qinhao/hexo/public/tags/Web服务器/index.html","eb5999d8e5f777d48e8e47631a45c9c5"],["D:/qinhao/hexo/public/tags/index.html","4a041c39080f4814061d697f874930b9"],["D:/qinhao/hexo/public/tags/交换机/index.html","843ba0cc4a44921181f3f04ad438fb43"],["D:/qinhao/hexo/public/tags/图像处理/index.html","87ae3e89bfa6bf73a75bd24b2b9f781a"],["D:/qinhao/hexo/public/tags/基础网络/index.html","a83634001a43c817cfc8ee8398efdf48"],["D:/qinhao/hexo/public/tags/思科/index.html","19eb657273ca81e7d05442bd6971ce45"],["D:/qinhao/hexo/public/tags/思科GRE/index.html","1148b219e45cfab745d2d5a2c8d41967"],["D:/qinhao/hexo/public/tags/数据库/index.html","470b353daf8aa72d20595f00af331756"],["D:/qinhao/hexo/public/tags/无线技术/index.html","de017f72bcef11846df0f654c232832a"],["D:/qinhao/hexo/public/tags/无线技术/page/2/index.html","5f6da0b6773822a8378cd624be9c6912"],["D:/qinhao/hexo/public/tags/系统安装/index.html","6141570d6230045581dd94e97a55928e"],["D:/qinhao/hexo/public/tags/网络安全/index.html","0374527ef5f3458904a6f5dd7aa83a3a"],["D:/qinhao/hexo/public/tags/网络技术/index.html","d730de5262e28734cea59d6e1976cff4"],["D:/qinhao/hexo/public/tags/计算机三级/index.html","a3dce2498abbea17f4933d9f852f18b7"],["D:/qinhao/hexo/public/tags/路由器/index.html","7ae8964e2f78ce38a498ce9535b12fac"],["D:/qinhao/hexo/public/tags/软考/index.html","a0fd96c1130f93c6681f52b8c1efc7f6"],["D:/qinhao/hexo/public/tags/通信原理/index.html","24a808abf32ad8fbe8999e6ed01f806b"],["D:/qinhao/hexo/public/tags/通信原理/page/2/index.html","036b73302be34b9035fb8a693915876f"],["D:/qinhao/hexo/public/tags/通信技术/index.html","b7fa3a209c4de12eea0dfcbbe4c9c708"],["D:/qinhao/hexo/public/tags/通信技术/page/2/index.html","eb404cc3b6f96fc2ab77e5b83d61b89d"]];
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







