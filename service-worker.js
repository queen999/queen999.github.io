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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","7f18149f3d2dc8c27b95228ca383a607"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","32036e74a62d74993913f6da47b3a788"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","4cbec00b79c46a1f085cf7ef4858c3e5"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","5e502620a7d048fbb0805f1548af89a8"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","69824d2fe43bda698e0c91a92ea320ce"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","62b8d01675fe39c0d81fc8828e9a2bf2"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","bb82b39b66920bfb7cc2e85a70f8ba32"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","302274f98297fdb419efd495757016fb"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","866300bb0fd49409cf819ee5f69dff33"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","d31d98e5c705927d5886f5b104354280"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","c7ec3d1cc8ee8fc70f611cd59dbe667e"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","2721433e9ea8342c9a2869d410bacab2"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","67105ee4b0cd8c72ec1a0edc68b6a081"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","8bbef495cf79f7d05c110eb53fb801a8"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","fcce5076320ea331aa3dde2591c4916e"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","5a68537fae57e3f2cf97bbdd553e9b27"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","4b164b301ab0f6277c315bb6292c50df"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","1978a51cf1af672e783c412b5a847f4a"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","3ea07ebeb1749d856282a67ba54f2434"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","3a5daac24e9e5b96e84b04add24b6536"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","b1e8b4da3d18dfd5d6012eb2ac7cae26"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","9b572287cc1b716f4acbe311002587d6"],["E:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","bea53ac729817983333cc79a2fe0a635"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","0dafcd12f7d2878149d38fdaa3146a39"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","3520f34bc1a9c8afdfcf35775d60f38a"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","7e0ab9839a22e0ba938087b5df9c80d7"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","74708bede9356c438b173e0ef09988bb"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","b245b546f1399fe6a01c36ed91cca402"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","ef72c682c9e48ceb9d7ed651481bcaf2"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","47c41d60f551f208332cd0033e991515"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","50a0765a561f32eda6e50f74071b71d2"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","fadccb0791076c2bd5458ca01e585d3c"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","7fea2d3ee72eae2d35137396494c6832"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","2cd3d101644113f50cea5eb8798c32d7"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","29418e8d3b351e8361787c54a995e8f3"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","8265119e91844ffbb509eb64896660ce"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","f535b6232ff9ddc17388725d36a59d4a"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","98a123ad9e0215bc4f2c6206b8ea3aeb"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","f08dc54f7953c8d9191c76035121b1e7"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","914cdc23ce0d5306c8e1262be2013244"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","a3fa581b773b68b8614ca35a7dda3471"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","c0d38b07d27125fd707477856997ece4"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","9ce7b744f8dc1bd975bf491e5f56b3b7"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","5e95806a9c2fae6bc0fdafbda4485a86"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","1c63ea44e2affcb73343589b72e1bf6d"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","14a53da1c8b798f495889ee18d72d459"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","a05758e803ad572839ad4e047855f9d7"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","df45b3c8a42c6c290404546094037b33"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","49384b06410573305ce038aa563b0e89"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","65399720a068293d02e0bbac6fcc6b12"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","ad56c5d5e02e6061e3d2d3e98284c6ea"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","ecffd8483fe35301de18d357073b611f"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","044494ba339f49193f342d6f15855511"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","f10055b37590641de541dba9905b1f2d"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","767b7a1a4e2d178e2954c80e23f4ea0b"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","c492d81a406d70b443ffb7ad4585a7de"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","632ceb9bed7fa02f2db16af72f6b1322"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","6180bd0a7d9c465ddabf09b8319ae2cd"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","773e20c250503fc189ce07e38378e7ef"],["E:/qinhao/hexo/public/2020/12/15/C_basic/index.html","cecf7e0ce0c10a37107c353f023da259"],["E:/qinhao/hexo/public/ByteDanceVerify.html","d170a41c852b01999168ab2501afb404"],["E:/qinhao/hexo/public/about/index.html","cc42ca7dfbea6dbb3bf748d3e45ee8d2"],["E:/qinhao/hexo/public/archives/2020/02/index.html","8a80ae024ef20bd98b10cfa133084c50"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","c25b2a14de3aa4b9eac5f7da79827101"],["E:/qinhao/hexo/public/archives/2020/03/index.html","4b7be1129cbe903715ed5a3d600012a0"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","96c9b101d32c20d12264b33af81724f6"],["E:/qinhao/hexo/public/archives/2020/04/index.html","8f10781ad5fb46a3ce3048ba2c6ce9ca"],["E:/qinhao/hexo/public/archives/2020/05/index.html","8c4f573f1eda43cbb30608fb958d9de3"],["E:/qinhao/hexo/public/archives/2020/06/index.html","16bba0fa8eefc5b944bfc54e2afac0fb"],["E:/qinhao/hexo/public/archives/2020/07/index.html","52a60e8961a5779276833ff00ba637cd"],["E:/qinhao/hexo/public/archives/2020/08/index.html","e01c2930fe93df2b12b7eb0702379123"],["E:/qinhao/hexo/public/archives/2020/10/index.html","89aeecd54267c4a8298496e0ace62699"],["E:/qinhao/hexo/public/archives/2020/11/index.html","e72b3e50e0633a1060edfbc83ad2be40"],["E:/qinhao/hexo/public/archives/2020/12/index.html","90a3952daa352ba398e287a75b67c419"],["E:/qinhao/hexo/public/archives/2020/index.html","ea5051a3763589545c2754fe67eb23bf"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","2fedbdf2722efb83b6a7e613ebf414ac"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","a14c05f5af275dce92d744dd05125a45"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","60a3f9135040df323eae4a964a236083"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","fdd8f375fce001483a44048e0aa4650c"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","47a4a44075ed164d2241b4a5b3f2df25"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","5c40b9d2ddab88f3c263437445a7cf52"],["E:/qinhao/hexo/public/archives/index.html","130f453a346d33ce1f89f580c6aecc4e"],["E:/qinhao/hexo/public/archives/page/2/index.html","a90e2ffcf54b54374bb43ef5df3441f7"],["E:/qinhao/hexo/public/archives/page/3/index.html","130f453a346d33ce1f89f580c6aecc4e"],["E:/qinhao/hexo/public/archives/page/4/index.html","a90e2ffcf54b54374bb43ef5df3441f7"],["E:/qinhao/hexo/public/archives/page/5/index.html","a90e2ffcf54b54374bb43ef5df3441f7"],["E:/qinhao/hexo/public/archives/page/6/index.html","a90e2ffcf54b54374bb43ef5df3441f7"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/C语言/index.html","c86387b0a1253c0394f8ba3c1feb7d8b"],["E:/qinhao/hexo/public/categories/Java/index.html","7d46e55d28599cc3be1b9e7d266032ba"],["E:/qinhao/hexo/public/categories/Linux/index.html","d8e55a545c706fd3c53462999ae45fa8"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","48ab30c03d2f489cfdb226aae92e0fbe"],["E:/qinhao/hexo/public/categories/Python/index.html","7c97eff70377a4a3f323f616bc4d1957"],["E:/qinhao/hexo/public/categories/交换机/index.html","45e58fbc90521fc5207057ea7bf608f7"],["E:/qinhao/hexo/public/categories/华为认证/index.html","a2d9356746529f7bb470d5f8b9d64f5d"],["E:/qinhao/hexo/public/categories/小技巧/index.html","55c2f94306eb1d2c8835f3007e21d397"],["E:/qinhao/hexo/public/categories/数据库/index.html","4ed08d40a346d92527cdb869228b956f"],["E:/qinhao/hexo/public/categories/服务器/index.html","3e053d5c3291c8461d1faf0dd18e0160"],["E:/qinhao/hexo/public/categories/网络安全/index.html","3e326d7d7796398f7e304ae277f16eae"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","297b5ff1da6d913ffda5a06f165e18be"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","ce81edcde5727dd623503c4baf867aee"],["E:/qinhao/hexo/public/categories/软件破解/index.html","f1f28f7ad6884ce8227c3a78334ce488"],["E:/qinhao/hexo/public/categories/通信技术/index.html","11fbb04b5442c6d6346607b8d95511ce"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","88ee9f8c41068728c17ea13dbb97b12c"],["E:/qinhao/hexo/public/category/index.html","476db8e25773f59f66d8b1c2c02aaf87"],["E:/qinhao/hexo/public/css/style.css","9c038efc12abdd45388a04a7d177a957"],["E:/qinhao/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["E:/qinhao/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["E:/qinhao/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/friends/index.html","778b9fcb9d210bf4d5672c8ce2851211"],["E:/qinhao/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["E:/qinhao/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["E:/qinhao/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["E:/qinhao/hexo/public/index.html","bca95868f7e1fef4fb68ea898f0b21b4"],["E:/qinhao/hexo/public/js/aplayer.js","a0a8f225cab4df42a6e0164b45d7641a"],["E:/qinhao/hexo/public/js/app.js","60b11cc8c0c85ca294cd3ff2e82096ad"],["E:/qinhao/hexo/public/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["E:/qinhao/hexo/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["E:/qinhao/hexo/public/mylist/index.html","64370f0130f6282f4beb382f4ce6eb26"],["E:/qinhao/hexo/public/page/2/index.html","b8d6fecceeb7b32969b5c948a313f64e"],["E:/qinhao/hexo/public/page/3/index.html","c076f9225a4dde692c07a6e04edcb3b2"],["E:/qinhao/hexo/public/page/4/index.html","14fe8792a835fd9d41db799c64b7815b"],["E:/qinhao/hexo/public/page/5/index.html","a0ff3d6f375b33b7f0cc72944bbf5612"],["E:/qinhao/hexo/public/page/6/index.html","a83b1e45d6dfe9b6ab3ec2bd8b6180cf"],["E:/qinhao/hexo/public/sw-register.js","725057927c8274c0ca55df3e0302ea50"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/tags/IIS/index.html","94260aead3663c40ce421c77435257b3"],["E:/qinhao/hexo/public/tags/MySQL/index.html","1eb6fa8e679c57516628034c8a3ab1cb"],["E:/qinhao/hexo/public/tags/Photoshop/index.html","2e1583a7db46f0f3528c5f8e8198524f"],["E:/qinhao/hexo/public/tags/VPN/index.html","8d2914453c7ccee361251b03ef5adcab"],["E:/qinhao/hexo/public/tags/Web服务器/index.html","abf2bc170ce88ccb811eb367dfc9cb79"],["E:/qinhao/hexo/public/tags/index.html","5ad304f743aa29b32bd545ca0789261e"],["E:/qinhao/hexo/public/tags/交换机/index.html","3fb7b183b84b4543f727315502572442"],["E:/qinhao/hexo/public/tags/图像处理/index.html","cfded063499ff624c2d08cc12f27a425"],["E:/qinhao/hexo/public/tags/基础网络/index.html","5469328cefc6d9f4ba00c6e76d88f1f1"],["E:/qinhao/hexo/public/tags/思科/index.html","894cacaaaf96e3a242e4eaf88b99fb43"],["E:/qinhao/hexo/public/tags/思科GRE/index.html","47802c31c65b6118b261fd8f0627f646"],["E:/qinhao/hexo/public/tags/数据库/index.html","aafea423383e0db388753208a85e3d80"],["E:/qinhao/hexo/public/tags/无线技术/index.html","024927148c911776cfff4cbb4fcf0fb0"],["E:/qinhao/hexo/public/tags/无线技术/page/2/index.html","31d76db0dcf1116860b7ca45ecaf9549"],["E:/qinhao/hexo/public/tags/系统安装/index.html","86bff6e203fc8f1d1680f6205c7d99ec"],["E:/qinhao/hexo/public/tags/网络安全/index.html","5561ccb9995223b4bedadcd0a9ebbc38"],["E:/qinhao/hexo/public/tags/网络技术/index.html","5fe8cf22071d53cc44065673bc793469"],["E:/qinhao/hexo/public/tags/计算机三级/index.html","6566bc67a17f8a13fcc49b0b1ca29f9f"],["E:/qinhao/hexo/public/tags/路由器/index.html","7202a8222843b625f0ab86e297c53c01"],["E:/qinhao/hexo/public/tags/软考/index.html","3a501210e89a2d0d6f7e4b1267a91ced"],["E:/qinhao/hexo/public/tags/通信原理/index.html","cd3b1c6086fbd17f8566bf9452a4dd72"],["E:/qinhao/hexo/public/tags/通信原理/page/2/index.html","02576dbf1b1a6c2ac83e4c994adaf5c5"],["E:/qinhao/hexo/public/tags/通信技术/index.html","0e210b5569a9996afd4d467418190be0"],["E:/qinhao/hexo/public/tags/通信技术/page/2/index.html","fb585e911a0b925841f114bd8b91d5e0"]];
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







