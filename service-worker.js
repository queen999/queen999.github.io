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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","3af45edd574b91f799be0186a7dffeca"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","7d2d35e51eafe24942bf478510cc98d9"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","880a9f41473779dbf5dff86a04edfa3d"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","65e760404c2663314cde58660e0963e1"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","be41a9367ce91616ac81abad3d192d74"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","f18545e34884a782cf027aa1f634f4bc"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","a514b7b6e42a13a43954971f843bcb7d"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","aa8a21cca47482104bf02b6ae95b1ea1"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","b6015dbee91e98fc38c3a5178f9cd4db"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","2013193e8b2643549f0124a46c7b1dbd"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","91a85ad3ef6898f453a7b03814e51f54"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","abaef8228d981ec2d67e46a2cfb932e9"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","96eae36536f4ab97c042450325942a60"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","88719a1d68b4986969c4be424015ce3d"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","460bb417ff3f5660b091c0cbc187694c"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","0bc090de6e73b63888052baeddfbd2e6"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","7837d57414219371aa4f68774071383e"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","62a21a84a76f285171d08cb531729d93"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","acc6102cc59955a53bc78abd7b2457ff"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","6421a836761557936c6ff3ddb87e2c11"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","38c2978721cd3515d081592ad8728c16"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","811dc8b54f27aadcd8fa867118de74a2"],["E:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","9417afc990a49a44c6cda2c7a416ff62"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","cda8eb0d63f6c6ea4fb56673cc6fc7eb"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","79e2e42511b8b1686c8a4ebab2c520ec"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","040303f27bbe7494bc741b910e221cdb"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","0d0f2b60126ffdc62534da53080f2e61"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","ff9c09266b6c7c6205744274b0f5d8be"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","549ce47879c99a76f117f38f74c0d7d2"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","ea9aa64ac959afb9234ea1242d171d6c"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","d732e9cee4af0993c46e52e55038b727"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","9c341fbb4f4dc72bece5f92f2093b2f4"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","9d3594ef1c44faec2a61a6b54fb4d7d1"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","3c07d4a831e0e5e388053067318c8498"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","1e5124b71f7bf98c95869e3e5341a500"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","d5cd12afe1802f0033c4cf58cd104a65"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","956c0655621978b2376645b232667903"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","e34ea3dfc49c1ca64a87b845a82a77fb"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","47ccdb0bad8692d54d754a3475ee5c12"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","f0f02401eddcaa9e43e97d7b0ac78ac4"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","c22f1144c9fae0217543cfd1796d3218"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","116e93c6ca839cb0c66bffecf95919f0"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","49eb70bca8ab7f02c9bb0505f2d32148"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","e9abbac13ed4342183b8ca26896c25cb"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","662be9220163a31daa9ba896af6015db"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","c109fd693e5ae7efe5119d779f6a1774"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","24f18d7a1882def5b1fad5a7e5074888"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","ef6b22d0c8fb4ebf3da0ab4242c84d4c"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","977f74475d50ba3bee42f48ad7397e2a"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","5cb6ff7507c4103b9981bcb3d7626b1d"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","6800d874636a5635853a1194b492da7b"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","3f5a760c127baed5fe9bbe50e46fa0a1"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","8fe0f1fc80f93bb9b59623a0452fc123"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","803c736dc0e5e7bae08a720ecc932722"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","08c610e63bed7271459e7c9e515562b7"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","fec209e78734a073030ad32885aa226b"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","243debf371a53bcc8c611ff9ec1aa865"],["E:/qinhao/hexo/public/ByteDanceVerify.html","9d018a286b83001e0379514bf4e4cd0a"],["E:/qinhao/hexo/public/about/index.html","74700d49d0940dcb480a42835d2ca8d5"],["E:/qinhao/hexo/public/archives/2020/02/index.html","5153c41c380f4a145c261fb7f60e99f7"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","2b4b154bf2a2967b74890e92dc9e5d78"],["E:/qinhao/hexo/public/archives/2020/03/index.html","b15c95d17a501474a895e97e9e230b95"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","bf716c3d9b2db53c634b22976022c35c"],["E:/qinhao/hexo/public/archives/2020/04/index.html","e9f77c24dcef9ed1221557973603a9d4"],["E:/qinhao/hexo/public/archives/2020/05/index.html","a90ad1f553b09cc7d666842482a07cab"],["E:/qinhao/hexo/public/archives/2020/06/index.html","5a529eabc9a3bf70362076386746b75e"],["E:/qinhao/hexo/public/archives/2020/07/index.html","02db0fe8a5531f0d8218ff0ba4fbcab7"],["E:/qinhao/hexo/public/archives/2020/08/index.html","1bc231a4e55f4a33e6b45a919fff8f10"],["E:/qinhao/hexo/public/archives/2020/10/index.html","47d93f840df65e0ca891ff8e493119b7"],["E:/qinhao/hexo/public/archives/2020/index.html","061b164362c2fbb5a8f3178e2a04c14a"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","8a7bb8712bec82d46d1a111631ff564c"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","c088295656dbc37cd46f106a16c186e5"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","c21ff1ce653a165bbc7768fe3c5b2b83"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","9856d49156022b06da7ce28908cf2d82"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","0582b380d67f34fa0f2f8477f7c0a373"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","f20eef5d4dd3662a3ade4ccc20c021d6"],["E:/qinhao/hexo/public/archives/index.html","8f257a656f40ff98e2b08e08f0188542"],["E:/qinhao/hexo/public/archives/page/2/index.html","8f257a656f40ff98e2b08e08f0188542"],["E:/qinhao/hexo/public/archives/page/3/index.html","8f257a656f40ff98e2b08e08f0188542"],["E:/qinhao/hexo/public/archives/page/4/index.html","73c51c5a0d3e743449d4ba21b34f50f1"],["E:/qinhao/hexo/public/archives/page/5/index.html","73c51c5a0d3e743449d4ba21b34f50f1"],["E:/qinhao/hexo/public/archives/page/6/index.html","73c51c5a0d3e743449d4ba21b34f50f1"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/Linux/index.html","4eaf43a808f35b755550ecbf793ee048"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","cfd4acc97bc82e5e15223dd8f0cd7a6e"],["E:/qinhao/hexo/public/categories/Python/index.html","afec3b88a2314bb8ccc91e877ca68050"],["E:/qinhao/hexo/public/categories/交换机/index.html","7975682a929acb8a9758dfbfe28f2914"],["E:/qinhao/hexo/public/categories/华为认证/index.html","25e247ec27f783eda17e8af66f513cf7"],["E:/qinhao/hexo/public/categories/小技巧/index.html","9934ddbdbb5e2c094dee3fce393dced6"],["E:/qinhao/hexo/public/categories/数据库/index.html","1b4d462ced26b3e51ac411a9ddee80f5"],["E:/qinhao/hexo/public/categories/服务器/index.html","4656c8af6095ba60ec2d8143a5bb05ed"],["E:/qinhao/hexo/public/categories/网络安全/index.html","a92e1568ab272afb970afeb1d204c4fb"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","39a09588d1e00cd4bf73fce597322c25"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","6d03aca748a40658a76727abf084075b"],["E:/qinhao/hexo/public/categories/软件破解/index.html","576bf36b76dcc94fad6e056244744712"],["E:/qinhao/hexo/public/categories/通信技术/index.html","6923e49456e256712eaa47ca0daeb44a"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","9adbb583c53e465a7af6b1781145621f"],["E:/qinhao/hexo/public/category/index.html","555c74b4b99037b1eb57a9a0b6a218ee"],["E:/qinhao/hexo/public/css/style.css","940a599036b2a40f1cda8deba1fa0555"],["E:/qinhao/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["E:/qinhao/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["E:/qinhao/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/friends/index.html","145fdc4810070401bdccfd319220cd9f"],["E:/qinhao/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["E:/qinhao/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["E:/qinhao/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["E:/qinhao/hexo/public/index.html","2988558b81f88f62ddccaf93e2507a48"],["E:/qinhao/hexo/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["E:/qinhao/hexo/public/js/app.js","804e218b8d00f3db3d393a7811cc0f3c"],["E:/qinhao/hexo/public/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["E:/qinhao/hexo/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["E:/qinhao/hexo/public/mylist/index.html","42c9f7f33a951bf07280d2bcbf270a07"],["E:/qinhao/hexo/public/page/2/index.html","c54b570ac59f0b8c8313bd9fcac0b96a"],["E:/qinhao/hexo/public/page/3/index.html","c3e3b9c13d6cce4507ac97058f45dfe2"],["E:/qinhao/hexo/public/page/4/index.html","549829ab05d455e5fd4526691b5a84be"],["E:/qinhao/hexo/public/page/5/index.html","a8fa8d28e479171d0d368c01365c79c7"],["E:/qinhao/hexo/public/page/6/index.html","2f4af605d26ed72d11156699a21a4f30"],["E:/qinhao/hexo/public/sw-register.js","58607b14a5ca6ff753a724d0e0467bd1"],["E:/qinhao/hexo/public/sw.js","f08883c0d5146e91cea0152f9308a18f"],["E:/qinhao/hexo/public/tags/IIS/index.html","812a313684a242b37fe684406e9c3335"],["E:/qinhao/hexo/public/tags/MySQL/index.html","9a999a1a06f814f5c326f69f32229d3f"],["E:/qinhao/hexo/public/tags/Photoshop/index.html","743794e490eaa31963cec021bdd75cc1"],["E:/qinhao/hexo/public/tags/VPN/index.html","74fc1ea05a295600ec4d204129c68490"],["E:/qinhao/hexo/public/tags/Web服务器/index.html","13eb2c837ebf552b01cffd8b4f803153"],["E:/qinhao/hexo/public/tags/index.html","c1c6922c169d2964c9722f097c52b04b"],["E:/qinhao/hexo/public/tags/交换机/index.html","43fb0e1ac3520eeb82f3ba0f8533a9dd"],["E:/qinhao/hexo/public/tags/图像处理/index.html","d10d85f6391639eaecdad7a627833afb"],["E:/qinhao/hexo/public/tags/基础网络/index.html","9f05b7ca8f8aa776548d68c7595ad2d4"],["E:/qinhao/hexo/public/tags/思科/index.html","e5d4191e8eddeb4ad4ba96dcdd5fa791"],["E:/qinhao/hexo/public/tags/思科GRE/index.html","df3ed542835fa6fd1d8209cd5f410c70"],["E:/qinhao/hexo/public/tags/数据库/index.html","821da64b2ef0187f679dac401426df49"],["E:/qinhao/hexo/public/tags/无线技术/index.html","e423ffad9472b55803ea81a450806b00"],["E:/qinhao/hexo/public/tags/无线技术/page/2/index.html","4ec8e5733c97eff5345632301703ee75"],["E:/qinhao/hexo/public/tags/系统安装/index.html","7e8f80f3e42898e75b0084767cdd0eaf"],["E:/qinhao/hexo/public/tags/网络安全/index.html","65ffd3cf878fb911abd431f86fa7774b"],["E:/qinhao/hexo/public/tags/网络技术/index.html","de04661dd8c8c95c8fdf8a28087de285"],["E:/qinhao/hexo/public/tags/计算机三级/index.html","667f0131a1c95a2ff07a88b7328a503b"],["E:/qinhao/hexo/public/tags/路由器/index.html","1ac33fd00735595c5c5ee9f956f69f3d"],["E:/qinhao/hexo/public/tags/软考/index.html","dd1add4649ca03795d83a5ff222a4992"],["E:/qinhao/hexo/public/tags/通信原理/index.html","c8817aebe62e5a194636fcec0892e6b5"],["E:/qinhao/hexo/public/tags/通信原理/page/2/index.html","b5d8ca907b1237dd35d346ddf52f9a8c"],["E:/qinhao/hexo/public/tags/通信技术/index.html","8670f0040d95a79a394b6cc1b857cf8c"],["E:/qinhao/hexo/public/tags/通信技术/page/2/index.html","129153f46e5cb64ca73ae0586ae41aff"]];
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







