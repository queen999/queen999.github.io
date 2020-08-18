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

var precacheConfig = [["D:/qinhao/hexo/public/2019-nCoV/index.html","72027881619e4f25903fa0d406f07930"],["D:/qinhao/hexo/public/2019/12/04/hello/index.html","73374e6660fa4de8d7ce71ce48979247"],["D:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","854a6eb5c96d4ed786a0450c8bb517c1"],["D:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","767e4206df4e31c6e472036b64abf0a9"],["D:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","0d6673e89d2cafb4088e8cb2b410cdfd"],["D:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","e0d6c44d3a6e83ab6f165abd7fea6fa7"],["D:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","7b4e2c7f93fc3f9fb25a104d1f35f592"],["D:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","f204e4a9e7dba08ce7a52f338b40b73a"],["D:/qinhao/hexo/public/2020/02/24/ssh/index.html","b803d2a1433811e05273aadacfd497aa"],["D:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","b98f2efe31501836a063a76129a56021"],["D:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","e1af81d2fa5ab8e668109b255a94889d"],["D:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","0d0531ffc787bfc171fb232e98eb2e22"],["D:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","efe0fa733e624d2bca3c240b23e012cb"],["D:/qinhao/hexo/public/2020/03/04/acl/index.html","6f23a3d389e8bc54024f5acb8d8004e4"],["D:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","422a41882bb09bd2bac33e566da6ca3e"],["D:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","e34293eb2026f14e646739f4d4b55aeb"],["D:/qinhao/hexo/public/2020/03/07/3G/index.html","051fa7211dcf6c6bcd17be5126d93ce8"],["D:/qinhao/hexo/public/2020/03/07/GSM/index.html","5d3162e0bc0678e7e4fbbd21f3c16941"],["D:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","bfcb950f60a20ffbe47df8f9cf8d7ac6"],["D:/qinhao/hexo/public/2020/03/07/LTE/index.html","c26eee5699df7c5a10703818c2ada8b9"],["D:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","4868c82981f97ab622a019508f3690a5"],["D:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","4f6a821c7eca863a94b8ac430eb06093"],["D:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","20c04947ed1c4aff52b9fef32e5f4422"],["D:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","b4bc5c75b8fd17402a31ea146d662bf7"],["D:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","83a76d64bf053bb4fe207ade6467ae38"],["D:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","2270b8c90c7cb9566484723e3a5299c3"],["D:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","cc446690dd0aceecf5a3c39fc8a93c0b"],["D:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","84632d127cf56bc2003d909476d8ff45"],["D:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","d46ebd421ff53cd789e80256baeff3d8"],["D:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","68d834791da752c1e426500fada70f25"],["D:/qinhao/hexo/public/2020/04/03/Layer/index.html","fd221881bf909e17ebfb3d867a3a10c9"],["D:/qinhao/hexo/public/2020/04/04/color/index.html","0072d0f7c48d32c1772e17faa4a358a0"],["D:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","5ec49ca444bb087d5a746e52614a8a58"],["D:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","13544a4f2bf91d7f97c9c0d9c82a1167"],["D:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","ca3871919c577940dd2a553816cef7e0"],["D:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","b8010c07fa31e1c42fa6de4b73b6f7ac"],["D:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","c284a3af668328702bd812afcb6a9a81"],["D:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","feee708ff527176bc67f439717313689"],["D:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","6756f10a05ef0f01cfd60dd078992e6f"],["D:/qinhao/hexo/public/2020/05/11/MIMO/index.html","09d31cc73ebdc3c2c08e174df843d1f5"],["D:/qinhao/hexo/public/2020/05/12/ICIC/index.html","f2a90b78f349d4e5096071de6e1b5dce"],["D:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","5980255b69e82ae2ffb3e95a435350c9"],["D:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","026ee86d0c63e1507c158e928e301d8f"],["D:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","d413cb241aebbf8f9a413eac58b38747"],["D:/qinhao/hexo/public/2020/05/20/python-2/index.html","1b01da08748752ea53dfe495170fb6b5"],["D:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","7ec446874542c48dce0ce602d4282dd3"],["D:/qinhao/hexo/public/2020/05/24/Python-3/index.html","ec07f91a5c086584530c1707ca83577d"],["D:/qinhao/hexo/public/2020/05/25/Python-4/index.html","ef21200fa34c01b9aa1acc6885af1038"],["D:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","b63175fa4df1ea4de00fe207b29a4c9c"],["D:/qinhao/hexo/public/2020/06/01/Python-5/index.html","8c9553afbc7c6504992b62ec5f2c3080"],["D:/qinhao/hexo/public/2020/06/11/lanzous/index.html","4747ae33bb387f879715ec79e6f04446"],["D:/qinhao/hexo/public/2020/06/13/buy-VPN/index.html","f2247d9701686ea2935f1eb93c0072c9"],["D:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","71a707a50e8218757e232721c9f0146e"],["D:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","e98b71a77031380b18b62fc346cd9fc0"],["D:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","faf8e8ed972a8721ae2b28e7747b6e03"],["D:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","151f9436bcdab51062760dfc75cf416f"],["D:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","16c18f82f19c819f2542939fb316833f"],["D:/qinhao/hexo/public/2020/08/13/system_info/index.html","fdd0e90b43924314f5cc4f026ae01282"],["D:/qinhao/hexo/public/ByteDanceVerify.html","821ede5560c9fe0208de2807205f2440"],["D:/qinhao/hexo/public/VPN/index.css","8013e09c9d199085bcb55fc941411c54"],["D:/qinhao/hexo/public/VPN/index.html","ca0e4a77db170e39837a6466cefb0ff2"],["D:/qinhao/hexo/public/about/index.html","3936c410f9d3582d665b1c03bb360934"],["D:/qinhao/hexo/public/archives/2019/12/index.html","1516fddede27e1fff38033dede722225"],["D:/qinhao/hexo/public/archives/2019/index.html","0022bd3e4cb11738f81db4c61f364494"],["D:/qinhao/hexo/public/archives/2020/02/index.html","22b3e9accba585e0b6fb2ee70e4dabe5"],["D:/qinhao/hexo/public/archives/2020/02/page/2/index.html","ff122801dbb4d3eed4a64a33724964d7"],["D:/qinhao/hexo/public/archives/2020/03/index.html","72a801a792aca65126275b436c48119b"],["D:/qinhao/hexo/public/archives/2020/03/page/2/index.html","3a3d838027b8b8b4aa6a3ddd0eca8a55"],["D:/qinhao/hexo/public/archives/2020/04/index.html","caec539cabdae6534ef584dcf8dae723"],["D:/qinhao/hexo/public/archives/2020/05/index.html","288a22a89c550b6c6a53ba955c56c92d"],["D:/qinhao/hexo/public/archives/2020/06/index.html","0e6e3c6fd752219e49d1bf8b713064bf"],["D:/qinhao/hexo/public/archives/2020/07/index.html","c04dce89be4181d686046fd244dedadd"],["D:/qinhao/hexo/public/archives/2020/08/index.html","dd6fd24b102c441e7cbb106927a7b812"],["D:/qinhao/hexo/public/archives/2020/index.html","e149a6ee5280fd8449cac3ce24f77b90"],["D:/qinhao/hexo/public/archives/2020/page/2/index.html","6739951e947912631df55ed7cab92c00"],["D:/qinhao/hexo/public/archives/2020/page/3/index.html","57e908cd557401f753cd5ebcaaa91da7"],["D:/qinhao/hexo/public/archives/2020/page/4/index.html","4a4ba2d70adb0ebb14dc586206037b91"],["D:/qinhao/hexo/public/archives/2020/page/5/index.html","3c6f2e9500ca61e6ed876d1b55513ff4"],["D:/qinhao/hexo/public/archives/2020/page/6/index.html","3de4c3e2ce94ea64565578b33a45795e"],["D:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","8ffd944590d2e23e3557b4e8cd0f6abd"],["D:/qinhao/hexo/public/archives/index.html","bb3334915aa91406b56d006190860164"],["D:/qinhao/hexo/public/archives/page/2/index.html","bb3334915aa91406b56d006190860164"],["D:/qinhao/hexo/public/archives/page/3/index.html","bb3334915aa91406b56d006190860164"],["D:/qinhao/hexo/public/archives/page/4/index.html","e62a419702d73823eb6cbc4a6b295474"],["D:/qinhao/hexo/public/archives/page/5/index.html","e62a419702d73823eb6cbc4a6b295474"],["D:/qinhao/hexo/public/archives/page/6/index.html","e62a419702d73823eb6cbc4a6b295474"],["D:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/qinhao/hexo/public/categories/Linux/index.html","b4a829b5806792d4c9fcecf4dbc05cd4"],["D:/qinhao/hexo/public/categories/Photoshop/index.html","980a79fb7c36bc17bf3747bdd33940ef"],["D:/qinhao/hexo/public/categories/Python/index.html","2973032644c9ddb0ba392b5c8c028d54"],["D:/qinhao/hexo/public/categories/VPN/index.html","9176f085b69797e1254acb9b48403133"],["D:/qinhao/hexo/public/categories/个人/index.html","473c7bcedd14229808dce986e6bd2545"],["D:/qinhao/hexo/public/categories/交换机/index.html","7a6b6beab01d0cfa17d8a880281856ac"],["D:/qinhao/hexo/public/categories/华为认证/index.html","a389ee39a5206c7da0ef933cea61be89"],["D:/qinhao/hexo/public/categories/小技巧/index.html","fef169acb205877f3aae5ab4362ddc34"],["D:/qinhao/hexo/public/categories/数据库/index.html","0b8953af9d614b6a9815544c3747e54a"],["D:/qinhao/hexo/public/categories/服务器/index.html","b192346f52dd95135d8d7889c82bed50"],["D:/qinhao/hexo/public/categories/网络安全/index.html","3fc80a8aea70235c28f9cf732ebc5f53"],["D:/qinhao/hexo/public/categories/计算机三级/index.html","2868e299ddac20f12a9db49e2aed5185"],["D:/qinhao/hexo/public/categories/计算机网络/index.html","0d53f77fe755c9e64b654acf227c5b71"],["D:/qinhao/hexo/public/categories/软件破解/index.html","fb5977e7e30fc3d71734edd1bd6706e0"],["D:/qinhao/hexo/public/categories/通信技术/index.html","6bf27c7c948da8da9c7c1a9222bb29ba"],["D:/qinhao/hexo/public/categories/通信技术/page/2/index.html","fa1bbfacb748b6e761856facd6b563bd"],["D:/qinhao/hexo/public/category/index.html","f9d1993768343538bd921dc4409a8bca"],["D:/qinhao/hexo/public/css/style.css","940a599036b2a40f1cda8deba1fa0555"],["D:/qinhao/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/qinhao/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/qinhao/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["D:/qinhao/hexo/public/friends/index.html","093277dba0708bcbbd9d3642efb05a31"],["D:/qinhao/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["D:/qinhao/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["D:/qinhao/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["D:/qinhao/hexo/public/index.html","10260dfb823401410154b4d30876520d"],["D:/qinhao/hexo/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["D:/qinhao/hexo/public/js/app.js","804e218b8d00f3db3d393a7811cc0f3c"],["D:/qinhao/hexo/public/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["D:/qinhao/hexo/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["D:/qinhao/hexo/public/mylist/index.html","da7fb930ef6fae6acd6dec90a9cca639"],["D:/qinhao/hexo/public/page/2/index.html","0217ea290ad6ebc29893ac4e56507268"],["D:/qinhao/hexo/public/page/3/index.html","ad2cedf1b9ed60239f1eac85d77b1edc"],["D:/qinhao/hexo/public/page/4/index.html","bc3a925af5e8029bd3fb4394a43539f7"],["D:/qinhao/hexo/public/page/5/index.html","87640737a9798751fb3b789f0f9da0bc"],["D:/qinhao/hexo/public/page/6/index.html","b7df8e277195d8697d0a111fe4702e75"],["D:/qinhao/hexo/public/tags/IIS/index.html","b8e0bcf69b4df154e0b589cff194973e"],["D:/qinhao/hexo/public/tags/MySQL/index.html","13f43384e574404a23400ce2f2097a8b"],["D:/qinhao/hexo/public/tags/Photoshop/index.html","1e8b18902f72b73365216ec7916932e2"],["D:/qinhao/hexo/public/tags/VPN/index.html","f5f387cd3f4f5807a47cb1aff65514b5"],["D:/qinhao/hexo/public/tags/Web服务器/index.html","2e26fe37ae1305b9e9751a8c633f09ba"],["D:/qinhao/hexo/public/tags/index.html","6d7cd237d6b97bf7ddce5c44adb04e9c"],["D:/qinhao/hexo/public/tags/交换机/index.html","1a2fb9e5473f4b10345614ad222ae344"],["D:/qinhao/hexo/public/tags/图像处理/index.html","9104d12b8a325dad8e2712ef8f1cdf8e"],["D:/qinhao/hexo/public/tags/基础网络/index.html","676adb37abc6bcdd241f4d26101e2cf3"],["D:/qinhao/hexo/public/tags/思科/index.html","b6a7706316da2c76102e5344d44cfdfa"],["D:/qinhao/hexo/public/tags/思科GRE/index.html","240e59b29a894fac7fd6de3d5fe47f93"],["D:/qinhao/hexo/public/tags/数据库/index.html","eb44678065e9ed24878228988c45c552"],["D:/qinhao/hexo/public/tags/无线技术/index.html","060e6cc2a1dfc9f1d262c5abc6945239"],["D:/qinhao/hexo/public/tags/无线技术/page/2/index.html","83bf45745c43e42197df94ac41406dba"],["D:/qinhao/hexo/public/tags/系统安装/index.html","0037520e7152f4fd38fbe9fc46343eb3"],["D:/qinhao/hexo/public/tags/网络安全/index.html","c54a88daf40c25b16c041d180f363e32"],["D:/qinhao/hexo/public/tags/网络技术/index.html","1f1d439cb142e08901bcdd86298b120c"],["D:/qinhao/hexo/public/tags/计算机三级/index.html","b50a6e050b528b68e614defb881a4ef4"],["D:/qinhao/hexo/public/tags/路由器/index.html","1567e011637f808c45e93a92daf06af3"],["D:/qinhao/hexo/public/tags/软考/index.html","342c02df4038af84e5673f985c52e509"],["D:/qinhao/hexo/public/tags/通信原理/index.html","d4c8d0413d6d3732b6373798e776bcab"],["D:/qinhao/hexo/public/tags/通信原理/page/2/index.html","563890284fed13cedbe5f423f9fa83af"],["D:/qinhao/hexo/public/tags/通信技术/index.html","60d1d9910c613c4232cc0021ba928410"],["D:/qinhao/hexo/public/tags/通信技术/page/2/index.html","d5162e7a30c881adebe13dbaf6d88f19"]];
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







