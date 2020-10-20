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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","72027881619e4f25903fa0d406f07930"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","ff137a28e9ebf6bdcedec4802917bc8b"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","a9f63ae4295d037e9a9b91b4a3ff0dff"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","e2658cbf4b08ac45f932f05ed6b87c35"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","8890b64124a52ac91ba9e7efea95030b"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","f93aed80029fa2dec9ef97f9922080ae"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","2c26b69374feb89aece6e06de85b398b"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","587aa236934304c0fb8a48d3a8f1ebf6"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","64d50c238a63a76050ed925a5644455f"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","38ba10d652e8ea2b5e257155dad712ba"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","404d197fbdffd2c81e2145008ea0be5a"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","22029480c2edfc4a2fff562f0b2ddb82"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","9681736b086d1ac183f94be54f45e4ab"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","75af4dfbb24ccf39c952e7d8fd6d038a"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","76698051cc7813837c9b95665c7bb21a"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","aab4955f731b903b7194ab71cd936e7c"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","a811eae56ffda707282c12301d0c08bc"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","16c528edbf6c74ef6be01a1576f5153d"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","5dd71bef4b8958d838ad90c70ce683dd"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","0a4b7784aa988e86c1f1ef2d3d1c6061"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","6ab97dac2fa77a72076343e074f940ab"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","731b66dcd52d81c4a5e407dd6484adab"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","d7daaf543f74fd0d3d9b42d9a53e2933"],["E:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","bc1a2066b8aa7b8f4aa60a441c5df950"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","363530ddf7bc82efd8743c425232eef2"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","1374c540602804e893e74d8bf5703496"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","fa545f186ac7a3f16b6dbfdab7f4f923"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","b67b656e44b7e9fce3bf1e94015ccf2d"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","2e76769b5e3371dc5de95020affe1405"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","b454de8a64e6c18a8222acb377b64e13"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","1ff0925f9a6c2ec5104d574ac6051beb"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","709d04fcc04e680e952ee73784834b1c"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","1a8d5140b6706693076de2f9f6648250"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","b6cc3bcd0c51e3e7dc5e792951a8b71d"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","a54c75cb8ba33bc748a11b783558318e"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","5e50dda27cc08fe3f6872bde46eb7174"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","dcd8af1e7ab288a8a48ece60bec4345a"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","dc1ce24be8fc1f9abcb8b12766e6f9c5"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","b82f150981d58a3f3762a6fb10745aa6"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","d86cd1381513490205102fdcf44d43c5"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","70ae06b8242cb4ab4a44ea107f617bd3"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","b23bcfc51c2731520d9eddbba30d4ea1"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","5055d9d0fdc1a375717cd698de3a6b49"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","1446387d5c4b90d8a479fcba12b8a1bb"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","b0771112049f496dfaa412bb07a236f4"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","3457c4eb8db3700e71de1a6228e8b525"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","afc30cd3e77d44afdecb79e519e49a72"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","f1c1dbb9a38e94a50a7f4e1dfc67144e"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","1d319527be1b5912fd628127a394bd68"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","a0d5ab0c319ce2266a209e629d6e4534"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","388dac8048ddb2767903d1404df0b08b"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","a37a91ead6e3e49655a7ee0b1dfb5867"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","a20b4a023ac5f535ca2c484243571a38"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","ed50468e8de490ced14e3d571697a993"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","7d8ec4301e77e94d3ed847dc6a95dc7a"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","6b9bd66cc8419f00ef007fc016065026"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","8b1f51d1547dffada58d2cf071897403"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","041c72f8999f41dfd174102d58bc06dd"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","3023cb70eb3438b5a6901e74b03143a1"],["E:/qinhao/hexo/public/ByteDanceVerify.html","351b06dcf0f0142437919c76e21b6fc2"],["E:/qinhao/hexo/public/about/index.html","92c90f33ac4b46b6ff9af9c59c01fc03"],["E:/qinhao/hexo/public/archives/2020/02/index.html","da57370bcf7f8f5fc17a08f4ff02b7e3"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","47ee632bee5094819ffaf71906866d38"],["E:/qinhao/hexo/public/archives/2020/03/index.html","204b6b448ce754fe90244c0ef882a2f2"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","0b155b308de65176c46d12090f247b66"],["E:/qinhao/hexo/public/archives/2020/04/index.html","6f59fac073c84f7efad4cff9e139e056"],["E:/qinhao/hexo/public/archives/2020/05/index.html","866ffa83ffded4f8e84708b9349df594"],["E:/qinhao/hexo/public/archives/2020/06/index.html","deee2ef06f4926d175c5f87147d0a884"],["E:/qinhao/hexo/public/archives/2020/07/index.html","c5ea08852d62b550e6377b3636caaf8a"],["E:/qinhao/hexo/public/archives/2020/08/index.html","a71772e0c1da16439aeafa7218c06549"],["E:/qinhao/hexo/public/archives/2020/10/index.html","eebd7ef09d640ccfd392911987924d1b"],["E:/qinhao/hexo/public/archives/2020/index.html","07ee3d8476111a3d58d4eaeb211151ea"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","46f43a085f81ed9ca45b3aa1de49c60f"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","744c89ebd55ed3193a656895c5ace691"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","405809ad2a515809357c727e7f3b8a0a"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","d9613614aa6e37669aba14396703e6ac"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","39fe78dd80073435cdc78db985beebaf"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","af81fe45bbbab855ad8703b6d865a1d4"],["E:/qinhao/hexo/public/archives/index.html","b790d5d01363f926f85c848cac2cb04d"],["E:/qinhao/hexo/public/archives/page/2/index.html","8fa47a1665803075c85dc38531d5d09a"],["E:/qinhao/hexo/public/archives/page/3/index.html","b790d5d01363f926f85c848cac2cb04d"],["E:/qinhao/hexo/public/archives/page/4/index.html","8fa47a1665803075c85dc38531d5d09a"],["E:/qinhao/hexo/public/archives/page/5/index.html","8fa47a1665803075c85dc38531d5d09a"],["E:/qinhao/hexo/public/archives/page/6/index.html","8fa47a1665803075c85dc38531d5d09a"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/Java/index.html","2821c3e8fa061f3ad30b2fd6fd2c650d"],["E:/qinhao/hexo/public/categories/Linux/index.html","20a17a653c7413644cdd0a0ead79017e"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","5b3f6d5a86c0ca1cdc00a098f13ef0f3"],["E:/qinhao/hexo/public/categories/Python/index.html","38d8416576a0784dd3f75e93c7ef2816"],["E:/qinhao/hexo/public/categories/交换机/index.html","705981c8cd173b36c27426e74b0a8aa4"],["E:/qinhao/hexo/public/categories/华为认证/index.html","3a3f5ef02bfed853ce6876d14cf26b6d"],["E:/qinhao/hexo/public/categories/小技巧/index.html","5ce7b514f27c844107907a9cde904ac5"],["E:/qinhao/hexo/public/categories/数据库/index.html","2b0089a39941e6ff67e3c879c6213c0b"],["E:/qinhao/hexo/public/categories/服务器/index.html","5c25acecd592d03f7c535ecb4a6488a3"],["E:/qinhao/hexo/public/categories/网络安全/index.html","3b2a44c37b9ad2b338032384c22b7145"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","cd54a2d49744a4643d7ad83e0a69f161"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","7ba9c3f2aa5c362a9dcf85c68cc9dde0"],["E:/qinhao/hexo/public/categories/软件破解/index.html","f8a18d9f690759ff26d74cd563d575a2"],["E:/qinhao/hexo/public/categories/通信技术/index.html","89a00528aaa138ecdc5cdd40f3a43b91"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","1b3b8a149cecbc34ec99148771f7a4be"],["E:/qinhao/hexo/public/category/index.html","6228727801b70c65df2533119c383ff4"],["E:/qinhao/hexo/public/css/style.css","940a599036b2a40f1cda8deba1fa0555"],["E:/qinhao/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["E:/qinhao/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["E:/qinhao/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/friends/index.html","efcc78ba418aa70117be0d09d902a07d"],["E:/qinhao/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["E:/qinhao/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["E:/qinhao/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["E:/qinhao/hexo/public/index.html","9e902b79c549f21fec9c41baf6b83382"],["E:/qinhao/hexo/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["E:/qinhao/hexo/public/js/app.js","804e218b8d00f3db3d393a7811cc0f3c"],["E:/qinhao/hexo/public/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["E:/qinhao/hexo/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["E:/qinhao/hexo/public/mylist/index.html","a76549e24eaff0f23cfd5d76a46b5b61"],["E:/qinhao/hexo/public/page/2/index.html","3ab37a127a2aeae765ca06a14938a5e5"],["E:/qinhao/hexo/public/page/3/index.html","2417bd881512d462efd2a2c12d7ca713"],["E:/qinhao/hexo/public/page/4/index.html","9d7ce88d64f661f0bcc7a9c1be247ade"],["E:/qinhao/hexo/public/page/5/index.html","3a5fcc610bd8d4329b2ea3336f3d89b3"],["E:/qinhao/hexo/public/page/6/index.html","f50cfc3e0f302fbee6c56779133ba915"],["E:/qinhao/hexo/public/sw-register.js","bbd42c69820f2d2b48eae26d7d7fecc2"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/tags/IIS/index.html","9fa549207f91ed5a34997b061a417dbe"],["E:/qinhao/hexo/public/tags/MySQL/index.html","90669accd97b2051ecac27bd428d237d"],["E:/qinhao/hexo/public/tags/Photoshop/index.html","29c05f5d3b4261626d8a1dea161c58b9"],["E:/qinhao/hexo/public/tags/VPN/index.html","a140e06e8c35fdac8058b09c07aa0d88"],["E:/qinhao/hexo/public/tags/Web服务器/index.html","a76441bfc53163038dfc262e083ff795"],["E:/qinhao/hexo/public/tags/index.html","f616432b1bae12233b42e2780620a4ba"],["E:/qinhao/hexo/public/tags/交换机/index.html","a3b3cd1b6f2fff24b9f5a61b652e9cdf"],["E:/qinhao/hexo/public/tags/图像处理/index.html","e978ebd8362f0907ada93d055ef6eac4"],["E:/qinhao/hexo/public/tags/基础网络/index.html","d7c117ac759f14100f35b2f4321dfc5a"],["E:/qinhao/hexo/public/tags/思科/index.html","9c430ceb8cdc6cb2b820fbb6e73b4a0d"],["E:/qinhao/hexo/public/tags/思科GRE/index.html","a920d482ae3af3a54a36fbf466e0cb17"],["E:/qinhao/hexo/public/tags/数据库/index.html","ac40e4361ebeb31fdf1c1e8cfc8f1ebe"],["E:/qinhao/hexo/public/tags/无线技术/index.html","a22167d72408912b27dacaa2d90ed2ee"],["E:/qinhao/hexo/public/tags/无线技术/page/2/index.html","39bad52d70ec56dc08c9372f07f62d29"],["E:/qinhao/hexo/public/tags/系统安装/index.html","546af2a79a0e969deaed3b21ff13df23"],["E:/qinhao/hexo/public/tags/网络安全/index.html","2ba58c8c2803448f3a54238a90ad5abd"],["E:/qinhao/hexo/public/tags/网络技术/index.html","d6de94edffcf3ae8862ea77509073517"],["E:/qinhao/hexo/public/tags/计算机三级/index.html","efc9f169329824d9343a4e8d6ce47e78"],["E:/qinhao/hexo/public/tags/路由器/index.html","8bc02a8335baadcd72adc24e6bfb4b76"],["E:/qinhao/hexo/public/tags/软考/index.html","7c03f79dfa35ff75283ba6b6f546d1e0"],["E:/qinhao/hexo/public/tags/通信原理/index.html","22a21071765d08303fbc94393f25b67b"],["E:/qinhao/hexo/public/tags/通信原理/page/2/index.html","9c46da8f4c51e1e67b2cccd7f8419283"],["E:/qinhao/hexo/public/tags/通信技术/index.html","57d202d8fb2f2ad4c35c9d3984876b02"],["E:/qinhao/hexo/public/tags/通信技术/page/2/index.html","3b31d35c61401553d41b668ef19b3f4d"]];
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







