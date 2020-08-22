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

var precacheConfig = [["D:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["D:/qinhao/hexo/public/2019/12/04/hello/index.html","7d38e1acb3924cabba7be1d8f85bddde"],["D:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","9e65d8f766b045bf317b51aa072a6148"],["D:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","69ed38691e63d32c9caa58f640ce373a"],["D:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","09653c944759f1f113218f7da65f49f4"],["D:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","9191df3ca466c6e5e57f37da89dffc11"],["D:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","d485e35d50adf4f3a1cd9dbfa68bfee5"],["D:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","cb6a3b52ce43b728ae6ba753769fc454"],["D:/qinhao/hexo/public/2020/02/24/ssh/index.html","ef79f2ec1a9dabc95405e721b85d2440"],["D:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","0f20d1c57c9c4be00872f3df4c5d1ea8"],["D:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","d914fc6f50586196cc89ae44460266ee"],["D:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","ba3d23b58e7c9561c157526b830727f0"],["D:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","a9864aed6935e41ad5ef59eb9ccfc82a"],["D:/qinhao/hexo/public/2020/03/04/acl/index.html","f5f86400c6bd3b1a022a84211ba22a94"],["D:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","3faf52c0a1fd0165ca555a9e98a95328"],["D:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","65cd1671e438673301c5bb435b28246c"],["D:/qinhao/hexo/public/2020/03/07/3G/index.html","2018f41862f4fef8789f5d24e5863b50"],["D:/qinhao/hexo/public/2020/03/07/GSM/index.html","8529f8aac12cccdcb720c574ad065351"],["D:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","be4ae6a295560af160658e54530d17f0"],["D:/qinhao/hexo/public/2020/03/07/LTE/index.html","d1f703a675f1c92b249ceabaefcd9a70"],["D:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","8feb13065df45be96bd1f63ca74489a3"],["D:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","075f1c835c70eb28f896cdd951837928"],["D:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","78a8571bebb9544f574ccacfa32c3bf0"],["D:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","e9894de1cae0dee1b5f4c38ae2b1f1c4"],["D:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","f186513ec648d4378831eccc6ff44de5"],["D:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","7f93dbfeffc014964b2f14acb6d775b7"],["D:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","f268cc60b42c6052acbaed74ec043f26"],["D:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","c0e6ff84171c55dd90c465cce17ec0f5"],["D:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","4ec8e331bb143ab22007700d4260a0f7"],["D:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","286491af2d8fe18bebe6792192214291"],["D:/qinhao/hexo/public/2020/04/03/Layer/index.html","033d5222e49e390f9ad4a30d2d244b62"],["D:/qinhao/hexo/public/2020/04/04/color/index.html","625a4a8dda21fc134be23bb875657e76"],["D:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","20f1eafab098a74bc078fed834b843ce"],["D:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","cb1f769ba1d2f1d15735787bc29b403f"],["D:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","b5d30c1c9e68aba5c8e30698b52a6a32"],["D:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","9bf39272b93cd6f91329b38b7a55fe0c"],["D:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","3f6b15dbb9956eb1b1207754619e7541"],["D:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","fc277c748a65fa44366bc1d02b70dfb7"],["D:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","af79fdc9863fd7b0e17fceb9206de8d4"],["D:/qinhao/hexo/public/2020/05/11/MIMO/index.html","515bdde57c143f90d167d465ec7e72b0"],["D:/qinhao/hexo/public/2020/05/12/ICIC/index.html","8caf8a6a3cd8f9913bec76e64ea1a0cf"],["D:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","a15e961fa51c9f7b7cc1d7285076f56d"],["D:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","ae7dc6c22d0750ac32ee6f82e10a90af"],["D:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","394bfb358655e7382621675f92fbda69"],["D:/qinhao/hexo/public/2020/05/20/python-2/index.html","f4f37a187e067b95491e41a1b6b3d08e"],["D:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","7a872c1f8f05f56c6d63d91b9ec7879a"],["D:/qinhao/hexo/public/2020/05/24/Python-3/index.html","5474938ee59c172fcb295f12a092b629"],["D:/qinhao/hexo/public/2020/05/25/Python-4/index.html","7fa19db9d310def131ab70c11e5747c8"],["D:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","bfd53996fb3cc587a0737c8baf628171"],["D:/qinhao/hexo/public/2020/06/01/Python-5/index.html","4c8c9813e5e4f3687bce5e1c89fba1d9"],["D:/qinhao/hexo/public/2020/06/11/lanzous/index.html","cec2bf0ba13fe95c1e6048e7344d15b7"],["D:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","53dba853540b1db721c6c5adf7b3a771"],["D:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","c3d0c328f824d7d3b86938ef0c3441ca"],["D:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","fe14104203cb38e4291a05d376bcd7a5"],["D:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","901eada24a0cf0d1c79135042694e751"],["D:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","07a9158f4fe6587b9f533e9d2633e6a5"],["D:/qinhao/hexo/public/2020/08/13/system_info/index.html","5e9041935c40938aca3f1461c6b262bb"],["D:/qinhao/hexo/public/ByteDanceVerify.html","e1adddab45735a0bb8f4eea71bedeb0a"],["D:/qinhao/hexo/public/about/index.html","40bed6947e83773b3cc1d39346c17689"],["D:/qinhao/hexo/public/archives/2019/12/index.html","287fed3b384ae072a1029598ff28c9e9"],["D:/qinhao/hexo/public/archives/2019/index.html","b52f48084360be324d40348ecaa2b050"],["D:/qinhao/hexo/public/archives/2020/02/index.html","94c664b7d56f42883431a6b3310258af"],["D:/qinhao/hexo/public/archives/2020/02/page/2/index.html","5e0364bff85990430230cd6c4dd3d859"],["D:/qinhao/hexo/public/archives/2020/03/index.html","e6d64fc1fbce6b6f5aef1445c5e54c03"],["D:/qinhao/hexo/public/archives/2020/03/page/2/index.html","dbae726dc4ea77be706a85aeb753a113"],["D:/qinhao/hexo/public/archives/2020/04/index.html","0fea85762caaca2fdc8382963ade8f34"],["D:/qinhao/hexo/public/archives/2020/05/index.html","743dcb6c7894a8469950c795421ed4f4"],["D:/qinhao/hexo/public/archives/2020/06/index.html","c0581ae162decb73524cd04c944f6688"],["D:/qinhao/hexo/public/archives/2020/07/index.html","2537d7ec7f7b72ffa31e27c41cd6b9fd"],["D:/qinhao/hexo/public/archives/2020/08/index.html","a9ab8feb01f6aa21948d548bd56d2772"],["D:/qinhao/hexo/public/archives/2020/index.html","b0845adba54255ea420aca346aad4ff9"],["D:/qinhao/hexo/public/archives/2020/page/2/index.html","8e735ad878980147549b36ca054e77dc"],["D:/qinhao/hexo/public/archives/2020/page/3/index.html","458ca509f580abefd873fab2c2a7bd0e"],["D:/qinhao/hexo/public/archives/2020/page/4/index.html","900a75ad3d6e8b2f4aae6d206ff4cfa6"],["D:/qinhao/hexo/public/archives/2020/page/5/index.html","985a9d755bd81d0d816add3af4b6dd0c"],["D:/qinhao/hexo/public/archives/2020/page/6/index.html","8f8cb4c09a25625363b46bea543079fa"],["D:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","dc078fca735033bbb43dcb4590b63a17"],["D:/qinhao/hexo/public/archives/index.html","8295687e4d1dc1f86a97b05b4e66a899"],["D:/qinhao/hexo/public/archives/page/2/index.html","8295687e4d1dc1f86a97b05b4e66a899"],["D:/qinhao/hexo/public/archives/page/3/index.html","8295687e4d1dc1f86a97b05b4e66a899"],["D:/qinhao/hexo/public/archives/page/4/index.html","77dd54f8c41d214a5dceeeaf1e12e383"],["D:/qinhao/hexo/public/archives/page/5/index.html","77dd54f8c41d214a5dceeeaf1e12e383"],["D:/qinhao/hexo/public/archives/page/6/index.html","77dd54f8c41d214a5dceeeaf1e12e383"],["D:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/qinhao/hexo/public/categories/Linux/index.html","20173c14cbb2d2b581736f6c28ad1ab9"],["D:/qinhao/hexo/public/categories/Photoshop/index.html","4bf314d38c6050de147c977794be41fd"],["D:/qinhao/hexo/public/categories/Python/index.html","ff337d076b6efcf6b895cccf805a57b2"],["D:/qinhao/hexo/public/categories/个人/index.html","c86479fc929a27f98d6d3dd10f011ce6"],["D:/qinhao/hexo/public/categories/交换机/index.html","fcde25af217c80096b7171f5cc05e7c1"],["D:/qinhao/hexo/public/categories/华为认证/index.html","94565be32b711e143ccd358cc88172ca"],["D:/qinhao/hexo/public/categories/小技巧/index.html","49c3cb41458335fe81872b15fde55532"],["D:/qinhao/hexo/public/categories/数据库/index.html","52ed2d199af787dd18fbeec4e46105c9"],["D:/qinhao/hexo/public/categories/服务器/index.html","8cc3bb7609a8cb35f3fa277d7f1408d3"],["D:/qinhao/hexo/public/categories/网络安全/index.html","b3fb403a4c998096390cc2fce53ab918"],["D:/qinhao/hexo/public/categories/计算机三级/index.html","a658ce765535543eeb27722937b57b25"],["D:/qinhao/hexo/public/categories/计算机网络/index.html","f59b1f3056da3261d19756d771f6b443"],["D:/qinhao/hexo/public/categories/软件破解/index.html","8657b69607821274b0fa80c000df2b7b"],["D:/qinhao/hexo/public/categories/通信技术/index.html","941be6091dd3bb8782fcf8dc08f8d6c7"],["D:/qinhao/hexo/public/categories/通信技术/page/2/index.html","2bf69e6055108ca297df8c89987343e7"],["D:/qinhao/hexo/public/category/index.html","e9b79c6dc062a2302f1863188411164e"],["D:/qinhao/hexo/public/css/style.css","940a599036b2a40f1cda8deba1fa0555"],["D:/qinhao/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/qinhao/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/qinhao/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["D:/qinhao/hexo/public/friends/index.html","bf36a06d0105cf975feb46bab4387b7c"],["D:/qinhao/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["D:/qinhao/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["D:/qinhao/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["D:/qinhao/hexo/public/index.html","7df93c76b22ef12098da65a501aa4be2"],["D:/qinhao/hexo/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["D:/qinhao/hexo/public/js/app.js","804e218b8d00f3db3d393a7811cc0f3c"],["D:/qinhao/hexo/public/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["D:/qinhao/hexo/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["D:/qinhao/hexo/public/mylist/index.html","920cb6b67567b9e06516ae51a1fdfc13"],["D:/qinhao/hexo/public/page/2/index.html","4139e5dd41a88ef35a84bfdc09650f3d"],["D:/qinhao/hexo/public/page/3/index.html","b323a64a4a9cd80b33bb16a7890174e7"],["D:/qinhao/hexo/public/page/4/index.html","55403641e09e1aa1077691db5a965477"],["D:/qinhao/hexo/public/page/5/index.html","75d48d6997bf8a541ca38425938c6618"],["D:/qinhao/hexo/public/page/6/index.html","5aff6205f2aa2f65cb5c239a459b4804"],["D:/qinhao/hexo/public/sw-register.js","49fe79b18e223a3efe5db1b25f9f35b8"],["D:/qinhao/hexo/public/sw.js","04c6dc378c7cfc11ab9b897b3341ae5f"],["D:/qinhao/hexo/public/tags/IIS/index.html","d272a3d9b1006444d19ca901c06c2a92"],["D:/qinhao/hexo/public/tags/MySQL/index.html","ec85f2ddbc4388b55aa25eead281d597"],["D:/qinhao/hexo/public/tags/Photoshop/index.html","01c4a42e0ba5e4986c8dfe1596024523"],["D:/qinhao/hexo/public/tags/VPN/index.html","f288d837c128b462b8c396f45a84a731"],["D:/qinhao/hexo/public/tags/Web服务器/index.html","2811bfe767800ff0b8862dcdcb2a0b64"],["D:/qinhao/hexo/public/tags/index.html","46390b2ee5c48685a3c7c6dc0f5112ef"],["D:/qinhao/hexo/public/tags/交换机/index.html","2855baa25b0d7c232c1ec12032ad5b55"],["D:/qinhao/hexo/public/tags/图像处理/index.html","7d2f35aad6185777b7740b327f4b35bc"],["D:/qinhao/hexo/public/tags/基础网络/index.html","fd948408a2e08407fa047e8aca6b2404"],["D:/qinhao/hexo/public/tags/思科/index.html","5330f9254679d2489a7c8664437deec5"],["D:/qinhao/hexo/public/tags/思科GRE/index.html","739abc50ace1bf78f4871717b912913d"],["D:/qinhao/hexo/public/tags/数据库/index.html","bc758d003be2e32b70aa34d0fea6c8da"],["D:/qinhao/hexo/public/tags/无线技术/index.html","8de0c08fdb6abc134aaa667146c8c3ef"],["D:/qinhao/hexo/public/tags/无线技术/page/2/index.html","2ccf3b6d354dc390cd4d2d9c94cd00cf"],["D:/qinhao/hexo/public/tags/系统安装/index.html","3234d10a6dd29911ff588e52c5f6e4a4"],["D:/qinhao/hexo/public/tags/网络安全/index.html","4489f690cfd43a371d21cc9a32b74292"],["D:/qinhao/hexo/public/tags/网络技术/index.html","e7f3dead7236c6e4ef9514692f9137fa"],["D:/qinhao/hexo/public/tags/计算机三级/index.html","fa0123ee0ace054e0b8100dbbb802a14"],["D:/qinhao/hexo/public/tags/路由器/index.html","ad1e626279d59d423a3167cd391f47bd"],["D:/qinhao/hexo/public/tags/软考/index.html","f4f95d6df5f8f0b7b0ab75326c105fb4"],["D:/qinhao/hexo/public/tags/通信原理/index.html","870299036914c3ef0b7f1bb36e00ea64"],["D:/qinhao/hexo/public/tags/通信原理/page/2/index.html","4b78225df2dbea28a6dff3011f7e8b40"],["D:/qinhao/hexo/public/tags/通信技术/index.html","af2e55dc7a180bfd42a5b0d563bbe716"],["D:/qinhao/hexo/public/tags/通信技术/page/2/index.html","b2ca768564aa3a7ae6ce4395201a1cc4"]];
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







