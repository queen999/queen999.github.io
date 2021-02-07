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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","413af795ddff4d1ea87803f4700a5745"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","87119d5302b21d0357eb2d27748ab926"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","bcd21e3365bff9914f3721d5333ad8f0"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","75a2abd4d800ccf0246f70c41c9fd4a8"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","437fb7fa78fa1bdc08356f88f12eafd3"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","0fbb989d22ca8b7bb169bfa9005a24b3"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","42a9b8833c0b1a6825a19202c55e39ff"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","996b0cecd21ee00eb54b644a6063e213"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","89b2834f0ce5eadaeed24fb36d0db780"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","649b99fb1c51d14213dd55aafaa1023a"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","24dc2db29ee20bc886e59eaee686fe95"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","90557e1b0e9de9ec1905f66e07d02470"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","495b49ca163034ce83d973a300e3490b"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","02d540af125df24fda1efb14a3ed2178"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","9ac09d2b544d7e9ed2f0fd21cf24c681"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","93663760e36f5594f130c78b78e41216"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","9f58d9acc6bc7a26cedeb316f68e119b"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","3f0cb2cd67aae1487da3b32f50e36138"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","eb93bf5445d5eb0c6b40b8c21d32b9b3"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","4fe51892bc95a974b8bfd3fd0c3e7660"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","d2e4aad0b5dd836da5e9ea82e3bff0be"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","a1cdbfbfbf0c6572b73eb3d7c6a5e14d"],["E:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","4a8496ec0f3c81eb294be726163f61b2"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","21a093157ce0c76de85f4a1fed29bf83"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","bd6f030c81ec8e7c1a0ab8b9a7a60872"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","1909f4574f071b1b2a9c21759b4ad87d"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","b90190b8657cc7885c60da7765c756c9"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","0889b9031efaf53169c89b2389c5b067"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","971e269e9a653eedd2b7df7c0715dc26"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","c9be92c513ef28bb12f2e0b9aaf54aec"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","229b3cda4c136029e1f1c6fd0e2a6a7c"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","e9833465fc6dc2e9c3891d97f4b020a8"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","e775b4dbed7c9170351726e1ce92fb8d"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","1607bb1df9b927e89cbdcea83a2eb801"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","eccc0a8ebfb6871cded9d0a94bd2f077"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","7c050331202065a748d6d7fdfe1928cf"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","bf390f354489fec111b5f78cb1490ac5"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","2803368162de7d0f62634dd6838f4d87"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","8b31f38bb45db8f54fd3e10df2078d7a"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","1d3528507d3bf87b67c87bd04fff1329"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","fc8043d4918e4d287252af5a658ab692"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","d4ccd50cb558dcf31e42cb68f2b42802"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","51ac5f88b6628a65b7619c986bcbd6f1"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","8cf0e29189edf81addaff87f3bd65790"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","8ebdcfb10dabab2547c3266cf2f622aa"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","c3adebbda40f70ad1d09be6018ae3c97"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","d7df922ac9ba725fa29ccfa0327a3bd4"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","973064f41a1a49f5b6deae9de58226d9"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","d2206aeff9742365bca788e8ac433992"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","3ba5e26c58a849bdffe27553d8d5f80d"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","e0b4cc0502f9270abb620119e3831153"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","a4f3e6155ce69bffd1f4b86734cb5de1"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","ac53a78fe716954150f402cacc4a1237"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","a9f0367b7915e8ff1dfc18b7862bcedd"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","6b1b8ea0fe64e9058db8cd50b06b44d6"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","112e38318b5d93937c9c5a76343671b8"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","0003c25eb7208e17882d7606d7a7d967"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","b4f10f3d70cf2a65449e80a0fb18904a"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","1398f475932758680aec0aff54255881"],["E:/qinhao/hexo/public/2020/12/15/C_basic/index.html","b8f3412c0b55be5a6008b985b124a2c2"],["E:/qinhao/hexo/public/ByteDanceVerify.html","e8d9d4cccc839c01d1c0821ebfe48199"],["E:/qinhao/hexo/public/about/index.html","3607f8facb818b7d3129a8a774e88241"],["E:/qinhao/hexo/public/archives/2020/02/index.html","8fa1f87afeeaecaad0baa4e1788fd53a"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","6ed96b7a9f48ea084ab0866875345a27"],["E:/qinhao/hexo/public/archives/2020/03/index.html","e0beada485c67886612fb671539e11ec"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","f6894fe2cd7bafb83a172faaf6cc71b5"],["E:/qinhao/hexo/public/archives/2020/04/index.html","167129bfd89db39822f5fbea03a69e39"],["E:/qinhao/hexo/public/archives/2020/05/index.html","0a5d476ee1e07546e2ed930d77354b0c"],["E:/qinhao/hexo/public/archives/2020/06/index.html","7e5077af38957b9377e058fc56f69ed3"],["E:/qinhao/hexo/public/archives/2020/07/index.html","edb415f78616c18c048ac2f1d3f212df"],["E:/qinhao/hexo/public/archives/2020/08/index.html","d4760324f739eba5b5f1a5760d0d734b"],["E:/qinhao/hexo/public/archives/2020/10/index.html","641b16349bc0ac87cc89f7876088050b"],["E:/qinhao/hexo/public/archives/2020/11/index.html","af3f4c830d240e584f5d2ca27c0ec776"],["E:/qinhao/hexo/public/archives/2020/12/index.html","5030c80b90f91f35091d9af256b42749"],["E:/qinhao/hexo/public/archives/2020/index.html","b3f5cf860d24bbfc456cb510db748ac4"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","932ec22fe475d5d1281d391a4ffc213a"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","c1ad244b4c915e20174fa8cd1f9f0421"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","20eee834c8d0e5af353d4448faa1839a"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","98de240c5f2cfd580df722965d1780be"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","feb12efddafc63346e88c657bf3f7186"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","be8c8d46591757569d08bd8803d3e3ec"],["E:/qinhao/hexo/public/archives/index.html","fd2f7167055b6441b463a3e80bf89e14"],["E:/qinhao/hexo/public/archives/page/2/index.html","7c751207bf1c00bc26ce058ea0fbd627"],["E:/qinhao/hexo/public/archives/page/3/index.html","fd2f7167055b6441b463a3e80bf89e14"],["E:/qinhao/hexo/public/archives/page/4/index.html","7c751207bf1c00bc26ce058ea0fbd627"],["E:/qinhao/hexo/public/archives/page/5/index.html","7c751207bf1c00bc26ce058ea0fbd627"],["E:/qinhao/hexo/public/archives/page/6/index.html","7c751207bf1c00bc26ce058ea0fbd627"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/C语言/index.html","31cf43e89a2acd40a379d54a12044546"],["E:/qinhao/hexo/public/categories/Java/index.html","3ce7bc62e889c39e8ba522c64b3af2e7"],["E:/qinhao/hexo/public/categories/Linux/index.html","9f1f9fe4f035fc7517e74ee1556e342f"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","3903273e6cf0a6d40b5a131ab71964a4"],["E:/qinhao/hexo/public/categories/Python/index.html","448eb1444abfdb685f6197dfe634fe2c"],["E:/qinhao/hexo/public/categories/交换机/index.html","24b644ef5266c1974ef18e7be841ca4c"],["E:/qinhao/hexo/public/categories/华为认证/index.html","8d5ac37185816ba0980d4ebbaeec8692"],["E:/qinhao/hexo/public/categories/小技巧/index.html","7c81aaaca72481534c549a5c3367e450"],["E:/qinhao/hexo/public/categories/数据库/index.html","8d8b4cb0dcea21d2fac08eebc22a7a23"],["E:/qinhao/hexo/public/categories/服务器/index.html","bf40c60a924c2de3c10a078723b97b64"],["E:/qinhao/hexo/public/categories/网络安全/index.html","5d7c359957267d17e6b0d1cb89d77c32"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","5a309513e2842f46fc9652d867d673c7"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","aaa146a32ad77504509f553ba2e4f441"],["E:/qinhao/hexo/public/categories/软件破解/index.html","4cb5b60d944e6e2b1f4c27a6468c716a"],["E:/qinhao/hexo/public/categories/通信技术/index.html","e6bda094be7160ae86618f0b1697f97d"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","9376a68e1c226dcb33e3623204fcbe21"],["E:/qinhao/hexo/public/category/index.html","c54b43a69f6547c8cd7176fb35f438ec"],["E:/qinhao/hexo/public/css/style.css","940a599036b2a40f1cda8deba1fa0555"],["E:/qinhao/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["E:/qinhao/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["E:/qinhao/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["E:/qinhao/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["E:/qinhao/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["E:/qinhao/hexo/public/index.html","4c4f6b85566877ba98e8e45f3026d893"],["E:/qinhao/hexo/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["E:/qinhao/hexo/public/js/app.js","804e218b8d00f3db3d393a7811cc0f3c"],["E:/qinhao/hexo/public/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["E:/qinhao/hexo/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["E:/qinhao/hexo/public/mylist/index.html","d65598e34a8aab3e8a20a03e474cb670"],["E:/qinhao/hexo/public/page/2/index.html","e1236f5c3f0402c12f53f2d597c811df"],["E:/qinhao/hexo/public/page/3/index.html","5ea26623d08783c58d9600fe69755ce9"],["E:/qinhao/hexo/public/page/4/index.html","388aceacd863892383dc87ab26b4e4d8"],["E:/qinhao/hexo/public/page/5/index.html","7a0e9015481c3ef878ae6062a0225f5f"],["E:/qinhao/hexo/public/page/6/index.html","8fbfa0f1bd854267784b0b6471ea20a3"],["E:/qinhao/hexo/public/sw-register.js","ffd60159ab2c1aef6319b4d6d88494bf"],["E:/qinhao/hexo/public/sw.js","a09eaf62c459f60126228870b192f7ea"],["E:/qinhao/hexo/public/tags/IIS/index.html","c2f01b3657362f0f1fe00bc3579c2ee3"],["E:/qinhao/hexo/public/tags/MySQL/index.html","00fd4a7cd68384d9d27aef680f4ef87b"],["E:/qinhao/hexo/public/tags/Photoshop/index.html","7560f0286a7aeda662503d8e8574a6ff"],["E:/qinhao/hexo/public/tags/VPN/index.html","2f152b56450409c1edb58ad6a026c717"],["E:/qinhao/hexo/public/tags/Web服务器/index.html","c00f7da1a727e01853856cb052c80e12"],["E:/qinhao/hexo/public/tags/index.html","418587eab468949ec56c048bc93f7e5e"],["E:/qinhao/hexo/public/tags/交换机/index.html","11f35ef8678c395f153d9907bc29e9ca"],["E:/qinhao/hexo/public/tags/图像处理/index.html","02e00cef31520eec7acb968b6a4252c8"],["E:/qinhao/hexo/public/tags/基础网络/index.html","2b64323fae9aecefd935105c945e5f9a"],["E:/qinhao/hexo/public/tags/思科/index.html","ecbe0add1fae36b4c76d78ef76091586"],["E:/qinhao/hexo/public/tags/思科GRE/index.html","ee6b0bd234a984ba9ba62820d5545c59"],["E:/qinhao/hexo/public/tags/数据库/index.html","cff375326f19111b76cf49abc3a25e8c"],["E:/qinhao/hexo/public/tags/无线技术/index.html","bcac6da56832a929ff529b9d5837e095"],["E:/qinhao/hexo/public/tags/无线技术/page/2/index.html","c9a63523ef2210ae560cd6fa5c42dda4"],["E:/qinhao/hexo/public/tags/系统安装/index.html","fe227f9f1bf79b8249f78fd748b13190"],["E:/qinhao/hexo/public/tags/网络安全/index.html","be4f5b2c5002e48ae7ccda607473eb63"],["E:/qinhao/hexo/public/tags/网络技术/index.html","d9e398624a7718d16fadc4c537c0e602"],["E:/qinhao/hexo/public/tags/计算机三级/index.html","a4d486324651bb300a678fb9203fbb8b"],["E:/qinhao/hexo/public/tags/路由器/index.html","df5da15592e7af5085c6d8f042629b28"],["E:/qinhao/hexo/public/tags/软考/index.html","74198f63b6bfd2bc3fb058f537db28ce"],["E:/qinhao/hexo/public/tags/通信原理/index.html","053ac7004ae751f5766bd7aa8ddc48a1"],["E:/qinhao/hexo/public/tags/通信原理/page/2/index.html","258d9e629872c80cb26ba8f806b61fae"],["E:/qinhao/hexo/public/tags/通信技术/index.html","aeca3195b29c29c39ada8c18d828d21c"],["E:/qinhao/hexo/public/tags/通信技术/page/2/index.html","5c33e763d135ab9ca7be54adf0d80ab0"]];
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







