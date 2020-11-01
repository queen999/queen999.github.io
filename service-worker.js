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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","e2c868da9a0ce9c868df95e965913a0f"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","b6b0047398f902bb91348ccb74a48e47"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","bc51925a881810b6c4da29ad58eb85d4"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","83a53fcbf3208166e15161d2653a9622"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","62b57ffe27b586295df93cbd8a41b809"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","88cb85103d6e4e76eefaa2a8c9af5d5c"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","a50cdee6e9b984cfdb3ea772dec51c68"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","d19ad14a6ccb544cd8de65dad997eccb"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","03c2cdd42721caf4177eb8ac26b5208b"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","43e915be59e9f685277811419538717a"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","89c428a940cf8ee56b3930e551e98940"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","a93be6be20161b205864a6c1ac71a958"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","5d38efd74622d8316f620fb8876d8ad7"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","cd0e04ad723855d13b23f79aee7d449f"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","21ae25f8644c905792393c0756bc2544"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","cecf80a2201060ce547a7524277689d3"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","73f88022567db74f6fea85cac303d666"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","293fa7d58d98a340e9d6455c6fb5bb4a"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","e3a56e3228cd36a4f8edc6c1e9ecc9b0"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","866381c19b08e1a4a8a25d34b3710f89"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","80edf4670aff0b41632a4439ed489cff"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","5bdd75e99a0a9fd1ae41ad5f6795eb5f"],["E:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","86d0a22c70a162bd501594e903aaa988"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","d19d7cb19fbcd563fba855a6aaffae48"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","e60ba40e8aee0a1bc36df31686f907ff"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","77f74bcae45c7786b4c030c45474d5c7"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","a009257448bc276c2edb73487ad7b3c8"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","3cc70f77cfbfc6a210f5e640b339e69e"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","0ab485f21a83864d97723d802fb00415"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","8a3f3722bc2551dc394e73e82b10bf82"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","936aeb49d3dc6989477fc06722c14f48"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","0ddbd6cff8e1955e4fadcd441f748a54"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","9a5e8386b054bb26abfb7bf963199e36"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","79e2dc6f2b522dc60123a7ec528327e7"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","54bd41366c32a3fd11999da4d3975e22"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","6bd33ccb38967a265799198bab26d4c3"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","4f0d1e0fe0baebfc2a0e36a91e18fcef"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","20102f93b34fde75cc980a7070eb063d"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","40a862542220ac83c7e4246c2c266bb0"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","8d869af9ebee8c22409412071b88819f"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","4541f3696e4050d430dfbd70fef7b186"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","4f8815d1ae612a64baeadf33d8f4c410"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","a1b4c3e3c673d13eef1518d646105f72"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","66f7a1bc705013ca34ffe4a23f4543bb"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","8889709e7ccd9c8a2a00a227c635d838"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","dcde701a35c1a9b1242850f73f98f89a"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","68f054fe2e709094a161eb18107427c0"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","7476249ea2a00aca4e3576a53dfc8555"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","cb1662cf964f4587486869fe1ea8f5e2"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","87f015a429be1d7b756fec88ae4eb07f"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","441e7bf809824038e405f121d6ab2826"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","b32ad08d5c9e977d58a1d7e90a5b312f"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","3f49841fda1bce4acd4857d9c1759a4c"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","15a8c1ab1df1fc7933f69bd06797c0b5"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","89d24ff87a994c5e033956377a16cf56"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","64647a96405a63efccb611c90fdc1c91"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","7d1ff84e1c225059fafc15fcb1e32546"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","e0fb055c841a5be25a6a9d9ca18bed11"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","0412e31dbee411f9499c52ee75467cb3"],["E:/qinhao/hexo/public/ByteDanceVerify.html","05cad938b3a31fd710055b0acd3e23e4"],["E:/qinhao/hexo/public/about/index.html","f8dd3685a071111b8dfa0cb741126398"],["E:/qinhao/hexo/public/archives/2020/02/index.html","330c1d5408f2466ad4caf9a0ea04dc12"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","b15530a59db3047c228456368fb7509a"],["E:/qinhao/hexo/public/archives/2020/03/index.html","ec2c5965cadbcfd6f5dad7a593c5d6c0"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","ed1682d71911a1d439b4f4de438b30b3"],["E:/qinhao/hexo/public/archives/2020/04/index.html","ef99bb96ea80797f471df0644af1b4cc"],["E:/qinhao/hexo/public/archives/2020/05/index.html","35e002f6843367c9736301caf9001229"],["E:/qinhao/hexo/public/archives/2020/06/index.html","a924eabd844ded955807edb162f5fd57"],["E:/qinhao/hexo/public/archives/2020/07/index.html","37d596b1712b3879d8cd2e0c7e5ffc95"],["E:/qinhao/hexo/public/archives/2020/08/index.html","3562f7959339cd5122a3fb892f7c6992"],["E:/qinhao/hexo/public/archives/2020/10/index.html","636beb5d82c1885be4b1608f558ecc39"],["E:/qinhao/hexo/public/archives/2020/11/index.html","eccdadb120de1dd80c6703b4d8e08833"],["E:/qinhao/hexo/public/archives/2020/index.html","c246b77c961d5145b18d2e9b85d994f8"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","f0970345aad00c2775dc01049680803b"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","606fcabcf21d1df9831a04bcf1ea5ba1"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","ea64c1e8dc2c5db6d6e4d294facc9d8f"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","d6f6f3ecc204ed7de675162f864d96e8"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","0323e651333774ba9e3822fd21737846"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","4e993ae4769ec63ee7e489e4ea4d4d02"],["E:/qinhao/hexo/public/archives/index.html","cd2758d0652766541d57aa6db5d44cad"],["E:/qinhao/hexo/public/archives/page/2/index.html","675de6fe0942dca5e18d586c34fb88c2"],["E:/qinhao/hexo/public/archives/page/3/index.html","cd2758d0652766541d57aa6db5d44cad"],["E:/qinhao/hexo/public/archives/page/4/index.html","675de6fe0942dca5e18d586c34fb88c2"],["E:/qinhao/hexo/public/archives/page/5/index.html","675de6fe0942dca5e18d586c34fb88c2"],["E:/qinhao/hexo/public/archives/page/6/index.html","675de6fe0942dca5e18d586c34fb88c2"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/Java/index.html","47ae2e3b515816d43a048d8f34c554e8"],["E:/qinhao/hexo/public/categories/Linux/index.html","3f59cbbb263cc64e6b31bbda0826bf4b"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","485eeb8c7e888e2c082b0f00571769e5"],["E:/qinhao/hexo/public/categories/Python/index.html","3c9a97becde46cc6f99c2b1a705a939c"],["E:/qinhao/hexo/public/categories/交换机/index.html","a57f50fbc129896a5157d9c4389e9366"],["E:/qinhao/hexo/public/categories/华为认证/index.html","de7c8d2bd2e932d41f7eb7634d69aaa8"],["E:/qinhao/hexo/public/categories/小技巧/index.html","c831387f27c8dc73c06c42734beba87d"],["E:/qinhao/hexo/public/categories/数据库/index.html","18f54abb4814843f2c433f96df6a27af"],["E:/qinhao/hexo/public/categories/服务器/index.html","0a779d0bef3b9405604616914a51196a"],["E:/qinhao/hexo/public/categories/网络安全/index.html","afc5b17f7025243c118abc6367b32f00"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","cc2f3d7552c9f802e55aa4f320ef9d8a"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","cf067dfc41ac5487ab8e25ff17ed840f"],["E:/qinhao/hexo/public/categories/软件破解/index.html","a069812518ba7c9d079af121f5ee0c03"],["E:/qinhao/hexo/public/categories/通信技术/index.html","27569c85805590b9903b7c786745c421"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","4087158002dbc11652244207cda809bd"],["E:/qinhao/hexo/public/category/index.html","5e6a98bd85b241a0c2d4f130b6fde5bd"],["E:/qinhao/hexo/public/css/style.css","940a599036b2a40f1cda8deba1fa0555"],["E:/qinhao/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["E:/qinhao/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["E:/qinhao/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/friends/index.html","9958c64d482fbfe1ec0dcd18dc2f97ed"],["E:/qinhao/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["E:/qinhao/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["E:/qinhao/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["E:/qinhao/hexo/public/index.html","7bf92e5b7e3e44228a9b23b243a5ab43"],["E:/qinhao/hexo/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["E:/qinhao/hexo/public/js/app.js","804e218b8d00f3db3d393a7811cc0f3c"],["E:/qinhao/hexo/public/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["E:/qinhao/hexo/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["E:/qinhao/hexo/public/mylist/index.html","0d79f8a8d47b6c7dc33abcda8718db5f"],["E:/qinhao/hexo/public/page/2/index.html","46a82e0aa8af7b2025e9325a0a415d35"],["E:/qinhao/hexo/public/page/3/index.html","800815f5e1c29e112fc6e35b8ef64321"],["E:/qinhao/hexo/public/page/4/index.html","e7b1f90b345a0050eea396e960d5bda9"],["E:/qinhao/hexo/public/page/5/index.html","e6baece4e5b5e082200f1eba3d5d2490"],["E:/qinhao/hexo/public/page/6/index.html","35b03543cd01cce64173754b740baa7e"],["E:/qinhao/hexo/public/sw-register.js","f24e1ed036ec305856e5bb2843e689e8"],["E:/qinhao/hexo/public/sw.js","6abc379119bb4c182ce76032a4d916f7"],["E:/qinhao/hexo/public/tags/IIS/index.html","4b3a0a318645e67978a38a56e466e806"],["E:/qinhao/hexo/public/tags/MySQL/index.html","b5465b9c911d44ad80c70ab899956ef2"],["E:/qinhao/hexo/public/tags/Photoshop/index.html","5cbd080cd16b323e51f5d08a5e6c8f04"],["E:/qinhao/hexo/public/tags/VPN/index.html","56ce2c7eb1259a57b7a67d2a0b3a71e6"],["E:/qinhao/hexo/public/tags/Web服务器/index.html","81ba5ccb9b5f9fecca8bc0f0a2677e2f"],["E:/qinhao/hexo/public/tags/index.html","c6a88e60c7eb5e07fa6cd7dadbf3a1dc"],["E:/qinhao/hexo/public/tags/交换机/index.html","5a5a5cf975667e83677d4f8a5c195ff0"],["E:/qinhao/hexo/public/tags/图像处理/index.html","f4c3cc75594e2ea5088dd5617c455983"],["E:/qinhao/hexo/public/tags/基础网络/index.html","8b888554e5159c1114b93d4c27195101"],["E:/qinhao/hexo/public/tags/思科/index.html","7b3e8594c6e4c84512c01bb9ae7197aa"],["E:/qinhao/hexo/public/tags/思科GRE/index.html","5b97d492d461d5a8486e0e27898da201"],["E:/qinhao/hexo/public/tags/数据库/index.html","a9fe19a7c1f0c24f582d6c46d2c207b5"],["E:/qinhao/hexo/public/tags/无线技术/index.html","604edc1f4078a058adec25c39bb25ae5"],["E:/qinhao/hexo/public/tags/无线技术/page/2/index.html","815c95477884defd052896915b28ef81"],["E:/qinhao/hexo/public/tags/系统安装/index.html","f97f8661a3556775080461a04420fabc"],["E:/qinhao/hexo/public/tags/网络安全/index.html","29d47ccaa258423690a386224a624510"],["E:/qinhao/hexo/public/tags/网络技术/index.html","c7665319915a48f64a1d74b3ca1bfcce"],["E:/qinhao/hexo/public/tags/计算机三级/index.html","2f9ccae9f0eb6274b665f30b3209896b"],["E:/qinhao/hexo/public/tags/路由器/index.html","a66464b7949813b47501593686bfd1f4"],["E:/qinhao/hexo/public/tags/软考/index.html","938340ca54b77eadf72ab7f6c020e8a9"],["E:/qinhao/hexo/public/tags/通信原理/index.html","5aeeba23e87fe5b8d3b9bc8da3a3643e"],["E:/qinhao/hexo/public/tags/通信原理/page/2/index.html","5a66e6920b18de56a1c7d1252e313f91"],["E:/qinhao/hexo/public/tags/通信技术/index.html","5f1a65cf624019a7e883f36269185166"],["E:/qinhao/hexo/public/tags/通信技术/page/2/index.html","2edcf58a62f30450ed21d60906209523"]];
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







