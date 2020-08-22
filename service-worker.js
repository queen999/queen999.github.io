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

var precacheConfig = [["D:/qinhao/hexo/public/2019-nCoV/index.html","72027881619e4f25903fa0d406f07930"],["D:/qinhao/hexo/public/2019/12/04/hello/index.html","4f69cdea11cb186e1a9851def09da48d"],["D:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","f0a68809373ee99a71cbc31800164c73"],["D:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","0d0816298917516be063d89d195612da"],["D:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","e654d0e259029cbaa96e61028234f753"],["D:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","7f9e54ac9aecb5f3e320125813b00c2a"],["D:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","225cf6e918eaa969847dbafd0e26e994"],["D:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","03977f6677c049e20f06de2284afc601"],["D:/qinhao/hexo/public/2020/02/24/ssh/index.html","8487f8fecf1fbe2b16fbf2c2e472daa7"],["D:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","bac129f98200db71377132a6a97cb2f6"],["D:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","578273fdd9d78d0764b91d432dff68f5"],["D:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","7ff3082f05ab1bd8f280b7cc48bf8313"],["D:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","c8737ef248d97faab402e7e84fe6b44e"],["D:/qinhao/hexo/public/2020/03/04/acl/index.html","5af5cbc9b5bc358ef3902344b71f9442"],["D:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","9785ce8b0ccfa1bbc28bae8685cd04cc"],["D:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","fe4205f0f06e4254946b36d75e3f7f92"],["D:/qinhao/hexo/public/2020/03/07/3G/index.html","7eb26db900f6ed9aad89af7bba6c7d54"],["D:/qinhao/hexo/public/2020/03/07/GSM/index.html","6e4ca7751771d7b142606ccb5476273b"],["D:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","4be8b3ca2b0d9eeb9608fded1da08990"],["D:/qinhao/hexo/public/2020/03/07/LTE/index.html","26743a03a4793bcf8f8de7f52f2db7c2"],["D:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","46383e478091bcbaec6e2f4736e72ed0"],["D:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","382848868c6aedc70611e06b9dccd586"],["D:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","12200a9ab5951e0d3567a3b19e658e3f"],["D:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","27fe7580dd67888348fa705f6ea8b16f"],["D:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","3866c48503d120a48398a9dc187f3071"],["D:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","8385d9e8a550e185dde70d9e2a80574b"],["D:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","9d263b410cfa85e482608a82a30279b7"],["D:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","cca5b327fd020abaa91e0ee8b2f5f9f2"],["D:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","82873560db07546483d306eceee8187a"],["D:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","cbea8b0ccfabdaa1172edfbc7ef6cd90"],["D:/qinhao/hexo/public/2020/04/03/Layer/index.html","d9c4ea154278d30466e8ec3b0ca8022e"],["D:/qinhao/hexo/public/2020/04/04/color/index.html","b9beef9bcbccd4bac64f16950f75f614"],["D:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","dfbcf876f93a720e90b3e639dd5f465c"],["D:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","921f1842cb3dc9d2e344d9043e614c03"],["D:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","c534f2057465e1bfdf09cd706f1bc82a"],["D:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","69f384fbb6331d70f9034e739c6045c6"],["D:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","4ab609242dfeb319d61634979219c54c"],["D:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","0795eef7dc144f8b69bc8753db51c4ef"],["D:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","27efa5b7012498e4a2410be8a4c81b9b"],["D:/qinhao/hexo/public/2020/05/11/MIMO/index.html","d132744ebf023b39f5625dce683dca3c"],["D:/qinhao/hexo/public/2020/05/12/ICIC/index.html","b8a0d0db8b29b4f62cf483c82212ba51"],["D:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","6a40916e02d7f7d7af96afda26c13c99"],["D:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","b5430648b7ce98b4cc5e8fd0ad9e4033"],["D:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","79453a63ff942d60ea7ffcb86f906a1f"],["D:/qinhao/hexo/public/2020/05/20/python-2/index.html","3ba70c27c7c74c97a8366ec66aaf5c1a"],["D:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","8d0bfe46925a41bf19e4acf0190c8cf1"],["D:/qinhao/hexo/public/2020/05/24/Python-3/index.html","ccc2fb20312b14cba12c58e5ad47bf3e"],["D:/qinhao/hexo/public/2020/05/25/Python-4/index.html","0a8a25c9028e079e481e8b1ca8478e76"],["D:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","bf21eed4e083f0748cbab57a9a40bb6e"],["D:/qinhao/hexo/public/2020/06/01/Python-5/index.html","7a45115ad312c4f20d0c208230e5be8a"],["D:/qinhao/hexo/public/2020/06/11/lanzous/index.html","f85fdba6b0ae604c07237b9002547a4f"],["D:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","f6dc78011c6071a5b80126f199aa0d6d"],["D:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","f71bb3dd52143f5347d26489f0df067f"],["D:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","a5516bf645efe076ca1b7d6712335b2f"],["D:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","2d6dac629e4653628f55bdf3db5b367b"],["D:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","29ff723b05c2e53fcf7a675d1f34a002"],["D:/qinhao/hexo/public/2020/08/13/system_info/index.html","32aa88790cda56655a17148deec9a283"],["D:/qinhao/hexo/public/ByteDanceVerify.html","f276c6ff172d400475bc509cbc51e3f0"],["D:/qinhao/hexo/public/about/index.html","76d859c939f798d9215ec0503a3e3624"],["D:/qinhao/hexo/public/archives/2019/12/index.html","758d538dd52b2eaa7d2f38ef12c849c9"],["D:/qinhao/hexo/public/archives/2019/index.html","5aea8a8d4891ff1cd6ca60064cdd4927"],["D:/qinhao/hexo/public/archives/2020/02/index.html","8379af8618230b6b14cf8b83f1cff5cc"],["D:/qinhao/hexo/public/archives/2020/02/page/2/index.html","4e3926cb20b6cfb2ea3a8a750abd540e"],["D:/qinhao/hexo/public/archives/2020/03/index.html","7ab5ea661ecc08510eee1b81706cfaab"],["D:/qinhao/hexo/public/archives/2020/03/page/2/index.html","d0e01785bf83eeeed5fc682dbf9bd888"],["D:/qinhao/hexo/public/archives/2020/04/index.html","2f2e2227aa4d3371a6476552803c56ac"],["D:/qinhao/hexo/public/archives/2020/05/index.html","aa6f8f8f9934c4e29e473e3e4a0ce9cb"],["D:/qinhao/hexo/public/archives/2020/06/index.html","6d0c360f9836802b54aa211d04e37607"],["D:/qinhao/hexo/public/archives/2020/07/index.html","c8d954789e4692be194616a11f9f4b9d"],["D:/qinhao/hexo/public/archives/2020/08/index.html","fab0680db0a4c3ab56ac2266cb11a216"],["D:/qinhao/hexo/public/archives/2020/index.html","371877ec101ad978b91f8c7157f8b051"],["D:/qinhao/hexo/public/archives/2020/page/2/index.html","c145bd3cefce3e0af26b0d167ca66cd1"],["D:/qinhao/hexo/public/archives/2020/page/3/index.html","303b2a50b412811b5a960b463897fe80"],["D:/qinhao/hexo/public/archives/2020/page/4/index.html","5dc5cc072572d008680ca3e8ded69627"],["D:/qinhao/hexo/public/archives/2020/page/5/index.html","17cdd617071a32e6b26c1ba468e0b8c4"],["D:/qinhao/hexo/public/archives/2020/page/6/index.html","76a72179f695d64042b65e4d491a6a8d"],["D:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","d8c147d4c97e2b1739914f47b512a8a5"],["D:/qinhao/hexo/public/archives/index.html","0c8028d5b699f30d6b1f00661242969d"],["D:/qinhao/hexo/public/archives/page/2/index.html","0c8028d5b699f30d6b1f00661242969d"],["D:/qinhao/hexo/public/archives/page/3/index.html","0c8028d5b699f30d6b1f00661242969d"],["D:/qinhao/hexo/public/archives/page/4/index.html","969f8ba1c0d0d13231d4dd06a510f380"],["D:/qinhao/hexo/public/archives/page/5/index.html","969f8ba1c0d0d13231d4dd06a510f380"],["D:/qinhao/hexo/public/archives/page/6/index.html","969f8ba1c0d0d13231d4dd06a510f380"],["D:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/qinhao/hexo/public/categories/Linux/index.html","6d4783deed169606bf0fc0c771262f23"],["D:/qinhao/hexo/public/categories/Photoshop/index.html","1695b0eb07fce92f09d1f45af869ca1b"],["D:/qinhao/hexo/public/categories/Python/index.html","9bc183fe9611b7ae267f330365893459"],["D:/qinhao/hexo/public/categories/个人/index.html","8cc2047f6a2956bb9ab9325a568f678a"],["D:/qinhao/hexo/public/categories/交换机/index.html","44411bf141ed0d649c41a01fe42debd3"],["D:/qinhao/hexo/public/categories/华为认证/index.html","ea7250d7ead3d32f17c7367df087c1a9"],["D:/qinhao/hexo/public/categories/小技巧/index.html","27580a5f4d31be81ca1ff8ac851f6bd0"],["D:/qinhao/hexo/public/categories/数据库/index.html","cc06416ca4b51c5dfa4ce6b3d555385c"],["D:/qinhao/hexo/public/categories/服务器/index.html","217903dc6e17f9b1f8687cc47bf409a2"],["D:/qinhao/hexo/public/categories/网络安全/index.html","4fd9e51de52b518d01db6b1bde89d346"],["D:/qinhao/hexo/public/categories/计算机三级/index.html","9222b96c736a1a87a8936acc05a7a7c9"],["D:/qinhao/hexo/public/categories/计算机网络/index.html","d0e59423dd2c36839fc57c17264265fb"],["D:/qinhao/hexo/public/categories/软件破解/index.html","2af99c4c58c4746da92f6e5977841d38"],["D:/qinhao/hexo/public/categories/通信技术/index.html","739ddf618a9b1508c1719fd5f7f3670d"],["D:/qinhao/hexo/public/categories/通信技术/page/2/index.html","4739df34f86fa9ec4de6cda9948001b4"],["D:/qinhao/hexo/public/category/index.html","f5c44390728ec9367e1fc7e71f784b6c"],["D:/qinhao/hexo/public/css/style.css","940a599036b2a40f1cda8deba1fa0555"],["D:/qinhao/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/qinhao/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/qinhao/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["D:/qinhao/hexo/public/friends/index.html","f9b468646ad41ebdf5149f8feaf0b29d"],["D:/qinhao/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["D:/qinhao/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["D:/qinhao/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["D:/qinhao/hexo/public/index.html","2a48633b3049bd4ae34af812584c0730"],["D:/qinhao/hexo/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["D:/qinhao/hexo/public/js/app.js","804e218b8d00f3db3d393a7811cc0f3c"],["D:/qinhao/hexo/public/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["D:/qinhao/hexo/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["D:/qinhao/hexo/public/mylist/index.html","8ae419cab6a3001364f4ed33a1be5aaa"],["D:/qinhao/hexo/public/page/2/index.html","0005dc131c9cf9aee7f3818208506a3f"],["D:/qinhao/hexo/public/page/3/index.html","284217b0a0036b9e32b7d4efc871272b"],["D:/qinhao/hexo/public/page/4/index.html","d5faad20765a3615faf8ef0d7020f5e9"],["D:/qinhao/hexo/public/page/5/index.html","44ec27d4e32a0ddaec43f02d547d6fd2"],["D:/qinhao/hexo/public/page/6/index.html","4e337f5704a993a2820dc8fe7dc031a5"],["D:/qinhao/hexo/public/tags/IIS/index.html","90fe54b8640e7e3718fa41e621252e78"],["D:/qinhao/hexo/public/tags/MySQL/index.html","6344b467e61ec8671ecd580720c1da62"],["D:/qinhao/hexo/public/tags/Photoshop/index.html","531a5c89a160f203a4a33d1a4b9e2f22"],["D:/qinhao/hexo/public/tags/VPN/index.html","3d35898165613c36fd1f567d6c2b0634"],["D:/qinhao/hexo/public/tags/Web服务器/index.html","a202666e8101fbc06f56b272922da317"],["D:/qinhao/hexo/public/tags/index.html","5116209263e47c18319e0a965252c78d"],["D:/qinhao/hexo/public/tags/交换机/index.html","b73f6f87d0a5db0c23d1be8503fe21b8"],["D:/qinhao/hexo/public/tags/图像处理/index.html","6765d34497d753844b49673be1a04020"],["D:/qinhao/hexo/public/tags/基础网络/index.html","27820cedf2ca119d2f283cd91cd9fc90"],["D:/qinhao/hexo/public/tags/思科/index.html","ac7c8f9d8f02b17f6dc6f61e035e0dda"],["D:/qinhao/hexo/public/tags/思科GRE/index.html","964f4c5d73c8199ba732e3053f76f78f"],["D:/qinhao/hexo/public/tags/数据库/index.html","9f49296520b38d9e7e516767b1d359f9"],["D:/qinhao/hexo/public/tags/无线技术/index.html","5c9cf3d9db2117892e7524f5f63060e6"],["D:/qinhao/hexo/public/tags/无线技术/page/2/index.html","36bf9a709fafda351d87afb914215288"],["D:/qinhao/hexo/public/tags/系统安装/index.html","e872d6255b5bca74ba0a7a022cae4797"],["D:/qinhao/hexo/public/tags/网络安全/index.html","dfb6f00c79dafbdbcc2088e9a34f2826"],["D:/qinhao/hexo/public/tags/网络技术/index.html","daeefebc7c110206af5d9d5227984960"],["D:/qinhao/hexo/public/tags/计算机三级/index.html","9f4b8139000ceb00b4c23927620f4725"],["D:/qinhao/hexo/public/tags/路由器/index.html","128485cc119647bd378a734bb33c64a5"],["D:/qinhao/hexo/public/tags/软考/index.html","70a49354958870db83086425a2f2da62"],["D:/qinhao/hexo/public/tags/通信原理/index.html","da4a76f88d5414396da081f28a4e7e66"],["D:/qinhao/hexo/public/tags/通信原理/page/2/index.html","3a47e616c11113848176f168b0c4fa35"],["D:/qinhao/hexo/public/tags/通信技术/index.html","627aad7cfbb4c152ff70ab88a8814f0b"],["D:/qinhao/hexo/public/tags/通信技术/page/2/index.html","5230d453dfc4b2cb3156db1f05e94aed"]];
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







