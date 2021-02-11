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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","413af795ddff4d1ea87803f4700a5745"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","87119d5302b21d0357eb2d27748ab926"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","bcd21e3365bff9914f3721d5333ad8f0"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","75a2abd4d800ccf0246f70c41c9fd4a8"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","437fb7fa78fa1bdc08356f88f12eafd3"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","0fbb989d22ca8b7bb169bfa9005a24b3"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","42a9b8833c0b1a6825a19202c55e39ff"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","996b0cecd21ee00eb54b644a6063e213"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","89b2834f0ce5eadaeed24fb36d0db780"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","649b99fb1c51d14213dd55aafaa1023a"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","24dc2db29ee20bc886e59eaee686fe95"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","90557e1b0e9de9ec1905f66e07d02470"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","495b49ca163034ce83d973a300e3490b"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","02d540af125df24fda1efb14a3ed2178"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","9ac09d2b544d7e9ed2f0fd21cf24c681"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","93663760e36f5594f130c78b78e41216"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","9f58d9acc6bc7a26cedeb316f68e119b"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","3f0cb2cd67aae1487da3b32f50e36138"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","eb93bf5445d5eb0c6b40b8c21d32b9b3"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","4fe51892bc95a974b8bfd3fd0c3e7660"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","d2e4aad0b5dd836da5e9ea82e3bff0be"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","a1cdbfbfbf0c6572b73eb3d7c6a5e14d"],["E:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","4a8496ec0f3c81eb294be726163f61b2"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","21a093157ce0c76de85f4a1fed29bf83"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","bd6f030c81ec8e7c1a0ab8b9a7a60872"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","1909f4574f071b1b2a9c21759b4ad87d"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","b90190b8657cc7885c60da7765c756c9"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","0889b9031efaf53169c89b2389c5b067"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","971e269e9a653eedd2b7df7c0715dc26"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","c9be92c513ef28bb12f2e0b9aaf54aec"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","229b3cda4c136029e1f1c6fd0e2a6a7c"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","e9833465fc6dc2e9c3891d97f4b020a8"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","e775b4dbed7c9170351726e1ce92fb8d"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","1607bb1df9b927e89cbdcea83a2eb801"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","eccc0a8ebfb6871cded9d0a94bd2f077"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","7c050331202065a748d6d7fdfe1928cf"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","bf390f354489fec111b5f78cb1490ac5"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","2803368162de7d0f62634dd6838f4d87"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","8b31f38bb45db8f54fd3e10df2078d7a"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","1d3528507d3bf87b67c87bd04fff1329"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","fc8043d4918e4d287252af5a658ab692"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","d4ccd50cb558dcf31e42cb68f2b42802"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","51ac5f88b6628a65b7619c986bcbd6f1"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","8cf0e29189edf81addaff87f3bd65790"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","8ebdcfb10dabab2547c3266cf2f622aa"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","c3adebbda40f70ad1d09be6018ae3c97"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","d7df922ac9ba725fa29ccfa0327a3bd4"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","973064f41a1a49f5b6deae9de58226d9"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","d2206aeff9742365bca788e8ac433992"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","3ba5e26c58a849bdffe27553d8d5f80d"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","e0b4cc0502f9270abb620119e3831153"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","a4f3e6155ce69bffd1f4b86734cb5de1"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","ac53a78fe716954150f402cacc4a1237"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","a9f0367b7915e8ff1dfc18b7862bcedd"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","6b1b8ea0fe64e9058db8cd50b06b44d6"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","112e38318b5d93937c9c5a76343671b8"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","0003c25eb7208e17882d7606d7a7d967"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","b4f10f3d70cf2a65449e80a0fb18904a"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","1398f475932758680aec0aff54255881"],["E:/qinhao/hexo/public/2020/12/15/C_basic/index.html","b8f3412c0b55be5a6008b985b124a2c2"],["E:/qinhao/hexo/public/ByteDanceVerify.html","e8d9d4cccc839c01d1c0821ebfe48199"],["E:/qinhao/hexo/public/about/index.html","3607f8facb818b7d3129a8a774e88241"],["E:/qinhao/hexo/public/archives/2020/02/index.html","de6b35d5754b76373be4b35f6f6d9ecd"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","c75eb25e3c237b53e7c45248eed17c27"],["E:/qinhao/hexo/public/archives/2020/03/index.html","822b2aa0c7e31d3e315df91cdb9cda09"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","964c51f8deefd136ae3d50ac1c347d22"],["E:/qinhao/hexo/public/archives/2020/04/index.html","ca1606b3870de07a8eca5229e4d60a74"],["E:/qinhao/hexo/public/archives/2020/05/index.html","460c397c9417243ad02c39c03ce17563"],["E:/qinhao/hexo/public/archives/2020/06/index.html","aba423b1d82405e0ec2fac2e0e2bc1e5"],["E:/qinhao/hexo/public/archives/2020/07/index.html","ddc7db98d87f58c09867ac58c7bf9c9f"],["E:/qinhao/hexo/public/archives/2020/08/index.html","c92ee4abb74cb9cc0f36c5a6fd34d6d5"],["E:/qinhao/hexo/public/archives/2020/10/index.html","31de6502e13f96e957b888659471ebf0"],["E:/qinhao/hexo/public/archives/2020/11/index.html","a04c39cb9d950b06c8e96a24f907299a"],["E:/qinhao/hexo/public/archives/2020/12/index.html","5bab617774ed4680924692553589246f"],["E:/qinhao/hexo/public/archives/2020/index.html","f74f015d4104d382328a1ac91c886028"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","65a8faa3df8f15df490f0c604fe6d48b"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","cbe13745d47fe5dd882ff8df83b4582e"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","2290b9fb8e4cc1128a890e2d62ce3181"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","bb23ec7a993d8306b1254e59626928c8"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","9531b8da30239e4a74649f8dc3671e7c"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","be8c8d46591757569d08bd8803d3e3ec"],["E:/qinhao/hexo/public/archives/index.html","abdc4811beff8616c01edaa695f6814b"],["E:/qinhao/hexo/public/archives/page/2/index.html","cd391995a1555c429dddce938e8bf051"],["E:/qinhao/hexo/public/archives/page/3/index.html","abdc4811beff8616c01edaa695f6814b"],["E:/qinhao/hexo/public/archives/page/4/index.html","cd391995a1555c429dddce938e8bf051"],["E:/qinhao/hexo/public/archives/page/5/index.html","cd391995a1555c429dddce938e8bf051"],["E:/qinhao/hexo/public/archives/page/6/index.html","cd391995a1555c429dddce938e8bf051"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/C语言/index.html","e6fff6f0d11d9f4d87e61a95ab19db4d"],["E:/qinhao/hexo/public/categories/Java/index.html","04d35a78849484102b66cc65a6212bae"],["E:/qinhao/hexo/public/categories/Linux/index.html","c41b50e9a6f9320e5e0dee6e0f918505"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","1e1237e0797230ff88c7677eb620e4e4"],["E:/qinhao/hexo/public/categories/Python/index.html","e99504a135c5c1cd175725f07329dde1"],["E:/qinhao/hexo/public/categories/交换机/index.html","c1137ec336436e839366d1cc59aaa508"],["E:/qinhao/hexo/public/categories/华为认证/index.html","782c8687856935cade191d9065d11a61"],["E:/qinhao/hexo/public/categories/小技巧/index.html","8c6c47e255394af228614f7f68ff4b03"],["E:/qinhao/hexo/public/categories/数据库/index.html","afea96c60ec92aae3ee29fa2cb1c3dd7"],["E:/qinhao/hexo/public/categories/服务器/index.html","8390e68fbd0dbfe39f79fb5ba2100be7"],["E:/qinhao/hexo/public/categories/网络安全/index.html","393b8b85a65b24784418708279b9b56d"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","7ca3edac1b6df4e371a293bae12cef8e"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","907b6d5df84babadeb2231d9efbda0f9"],["E:/qinhao/hexo/public/categories/软件破解/index.html","733c62ab65b752cff8f0870d27392bc7"],["E:/qinhao/hexo/public/categories/通信技术/index.html","d533bbaaea2004f111e569d0ec40670f"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","fdadc69bc327693e462633d619a3392a"],["E:/qinhao/hexo/public/category/index.html","c54b43a69f6547c8cd7176fb35f438ec"],["E:/qinhao/hexo/public/css/style.css","940a599036b2a40f1cda8deba1fa0555"],["E:/qinhao/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["E:/qinhao/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["E:/qinhao/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/friends/index.html","3354ae3a10cc715cbfb5019c9fea8bf3"],["E:/qinhao/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["E:/qinhao/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["E:/qinhao/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["E:/qinhao/hexo/public/index.html","06ca43dc08ae308bf59c41649b3f0826"],["E:/qinhao/hexo/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["E:/qinhao/hexo/public/js/app.js","804e218b8d00f3db3d393a7811cc0f3c"],["E:/qinhao/hexo/public/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["E:/qinhao/hexo/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["E:/qinhao/hexo/public/mylist/index.html","4256d7664d98840e8d5b7cdc7d6c25c9"],["E:/qinhao/hexo/public/page/2/index.html","a0fd8b98a321ae52b74fc2ff15e74c8f"],["E:/qinhao/hexo/public/page/3/index.html","b43153e32121e3d0b5c74da3d54edd76"],["E:/qinhao/hexo/public/page/4/index.html","4ac75df41c20af3fd5da7562cba126d9"],["E:/qinhao/hexo/public/page/5/index.html","eee0e3c3ed71503c7a00ce382270fa59"],["E:/qinhao/hexo/public/page/6/index.html","9478a33814d629ed4d6ad3d0c443f34e"],["E:/qinhao/hexo/public/sw-register.js","d4cc8ef251f5cccbdd75293cfab55c00"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/tags/IIS/index.html","7146e6e0421c4dd684f6c374be33a2d6"],["E:/qinhao/hexo/public/tags/MySQL/index.html","4ef47faf183909910ec084e17a5540e4"],["E:/qinhao/hexo/public/tags/Photoshop/index.html","9853982f7fbc00e8c97219a8b8a19cbc"],["E:/qinhao/hexo/public/tags/VPN/index.html","91e66e91aeca87800bee2a6b0b94c2ec"],["E:/qinhao/hexo/public/tags/Web服务器/index.html","0f876d303c6d673363050412829c0bc9"],["E:/qinhao/hexo/public/tags/index.html","418587eab468949ec56c048bc93f7e5e"],["E:/qinhao/hexo/public/tags/交换机/index.html","fe7e20f6b9db096c522840ff9cf1ba21"],["E:/qinhao/hexo/public/tags/图像处理/index.html","e921535a2544c9b294a1f848f3475c7c"],["E:/qinhao/hexo/public/tags/基础网络/index.html","5c9c993731260cdc13f4cac7664bbe03"],["E:/qinhao/hexo/public/tags/思科/index.html","1ef8ac8b4c6e762b5b805e88a32b4dd2"],["E:/qinhao/hexo/public/tags/思科GRE/index.html","543b84cc3c7425706a0149b25497aeb3"],["E:/qinhao/hexo/public/tags/数据库/index.html","868ee0441e2525fa4a194d607f6c975d"],["E:/qinhao/hexo/public/tags/无线技术/index.html","65f9257647da555c9df493af8a9e558b"],["E:/qinhao/hexo/public/tags/无线技术/page/2/index.html","72835a157867d137098f95b2f062db7b"],["E:/qinhao/hexo/public/tags/系统安装/index.html","0156a979c7984ad6090dca47a2e8738f"],["E:/qinhao/hexo/public/tags/网络安全/index.html","f7db81dac8a6ef587e8e33d8ae958457"],["E:/qinhao/hexo/public/tags/网络技术/index.html","abe1a144a417cd686e0f109fe81cf0f6"],["E:/qinhao/hexo/public/tags/计算机三级/index.html","9c9511a446439513c485e798b4b6d429"],["E:/qinhao/hexo/public/tags/路由器/index.html","816757571ab7fa0862c3eb383e469865"],["E:/qinhao/hexo/public/tags/软考/index.html","e0f278fd6728a195611eb4087bbc41f6"],["E:/qinhao/hexo/public/tags/通信原理/index.html","57f24a5d6ab439011d748d8c40aa517d"],["E:/qinhao/hexo/public/tags/通信原理/page/2/index.html","bfe09aa1535bef54586223c07f2794ec"],["E:/qinhao/hexo/public/tags/通信技术/index.html","75f8c0cc6032fa36bfec5c42a5510182"],["E:/qinhao/hexo/public/tags/通信技术/page/2/index.html","06183dfc0fb632d502ddbdebabb2c007"]];
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







