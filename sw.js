/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["/2020/02/14/RedHat_setup_script/index.html","a801eda41232fd9b195757992d4bf37f"],["/2020/02/14/Windows_Web_build_environment/index.html","cd89469b8c4d7c688a286747411539e9"],["/2020/02/14/Windows_Web_build_website/index.html","ea671d2db1670f328a6c638f3742efdd"],["/2020/02/15/Web_site_SSL/index.html","382665b8a89ab329ac1dbf959b757d33"],["/2020/02/15/Windows_Web_often_use/index.html","b3313bd7ff4bafffa0e9ffad0b7c5812"],["/2020/02/15/a_server_build_many_webs/index.html","5dccf0bb47f7ad4f393c3c39803d8c3e"],["/2020/02/24/ssh/index.html","1092ba57203aac12b96d181fc533ed62"],["/2020/02/27/MySQL8_basics/index.html","f0ce8248722cd07957524953d5cb0b4e"],["/2020/02/27/OLT_command/index.html","1138cb8cfa4e90ff5df322c54cc69cc9"],["/2020/02/27/computer_network_basics/index.html","b16b08c85ecd45676090b9e0fd6ec0a9"],["/2020/02/27/switchport-security/index.html","a3c79f385169e5996842077e5c558797"],["/2020/03/04/acl/index.html","3fb0be92b280c4f93c31a1dbcd84ac98"],["/2020/03/06/mobile_communication/index.html","b87ed0b30afce2539a7d425a5b3e6f96"],["/2020/03/06/wireless_word/index.html","b3358bb7d5188b6dae2926e6a7e55ee6"],["/2020/03/07/3G/index.html","179eb935a4086cd8c42541c685e4656b"],["/2020/03/07/GSM/index.html","eba4d5a1bc86037a26395aed9fafb9a6"],["/2020/03/07/IP_Bearer_Network_basic/index.html","28415f22baac3913184e44582f8de557"],["/2020/03/07/LTE/index.html","81fba2f1a65cdfbd432186f6b07ac3ef"],["/2020/03/07/NB-IoT/index.html","c8b0a1507fadb14e1c5ad35fdd81c9b7"],["/2020/03/07/optical_transport_network_basic/index.html","bbf1ced31bcd512d34ae368ab81aebd1"],["/2020/03/07/wireless_radio/index.html","f36f18050bc77ceb529ff1faa61f69d6"],["/2020/03/11/Linux_often_use/index.html","feb313f016673f5a75c5b9ccaea9f2dc"],["/2020/03/11/Python_basic_(1)/index.html","2d15d82dab210d19f6fa36e96c347cbf"],["/2020/03/21/GRE-VPN/index.html","7307959d26078be5d38d4d835e4faa94"],["/2020/03/25/IPSec_VPN/index.html","337d7c46123b5d6d51cc7dbf617a9153"],["/2020/03/29/FixedTools/index.html","f6ebac7e54e0bb79ad670056b4e1dc94"],["/2020/03/30/GRE-over-IPSec/index.html","122749fe8ec97537084029aea529f449"],["/2020/03/31/bitwarden/index.html","135d37e85f97514c410a814b5850e38d"],["/2020/04/03/Layer/index.html","eb22b3f8c7d3ade433bc4db7f1c4b744"],["/2020/04/04/color/index.html","028934e0ead8f90a9507ec58ad87439e"],["/2020/04/09/wireless_framework/index.html","580a3fb643b5bc46762e759a40aa5c0c"],["/2020/04/13/manage-MAN-skill/index.html","6ceea75247a78f61d5bc801810a8d3d1"],["/2020/04/13/structure-of-MAN/index.html","8abe81739bc45825bffb78b767b0f490"],["/2020/04/20/TD-LTE-System/index.html","6e40a6ec596e9655477a39f2e84d8f1c"],["/2020/04/24/Network_Access/index.html","4be5e63c20a91b484685d917b9e8bc97"],["/2020/04/24/build-MAN-idea/index.html","96067a3c90b7d31575d6bc5492253a76"],["/2020/04/25/OFDMA/index.html","23993152adee2296dd01fe80348f0d14"],["/2020/05/11/MIMO/index.html","344ca5d03b151c1ba5645d976b8086c7"],["/2020/05/12/ICIC/index.html","7f3877c07a63ce1f1ef80075adbec639"],["/2020/05/19/No-module-named-pip/index.html","19c3f5acff7cbf86483771fa0a9b0161"],["/2020/05/19/huawei-PCManager/index.html","797929686b8954cc873aef20fca3425b"],["/2020/05/19/not-allow-F12/index.html","5246327551c4b4bfce9ea180a7bb2abe"],["/2020/05/20/python-2/index.html","d48f70acb1d391a359dd69f72a7f6dc6"],["/2020/05/23/free-get-189vip/index.html","8282390cb403be1d265e96f4bcdee35f"],["/2020/05/24/Python-3/index.html","036157ca6c38beba336bdbc79bdc6260"],["/2020/05/25/Python-4/index.html","57e01ba3fe8e92c3803705657af3bf53"],["/2020/05/29/huawei-exam-application/index.html","7bc9cea4827e5cac76d5c4ab6851f737"],["/2020/06/01/Python-5/index.html","be02cf0c7baeea14785e55306628f70a"],["/2020/06/11/lanzous/index.html","4b22db6ccf815653e63f6c210af6e485"],["/2020/06/13/mysql-install/index.html","abe5b49be23d00a39fb1f31c58c2b986"],["/2020/07/07/Python_cards_manage/index.html","65ed060bd0dc38214495af7f9e32b1d1"],["/2020/07/07/Python_variable/index.html","9bd3af73dad76e3e6719527d3e535694"],["/2020/07/17/computer_Internet_1/index.html","78e5d05f434e04e3d5ad71de715f92a2"],["/2020/08/13/Files_and_directories/index.html","78c7c0e75acbc5b0356a6b60a056b288"],["/2020/08/13/system_info/index.html","096350021eb83e55a4482559a88f9377"],["/2020/10/01/5G网络优化/index.html","47e5298bbc11f53ebfcbc56bb442b4a0"],["/2020/10/05/linux/index.html","ee0f7e6b2477d2f7963fa0b7818137f2"],["/2020/10/20/Design_patterns_1/index.html","b7508ee7308bd301f61f560245aa9585"],["/2020/11/01/network_security_comprehensive/index.html","02365ae066bf94a02799b67843acd79e"],["/2020/12/15/C_basic/index.html","3911e94382242b185350e7a0f9f414f1"],["/ByteDanceVerify.html","1c6aa184666138dedb4d0a9a207e3eca"],["/about/index.html","faeced839dbc1f6a89205c3477874f45"],["/archives/2020/02/index.html","d111a645edeb7b86c0df030ec3b7c7fd"],["/archives/2020/02/page/2/index.html","4836e79724f44d3997155222051b5ac1"],["/archives/2020/03/index.html","fc6f7be74fe909f1a6aef92b91f11958"],["/archives/2020/03/page/2/index.html","b2d70242fc1a2f3aa2934ef57f89e13f"],["/archives/2020/04/index.html","bc8f2e9ae2b69ff638f7bb70f57af048"],["/archives/2020/05/index.html","04afc7035a2f11777d193f9cee09e8b4"],["/archives/2020/06/index.html","fc1d4008a0a40b8da1fd5316bf675270"],["/archives/2020/07/index.html","3ebeef121db7165e172bfc61417be693"],["/archives/2020/08/index.html","a6016092ad53d5f85628d52560eb9638"],["/archives/2020/10/index.html","fe4859f0cb675db449a129e81c16b0ff"],["/archives/2020/11/index.html","5f0600350a2204c60db134b3069fcfc7"],["/archives/2020/12/index.html","fbd1702c5b6fcc0abafae45e0f78c252"],["/archives/2020/index.html","b9e780f97da7b36b0f7e78b64874b1ef"],["/archives/2020/page/2/index.html","396d2bed46fc11c392a9db823a7077d7"],["/archives/2020/page/3/index.html","25382633291c5a42e6d8f6f5493741e5"],["/archives/2020/page/4/index.html","91f7a8bbd4335b9165c25ccac03f98e5"],["/archives/2020/page/5/index.html","7ebe2e51afd7cb67da37e45654533ed1"],["/archives/2020/page/6/index.html","a9079c3a51370821fb53843ba09f2576"],["/archives/categories/技术/HP交换机配置.html","fa272ad9a6efc5e949034be9293704b4"],["/archives/index.html","d6c18b834b7228ff3d23fd3505acaa6f"],["/archives/page/2/index.html","4cc38f95f4e9e2d4d201ea0ee8ddb356"],["/archives/page/3/index.html","d6c18b834b7228ff3d23fd3505acaa6f"],["/archives/page/4/index.html","4cc38f95f4e9e2d4d201ea0ee8ddb356"],["/archives/page/5/index.html","4cc38f95f4e9e2d4d201ea0ee8ddb356"],["/archives/page/6/index.html","4cc38f95f4e9e2d4d201ea0ee8ddb356"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C语言/index.html","eee31ec78838bb24d8f91ba390a62b6a"],["/categories/Java/index.html","d8f4c6fe1ca09c69ffdb9e49efada0c5"],["/categories/Linux/index.html","5c56017e8775d7aa3c1360406765f02a"],["/categories/Photoshop/index.html","61dc66540734f336904f48f5e068e257"],["/categories/Python/index.html","04ef5deb7a7e0976f76fe7980b6e93e2"],["/categories/交换机/index.html","f6aacdbd26d183c224d4ed0f979b1f4e"],["/categories/华为认证/index.html","40d0b996440aa533276cbedc8a98b07a"],["/categories/小技巧/index.html","0a1e8cf95de7851fbb8c6890ee8b37fd"],["/categories/数据库/index.html","095460151171f3421e60de53b109bb2f"],["/categories/服务器/index.html","1376af983d4a374a0a24f03b18a8eee8"],["/categories/网络安全/index.html","e5cbe8c93bf1815dc71d52571eba6faf"],["/categories/计算机三级/index.html","75e92930017d04dcd84314e100c33be7"],["/categories/计算机网络/index.html","d51ffa3726099bdf828dee4f9fd6ed19"],["/categories/软件破解/index.html","b7c8a723119d9bbb24beb838b2695e02"],["/categories/通信技术/index.html","e421749346218d08c42bf92709cee5d7"],["/categories/通信技术/page/2/index.html","0ca8d04533d4aedffbf4bb21419ee0bf"],["/category/index.html","2162b63ad57eda821e4d15ea8d66b5a5"],["/css/style.css","940a599036b2a40f1cda8deba1fa0555"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["/friends/index.html","1cf0c1e044b53da8f3082cc68d91f1e0"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/index.html","623b90c50f390020c573d253f55e7188"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","804e218b8d00f3db3d393a7811cc0f3c"],["/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/mylist/index.html","3edefb53ed53dfc0267608c86cf24779"],["/page/2/index.html","37e1e60ccf61c888f01ead7cb4e05df8"],["/page/3/index.html","3bf8fe0be6f82fb7750ddf557abdc3a6"],["/page/4/index.html","020e248662cf50f562c2c4a21b6f0d95"],["/page/5/index.html","fb28c61dc89f672745457bff56efce71"],["/page/6/index.html","a006e776ca5b623e047af69bab42ff35"],["/service-worker.js","d0929bbaa42793948a9ed8f8557a7659"],["/sw-register.js","d981fd0cee9eb96273a20e818aaefd2b"],["/tags/IIS/index.html","4faf90cd8e0900670d769937f631d474"],["/tags/MySQL/index.html","324a396e8fec6abccd2a0561cca7c68f"],["/tags/Photoshop/index.html","3e2ebb9e8e2a95974ca2f10dac7cae4a"],["/tags/VPN/index.html","16fd7cc219b4e2a51b6e070a3f092328"],["/tags/Web服务器/index.html","e2ea09c90566a9f74f1bdcfe3b70efb6"],["/tags/index.html","17e4e799d3b1153d31db946e945f0114"],["/tags/交换机/index.html","e3d1269fda10ec716b606b14cf657e8d"],["/tags/图像处理/index.html","b68236a29d46975291294f1a4110e3a6"],["/tags/基础网络/index.html","39a531755d45d55f2d710dc9093ea755"],["/tags/思科/index.html","f6c88b73a6c594c11e7be78fc12049ed"],["/tags/思科GRE/index.html","1480c58026eb95751f0868fd8d8e7adf"],["/tags/数据库/index.html","8ba06c38955ecbc01a5d584ba415f805"],["/tags/无线技术/index.html","63b8920f35d0aa499c75bc7f409ce2cd"],["/tags/无线技术/page/2/index.html","5a3f914ab24d1a228f7d3a7e2f6de102"],["/tags/系统安装/index.html","2181c7f1bd2f55d7050f96b1c51380f8"],["/tags/网络安全/index.html","cb7d1cf9615077d015a8b734705339aa"],["/tags/网络技术/index.html","97be3bfcc05436850f0346f4adf81289"],["/tags/计算机三级/index.html","5af9b42ff9f5bd8f2da258df4de652fd"],["/tags/路由器/index.html","7da8fa0fa8d70e8ec174c339a74936c5"],["/tags/软考/index.html","82f9fe5178f1115e3a0cb2288efb42e0"],["/tags/通信原理/index.html","9f12b4394b6a31458ff4b0275ae087ed"],["/tags/通信原理/page/2/index.html","dfc0758f4d35aa79f68284777171b48d"],["/tags/通信技术/index.html","02913772b6c79a710bf9ae05e9eb96cc"],["/tags/通信技术/page/2/index.html","290416b24b7c3f7e597d9e0058925406"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
