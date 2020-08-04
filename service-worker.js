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

var precacheConfig = [["D:/qinhao/hexo/public/2019-nCoV/index.html","72027881619e4f25903fa0d406f07930"],["D:/qinhao/hexo/public/2019/12/04/hello/index.html","a34f4f6b416e234b6788498d08395db5"],["D:/qinhao/hexo/public/2019/12/22/HP_Switch_Config/index.html","4ca7942abf2b709095859a8f46b70947"],["D:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","04d9eb0ec13a165a95b4db835436daa6"],["D:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","a761a2d40b1f8ea49ae6a732a06c8ed3"],["D:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","83f26da5ba2ba36ca8fc34152b9d63be"],["D:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","33d8a020eb3e3f9ce156c0fbd1d496f9"],["D:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","329c348372ecb22e97d02d6b16c65c56"],["D:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","c1d9e5356b67c5739a83f587155719e8"],["D:/qinhao/hexo/public/2020/02/24/ssh/index.html","f1e90b8aacb55d93e42d43179ecc722c"],["D:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","ada63cf173a8f7a5a5eb2aa12e931287"],["D:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","395ec4cc94b7769872ebb467887484bf"],["D:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","c732917428b8dfeeafc4bfc6ba86b5f8"],["D:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","7c81ac873f0ab39ce89fe405594f467b"],["D:/qinhao/hexo/public/2020/03/04/acl/index.html","867a42715621483668807e4b114cd1fd"],["D:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","f0eac49a0bf992be299e1db22422872b"],["D:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","bfee0e87ba814b77a8b702d1908d1130"],["D:/qinhao/hexo/public/2020/03/07/3G/index.html","8471fbc9903e7c04b5c71a25dda58f6b"],["D:/qinhao/hexo/public/2020/03/07/GSM/index.html","1fe87949a52c5e09ed3397f90dff39b3"],["D:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","e460deecd29faf42bfa1fd40f56ffa1d"],["D:/qinhao/hexo/public/2020/03/07/LTE/index.html","cb4d6d9069fda49aa238b96ac31e9ffd"],["D:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","02d3efed36044d883806abbd4aaa94b1"],["D:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","13d8348be736db0c5e686c34484e733c"],["D:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","9063e063720beb6d080a43bc0de4649f"],["D:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","63a89537ff9fe8039c6bbf879c5ed71e"],["D:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","6941db6088679bfc951eb37b16d366d9"],["D:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","b44e6ad4fb4270f314f7a2e559c946fb"],["D:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","1c2849d7ab65f5fba28b12c8fe8d5d58"],["D:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","97daf83c0ef1c0d9748263e9d303b0e1"],["D:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","c2d260ee17a050bc5d0108f22072e37d"],["D:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","191b1e83f6e1dd0ea5ee8c50a039a06f"],["D:/qinhao/hexo/public/2020/04/03/Layer/index.html","dab91467f4f90ef0817dbed83b955987"],["D:/qinhao/hexo/public/2020/04/04/color/index.html","2a25ff8deb6ac2594232f756775bfcd6"],["D:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","e51d4a1717e467db9cd750e2c3ab55ee"],["D:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","f0deefa2e66dcc9851e83377206cc19e"],["D:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","468e406059d1f90bb8674785a240c584"],["D:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","fdafbe50b570b3a79e6f7b33037737bb"],["D:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","6cb9caac117b8b72688f46b34a3779b0"],["D:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","b769ee350a39ff6ece1d6b28395b105a"],["D:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","254c5d65a7c800e69dca140e8f5fbb65"],["D:/qinhao/hexo/public/2020/05/11/MIMO/index.html","899ab98a05258dd45c14e388b4c43b1a"],["D:/qinhao/hexo/public/2020/05/12/ICIC/index.html","b4bbf3272d25043316932f2dd4f7ea08"],["D:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","a3501bd17ca708afc007281f6e447ed6"],["D:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","57b7326e8f025810e30c5633f64aa429"],["D:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","37af841509b6d55a34a454957f0b972d"],["D:/qinhao/hexo/public/2020/05/20/python-2/index.html","03b558018befc49fba3641373cb47667"],["D:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","97e27e6b8a20d51483c02f4316394c81"],["D:/qinhao/hexo/public/2020/05/24/Python-3/index.html","468aca0f406c0d6828a4c44c06277d79"],["D:/qinhao/hexo/public/2020/05/25/Python-4/index.html","29f23b1cacf942866101256d9eeaac4d"],["D:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","090433852550c3582ccaea24a82c1f99"],["D:/qinhao/hexo/public/2020/06/01/Python-5/index.html","f5155903a57616f5d08ae9359b42d401"],["D:/qinhao/hexo/public/2020/06/11/lanzous/index.html","a483b5e5e3678d00f871a7ebf638d365"],["D:/qinhao/hexo/public/2020/06/13/buy-VPN/index.html","7770895bf8b7d64d2ea8e10214cfc3fd"],["D:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","a6022d11a3e850b1099056a3f36505fd"],["D:/qinhao/hexo/public/2020/07/01/qudou/index.html","ca0b6fba76cdcd1cdfeb82ba8f99e017"],["D:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","9709f0a14bf3f8f2efb484735f4e8735"],["D:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","ffedb5b45f01b5f299d8632cf8b9d0fc"],["D:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","69d9da74c949840f907897c1c0325ae2"],["D:/qinhao/hexo/public/ByteDanceVerify.html","98dc4cc5733d406ba9de45dd00c7eea8"],["D:/qinhao/hexo/public/VPN/index.css","8013e09c9d199085bcb55fc941411c54"],["D:/qinhao/hexo/public/VPN/index.html","ca0e4a77db170e39837a6466cefb0ff2"],["D:/qinhao/hexo/public/about/index.html","155393629a69f77e73090c80cd29de5b"],["D:/qinhao/hexo/public/archives/2019/12/index.html","cace00d6030c6fa99f9f6f4ecba88d5c"],["D:/qinhao/hexo/public/archives/2019/index.html","af3b5773ef9519ba92775bc7e844b1ad"],["D:/qinhao/hexo/public/archives/2020/02/index.html","bc34e24612721f79c246bef6a9bd2bab"],["D:/qinhao/hexo/public/archives/2020/02/page/2/index.html","db4582ccc4d662aba9a8ab2e9d5c834a"],["D:/qinhao/hexo/public/archives/2020/03/index.html","3d4313f340212c9dc6e8935b74e4d564"],["D:/qinhao/hexo/public/archives/2020/03/page/2/index.html","02aa1f2b87eeb0960c3a181d9006e137"],["D:/qinhao/hexo/public/archives/2020/04/index.html","68e7af7b440f74a7e9b2d6d7a6e9b9a9"],["D:/qinhao/hexo/public/archives/2020/05/index.html","b25fe58f288b5d7ef0e21cf349743f3e"],["D:/qinhao/hexo/public/archives/2020/06/index.html","ab174e0bd3f062c0a15fa74e22611593"],["D:/qinhao/hexo/public/archives/2020/07/index.html","a6b915c1fbb5d3ec3e59fe5bd55acaa8"],["D:/qinhao/hexo/public/archives/2020/index.html","d80dbe0bc302b1fb1428bce11fdb65ca"],["D:/qinhao/hexo/public/archives/2020/page/2/index.html","4ec5589b1b8fd9f76b0db23cd9255356"],["D:/qinhao/hexo/public/archives/2020/page/3/index.html","d19abac1d864667537cea0f35b8cedb9"],["D:/qinhao/hexo/public/archives/2020/page/4/index.html","824c8b4feec64192f51574a61222fda6"],["D:/qinhao/hexo/public/archives/2020/page/5/index.html","f8938fb2e405c0afe97dcaaa22872829"],["D:/qinhao/hexo/public/archives/2020/page/6/index.html","d435e3d696b684621597a3df727bfbb4"],["D:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","6ac2de800c9318a124b35b10730d2a42"],["D:/qinhao/hexo/public/archives/index.html","8463d0971f70676be0be5366b3f96f12"],["D:/qinhao/hexo/public/archives/page/2/index.html","8463d0971f70676be0be5366b3f96f12"],["D:/qinhao/hexo/public/archives/page/3/index.html","8463d0971f70676be0be5366b3f96f12"],["D:/qinhao/hexo/public/archives/page/4/index.html","6b983c665bb3fb0d70ece4a15a98c486"],["D:/qinhao/hexo/public/archives/page/5/index.html","6b983c665bb3fb0d70ece4a15a98c486"],["D:/qinhao/hexo/public/archives/page/6/index.html","6b983c665bb3fb0d70ece4a15a98c486"],["D:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/qinhao/hexo/public/categories/Linux/index.html","38b731c64ffaf0045f7da55034d8a5d3"],["D:/qinhao/hexo/public/categories/Photoshop/index.html","2cbe661ef52ab7273d277a9d9d886a06"],["D:/qinhao/hexo/public/categories/Python/index.html","99619507bc9558225a410b1889f9bed6"],["D:/qinhao/hexo/public/categories/VPN/index.html","06f7f86ec52fcfe9a047db2b9940c4b6"],["D:/qinhao/hexo/public/categories/个人/index.html","803cff02506f04dc230c2d158f40cfc8"],["D:/qinhao/hexo/public/categories/交换机/index.html","365f3825e607a64c71bd0d7fca01aa67"],["D:/qinhao/hexo/public/categories/华为认证/index.html","f1d31a14607795e9ac18a3fcc0269e4b"],["D:/qinhao/hexo/public/categories/小技巧/index.html","4f9db1a458349b881489b9a6f78c848d"],["D:/qinhao/hexo/public/categories/数据库/index.html","aaf8f57a0b18bb64349c13e677a7a623"],["D:/qinhao/hexo/public/categories/服务器/index.html","9943c68c66d1e1ef9c5dcdb58c734d42"],["D:/qinhao/hexo/public/categories/网络安全/index.html","db2af4559ba38e546220d0888e0ce1ed"],["D:/qinhao/hexo/public/categories/计算机三级/index.html","da7b3ca94d92442e1eef12541b459722"],["D:/qinhao/hexo/public/categories/计算机网络/index.html","7e2b5540c6b754f2aa48fb4901a2f175"],["D:/qinhao/hexo/public/categories/软件破解/index.html","8892b5f72d7042f897384c9fde5507bd"],["D:/qinhao/hexo/public/categories/通信技术/index.html","335e824ff6044bf00a96e2bbcfbc218b"],["D:/qinhao/hexo/public/categories/通信技术/page/2/index.html","38daf31c7260dc8dc5a9354d9d5fb608"],["D:/qinhao/hexo/public/category/index.html","0223121ccec39c27796c8cc373db3c99"],["D:/qinhao/hexo/public/css/style.css","28b8b9d8d2d35dd8cca2120f3d205618"],["D:/qinhao/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/qinhao/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/qinhao/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["D:/qinhao/hexo/public/friends/index.html","c7f8d305068b400f83640739e14cc36b"],["D:/qinhao/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["D:/qinhao/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["D:/qinhao/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["D:/qinhao/hexo/public/index.html","a935378d4b6ed2563a9a7edd2a2ca730"],["D:/qinhao/hexo/public/js/app.js","ea306851b6276a0ffeec351d138589e5"],["D:/qinhao/hexo/public/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["D:/qinhao/hexo/public/js/valine.js","303a3cafe360b6aa26d5e8de035e46bc"],["D:/qinhao/hexo/public/mylist/index.html","f62b692642205072b4ea0478fe8d9f0c"],["D:/qinhao/hexo/public/page/2/index.html","bad73fbc99f8d2d651ce217092f6f8f4"],["D:/qinhao/hexo/public/page/3/index.html","1b798e1c67fce576658c9f11c92876d5"],["D:/qinhao/hexo/public/page/4/index.html","06a12976167933a945380e32901e0982"],["D:/qinhao/hexo/public/page/5/index.html","336b1886ee1805260efee12fb8a718ea"],["D:/qinhao/hexo/public/page/6/index.html","4e1eecc6511d0007269187c888b36e76"],["D:/qinhao/hexo/public/tags/IIS/index.html","e4f5d3def3ccf778c7839f610bd15726"],["D:/qinhao/hexo/public/tags/MySQL/index.html","9bfba4a9c8c8cb8738d1285bd146a219"],["D:/qinhao/hexo/public/tags/Photoshop/index.html","f920e9ea8c927e511514e3fb9e302a51"],["D:/qinhao/hexo/public/tags/VPN/index.html","e1ead2a294fef4e6f177442a94f6b63a"],["D:/qinhao/hexo/public/tags/Web服务器/index.html","1f64060bdd6613fe615cb18c00072cce"],["D:/qinhao/hexo/public/tags/index.html","999ac2310ae9591c2320404803d948fb"],["D:/qinhao/hexo/public/tags/交换机/index.html","51d011fef14bbb078effccee643c7bab"],["D:/qinhao/hexo/public/tags/图像处理/index.html","943630ab3907e9f7ecb083ba07002e38"],["D:/qinhao/hexo/public/tags/基础网络/index.html","219bbdc4664b3f7a204fed6a7e056407"],["D:/qinhao/hexo/public/tags/思科/index.html","d2019d7c4e0453a1e6442fa75ca32599"],["D:/qinhao/hexo/public/tags/思科GRE/index.html","abdfdb4364515e4fc527584bcbaded45"],["D:/qinhao/hexo/public/tags/数据库/index.html","6524b34351166d1f2f76952f721e3758"],["D:/qinhao/hexo/public/tags/无线技术/index.html","5e0f44009fe54341f229492b699b8861"],["D:/qinhao/hexo/public/tags/无线技术/page/2/index.html","3551e5fac89758859add9b24937e4186"],["D:/qinhao/hexo/public/tags/系统安装/index.html","a4d0a0e46c42ec0cbf27fe7761c54dec"],["D:/qinhao/hexo/public/tags/网络安全/index.html","d93df8bdf4ea096f61713f72effe65b1"],["D:/qinhao/hexo/public/tags/网络技术/index.html","919ce3ad1d9bed57fa0308c41755bd3f"],["D:/qinhao/hexo/public/tags/计算机三级/index.html","fecaabb904719a4b7d2b8e8ce6aaf13a"],["D:/qinhao/hexo/public/tags/路由器/index.html","96ddd7a3ed24cdd7b8cd2506a00dc4a4"],["D:/qinhao/hexo/public/tags/软考/index.html","2f8218583f6a0ca90acad971d40e1875"],["D:/qinhao/hexo/public/tags/通信原理/index.html","ccfd9aaee6e18b4ca835d5adfea38ba7"],["D:/qinhao/hexo/public/tags/通信原理/page/2/index.html","8cd1d7e7fec33fcb67b1aff89a0d426b"],["D:/qinhao/hexo/public/tags/通信技术/index.html","8def9df1bdc8c319ca15d7ba31f4fc38"],["D:/qinhao/hexo/public/tags/通信技术/page/2/index.html","dc6fd973223e133eca7e7917985c6498"]];
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







