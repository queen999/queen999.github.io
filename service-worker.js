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

var precacheConfig = [["D:/qinhao/hexo/public/2019-nCoV/index.html","72027881619e4f25903fa0d406f07930"],["D:/qinhao/hexo/public/2019/12/04/hello/index.html","36b5085068749fd4f9788a928799e5c4"],["D:/qinhao/hexo/public/2019/12/22/HP_Switch_Config/index.html","0346d8734b816d16fa3613a15e37ce7e"],["D:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","a3b21d0d6b7d571f978d813e7b206c78"],["D:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","f694d87bef73bbca53e28b0db5290dcb"],["D:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","ac03f5fe2006db1e10da65031b69ab50"],["D:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","8b8125457db12ebd666eea92d2094218"],["D:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","ab4b707d908b3323881c95353f180e74"],["D:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","e1505a6859df8606cedcd832ef7c81a3"],["D:/qinhao/hexo/public/2020/02/24/ssh/index.html","42e5407490f7c7bf8d8bd2f2a0595b4e"],["D:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","1954fdca74197040c8a58802e3af183e"],["D:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","19e701fa0f1fcefe971c3265f2f786dc"],["D:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","5abf369411852f039a927c7db701bc9d"],["D:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","28f88cf47a30ce0a7992a1d371542bb8"],["D:/qinhao/hexo/public/2020/03/04/acl/index.html","f197e1314084c816458fcef8c204ff31"],["D:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","d6bc0941cb49a7b48481d2f8babbdcd8"],["D:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","f287abaf4a399feb9cc20217aeac75c2"],["D:/qinhao/hexo/public/2020/03/07/3G/index.html","fd5ed662be492ed43f5414f897c7ae98"],["D:/qinhao/hexo/public/2020/03/07/GSM/index.html","7c721b7f5113bf625c1ee8aef0f1b36d"],["D:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","0de5e81067a533bc01a133d444992d3c"],["D:/qinhao/hexo/public/2020/03/07/LTE/index.html","3a872b6eea3549442f06fc60db5a889e"],["D:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","ca806a1352da93e29de785bc786a8534"],["D:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","e3aa4f52755c7af1749b020de85f7cb2"],["D:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","e5eacb4220f61fcfd7bbaf04c083aea6"],["D:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","aff8aee24893e6196f956c05ca36a3b1"],["D:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","8add53f61bc8b311520927184cecb403"],["D:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","5a0198806ac95f30b3765d3e28234489"],["D:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","5f31b8aa4be6fd9d5c825f0f668191f7"],["D:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","380508782baa1503925b8e9b211df310"],["D:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","5a5f47ce5cc5e422340af84ff8624191"],["D:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","8e2238b7a3d5fd89085f54bf266f6d64"],["D:/qinhao/hexo/public/2020/04/03/Layer/index.html","0b77bdca9622c9d59a0f000adec8bd25"],["D:/qinhao/hexo/public/2020/04/04/color/index.html","664cb2513a2773d9dd0a76fb633fe57b"],["D:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","8b71e26a3c9ce33e803dc6060d586ec7"],["D:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","46799ee7b5b98a23207d7205c57acf6b"],["D:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","49843a818097fa43e60876488ca6013e"],["D:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","a14651d2faab1acd7f003af6caf84134"],["D:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","114a9f4e0f4946cd1ca22a369dee3a38"],["D:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","6f1bdc1620be59a0df92028797bd61f9"],["D:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","f6353040431c3ae46ff0da1baf89ae65"],["D:/qinhao/hexo/public/2020/05/11/MIMO/index.html","6d887e0b85ef537e480ad23e1762fa19"],["D:/qinhao/hexo/public/2020/05/12/ICIC/index.html","8e7ca4ff58432ed4f44665c5cc275ce0"],["D:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","93c44c8495cf1d955a16ac4c1f45947d"],["D:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","410d1d6707f21f9f925fd5c1545d2d2e"],["D:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","cf8c310d77439f75f34f71e0dd4c6005"],["D:/qinhao/hexo/public/2020/05/20/python-2/index.html","5f25f5bf3e0cffcda7934cf57627d949"],["D:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","2556d5cc349d2a2fc77401080c7118f9"],["D:/qinhao/hexo/public/2020/05/24/Python-3/index.html","a9b9ab1dc33474d25d618f04e3b8ed26"],["D:/qinhao/hexo/public/2020/05/25/Python-4/index.html","4a24fbb20cf5d46cd580a7d6d717ad80"],["D:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","f73b2db8ff5edd8e9305b236ee529d7d"],["D:/qinhao/hexo/public/2020/06/01/Python-5/index.html","57163d9c581bca1d164e81cd6d9311e3"],["D:/qinhao/hexo/public/2020/06/11/lanzous/index.html","5f3be2a2cb04df95b7c9caaf7eb9b046"],["D:/qinhao/hexo/public/2020/06/13/buy-VPN/index.html","6a5e802235dfb6340a74426d62db6f47"],["D:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","b60113b2c527ff8df8dc89cd7e136603"],["D:/qinhao/hexo/public/2020/07/01/qudou/index.html","bba75f018ff32e2b945a655065057917"],["D:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","7e4f4c7cec9ed14a42d4252bce58ceec"],["D:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","6817c52fa5781c57ae529c6c5c5f94d1"],["D:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","356b6f8906c9bbb16f0a52e1f2db96c5"],["D:/qinhao/hexo/public/ByteDanceVerify.html","e511e168bb2534efd8d0435c30f49912"],["D:/qinhao/hexo/public/VPN/index.css","8013e09c9d199085bcb55fc941411c54"],["D:/qinhao/hexo/public/VPN/index.html","ca0e4a77db170e39837a6466cefb0ff2"],["D:/qinhao/hexo/public/about/index.html","336b5ef06cf35005333bf2cd91701bbe"],["D:/qinhao/hexo/public/archives/2019/12/index.html","e1b64f36cd2929c18b86578e70d204a8"],["D:/qinhao/hexo/public/archives/2019/index.html","e88967b98b9a889ef8b88d806050f407"],["D:/qinhao/hexo/public/archives/2020/02/index.html","de274caeb19d46f6cf50cf760492e0a0"],["D:/qinhao/hexo/public/archives/2020/02/page/2/index.html","6c4ebc6d9265bb2db13b0e041ae743d9"],["D:/qinhao/hexo/public/archives/2020/03/index.html","461beb4658d254b7439dcd603c09cfdc"],["D:/qinhao/hexo/public/archives/2020/03/page/2/index.html","a8a124452439ab2b05af94edc1d57804"],["D:/qinhao/hexo/public/archives/2020/04/index.html","4e0fe2c917fddff711192253a9e18580"],["D:/qinhao/hexo/public/archives/2020/05/index.html","564c7c4e150a6d21bdce087a4ff3141d"],["D:/qinhao/hexo/public/archives/2020/06/index.html","9897ccf50b6e3440431088059ca941aa"],["D:/qinhao/hexo/public/archives/2020/07/index.html","f7156e73271651974d071b427660fe43"],["D:/qinhao/hexo/public/archives/2020/index.html","b6993aa86d97d68bd1aaa679541e36bd"],["D:/qinhao/hexo/public/archives/2020/page/2/index.html","8a213b866f7871c89b801a4657df9800"],["D:/qinhao/hexo/public/archives/2020/page/3/index.html","457ff3d156175c6cdc45ef3edf391cfd"],["D:/qinhao/hexo/public/archives/2020/page/4/index.html","4360d503805697518e762afc361ddea3"],["D:/qinhao/hexo/public/archives/2020/page/5/index.html","ddd31f89b8dace94b36be8837abd8f7d"],["D:/qinhao/hexo/public/archives/2020/page/6/index.html","5d0e50b672c8ee05b7a9a2e4ca40c244"],["D:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","544eb55f22a546192270fd96c2a4e70d"],["D:/qinhao/hexo/public/archives/index.html","d1e68d6d06f1bfd6c9cadc838f1443dd"],["D:/qinhao/hexo/public/archives/page/2/index.html","d1e68d6d06f1bfd6c9cadc838f1443dd"],["D:/qinhao/hexo/public/archives/page/3/index.html","d1e68d6d06f1bfd6c9cadc838f1443dd"],["D:/qinhao/hexo/public/archives/page/4/index.html","16b51477bf6689df28442ef68079c762"],["D:/qinhao/hexo/public/archives/page/5/index.html","16b51477bf6689df28442ef68079c762"],["D:/qinhao/hexo/public/archives/page/6/index.html","16b51477bf6689df28442ef68079c762"],["D:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/qinhao/hexo/public/categories/Linux/index.html","f863a3f59a7573b3265c864662ce6dd7"],["D:/qinhao/hexo/public/categories/Photoshop/index.html","6f9f89919877b7e71f5ef05f2ee38309"],["D:/qinhao/hexo/public/categories/Python/index.html","8f55f4b68af625fe2fec3fd9bcbdf876"],["D:/qinhao/hexo/public/categories/VPN/index.html","04a8cd3586da9c237acb724298a22948"],["D:/qinhao/hexo/public/categories/个人/index.html","d50e16befcae624cf2bbd7b46ed6845a"],["D:/qinhao/hexo/public/categories/交换机/index.html","705eabf63c324b58a79f704999a2ddfe"],["D:/qinhao/hexo/public/categories/华为认证/index.html","de31a70620ede17020c398df739550c7"],["D:/qinhao/hexo/public/categories/小技巧/index.html","2c59b7685317f63ea1af1c9bbb67b14d"],["D:/qinhao/hexo/public/categories/数据库/index.html","565522b5ebdef38dfbcac04730123460"],["D:/qinhao/hexo/public/categories/服务器/index.html","6c7d626a288e4696f503293a44eca855"],["D:/qinhao/hexo/public/categories/网络安全/index.html","117c042949e4a1f4419a938a3db864b6"],["D:/qinhao/hexo/public/categories/计算机三级/index.html","33c8e2fed742dece5710b5fe526cc9e3"],["D:/qinhao/hexo/public/categories/计算机网络/index.html","a08a87d137634093b7c1be5bacb9eadf"],["D:/qinhao/hexo/public/categories/软件破解/index.html","136a340585e305a9eafdf31da5dd6a60"],["D:/qinhao/hexo/public/categories/通信技术/index.html","cbf4409116e5c8de627bd88ee66b5b9a"],["D:/qinhao/hexo/public/categories/通信技术/page/2/index.html","46ebdc72a2b49cde2739d5b5bff2010c"],["D:/qinhao/hexo/public/category/index.html","868483f435a25426ec1257ad5e67b9c0"],["D:/qinhao/hexo/public/css/style.css","28b8b9d8d2d35dd8cca2120f3d205618"],["D:/qinhao/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/qinhao/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/qinhao/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["D:/qinhao/hexo/public/friends/index.html","8fe040f84b188a9eed489010e2febd07"],["D:/qinhao/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["D:/qinhao/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["D:/qinhao/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["D:/qinhao/hexo/public/index.html","1e5bf802b9c8aaff503ef7c41ad97467"],["D:/qinhao/hexo/public/js/app.js","ea306851b6276a0ffeec351d138589e5"],["D:/qinhao/hexo/public/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["D:/qinhao/hexo/public/js/valine.js","303a3cafe360b6aa26d5e8de035e46bc"],["D:/qinhao/hexo/public/mylist/index.html","65481c8d68f161f23d5114bf84f728c2"],["D:/qinhao/hexo/public/page/2/index.html","0745e22e8eacc76633a2d634a4d7a84b"],["D:/qinhao/hexo/public/page/3/index.html","ec4e58cb4820c93c0d4105a5b7b35a05"],["D:/qinhao/hexo/public/page/4/index.html","a8f684c58feb9f3b5636e9e6a35b505d"],["D:/qinhao/hexo/public/page/5/index.html","5de32ed745ee2218b2e4c1f4a11420e3"],["D:/qinhao/hexo/public/page/6/index.html","ea7d6f5ad2e14767b05a3eaec91b160b"],["D:/qinhao/hexo/public/tags/IIS/index.html","7ac09a501ce16750a6356446aaafd00b"],["D:/qinhao/hexo/public/tags/MySQL/index.html","99eb9d9a884d27ef275f5ddd6166ec30"],["D:/qinhao/hexo/public/tags/Photoshop/index.html","7b4f7212d58dd95c3032b4cbf07d2ce4"],["D:/qinhao/hexo/public/tags/VPN/index.html","03685ad1b0308b971430b71af6216570"],["D:/qinhao/hexo/public/tags/Web服务器/index.html","187dad43257ea94471c10bc8607507c9"],["D:/qinhao/hexo/public/tags/index.html","fb1e3f1ede0132db97c0a4ddbc3b75c4"],["D:/qinhao/hexo/public/tags/交换机/index.html","977e36e78e458159c38f0750c7a9d506"],["D:/qinhao/hexo/public/tags/图像处理/index.html","d38c8fc0f23edea98f449224dd61f9f3"],["D:/qinhao/hexo/public/tags/基础网络/index.html","cb701ee72621c8492428d1013a07e916"],["D:/qinhao/hexo/public/tags/思科/index.html","7a2ac0b171ed51a06555e88c220e57d7"],["D:/qinhao/hexo/public/tags/思科GRE/index.html","286e346a5dd000e7041c70bf01716f1f"],["D:/qinhao/hexo/public/tags/数据库/index.html","4970a73a60c0de537f013c7fb889ec32"],["D:/qinhao/hexo/public/tags/无线技术/index.html","9bce0f23bab9f546650a022861c62ef1"],["D:/qinhao/hexo/public/tags/无线技术/page/2/index.html","8857c75b8d7c854414336123cbe6c0df"],["D:/qinhao/hexo/public/tags/系统安装/index.html","a8f3c4bcd95fe7583f3caed861073b72"],["D:/qinhao/hexo/public/tags/网络安全/index.html","7f540ee9e14e47e4c6db8737e83a7b41"],["D:/qinhao/hexo/public/tags/网络技术/index.html","91ae09de8bd1e53b034e489e9df2adf3"],["D:/qinhao/hexo/public/tags/计算机三级/index.html","0d3498bb81d311baccc1917af1127c21"],["D:/qinhao/hexo/public/tags/路由器/index.html","3beb7de0396f0f7dd255964362dafe54"],["D:/qinhao/hexo/public/tags/软考/index.html","53543470dbe3a3bbd1fae0d33082cec9"],["D:/qinhao/hexo/public/tags/通信原理/index.html","a2742acb7391e62038d4e8723c5ce51e"],["D:/qinhao/hexo/public/tags/通信原理/page/2/index.html","112c07203f2b946f9076a27730a0c6ca"],["D:/qinhao/hexo/public/tags/通信技术/index.html","a315f7d06bb4154d5985e0ddd6ac6257"],["D:/qinhao/hexo/public/tags/通信技术/page/2/index.html","c9d29c79da0e863875ccb91bd09ae1d4"]];
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







