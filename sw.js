/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["/2020/02/14/RedHat_setup_script/index.html","a562500b52e00fd2a65a600c4198bb27"],["/2020/02/14/Windows_Web_build_environment/index.html","69ed38691e63d32c9caa58f640ce373a"],["/2020/02/14/Windows_Web_build_website/index.html","09653c944759f1f113218f7da65f49f4"],["/2020/02/15/Web_site_SSL/index.html","9191df3ca466c6e5e57f37da89dffc11"],["/2020/02/15/Windows_Web_often_use/index.html","d485e35d50adf4f3a1cd9dbfa68bfee5"],["/2020/02/15/a_server_build_many_webs/index.html","cb6a3b52ce43b728ae6ba753769fc454"],["/2020/02/24/ssh/index.html","ef79f2ec1a9dabc95405e721b85d2440"],["/2020/02/27/MySQL8_basics/index.html","0f20d1c57c9c4be00872f3df4c5d1ea8"],["/2020/02/27/OLT_command/index.html","d914fc6f50586196cc89ae44460266ee"],["/2020/02/27/computer_network_basics/index.html","ba3d23b58e7c9561c157526b830727f0"],["/2020/02/27/switchport-security/index.html","a9864aed6935e41ad5ef59eb9ccfc82a"],["/2020/03/04/acl/index.html","f5f86400c6bd3b1a022a84211ba22a94"],["/2020/03/06/mobile_communication/index.html","3faf52c0a1fd0165ca555a9e98a95328"],["/2020/03/06/wireless_word/index.html","65cd1671e438673301c5bb435b28246c"],["/2020/03/07/3G/index.html","2018f41862f4fef8789f5d24e5863b50"],["/2020/03/07/GSM/index.html","8529f8aac12cccdcb720c574ad065351"],["/2020/03/07/IP_Bearer_Network_basic/index.html","be4ae6a295560af160658e54530d17f0"],["/2020/03/07/LTE/index.html","d1f703a675f1c92b249ceabaefcd9a70"],["/2020/03/07/NB-IoT/index.html","8feb13065df45be96bd1f63ca74489a3"],["/2020/03/07/optical_transport_network_basic/index.html","075f1c835c70eb28f896cdd951837928"],["/2020/03/07/wireless_radio/index.html","78a8571bebb9544f574ccacfa32c3bf0"],["/2020/03/11/Linux_often_use/index.html","e9894de1cae0dee1b5f4c38ae2b1f1c4"],["/2020/03/11/Python_basic_(1)/index.html","f186513ec648d4378831eccc6ff44de5"],["/2020/03/21/GRE-VPN/index.html","7f93dbfeffc014964b2f14acb6d775b7"],["/2020/03/25/IPSec_VPN/index.html","f268cc60b42c6052acbaed74ec043f26"],["/2020/03/29/FixedTools/index.html","c0e6ff84171c55dd90c465cce17ec0f5"],["/2020/03/30/GRE-over-IPSec/index.html","4ec8e331bb143ab22007700d4260a0f7"],["/2020/03/31/bitwarden/index.html","286491af2d8fe18bebe6792192214291"],["/2020/04/03/Layer/index.html","033d5222e49e390f9ad4a30d2d244b62"],["/2020/04/04/color/index.html","625a4a8dda21fc134be23bb875657e76"],["/2020/04/09/wireless_framework/index.html","20f1eafab098a74bc078fed834b843ce"],["/2020/04/13/manage-MAN-skill/index.html","cb1f769ba1d2f1d15735787bc29b403f"],["/2020/04/13/structure-of-MAN/index.html","b5d30c1c9e68aba5c8e30698b52a6a32"],["/2020/04/20/TD-LTE-System/index.html","9bf39272b93cd6f91329b38b7a55fe0c"],["/2020/04/24/Network_Access/index.html","3f6b15dbb9956eb1b1207754619e7541"],["/2020/04/24/build-MAN-idea/index.html","fc277c748a65fa44366bc1d02b70dfb7"],["/2020/04/25/OFDMA/index.html","af79fdc9863fd7b0e17fceb9206de8d4"],["/2020/05/11/MIMO/index.html","515bdde57c143f90d167d465ec7e72b0"],["/2020/05/12/ICIC/index.html","8caf8a6a3cd8f9913bec76e64ea1a0cf"],["/2020/05/19/No-module-named-pip/index.html","a15e961fa51c9f7b7cc1d7285076f56d"],["/2020/05/19/huawei-PCManager/index.html","ae7dc6c22d0750ac32ee6f82e10a90af"],["/2020/05/19/not-allow-F12/index.html","394bfb358655e7382621675f92fbda69"],["/2020/05/20/python-2/index.html","f4f37a187e067b95491e41a1b6b3d08e"],["/2020/05/23/free-get-189vip/index.html","7a872c1f8f05f56c6d63d91b9ec7879a"],["/2020/05/24/Python-3/index.html","5474938ee59c172fcb295f12a092b629"],["/2020/05/25/Python-4/index.html","7fa19db9d310def131ab70c11e5747c8"],["/2020/05/29/huawei-exam-application/index.html","bfd53996fb3cc587a0737c8baf628171"],["/2020/06/01/Python-5/index.html","4c8c9813e5e4f3687bce5e1c89fba1d9"],["/2020/06/11/lanzous/index.html","cec2bf0ba13fe95c1e6048e7344d15b7"],["/2020/06/13/mysql-install/index.html","53dba853540b1db721c6c5adf7b3a771"],["/2020/07/07/Python_cards_manage/index.html","c3d0c328f824d7d3b86938ef0c3441ca"],["/2020/07/07/Python_variable/index.html","fe14104203cb38e4291a05d376bcd7a5"],["/2020/07/17/computer_Internet_1/index.html","901eada24a0cf0d1c79135042694e751"],["/2020/08/13/Files_and_directories/index.html","07a9158f4fe6587b9f533e9d2633e6a5"],["/2020/08/13/system_info/index.html","5e9041935c40938aca3f1461c6b262bb"],["/ByteDanceVerify.html","e1adddab45735a0bb8f4eea71bedeb0a"],["/about/index.html","40bed6947e83773b3cc1d39346c17689"],["/archives/2020/02/index.html","a47154302e4bbc434a956fd4fc241632"],["/archives/2020/02/page/2/index.html","8cb00eb2210b7b6b65e6740e6ffddf1a"],["/archives/2020/03/index.html","fbbf55efc831e03ed13a73d0f5e873ef"],["/archives/2020/03/page/2/index.html","4008b75949973ea1a581a582c7a04305"],["/archives/2020/04/index.html","1e1a9e765402b433a5869295d17331e5"],["/archives/2020/05/index.html","3ee592b9e540cfab8395788176ff6dc8"],["/archives/2020/06/index.html","9f38c54d5d2ff2e190ed9a95fe87e960"],["/archives/2020/07/index.html","8036415ed6b11d61efaa02d6fe7068bf"],["/archives/2020/08/index.html","106c0297a1236a6e700654933e5fc4c0"],["/archives/2020/index.html","cff6ce0746cc65d49bb16f97ff9fedf0"],["/archives/2020/page/2/index.html","bd36dfbb6572c6847af06d9c5c8fba19"],["/archives/2020/page/3/index.html","ccdddb6823360585171fb5f64d4f0b2a"],["/archives/2020/page/4/index.html","a8c26c19b522967517f87719976f5ab9"],["/archives/2020/page/5/index.html","b3373166ffd387176b6a2a8c35bbd455"],["/archives/2020/page/6/index.html","1a2101c8fda083db90f4f211d12bfee5"],["/archives/categories/技术/HP交换机配置.html","dc078fca735033bbb43dcb4590b63a17"],["/archives/index.html","f96efaf08c41d6d5a7c70b5d75dfbf88"],["/archives/page/2/index.html","f96efaf08c41d6d5a7c70b5d75dfbf88"],["/archives/page/3/index.html","f96efaf08c41d6d5a7c70b5d75dfbf88"],["/archives/page/4/index.html","bcff9ef5aaa35aae69568b400571a0b8"],["/archives/page/5/index.html","bcff9ef5aaa35aae69568b400571a0b8"],["/archives/page/6/index.html","bcff9ef5aaa35aae69568b400571a0b8"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux/index.html","58bfb399de7426a66afb2fb627996034"],["/categories/Photoshop/index.html","890efcbab0cbf44b548c382b0725450d"],["/categories/Python/index.html","62d8944b8e929bc3008bcebf0f140f45"],["/categories/交换机/index.html","b9e409b4c2cfc2dbb468d67de7adbae1"],["/categories/华为认证/index.html","664f2be136da635e6001bd6e3154b5ab"],["/categories/小技巧/index.html","15c722d5910fd984ec7534864052df84"],["/categories/数据库/index.html","79d32252c4625122deeb74a1b0c55b95"],["/categories/服务器/index.html","42dd82cdd66ab8ad0e4f699e707db15f"],["/categories/网络安全/index.html","11aa1377cc6ae28524523f8c0546781e"],["/categories/计算机三级/index.html","d623106165d105750991a1b26bb7a8df"],["/categories/计算机网络/index.html","e7ef425dc53523709c3f29fda93ee659"],["/categories/软件破解/index.html","768e4397d6788eb8c64d1027d42d16e6"],["/categories/通信技术/index.html","dc83ab6ede67e702cc643808ac9ecc4e"],["/categories/通信技术/page/2/index.html","172937f077bd2f403d3d3099d68e5997"],["/category/index.html","105da0cd41257b19a29b3737d3d3689d"],["/css/style.css","940a599036b2a40f1cda8deba1fa0555"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["/friends/index.html","bf36a06d0105cf975feb46bab4387b7c"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/index.html","04e0c99d928bb88623b8f8c55b511d11"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","804e218b8d00f3db3d393a7811cc0f3c"],["/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/mylist/index.html","1ae6d0fefb453a11b054e75d517b7f19"],["/page/2/index.html","66075f41f2972033bb63b95ab8b052b6"],["/page/3/index.html","34e660fad0f20c9428c0ef0020f76921"],["/page/4/index.html","3e3d9727e5020fbac61b377e18993a19"],["/page/5/index.html","6d13b85743e76fbff06d04b7e412cf2b"],["/page/6/index.html","e015b9d801754fd5588eac5db48012a4"],["/service-worker.js","122a3efd2fac5ebe89cb6c19d9f6ac68"],["/sw-register.js","45de52d4e0bce6850fc9dac9397032f0"],["/tags/IIS/index.html","f91ef78615d8033358c299e26dddce17"],["/tags/MySQL/index.html","1b15db82bfc3c56e0f5331efae6917e1"],["/tags/Photoshop/index.html","5f6ad4e577949f51ab6b354042114eb4"],["/tags/VPN/index.html","1db6978fefd596cfd690269877be3378"],["/tags/Web服务器/index.html","cf6ee4135a3181eb61481aff3ee7bfa0"],["/tags/index.html","46390b2ee5c48685a3c7c6dc0f5112ef"],["/tags/交换机/index.html","7611f9dde403613cf409f3bfd9db51d4"],["/tags/图像处理/index.html","c3698396fa64d023c70facf148ae9e71"],["/tags/基础网络/index.html","fb9b88eec5bc7f432cd9e6ee63c536c0"],["/tags/思科/index.html","76ca77adc4126e0a70b0566850ac047f"],["/tags/思科GRE/index.html","355a52a9651e67959179246e17590a72"],["/tags/数据库/index.html","216910caa8cd93c5460dbb8f50bbe43c"],["/tags/无线技术/index.html","86ff25e8695847a33ff713488b617d4e"],["/tags/无线技术/page/2/index.html","a30195bb4a1e81f13e183b319b1708d7"],["/tags/系统安装/index.html","eabd0c6731fb5f4e3d0ca344ec5233cc"],["/tags/网络安全/index.html","1da536958c59274d1ba44be688031919"],["/tags/网络技术/index.html","71dcdf1e99556b3ea26f188e242ee1d7"],["/tags/计算机三级/index.html","414c0ab26434fcb3fe40a061c21abd9d"],["/tags/路由器/index.html","ce213e468e7abc755d2222cbc1c0eddd"],["/tags/软考/index.html","f7892d79bb43db5616c5b7ee10c9ce51"],["/tags/通信原理/index.html","1da386f814e99272bfc602d2c51c3760"],["/tags/通信原理/page/2/index.html","d9292900dde798eebcf55d49ab9a3170"],["/tags/通信技术/index.html","db847162e439bd6d0294f8ffc72b0a83"],["/tags/通信技术/page/2/index.html","4e8f63e8d08f02af154bc38c5a357413"]];
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
