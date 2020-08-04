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

var precacheConfig = [["D:/qinhao/hexo/public/2019-nCoV/index.html","72027881619e4f25903fa0d406f07930"],["D:/qinhao/hexo/public/2019/12/04/hello/index.html","5b462af9ea4c4a6a0a3fb369c849ddf0"],["D:/qinhao/hexo/public/2019/12/22/HP_Switch_Config/index.html","00d0328a45e27b0b351b4361193a6925"],["D:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","1c98182534cb84b611c6fa1af51b76a1"],["D:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","6cfdb42cdcb19d61d0a2376f5a481f5c"],["D:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","67a5599750c00cf10fe95b331c4184b5"],["D:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","1b61bac9d18a0a9c5d8963d7d2ef1390"],["D:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","2ba327f71a2369bd9e916b209182700f"],["D:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","13c530bd1e5c4a64f3c7fc690081af1b"],["D:/qinhao/hexo/public/2020/02/24/ssh/index.html","51e15b3d0ba5190d9b9220affb096d2a"],["D:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","a5020ed1b43830da70d572e5db078c93"],["D:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","6cc4d887be526c8d97f9cf661d9ba462"],["D:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","b99ddaa3d73c8aa05974684b7f7d2148"],["D:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","dab98e69e9e55121ecfecbfbde3e6f15"],["D:/qinhao/hexo/public/2020/03/04/acl/index.html","4698efdd976ee260b42c37eb6ba1a0d1"],["D:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","9fd97b47a80a369fb9acce1215d59b3d"],["D:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","dfbf35bff80d868448955eee550cfdcd"],["D:/qinhao/hexo/public/2020/03/07/3G/index.html","60ede97e01d0a2a086b97721ab1123e1"],["D:/qinhao/hexo/public/2020/03/07/GSM/index.html","943184f338901c8c54d26746b1760113"],["D:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","d5ec7e2ae8749fd76418daa5ee2792a3"],["D:/qinhao/hexo/public/2020/03/07/LTE/index.html","3159a641c87874057e2d46e71caa7bc1"],["D:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","6bc29fe04eb4b08b944a28c9305ffb2f"],["D:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","626345e27baf003b84fd339012e42d56"],["D:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","342a196ad278eef44b440a67e4bf1005"],["D:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","a0e5cd046f674a168c149ea4c09cfbc8"],["D:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","087016bf6fafd8f64d50e56ee45c0d0f"],["D:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","bece66990f60f397a063b4c4765c5f5c"],["D:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","79f62a969d05ef502d868ecac2fc2fc0"],["D:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","8d3d293f41322b374eeda9a2c68045f2"],["D:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","c55b09e97ace95db60cbbf86fee95375"],["D:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","97beb1afbb0a911c2371c73f9df230c4"],["D:/qinhao/hexo/public/2020/04/03/Layer/index.html","92e3122988bd562304d7e8ebf9ee3895"],["D:/qinhao/hexo/public/2020/04/04/color/index.html","d3da1785716f0839be7b2e8bb7500f96"],["D:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","a2dbae3f57e7f1e9e059b359e62ecd4a"],["D:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","1618de7eb42f9950b6ef8edcafb8be5d"],["D:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","c719b54514a5f76f1e9462e8dfa763c4"],["D:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","48119093e212247527b0185a58e38bd2"],["D:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","71810f55e33cc64ad01107484f8247bd"],["D:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","e0c5c6190ce0dfb928247aef507d785d"],["D:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","cf3c7d69870394eda470b1ea0224ed08"],["D:/qinhao/hexo/public/2020/05/11/MIMO/index.html","bb02a4174714d20135a065443f0bdb4f"],["D:/qinhao/hexo/public/2020/05/12/ICIC/index.html","c4030767f4cdb1c83a9e2c58d1981cea"],["D:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","dac8e778fcb0c6b136f04659f624a7bd"],["D:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","ce676e5bb91a1e24805ccf6b9560d255"],["D:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","d013113c1df70381acad670ba07688d2"],["D:/qinhao/hexo/public/2020/05/20/python-2/index.html","9bf4987d41ba2435935f838a6a2a9a04"],["D:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","3d23f62251a9eaa606e6a44ad7ca4430"],["D:/qinhao/hexo/public/2020/05/24/Python-3/index.html","10670ae50dbd7caa316a5c7b11b21933"],["D:/qinhao/hexo/public/2020/05/25/Python-4/index.html","99fd24c86710af7db1db58c61219fcb4"],["D:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","42431addaeec3a65ca94aedb11e3b113"],["D:/qinhao/hexo/public/2020/06/01/Python-5/index.html","7123ca65229d499bce60501579c9cfbf"],["D:/qinhao/hexo/public/2020/06/11/lanzous/index.html","1a9148e3bcec957775e08ebc9dc64b43"],["D:/qinhao/hexo/public/2020/06/13/buy-VPN/index.html","baf190aa5bd22269d974e7abba5223d6"],["D:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","aba09fde07a4f6d92533afddbebb4d21"],["D:/qinhao/hexo/public/2020/07/01/qudou/index.html","d7a53f9d6d38ef2af2561f4ad2158258"],["D:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","9b992442f262426e1ec5f3f2940a2de8"],["D:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","ed82a3b41b60fb91bd8a78a543102775"],["D:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","4089784f05190ba377343bc6e6dd75c3"],["D:/qinhao/hexo/public/ByteDanceVerify.html","9ffe96710cffb4205a73eec5df8e6d07"],["D:/qinhao/hexo/public/VPN/index.css","8013e09c9d199085bcb55fc941411c54"],["D:/qinhao/hexo/public/VPN/index.html","ca0e4a77db170e39837a6466cefb0ff2"],["D:/qinhao/hexo/public/about/index.html","64e2e390d54205c18ebae68f27682789"],["D:/qinhao/hexo/public/archives/2019/12/index.html","77d3146d75adeb32bc1dc6830205cb49"],["D:/qinhao/hexo/public/archives/2019/index.html","66ae5d91ae9e0f98ea1f0c821409bd95"],["D:/qinhao/hexo/public/archives/2020/02/index.html","7d672287ea0522bc7cecd3c4ceac1e8c"],["D:/qinhao/hexo/public/archives/2020/02/page/2/index.html","1e9f3bde9209b7a747df20b262150367"],["D:/qinhao/hexo/public/archives/2020/03/index.html","a4cdd4a9b4d17e797e9e43fcb0ba62cd"],["D:/qinhao/hexo/public/archives/2020/03/page/2/index.html","b6788fa85366126b30dbe42689071bea"],["D:/qinhao/hexo/public/archives/2020/04/index.html","0059b9d62b72b07b12eca77127484482"],["D:/qinhao/hexo/public/archives/2020/05/index.html","852570b08e94830accbbede99b9dd1ee"],["D:/qinhao/hexo/public/archives/2020/06/index.html","d11995c7b192f7d6566d2432611af279"],["D:/qinhao/hexo/public/archives/2020/07/index.html","3615ff77d99d1aaaf18aac19272e9511"],["D:/qinhao/hexo/public/archives/2020/index.html","911d99359f53392d94f38bedeeac3a6f"],["D:/qinhao/hexo/public/archives/2020/page/2/index.html","584e078d4751deb98a27d3cab1c1d151"],["D:/qinhao/hexo/public/archives/2020/page/3/index.html","34c9dc2a20162d5a250931c1a0deb65b"],["D:/qinhao/hexo/public/archives/2020/page/4/index.html","61dd3304b3455e770d57f6369f71f68b"],["D:/qinhao/hexo/public/archives/2020/page/5/index.html","d8653f17ef452dfe312db8e97f632d10"],["D:/qinhao/hexo/public/archives/2020/page/6/index.html","2da0b5c71ff74dd69550df37eba53c7f"],["D:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","8571bc4affe421b9999ebe42010b04c7"],["D:/qinhao/hexo/public/archives/index.html","7d8a100b1ec24dfbfa9a93f829752b91"],["D:/qinhao/hexo/public/archives/page/2/index.html","7d8a100b1ec24dfbfa9a93f829752b91"],["D:/qinhao/hexo/public/archives/page/3/index.html","7d8a100b1ec24dfbfa9a93f829752b91"],["D:/qinhao/hexo/public/archives/page/4/index.html","e69daa4cda95939dcd813a398d9d3d1a"],["D:/qinhao/hexo/public/archives/page/5/index.html","e69daa4cda95939dcd813a398d9d3d1a"],["D:/qinhao/hexo/public/archives/page/6/index.html","e69daa4cda95939dcd813a398d9d3d1a"],["D:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/qinhao/hexo/public/categories/Linux/index.html","fbbd4c8d695425cf350637decede6acf"],["D:/qinhao/hexo/public/categories/Photoshop/index.html","e79bbd14a3d1434db013c67f28be1f52"],["D:/qinhao/hexo/public/categories/Python/index.html","3eec7e6203f3acbc57234dcd21ff866b"],["D:/qinhao/hexo/public/categories/VPN/index.html","71203835356c8f9fbe68326bc0b19f05"],["D:/qinhao/hexo/public/categories/个人/index.html","98d2a270db1e77f27b61109d8ecc5e6b"],["D:/qinhao/hexo/public/categories/交换机/index.html","32e0fba03e31b96f3d5de8cc4dc0eeeb"],["D:/qinhao/hexo/public/categories/华为认证/index.html","2b688ac4615c57232f99880caa4871f9"],["D:/qinhao/hexo/public/categories/小技巧/index.html","c51d06a3584aa1ff7c974927832f7a78"],["D:/qinhao/hexo/public/categories/数据库/index.html","15617a233f66c7ab81ea15003206c255"],["D:/qinhao/hexo/public/categories/服务器/index.html","7a4e55b6f1042a26e81e74b7ecba8809"],["D:/qinhao/hexo/public/categories/网络安全/index.html","4b9d59da37aa14771a6e9e37d6e500c1"],["D:/qinhao/hexo/public/categories/计算机三级/index.html","d908461fdae3b245362cf8787a58cd67"],["D:/qinhao/hexo/public/categories/计算机网络/index.html","553a81c4174f17c1b16097d7b714cad5"],["D:/qinhao/hexo/public/categories/软件破解/index.html","25e6f9c591d36bbb5c8a5b02fb64b9db"],["D:/qinhao/hexo/public/categories/通信技术/index.html","267c4b1d4635a771330b64625b59e397"],["D:/qinhao/hexo/public/categories/通信技术/page/2/index.html","a0a5494d0aecad973b6e8e20d2eafc99"],["D:/qinhao/hexo/public/category/index.html","c6f484d3f86843c68b677528a0b2ae1c"],["D:/qinhao/hexo/public/css/style.css","28b8b9d8d2d35dd8cca2120f3d205618"],["D:/qinhao/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/qinhao/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/qinhao/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["D:/qinhao/hexo/public/friends/index.html","f745292a159b424cfa7a32fba6246662"],["D:/qinhao/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["D:/qinhao/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["D:/qinhao/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["D:/qinhao/hexo/public/index.html","3f73d51f40a21f5fa84197a1085960c9"],["D:/qinhao/hexo/public/js/app.js","ea306851b6276a0ffeec351d138589e5"],["D:/qinhao/hexo/public/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["D:/qinhao/hexo/public/js/valine.js","303a3cafe360b6aa26d5e8de035e46bc"],["D:/qinhao/hexo/public/mylist/index.html","074d763da5f048b962af7f26c7e7a814"],["D:/qinhao/hexo/public/page/2/index.html","46b283cbf38b8d325d2cf1a4e04dba8a"],["D:/qinhao/hexo/public/page/3/index.html","e9430cbd97b561587a3b973663aa105a"],["D:/qinhao/hexo/public/page/4/index.html","e0730cbe6130d31b3a5791759eb8c1b9"],["D:/qinhao/hexo/public/page/5/index.html","f0512b7248297e59024458b0948c5ef1"],["D:/qinhao/hexo/public/page/6/index.html","41ac2ae0b9c7dc967927dc9cd1b9d9e9"],["D:/qinhao/hexo/public/tags/IIS/index.html","35e757071bee74bae26798d266201c21"],["D:/qinhao/hexo/public/tags/MySQL/index.html","b0946e04abadd306f67e532f51244ced"],["D:/qinhao/hexo/public/tags/Photoshop/index.html","4c325b667b62dda8e10938d533a396ad"],["D:/qinhao/hexo/public/tags/VPN/index.html","937317660153bb555d875e1514819edd"],["D:/qinhao/hexo/public/tags/Web服务器/index.html","42c7d60a37c2a2d02a26dfb95a6bfa52"],["D:/qinhao/hexo/public/tags/index.html","2e3970a5da0395b99a36573fb41ecce9"],["D:/qinhao/hexo/public/tags/交换机/index.html","701cf3713e8d5f58665e3e2d6bdbefc3"],["D:/qinhao/hexo/public/tags/图像处理/index.html","72a70c0c2a614fdf0974e02125034728"],["D:/qinhao/hexo/public/tags/基础网络/index.html","08e5f9ab6c36252aaab73073f5cc7ba3"],["D:/qinhao/hexo/public/tags/思科/index.html","43fcbf1adf876d241446fa5bf5f8e64c"],["D:/qinhao/hexo/public/tags/思科GRE/index.html","de09b96dc465aa1d1481afd7b31c1c2c"],["D:/qinhao/hexo/public/tags/数据库/index.html","28fc1e5d9d99dd3528304d6b447794df"],["D:/qinhao/hexo/public/tags/无线技术/index.html","7bbd94400c31fb0755c34acbe4a036ff"],["D:/qinhao/hexo/public/tags/无线技术/page/2/index.html","8f0faef2ef6e452e3d5ed091366bdd7b"],["D:/qinhao/hexo/public/tags/系统安装/index.html","fc014d12b24514c29902ed202f368ea6"],["D:/qinhao/hexo/public/tags/网络安全/index.html","74f32f4d0729c80811d9f11677287536"],["D:/qinhao/hexo/public/tags/网络技术/index.html","e22007536c40dc9a972f177b144e57c4"],["D:/qinhao/hexo/public/tags/计算机三级/index.html","07c4016ab4c2753319fd21e106094bca"],["D:/qinhao/hexo/public/tags/路由器/index.html","dd03846c428b7894bf88594322326cd0"],["D:/qinhao/hexo/public/tags/软考/index.html","2dcd957867ad9fe25a337b753593a131"],["D:/qinhao/hexo/public/tags/通信原理/index.html","0ec668587900807fb0aa4cf342c341c2"],["D:/qinhao/hexo/public/tags/通信原理/page/2/index.html","dae216924619292cf1cdf6eb956e666e"],["D:/qinhao/hexo/public/tags/通信技术/index.html","a5271ca44dcfa30484fef5354256c3e2"],["D:/qinhao/hexo/public/tags/通信技术/page/2/index.html","b49996aa7c4924f4c147a477baac0417"]];
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







