/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["/2020/02/14/RedHat_setup_script/index.html","a562500b52e00fd2a65a600c4198bb27"],["/2020/02/14/Windows_Web_build_environment/index.html","69ed38691e63d32c9caa58f640ce373a"],["/2020/02/14/Windows_Web_build_website/index.html","09653c944759f1f113218f7da65f49f4"],["/2020/02/15/Web_site_SSL/index.html","9191df3ca466c6e5e57f37da89dffc11"],["/2020/02/15/Windows_Web_often_use/index.html","d485e35d50adf4f3a1cd9dbfa68bfee5"],["/2020/02/15/a_server_build_many_webs/index.html","cb6a3b52ce43b728ae6ba753769fc454"],["/2020/02/24/ssh/index.html","ef79f2ec1a9dabc95405e721b85d2440"],["/2020/02/27/MySQL8_basics/index.html","0f20d1c57c9c4be00872f3df4c5d1ea8"],["/2020/02/27/OLT_command/index.html","d914fc6f50586196cc89ae44460266ee"],["/2020/02/27/computer_network_basics/index.html","ba3d23b58e7c9561c157526b830727f0"],["/2020/02/27/switchport-security/index.html","a9864aed6935e41ad5ef59eb9ccfc82a"],["/2020/03/04/acl/index.html","f5f86400c6bd3b1a022a84211ba22a94"],["/2020/03/06/mobile_communication/index.html","3faf52c0a1fd0165ca555a9e98a95328"],["/2020/03/06/wireless_word/index.html","65cd1671e438673301c5bb435b28246c"],["/2020/03/07/3G/index.html","2018f41862f4fef8789f5d24e5863b50"],["/2020/03/07/GSM/index.html","8529f8aac12cccdcb720c574ad065351"],["/2020/03/07/IP_Bearer_Network_basic/index.html","be4ae6a295560af160658e54530d17f0"],["/2020/03/07/LTE/index.html","d1f703a675f1c92b249ceabaefcd9a70"],["/2020/03/07/NB-IoT/index.html","8feb13065df45be96bd1f63ca74489a3"],["/2020/03/07/optical_transport_network_basic/index.html","075f1c835c70eb28f896cdd951837928"],["/2020/03/07/wireless_radio/index.html","78a8571bebb9544f574ccacfa32c3bf0"],["/2020/03/11/Linux_often_use/index.html","e9894de1cae0dee1b5f4c38ae2b1f1c4"],["/2020/03/11/Python_basic_(1)/index.html","f186513ec648d4378831eccc6ff44de5"],["/2020/03/21/GRE-VPN/index.html","7f93dbfeffc014964b2f14acb6d775b7"],["/2020/03/25/IPSec_VPN/index.html","f268cc60b42c6052acbaed74ec043f26"],["/2020/03/29/FixedTools/index.html","c0e6ff84171c55dd90c465cce17ec0f5"],["/2020/03/30/GRE-over-IPSec/index.html","4ec8e331bb143ab22007700d4260a0f7"],["/2020/03/31/bitwarden/index.html","286491af2d8fe18bebe6792192214291"],["/2020/04/03/Layer/index.html","033d5222e49e390f9ad4a30d2d244b62"],["/2020/04/04/color/index.html","625a4a8dda21fc134be23bb875657e76"],["/2020/04/09/wireless_framework/index.html","20f1eafab098a74bc078fed834b843ce"],["/2020/04/13/manage-MAN-skill/index.html","cb1f769ba1d2f1d15735787bc29b403f"],["/2020/04/13/structure-of-MAN/index.html","b5d30c1c9e68aba5c8e30698b52a6a32"],["/2020/04/20/TD-LTE-System/index.html","9bf39272b93cd6f91329b38b7a55fe0c"],["/2020/04/24/Network_Access/index.html","3f6b15dbb9956eb1b1207754619e7541"],["/2020/04/24/build-MAN-idea/index.html","fc277c748a65fa44366bc1d02b70dfb7"],["/2020/04/25/OFDMA/index.html","af79fdc9863fd7b0e17fceb9206de8d4"],["/2020/05/11/MIMO/index.html","515bdde57c143f90d167d465ec7e72b0"],["/2020/05/12/ICIC/index.html","8caf8a6a3cd8f9913bec76e64ea1a0cf"],["/2020/05/19/No-module-named-pip/index.html","a15e961fa51c9f7b7cc1d7285076f56d"],["/2020/05/19/huawei-PCManager/index.html","ae7dc6c22d0750ac32ee6f82e10a90af"],["/2020/05/19/not-allow-F12/index.html","394bfb358655e7382621675f92fbda69"],["/2020/05/20/python-2/index.html","f4f37a187e067b95491e41a1b6b3d08e"],["/2020/05/23/free-get-189vip/index.html","7a872c1f8f05f56c6d63d91b9ec7879a"],["/2020/05/24/Python-3/index.html","5474938ee59c172fcb295f12a092b629"],["/2020/05/25/Python-4/index.html","7fa19db9d310def131ab70c11e5747c8"],["/2020/05/29/huawei-exam-application/index.html","bfd53996fb3cc587a0737c8baf628171"],["/2020/06/01/Python-5/index.html","4c8c9813e5e4f3687bce5e1c89fba1d9"],["/2020/06/11/lanzous/index.html","cec2bf0ba13fe95c1e6048e7344d15b7"],["/2020/06/13/mysql-install/index.html","53dba853540b1db721c6c5adf7b3a771"],["/2020/07/07/Python_cards_manage/index.html","c3d0c328f824d7d3b86938ef0c3441ca"],["/2020/07/07/Python_variable/index.html","fe14104203cb38e4291a05d376bcd7a5"],["/2020/07/17/computer_Internet_1/index.html","901eada24a0cf0d1c79135042694e751"],["/2020/08/13/Files_and_directories/index.html","07a9158f4fe6587b9f533e9d2633e6a5"],["/2020/08/13/system_info/index.html","5e9041935c40938aca3f1461c6b262bb"],["/ByteDanceVerify.html","e1adddab45735a0bb8f4eea71bedeb0a"],["/about/index.html","40bed6947e83773b3cc1d39346c17689"],["/archives/2020/02/index.html","71d0c064dcac8d5158314bfecfe1eaf1"],["/archives/2020/02/page/2/index.html","22a926a488d127b2a04b333713c788f7"],["/archives/2020/03/index.html","a70b68249e59dab8420bdbd9f5611aeb"],["/archives/2020/03/page/2/index.html","c0518dfbb8fddeaf8ac9addd85798e6c"],["/archives/2020/04/index.html","6bcefa8cedd6a0139b9da1fad69b054d"],["/archives/2020/05/index.html","1fbde6755a706dfea20468d52bbcd23c"],["/archives/2020/06/index.html","d6b1f04029426c2c8580a502963ee307"],["/archives/2020/07/index.html","5d2812d2c0ff28a0e2c20a8e2cd3adda"],["/archives/2020/08/index.html","c58cc40edc5de02c22a2acd1325e7b95"],["/archives/2020/index.html","dfe82ba41a2e6db423a8766bd3018374"],["/archives/2020/page/2/index.html","74e3db39e3e6bff55ec870411ff12955"],["/archives/2020/page/3/index.html","d82f9204a9a51258c1679c49b2bdaaea"],["/archives/2020/page/4/index.html","8438966ca58eb03a804afcadba88f054"],["/archives/2020/page/5/index.html","58756ced005684718235b112bbb76fe7"],["/archives/2020/page/6/index.html","5b4d29cc14c74f6bbff2ee7cbb5ad8f5"],["/archives/categories/技术/HP交换机配置.html","dc078fca735033bbb43dcb4590b63a17"],["/archives/index.html","3911c405f84c7739b6d375c204ecd959"],["/archives/page/2/index.html","3911c405f84c7739b6d375c204ecd959"],["/archives/page/3/index.html","3911c405f84c7739b6d375c204ecd959"],["/archives/page/4/index.html","2c28d5be94127b03d222c39c6280e156"],["/archives/page/5/index.html","2c28d5be94127b03d222c39c6280e156"],["/archives/page/6/index.html","2c28d5be94127b03d222c39c6280e156"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux/index.html","74e02912dd729f99f24be123cf00c468"],["/categories/Photoshop/index.html","f1390ec7fa0e053ddc177522eaf14aaa"],["/categories/Python/index.html","5fb3f7e4f0bbd23c6c1e455cf3f8effe"],["/categories/交换机/index.html","8b2ed7c1fce8238780bdac4d61aceee7"],["/categories/华为认证/index.html","1fb6ba09c5ab2036fbc7d1e11be6c354"],["/categories/小技巧/index.html","909ef3bbf9b7ba7c82ce90166b36e046"],["/categories/数据库/index.html","c60576d4403046fdd927c3c487ef8f4d"],["/categories/服务器/index.html","a78044e808ab2018463c17b77f3e2635"],["/categories/网络安全/index.html","d689d157bb2360469280145be50bf9b8"],["/categories/计算机三级/index.html","87041104230c1375575448ab40d894bb"],["/categories/计算机网络/index.html","e2b4a3aa9fac91737a9058bfaded5683"],["/categories/软件破解/index.html","83a68aee1cbd7c9920e5b5ad3295bac1"],["/categories/通信技术/index.html","dbc479819e1967fdbee26f880ab101c8"],["/categories/通信技术/page/2/index.html","59a4a2b292679eafbff597ed57f18a89"],["/category/index.html","105da0cd41257b19a29b3737d3d3689d"],["/css/style.css","940a599036b2a40f1cda8deba1fa0555"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["/friends/index.html","bf36a06d0105cf975feb46bab4387b7c"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/index.html","f3bc4af180a7dcd6889013ed1c42e08b"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","804e218b8d00f3db3d393a7811cc0f3c"],["/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/mylist/index.html","6aa9545ac7475d3eb4c79bdc7ff4df42"],["/page/2/index.html","fd301e118c29fde6ac6f785e142ae736"],["/page/3/index.html","9d8df07ee15dc87990121c70d1fe3417"],["/page/4/index.html","2cfa2d9761a69348b1b717b0b5bc0ada"],["/page/5/index.html","820a70a94a8fe92488811e9bf5e8039b"],["/page/6/index.html","9421498e2a85f5c90e75a199965bd13c"],["/service-worker.js","c9b3048a317c2d2bd2cc91a350e1c535"],["/sw-register.js","603c50ef8933476085c0b4086b1f2700"],["/tags/IIS/index.html","f0e7dbb7e787e717372d44e99d6c6547"],["/tags/MySQL/index.html","2ef5ff0bb63da78fea05dcb0efb96b64"],["/tags/Photoshop/index.html","c748f998a4d96cfa78ec72b17d41abe3"],["/tags/VPN/index.html","8fc06a7b9e4cb7916edf2ca586ecce18"],["/tags/Web服务器/index.html","3103198e1c21754f6dd69f8fb0162a56"],["/tags/index.html","46390b2ee5c48685a3c7c6dc0f5112ef"],["/tags/交换机/index.html","8a9c71195a718d33bd8525b31002e8e4"],["/tags/图像处理/index.html","999aeb012d508562e54cd83e73cd8020"],["/tags/基础网络/index.html","08be427d5c8883eac2468c73688c64ee"],["/tags/思科/index.html","ed63d72c2168ead41b00a1602bc80190"],["/tags/思科GRE/index.html","ddd93744a76682c69cd4d5e85a03bf0a"],["/tags/数据库/index.html","ec673acedc163ff6b5985672f57fc11a"],["/tags/无线技术/index.html","03703fedd3a52fd5f6f006824c2ae68a"],["/tags/无线技术/page/2/index.html","a95f7f33ef3d9c9e3418ab709574d2f9"],["/tags/系统安装/index.html","b349aba194417821dbbd0cb863718a4f"],["/tags/网络安全/index.html","90572b2731c5d11d78b14d740fe31e8f"],["/tags/网络技术/index.html","dfb02a21baee82b2bc12c7c7da64826d"],["/tags/计算机三级/index.html","850b46555c52e5df3da9a9781f26fb9a"],["/tags/路由器/index.html","2d243e759bef6acc65b8ef03df640973"],["/tags/软考/index.html","29826ec91abff67b9f79df8d4e89bbe2"],["/tags/通信原理/index.html","fbd2a1181bc2637876ab5f8754a4c946"],["/tags/通信原理/page/2/index.html","b0b637a907e42a0cf32b28fca993fcf0"],["/tags/通信技术/index.html","ede6d05a5c42ad02fea33349ad69e54a"],["/tags/通信技术/page/2/index.html","348ad2e181d44c11702816ae0ab74f7f"]];
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
