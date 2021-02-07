/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["/2020/02/14/RedHat_setup_script/index.html","413af795ddff4d1ea87803f4700a5745"],["/2020/02/14/Windows_Web_build_environment/index.html","87119d5302b21d0357eb2d27748ab926"],["/2020/02/14/Windows_Web_build_website/index.html","bcd21e3365bff9914f3721d5333ad8f0"],["/2020/02/15/Web_site_SSL/index.html","75a2abd4d800ccf0246f70c41c9fd4a8"],["/2020/02/15/Windows_Web_often_use/index.html","437fb7fa78fa1bdc08356f88f12eafd3"],["/2020/02/15/a_server_build_many_webs/index.html","0fbb989d22ca8b7bb169bfa9005a24b3"],["/2020/02/24/ssh/index.html","42a9b8833c0b1a6825a19202c55e39ff"],["/2020/02/27/MySQL8_basics/index.html","996b0cecd21ee00eb54b644a6063e213"],["/2020/02/27/OLT_command/index.html","89b2834f0ce5eadaeed24fb36d0db780"],["/2020/02/27/computer_network_basics/index.html","649b99fb1c51d14213dd55aafaa1023a"],["/2020/02/27/switchport-security/index.html","24dc2db29ee20bc886e59eaee686fe95"],["/2020/03/04/acl/index.html","90557e1b0e9de9ec1905f66e07d02470"],["/2020/03/06/mobile_communication/index.html","495b49ca163034ce83d973a300e3490b"],["/2020/03/06/wireless_word/index.html","02d540af125df24fda1efb14a3ed2178"],["/2020/03/07/3G/index.html","9ac09d2b544d7e9ed2f0fd21cf24c681"],["/2020/03/07/GSM/index.html","93663760e36f5594f130c78b78e41216"],["/2020/03/07/IP_Bearer_Network_basic/index.html","9f58d9acc6bc7a26cedeb316f68e119b"],["/2020/03/07/LTE/index.html","3f0cb2cd67aae1487da3b32f50e36138"],["/2020/03/07/NB-IoT/index.html","eb93bf5445d5eb0c6b40b8c21d32b9b3"],["/2020/03/07/optical_transport_network_basic/index.html","4fe51892bc95a974b8bfd3fd0c3e7660"],["/2020/03/07/wireless_radio/index.html","d2e4aad0b5dd836da5e9ea82e3bff0be"],["/2020/03/11/Linux_often_use/index.html","a1cdbfbfbf0c6572b73eb3d7c6a5e14d"],["/2020/03/11/Python_basic_(1)/index.html","4a8496ec0f3c81eb294be726163f61b2"],["/2020/03/21/GRE-VPN/index.html","21a093157ce0c76de85f4a1fed29bf83"],["/2020/03/25/IPSec_VPN/index.html","bd6f030c81ec8e7c1a0ab8b9a7a60872"],["/2020/03/29/FixedTools/index.html","1909f4574f071b1b2a9c21759b4ad87d"],["/2020/03/30/GRE-over-IPSec/index.html","b90190b8657cc7885c60da7765c756c9"],["/2020/03/31/bitwarden/index.html","0889b9031efaf53169c89b2389c5b067"],["/2020/04/03/Layer/index.html","971e269e9a653eedd2b7df7c0715dc26"],["/2020/04/04/color/index.html","c9be92c513ef28bb12f2e0b9aaf54aec"],["/2020/04/09/wireless_framework/index.html","229b3cda4c136029e1f1c6fd0e2a6a7c"],["/2020/04/13/manage-MAN-skill/index.html","e9833465fc6dc2e9c3891d97f4b020a8"],["/2020/04/13/structure-of-MAN/index.html","e775b4dbed7c9170351726e1ce92fb8d"],["/2020/04/20/TD-LTE-System/index.html","1607bb1df9b927e89cbdcea83a2eb801"],["/2020/04/24/Network_Access/index.html","eccc0a8ebfb6871cded9d0a94bd2f077"],["/2020/04/24/build-MAN-idea/index.html","7c050331202065a748d6d7fdfe1928cf"],["/2020/04/25/OFDMA/index.html","bf390f354489fec111b5f78cb1490ac5"],["/2020/05/11/MIMO/index.html","2803368162de7d0f62634dd6838f4d87"],["/2020/05/12/ICIC/index.html","8b31f38bb45db8f54fd3e10df2078d7a"],["/2020/05/19/No-module-named-pip/index.html","1d3528507d3bf87b67c87bd04fff1329"],["/2020/05/19/huawei-PCManager/index.html","fc8043d4918e4d287252af5a658ab692"],["/2020/05/19/not-allow-F12/index.html","d4ccd50cb558dcf31e42cb68f2b42802"],["/2020/05/20/python-2/index.html","51ac5f88b6628a65b7619c986bcbd6f1"],["/2020/05/23/free-get-189vip/index.html","8cf0e29189edf81addaff87f3bd65790"],["/2020/05/24/Python-3/index.html","8ebdcfb10dabab2547c3266cf2f622aa"],["/2020/05/25/Python-4/index.html","c3adebbda40f70ad1d09be6018ae3c97"],["/2020/05/29/huawei-exam-application/index.html","d7df922ac9ba725fa29ccfa0327a3bd4"],["/2020/06/01/Python-5/index.html","973064f41a1a49f5b6deae9de58226d9"],["/2020/06/11/lanzous/index.html","d2206aeff9742365bca788e8ac433992"],["/2020/06/13/mysql-install/index.html","3ba5e26c58a849bdffe27553d8d5f80d"],["/2020/07/07/Python_cards_manage/index.html","e0b4cc0502f9270abb620119e3831153"],["/2020/07/07/Python_variable/index.html","a4f3e6155ce69bffd1f4b86734cb5de1"],["/2020/07/17/computer_Internet_1/index.html","ac53a78fe716954150f402cacc4a1237"],["/2020/08/13/Files_and_directories/index.html","a9f0367b7915e8ff1dfc18b7862bcedd"],["/2020/08/13/system_info/index.html","6b1b8ea0fe64e9058db8cd50b06b44d6"],["/2020/10/01/5G网络优化/index.html","112e38318b5d93937c9c5a76343671b8"],["/2020/10/05/linux/index.html","0003c25eb7208e17882d7606d7a7d967"],["/2020/10/20/Design_patterns_1/index.html","b4f10f3d70cf2a65449e80a0fb18904a"],["/2020/11/01/network_security_comprehensive/index.html","1398f475932758680aec0aff54255881"],["/2020/12/15/C_basic/index.html","b8f3412c0b55be5a6008b985b124a2c2"],["/ByteDanceVerify.html","e8d9d4cccc839c01d1c0821ebfe48199"],["/about/index.html","3607f8facb818b7d3129a8a774e88241"],["/archives/2020/02/index.html","57981b52e023dd49ca418e209f15d2f3"],["/archives/2020/02/page/2/index.html","e500fcfdb17fa97735f4c1b340aaccac"],["/archives/2020/03/index.html","8209aee17fae4ee58cbbca390604c8d0"],["/archives/2020/03/page/2/index.html","479eab5a5984fff271c2f59a998505bb"],["/archives/2020/04/index.html","37e751a83b66d294fe77a5cb4a2e80dd"],["/archives/2020/05/index.html","a1e414810bffd980b82f15fc12897f3e"],["/archives/2020/06/index.html","c9a10a6f97a05f187801988e277a4651"],["/archives/2020/07/index.html","3ec2521d613a787722d76168cdb194ea"],["/archives/2020/08/index.html","32521b7b9e62025aafbc0d4ca9d47926"],["/archives/2020/10/index.html","fa3169eb429f85929bf5f77e2777dfa7"],["/archives/2020/11/index.html","357b48eb13227228fb72549179aaf907"],["/archives/2020/12/index.html","76c4aed2e3b02a8cee7f021474f391b3"],["/archives/2020/index.html","d4b1698bc4edf7a78d6004f45ec89c5f"],["/archives/2020/page/2/index.html","2cf876276db3a881932669765c740204"],["/archives/2020/page/3/index.html","b465ab338f3f688f0a5c99b04f65ddbd"],["/archives/2020/page/4/index.html","ecc55551702bd65c055dc683e41151c9"],["/archives/2020/page/5/index.html","2d82f22aa8770042851bc4fd200d5f1f"],["/archives/2020/page/6/index.html","f53394e879fa975af28885fcc0979ea8"],["/archives/categories/技术/HP交换机配置.html","be8c8d46591757569d08bd8803d3e3ec"],["/archives/index.html","f172a7f7a55895c1764954db30d2e81f"],["/archives/page/2/index.html","a3cb489c75d6439c92c35c353ae942c6"],["/archives/page/3/index.html","f172a7f7a55895c1764954db30d2e81f"],["/archives/page/4/index.html","a3cb489c75d6439c92c35c353ae942c6"],["/archives/page/5/index.html","a3cb489c75d6439c92c35c353ae942c6"],["/archives/page/6/index.html","a3cb489c75d6439c92c35c353ae942c6"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C语言/index.html","372420b4262c44c82c1b9325c51a57fa"],["/categories/Java/index.html","4b808484d9ca4127679ed1b9b4d92a6b"],["/categories/Linux/index.html","f253992c46f886d70fef2d284ca1cb3d"],["/categories/Photoshop/index.html","079d67c7a6b2b147d23df503efc8feb4"],["/categories/Python/index.html","78719a269ce5b18744de7dbbb359ea60"],["/categories/交换机/index.html","6dedb46b6502d4ed4ea29da197719aee"],["/categories/华为认证/index.html","699fad09cbfbc10489a1bbfbe2865675"],["/categories/小技巧/index.html","6f99cbd37b702c02a277d414b9cefb90"],["/categories/数据库/index.html","530f4f425cf6fdca5a3788c9d621bb2b"],["/categories/服务器/index.html","be7abde8272ce666fe3d5d1f62411502"],["/categories/网络安全/index.html","71c016e4d58e705dd627af33ed4ea42e"],["/categories/计算机三级/index.html","ffa31bb3152783f038b291f9511c72ee"],["/categories/计算机网络/index.html","f17002ecc9d5b3ff3c54e8e2081f7fae"],["/categories/软件破解/index.html","dfc7622aa41d1fa5a586aa275f1de5a1"],["/categories/通信技术/index.html","152e2a296632873c38a2114f36901ecc"],["/categories/通信技术/page/2/index.html","976e076218af3c990309917db06ec72a"],["/category/index.html","c54b43a69f6547c8cd7176fb35f438ec"],["/css/style.css","940a599036b2a40f1cda8deba1fa0555"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/index.html","ea675e44238c385c64bee9738cf067dc"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","804e218b8d00f3db3d393a7811cc0f3c"],["/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/mylist/index.html","aa01c6605389fd5321b850dc6c453a3c"],["/page/2/index.html","387c64aeab7d71ef562cfd647c2d7d2b"],["/page/3/index.html","5d79872558e2124a52a7f9ec18d81f75"],["/page/4/index.html","7193f7cbfe8dd0cd89153405ec33611a"],["/page/5/index.html","6eccee756da7f6dbdf6a276a54c81d52"],["/page/6/index.html","10a6f18470ba3b07483960b1042d0cbe"],["/service-worker.js","33e4ea77c27a2931317b1a1f354a90d8"],["/sw-register.js","54f1f6b431fe3e46553f4714baa10520"],["/tags/IIS/index.html","010877a5eb4d147c6c2231d3b7b80094"],["/tags/MySQL/index.html","07aeb0ac02fcd405b5586adb90cf3eeb"],["/tags/Photoshop/index.html","8c34fbc948b9131ce6eb1716457b7e6a"],["/tags/VPN/index.html","0b82a46c2988060b3fe65b67f3bbdd3f"],["/tags/Web服务器/index.html","36c538bfcd4dcd5991692afe9726fe8f"],["/tags/index.html","418587eab468949ec56c048bc93f7e5e"],["/tags/交换机/index.html","bf61520a87fc72578b3d6f26fa5f2414"],["/tags/图像处理/index.html","3ae00d425c0a9b7774fc392896a3d6e1"],["/tags/基础网络/index.html","1eb0be63d2491865f0bcd34dc231caab"],["/tags/思科/index.html","fef480d73ac45866d24cbd618383d93e"],["/tags/思科GRE/index.html","c421214a724f4334094437328c62bf00"],["/tags/数据库/index.html","e9e7cd07468bfed09548b7a2aaef4449"],["/tags/无线技术/index.html","17bc62244dc40466157dd8bda599ddb0"],["/tags/无线技术/page/2/index.html","a24f26c2d6e73e8278d1c12e7ddc5129"],["/tags/系统安装/index.html","c6d61e99b265e0f386f1e17a4f7ec71a"],["/tags/网络安全/index.html","dd99c2d99ed92f5747f8ade09bcfc24a"],["/tags/网络技术/index.html","5f27ce61b00b88c8ccb1038701c7a287"],["/tags/计算机三级/index.html","e8d71314dcf706690b6177373ff2cef9"],["/tags/路由器/index.html","13ac0b93e46b72f650e827bde1e7d9b2"],["/tags/软考/index.html","c751e4029a6317eb579fdb191d6e70a7"],["/tags/通信原理/index.html","ea9c7861f7f15de25be8c3a53b44f503"],["/tags/通信原理/page/2/index.html","fdaeac93d322811c26222802d43937f9"],["/tags/通信技术/index.html","db85e57d3d72483349061483103d711a"],["/tags/通信技术/page/2/index.html","9a299ed5766d5a350e6eb2e4cdfc6262"]];
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
