/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["/2020/02/14/RedHat_setup_script/index.html","a562500b52e00fd2a65a600c4198bb27"],["/2020/02/14/Windows_Web_build_environment/index.html","69ed38691e63d32c9caa58f640ce373a"],["/2020/02/14/Windows_Web_build_website/index.html","09653c944759f1f113218f7da65f49f4"],["/2020/02/15/Web_site_SSL/index.html","9191df3ca466c6e5e57f37da89dffc11"],["/2020/02/15/Windows_Web_often_use/index.html","d485e35d50adf4f3a1cd9dbfa68bfee5"],["/2020/02/15/a_server_build_many_webs/index.html","cb6a3b52ce43b728ae6ba753769fc454"],["/2020/02/24/ssh/index.html","ef79f2ec1a9dabc95405e721b85d2440"],["/2020/02/27/MySQL8_basics/index.html","0f20d1c57c9c4be00872f3df4c5d1ea8"],["/2020/02/27/OLT_command/index.html","d914fc6f50586196cc89ae44460266ee"],["/2020/02/27/computer_network_basics/index.html","ba3d23b58e7c9561c157526b830727f0"],["/2020/02/27/switchport-security/index.html","a9864aed6935e41ad5ef59eb9ccfc82a"],["/2020/03/04/acl/index.html","f5f86400c6bd3b1a022a84211ba22a94"],["/2020/03/06/mobile_communication/index.html","3faf52c0a1fd0165ca555a9e98a95328"],["/2020/03/06/wireless_word/index.html","65cd1671e438673301c5bb435b28246c"],["/2020/03/07/3G/index.html","2018f41862f4fef8789f5d24e5863b50"],["/2020/03/07/GSM/index.html","8529f8aac12cccdcb720c574ad065351"],["/2020/03/07/IP_Bearer_Network_basic/index.html","be4ae6a295560af160658e54530d17f0"],["/2020/03/07/LTE/index.html","d1f703a675f1c92b249ceabaefcd9a70"],["/2020/03/07/NB-IoT/index.html","8feb13065df45be96bd1f63ca74489a3"],["/2020/03/07/optical_transport_network_basic/index.html","075f1c835c70eb28f896cdd951837928"],["/2020/03/07/wireless_radio/index.html","78a8571bebb9544f574ccacfa32c3bf0"],["/2020/03/11/Linux_often_use/index.html","e9894de1cae0dee1b5f4c38ae2b1f1c4"],["/2020/03/11/Python_basic_(1)/index.html","f186513ec648d4378831eccc6ff44de5"],["/2020/03/21/GRE-VPN/index.html","7f93dbfeffc014964b2f14acb6d775b7"],["/2020/03/25/IPSec_VPN/index.html","f268cc60b42c6052acbaed74ec043f26"],["/2020/03/29/FixedTools/index.html","c0e6ff84171c55dd90c465cce17ec0f5"],["/2020/03/30/GRE-over-IPSec/index.html","4ec8e331bb143ab22007700d4260a0f7"],["/2020/03/31/bitwarden/index.html","286491af2d8fe18bebe6792192214291"],["/2020/04/03/Layer/index.html","033d5222e49e390f9ad4a30d2d244b62"],["/2020/04/04/color/index.html","625a4a8dda21fc134be23bb875657e76"],["/2020/04/09/wireless_framework/index.html","20f1eafab098a74bc078fed834b843ce"],["/2020/04/13/manage-MAN-skill/index.html","cb1f769ba1d2f1d15735787bc29b403f"],["/2020/04/13/structure-of-MAN/index.html","b5d30c1c9e68aba5c8e30698b52a6a32"],["/2020/04/20/TD-LTE-System/index.html","9bf39272b93cd6f91329b38b7a55fe0c"],["/2020/04/24/Network_Access/index.html","3f6b15dbb9956eb1b1207754619e7541"],["/2020/04/24/build-MAN-idea/index.html","fc277c748a65fa44366bc1d02b70dfb7"],["/2020/04/25/OFDMA/index.html","af79fdc9863fd7b0e17fceb9206de8d4"],["/2020/05/11/MIMO/index.html","515bdde57c143f90d167d465ec7e72b0"],["/2020/05/12/ICIC/index.html","8caf8a6a3cd8f9913bec76e64ea1a0cf"],["/2020/05/19/No-module-named-pip/index.html","a15e961fa51c9f7b7cc1d7285076f56d"],["/2020/05/19/huawei-PCManager/index.html","ae7dc6c22d0750ac32ee6f82e10a90af"],["/2020/05/19/not-allow-F12/index.html","394bfb358655e7382621675f92fbda69"],["/2020/05/20/python-2/index.html","f4f37a187e067b95491e41a1b6b3d08e"],["/2020/05/23/free-get-189vip/index.html","7a872c1f8f05f56c6d63d91b9ec7879a"],["/2020/05/24/Python-3/index.html","5474938ee59c172fcb295f12a092b629"],["/2020/05/25/Python-4/index.html","7fa19db9d310def131ab70c11e5747c8"],["/2020/05/29/huawei-exam-application/index.html","bfd53996fb3cc587a0737c8baf628171"],["/2020/06/01/Python-5/index.html","4c8c9813e5e4f3687bce5e1c89fba1d9"],["/2020/06/11/lanzous/index.html","cec2bf0ba13fe95c1e6048e7344d15b7"],["/2020/06/13/mysql-install/index.html","53dba853540b1db721c6c5adf7b3a771"],["/2020/07/07/Python_cards_manage/index.html","c3d0c328f824d7d3b86938ef0c3441ca"],["/2020/07/07/Python_variable/index.html","fe14104203cb38e4291a05d376bcd7a5"],["/2020/07/17/computer_Internet_1/index.html","901eada24a0cf0d1c79135042694e751"],["/2020/08/13/Files_and_directories/index.html","07a9158f4fe6587b9f533e9d2633e6a5"],["/2020/08/13/system_info/index.html","5e9041935c40938aca3f1461c6b262bb"],["/ByteDanceVerify.html","e1adddab45735a0bb8f4eea71bedeb0a"],["/about/index.html","40bed6947e83773b3cc1d39346c17689"],["/archives/2020/02/index.html","ae3e6a30b0c446f8acdfd23083bd8786"],["/archives/2020/02/page/2/index.html","89edeea66762a994982c4ae4a8d71e7b"],["/archives/2020/03/index.html","bf52243bdee91e7ff8c07fd0e02982e9"],["/archives/2020/03/page/2/index.html","0e472d0405da2b5be89fc90511ce0ee4"],["/archives/2020/04/index.html","c64981343150768766d05b3cc40ddf66"],["/archives/2020/05/index.html","a3f4693c874d2de703f57de53f4ec6ce"],["/archives/2020/06/index.html","24c38a94cc056f4517baa9979d14207d"],["/archives/2020/07/index.html","e9dd121cfc41fbb5f7d7e92dc62f4194"],["/archives/2020/08/index.html","e44aaa6da61c9b8090e318ce04e3abd6"],["/archives/2020/index.html","58efcd8c4a1cce3f92088d31a8b36d42"],["/archives/2020/page/2/index.html","c8d4fc2de74c126f462abdab69470b89"],["/archives/2020/page/3/index.html","6708d9e42a1456348c3745ebb00dcb9f"],["/archives/2020/page/4/index.html","c234506e34e91f38280f1c5fcffc76aa"],["/archives/2020/page/5/index.html","7c3c75c2a0efe4cf88809f20ce818413"],["/archives/2020/page/6/index.html","2f2dcc314f1973820c5e283826aacc64"],["/archives/categories/技术/HP交换机配置.html","dc078fca735033bbb43dcb4590b63a17"],["/archives/index.html","d28b823e2ced79dc929ec43b515871a9"],["/archives/page/2/index.html","d28b823e2ced79dc929ec43b515871a9"],["/archives/page/3/index.html","d28b823e2ced79dc929ec43b515871a9"],["/archives/page/4/index.html","8e5183e4a6476deb72963d998b8a5f7e"],["/archives/page/5/index.html","8e5183e4a6476deb72963d998b8a5f7e"],["/archives/page/6/index.html","8e5183e4a6476deb72963d998b8a5f7e"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux/index.html","9017e00e9aefd9cae4283c47c77a26bd"],["/categories/Photoshop/index.html","28028975373e2d2a5a203732ac82d2f1"],["/categories/Python/index.html","dae729d8cac9ce37912a7b7eec674896"],["/categories/交换机/index.html","ca7a1e8b7f81dcff36c3e9cebce67479"],["/categories/华为认证/index.html","7c779499d87a47a487003fd8eb3b1b73"],["/categories/小技巧/index.html","b833ebb0c30131b14791ff9ff3ca1d88"],["/categories/数据库/index.html","c3b358fd25e65dc384c82dfc32a9dda4"],["/categories/服务器/index.html","4088bb4911dbe7783fe965f4f716ba5a"],["/categories/网络安全/index.html","5ea3bd72515360e577f2a66fe7992567"],["/categories/计算机三级/index.html","dbe775944b7dd02fe478daa6439c90b2"],["/categories/计算机网络/index.html","1421f8566031e40d9f3f319308b6d224"],["/categories/软件破解/index.html","39b4e5e61759eb700ee66ac04f1ac37d"],["/categories/通信技术/index.html","e633afaaf4badeb6644bd4f9a66b68af"],["/categories/通信技术/page/2/index.html","b02d4ecc28194e9371a3334069625780"],["/category/index.html","105da0cd41257b19a29b3737d3d3689d"],["/css/style.css","940a599036b2a40f1cda8deba1fa0555"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["/friends/index.html","bf36a06d0105cf975feb46bab4387b7c"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/index.html","6ead0b48132b2ddde7817dd9bad434d0"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","804e218b8d00f3db3d393a7811cc0f3c"],["/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/mylist/index.html","afe8be6d578d9a99d66b13d5b8abccff"],["/page/2/index.html","2e5579054f2a618fc37be490013f0648"],["/page/3/index.html","0468530b748ac91c263d56ad01829cdf"],["/page/4/index.html","9f657c904ac9423229ffbfda85472a49"],["/page/5/index.html","4ec8e1def15c605946869e705485dc12"],["/page/6/index.html","6e08bcb16924e77e3f761f1e9cee21a3"],["/service-worker.js","c9b3048a317c2d2bd2cc91a350e1c535"],["/sw-register.js","d2cb0eee711ceb21e99ff26af6e5140f"],["/tags/IIS/index.html","a31f9b14d64485c49659306132e50376"],["/tags/MySQL/index.html","03cf2afc15a97205a7895087a4535fed"],["/tags/Photoshop/index.html","e596d36272acfa2b3584d6366c83a90b"],["/tags/VPN/index.html","908151872453760588a16f4018e9361d"],["/tags/Web服务器/index.html","e6eecbe98e97addca26a4bc15f69f265"],["/tags/index.html","46390b2ee5c48685a3c7c6dc0f5112ef"],["/tags/交换机/index.html","729d32af698d6b51564131d6317a49aa"],["/tags/图像处理/index.html","e276d87aa48447ac42c2a928b24204db"],["/tags/基础网络/index.html","1ff7918696dc61d94bde69a8375208fe"],["/tags/思科/index.html","b7e4133cee23d65d7058df40f410e9e5"],["/tags/思科GRE/index.html","1beeab98fa83641c403f93bd3615cbc7"],["/tags/数据库/index.html","44ab6d85fa3a809bffc1690790a0fc1c"],["/tags/无线技术/index.html","f1223e7d8f5959b83f0b3ce394764ef2"],["/tags/无线技术/page/2/index.html","d5595ef9e79c89f483c68963569c78d8"],["/tags/系统安装/index.html","a6013427b7ba4a39fe7f277a47da0006"],["/tags/网络安全/index.html","d73ce1dc8d0538676c28f1f1906cd4a2"],["/tags/网络技术/index.html","da867e49a4338c89e0eaafd20242fd5f"],["/tags/计算机三级/index.html","faf321c248d7d42ca6d29d3e837fd971"],["/tags/路由器/index.html","2cb894f5f87344199717b99278321b69"],["/tags/软考/index.html","b554bde34bfde7476935f2898404e6ab"],["/tags/通信原理/index.html","17dc3626acb9be26a9305c1e7566ba87"],["/tags/通信原理/page/2/index.html","c35c22480919f8b329bf7f83ddfd8741"],["/tags/通信技术/index.html","ddc27cc4d04aa11ccf5cca242c3cccc7"],["/tags/通信技术/page/2/index.html","7911217da3241793ba1dbdc47b810ac4"]];
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
