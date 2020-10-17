/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["/2020/02/14/RedHat_setup_script/index.html","0514f4c31a566e2b1e4283eefec59a88"],["/2020/02/14/Windows_Web_build_environment/index.html","90cd40de8df0976741aa403d5c086177"],["/2020/02/14/Windows_Web_build_website/index.html","2b61d0be8b3429c098cca91a1c3e1b9e"],["/2020/02/15/Web_site_SSL/index.html","48cb6e9558f7f58749f7aad8699c2505"],["/2020/02/15/Windows_Web_often_use/index.html","36bb886a08f1c2d2718d11011981679f"],["/2020/02/15/a_server_build_many_webs/index.html","20b48691f39ffc284f1509a156f3a66d"],["/2020/02/24/ssh/index.html","39b01f7f0abdbae8fd9db3225505e875"],["/2020/02/27/MySQL8_basics/index.html","b8926eca07465402117c778e8037c7ba"],["/2020/02/27/OLT_command/index.html","29cb946a671ae8559d7cb20299d00011"],["/2020/02/27/computer_network_basics/index.html","999bbea26fefb63996b4ba6ec7fcfb96"],["/2020/02/27/switchport-security/index.html","05770dda5bb32d7e0da613ae24418f0e"],["/2020/03/04/acl/index.html","8ead2a6d57c45c8968e98ab62fd8b329"],["/2020/03/06/mobile_communication/index.html","b3c226242601c93a6c70ec4ac6d5a209"],["/2020/03/06/wireless_word/index.html","05c7d95982e0f9c23e01d88bc19e43bd"],["/2020/03/07/3G/index.html","a0c23f0afb7f39245bc5f44e1c717b3a"],["/2020/03/07/GSM/index.html","4378ff2ac18a4c10168acab1cb83a65e"],["/2020/03/07/IP_Bearer_Network_basic/index.html","990244638a59048464898dfda77175e5"],["/2020/03/07/LTE/index.html","642b90d0db3d7a239c4e160d101ebe7d"],["/2020/03/07/NB-IoT/index.html","e54e03e9f27cdc75b6df486d54f5d0e5"],["/2020/03/07/optical_transport_network_basic/index.html","0d380dbeaf419bbfb722e75ea57e89b1"],["/2020/03/07/wireless_radio/index.html","e22bbf8bde7c5e0c1b9ef887f0273123"],["/2020/03/11/Linux_often_use/index.html","58b06709d90aba18a9ed301d98a6022b"],["/2020/03/11/Python_basic_(1)/index.html","dde5c1f0c291fd3feb4014bfdc826948"],["/2020/03/21/GRE-VPN/index.html","451964c2a316d7f09a4c91cbdbb5556e"],["/2020/03/25/IPSec_VPN/index.html","7dd3526091805e9304b3f8d152470744"],["/2020/03/29/FixedTools/index.html","045acd99f461c795eb52168cb4606a5d"],["/2020/03/30/GRE-over-IPSec/index.html","9e1f2ef4933b0801772859f9815d27d5"],["/2020/03/31/bitwarden/index.html","b1886b2decf3ef047c5e4d32ff54383a"],["/2020/04/03/Layer/index.html","54d787801138dca776265213065fc2ce"],["/2020/04/04/color/index.html","1f8e5ac29d1fbbb8969a997657ab0c2a"],["/2020/04/09/wireless_framework/index.html","30d960cce66849c5c72d4d9d102da659"],["/2020/04/13/manage-MAN-skill/index.html","0371013c1431adbe5d30aaf157d044e4"],["/2020/04/13/structure-of-MAN/index.html","63f86cbb6c9fce018aef823a9e545ac3"],["/2020/04/20/TD-LTE-System/index.html","116adf5f694dd5e5d37d7a04a66b6ce8"],["/2020/04/24/Network_Access/index.html","a81c2086d2a4a6edb93e37711d7bb187"],["/2020/04/24/build-MAN-idea/index.html","c8848e95d09ead89b5dc43091f8ebcb5"],["/2020/04/25/OFDMA/index.html","055345ec97ee97fa6c1d5edfd5993ffc"],["/2020/05/11/MIMO/index.html","411c4be22933779baf437501eabe5ed8"],["/2020/05/12/ICIC/index.html","01033cb6a08822e2c02f6bb3a12e1e53"],["/2020/05/19/No-module-named-pip/index.html","9558696f43cd045d834988cbddcc57e4"],["/2020/05/19/huawei-PCManager/index.html","7938d91c78a874ac26a30aaed2662503"],["/2020/05/19/not-allow-F12/index.html","1bf64c75938d18b35ea59a406e5e7654"],["/2020/05/20/python-2/index.html","5250f217d6eebbb976241d7a09744f1c"],["/2020/05/23/free-get-189vip/index.html","93d871f1070fd85ce46cecf283439a69"],["/2020/05/24/Python-3/index.html","ccbca5b1ee0bad574a3a4d17fc513aa6"],["/2020/05/25/Python-4/index.html","ae0d2eea9c500c8d9ea44601b4baf54c"],["/2020/05/29/huawei-exam-application/index.html","4a63f4b070cb338f7d355d26a120eec8"],["/2020/06/01/Python-5/index.html","e48b505f0aa1c8dfd81940da725be024"],["/2020/06/11/lanzous/index.html","5ed7e1e4d120bfb4bdbd06f734c315c5"],["/2020/06/13/mysql-install/index.html","d6d9ca7bf9464057f72fc1dcddfc268c"],["/2020/07/07/Python_cards_manage/index.html","68fa521af2e9ed6a68417ba04793242f"],["/2020/07/07/Python_variable/index.html","3e1b3c80dc051f326e51ce638e00d422"],["/2020/07/17/computer_Internet_1/index.html","3bc1855f366a1d1ebf9d6185720f1914"],["/2020/08/13/Files_and_directories/index.html","19bd0e580430bdb6b7cb428f6af3e17a"],["/2020/08/13/system_info/index.html","06f0a8e42916b326b1c6f5b0f7e8cc27"],["/2020/10/01/5G网络优化/index.html","8017ca97fe75fb1e7785d814fd5fd016"],["/2020/10/05/linux/index.html","cfc6831ab12b8de5a20c76a7023bd291"],["/ByteDanceVerify.html","f609c950594b076be1e6db5e791363fd"],["/about/index.html","697ded7853a08bf4951295c41d5b59b8"],["/archives/2020/02/index.html","3224ba6519aade89a38b6f2840a730f2"],["/archives/2020/02/page/2/index.html","04d6c62b42d744d5a0e5ba4b96a2049f"],["/archives/2020/03/index.html","4e5cea0ee68254c29eff871f69811228"],["/archives/2020/03/page/2/index.html","4ba7e73db2959390722180e1870a6ac9"],["/archives/2020/04/index.html","5a2063d49fd6bbb08ba763d4470b5646"],["/archives/2020/05/index.html","a7d689b409bf0880dbb4370e532960d2"],["/archives/2020/06/index.html","334a1960dc83aba701b32388130ec2b9"],["/archives/2020/07/index.html","bfdf43a9125ae201ac3093cbf97f2490"],["/archives/2020/08/index.html","18a169fe76e7348c852e7b3775a13623"],["/archives/2020/10/index.html","641495357ff4912ec277f3d340d52a34"],["/archives/2020/index.html","3c169f6792b627262b4679b211df46cd"],["/archives/2020/page/2/index.html","2356566f78d80bd3ded4f227d302d0a1"],["/archives/2020/page/3/index.html","9ad478b3e97b01d49e5b18d26630507f"],["/archives/2020/page/4/index.html","1e375073af8eb6ee10daba49144be9f5"],["/archives/2020/page/5/index.html","d016de7de2cb517c7137362b13e7b231"],["/archives/2020/page/6/index.html","3ba415f416b1ca743d1199c8a6f7cc11"],["/archives/categories/技术/HP交换机配置.html","0c8ac9a3f140958a934729a64e760f6b"],["/archives/index.html","a691c22c34d44a034aed2be22db19e5d"],["/archives/page/2/index.html","a691c22c34d44a034aed2be22db19e5d"],["/archives/page/3/index.html","a691c22c34d44a034aed2be22db19e5d"],["/archives/page/4/index.html","0f7300892075c84f8d0ec178df806e6a"],["/archives/page/5/index.html","0f7300892075c84f8d0ec178df806e6a"],["/archives/page/6/index.html","0f7300892075c84f8d0ec178df806e6a"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux/index.html","138c3e5d7887486719e00cd9f048bcb0"],["/categories/Photoshop/index.html","ab9cc992e23c52f587e9660c7b98b32f"],["/categories/Python/index.html","2563b448dbb3d053cc1e107522e11c9c"],["/categories/交换机/index.html","d9a3dbf168380b69d22faf5162e6d5aa"],["/categories/华为认证/index.html","098206adc60074d03776750373d738fb"],["/categories/小技巧/index.html","aeb2a2bc69219626e93417f721ad0ee9"],["/categories/数据库/index.html","4bafe991773ffe8dd77b1beca103574b"],["/categories/服务器/index.html","cec266b2b54337c3089db5235addd57e"],["/categories/网络安全/index.html","839e238304064d78e813484d057e0b71"],["/categories/计算机三级/index.html","ce9160824902d912afcd346f65a4bceb"],["/categories/计算机网络/index.html","09fdd00306518301ef2bab2c4bb7c087"],["/categories/软件破解/index.html","b5b6d88e9ff5f4ef94a15091ebe1e19c"],["/categories/通信技术/index.html","bf5488f85e0d78f9cade4409ad018f7f"],["/categories/通信技术/page/2/index.html","8d5e864889dc25748edcbdc8fd55a66c"],["/category/index.html","5ad63a27d5172ddb3664ccc4680aa1d8"],["/css/style.css","940a599036b2a40f1cda8deba1fa0555"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["/friends/index.html","b82d5f86837058b94159e8d69595662e"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/index.html","54478e41b95b99acd656c571d015dc07"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","804e218b8d00f3db3d393a7811cc0f3c"],["/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/mylist/index.html","296ddf8d659a0125fa707d64159c7aa9"],["/page/2/index.html","1dad000a9aa4bf4e3f0436bbab05a1d3"],["/page/3/index.html","8da20f0628b9d5732b9cfdc64103a63e"],["/page/4/index.html","9a8e9e6877cc9d2ab667bdd050aab6d7"],["/page/5/index.html","76563dab4a2a1767321678f1128187e7"],["/page/6/index.html","93279fe8cb67cacc399b11999a6d71ed"],["/service-worker.js","820e5a04ec8e2cf2ec7f65d0736b9d8c"],["/sw-register.js","7356bebe879bd3b19cdbe8f861e1bf19"],["/tags/IIS/index.html","79dcf1dc949176b3b18833127d846f3e"],["/tags/MySQL/index.html","4d109318f0fa911ff750b4d5308d1f0d"],["/tags/Photoshop/index.html","bc9d7094d0e676d11b4f901ce58ea695"],["/tags/VPN/index.html","68458319d77631d599e5b22cd79aa166"],["/tags/Web服务器/index.html","60e4ad5baa22b67b256fb32aaab270ac"],["/tags/index.html","679f96f5be818235ebe7aefe14381ab1"],["/tags/交换机/index.html","771b7d22a49649aee9a2270813fe12a0"],["/tags/图像处理/index.html","19f265f953fb52bf48250826fd0c139a"],["/tags/基础网络/index.html","f4577c0c4384bcf583df60b2247dbc08"],["/tags/思科/index.html","ec81cb008103f8ba17a802bd300155de"],["/tags/思科GRE/index.html","a8dfef4f23d8475cb3165a75d19453a7"],["/tags/数据库/index.html","fbbbc6210e695e718b604e247d3432fe"],["/tags/无线技术/index.html","7d4ed5b31527130eee632d7e44ce1d33"],["/tags/无线技术/page/2/index.html","5a5530315aea8fa1ba12a4336e5916e9"],["/tags/系统安装/index.html","0e32df804a23ffc999bb820b63e500f0"],["/tags/网络安全/index.html","511572757fb48366e4550304054f9791"],["/tags/网络技术/index.html","60dc38a279744f845dcdd189eb62966f"],["/tags/计算机三级/index.html","f8ded747ca541aef259f00879a830b7e"],["/tags/路由器/index.html","6b69ee03efe4463b8aa970e0885f1e37"],["/tags/软考/index.html","6cd6f93ad7e8af588e74498a5031540b"],["/tags/通信原理/index.html","9771f1e2a40abc725a80ca480d32154d"],["/tags/通信原理/page/2/index.html","559ad58632441edbf9ee1f43469280c2"],["/tags/通信技术/index.html","01ef929b92ae29d3bd6ecc760745ca5e"],["/tags/通信技术/page/2/index.html","e6570dad700504c09a50521ded01b9af"]];
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
