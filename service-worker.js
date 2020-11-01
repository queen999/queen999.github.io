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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","e2c868da9a0ce9c868df95e965913a0f"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","b6b0047398f902bb91348ccb74a48e47"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","bc51925a881810b6c4da29ad58eb85d4"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","83a53fcbf3208166e15161d2653a9622"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","62b57ffe27b586295df93cbd8a41b809"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","88cb85103d6e4e76eefaa2a8c9af5d5c"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","a50cdee6e9b984cfdb3ea772dec51c68"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","d19ad14a6ccb544cd8de65dad997eccb"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","03c2cdd42721caf4177eb8ac26b5208b"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","43e915be59e9f685277811419538717a"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","89c428a940cf8ee56b3930e551e98940"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","a93be6be20161b205864a6c1ac71a958"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","5d38efd74622d8316f620fb8876d8ad7"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","cd0e04ad723855d13b23f79aee7d449f"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","21ae25f8644c905792393c0756bc2544"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","cecf80a2201060ce547a7524277689d3"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","73f88022567db74f6fea85cac303d666"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","293fa7d58d98a340e9d6455c6fb5bb4a"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","e3a56e3228cd36a4f8edc6c1e9ecc9b0"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","866381c19b08e1a4a8a25d34b3710f89"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","80edf4670aff0b41632a4439ed489cff"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","5bdd75e99a0a9fd1ae41ad5f6795eb5f"],["E:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","86d0a22c70a162bd501594e903aaa988"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","d19d7cb19fbcd563fba855a6aaffae48"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","e60ba40e8aee0a1bc36df31686f907ff"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","77f74bcae45c7786b4c030c45474d5c7"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","a009257448bc276c2edb73487ad7b3c8"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","3cc70f77cfbfc6a210f5e640b339e69e"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","0ab485f21a83864d97723d802fb00415"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","8a3f3722bc2551dc394e73e82b10bf82"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","936aeb49d3dc6989477fc06722c14f48"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","0ddbd6cff8e1955e4fadcd441f748a54"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","9a5e8386b054bb26abfb7bf963199e36"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","79e2dc6f2b522dc60123a7ec528327e7"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","54bd41366c32a3fd11999da4d3975e22"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","6bd33ccb38967a265799198bab26d4c3"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","4f0d1e0fe0baebfc2a0e36a91e18fcef"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","20102f93b34fde75cc980a7070eb063d"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","40a862542220ac83c7e4246c2c266bb0"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","8d869af9ebee8c22409412071b88819f"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","4541f3696e4050d430dfbd70fef7b186"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","4f8815d1ae612a64baeadf33d8f4c410"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","a1b4c3e3c673d13eef1518d646105f72"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","66f7a1bc705013ca34ffe4a23f4543bb"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","8889709e7ccd9c8a2a00a227c635d838"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","dcde701a35c1a9b1242850f73f98f89a"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","68f054fe2e709094a161eb18107427c0"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","7476249ea2a00aca4e3576a53dfc8555"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","cb1662cf964f4587486869fe1ea8f5e2"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","87f015a429be1d7b756fec88ae4eb07f"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","441e7bf809824038e405f121d6ab2826"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","b32ad08d5c9e977d58a1d7e90a5b312f"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","3f49841fda1bce4acd4857d9c1759a4c"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","15a8c1ab1df1fc7933f69bd06797c0b5"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","89d24ff87a994c5e033956377a16cf56"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","64647a96405a63efccb611c90fdc1c91"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","7d1ff84e1c225059fafc15fcb1e32546"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","b9020bd68a1f83dac10a1ec261aa6b1d"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","c47765b2318c918f771e8b646a8242df"],["E:/qinhao/hexo/public/ByteDanceVerify.html","05cad938b3a31fd710055b0acd3e23e4"],["E:/qinhao/hexo/public/about/index.html","f8dd3685a071111b8dfa0cb741126398"],["E:/qinhao/hexo/public/archives/2020/02/index.html","f82f080b6fbfe2b408a44778771c81a7"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","c8bc483a6ea8368841c4620b205ef4f6"],["E:/qinhao/hexo/public/archives/2020/03/index.html","53c98f8890013a17dfe36817f2a97463"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","a23a4a76e4142d42ef7a19d9ba99471c"],["E:/qinhao/hexo/public/archives/2020/04/index.html","413770625c5f0dd99c1bd8508fc2d766"],["E:/qinhao/hexo/public/archives/2020/05/index.html","619fc80d23fe724efe93b613781424a4"],["E:/qinhao/hexo/public/archives/2020/06/index.html","de154d2fe52337ed357deb2ea8a15251"],["E:/qinhao/hexo/public/archives/2020/07/index.html","b1b79bf3c1b78078555c34c666bbcfc5"],["E:/qinhao/hexo/public/archives/2020/08/index.html","765aeca371ff3ed4fc0108a33e72f7d2"],["E:/qinhao/hexo/public/archives/2020/10/index.html","a716358d7be97a32afd3c195e27823e3"],["E:/qinhao/hexo/public/archives/2020/11/index.html","167e1fabf7999d517856dd7b9f001402"],["E:/qinhao/hexo/public/archives/2020/index.html","e255a99bb1005cc4c303fcff00a35711"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","69c7a7ee36536fa01d9a0e9287dd29c4"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","93c8b4bddf1ebf9ce069769e179c6133"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","8eadc2ea11a611ebeab414c98edf5fa3"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","a6a4ef78490db8ff29c704415f77d591"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","383d58f7800c73488235c169d7826a89"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","4e993ae4769ec63ee7e489e4ea4d4d02"],["E:/qinhao/hexo/public/archives/index.html","9070976343f746e2ee1a607232d6b005"],["E:/qinhao/hexo/public/archives/page/2/index.html","daa2aaeec0bfbac98c29bf09e2d60c0b"],["E:/qinhao/hexo/public/archives/page/3/index.html","9070976343f746e2ee1a607232d6b005"],["E:/qinhao/hexo/public/archives/page/4/index.html","daa2aaeec0bfbac98c29bf09e2d60c0b"],["E:/qinhao/hexo/public/archives/page/5/index.html","daa2aaeec0bfbac98c29bf09e2d60c0b"],["E:/qinhao/hexo/public/archives/page/6/index.html","daa2aaeec0bfbac98c29bf09e2d60c0b"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/Java/index.html","e5bea70139ea9775f8356cb88f14d0a7"],["E:/qinhao/hexo/public/categories/Linux/index.html","bf480e3687a830b2c328017016126072"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","8cfb305c84714b807232590e38ce47e1"],["E:/qinhao/hexo/public/categories/Python/index.html","b512625b0e1694795d5e202c329a600b"],["E:/qinhao/hexo/public/categories/交换机/index.html","69d774f0648a5835317dd1357b8fdcb1"],["E:/qinhao/hexo/public/categories/华为认证/index.html","84fb33a5b1aabeaf27c76f4c575e5612"],["E:/qinhao/hexo/public/categories/小技巧/index.html","f495d575d7ac9b8094b7bbf51277e1ea"],["E:/qinhao/hexo/public/categories/数据库/index.html","d44992bac14df92834b8fef1e55548ad"],["E:/qinhao/hexo/public/categories/服务器/index.html","31825edbc1c861246b00ab841b33a266"],["E:/qinhao/hexo/public/categories/网络安全/index.html","28176aa90ef0480da0e704490f110c05"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","98bdc25b31cbd0f5bd0445d6e285c61d"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","38c49be9f71a755e3b42106ed55d78a0"],["E:/qinhao/hexo/public/categories/软件破解/index.html","fbdcb4038ec42ab5af0a7b251e4ea85c"],["E:/qinhao/hexo/public/categories/通信技术/index.html","51496fa424d028a12e9b7e1ef6c7ccfd"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","d131ca2a30af52ae9a82b84e499389ac"],["E:/qinhao/hexo/public/category/index.html","fb290469ee31d8441f9b113eddad9d2e"],["E:/qinhao/hexo/public/css/style.css","940a599036b2a40f1cda8deba1fa0555"],["E:/qinhao/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["E:/qinhao/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["E:/qinhao/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/friends/index.html","9958c64d482fbfe1ec0dcd18dc2f97ed"],["E:/qinhao/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["E:/qinhao/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["E:/qinhao/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["E:/qinhao/hexo/public/index.html","62514c0070ab0fddaf3d210436314c97"],["E:/qinhao/hexo/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["E:/qinhao/hexo/public/js/app.js","804e218b8d00f3db3d393a7811cc0f3c"],["E:/qinhao/hexo/public/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["E:/qinhao/hexo/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["E:/qinhao/hexo/public/mylist/index.html","cf8d4f7eafb6d3aafd0c13a9a45b410e"],["E:/qinhao/hexo/public/page/2/index.html","0deb25daec77745d02bbd8105ce234c3"],["E:/qinhao/hexo/public/page/3/index.html","e311feebd0aa6f633a519bff0bab127e"],["E:/qinhao/hexo/public/page/4/index.html","348ede263a8f78c92ccd481796206bd3"],["E:/qinhao/hexo/public/page/5/index.html","62f5e9afb70b410e099c797f4e903e86"],["E:/qinhao/hexo/public/page/6/index.html","18297e58dbba8d64f88aa34fdf1ce829"],["E:/qinhao/hexo/public/sw-register.js","379a7f72ae1198a01f8dc327feb220fb"],["E:/qinhao/hexo/public/sw.js","64e5b88b72ef1a1f1f52ba9e45c30839"],["E:/qinhao/hexo/public/tags/IIS/index.html","dcb5ad06839e3e75f72dc3534f660d0b"],["E:/qinhao/hexo/public/tags/MySQL/index.html","838d6c976190aacc7af5a770fe3fd3cb"],["E:/qinhao/hexo/public/tags/Photoshop/index.html","a94a933fbe5b30f0713eeb39442f103f"],["E:/qinhao/hexo/public/tags/VPN/index.html","6edcf0a9ce4047d7207cfef3978ec3d0"],["E:/qinhao/hexo/public/tags/Web服务器/index.html","4785119b894b9d3347e1a2dfc7ad851d"],["E:/qinhao/hexo/public/tags/index.html","c6a88e60c7eb5e07fa6cd7dadbf3a1dc"],["E:/qinhao/hexo/public/tags/交换机/index.html","bbc786c380bef1dfe6c512c0e9e1db02"],["E:/qinhao/hexo/public/tags/图像处理/index.html","70b49c4eff18d830c8e4937f7e7cfc70"],["E:/qinhao/hexo/public/tags/基础网络/index.html","9263dc497d107b10ad6c6133f9bfc2e5"],["E:/qinhao/hexo/public/tags/思科/index.html","f7fa6423948f2e41d19824371554eabf"],["E:/qinhao/hexo/public/tags/思科GRE/index.html","520a79c3f1dab251fe0c21d3ed6d4a97"],["E:/qinhao/hexo/public/tags/数据库/index.html","47d8153e21b38a50add86c7e4b7b1b9c"],["E:/qinhao/hexo/public/tags/无线技术/index.html","58314a6e97e67c645acc50f7e3c55a73"],["E:/qinhao/hexo/public/tags/无线技术/page/2/index.html","73750a74b53ddef3f67f6d3b5e3bc96f"],["E:/qinhao/hexo/public/tags/系统安装/index.html","2ea78ca862f68ecb7c40d7f6df5d3257"],["E:/qinhao/hexo/public/tags/网络安全/index.html","2666fceb4a915aaaf355d7f69ac2170a"],["E:/qinhao/hexo/public/tags/网络技术/index.html","4bf2cd77f2e4fc91efc7539b6cff38e6"],["E:/qinhao/hexo/public/tags/计算机三级/index.html","1645d10c7ef820b0be01aa8223f992b7"],["E:/qinhao/hexo/public/tags/路由器/index.html","35192643d0149234cabe5b5bfac6893a"],["E:/qinhao/hexo/public/tags/软考/index.html","b5960b24ca41573d5ebeafc133c304df"],["E:/qinhao/hexo/public/tags/通信原理/index.html","577bf778b02d1b5f07e0a975f09729ee"],["E:/qinhao/hexo/public/tags/通信原理/page/2/index.html","72c587dd111ea2cbdd8a91f3385794e3"],["E:/qinhao/hexo/public/tags/通信技术/index.html","93d794498999458c1182e049dee8e16e"],["E:/qinhao/hexo/public/tags/通信技术/page/2/index.html","34dcf1c1ea6304a9b5f5a0d09ce9e2a3"]];
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







