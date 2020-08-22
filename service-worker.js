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

var precacheConfig = [["D:/qinhao/hexo/public/2019-nCoV/index.html","72027881619e4f25903fa0d406f07930"],["D:/qinhao/hexo/public/2019/12/04/hello/index.html","4f69cdea11cb186e1a9851def09da48d"],["D:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","f0a68809373ee99a71cbc31800164c73"],["D:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","0d0816298917516be063d89d195612da"],["D:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","e654d0e259029cbaa96e61028234f753"],["D:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","7f9e54ac9aecb5f3e320125813b00c2a"],["D:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","225cf6e918eaa969847dbafd0e26e994"],["D:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","03977f6677c049e20f06de2284afc601"],["D:/qinhao/hexo/public/2020/02/24/ssh/index.html","8487f8fecf1fbe2b16fbf2c2e472daa7"],["D:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","bac129f98200db71377132a6a97cb2f6"],["D:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","578273fdd9d78d0764b91d432dff68f5"],["D:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","7ff3082f05ab1bd8f280b7cc48bf8313"],["D:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","c8737ef248d97faab402e7e84fe6b44e"],["D:/qinhao/hexo/public/2020/03/04/acl/index.html","5af5cbc9b5bc358ef3902344b71f9442"],["D:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","9785ce8b0ccfa1bbc28bae8685cd04cc"],["D:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","fe4205f0f06e4254946b36d75e3f7f92"],["D:/qinhao/hexo/public/2020/03/07/3G/index.html","7eb26db900f6ed9aad89af7bba6c7d54"],["D:/qinhao/hexo/public/2020/03/07/GSM/index.html","6e4ca7751771d7b142606ccb5476273b"],["D:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","4be8b3ca2b0d9eeb9608fded1da08990"],["D:/qinhao/hexo/public/2020/03/07/LTE/index.html","26743a03a4793bcf8f8de7f52f2db7c2"],["D:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","46383e478091bcbaec6e2f4736e72ed0"],["D:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","382848868c6aedc70611e06b9dccd586"],["D:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","12200a9ab5951e0d3567a3b19e658e3f"],["D:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","27fe7580dd67888348fa705f6ea8b16f"],["D:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","3866c48503d120a48398a9dc187f3071"],["D:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","8385d9e8a550e185dde70d9e2a80574b"],["D:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","9d263b410cfa85e482608a82a30279b7"],["D:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","cca5b327fd020abaa91e0ee8b2f5f9f2"],["D:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","82873560db07546483d306eceee8187a"],["D:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","cbea8b0ccfabdaa1172edfbc7ef6cd90"],["D:/qinhao/hexo/public/2020/04/03/Layer/index.html","d9c4ea154278d30466e8ec3b0ca8022e"],["D:/qinhao/hexo/public/2020/04/04/color/index.html","b9beef9bcbccd4bac64f16950f75f614"],["D:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","dfbcf876f93a720e90b3e639dd5f465c"],["D:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","921f1842cb3dc9d2e344d9043e614c03"],["D:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","c534f2057465e1bfdf09cd706f1bc82a"],["D:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","69f384fbb6331d70f9034e739c6045c6"],["D:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","4ab609242dfeb319d61634979219c54c"],["D:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","0795eef7dc144f8b69bc8753db51c4ef"],["D:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","27efa5b7012498e4a2410be8a4c81b9b"],["D:/qinhao/hexo/public/2020/05/11/MIMO/index.html","d132744ebf023b39f5625dce683dca3c"],["D:/qinhao/hexo/public/2020/05/12/ICIC/index.html","b8a0d0db8b29b4f62cf483c82212ba51"],["D:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","6a40916e02d7f7d7af96afda26c13c99"],["D:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","b5430648b7ce98b4cc5e8fd0ad9e4033"],["D:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","79453a63ff942d60ea7ffcb86f906a1f"],["D:/qinhao/hexo/public/2020/05/20/python-2/index.html","3ba70c27c7c74c97a8366ec66aaf5c1a"],["D:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","8d0bfe46925a41bf19e4acf0190c8cf1"],["D:/qinhao/hexo/public/2020/05/24/Python-3/index.html","ccc2fb20312b14cba12c58e5ad47bf3e"],["D:/qinhao/hexo/public/2020/05/25/Python-4/index.html","0a8a25c9028e079e481e8b1ca8478e76"],["D:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","bf21eed4e083f0748cbab57a9a40bb6e"],["D:/qinhao/hexo/public/2020/06/01/Python-5/index.html","7a45115ad312c4f20d0c208230e5be8a"],["D:/qinhao/hexo/public/2020/06/11/lanzous/index.html","f85fdba6b0ae604c07237b9002547a4f"],["D:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","f6dc78011c6071a5b80126f199aa0d6d"],["D:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","f71bb3dd52143f5347d26489f0df067f"],["D:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","a5516bf645efe076ca1b7d6712335b2f"],["D:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","2d6dac629e4653628f55bdf3db5b367b"],["D:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","29ff723b05c2e53fcf7a675d1f34a002"],["D:/qinhao/hexo/public/2020/08/13/system_info/index.html","32aa88790cda56655a17148deec9a283"],["D:/qinhao/hexo/public/ByteDanceVerify.html","f276c6ff172d400475bc509cbc51e3f0"],["D:/qinhao/hexo/public/about/index.html","76d859c939f798d9215ec0503a3e3624"],["D:/qinhao/hexo/public/archives/2019/12/index.html","d29ed94b5d4ee9a82b8a52037e5f904c"],["D:/qinhao/hexo/public/archives/2019/index.html","5532b5207a934e179eb3796cdcad8ae4"],["D:/qinhao/hexo/public/archives/2020/02/index.html","d89e3575406e58e5be3bd83e9ba21e75"],["D:/qinhao/hexo/public/archives/2020/02/page/2/index.html","c9fb7707f6762cab28d0d5b821cbb905"],["D:/qinhao/hexo/public/archives/2020/03/index.html","2a5ac48ec82047fa63757857378cc109"],["D:/qinhao/hexo/public/archives/2020/03/page/2/index.html","8d7aa1974d4051752a117e2fdd3b6dcd"],["D:/qinhao/hexo/public/archives/2020/04/index.html","c1a5d4a6fd9a927e53a2dbd8cf60a0f7"],["D:/qinhao/hexo/public/archives/2020/05/index.html","62affb3fe827123c7a143e705d5d08ef"],["D:/qinhao/hexo/public/archives/2020/06/index.html","d3cb097539534aefe88afb2f63cdd75a"],["D:/qinhao/hexo/public/archives/2020/07/index.html","34b7f7f4a7d5970a48dec136c6a402e5"],["D:/qinhao/hexo/public/archives/2020/08/index.html","804dbd4723c967332e1b078c5b5676a7"],["D:/qinhao/hexo/public/archives/2020/index.html","2079714622297a3e31138bfa531bcee9"],["D:/qinhao/hexo/public/archives/2020/page/2/index.html","48dff148ee8936d04597515f39cb8779"],["D:/qinhao/hexo/public/archives/2020/page/3/index.html","38e1b0ba74dc9718b061f33f44d94a77"],["D:/qinhao/hexo/public/archives/2020/page/4/index.html","7b933b57412b1d850d715f2ec4ee9695"],["D:/qinhao/hexo/public/archives/2020/page/5/index.html","f0a4abbf64faad2701c95064cb299485"],["D:/qinhao/hexo/public/archives/2020/page/6/index.html","8e5dad83de0ee6a2e26babd72ea00691"],["D:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","d8c147d4c97e2b1739914f47b512a8a5"],["D:/qinhao/hexo/public/archives/index.html","5b44838837456e1ec7266b2d132ab415"],["D:/qinhao/hexo/public/archives/page/2/index.html","5b44838837456e1ec7266b2d132ab415"],["D:/qinhao/hexo/public/archives/page/3/index.html","5b44838837456e1ec7266b2d132ab415"],["D:/qinhao/hexo/public/archives/page/4/index.html","eed469709b3738d226e97c88dcf0052d"],["D:/qinhao/hexo/public/archives/page/5/index.html","eed469709b3738d226e97c88dcf0052d"],["D:/qinhao/hexo/public/archives/page/6/index.html","eed469709b3738d226e97c88dcf0052d"],["D:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/qinhao/hexo/public/categories/Linux/index.html","eedf1550f6c968a2504412cb7fb8a874"],["D:/qinhao/hexo/public/categories/Photoshop/index.html","374fce14500a39e81028699a04254680"],["D:/qinhao/hexo/public/categories/Python/index.html","e70af0e815ccc3b080e34b5d0085982e"],["D:/qinhao/hexo/public/categories/个人/index.html","57bfd077ae07b8d706b1f886c500d0be"],["D:/qinhao/hexo/public/categories/交换机/index.html","043b2c4fcdd03e1f15f4b02d1eaac906"],["D:/qinhao/hexo/public/categories/华为认证/index.html","c97982b818441a007b382f6f9c7d061b"],["D:/qinhao/hexo/public/categories/小技巧/index.html","2e324bb5f74893264d6fd63cc92bab65"],["D:/qinhao/hexo/public/categories/数据库/index.html","7f21ce2a1a306cead109907d5c9578ca"],["D:/qinhao/hexo/public/categories/服务器/index.html","c28429b1e9e3cd91a7c7ae2fd27da9d2"],["D:/qinhao/hexo/public/categories/网络安全/index.html","2d1f4f1b7061c139e11e04262cff25d0"],["D:/qinhao/hexo/public/categories/计算机三级/index.html","b91eea02d5eb81f6a86346abd0dc38f0"],["D:/qinhao/hexo/public/categories/计算机网络/index.html","ca0cd0cbf5f32274bc96c492362214df"],["D:/qinhao/hexo/public/categories/软件破解/index.html","95978764e7116c37e36270217d855e11"],["D:/qinhao/hexo/public/categories/通信技术/index.html","971b05920817126ed2220d623274aae5"],["D:/qinhao/hexo/public/categories/通信技术/page/2/index.html","46d59e7bb2e134b05c41ec385d89de00"],["D:/qinhao/hexo/public/category/index.html","f5c44390728ec9367e1fc7e71f784b6c"],["D:/qinhao/hexo/public/css/style.css","940a599036b2a40f1cda8deba1fa0555"],["D:/qinhao/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/qinhao/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/qinhao/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["D:/qinhao/hexo/public/friends/index.html","f9b468646ad41ebdf5149f8feaf0b29d"],["D:/qinhao/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["D:/qinhao/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["D:/qinhao/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["D:/qinhao/hexo/public/index.html","e64d5a8e011875f248683d59981f1f5f"],["D:/qinhao/hexo/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["D:/qinhao/hexo/public/js/app.js","804e218b8d00f3db3d393a7811cc0f3c"],["D:/qinhao/hexo/public/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["D:/qinhao/hexo/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["D:/qinhao/hexo/public/mylist/index.html","000d8502c5e8a276e584fd46f162c02f"],["D:/qinhao/hexo/public/page/2/index.html","79b2b017e9c1213dd32aa9e3ca006544"],["D:/qinhao/hexo/public/page/3/index.html","9d154435605067ff55730b62d66e612d"],["D:/qinhao/hexo/public/page/4/index.html","c8b0aac0c1e40f94d4b3a3dc389ec6d5"],["D:/qinhao/hexo/public/page/5/index.html","881e4624d632ca95ded33c0aaef302ff"],["D:/qinhao/hexo/public/page/6/index.html","d3b27ca3d4af9034cdf763ee6638566a"],["D:/qinhao/hexo/public/sw-register.js","c8a247f9d833372b5af4593f95a584f6"],["D:/qinhao/hexo/public/sw.js","a680b3df46eedff4a97a38c621ff5769"],["D:/qinhao/hexo/public/tags/IIS/index.html","3fd916834d5b7417ab6b69d9ff2dd313"],["D:/qinhao/hexo/public/tags/MySQL/index.html","7cf3574cefce90ef571e6da196652f50"],["D:/qinhao/hexo/public/tags/Photoshop/index.html","ac2eb90ceb4f9e9acf432d03727ecd36"],["D:/qinhao/hexo/public/tags/VPN/index.html","598eb125519f0de13840d7a4afe7a371"],["D:/qinhao/hexo/public/tags/Web服务器/index.html","86b39e51964de860c8f0ff66994f9a45"],["D:/qinhao/hexo/public/tags/index.html","5116209263e47c18319e0a965252c78d"],["D:/qinhao/hexo/public/tags/交换机/index.html","e66317834deeec07e77dc26118b39b88"],["D:/qinhao/hexo/public/tags/图像处理/index.html","5c2e5fb4fe6e0acfb4053b7f2ae40cc0"],["D:/qinhao/hexo/public/tags/基础网络/index.html","312cb63d03300907cd7349c3ea0c2f44"],["D:/qinhao/hexo/public/tags/思科/index.html","f77988b672411b1a3281479a4fe538ed"],["D:/qinhao/hexo/public/tags/思科GRE/index.html","ec046ab371e93e1bae74ab8d8048000c"],["D:/qinhao/hexo/public/tags/数据库/index.html","3bf87a057e027994484fd13e5b4c019c"],["D:/qinhao/hexo/public/tags/无线技术/index.html","7e01cb584ed4b92b2243080a71c2713b"],["D:/qinhao/hexo/public/tags/无线技术/page/2/index.html","7bae9232ffb3893b32c28aaefbe24996"],["D:/qinhao/hexo/public/tags/系统安装/index.html","487460f786a6ff812633b34ff8b63ca7"],["D:/qinhao/hexo/public/tags/网络安全/index.html","e2d138e3d168f3213a91624ec4f472bf"],["D:/qinhao/hexo/public/tags/网络技术/index.html","79616d1fa475adde2ca5831da4ca8f50"],["D:/qinhao/hexo/public/tags/计算机三级/index.html","46e9142be25827a420d26a7ab7b3d115"],["D:/qinhao/hexo/public/tags/路由器/index.html","3da42e3d74afab75715911a0ee8aef77"],["D:/qinhao/hexo/public/tags/软考/index.html","f019f667efb37aa4b59ce0bc3bb1645a"],["D:/qinhao/hexo/public/tags/通信原理/index.html","933e40914f92496d20d8b7b228e92ed4"],["D:/qinhao/hexo/public/tags/通信原理/page/2/index.html","d69120a41f6f01e5c269b25129d5f5b1"],["D:/qinhao/hexo/public/tags/通信技术/index.html","f1cf702405f4372f4a68092516929667"],["D:/qinhao/hexo/public/tags/通信技术/page/2/index.html","582bd8208b676ced5bdf9e140510d916"]];
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







