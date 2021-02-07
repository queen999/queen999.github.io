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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","72027881619e4f25903fa0d406f07930"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","11918ed31173c802d444b200508b9835"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","cc42f0512a1de747474c204458787c77"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","e5f3bc2dd0ea3127605af898fe2f2502"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","a3ed6ec123fd6b40b72ab97f61894a92"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","bd47911bc08e29e9144d15c3d6959974"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","046f0177222c1869db03f53f0e0c060d"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","140db66970c5986cff301e3a68507524"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","e88841f3bb6f41a8ca3e8658a3deec88"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","7e90a19e847a5bac58b2851d1bc2fa70"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","db096481e0a3cd30ba2156dacfa34f33"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","c6f5df66f6498fe0efd60f1e07b72c35"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","9cc578588b56121d39634db86092b455"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","d02002c782baac9af3a18ad9cc5ea375"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","f5154529172419f741cd93cea1568f6b"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","e317e86d7a6a4f68b820400f6b26443f"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","1573e5960256ca490b24db23fb4d69e0"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","dec4f4d2a2b845b275adbb53de217c25"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","5d30c1f452ea3e4885da82badb5983a4"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","d49d8ae1f59dff50cb3236ecc8714e91"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","98ddd4adbdf16c18b574ac6f0ab49c62"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","4a2a5a700107f20da1ea70191db7a20c"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","741afe67642d6a90e2924d18eccd512e"],["E:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","31a63f14018d929132f12fc1e640abd9"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","54cda7233d681c6bf9ab03a2256da5d6"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","72bd8d7fb658427e3b766d6ab5d849af"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","923d89f63348d9a3dbc05a8929a0aee6"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","b62de96813359647f45e28cc565de491"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","4c578457d79116c12cfe20049d9e39e4"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","5114c604b6a85ce76b7674e9881b63ef"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","ef8d6d0fc0dc93b146999488500b2a3f"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","64a26d0336c0307716644bb88064967f"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","f26d1bd8ca31eb0b9456de2f98aa937b"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","420783d6ae0cd6cdd5e664c8e1c12e47"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","97258dd73909b34fd22b451c1bead677"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","08034b07d65aa58b7eda1f333f6480ac"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","ec8824472cef67588d955a0c8fccc89f"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","799d1598062e05f1916fe68e0d1352cb"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","e99564f936e90e43af34ff1593861e28"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","e242dee6a10c57afe678c2169086b82d"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","cea612ff2fe12517e6dd7e4edde768b4"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","3daeeca56aa3799279b2f55d3f9f32e2"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","11b214ea8ad5a8902af96ece69eefcb9"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","8b3722ba4b2c0b31ef77e8041ef78dd0"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","df3bc76437eabab6566ba55f0c4b28fc"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","1b1c4a147cd9306e2f5505f5e68acd0f"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","2b7e5f931af90f996c4c8492b1113403"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","8f5586116e6fa82bc13366686113f246"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","39dcde2f084e6e882d58c870fa872006"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","9f646d1ce93f98a17f3f70b95e2af758"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","d8db2b9c4bf97c18692d861e25053aac"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","97dd0a1d228b61393285f8843e11d12c"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","a9993791d40d1e38f9c531f8a62a0374"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","1a064f805e76d25cf4f7017d4665c935"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","7771cc3c91b4c1ca0fb47d5d2b20466f"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","de30cd27ca9825bcfa6aae39be685824"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","a2c2ee9d47a13493b855ad4c59fd06ea"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","7b5919b840fbe3b99135202ed2b35c8d"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","51077139f40c14dce0322964a88eb0af"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","f9c7b90c1a0cd781cc6d8e7c93314f49"],["E:/qinhao/hexo/public/2020/12/15/C_basic/index.html","ccfb9238818076fc59cad94a4b13bb66"],["E:/qinhao/hexo/public/ByteDanceVerify.html","66b87f9d84a61bcc64dd09a91d0a8aeb"],["E:/qinhao/hexo/public/about/index.html","db9ef327ddd28ef9ac643ac3d56923cc"],["E:/qinhao/hexo/public/archives/2020/02/index.html","bd41be24f504fdef7a4a10c701f591d0"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","589f669a06c820b71dcdfe7132870c5f"],["E:/qinhao/hexo/public/archives/2020/03/index.html","f7cb71c23dca4328403740cb78ceb26e"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","d339cb4e816308671bf0d49e30a4208a"],["E:/qinhao/hexo/public/archives/2020/04/index.html","c21868256e454aff68f6761bdc500c24"],["E:/qinhao/hexo/public/archives/2020/05/index.html","35183d36712a928de6c4531b2b06d555"],["E:/qinhao/hexo/public/archives/2020/06/index.html","d82e19c38f2fd57b5c1c08b1adf9d89c"],["E:/qinhao/hexo/public/archives/2020/07/index.html","5dcc4330849769cad9703e1b75989013"],["E:/qinhao/hexo/public/archives/2020/08/index.html","a8b908598f513ba0ea61ecc0e258db84"],["E:/qinhao/hexo/public/archives/2020/10/index.html","175cff0b3059691612b640c8eb0d537c"],["E:/qinhao/hexo/public/archives/2020/11/index.html","8cec5a06380ec392484999949085b435"],["E:/qinhao/hexo/public/archives/2020/12/index.html","91bd1cd06c2dd173947e7b6d4eea7358"],["E:/qinhao/hexo/public/archives/2020/index.html","25b9cb51070d4bf42412769e6d7869d0"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","1f513acdb7c6117cb39227e1523684ca"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","e8a05a7d1bd8d15e09880515831961a3"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","a7c4ebdfdfdceb14deb07d86121c4f41"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","ca93ee556cb4da22d1338c76ee07e4f2"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","c7b9d136566fc308be74f651c75c0d29"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","853d4cc5020e7e1b9499fe296fddd68a"],["E:/qinhao/hexo/public/archives/index.html","5f4e16a8ec6ce5e0e55bc0df12bf6fb0"],["E:/qinhao/hexo/public/archives/page/2/index.html","5ad3c7ec8bde9b510d833447883eff3a"],["E:/qinhao/hexo/public/archives/page/3/index.html","5f4e16a8ec6ce5e0e55bc0df12bf6fb0"],["E:/qinhao/hexo/public/archives/page/4/index.html","5ad3c7ec8bde9b510d833447883eff3a"],["E:/qinhao/hexo/public/archives/page/5/index.html","5ad3c7ec8bde9b510d833447883eff3a"],["E:/qinhao/hexo/public/archives/page/6/index.html","5ad3c7ec8bde9b510d833447883eff3a"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/C语言/index.html","ac903a5aaaaa11813cbe8f0b095042fc"],["E:/qinhao/hexo/public/categories/Java/index.html","bf95272146b405983e1118cb78a87f82"],["E:/qinhao/hexo/public/categories/Linux/index.html","3e9737ad7b7313c39480fb67c5bca70e"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","672bc590dfa182e04e82f0cc3f72b0d7"],["E:/qinhao/hexo/public/categories/Python/index.html","676b5f863c26aa5c368a47cc9416d631"],["E:/qinhao/hexo/public/categories/交换机/index.html","ce1c48a26b35612ad38568fd3b935a0f"],["E:/qinhao/hexo/public/categories/华为认证/index.html","f1926e3274c87d3b191f9a223bbfa423"],["E:/qinhao/hexo/public/categories/小技巧/index.html","0b047dcd1690795b2c7887e70b935fb6"],["E:/qinhao/hexo/public/categories/数据库/index.html","d7f2edaefa0d8fa2f49a9c42e868b7bb"],["E:/qinhao/hexo/public/categories/服务器/index.html","eba95036287145a0046ed08c83fe2051"],["E:/qinhao/hexo/public/categories/网络安全/index.html","36b88c2d1e5aee59fc31a56d3259a875"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","7f982e881c81bf8e12f3bdd90a10c92d"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","67c02baf4a8d43ee7b5ae8515311bac9"],["E:/qinhao/hexo/public/categories/软件破解/index.html","32aaf422a5a46b3ef997671b261bc152"],["E:/qinhao/hexo/public/categories/通信技术/index.html","24729cf5ceed40e72713ea660c997bf6"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","339b5f1da3fb36933ca39bb208aac43c"],["E:/qinhao/hexo/public/category/index.html","66193db0baec9a3d836f2a900496e1db"],["E:/qinhao/hexo/public/css/style.css","940a599036b2a40f1cda8deba1fa0555"],["E:/qinhao/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["E:/qinhao/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["E:/qinhao/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["E:/qinhao/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["E:/qinhao/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["E:/qinhao/hexo/public/index.html","b1c70b652cc5ece1d3dd12d19eef5645"],["E:/qinhao/hexo/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["E:/qinhao/hexo/public/js/app.js","804e218b8d00f3db3d393a7811cc0f3c"],["E:/qinhao/hexo/public/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["E:/qinhao/hexo/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["E:/qinhao/hexo/public/mylist/index.html","a40eb3f246458030861d64cdf751bd6f"],["E:/qinhao/hexo/public/page/2/index.html","3d90b56f89adbe8c4f322d1a3bf5ff1d"],["E:/qinhao/hexo/public/page/3/index.html","a09417e08bc69b41a97b2bb7df88bc43"],["E:/qinhao/hexo/public/page/4/index.html","06c29ab7efc74ec790dd27654c3ac588"],["E:/qinhao/hexo/public/page/5/index.html","6d6c782e216cf0507cf4ba80d8cb22b2"],["E:/qinhao/hexo/public/page/6/index.html","df6ed6e76b0a0bfe3d938a6b9b9e59a7"],["E:/qinhao/hexo/public/sw-register.js","ab64498e82eba07d16ea7097ac2bf57d"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/tags/IIS/index.html","b845c43b2c0bb3233a55edb508e897ee"],["E:/qinhao/hexo/public/tags/MySQL/index.html","139ab99a9e7e9dd5644c3a592b167adb"],["E:/qinhao/hexo/public/tags/Photoshop/index.html","98fbe227ff854517d27fad00446a3915"],["E:/qinhao/hexo/public/tags/VPN/index.html","3d38327a569b569843e1c4424ab78bbe"],["E:/qinhao/hexo/public/tags/Web服务器/index.html","cf63ed34d0069e8ccd6fd3ad316a9140"],["E:/qinhao/hexo/public/tags/index.html","aa3e0a2cbe1a3fcccbe2074cb6bc7345"],["E:/qinhao/hexo/public/tags/交换机/index.html","508539250f673c02f8c00aa79b4f8671"],["E:/qinhao/hexo/public/tags/图像处理/index.html","b5a0a6fb3cf7d9d009f7bd4d870c6dbb"],["E:/qinhao/hexo/public/tags/基础网络/index.html","0f6727a0db00f5e03bd243852fe4fc4b"],["E:/qinhao/hexo/public/tags/思科/index.html","a91bb4b2c3b0ba2a0ab4596cff88b524"],["E:/qinhao/hexo/public/tags/思科GRE/index.html","9a48a0375b8347fe4c9e919426e19252"],["E:/qinhao/hexo/public/tags/数据库/index.html","4707a5a1e824414da0440088a8aa3b4b"],["E:/qinhao/hexo/public/tags/无线技术/index.html","3dc550c5bacfa3257bf923bbbbb71baf"],["E:/qinhao/hexo/public/tags/无线技术/page/2/index.html","863f9fec64a39c9ecc76ba223e20a453"],["E:/qinhao/hexo/public/tags/系统安装/index.html","a7853a1d3eae04c73023b221e4bcd2d8"],["E:/qinhao/hexo/public/tags/网络安全/index.html","2ea23696d7ec7d1c489230203b695513"],["E:/qinhao/hexo/public/tags/网络技术/index.html","4cbccca1b81ba5b6773d72b14d47eba0"],["E:/qinhao/hexo/public/tags/计算机三级/index.html","34036c875766c3fbecd6761be7c75078"],["E:/qinhao/hexo/public/tags/路由器/index.html","727288b834bf1446968b2694b0d9a121"],["E:/qinhao/hexo/public/tags/软考/index.html","89237c8281fe0672fce0c90809f6216f"],["E:/qinhao/hexo/public/tags/通信原理/index.html","a6e97f9f369eac39e2783007594826e4"],["E:/qinhao/hexo/public/tags/通信原理/page/2/index.html","f853f95944708beff6d7dfbcfa62f749"],["E:/qinhao/hexo/public/tags/通信技术/index.html","074c394c5b6e425f51fb620dc522c4ce"],["E:/qinhao/hexo/public/tags/通信技术/page/2/index.html","b14ce9f7a7991afb129a665b576dea2b"]];
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







