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

var precacheConfig = [["D:/qinhao/hexo/public/2019-nCoV/index.html","72027881619e4f25903fa0d406f07930"],["D:/qinhao/hexo/public/2019/12/04/hello/index.html","1fadeba781843b13ab680e7223bc56d9"],["D:/qinhao/hexo/public/2019/12/22/HP_Switch_Config/index.html","9385c04d33d2a60bfba61d83f6b5137e"],["D:/qinhao/hexo/public/2019/12/31/happy_new_year/index.html","38268108207a970598807f9e8d5dca76"],["D:/qinhao/hexo/public/2020/01/25/happy_new_year_2020/index.html","c860ed62863838560c43c65c28b2188c"],["D:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","6ac2fe10e4123f65bd3e79bdd1269f90"],["D:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","e45f5102642fdf1ec28574081ed09362"],["D:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","61aca9e14c79338858674123a4812bfe"],["D:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","2438f49970988f215b241eabcab3a1a9"],["D:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","75c13dadba6dfc6166bebf0b39acbb08"],["D:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","386f3eb32e7670cb4e8c07428a42d01b"],["D:/qinhao/hexo/public/2020/02/24/ssh/index.html","600bd3b1eba8455f1a0b54c5c59917a5"],["D:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","625706078a81d26c38e1fd8ec6a614d2"],["D:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","9b2126575dba226a2f1445a8e90bd9be"],["D:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","37dbac2456c9173b4e3ad9cb7b375129"],["D:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","3bb17c9588485c7fe6cb1afb2a80266c"],["D:/qinhao/hexo/public/2020/02/29/per_four_years_happy/index.html","1b18597018003e3de653f5b87e89fe54"],["D:/qinhao/hexo/public/2020/03/04/acl/index.html","ac45e57e266ebafa3a8c8e95902922aa"],["D:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","2babf3ebd38210f0b0b7d6ad29776d1b"],["D:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","146f1a9187d915dcc2825a4d5e65eeb2"],["D:/qinhao/hexo/public/2020/03/07/3G/index.html","d463436a8b6c6261aa2abcf7db796ba6"],["D:/qinhao/hexo/public/2020/03/07/GSM/index.html","95cea789211074e4794d14d83a932cd9"],["D:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","d7d3c071761fe5c1c2fea82d91a43591"],["D:/qinhao/hexo/public/2020/03/07/LTE/index.html","7019e672a7dc69e8cc08761b75eb7ab6"],["D:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","f647557e2454f2a895b26306ee8ab044"],["D:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","5a4cbb7bf0076c842d542c4c87a842d2"],["D:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","b3503aee2581df30d018cc7c3a51d197"],["D:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","41a7350aed43a4ad39f9acdb0cd43896"],["D:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","b3297df029a7ff1696fb35de73798c80"],["D:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","12d9b31424e13a95990e3d747ca4bb4f"],["D:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","042309c499bd7a83185080a92ac8567c"],["D:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","5a3d360770c9f46314c127349b01a098"],["D:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","2a868d1497ffbd329137ea22d81c4231"],["D:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","3d26fd39a85217cfced061f18878b089"],["D:/qinhao/hexo/public/2020/04/03/Layer/index.html","b91d1b0e06716f545678aae5dd532466"],["D:/qinhao/hexo/public/2020/04/04/color/index.html","ad2c913f8248f2d2cdf23123c9ef5d28"],["D:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","af6c7ce4360a7e97a2199654542ad365"],["D:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","f753ed3d6f3d93fbd77f198b17663c04"],["D:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","a9cf42258e1387e9fbd54aa15a69c27e"],["D:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","202a876645cffaadf79160adb59fcdd1"],["D:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","74fcc04b6c3877f1a0031ec09d05ac33"],["D:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","07de958aed5694a87cb3ebcd4cad2fe7"],["D:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","c00e72a66f88986612df754150f6d1a4"],["D:/qinhao/hexo/public/2020/05/11/MIMO/index.html","6ff4b5a27a9448bc777000d3368cddf1"],["D:/qinhao/hexo/public/2020/05/12/ICIC/index.html","87c4ff609270a7364da692120d76583b"],["D:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","d31cbbeeaa277d7a23b46e23d574851e"],["D:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","e01ce973ab097bde7bc34debb027d575"],["D:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","92f5ca8d4970047b5a64d53ef132b87b"],["D:/qinhao/hexo/public/2020/05/20/python-2/index.html","3d3f08401cf507ab921e045cfe575c18"],["D:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","e51c5ae23d308c3b101cea46618d69f6"],["D:/qinhao/hexo/public/2020/05/24/Python-3/index.html","e81b5ada0cb89f55175a29b4972b0bf6"],["D:/qinhao/hexo/public/2020/05/25/Python-4/index.html","085a4258ad63de9a3b1d04be9d803166"],["D:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","d0804278bfbfbcf11e5adca7c77f8148"],["D:/qinhao/hexo/public/2020/06/01/Python-5/index.html","4e55aa894cdc5f37510d1f525c7add0f"],["D:/qinhao/hexo/public/2020/06/11/lanzous/index.html","2b10f6c204209c667dcac76f11dddc72"],["D:/qinhao/hexo/public/2020/06/13/buy-VPN/index.html","4a40293f9e0987765c7bc9d874196289"],["D:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","4be2bd7a80c639d11db35ff90ffc4d8e"],["D:/qinhao/hexo/public/2020/07/01/qudou/index.html","17b36ba6808a57b727001a18bb59dec9"],["D:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","20c4146d402368a4388b31eef17c4d18"],["D:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","9c982cc0d5067ee033c03c7d84cdedc7"],["D:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","fba167fe4dbaa38868ea9132a0e4b56d"],["D:/qinhao/hexo/public/ByteDanceVerify.html","c72117c38875b28afd450f138d072b7b"],["D:/qinhao/hexo/public/VPN/index.css","8013e09c9d199085bcb55fc941411c54"],["D:/qinhao/hexo/public/VPN/index.html","6b60684e22d4bbbcd3b170f789fb87a7"],["D:/qinhao/hexo/public/about/index.html","e41557ff0cd7ac5683c46b149ea948d7"],["D:/qinhao/hexo/public/archives/2019/12/index.html","88300641fed4ab9c95db1cb71344060f"],["D:/qinhao/hexo/public/archives/2019/index.html","6ed50dc0f290eedf47e75a06f0fbbc9e"],["D:/qinhao/hexo/public/archives/2020/01/index.html","5dd063a48c1ee5789ee3c118eed5a761"],["D:/qinhao/hexo/public/archives/2020/02/index.html","27ed3e1a2c629e841d9eba03e6733e6d"],["D:/qinhao/hexo/public/archives/2020/02/page/2/index.html","02e4675bddd7b1c8405bc97e9cf2e88a"],["D:/qinhao/hexo/public/archives/2020/03/index.html","dc95af1c964e7c1ab6a390c050091da4"],["D:/qinhao/hexo/public/archives/2020/03/page/2/index.html","4805dffd51b21bf00f8ef74b176cdad5"],["D:/qinhao/hexo/public/archives/2020/04/index.html","e4edcd1d3893f4fb6489c238fddd722c"],["D:/qinhao/hexo/public/archives/2020/05/index.html","41507815c9bb488d42da6b919d0738a3"],["D:/qinhao/hexo/public/archives/2020/06/index.html","09824cca925771e3ec536a1b29e9511f"],["D:/qinhao/hexo/public/archives/2020/07/index.html","c45f017da2c6232ab79911eddceaae1f"],["D:/qinhao/hexo/public/archives/2020/index.html","b34a577d41f8bdf366750cff1ac4a112"],["D:/qinhao/hexo/public/archives/2020/page/2/index.html","a71f20e8230b8afb84ae0d93c6d3913c"],["D:/qinhao/hexo/public/archives/2020/page/3/index.html","a48f1f6fb8993d441005d195dcfe046f"],["D:/qinhao/hexo/public/archives/2020/page/4/index.html","a3246126e83bfa8bb7279ee51be281db"],["D:/qinhao/hexo/public/archives/2020/page/5/index.html","bb4ca04e0af7d15b60754f310b100b53"],["D:/qinhao/hexo/public/archives/2020/page/6/index.html","db00109457c7906a6d7a3895f4f1854d"],["D:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","78768e46c22712f83f9478bb3a0877a2"],["D:/qinhao/hexo/public/archives/index.html","0623dd332acac3ecf1b2d8f11a06f7f8"],["D:/qinhao/hexo/public/archives/page/2/index.html","0623dd332acac3ecf1b2d8f11a06f7f8"],["D:/qinhao/hexo/public/archives/page/3/index.html","0623dd332acac3ecf1b2d8f11a06f7f8"],["D:/qinhao/hexo/public/archives/page/4/index.html","db12f6c8777760480d752003e4ade081"],["D:/qinhao/hexo/public/archives/page/5/index.html","db12f6c8777760480d752003e4ade081"],["D:/qinhao/hexo/public/archives/page/6/index.html","db12f6c8777760480d752003e4ade081"],["D:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/qinhao/hexo/public/categories/Linux/index.html","d1394e1f6efd4f1a556c614ae96f93d8"],["D:/qinhao/hexo/public/categories/Photoshop/index.html","17d6afc7030b8b2ae26b8790cc1fefbc"],["D:/qinhao/hexo/public/categories/Python/index.html","060eebc1785549ed7b2a353429009077"],["D:/qinhao/hexo/public/categories/VPN/index.html","016588efc4a25e14432d08aacfeaba4e"],["D:/qinhao/hexo/public/categories/个人/index.html","33f06faff2e15a5457399dd7c0abbf20"],["D:/qinhao/hexo/public/categories/交换机/index.html","afd792a218334d5788c4b045ece991ed"],["D:/qinhao/hexo/public/categories/华为认证/index.html","2d5fe42199b24ec626ddc96ddba1056e"],["D:/qinhao/hexo/public/categories/小技巧/index.html","68fcea96a267a49b76cf61459408eca7"],["D:/qinhao/hexo/public/categories/数据库/index.html","a150a99799ec294fb1767a2f5e2c54ea"],["D:/qinhao/hexo/public/categories/服务器/index.html","865dde5dcf9ae52bb3585ca2a0fbf09f"],["D:/qinhao/hexo/public/categories/生活/index.html","fe5e39094e21706c6735fd2cac673f43"],["D:/qinhao/hexo/public/categories/网络安全/index.html","a5d808c7f0924e0a4d0dbef17108e3d4"],["D:/qinhao/hexo/public/categories/计算机三级/index.html","4c48b5bbef7677c8817b77511777b9cc"],["D:/qinhao/hexo/public/categories/计算机网络/index.html","ff5b53a613d6dd19353f84a212b73cd1"],["D:/qinhao/hexo/public/categories/软件破解/index.html","0caa66749f1650d0c2ad2cf9219d1142"],["D:/qinhao/hexo/public/categories/通信技术/index.html","9b12e15614830d0f4ffd76b4a788097e"],["D:/qinhao/hexo/public/categories/通信技术/page/2/index.html","6b66cb8c01fb256d1ed18378c506d407"],["D:/qinhao/hexo/public/category/index.html","89fa84b7fb519d8898bcd105c2272050"],["D:/qinhao/hexo/public/css/style.css","28b8b9d8d2d35dd8cca2120f3d205618"],["D:/qinhao/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/qinhao/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/qinhao/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["D:/qinhao/hexo/public/friends/index.html","1b26753844a8ef4901ed5e0ba84f8780"],["D:/qinhao/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["D:/qinhao/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["D:/qinhao/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["D:/qinhao/hexo/public/index.html","11b21df9ccde4dce0f906a2a007c41c1"],["D:/qinhao/hexo/public/js/app.js","ea306851b6276a0ffeec351d138589e5"],["D:/qinhao/hexo/public/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["D:/qinhao/hexo/public/js/valine.js","303a3cafe360b6aa26d5e8de035e46bc"],["D:/qinhao/hexo/public/mylist/index.html","037bdf87112f071a433a8cb2594ca654"],["D:/qinhao/hexo/public/page/2/index.html","d3419959553d9595c86bb27c6bf09537"],["D:/qinhao/hexo/public/page/3/index.html","287e0de5e47190c044c7c29aa45fdff7"],["D:/qinhao/hexo/public/page/4/index.html","98881853f7addde4ddf475cf90ff1965"],["D:/qinhao/hexo/public/page/5/index.html","fd0c6e3554663e20ee19c0133dd3916c"],["D:/qinhao/hexo/public/page/6/index.html","89faf99db25d87b1aba010c9879c980a"],["D:/qinhao/hexo/public/tags/IIS/index.html","9106925c8c76fa05679ba2cccfc80338"],["D:/qinhao/hexo/public/tags/MySQL/index.html","4e7138fadf3c7eca9c442fca7e9a2a3f"],["D:/qinhao/hexo/public/tags/Photoshop/index.html","79be0d092f6f07d4a725bd7939d28274"],["D:/qinhao/hexo/public/tags/VPN/index.html","e54680ed57a5ebc3c1c8e6902bbe906e"],["D:/qinhao/hexo/public/tags/Web服务器/index.html","7617cf1fcbd08bde914bd911de659674"],["D:/qinhao/hexo/public/tags/index.html","2b2c15929d1f3861f595babe7c5ebf7d"],["D:/qinhao/hexo/public/tags/交换机/index.html","8f91f40cb8f630a120a787259abe86e8"],["D:/qinhao/hexo/public/tags/图像处理/index.html","7f90de6b4dd30195593a779fb744c6f9"],["D:/qinhao/hexo/public/tags/基础网络/index.html","56bf6b94d4ae4b774c46c31214eccd8e"],["D:/qinhao/hexo/public/tags/思科/index.html","7b09e235ddf5c771a40220f92c8ed77b"],["D:/qinhao/hexo/public/tags/思科GRE/index.html","50662e15cde78fbd3ec4a7c894730680"],["D:/qinhao/hexo/public/tags/数据库/index.html","13b92cefdd9894dcabb9e1fe54f98d88"],["D:/qinhao/hexo/public/tags/无线技术/index.html","349a275a58db74aa2bc067e1ad3be53b"],["D:/qinhao/hexo/public/tags/无线技术/page/2/index.html","d8a30620866bc84c6742f6f9d40ee5f7"],["D:/qinhao/hexo/public/tags/系统安装/index.html","f1a162f34a8e42115c3a0673e362e030"],["D:/qinhao/hexo/public/tags/网络安全/index.html","d6fe2022f6229158e67ca845514c2dba"],["D:/qinhao/hexo/public/tags/网络技术/index.html","8555b72975df63a0365724da6db3f3d3"],["D:/qinhao/hexo/public/tags/计算机三级/index.html","70cca2f8785f5624e96e7d2f36c37b99"],["D:/qinhao/hexo/public/tags/路由器/index.html","b87c68c58dc773868efe874e419d501a"],["D:/qinhao/hexo/public/tags/软考/index.html","022cb96d3e96ea2ffa0fb63ac5e7cc17"],["D:/qinhao/hexo/public/tags/通信原理/index.html","ad80d859fe52d533095b1ef22f34090f"],["D:/qinhao/hexo/public/tags/通信原理/page/2/index.html","6d63bab3d3aad7ac0c314047d6c5e20e"],["D:/qinhao/hexo/public/tags/通信技术/index.html","61135b38029fa09cd38c7d2e501b18dd"],["D:/qinhao/hexo/public/tags/通信技术/page/2/index.html","2b1443f83d3da1b67cf28bc5540fcd20"]];
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







