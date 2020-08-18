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

var precacheConfig = [["D:/qinhao/hexo/public/2019-nCoV/index.html","72027881619e4f25903fa0d406f07930"],["D:/qinhao/hexo/public/2019/12/04/hello/index.html","73374e6660fa4de8d7ce71ce48979247"],["D:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","854a6eb5c96d4ed786a0450c8bb517c1"],["D:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","767e4206df4e31c6e472036b64abf0a9"],["D:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","0d6673e89d2cafb4088e8cb2b410cdfd"],["D:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","e0d6c44d3a6e83ab6f165abd7fea6fa7"],["D:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","7b4e2c7f93fc3f9fb25a104d1f35f592"],["D:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","f204e4a9e7dba08ce7a52f338b40b73a"],["D:/qinhao/hexo/public/2020/02/24/ssh/index.html","b803d2a1433811e05273aadacfd497aa"],["D:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","b98f2efe31501836a063a76129a56021"],["D:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","e1af81d2fa5ab8e668109b255a94889d"],["D:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","0d0531ffc787bfc171fb232e98eb2e22"],["D:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","efe0fa733e624d2bca3c240b23e012cb"],["D:/qinhao/hexo/public/2020/03/04/acl/index.html","6f23a3d389e8bc54024f5acb8d8004e4"],["D:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","422a41882bb09bd2bac33e566da6ca3e"],["D:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","e34293eb2026f14e646739f4d4b55aeb"],["D:/qinhao/hexo/public/2020/03/07/3G/index.html","051fa7211dcf6c6bcd17be5126d93ce8"],["D:/qinhao/hexo/public/2020/03/07/GSM/index.html","5d3162e0bc0678e7e4fbbd21f3c16941"],["D:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","bfcb950f60a20ffbe47df8f9cf8d7ac6"],["D:/qinhao/hexo/public/2020/03/07/LTE/index.html","c26eee5699df7c5a10703818c2ada8b9"],["D:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","4868c82981f97ab622a019508f3690a5"],["D:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","4f6a821c7eca863a94b8ac430eb06093"],["D:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","20c04947ed1c4aff52b9fef32e5f4422"],["D:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","b4bc5c75b8fd17402a31ea146d662bf7"],["D:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","83a76d64bf053bb4fe207ade6467ae38"],["D:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","2270b8c90c7cb9566484723e3a5299c3"],["D:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","cc446690dd0aceecf5a3c39fc8a93c0b"],["D:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","84632d127cf56bc2003d909476d8ff45"],["D:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","d46ebd421ff53cd789e80256baeff3d8"],["D:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","68d834791da752c1e426500fada70f25"],["D:/qinhao/hexo/public/2020/04/03/Layer/index.html","fd221881bf909e17ebfb3d867a3a10c9"],["D:/qinhao/hexo/public/2020/04/04/color/index.html","0072d0f7c48d32c1772e17faa4a358a0"],["D:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","5ec49ca444bb087d5a746e52614a8a58"],["D:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","13544a4f2bf91d7f97c9c0d9c82a1167"],["D:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","ca3871919c577940dd2a553816cef7e0"],["D:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","b8010c07fa31e1c42fa6de4b73b6f7ac"],["D:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","c284a3af668328702bd812afcb6a9a81"],["D:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","feee708ff527176bc67f439717313689"],["D:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","6756f10a05ef0f01cfd60dd078992e6f"],["D:/qinhao/hexo/public/2020/05/11/MIMO/index.html","09d31cc73ebdc3c2c08e174df843d1f5"],["D:/qinhao/hexo/public/2020/05/12/ICIC/index.html","f2a90b78f349d4e5096071de6e1b5dce"],["D:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","5980255b69e82ae2ffb3e95a435350c9"],["D:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","026ee86d0c63e1507c158e928e301d8f"],["D:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","d413cb241aebbf8f9a413eac58b38747"],["D:/qinhao/hexo/public/2020/05/20/python-2/index.html","1b01da08748752ea53dfe495170fb6b5"],["D:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","7ec446874542c48dce0ce602d4282dd3"],["D:/qinhao/hexo/public/2020/05/24/Python-3/index.html","ec07f91a5c086584530c1707ca83577d"],["D:/qinhao/hexo/public/2020/05/25/Python-4/index.html","ef21200fa34c01b9aa1acc6885af1038"],["D:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","b63175fa4df1ea4de00fe207b29a4c9c"],["D:/qinhao/hexo/public/2020/06/01/Python-5/index.html","8c9553afbc7c6504992b62ec5f2c3080"],["D:/qinhao/hexo/public/2020/06/11/lanzous/index.html","4747ae33bb387f879715ec79e6f04446"],["D:/qinhao/hexo/public/2020/06/13/buy-VPN/index.html","f2247d9701686ea2935f1eb93c0072c9"],["D:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","71a707a50e8218757e232721c9f0146e"],["D:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","e98b71a77031380b18b62fc346cd9fc0"],["D:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","faf8e8ed972a8721ae2b28e7747b6e03"],["D:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","151f9436bcdab51062760dfc75cf416f"],["D:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","16c18f82f19c819f2542939fb316833f"],["D:/qinhao/hexo/public/2020/08/13/system_info/index.html","fdd0e90b43924314f5cc4f026ae01282"],["D:/qinhao/hexo/public/ByteDanceVerify.html","821ede5560c9fe0208de2807205f2440"],["D:/qinhao/hexo/public/VPN/index.css","8013e09c9d199085bcb55fc941411c54"],["D:/qinhao/hexo/public/VPN/index.html","ca0e4a77db170e39837a6466cefb0ff2"],["D:/qinhao/hexo/public/about/index.html","3936c410f9d3582d665b1c03bb360934"],["D:/qinhao/hexo/public/archives/2019/12/index.html","0f472c34cf5c7541e6b2f4dec112bfdb"],["D:/qinhao/hexo/public/archives/2019/index.html","e1f48fc80e4d39a88d551fd2cb2cbe84"],["D:/qinhao/hexo/public/archives/2020/02/index.html","9299c562c5f13cdbe6f4d2e4d41a4351"],["D:/qinhao/hexo/public/archives/2020/02/page/2/index.html","9ea501156e80aff4fa9cb5a7402a111b"],["D:/qinhao/hexo/public/archives/2020/03/index.html","8d7467d79bec739ce4436ec9befb675b"],["D:/qinhao/hexo/public/archives/2020/03/page/2/index.html","afd7e9741d9286bb55bf77329e490c97"],["D:/qinhao/hexo/public/archives/2020/04/index.html","86f54a444eecef4c718bf367c9e53c75"],["D:/qinhao/hexo/public/archives/2020/05/index.html","1a373ad06642d58b2ee7bfcc209a1115"],["D:/qinhao/hexo/public/archives/2020/06/index.html","70446c5308f42912107cf9cf6ab33d80"],["D:/qinhao/hexo/public/archives/2020/07/index.html","b2159ce481e61b57086275932027dbd3"],["D:/qinhao/hexo/public/archives/2020/08/index.html","fda386b248458e92532e7458b40f9575"],["D:/qinhao/hexo/public/archives/2020/index.html","7744e2725020a4838ea54be3479ea437"],["D:/qinhao/hexo/public/archives/2020/page/2/index.html","7de9ef054b883d454e4a10900d3bdf09"],["D:/qinhao/hexo/public/archives/2020/page/3/index.html","025130dfc1f15e5762ca55fed76d9986"],["D:/qinhao/hexo/public/archives/2020/page/4/index.html","1822f97129cab90866395f65d44c879c"],["D:/qinhao/hexo/public/archives/2020/page/5/index.html","4b9581b0215ceb1498670da0fd5dd3f9"],["D:/qinhao/hexo/public/archives/2020/page/6/index.html","07af27377f9d455bde86ba1d9f979009"],["D:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","8ffd944590d2e23e3557b4e8cd0f6abd"],["D:/qinhao/hexo/public/archives/index.html","a578df76a2c65a86999857da239725e3"],["D:/qinhao/hexo/public/archives/page/2/index.html","a578df76a2c65a86999857da239725e3"],["D:/qinhao/hexo/public/archives/page/3/index.html","a578df76a2c65a86999857da239725e3"],["D:/qinhao/hexo/public/archives/page/4/index.html","51e9c13ae3dcb3e154f55650ac6f5b6f"],["D:/qinhao/hexo/public/archives/page/5/index.html","51e9c13ae3dcb3e154f55650ac6f5b6f"],["D:/qinhao/hexo/public/archives/page/6/index.html","51e9c13ae3dcb3e154f55650ac6f5b6f"],["D:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/qinhao/hexo/public/categories/Linux/index.html","b4429a3ab7d95f38396b9941547dfb84"],["D:/qinhao/hexo/public/categories/Photoshop/index.html","7b771c37a000aa855e813af8c731958e"],["D:/qinhao/hexo/public/categories/Python/index.html","25dde9245bf526f152a01307ff69a0a8"],["D:/qinhao/hexo/public/categories/VPN/index.html","70b0942525948526a0ed1c4bdd303726"],["D:/qinhao/hexo/public/categories/个人/index.html","0ec0a377330665829fcbb69f149fcc92"],["D:/qinhao/hexo/public/categories/交换机/index.html","e719939c102ca72200778f2761ce7418"],["D:/qinhao/hexo/public/categories/华为认证/index.html","1b9c8260f437520357d4676f8bd72958"],["D:/qinhao/hexo/public/categories/小技巧/index.html","05da3c1685390c3bbe02f1f976780d76"],["D:/qinhao/hexo/public/categories/数据库/index.html","7abe6e59a22f496999a8b90f059dd121"],["D:/qinhao/hexo/public/categories/服务器/index.html","54c648e2c56c9934115718c4f3edbce0"],["D:/qinhao/hexo/public/categories/网络安全/index.html","b9f8db4ca27d7680273c4720250a9d19"],["D:/qinhao/hexo/public/categories/计算机三级/index.html","2081b2c295bb6611b0fb3ed38b05086c"],["D:/qinhao/hexo/public/categories/计算机网络/index.html","ceefb91420fb3225eff5670b84af361d"],["D:/qinhao/hexo/public/categories/软件破解/index.html","f3e53f87d7c1b346ed3fa9bf2651bc95"],["D:/qinhao/hexo/public/categories/通信技术/index.html","ae9d757be24e976e12711d63b8bc2f40"],["D:/qinhao/hexo/public/categories/通信技术/page/2/index.html","c6355e60500d3e26745bba24f89e3f95"],["D:/qinhao/hexo/public/category/index.html","f9d1993768343538bd921dc4409a8bca"],["D:/qinhao/hexo/public/css/style.css","940a599036b2a40f1cda8deba1fa0555"],["D:/qinhao/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/qinhao/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/qinhao/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["D:/qinhao/hexo/public/friends/index.html","093277dba0708bcbbd9d3642efb05a31"],["D:/qinhao/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["D:/qinhao/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["D:/qinhao/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["D:/qinhao/hexo/public/index.html","47b781fea2005c71e6ec5be0fc5c9844"],["D:/qinhao/hexo/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["D:/qinhao/hexo/public/js/app.js","804e218b8d00f3db3d393a7811cc0f3c"],["D:/qinhao/hexo/public/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["D:/qinhao/hexo/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["D:/qinhao/hexo/public/mylist/index.html","42ce1e08b2f8aff81b98cef474dd0c97"],["D:/qinhao/hexo/public/page/2/index.html","bdc792e4685ce684d78f62aa5005815f"],["D:/qinhao/hexo/public/page/3/index.html","66130ed1bda82b8e2584ae6300c6a3d8"],["D:/qinhao/hexo/public/page/4/index.html","3da758cb3c30f78d1788a06799cf57e8"],["D:/qinhao/hexo/public/page/5/index.html","48bf34935691008c1c154c1ef9966fa6"],["D:/qinhao/hexo/public/page/6/index.html","76e10a3ac44fc69ea11eb96384b3f44c"],["D:/qinhao/hexo/public/tags/IIS/index.html","9f8f258f8b5c6e310ef4c56c51259584"],["D:/qinhao/hexo/public/tags/MySQL/index.html","fa07bf64c28bbb36ac5c0d1b619763f9"],["D:/qinhao/hexo/public/tags/Photoshop/index.html","28cbee75087a874e15396aa83bf759ab"],["D:/qinhao/hexo/public/tags/VPN/index.html","90e551bbeaa3abee4ad5b46646897c24"],["D:/qinhao/hexo/public/tags/Web服务器/index.html","88451b810335bad89efb2005f8a0d3a6"],["D:/qinhao/hexo/public/tags/index.html","6d7cd237d6b97bf7ddce5c44adb04e9c"],["D:/qinhao/hexo/public/tags/交换机/index.html","157a16cc5f1630495406681e158e1146"],["D:/qinhao/hexo/public/tags/图像处理/index.html","550a3d9d21ec8db8b9f00efdf6daf168"],["D:/qinhao/hexo/public/tags/基础网络/index.html","eed892d8c1d58f4b6fadd93a3cad61e0"],["D:/qinhao/hexo/public/tags/思科/index.html","f183763e9580eb18cd07b15700797626"],["D:/qinhao/hexo/public/tags/思科GRE/index.html","6e02315e3ffbe73e6dcc04759ede56eb"],["D:/qinhao/hexo/public/tags/数据库/index.html","cd29755ab06a9e561bd463fb7172a991"],["D:/qinhao/hexo/public/tags/无线技术/index.html","31628b6b27f33d6c019f1b842afb98cf"],["D:/qinhao/hexo/public/tags/无线技术/page/2/index.html","a7ce9cd4f8a8a88644217767f2c51bf1"],["D:/qinhao/hexo/public/tags/系统安装/index.html","377b5bd1d594959af9d52790ed5cde38"],["D:/qinhao/hexo/public/tags/网络安全/index.html","b2d29883faab59d7abc8f5a69f8fc890"],["D:/qinhao/hexo/public/tags/网络技术/index.html","123911ccec9fd72d5c3ad6eb269543c8"],["D:/qinhao/hexo/public/tags/计算机三级/index.html","22e3ab2899dda2d1dcf69343ab79d901"],["D:/qinhao/hexo/public/tags/路由器/index.html","63c8594c9c5c6c98a055dbf931cbd0aa"],["D:/qinhao/hexo/public/tags/软考/index.html","9ca59dc857048d5d1398e6a430d4c6d1"],["D:/qinhao/hexo/public/tags/通信原理/index.html","2a4ed8ced16d48c3c7ed4d01114ff96b"],["D:/qinhao/hexo/public/tags/通信原理/page/2/index.html","346e5d09d2626273003bc69d01ecfad8"],["D:/qinhao/hexo/public/tags/通信技术/index.html","7e4112c09e5ba15b5d54781b5b107118"],["D:/qinhao/hexo/public/tags/通信技术/page/2/index.html","badcce52f28acde80180db7c1017d05c"]];
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







