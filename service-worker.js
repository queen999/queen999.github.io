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

var precacheConfig = [["D:/qinhao/hexo/public/2019-nCoV/index.html","72027881619e4f25903fa0d406f07930"],["D:/qinhao/hexo/public/2019/12/04/hello/index.html","04cb1f486c01c26227fc53a365139588"],["D:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","26a12dee7b4b44b1d33627879904b660"],["D:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","084fc1777a6ae36dd1dccadfce85a8e1"],["D:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","8335e100e4426e1f21b030c69de9dc7d"],["D:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","f3d7288eaef800c88c149303440b777f"],["D:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","bb8663630acf49beb6bbde7ad4058aa1"],["D:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","6fbd57678100b396ddc79f472cd78df6"],["D:/qinhao/hexo/public/2020/02/24/ssh/index.html","1b1ddb9048a7657bcec6216250995c64"],["D:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","0627270675bb44d3350f015ed3d48108"],["D:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","d0f24c27fb3a4d12ea1c6a7a96cfb073"],["D:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","c523b4c85eaa3ace9dd9b29fec259c9a"],["D:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","0115932a6c0212750a1f6f7920c8bf7f"],["D:/qinhao/hexo/public/2020/03/04/acl/index.html","59f3e4842417d8b235d81c62fa1c64ff"],["D:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","2064d20c0ca448cb8194f08b97698d9f"],["D:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","112ba512d71ef88eee7826556fa4642d"],["D:/qinhao/hexo/public/2020/03/07/3G/index.html","1c30b9760c74eec5df20095f625e4755"],["D:/qinhao/hexo/public/2020/03/07/GSM/index.html","df6cff9bcee1b3dca5638f59bd513068"],["D:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","2f66f030ad5b5a618a9e0fe9534501bb"],["D:/qinhao/hexo/public/2020/03/07/LTE/index.html","11cbbb46d8884fa007b0d42eb978b858"],["D:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","543c7be4b2435b4c895c4416514626e5"],["D:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","a3aff35afb9d8ffd57d23ab8137e5e49"],["D:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","8aa8dcd91689a700cbb747d750f3dd50"],["D:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","e67032da9cc4096e70f8a0540c0c5c47"],["D:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","fb372a0dee2369ddb88b587a44f008fd"],["D:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","b9c238e115ce1a5e00e0492c3fef2307"],["D:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","be298d5e409e325115e26cad8975ea6b"],["D:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","fa4e391b9b0b2d173d47d79bb3e24e9b"],["D:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","d0d6d1eeeb425cf1fc11ee676d1c5efa"],["D:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","a22a2df912079cbdbefc09f74e7f57fd"],["D:/qinhao/hexo/public/2020/04/03/Layer/index.html","35c34367f156b8185e1c4e87bde430aa"],["D:/qinhao/hexo/public/2020/04/04/color/index.html","5dda3352d617ae41c6e4f12db1ccd365"],["D:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","03149e85cf6e2901669813bb4083d1fc"],["D:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","ad65810bb5451773f5b1b6129e8af394"],["D:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","d984b2e978a97bc308104e92d48f86c7"],["D:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","474e397d16630bdbff55abc80116f1e9"],["D:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","b9a2c8e1ef277384c7e43d0f98b6bd9b"],["D:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","0790c8f3737664969b338a156b8eb9e1"],["D:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","60739da15d2d5781229998645572c1bc"],["D:/qinhao/hexo/public/2020/05/11/MIMO/index.html","ea4304489fa79dc6d7682cabf28dac1f"],["D:/qinhao/hexo/public/2020/05/12/ICIC/index.html","0c8a1e0764939c37c13c56b33fc77a00"],["D:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","67b9987ac61e96ee70b78f4213fb1e66"],["D:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","ab89e2c508dea8cfd3cb1d12e7f38be7"],["D:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","85455544708e832b0d8cf7ad7db78383"],["D:/qinhao/hexo/public/2020/05/20/python-2/index.html","0e75adb6d075719e6400b2e5bd6a6c89"],["D:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","c97431f4d53676245285c082098b05b0"],["D:/qinhao/hexo/public/2020/05/24/Python-3/index.html","9f14005014b48c4166ed350a7b157396"],["D:/qinhao/hexo/public/2020/05/25/Python-4/index.html","69fb20d94d61a8f28fdd5320aef39eb0"],["D:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","a112c591a9939a4e239428964b56ac41"],["D:/qinhao/hexo/public/2020/06/01/Python-5/index.html","ab0ef910e39f3cd83508b06f52463d24"],["D:/qinhao/hexo/public/2020/06/11/lanzous/index.html","06d26c28f4a486d91598909314f551b6"],["D:/qinhao/hexo/public/2020/06/13/buy-VPN/index.html","da54f6e9c6e3f5a7bd669b37a077fb00"],["D:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","dc6e7013ded1f7a1d0c516509045e4e9"],["D:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","445d4b88b9c9f3f70f55613f13c3be49"],["D:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","b501f174ccf3d27dd9739ff5672ce520"],["D:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","c9e12a2f8a1c20b12c752e817a2b8f9f"],["D:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","18ec2799f7ea0e4ebb60cf6abac68cf0"],["D:/qinhao/hexo/public/2020/08/13/system_info/index.html","1a5b6bce8abe889fe72f5d914d0040d7"],["D:/qinhao/hexo/public/ByteDanceVerify.html","ea34c8693a433c3b55acee625c401544"],["D:/qinhao/hexo/public/VPN/index.css","8013e09c9d199085bcb55fc941411c54"],["D:/qinhao/hexo/public/VPN/index.html","ca0e4a77db170e39837a6466cefb0ff2"],["D:/qinhao/hexo/public/about/index.html","9bf1255881a4c5168c0391a07eaf8673"],["D:/qinhao/hexo/public/archives/2019/12/index.html","200ec86cc6d4195158f4da254790ed95"],["D:/qinhao/hexo/public/archives/2019/index.html","fef3db8108c5c8f076c70ed22fd1f520"],["D:/qinhao/hexo/public/archives/2020/02/index.html","f6cb7ff63c77dd14ef35e71697e671dd"],["D:/qinhao/hexo/public/archives/2020/02/page/2/index.html","1903696c12753847c83b91ad8240a319"],["D:/qinhao/hexo/public/archives/2020/03/index.html","f95690c3803c99acae98fe672e1c41d5"],["D:/qinhao/hexo/public/archives/2020/03/page/2/index.html","09102515b4994786a504374b9942832d"],["D:/qinhao/hexo/public/archives/2020/04/index.html","c78d79b05c08d02fa34d08d08e6a1a47"],["D:/qinhao/hexo/public/archives/2020/05/index.html","af38357349f572fc58c066233541590b"],["D:/qinhao/hexo/public/archives/2020/06/index.html","fc6be658a00a3fb88f7f002c03e126e5"],["D:/qinhao/hexo/public/archives/2020/07/index.html","e229bc2217012acc9e1df872e4017b35"],["D:/qinhao/hexo/public/archives/2020/08/index.html","513ced2541d03b01dbd9038acc71ffb6"],["D:/qinhao/hexo/public/archives/2020/index.html","c81cf0aa4aba3e09676d718f90be2400"],["D:/qinhao/hexo/public/archives/2020/page/2/index.html","3bf061872905563ac46f8998eb8c5dd7"],["D:/qinhao/hexo/public/archives/2020/page/3/index.html","ebbf8fec77178ffbf4910df528f56c6d"],["D:/qinhao/hexo/public/archives/2020/page/4/index.html","17111d06b2ea3e395675c066d600bd79"],["D:/qinhao/hexo/public/archives/2020/page/5/index.html","059bf5754c49c09fa38e4352a7452aa4"],["D:/qinhao/hexo/public/archives/2020/page/6/index.html","4acd87f0186bd2411cd40c5be27ca416"],["D:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","a31ec5e014199afb8ce57b4458adf8ee"],["D:/qinhao/hexo/public/archives/index.html","75affb14cb5d266eb00f2c843938dcfb"],["D:/qinhao/hexo/public/archives/page/2/index.html","75affb14cb5d266eb00f2c843938dcfb"],["D:/qinhao/hexo/public/archives/page/3/index.html","75affb14cb5d266eb00f2c843938dcfb"],["D:/qinhao/hexo/public/archives/page/4/index.html","0635d3db7aaac701f60734560e0eca4e"],["D:/qinhao/hexo/public/archives/page/5/index.html","0635d3db7aaac701f60734560e0eca4e"],["D:/qinhao/hexo/public/archives/page/6/index.html","0635d3db7aaac701f60734560e0eca4e"],["D:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/qinhao/hexo/public/categories/Linux/index.html","a8beddd7a9684504edef103e6625ee76"],["D:/qinhao/hexo/public/categories/Photoshop/index.html","e0cb2c3c1bb613567e90719a2381b5b2"],["D:/qinhao/hexo/public/categories/Python/index.html","e16e7935a946e8160ee525ab4a0cc02d"],["D:/qinhao/hexo/public/categories/VPN/index.html","aa9a4d850e589f3a17b03bedda539a59"],["D:/qinhao/hexo/public/categories/个人/index.html","19371019fe577809c8bc14635fca563e"],["D:/qinhao/hexo/public/categories/交换机/index.html","cc6b0be3e98f4f28db0657230e877001"],["D:/qinhao/hexo/public/categories/华为认证/index.html","ff945a72509a6dc0c319e5656caa580e"],["D:/qinhao/hexo/public/categories/小技巧/index.html","f4ead86ff5c8d494b8006d1d3d2d1536"],["D:/qinhao/hexo/public/categories/数据库/index.html","663b5cfb805ef1aa91c9f41b9d767712"],["D:/qinhao/hexo/public/categories/服务器/index.html","a0fbee5ea8c2800b2a3fc14338e22cf7"],["D:/qinhao/hexo/public/categories/网络安全/index.html","f1390966f9e6cbae3a6c39a9fa37f0c8"],["D:/qinhao/hexo/public/categories/计算机三级/index.html","688f75bc0bb2426f29aee67de370e012"],["D:/qinhao/hexo/public/categories/计算机网络/index.html","4823f45203388c10b5b94af51e5395f7"],["D:/qinhao/hexo/public/categories/软件破解/index.html","4a26ee0582ad8081efa3f50b3b617b39"],["D:/qinhao/hexo/public/categories/通信技术/index.html","dd3b74793ef6fac197d8dca6dece65c0"],["D:/qinhao/hexo/public/categories/通信技术/page/2/index.html","af6011ddd189241fe32a854a9dbedebd"],["D:/qinhao/hexo/public/category/index.html","89e499e553923d5a63f3d6cf96031aeb"],["D:/qinhao/hexo/public/css/style.css","940a599036b2a40f1cda8deba1fa0555"],["D:/qinhao/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/qinhao/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/qinhao/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["D:/qinhao/hexo/public/friends/index.html","43e63a0805b2993aff286b92d265cfe2"],["D:/qinhao/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["D:/qinhao/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["D:/qinhao/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["D:/qinhao/hexo/public/index.html","60c8b275ad738ea47f3ae8751275161b"],["D:/qinhao/hexo/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["D:/qinhao/hexo/public/js/app.js","804e218b8d00f3db3d393a7811cc0f3c"],["D:/qinhao/hexo/public/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["D:/qinhao/hexo/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["D:/qinhao/hexo/public/mylist/index.html","1758b77ec818b98b9c1cb8adcb1c4b67"],["D:/qinhao/hexo/public/page/2/index.html","7cae48296a7a07ba763d3241d0e88450"],["D:/qinhao/hexo/public/page/3/index.html","0126d82250a33e67a7f442c3a07e3a86"],["D:/qinhao/hexo/public/page/4/index.html","71870fcdf44c915b15e88043c08c4480"],["D:/qinhao/hexo/public/page/5/index.html","fe7f385377b04e7684f1c8dc20dbce09"],["D:/qinhao/hexo/public/page/6/index.html","84b407fda8381af2a597ecdb8c4d1bc3"],["D:/qinhao/hexo/public/tags/IIS/index.html","f9c7307875316620aa57d9b1a9be45ea"],["D:/qinhao/hexo/public/tags/MySQL/index.html","312126e3f0206b128082fbf21e3c2b92"],["D:/qinhao/hexo/public/tags/Photoshop/index.html","1d6cf6a4cb4b2e15d9007d88d43e1314"],["D:/qinhao/hexo/public/tags/VPN/index.html","107660980543382cec43c0de31ed6181"],["D:/qinhao/hexo/public/tags/Web服务器/index.html","d52a3e6c8b278d9223b204f38505f8d2"],["D:/qinhao/hexo/public/tags/index.html","f51ace65b23ddfecc13af153538eb583"],["D:/qinhao/hexo/public/tags/交换机/index.html","4f3e5f81351a2c638fdae370701a6505"],["D:/qinhao/hexo/public/tags/图像处理/index.html","e5f57e4d36720c122d8c459bb814db9c"],["D:/qinhao/hexo/public/tags/基础网络/index.html","e20d2207a53dcd92925c3e4030d9ec0f"],["D:/qinhao/hexo/public/tags/思科/index.html","06a0bf89597772f677f4ba082262191f"],["D:/qinhao/hexo/public/tags/思科GRE/index.html","4504e1aa3b2bbfaeb699090a45f922a1"],["D:/qinhao/hexo/public/tags/数据库/index.html","1a794fbff1f100e863b1125360d4b870"],["D:/qinhao/hexo/public/tags/无线技术/index.html","a91db9a4e437daa0c3bc9aeecf6e46ae"],["D:/qinhao/hexo/public/tags/无线技术/page/2/index.html","bf679bb2a689ea485d8c48852aec0147"],["D:/qinhao/hexo/public/tags/系统安装/index.html","8f7ac41152c1ef7f66ae974ca65f2f54"],["D:/qinhao/hexo/public/tags/网络安全/index.html","1efc496f178bc06ef3d4f6d454087133"],["D:/qinhao/hexo/public/tags/网络技术/index.html","1bfd421ca062650b041b8ae9b8affb2c"],["D:/qinhao/hexo/public/tags/计算机三级/index.html","04e512fc752876c996f71508f5df8486"],["D:/qinhao/hexo/public/tags/路由器/index.html","971289dadbd6f813e0024e5e834551a6"],["D:/qinhao/hexo/public/tags/软考/index.html","fd7864daadf44e6affbdf32826f798c7"],["D:/qinhao/hexo/public/tags/通信原理/index.html","3190e36ddcf8a90a6082cb99fdfddfda"],["D:/qinhao/hexo/public/tags/通信原理/page/2/index.html","ab6450039f0a5016539e31ee95ac8c11"],["D:/qinhao/hexo/public/tags/通信技术/index.html","b3c479db185f4537e0859a09601c78c8"],["D:/qinhao/hexo/public/tags/通信技术/page/2/index.html","a921a4dc826e54773f9b33b21868bdb6"]];
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







