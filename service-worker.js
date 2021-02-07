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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","a801eda41232fd9b195757992d4bf37f"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","cd89469b8c4d7c688a286747411539e9"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","ea671d2db1670f328a6c638f3742efdd"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","382665b8a89ab329ac1dbf959b757d33"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","b3313bd7ff4bafffa0e9ffad0b7c5812"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","5dccf0bb47f7ad4f393c3c39803d8c3e"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","1092ba57203aac12b96d181fc533ed62"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","f0ce8248722cd07957524953d5cb0b4e"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","1138cb8cfa4e90ff5df322c54cc69cc9"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","b16b08c85ecd45676090b9e0fd6ec0a9"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","a3c79f385169e5996842077e5c558797"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","3fb0be92b280c4f93c31a1dbcd84ac98"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","b87ed0b30afce2539a7d425a5b3e6f96"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","b3358bb7d5188b6dae2926e6a7e55ee6"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","179eb935a4086cd8c42541c685e4656b"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","eba4d5a1bc86037a26395aed9fafb9a6"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","28415f22baac3913184e44582f8de557"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","81fba2f1a65cdfbd432186f6b07ac3ef"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","c8b0a1507fadb14e1c5ad35fdd81c9b7"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","bbf1ced31bcd512d34ae368ab81aebd1"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","f36f18050bc77ceb529ff1faa61f69d6"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","feb313f016673f5a75c5b9ccaea9f2dc"],["E:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","2d15d82dab210d19f6fa36e96c347cbf"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","7307959d26078be5d38d4d835e4faa94"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","337d7c46123b5d6d51cc7dbf617a9153"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","f6ebac7e54e0bb79ad670056b4e1dc94"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","122749fe8ec97537084029aea529f449"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","135d37e85f97514c410a814b5850e38d"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","eb22b3f8c7d3ade433bc4db7f1c4b744"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","028934e0ead8f90a9507ec58ad87439e"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","580a3fb643b5bc46762e759a40aa5c0c"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","6ceea75247a78f61d5bc801810a8d3d1"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","8abe81739bc45825bffb78b767b0f490"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","6e40a6ec596e9655477a39f2e84d8f1c"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","4be5e63c20a91b484685d917b9e8bc97"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","96067a3c90b7d31575d6bc5492253a76"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","23993152adee2296dd01fe80348f0d14"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","344ca5d03b151c1ba5645d976b8086c7"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","7f3877c07a63ce1f1ef80075adbec639"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","19c3f5acff7cbf86483771fa0a9b0161"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","797929686b8954cc873aef20fca3425b"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","5246327551c4b4bfce9ea180a7bb2abe"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","d48f70acb1d391a359dd69f72a7f6dc6"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","8282390cb403be1d265e96f4bcdee35f"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","036157ca6c38beba336bdbc79bdc6260"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","57e01ba3fe8e92c3803705657af3bf53"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","7bc9cea4827e5cac76d5c4ab6851f737"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","be02cf0c7baeea14785e55306628f70a"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","4b22db6ccf815653e63f6c210af6e485"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","abe5b49be23d00a39fb1f31c58c2b986"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","65ed060bd0dc38214495af7f9e32b1d1"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","9bd3af73dad76e3e6719527d3e535694"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","78e5d05f434e04e3d5ad71de715f92a2"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","78c7c0e75acbc5b0356a6b60a056b288"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","096350021eb83e55a4482559a88f9377"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","47e5298bbc11f53ebfcbc56bb442b4a0"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","ee0f7e6b2477d2f7963fa0b7818137f2"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","b7508ee7308bd301f61f560245aa9585"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","02365ae066bf94a02799b67843acd79e"],["E:/qinhao/hexo/public/2020/12/15/C_basic/index.html","3911e94382242b185350e7a0f9f414f1"],["E:/qinhao/hexo/public/ByteDanceVerify.html","1c6aa184666138dedb4d0a9a207e3eca"],["E:/qinhao/hexo/public/about/index.html","faeced839dbc1f6a89205c3477874f45"],["E:/qinhao/hexo/public/archives/2020/02/index.html","d111a645edeb7b86c0df030ec3b7c7fd"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","4836e79724f44d3997155222051b5ac1"],["E:/qinhao/hexo/public/archives/2020/03/index.html","fc6f7be74fe909f1a6aef92b91f11958"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","b2d70242fc1a2f3aa2934ef57f89e13f"],["E:/qinhao/hexo/public/archives/2020/04/index.html","bc8f2e9ae2b69ff638f7bb70f57af048"],["E:/qinhao/hexo/public/archives/2020/05/index.html","04afc7035a2f11777d193f9cee09e8b4"],["E:/qinhao/hexo/public/archives/2020/06/index.html","fc1d4008a0a40b8da1fd5316bf675270"],["E:/qinhao/hexo/public/archives/2020/07/index.html","3ebeef121db7165e172bfc61417be693"],["E:/qinhao/hexo/public/archives/2020/08/index.html","a6016092ad53d5f85628d52560eb9638"],["E:/qinhao/hexo/public/archives/2020/10/index.html","fe4859f0cb675db449a129e81c16b0ff"],["E:/qinhao/hexo/public/archives/2020/11/index.html","5f0600350a2204c60db134b3069fcfc7"],["E:/qinhao/hexo/public/archives/2020/12/index.html","fbd1702c5b6fcc0abafae45e0f78c252"],["E:/qinhao/hexo/public/archives/2020/index.html","b9e780f97da7b36b0f7e78b64874b1ef"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","396d2bed46fc11c392a9db823a7077d7"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","25382633291c5a42e6d8f6f5493741e5"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","91f7a8bbd4335b9165c25ccac03f98e5"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","7ebe2e51afd7cb67da37e45654533ed1"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","a9079c3a51370821fb53843ba09f2576"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","fa272ad9a6efc5e949034be9293704b4"],["E:/qinhao/hexo/public/archives/index.html","d6c18b834b7228ff3d23fd3505acaa6f"],["E:/qinhao/hexo/public/archives/page/2/index.html","4cc38f95f4e9e2d4d201ea0ee8ddb356"],["E:/qinhao/hexo/public/archives/page/3/index.html","d6c18b834b7228ff3d23fd3505acaa6f"],["E:/qinhao/hexo/public/archives/page/4/index.html","4cc38f95f4e9e2d4d201ea0ee8ddb356"],["E:/qinhao/hexo/public/archives/page/5/index.html","4cc38f95f4e9e2d4d201ea0ee8ddb356"],["E:/qinhao/hexo/public/archives/page/6/index.html","4cc38f95f4e9e2d4d201ea0ee8ddb356"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/C语言/index.html","eee31ec78838bb24d8f91ba390a62b6a"],["E:/qinhao/hexo/public/categories/Java/index.html","d8f4c6fe1ca09c69ffdb9e49efada0c5"],["E:/qinhao/hexo/public/categories/Linux/index.html","5c56017e8775d7aa3c1360406765f02a"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","61dc66540734f336904f48f5e068e257"],["E:/qinhao/hexo/public/categories/Python/index.html","04ef5deb7a7e0976f76fe7980b6e93e2"],["E:/qinhao/hexo/public/categories/交换机/index.html","f6aacdbd26d183c224d4ed0f979b1f4e"],["E:/qinhao/hexo/public/categories/华为认证/index.html","40d0b996440aa533276cbedc8a98b07a"],["E:/qinhao/hexo/public/categories/小技巧/index.html","0a1e8cf95de7851fbb8c6890ee8b37fd"],["E:/qinhao/hexo/public/categories/数据库/index.html","095460151171f3421e60de53b109bb2f"],["E:/qinhao/hexo/public/categories/服务器/index.html","1376af983d4a374a0a24f03b18a8eee8"],["E:/qinhao/hexo/public/categories/网络安全/index.html","e5cbe8c93bf1815dc71d52571eba6faf"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","75e92930017d04dcd84314e100c33be7"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","d51ffa3726099bdf828dee4f9fd6ed19"],["E:/qinhao/hexo/public/categories/软件破解/index.html","b7c8a723119d9bbb24beb838b2695e02"],["E:/qinhao/hexo/public/categories/通信技术/index.html","e421749346218d08c42bf92709cee5d7"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","0ca8d04533d4aedffbf4bb21419ee0bf"],["E:/qinhao/hexo/public/category/index.html","2162b63ad57eda821e4d15ea8d66b5a5"],["E:/qinhao/hexo/public/css/style.css","940a599036b2a40f1cda8deba1fa0555"],["E:/qinhao/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["E:/qinhao/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["E:/qinhao/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/friends/index.html","1cf0c1e044b53da8f3082cc68d91f1e0"],["E:/qinhao/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["E:/qinhao/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["E:/qinhao/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["E:/qinhao/hexo/public/index.html","1294b7716ec88b5618ea2d395ee7dced"],["E:/qinhao/hexo/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["E:/qinhao/hexo/public/js/app.js","804e218b8d00f3db3d393a7811cc0f3c"],["E:/qinhao/hexo/public/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["E:/qinhao/hexo/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["E:/qinhao/hexo/public/mylist/index.html","3edefb53ed53dfc0267608c86cf24779"],["E:/qinhao/hexo/public/page/2/index.html","37e1e60ccf61c888f01ead7cb4e05df8"],["E:/qinhao/hexo/public/page/3/index.html","3bf8fe0be6f82fb7750ddf557abdc3a6"],["E:/qinhao/hexo/public/page/4/index.html","020e248662cf50f562c2c4a21b6f0d95"],["E:/qinhao/hexo/public/page/5/index.html","fb28c61dc89f672745457bff56efce71"],["E:/qinhao/hexo/public/page/6/index.html","a006e776ca5b623e047af69bab42ff35"],["E:/qinhao/hexo/public/sw-register.js","d981fd0cee9eb96273a20e818aaefd2b"],["E:/qinhao/hexo/public/sw.js","5c240b19114fee03f2decb490ebe2bff"],["E:/qinhao/hexo/public/tags/IIS/index.html","4faf90cd8e0900670d769937f631d474"],["E:/qinhao/hexo/public/tags/MySQL/index.html","324a396e8fec6abccd2a0561cca7c68f"],["E:/qinhao/hexo/public/tags/Photoshop/index.html","3e2ebb9e8e2a95974ca2f10dac7cae4a"],["E:/qinhao/hexo/public/tags/VPN/index.html","16fd7cc219b4e2a51b6e070a3f092328"],["E:/qinhao/hexo/public/tags/Web服务器/index.html","e2ea09c90566a9f74f1bdcfe3b70efb6"],["E:/qinhao/hexo/public/tags/index.html","17e4e799d3b1153d31db946e945f0114"],["E:/qinhao/hexo/public/tags/交换机/index.html","e3d1269fda10ec716b606b14cf657e8d"],["E:/qinhao/hexo/public/tags/图像处理/index.html","b68236a29d46975291294f1a4110e3a6"],["E:/qinhao/hexo/public/tags/基础网络/index.html","39a531755d45d55f2d710dc9093ea755"],["E:/qinhao/hexo/public/tags/思科/index.html","f6c88b73a6c594c11e7be78fc12049ed"],["E:/qinhao/hexo/public/tags/思科GRE/index.html","1480c58026eb95751f0868fd8d8e7adf"],["E:/qinhao/hexo/public/tags/数据库/index.html","8ba06c38955ecbc01a5d584ba415f805"],["E:/qinhao/hexo/public/tags/无线技术/index.html","63b8920f35d0aa499c75bc7f409ce2cd"],["E:/qinhao/hexo/public/tags/无线技术/page/2/index.html","5a3f914ab24d1a228f7d3a7e2f6de102"],["E:/qinhao/hexo/public/tags/系统安装/index.html","2181c7f1bd2f55d7050f96b1c51380f8"],["E:/qinhao/hexo/public/tags/网络安全/index.html","cb7d1cf9615077d015a8b734705339aa"],["E:/qinhao/hexo/public/tags/网络技术/index.html","97be3bfcc05436850f0346f4adf81289"],["E:/qinhao/hexo/public/tags/计算机三级/index.html","5af9b42ff9f5bd8f2da258df4de652fd"],["E:/qinhao/hexo/public/tags/路由器/index.html","7da8fa0fa8d70e8ec174c339a74936c5"],["E:/qinhao/hexo/public/tags/软考/index.html","82f9fe5178f1115e3a0cb2288efb42e0"],["E:/qinhao/hexo/public/tags/通信原理/index.html","9f12b4394b6a31458ff4b0275ae087ed"],["E:/qinhao/hexo/public/tags/通信原理/page/2/index.html","dfc0758f4d35aa79f68284777171b48d"],["E:/qinhao/hexo/public/tags/通信技术/index.html","02913772b6c79a710bf9ae05e9eb96cc"],["E:/qinhao/hexo/public/tags/通信技术/page/2/index.html","290416b24b7c3f7e597d9e0058925406"]];
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







